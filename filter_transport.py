import json

CATALOG_JS_FILE = 'assets/js/catalog.js'

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog = f.read()

prod_marker_start = "var PRODUCTS = ["
prod_marker_end = "];\n\n// ============================================"
start_idx = catalog.find(prod_marker_start)
end_idx = catalog.find(prod_marker_end, start_idx) + 1

products_json_str = catalog[start_idx + 15 : end_idx]
products = json.loads(products_json_str)

filtered_products = []
removed = 0

for p in products:
    # Check if it is in transport subcategory
    if p.get('subcategory') == 'transport':
        name_lo = p.get('name', '').lower()
        if 'скутер' in name_lo or 'scooter' in name_lo:
            filtered_products.append(p)
        else:
            removed += 1
            print(f"Removed: {p['name']}")
    else:
        filtered_products.append(p)

print(f"Removed {removed} transport vehicles. Kept {len(filtered_products)} total products.")

new_products_str = "var PRODUCTS = " + json.dumps(filtered_products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Done!")
