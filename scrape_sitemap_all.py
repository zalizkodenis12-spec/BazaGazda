import requests
from bs4 import BeautifulSoup
import json
import re
import os
import sys
import hashlib
from concurrent.futures import ThreadPoolExecutor

sys.stdout.reconfigure(line_buffering=True)

SITEMAP_URL = 'https://budpostach.ua/fx-sitemap/'
OUTPUT_JSON = 'scraped_products_sitemap.json'
IMG_DIR = 'assets/images/products'

def map_category(breadcrumbs):
    if not breadcrumbs: return None
    
    cats_str = [c.lower() for c in breadcrumbs]
    full_str = " | ".join(cats_str)
    
    # Exact subcategory name from the site
    sub_cat = breadcrumbs[-1]
    if sub_cat.lower() == 'головна' or sub_cat.lower() == 'главная':
        return None
        
    if 'посуд' in full_str or 'посуда' in full_str:
        return ('posud', sub_cat)
    if 'садова техніка' in full_str or 'садовая техника' in full_str:
        return ('sadovatehnika', sub_cat)
    if 'побутова техніка' in full_str or 'бытовая техника' in full_str:
        return ('technika', sub_cat)
    if 'господарчі товари' in full_str or 'хозяйственные товары' in full_str:
        if 'сівалк' in full_str or 'сеялк' in full_str: return None
        return ('gospodarchi', sub_cat)
    if 'ручний та витратний інструмент' in full_str or 'ручной инструмент' in full_str:
        return ('ruchniy', sub_cat)
    if 'інструменти та обладнання' in full_str or 'инструменты и оборудование' in full_str:
        return ('instrument', sub_cat)
    if 'будматеріали' in full_str or 'стройматериалы' in full_str:
        return ('budmaterialy', sub_cat)
    if 'транспорт' in full_str:
        if 'скутер' in full_str or 'scooter' in full_str or 'електроскутер' in full_str or 'шолом' in full_str or 'шлем' in full_str:
            return ('transport', sub_cat)
            
    return None

def process_product(url):
    try:
        r = requests.get(url, timeout=10)
        if r.status_code != 200:
            return None
            
        soup = BeautifulSoup(r.text, 'html.parser')
        
        breadcrumbs = [a.text.strip() for a in soup.select('.breadcrumb a, .breadcrumb span') if a.text.strip()]
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
        pid = "bp_" + hashlib.md5(url.encode('utf-8')).hexdigest()[:8]
            
        # Desc
        desc = name
        desc_elem = soup.select_one('#tab-description') or soup.select_one('.product-text')
        if desc_elem:
            desc = desc_elem.text.strip()
            
        # Specs & Brand
        specs = []
        brand = "Інший"
        spec_text = soup.select_one('.product-page__short-attribute')
        if spec_text:
            lines = [line.strip() for line in spec_text.text.split('\n') if line.strip()]
            for line in lines:
                if ':' in line:
                    parts = line.split(':', 1)
                    lbl = parts[0].strip()
                    val = parts[1].strip()
                    specs.append({'label': lbl, 'value': val})
                    if 'Виробник' in lbl or 'Бренд' in lbl:
                        brand = val
                else:
                    specs.append({'label': '-', 'value': line})
                    if 'Виробник' in line:
                        brand = line.replace('Виробник', '').strip()
        
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
            'brand': brand,
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
    
    results = []
    
    print("Processing products...")
    with ThreadPoolExecutor(max_workers=30) as executor:
        futures = {executor.submit(process_product, url): url for url in urls}
        count = 0
        for future in futures:
            try:
                res = future.result(timeout=30)
            except Exception as e:
                res = None
            count += 1
            if count % 100 == 0:
                print(f"Processed {count}/{len(urls)}")
            if res:
                results.append(res)
                
            if count % 1000 == 0:
                with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
                    json.dump(results, f, ensure_ascii=False, indent=2)
                
    print(f"Matched {len(results)} products to target categories.")
    
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print("Saved to JSON.")

if __name__ == '__main__':
    main()
