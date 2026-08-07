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

fixed_count = 0
for p in products:
    price = p.get('price', 0)
    if price > 1000000:
        s = str(int(price))
        L = len(s)
        # Split logic
        if L % 2 == 0:
            mid = L // 2
        else:
            mid = (L // 2) + 1
            
        old_price = int(s[:mid])
        new_price = int(s[mid:])
        
        print(f"Fixing {p['name']}: {price} -> {new_price} (old: {old_price})")
        p['price'] = new_price
        p['oldPrice'] = old_price
        fixed_count += 1
    
    # Optional: for 0 price, mark available = false
    if p.get('price', 0) == 0:
        p['available'] = False

print(f"\nFixed {fixed_count} prices.")

new_products_str = "var PRODUCTS = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Done!")
