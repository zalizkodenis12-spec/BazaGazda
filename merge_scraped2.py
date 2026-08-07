import json

CATALOG_JS_FILE = 'assets/js/catalog.js'
SCRAPED_JSON = 'scraped_products_deep.json'

with open(SCRAPED_JSON, 'r', encoding='utf-8') as f:
    scraped_products = json.load(f)

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog = f.read()

prod_marker_start = "var PRODUCTS = ["
prod_marker_end = "];\n\n// ============================================"
start_idx = catalog.find(prod_marker_start)
end_idx = catalog.find(prod_marker_end, start_idx) + 1

# We will completely overwrite the scraped items we added previously.
# How to know which ones we added previously? They all start with 'bp_'.
# We keep only items that don't start with 'bp_'.

products_json_str = catalog[start_idx + 15 : end_idx]
existing_products = json.loads(products_json_str)

original_products = [p for p in existing_products if not str(p['id']).startswith('bp_')]

# But wait, did the user complain about a quad bike in the ORIGINAL products?
# "оставиав квадврвацикла". Let's also filter quad bikes from original products!
final_products = []
for p in original_products:
    if p.get('subcategory') == 'transport':
        name_lo = p.get('name', '').lower()
        if 'скутер' not in name_lo and 'scooter' not in name_lo:
            continue # drop quad bike from original dataset too!
            
    name_lo = p.get('name', '').lower()
    if 'квадроцикл' in name_lo or 'мотоцикл' in name_lo or 'мопед' in name_lo:
        continue
        
    final_products.append(p)

existing_skus = set()
for p in final_products:
    for spec in p.get('specs', []):
        if spec['label'] == 'Код 1С' or spec['label'] == 'Артикул':
            existing_skus.add(spec['value'])

added = 0
for sp in scraped_products:
    # Check deduplication
    sku = next((s['value'] for s in sp['specs'] if s['label'] == 'Артикул'), None)
    if sku and sku in existing_skus: 
        continue
        
    name_lo = sp.get('name', '').lower()
    if 'квадроцикл' in name_lo or 'мотоцикл' in name_lo or 'мопед' in name_lo:
        continue
        
    final_products.append(sp)
    added += 1

print(f"Added {added} products. Total is {len(final_products)}.")

# Sort everything by name
final_products.sort(key=lambda x: x['name'])

new_products_str = "var PRODUCTS = " + json.dumps(final_products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Merge complete!")
