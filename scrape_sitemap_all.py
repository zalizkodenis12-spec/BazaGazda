import requests
from bs4 import BeautifulSoup
import json
import re
import os
import sys
from concurrent.futures import ThreadPoolExecutor

sys.stdout.reconfigure(line_buffering=True)

SITEMAP_URL = 'https://budpostach.ua/fx-sitemap/'
OUTPUT_JSON = 'scraped_products_sitemap.json'
IMG_DIR = 'assets/images/products'

def get_technika_sub(url_lower):
    if 'velyka' in url_lower or 'krupnaya' in url_lower or 'kholodil' in url_lower or 'pralni' in url_lower:
        return 'velyka'
    if 'dribna' in url_lower or 'melkaya' in url_lower or 'kuhonnaya' in url_lower or 'pylososy' in url_lower:
        return 'dribna'
    if 'klimat' in url_lower or 'konditsioner' in url_lower or 'obigrivachi' in url_lower:
        return 'klimat'
    if 'vbudovana' in url_lower or 'vstraivaemaya' in url_lower or 'varochni' in url_lower:
        return 'vbudovana'
    return 'all'

def map_category(breadcrumbs):
    # breadcrumbs is a list of strings
    if not breadcrumbs:
        return None
    
    cats_str = [c.lower() for c in breadcrumbs]
    full_str = " | ".join(cats_str)
    
    # "Садова техніка" -> instrument / sadovatehnika
    if 'садова техніка' in full_str:
        return ('instrument', 'sadovatehnika')
        
    # "Побутова техніка" -> technika / ...
    if 'побутова техніка' in full_str:
        return ('technika', get_technika_sub(full_str))
        
    # "Господарчі товари" -> dlyadomu / gospodarchi
    if 'господарчі товари' in full_str:
        if 'сівалк' in full_str or 'сеялк' in full_str:
            return None
        return ('dlyadomu', 'gospodarchi')
        
    # "Інструменти та обладнання" -> instrument / all
    if 'інструменти та обладнання' in full_str or 'инструменты и оборудование' in full_str:
        return ('instrument', 'all')
        
    # "Мото та вело електротранспорт" -> technika / transport
    if 'транспорт' in full_str:
        if 'скутер' in full_str or 'scooter' in full_str or 'шолом' in full_str or 'шлем' in full_str:
            return ('technika', 'transport')
        return None
        
    # "Будматеріали" -> budmaterialy / all
    if 'будматеріали' in full_str or 'стройматериалы' in full_str:
        return ('budmaterialy', 'all')
        
    # "Ручний та витратний інструмент" -> instrument / ruchniy
    if 'ручний та витратний інструмент' in full_str or 'ручной инструмент' in full_str:
        return ('instrument', 'ruchniy')
        
    return None

def process_product(url):
    try:
        r = requests.get(url, timeout=10)
        if r.status_code != 200:
            return None
            
        soup = BeautifulSoup(r.text, 'html.parser')
        
        breadcrumbs = [a.text.strip() for a in soup.select('.breadcrumb a') if a.text.strip()]
        cat_mapping = map_category(breadcrumbs)
        
        if not cat_mapping:
            return None
            
        main_cat, sub_cat = cat_mapping
        
        name_elem = soup.select_one('h1')
        if not name_elem:
            return None
        name = name_elem.text.strip()
        
        # Prices
        price_elem = soup.select_one('.product-page__price')
        
        price = 0
        oldPrice = None
        if price_elem:
            d_price = price_elem.get('data-price', '0')
            d_special = price_elem.get('data-special', '0')
            
            p_val = float(d_price) if d_price else 0
            s_val = float(d_special) if d_special else 0
            
            p_val = int(p_val) if p_val.is_integer() else p_val
            s_val = int(s_val) if s_val.is_integer() else s_val
            
            if s_val > 0:
                price = s_val
                oldPrice = p_val
            else:
                price = p_val
                oldPrice = None
                    
        # ID
        import hashlib
        pid = "bp_" + hashlib.md5(url.encode('utf-8')).hexdigest()[:8]
            
        # Desc
        desc = name
        desc_elem = soup.select_one('#tab-description') or soup.select_one('.product-text')
        if desc_elem:
            desc = desc_elem.text.strip()
            
        # Specs
        specs = []
        spec_text = soup.select_one('.product-page__short-attribute')
        if spec_text:
            lines = [line.strip() for line in spec_text.text.split('\n') if line.strip()]
            for line in lines:
                if ':' in line:
                    parts = line.split(':', 1)
                    specs.append({'label': parts[0].strip(), 'value': parts[1].strip()})
                else:
                    # sometimes it's just value, but we need a label
                    specs.append({'label': 'Характеристика', 'value': line})
        
        # Image
        img_elem = soup.select_one('.product-page__image-main__image')
        img_url = img_elem.get('src') if img_elem else None
        
        if not img_url:
            return None
            
        local_img_path = f"assets/images/products/{pid}.jpg"
        
        return {
            'id': pid,
            'name': name,
            'category': main_cat,
            'subcategory': sub_cat,
            'price': price,
            'oldPrice': oldPrice,
            'desc': desc,
            'images': [local_img_path],
            'specs': specs,
            'available': (price > 0),
            '_src_img': img_url
        }
    except Exception as e:
        return None

def main():
    print("Fetching sitemap...")
    r = requests.get(SITEMAP_URL, timeout=30)
    soup = BeautifulSoup(r.text, 'xml')
    urls = [loc.text for loc in soup.find_all('loc') if '/product/' in loc.text]
    print(f"Found {len(urls)} product URLs in sitemap.")
    
    # We can test with a slice first, or just run all
    results = []
    
    print("Processing products...")
    with ThreadPoolExecutor(max_workers=30) as executor:
        futures = {executor.submit(process_product, url): url for url in urls}
        count = 0
        for future in futures:
            try:
                # 30 second timeout per future to prevent completely hanging
                res = future.result(timeout=30)
            except Exception as e:
                res = None
            count += 1
            if count % 100 == 0:
                print(f"Processed {count}/{len(urls)}")
            if res:
                results.append(res)
                
            # Incremental save every 1000 items
            if count % 1000 == 0:
                with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
                    json.dump(results, f, ensure_ascii=False, indent=2)
                
    print(f"Matched {len(results)} products to target categories.")
    
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print("Saved to JSON.")

if __name__ == '__main__':
    main()
