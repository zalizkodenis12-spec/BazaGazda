import json
import os
import requests
import time
from duckduckgo_search import DDGS
from concurrent.futures import ThreadPoolExecutor, as_completed

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

def download_ddg_image(p):
    name = p['name']
    pid = p['id']
    img_filename = f"{pid}.jpg"
    img_filepath = os.path.join(IMAGES_DIR, img_filename)
    
    if os.path.exists(img_filepath):
        p['images'] = [f"assets/images/products/{img_filename}"]
        return p
        
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(name, max_results=1))
            if results:
                img_url = results[0]['image']
                r = requests.get(img_url, timeout=10)
                if r.status_code == 200:
                    with open(img_filepath, 'wb') as img_f:
                        img_f.write(r.content)
                    p['images'] = [f"assets/images/products/{img_filename}"]
    except Exception as e:
        pass
        
    return p

print("Searching Web for missing images...")
start_time = time.time()
with ThreadPoolExecutor(max_workers=5) as executor:
    futures = {executor.submit(download_ddg_image, p): p for p in missing}
    done = 0
    for future in as_completed(futures):
        done += 1
        if done % 10 == 0:
            print(f"Web searched {done}/{len(missing)} images...")

print(f"Finished in {time.time() - start_time:.2f} seconds.")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(new_catalog_content)

print("catalog.js updated successfully with web images!")
