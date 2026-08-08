import json
import os
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from duckduckgo_search import DDGS
from duckduckgo_search.exceptions import DuckDuckGoSearchException

PRODUCTS_FILE = 'scratch_products.json'
CATALOG_JS_FILE = 'assets/js/catalog.js'
IMAGES_DIR = 'assets/images/products'

if not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

# Load products
with open(PRODUCTS_FILE, 'r', encoding='utf-8') as f:
    products = json.load(f)

# Optional: limit to 2700 but maybe test with a few if needed? No, user wants ALL.
# The user wants all products.

print(f"Loaded {len(products)} products.")

def process_product(p):
    pid = p['id']
    name = p['name']
    img_url = p['images'][0] if p['images'] else ''
    
    # 1. Download image
    local_img_path = ''
    if img_url:
        img_filename = f"{pid}.jpg"
        img_filepath = os.path.join(IMAGES_DIR, img_filename)
        # Download only if it doesn't exist to save time on restarts
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
            
    if local_img_path:
        p['images'] = [local_img_path]
    else:
        p['images'] = []
        
    # 2. Get description using DDG
    try:
        with DDGS() as ddgs:
            # Short search query
            query = f"{name} характеристики опис"
            results = list(ddgs.text(query, max_results=1, region='ua-uk'))
            if results and 'body' in results[0]:
                found_desc = results[0]['body']
                # Keep it reasonably short
                if len(found_desc) > 300:
                    found_desc = found_desc[:297] + "..."
                p['desc'] = found_desc
            else:
                p['desc'] = f"Оригінальний товар: {name}. Артикул: {p.get('desc', '').split('Артикул: ')[-1]}"
    except Exception as e:
        # Rate limit or network error
        p['desc'] = f"Оригінальний товар: {name}. Артикул: {p.get('desc', '').split('Артикул: ')[-1]}"
        
    return p

print("Starting processing... This will take a while.")
start_time = time.time()

processed_products = []
# Using 10 workers for network IO
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(process_product, p): p for p in products}
    
    done_count = 0
    for future in as_completed(futures):
        result = future.result()
        processed_products.append(result)
        done_count += 1
        if done_count % 100 == 0:
            print(f"Processed {done_count}/{len(products)}...")

print(f"Processing finished in {time.time() - start_time:.2f} seconds.")

# Now rewrite catalog.js
print("Updating catalog.js...")

# We need to replace the PRODUCTS array in catalog.js
with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

# Find the start and end of the PRODUCTS array
start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================\n//  HELPERS"

start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    # Generate new PRODUCTS JSON
    # We will format it so it's a valid JS array assignment
    new_products_json = json.dumps(processed_products, ensure_ascii=False, indent=2)
    
    new_catalog_content = (
        catalog_content[:start_idx] +
        "var PRODUCTS = " +
        new_products_json +
        catalog_content[end_idx:]
    )
    
    with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_catalog_content)
    print("catalog.js updated successfully.")
else:
    print("Could not find PRODUCTS array boundaries in catalog.js!")

