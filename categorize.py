import re
import json

CATALOG_FILE = 'assets/js/catalog.js'

def categorize(name):
    name_lo = name.lower()
    
    # Для дому -> Посуд
    posud_words = ['сковород', 'каструл', 'чайник', 'тарілк', 'посуд', 'чашк', 'гуртк', 'ніж', 'вилка', 'ложка', 'сервіз', 'форма', 'ємність', 'деко', 'термос', 'ковш', 'миск', 'бокал', 'стакан', 'келих', 'салатник', 'кухв', 'глечик']
    if any(w in name_lo for w in posud_words) and 'електричний' not in name_lo:
        return 'dlyadomu', 'posud'
        
    # Для дому -> Хімія / Госптовари
    himiya_words = ['гель', 'порошок', 'спрей', 'миючий', 'чистячий', 'мило', 'пральн', 'кондиціонер', 'білизн', 'засіб', 'відбілювач', 'губк', 'серветк', 'щітк', 'швабр', 'віник', 'відро', 'пакет', 'рушник', 'туалет', 'освіжувач', 'плям']
    if any(w in name_lo for w in himiya_words):
        return 'dlyadomu', 'himiya'
        
    # Техніка -> Велика
    technika_velyka = ['телевізор', 'холодильник', 'пральна машин', 'плита', 'духов', 'морозил', 'витяжк', 'бойлер', 'котел', 'кондиціонер повітр', 'обігрівач']
    if any(w in name_lo for w in technika_velyka):
        return 'technika', 'velyka'
        
    # Техніка -> Дрібна
    technika_dribna = ['блендер', 'міксер', 'м\'ясорубк', 'пилосос', 'праска', 'фен', 'кавовар', 'мультивар', 'ваги', 'гриль', 'тостер', 'електрочайник', 'вентилятор', 'кавомол', 'соковижимал', 'млинниця', 'електричн']
    if any(w in name_lo for w in technika_dribna):
        return 'technika', 'dribna'
        
    # Інструмент -> Електро
    instrument_elektro = ['дриль', 'перфоратор', 'болгарк', 'шуруповерт', 'пила', 'лобзик', 'фрезер', 'шліфмашин', 'електрод', 'зварювал', 'компресор', 'генератор', 'паяльник', 'електроінструмент']
    if any(w in name_lo for w in instrument_elektro):
        return 'instrument', 'elektro'
        
    # Інструмент -> Набори / Ручний
    instrument_nabory = ['набір інструмент', 'ключ', 'викрутк', 'плоскогубц', 'молоток', 'рулетк', 'свердл', 'набір', 'кусачк', 'пасатиж', 'рівень', 'штангенциркуль', 'сокир', 'пилк', 'ножівк', 'шпатель', 'ручний інструмент']
    if any(w in name_lo for w in instrument_nabory):
        return 'instrument', 'nabory'
        
    # Будматеріали (and everything else usually goes here if it's a building base)
    bud_words = ['фарб', 'клей', 'шпаклівк', 'штукатурк', 'цемент', 'піна', 'герметик', 'розчинник', 'грунтовк', 'ламінат', 'лінолеум', 'плитк', 'цегл', 'гіпсокартон', 'профіль', 'саморіз', 'цвях', 'дюбель', 'кріплен', 'труб', 'фітинг', 'кабель', 'провід', 'розетк', 'вимикач']
    if any(w in name_lo for w in bud_words):
        return 'budmaterialy', 'all'
        
    # Fallbacks based on category names usually found in baza gazda
    if ' W' in name or ' Вт' in name or ' V' in name or ' В' in name and any(c.isdigit() for c in name):
        return 'instrument', 'elektro'
        
    # Default to budmaterialy since it's a building base, or keep dlyadomu if it feels like home goods. 
    # Let's put uncategorized into budmaterialy, because a building store has mostly building stuff.
    return 'budmaterialy', 'all'

print("Reading catalog.js...")
with open(CATALOG_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Find PRODUCTS array
start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find PRODUCTS array.")
    exit(1)

products_json_str = content[start_idx + 15 : end_idx + 1]
try:
    products = json.loads(products_json_str)
except json.JSONDecodeError as e:
    print("JSON decode error:", e)
    exit(1)

# Categorize
changes = 0
for p in products:
    cat, subcat = categorize(p['name'])
    if p['category'] != cat or p['subcategory'] != subcat:
        p['category'] = cat
        p['subcategory'] = subcat
        changes += 1

print(f"Categorized {changes} products.")

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)

new_content = content[:start_idx] + "var PRODUCTS = " + new_products_str + content[end_idx:]

with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("catalog.js successfully updated with new categories!")
