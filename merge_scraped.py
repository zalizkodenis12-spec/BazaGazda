import json

CATALOG_JS_FILE = 'assets/js/catalog.js'
SCRAPED_JSON = 'scraped_products.json'

print("Loading scraped products...")
try:
    with open(SCRAPED_JSON, 'r', encoding='utf-8') as f:
        scraped_products = json.load(f)
except FileNotFoundError:
    print("Scraped products file not found. Scraper may still be running or failed.")
    exit(1)

print(f"Loaded {len(scraped_products)} scraped products.")

print("Reading catalog.js...")
with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

# 1. Update CATEGORIES and SUBCATEGORIES in catalog.js
# First we need to make sure the new categories exist in the JS object
# 'sadovatehnika', 'technika', 'gospodarchi', 'instrument', 'transport', 'budmaterialy', 'ruchniy'

categories_start = catalog_content.find("var CATEGORIES = {")
categories_end = catalog_content.find("};\n", categories_start) + 1
categories_json_str = catalog_content[categories_start+17:categories_end].replace("'", '"')
# Wait, parsing JS object as JSON is tricky if it has unquoted keys or comments.
# Let's do it safely using string replacement or just a simple python dictionary definition

# We will just append the new products to the existing PRODUCTS array.
start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"
start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

existing_products = json.loads(catalog_content[start_idx + 15 : end_idx + 1])

# Create a set of existing SKUs/IDs to avoid duplicates
existing_ids = set(p['id'] for p in existing_products)
existing_skus = set()
for p in existing_products:
    for spec in p.get('specs', []):
        if spec['label'] == 'Код 1С' or spec['label'] == 'Артикул':
            existing_skus.add(spec['value'])

added_count = 0
for sp in scraped_products:
    if sp['id'] in existing_ids:
        continue
    # sku check
    sp_sku = next((s['value'] for s in sp['specs'] if s['label'] == 'Артикул'), None)
    if sp_sku and sp_sku in existing_skus:
        continue
        
    existing_products.append(sp)
    added_count += 1

print(f"Added {added_count} new products. Total is now {len(existing_products)}.")

new_products_str = json.dumps(existing_products, ensure_ascii=False, indent=2)
new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]

# Now we need to update the SUBCATEGORIES definition if they are missing
# Let's just find `var SUBCATEGORIES = {` and replace it entirely with the complete structure

subcats_str = """var SUBCATEGORIES = {
    'technika': [
        { id: 'all', name: 'Всі' },
        { id: 'velyka', name: 'Велика побутова техніка', img: 'assets/images/category/technika_velyka.png' },
        { id: 'dribna', name: 'Дрібна побутова техніка', img: 'assets/images/category/technika_dribna.png' },
        { id: 'klimat', name: 'Кліматична техніка', img: 'assets/images/category/technika_klimat.png' },
        { id: 'vbudovana', name: 'Вбудована техніка', img: 'assets/images/category/technika_vbudovana.png' }
    ],
    'posud': [
        { id: 'all', name: 'Всі' },
        { id: 'kastryuli', name: 'Каструлі та ковші', img: 'assets/images/category/posud_kastryuli.png' },
        { id: 'skovorody', name: 'Сковороди', img: 'assets/images/category/posud_skovorody.png' },
        { id: 'chainiky', name: 'Чайники', img: 'assets/images/category/posud_chainiky.png' },
        { id: 'formy', name: 'Форми для випічки', img: 'assets/images/category/posud_formy.png' },
        { id: 'kuhonne', name: 'Кухонне приладдя', img: 'assets/images/category/posud_kuhonne.png' },
        { id: 'kavovarky', name: 'Кавоварки та турки', img: 'assets/images/category/posud_kavovarky.png' },
        { id: 'nozhi', name: 'Ножі та дошки', img: 'assets/images/category/posud_nozhi.png' }
    ],
    'gospodarchi': [
        { id: 'all', name: 'Всі' }
    ],
    'sadovatehnika': [
        { id: 'all', name: 'Всі' }
    ],
    'instrument': [
        { id: 'all', name: 'Всі' }
    ],
    'transport': [
        { id: 'all', name: 'Всі' }
    ],
    'budmaterialy': [
        { id: 'all', name: 'Всі' }
    ],
    'ruchniy': [
        { id: 'all', name: 'Всі' }
    ]
};
"""

# Let's replace the SUBCATEGORIES block
subcats_start = new_catalog_content.find("var SUBCATEGORIES = {")
subcats_end = new_catalog_content.find("};\n", subcats_start) + 2
new_catalog_content = new_catalog_content[:subcats_start] + subcats_str + new_catalog_content[subcats_end:]

# Also update CATEGORIES to include the new ones
categories_str = """var CATEGORIES = {
    'technika': { name: 'Побутова техніка', icon: 'fa-tv' },
    'posud': { name: 'Посуд', icon: 'fa-utensils' },
    'sadovatehnika': { name: 'Садова техніка', icon: 'fa-leaf' },
    'gospodarchi': { name: 'Господарчі товари', icon: 'fa-broom' },
    'instrument': { name: 'Інструменти та обладнання', icon: 'fa-tools' },
    'transport': { name: 'Мото та вело транспорт', icon: 'fa-motorcycle' },
    'budmaterialy': { name: 'Будматеріали', icon: 'fa-hammer' },
    'ruchniy': { name: 'Ручний та витратний інструмент', icon: 'fa-wrench' }
};
"""

cat_start = new_catalog_content.find("var CATEGORIES = {")
cat_end = new_catalog_content.find("};\n", cat_start) + 2
new_catalog_content = new_catalog_content[:cat_start] + categories_str + new_catalog_content[cat_end:]


with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(new_catalog_content)

print("catalog.js updated successfully.")
