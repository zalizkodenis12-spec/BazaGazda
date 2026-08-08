import requests
from bs4 import BeautifulSoup
import json
import time
import os
from concurrent.futures import ThreadPoolExecutor, as_completed

CATEGORIES_TO_SCRAPE = [
    ("sadovatehnika", "https://budpostach.ua/category/sadova-tehnika/"),
    ("technika", "https://budpostach.ua/category/pobutova-tekhnika/"),
    ("gospodarchi", "https://budpostach.ua/category/gospodarchi-tovary/"),
    ("instrument", "https://budpostach.ua/category/Instrumenti-obladnannja/"),
    ("transport", "https://budpostach.ua/category/moto-velo-elektro-transport/"),
    ("budmaterialy", "https://budpostach.ua/category/budmateriali/"),
    ("ruchniy", "https://budpostach.ua/category/ruchnyj-ta-vytratnyj-instrument/"),
]

def get_subcategory(cat_id, name):
    name_lo = str(name).lower()
    
    if cat_id == 'technika':
        if any(w in name_lo for w in ['вентилятор', 'кондиціонер', 'обігрівач', 'радіатор', 'тепловентилятор', 'конвектор', 'кліматичн', 'спліт', 'сплiт']):
            return 'klimat'
        if any(w in name_lo for w in ['телевізор', 'холодильник', 'пральна', 'плита', 'духов', 'морозил', 'витяжк', 'бойлер', 'котел', 'поверхня', 'духова шафа', 'посудомийна', 'варильна', 'шафа', 'сушильн']):
            return 'velyka'
        if any(w in name_lo for w in ['вбудован']):
            return 'vbudovana'
        return 'dribna'
    elif cat_id == 'gospodarchi':
        if 'сівалк' in name_lo or 'сивалк' in name_lo:
            return 'skip'
        return 'all'
    
    return 'all'

scraped_products = []
session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

IMAGES_DIR = 'assets/images/products'
if not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

for cat_id, base_url in CATEGORIES_TO_SCRAPE:
    page = 1
    prev_skus = set()
    
    while True:
        url = f"{base_url}?page={page}"
        print(f"Scraping {url}...")
        try:
            r = session.get(url, timeout=15)
        except Exception as e:
            print("Error:", e)
            break
            
        soup = BeautifulSoup(r.content, 'html.parser')
        items = soup.select('.product-thumb')
        
        if not items:
            break
            
        current_skus = set()
        
        for item in items:
            try:
                title_elem = item.select_one('.product-thumb__name')
                if not title_elem: continue
                title = title_elem.text.strip()
                link = title_elem.get('href')
                
                price_elem = item.select_one('.product-thumb__price-new') or item.select_one('.product-thumb__price')
                price_text = price_elem.text.strip().replace(' ', '').replace('грн', '').replace('₴', '') if price_elem else '0'
                price_text = ''.join(c for c in price_text if c.isdigit())
                price = float(price_text) if price_text else 0
                
                # -10% discount
                price = int(price * 0.9)
                
                img_elem = item.select_one('.product-thumb__image img')
                img_url = img_elem.get('src') or img_elem.get('data-src') if img_elem else ''
                
                sku_elem = item.select_one('.product-thumb__model')
                sku = sku_elem.text.replace('Модель:', '').strip() if sku_elem else ''
                
                if sku in current_skus: continue
                current_skus.add(sku)
                
                subcat = get_subcategory(cat_id, title)
                if subcat == 'skip': continue
                
                desc = f"Оригінальний товар: {title}. Артикул: {sku}"
                
                scraped_products.append({
                    'id': f"bp_{sku}",
                    'name': title,
                    'category': cat_id,
                    'subcategory': subcat,
                    'price': price,
                    'oldPrice': None,
                    'desc': desc,
                    'images': [img_url] if img_url else [],
                    'specs': [
                        {'label': 'Артикул', 'value': sku}
                    ],
                    'available': False # user requested to ask availability
                })
            except Exception as e:
                pass
                
        # If current page products are exactly the same as previous page, we reached the end
        if current_skus == prev_skus:
            break
            
        prev_skus = current_skus
        page += 1
        time.sleep(1) # be polite

print(f"Total scraped: {len(scraped_products)}")
with open('scraped_products_raw.json', 'w', encoding='utf-8') as f:
    json.dump(scraped_products, f, ensure_ascii=False, indent=2)

# Download images
def download_img(p):
    pid = p['id']
    img_urls = p.get('images', [])
    if not img_urls: return p
    
    img_url = img_urls[0]
    # some urls might be relative or weird
    if img_url.startswith('//'): img_url = 'https:' + img_url
    elif img_url.startswith('/'): img_url = 'https://budpostach.ua' + img_url
    
    img_filename = f"{pid}.jpg"
    img_filepath = os.path.join(IMAGES_DIR, img_filename)
    
    if not os.path.exists(img_filepath):
        try:
            r = session.get(img_url, timeout=10)
            if r.status_code == 200:
                with open(img_filepath, 'wb') as img_f:
                    img_f.write(r.content)
                p['images'] = [f"assets/images/products/{img_filename}"]
            else:
                p['images'] = []
        except:
            p['images'] = []
    else:
        p['images'] = [f"assets/images/products/{img_filename}"]
        
    return p

print("Downloading images...")
start_time = time.time()
processed = []
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(download_img, p): p for p in scraped_products}
    done = 0
    for future in as_completed(futures):
        processed.append(future.result())
        done += 1
        if done % 100 == 0:
            print(f"Downloaded images for {done}/{len(scraped_products)}...")

print(f"Images finished in {time.time() - start_time:.2f}s")

with open('scraped_products.json', 'w', encoding='utf-8') as f:
    json.dump(processed, f, ensure_ascii=False, indent=2)
print("Saved to scraped_products.json")
