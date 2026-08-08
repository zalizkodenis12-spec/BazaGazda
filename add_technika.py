import pandas as pd
import json
import os
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

EXCEL_FILE = "ПТ_ПРАЙС_З_ФОТО_ПТ_15_07_2026_ (3).xlsx"
CATALOG_JS_FILE = 'assets/js/catalog.js'
IMAGES_DIR = 'assets/images/products'

if not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

print("Loading Excel...")
df = pd.read_excel(EXCEL_FILE)

products_to_add = []

def get_subcategory(name):
    name_lo = str(name).lower()
    if any(w in name_lo for w in ['вентилятор', 'кондиціонер повітр', 'обігрівач', 'радіатор', 'тепловентилятор', 'конвектор']):
        return 'klimat'
    if any(w in name_lo for w in ['телевізор', 'холодильник', 'пральна машин', 'плита', 'духов', 'морозил', 'витяжк', 'бойлер', 'котел', 'поверхня', 'духова шафа']):
        return 'velyka'
    if any(w in name_lo for w in ['блендер', 'міксер', 'м\'ясорубк', 'пилосос', 'праска', 'фен', 'кавовар', 'мультивар', 'ваги', 'гриль', 'тостер', 'електрочайник', 'кавомол', 'соковижимал', 'млинниця', 'електричн', 'чайник']):
        return 'dribna'
    return 'dribna'

for idx, row in df.iterrows():
    # ['Група...', 'Код', 'Код 1С', 'Назва', 'Артикул', 'Ціна Опт', 'Ціна Дрібний опт', 'Ціна Вел Опт', 'Залишок', 'URL']
    # Indices: 2: Код 1С, 3: Назва, 4: Артикул, 5: Ціна Опт, 9: URL
    code_1c = str(row.iloc[2]).strip()
    name = str(row.iloc[3]).strip()
    article = str(row.iloc[4]).strip()
    
    try:
        price = float(row.iloc[5])
    except:
        price = 0
        
    img_url = str(row.iloc[9]).strip() if pd.notna(row.iloc[9]) else ""
    if img_url.lower() == 'nan':
        img_url = ""
        
    desc = f"Оригінальний товар: {name}. Артикул: {article}. Код 1С: {code_1c}"
    
    products_to_add.append({
        'id': f"pt_{code_1c}", # unique prefix for this catalog
        'name': name,
        'category': 'technika',
        'subcategory': get_subcategory(name),
        'price': price,
        'oldPrice': None,
        'desc': desc,
        'images': [img_url] if img_url else [],
        'specs': [
            {'label': 'Артикул', 'value': article},
            {'label': 'Код 1С', 'value': code_1c}
        ],
        'available': True
    })

print(f"Extracted {len(products_to_add)} products.")

def process_product(p):
    pid = p['id']
    img_url = p['images'][0] if p['images'] else ''
    
    local_img_path = ''
    if img_url:
        img_filename = f"{pid}.jpg"
        img_filepath = os.path.join(IMAGES_DIR, img_filename)
        if not os.path.exists(img_filepath):
            try:
                r = requests.get(img_url, timeout=10)
                if r.status_code == 200:
                    with open(img_filepath, 'wb') as img_f:
                        img_f.write(r.content)
                    local_img_path = f"assets/images/products/{img_filename}"
            except Exception as e:
                pass
        else:
            local_img_path = f"assets/images/products/{img_filename}"
            
    p['images'] = [local_img_path] if local_img_path else []
    return p

print("Downloading images...")
start_time = time.time()
processed_products = []
with ThreadPoolExecutor(max_workers=20) as executor:
    futures = {executor.submit(process_product, p): p for p in products_to_add}
    done_count = 0
    for future in as_completed(futures):
        processed_products.append(future.result())
        done_count += 1
        if done_count % 50 == 0:
            print(f"Processed {done_count}/{len(products_to_add)} images...")

print(f"Images downloaded in {time.time() - start_time:.2f} seconds.")

# Now rewrite catalog.js
print("Updating catalog.js...")

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"

start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    products_json_str = catalog_content[start_idx + 15 : end_idx + 1]
    existing_products = json.loads(products_json_str)
    print(f"Found {len(existing_products)} existing products.")
    
    # Merge existing and new
    # Remove duplicates if run multiple times
    existing_ids = set(p['id'] for p in existing_products)
    added_count = 0
    for p in processed_products:
        if p['id'] not in existing_ids:
            existing_products.append(p)
            added_count += 1
            
    print(f"Added {added_count} new products.")
    
    new_products_str = json.dumps(existing_products, ensure_ascii=False, indent=2)
    new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]
    
    with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_catalog_content)
    print("catalog.js updated successfully.")
else:
    print("Could not find PRODUCTS array boundaries in catalog.js!")

