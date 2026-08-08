import json

CATALOG_JS_FILE = 'assets/js/catalog.js'

print("Reading catalog.js...")
with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog_content = f.read()

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"
start_idx = catalog_content.find(start_marker)
end_idx = catalog_content.find(end_marker)

products = json.loads(catalog_content[start_idx + 15 : end_idx + 1])

def get_subcategory(name):
    name_lo = str(name).lower()
    
    # Кліматична
    if any(w in name_lo for w in ['вентилятор', 'кондиціонер', 'обігрівач', 'радіатор', 'тепловентилятор', 'конвектор', 'кліматичн', 'спліт', 'сплiт', 'gac-']):
        return 'klimat'
        
    # Велика
    if any(w in name_lo for w in ['телевізор', 'холодильник', 'пральна', 'плита', 'духов', 'морозил', 'витяжк', 'бойлер', 'котел', 'поверхня', 'духова шафа', 'посудомийна', 'варильна', 'шафа', 'сушильн']):
        return 'velyka'
        
    # Дрібна
    if any(w in name_lo for w in ['блендер', 'міксер', 'м\'ясорубк', 'пилосос', 'праска', 'фен', 'кавовар', 'мультивар', 'ваги', 'гриль', 'тостер', 'електрочайник', 'кавомол', 'соковижимал', 'млинниця', 'електричн', 'чайник', 'мікрохвильова', 'мiкрохвильова', 'монітор', 'монiтор']):
        return 'dribna'
        
    return 'dribna'

changed = 0
for p in products:
    if p.get('category') == 'technika':
        new_sub = get_subcategory(p['name'])
        if p.get('subcategory') != new_sub:
            p['subcategory'] = new_sub
            changed += 1

print(f"Reclassified {changed} products.")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_catalog_content = catalog_content[:start_idx + 15] + new_products_str + catalog_content[end_idx + 1:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(new_catalog_content)

print("catalog.js updated successfully.")
