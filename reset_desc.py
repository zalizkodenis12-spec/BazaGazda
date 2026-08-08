import json

CATALOG_FILE = 'assets/js/catalog.js'
PRODUCTS_JSON_FILE = 'scratch_products.json'

with open(CATALOG_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find PRODUCTS array.")
    exit(1)

# Extract just the JSON array part
# start_idx + 15 is the '['
# end_idx is the ']'
products_json_str = content[start_idx + 15 : end_idx + 1]

products = json.loads(products_json_str)

with open(PRODUCTS_JSON_FILE, 'r', encoding='utf-8') as f:
    original_products = json.load(f)

orig_desc_map = {p['id']: p.get('desc', '') for p in original_products}

changes = 0
for p in products:
    pid = p['id']
    orig_desc = orig_desc_map.get(pid, '')
    
    if orig_desc:
        p['desc'] = orig_desc
    else:
        p['desc'] = f"Код 1С: {pid}"
        
    changes += 1

print(f"Reset descriptions for {changes} products.")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)

# Now safely assemble the new content
# content[:start_idx + 15] contains 'var PRODUCTS = ['
# new_products_str has the JSON array [...]
# BUT we must remove the first '[' and last ']' from new_products_str to fit into the marker?
# NO, new_products_str is the ENTIRE array.
# so we replace everything between 'var PRODUCTS = ' and ';\n\n// ==', meaning we replace `content[start_idx + 15 : end_idx + 1]` with `new_products_str`.

new_content = content[:start_idx + 15] + new_products_str + content[end_idx + 1:]

with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("catalog.js successfully updated with clean descriptions!")
