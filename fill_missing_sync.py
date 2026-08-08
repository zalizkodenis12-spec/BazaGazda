import json
import os
import requests
import time
from duckduckgo_search import DDGS

CATALOG_JS_FILE = 'assets/js/catalog.js'
IMAGES_DIR = 'assets/images/products'

print("Reading catalog.js...")
with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"
start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

products = json.loads(catalog_content[start_idx + 15 : end_idx + 1])
missing = [p for p in products if p['category'] == 'technika' and not p.get('images')]
print(f"Found {len(missing)} products still missing images.")

ddgs = DDGS()
downloaded = 0

for p in missing:
    name = p['name']
    pid = p['id']
    img_filename = f"{pid}.jpg"
    img_filepath = os.path.join(IMAGES_DIR, img_filename)
    
    if os.path.exists(img_filepath):
        p['images'] = [f"assets/images/products/{img_filename}"]
        downloaded += 1
        continue
        
    print(f"Searching for {name}...")
    try:
        results = list(ddgs.images(name, max_results=1))
        if results:
            img_url = results[0]['image']
            r = requests.get(img_url, timeout=10)
            if r.status_code == 200:
                with open(img_filepath, 'wb') as img_f:
                    img_f.write(r.content)
                p['images'] = [f"assets/images/products/{img_filename}"]
                print(" -> Downloaded.")
                downloaded += 1
            else:
                print(f" -> Failed to download: HTTP {r.status_code}")
        else:
            print(" -> No results from DDG.")
    except Exception as e:
        print(f" -> Error: {e}")
        
    time.sleep(1) # Sleep to avoid rate limit

print(f"Successfully fixed {downloaded}/{len(missing)} images.")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(new_catalog_content)

print("catalog.js updated successfully with web images!")
