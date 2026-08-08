import json
import re

print("Loading JSON data...")
with open('scraped_products_sitemap.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Loaded {len(products)} products.")

for p in products:
    if p.get('_src_img'):
        p['images'] = [p['_src_img']]

print("Reading catalog.js...")
with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the PRODUCTS array
# It starts with "const PRODUCTS = [" and ends with the next line starting with "];" or similar.
# Since it might be huge, we'll use a regex to find everything between 'const PRODUCTS = [' and '];'
# Actually, the start is "const PRODUCTS = [" and it ends before "const CATEGORIES ="
pattern = r'(const PRODUCTS = )\[.*?\];(.*?const CATEGORIES =)'

def replacer(match):
    return match.group(1) + json.dumps(products, ensure_ascii=False, indent=2) + ";" + match.group(2)

print("Replacing data in catalog.js...")
new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("catalog.js updated successfully.")
