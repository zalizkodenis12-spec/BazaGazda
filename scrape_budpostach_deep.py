import requests
from bs4 import BeautifulSoup
import json
import re
import time
from concurrent.futures import ThreadPoolExecutor
import os
import sys

sys.stdout.reconfigure(line_buffering=True)

BASE_URL = 'https://budpostach.ua'

ROOT_MAPPING = {
    'https://budpostach.ua/category/sadova-tehnika/': ('instrument', 'sadovatehnika'),
    'https://budpostach.ua/category/pobutova-tehnika/': ('technika', 'all'),
    'https://budpostach.ua/category/gospodarchi-tovary/': ('dlyadomu', 'gospodarchi'),
    'https://budpostach.ua/category/Instrumenti-obladnannja/': ('instrument', 'all'),
    'https://budpostach.ua/category/moto-velo-elektro-transport/': ('technika', 'transport'),
    'https://budpostach.ua/category/budmateriali/': ('budmaterialy', 'all'),
    'https://budpostach.ua/category/ruchnyj-ta-vytratnyj-instrument/': ('instrument', 'ruchniy')
}

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

def download_img(url, path):
    if os.path.exists(path):
        return
    try:
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            with open(path, 'wb') as f:
                f.write(r.content)
    except:
        pass

def scrape():
    print("Fetching homepage menu...")
    r = requests.get(BASE_URL)
    soup = BeautifulSoup(r.content, 'html.parser')
    
    # Extract all subcategory links for our target root categories
    urls_to_scrape = []
    
    for li in soup.select('li.menu__level-1-li'):
        a_root = li.select_one('a.menu__level-1-a')
        if not a_root:
            continue
        
        root_url = a_root.get('href')
        if root_url in ROOT_MAPPING:
            main_cat, sub_cat = ROOT_MAPPING[root_url]
            
            # Find all links in this li
            sub_links = []
            for a in li.select('a'):
                href = a.get('href')
                if href and '/category/' in href:
                    sub_links.append(href)
            
            # Remove duplicates, keeping order
            sub_links = list(dict.fromkeys(sub_links))
            for link in sub_links:
                urls_to_scrape.append((link, main_cat, sub_cat, root_url))

    print(f"Found {len(urls_to_scrape)} category URLs to scrape.")
    
    products = []
    seen_ids = set()
    
    session = requests.Session()
    
    cat_idx = 0
    for url, main_cat, sub_cat, root_url in urls_to_scrape:
        cat_idx += 1
        print(f"Scraping category {cat_idx}/{len(urls_to_scrape)}: {url}")
        page = 1
        prev_skus = []
        while True:
            page_url = f"{url}?page={page}"
            try:
                r = session.get(page_url, timeout=10)
            except Exception as e:
                print(f"Error fetching {page_url}: {e}")
                break
                
            cat_soup = BeautifulSoup(r.content, 'html.parser')
            items = cat_soup.select('.product-thumb')
            if not items:
                break
                
            current_skus = []
            for item in items:
                a_tag = item.select_one('.product-thumb__name')
                if not a_tag:
                    continue
                product_url = a_tag['href']
                current_skus.append(product_url)
                
                # Deduplication by ID (using parts of url)
                pid = "bp_" + re.sub(r'\\D', '', product_url.split('-')[-1].replace('/', ''))
                if not pid or pid == "bp_":
                    pid = "bp_" + str(hash(product_url))[-8:]
                    
                if pid in seen_ids:
                    continue
                
                name = a_tag.text.strip()
                
                # Transport filter
                if sub_cat == 'transport':
                    name_lo = name.lower()
                    if 'скутер' not in name_lo and 'scooter' not in name_lo:
                        continue
                
                # Technika dynamic subcategory
                actual_sub_cat = sub_cat
                if main_cat == 'technika' and sub_cat == 'all':
                    actual_sub_cat = get_technika_sub(url.lower() + " " + name.lower())
                
                price_elem = item.select_one('.product-thumb__price-new') or item.select_one('.product-thumb__price')
                price = 0
                if price_elem:
                    ptext = price_elem.text.replace(' ', '').replace('грн', '').replace('₴', '').replace(',', '.')
                    match = re.search(r'\d+(?:\.\d+)?', ptext)
                    if match:
                        price = float(match.group())
                        if price.is_integer():
                            price = int(price)
                
                img_tag = item.select_one('.product-thumb__image img')
                img_url = img_tag.get('src') or img_tag.get('data-src') if img_tag else ''
                local_img_path = f"assets/images/products/{pid}.jpg"
                
                # Code 1C / SKU is not always on the category page, so we will use the ID
                specs = [{'label': 'Код товару', 'value': pid.replace('bp_', '')}]
                
                products.append({
                    'id': pid,
                    'name': name,
                    'category': main_cat,
                    'subcategory': actual_sub_cat,
                    'price': price,
                    'oldPrice': None,
                    'desc': name,
                    'images': [local_img_path],
                    'specs': specs,
                    'available': False,
                    '_src_img': img_url
                })
                seen_ids.add(pid)
                
            if current_skus == prev_skus:
                break
            prev_skus = current_skus
            page += 1
            time.sleep(0.1)

    print(f"Scraped {len(products)} products total.")
    
    # Sort products by name
    products.sort(key=lambda x: x['name'])
    
    # Download images
    print("Downloading images...")
    os.makedirs('assets/images/products', exist_ok=True)
    with ThreadPoolExecutor(max_workers=20) as executor:
        for p in products:
            if p['_src_img']:
                executor.submit(download_img, p['_src_img'], p['images'][0])
                
    for p in products:
        del p['_src_img']
        
    with open('scraped_products_deep.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)
        
    print("Saved to scraped_products_deep.json")

if __name__ == '__main__':
    scrape()
