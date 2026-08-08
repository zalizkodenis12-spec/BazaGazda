import json
import re

CATALOG_JS_FILE = 'assets/js/catalog.js'
SCRAPED_JSON = 'scraped_products.json'

with open(SCRAPED_JSON, 'r', encoding='utf-8') as f:
    scraped_products = json.load(f)

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog = f.read()

# 1. Update CATEGORIES
categories_marker_start = "var CATEGORIES = [\n"
categories_marker_end = "];\n"
start_idx = catalog.find(categories_marker_start)
end_idx = catalog.find(categories_marker_end, start_idx) + 3

new_categories = """var CATEGORIES = [
  { id:'technika',     name:'Техніка',        desc:'Велика та дрібна побутова', img:'assets/images/техніка.jpg' },
  { id:'budmaterialy', name:'Будматеріали',   desc:'Для ремонту та будівництва', img:'assets/images/будматеріали.jpg' },
  { id:'instrument',   name:'Інструмент',      desc:'Електроінструмент та набори', img:'assets/images/інструменти.jpg' },
  { id:'dlyadomu',     name:'Для дому',      desc:'Посуд та побутова хімія', img:'assets/images/для  дому.jpg' },
  { id:'sadovatehnika', name:'Садова техніка', desc:'Техніка для саду та городу', img:'assets/images/інструменти.jpg' },
  { id:'gospodarchi',  name:'Господарчі товари', desc:'Все для господарства', img:'assets/images/для  дому.jpg' },
  { id:'transport',    name:'Мото/Вело транспорт', desc:'Електротранспорт та інше', img:'assets/images/техніка.jpg' },
  { id:'ruchniy',      name:'Ручний інструмент', desc:'Витратний та ручний інструмент', img:'assets/images/інструменти.jpg' }
];
"""
catalog = catalog[:start_idx] + new_categories + catalog[end_idx:]

# 2. Update SUBCATEGORIES
subcat_marker_start = "var SUBCATEGORIES = {"
subcat_marker_end = "};\n"
start_idx = catalog.find(subcat_marker_start)
end_idx = catalog.find(subcat_marker_end, start_idx) + 3

new_subcategories = """var SUBCATEGORIES = {
    'technika': [
        { id: 'all', name: 'Всі' },
        { id: 'velyka', name: 'Велика побутова техніка', img: 'assets/images/category/technika_velyka.png' },
        { id: 'dribna', name: 'Дрібна побутова техніка', img: 'assets/images/category/technika_dribna.png' },
        { id: 'klimat', name: 'Кліматична техніка', img: 'assets/images/category/technika_klimat.png' },
        { id: 'vbudovana', name: 'Вбудована техніка', img: 'assets/images/category/technika_vbudovana.png' }
    ],
    'budmaterialy': [ { id: 'all', name: 'Всі' } ],
    'instrument': [ { id: 'all', name: 'Всі' } ],
    'dlyadomu': [ { id: 'all', name: 'Всі' } ],
    'sadovatehnika': [ { id: 'all', name: 'Всі' } ],
    'gospodarchi': [ { id: 'all', name: 'Всі' } ],
    'transport': [ { id: 'all', name: 'Всі' } ],
    'ruchniy': [ { id: 'all', name: 'Всі' } ]
};
"""
catalog = catalog[:start_idx] + new_subcategories + catalog[end_idx:]

# 3. Append PRODUCTS
prod_marker_start = "var PRODUCTS = ["
prod_marker_end = "];\n\n// ============================================"
start_idx = catalog.find(prod_marker_start)
end_idx = catalog.find(prod_marker_end, start_idx) + 1  # Stop EXACTLY at the closing bracket ']'

products_json_str = catalog[start_idx + 15 : end_idx]
existing_products = json.loads(products_json_str)

existing_ids = {p['id'] for p in existing_products}
existing_skus = set()
for p in existing_products:
    for spec in p.get('specs', []):
        if spec['label'] == 'Код 1С' or spec['label'] == 'Артикул':
            existing_skus.add(spec['value'])

added = 0
for sp in scraped_products:
    if sp['id'] in existing_ids: continue
    
    sku = next((s['value'] for s in sp['specs'] if s['label'] == 'Артикул'), None)
    if sku and sku in existing_skus: continue
    
    existing_products.append(sp)
    added += 1

print(f"Added {added} products.")
new_products_str = "var PRODUCTS = " + json.dumps(existing_products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Done!")
