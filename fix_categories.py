import json

CATALOG_JS_FILE = 'assets/js/catalog.js'

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog = f.read()

# 1. Update CATEGORIES back to 4 main ones
categories_marker_start = "var CATEGORIES = [\n"
categories_marker_end = "];\n"
start_idx = catalog.find(categories_marker_start)
end_idx = catalog.find(categories_marker_end, start_idx) + 3

original_categories = """var CATEGORIES = [
  { id:'technika',     name:'Техніка',        desc:'Велика та дрібна побутова', img:'assets/images/техніка.jpg' },
  { id:'budmaterialy', name:'Будматеріали',   desc:'Для ремонту та будівництва', img:'assets/images/будматеріали.jpg' },
  { id:'instrument',   name:'Інструмент',      desc:'Електроінструмент та набори', img:'assets/images/інструменти.jpg' },
  { id:'dlyadomu',     name:'Для дому',      desc:'Посуд та побутова хімія', img:'assets/images/для  дому.jpg' }
];
"""
catalog = catalog[:start_idx] + original_categories + catalog[end_idx:]

# 2. Update SUBCATEGORIES to include the scraped ones as subcategories
subcat_marker_start = "var SUBCATEGORIES = {"
subcat_marker_end = "};\n"
start_idx = catalog.find(subcat_marker_start)
end_idx = catalog.find(subcat_marker_end, start_idx) + 3

original_subcategories = """var SUBCATEGORIES = {
    'technika': [
        { id: 'all', name: 'Всі' },
        { id: 'velyka', name: 'Велика побутова техніка', img: 'assets/images/category/technika_velyka.png' },
        { id: 'dribna', name: 'Дрібна побутова техніка', img: 'assets/images/category/technika_dribna.png' },
        { id: 'klimat', name: 'Кліматична техніка', img: 'assets/images/category/technika_klimat.png' },
        { id: 'vbudovana', name: 'Вбудована техніка', img: 'assets/images/category/technika_vbudovana.png' },
        { id: 'transport', name: 'Мото та вело транспорт', img: 'assets/images/category/technika_velyka.png' }
    ],
    'budmaterialy': [ 
        { id: 'all', name: 'Всі' }
    ],
    'instrument': [ 
        { id: 'all', name: 'Всі' },
        { id: 'sadovatehnika', name: 'Садова техніка', img: 'assets/images/category/technika_velyka.png' },
        { id: 'ruchniy', name: 'Ручний інструмент', img: 'assets/images/category/technika_velyka.png' }
    ],
    'dlyadomu': [ 
        { id: 'all', name: 'Всі' },
        { id: 'kastryuli', name: 'Каструлі та ковші', img: 'assets/images/category/posud_kastryuli.png' },
        { id: 'skovorody', name: 'Сковороди', img: 'assets/images/category/posud_skovorody.png' },
        { id: 'chainiky', name: 'Чайники', img: 'assets/images/category/posud_chainiky.png' },
        { id: 'formy', name: 'Форми для випічки', img: 'assets/images/category/posud_formy.png' },
        { id: 'kuhonne', name: 'Кухонне приладдя', img: 'assets/images/category/posud_kuhonne.png' },
        { id: 'kavovarky', name: 'Кавоварки та турки', img: 'assets/images/category/posud_kavovarky.png' },
        { id: 'nozhi', name: 'Ножі та дошки', img: 'assets/images/category/posud_nozhi.png' },
        { id: 'gospodarchi', name: 'Господарчі товари', img: 'assets/images/category/technika_velyka.png' }
    ]
};
"""
catalog = catalog[:start_idx] + original_subcategories + catalog[end_idx:]

# 3. Remap PRODUCTS
prod_marker_start = "var PRODUCTS = ["
prod_marker_end = "];\n\n// ============================================"
start_idx = catalog.find(prod_marker_start)
end_idx = catalog.find(prod_marker_end, start_idx) + 1

products_json_str = catalog[start_idx + 15 : end_idx]
existing_products = json.loads(products_json_str)

changed = 0
for p in existing_products:
    if p['category'] == 'sadovatehnika':
        p['category'] = 'instrument'
        p['subcategory'] = 'sadovatehnika'
        changed += 1
    elif p['category'] == 'ruchniy':
        p['category'] = 'instrument'
        p['subcategory'] = 'ruchniy'
        changed += 1
    elif p['category'] == 'transport':
        p['category'] = 'technika'
        p['subcategory'] = 'transport'
        changed += 1
    elif p['category'] == 'gospodarchi':
        p['category'] = 'dlyadomu'
        p['subcategory'] = 'gospodarchi'
        changed += 1
    elif p['category'] == 'posud':
        p['category'] = 'dlyadomu'
        # subcategory stays the same (kastryuli, etc.)
        changed += 1

print(f"Remapped {changed} products.")
new_products_str = "var PRODUCTS = " + json.dumps(existing_products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Done!")
