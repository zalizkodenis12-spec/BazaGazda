import json
import os
import re
import requests
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

CATALOG_JS_FILE = 'assets/js/catalog.js'
IMAGES_DIR = 'assets/images/products'

if not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

print("Reading catalog.js...")
with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

# 1. Fix SUBCATEGORIES
old_sub = "technika:     [],"
new_sub = "technika:     [{id:'all', name:'Всі'}, {id:'velyka', name:'Велика'}, {id:'dribna', name:'Дрібна'}, {id:'klimat', name:'Кліматична'}],"
if old_sub in catalog_content:
    catalog_content = catalog_content.replace(old_sub, new_sub)
    print("Fixed SUBCATEGORIES.technika")

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"

start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find PRODUCTS array.")
    exit(1)

products_json_str = catalog_content[start_idx + 15 : end_idx + 1]
products = json.loads(products_json_str)

products_to_fix = [p for p in products if p['category'] == 'technika' and not p.get('images')]
print(f"Found {len(products_to_fix)} products in technika without images.")

def download_image(p):
    pid = p['id']
    # id format: pt_{code}
    if pid.startswith('pt_'):
        code_1c = pid[3:]
        img_url = f"http://31.172.143.18/price/image/{code_1c}.jpg"
        
        img_filename = f"{pid}.jpg"
        img_filepath = os.path.join(IMAGES_DIR, img_filename)
        
        if not os.path.exists(img_filepath):
            try:
                r = requests.get(img_url, timeout=10)
                if r.status_code == 200:
                    with open(img_filepath, 'wb') as img_f:
                        img_f.write(r.content)
                    p['images'] = [f"assets/images/products/{img_filename}"]
            except Exception as e:
                pass
        else:
            p['images'] = [f"assets/images/products/{img_filename}"]
            
    return p

print("Downloading missing images...")
start_time = time.time()
with ThreadPoolExecutor(max_workers=20) as executor:
    futures = {executor.submit(download_image, p): p for p in products_to_fix}
    done_count = 0
    for future in as_completed(futures):
        done_count += 1
        if done_count % 20 == 0:
            print(f"Processed {done_count}/{len(products_to_fix)} images...")

print(f"Images downloaded in {time.time() - start_time:.2f} seconds.")

# Count how many still failed
failed = sum(1 for p in products_to_fix if not p.get('images'))
print(f"Products still missing images: {failed}")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(new_catalog_content)

print("catalog.js updated successfully.")
