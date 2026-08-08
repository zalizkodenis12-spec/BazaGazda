import json
import re

CATALOG_FILE = 'assets/js/catalog.js'

NEW_SUBCATEGORIES_JS = """var SUBCATEGORIES = {
  technika:     [{ id:'all', name:'Всі' }, { id:'dribna', name:'Дрібна' }, { id:'velyka', name:'Велика' }, { id:'klimat', name:'Кліматична' }],
  instrument:   [{ id:'all', name:'Всі' }, { id:'elektro', name:'Електро' }, { id:'nabory', name:'Набори' }, { id:'ruchnyy', name:'Ручний' }, { id:'sadovyy', name:'Садовий' }, { id:'vytratni', name:'Витратні' }],
  dlyadomu:     [{ id:'all', name:'Всі' }, { id:'posud', name:'Посуд' }, { id:'himiya', name:'Побутова хімія' }, { id:'gosp', name:'Госптовари' }],
  budmaterialy: [{ id:'all', name:'Всі' }, { id:'farby', name:'Фарби та лаки' }, { id:'sumishi', name:'Суміші' }, { id:'kriplennya', name:'Кріплення' }, { id:'santehnika', name:'Сантехніка' }, { id:'inshe', name:'Інше' }]
};"""

def deep_categorize(name):
    name_lo = name.lower()
    
    # 1. ТЕХНІКА
    if any(w in name_lo for w in ['вентилятор', 'кондиціонер повітр', 'обігрівач', 'радіатор', 'тепловентилятор', 'конвектор']):
        return 'technika', 'klimat'
    if any(w in name_lo for w in ['телевізор', 'холодильник', 'пральна машин', 'плита', 'духов', 'морозил', 'витяжк', 'бойлер', 'котел']):
        return 'technika', 'velyka'
    if any(w in name_lo for w in ['блендер', 'міксер', 'м\'ясорубк', 'пилосос', 'праска', 'фен', 'кавовар', 'мультивар', 'ваги', 'гриль', 'тостер', 'електрочайник', 'кавомол', 'соковижимал', 'млинниця', 'електричн']):
        return 'technika', 'dribna'
        
    # 2. ІНСТРУМЕНТ
    if any(w in name_lo for w in ['пила ланцюг', 'мотокоса', 'газонокосарк', 'тример', 'секатор', 'шланг', 'грабл', 'лопат', 'сапан', 'садовий']):
        return 'instrument', 'sadovyy'
    if any(w in name_lo for w in ['свердл', 'бур ', 'пилк', 'диск', 'електрод', 'фрез', 'шліфувал', 'наждач']):
        return 'instrument', 'vytratni'
    if any(w in name_lo for w in ['набір інструмент', 'набір ключ', 'набір викрут']):
        return 'instrument', 'nabory'
    if any(w in name_lo for w in ['ключ', 'викрутк', 'плоскогубц', 'молоток', 'рулетк', 'кусачк', 'пасатиж', 'рівень', 'штангенциркуль', 'сокир', 'пила ручн', 'ножівк', 'шпатель', 'кельм', 'ручний інструмент', 'лещата', 'струбцин']):
        return 'instrument', 'ruchnyy'
    if any(w in name_lo for w in ['дриль', 'перфоратор', 'болгарк', 'шуруповерт', 'пила', 'лобзик', 'фрезер', 'шліфмашин', 'зварювал', 'компресор', 'генератор', 'паяльник', 'електроінструмент', ' W', ' Вт', ' 220']):
        return 'instrument', 'elektro'
        
    # 3. ДЛЯ ДОМУ
    if any(w in name_lo for w in ['сковород', 'каструл', 'чайник', 'тарілк', 'посуд', 'чашк', 'гуртк', 'ніж', 'вилка', 'ложка', 'сервіз', 'форма', 'ємність', 'деко', 'термос', 'ковш', 'миск', 'бокал', 'стакан', 'келих', 'салатник', 'кухв', 'глечик']):
        return 'dlyadomu', 'posud'
    if any(w in name_lo for w in ['гель', 'порошок', 'миючий', 'чистячий', 'мило', 'пральн', 'кондиціонер', 'білизн', 'відбілювач', 'освіжувач', 'плямо']):
        return 'dlyadomu', 'himiya'
    if any(w in name_lo for w in ['спрей', 'губк', 'серветк', 'щітк', 'швабр', 'віник', 'відро', 'пакет', 'рушник', 'туалет', 'господар', 'щітка', 'моп ']):
        return 'dlyadomu', 'gosp'
        
    # 4. БУДМАТЕРІАЛИ
    if any(w in name_lo for w in ['фарб', 'емаль', 'лак ', 'грунтовк', 'розчинник', 'колорант', 'пігмент']):
        return 'budmaterialy', 'farby'
    if any(w in name_lo for w in ['шпаклівк', 'штукатурк', 'цемент', 'суміш', 'клей', 'гіпс', 'алебастр']):
        return 'budmaterialy', 'sumishi'
    if any(w in name_lo for w in ['саморіз', 'цвях', 'дюбель', 'кріплен', 'болт', 'гайк', 'анкер', 'шуруп', 'кутник']):
        return 'budmaterialy', 'kriplennya'
    if any(w in name_lo for w in ['змішувач', 'кран ', 'душ', 'ванн', 'унітаз', 'раковин', 'мийк', 'сифон', 'труб', 'фітинг', 'шланг', 'сантехні']):
        return 'budmaterialy', 'santehnika'
        
    if any(w in name_lo for w in ['піна', 'герметик', 'силікон', 'стрічк', 'ізоляц', 'кабель', 'провід', 'розетк', 'вимикач', 'плитк', 'цегл', 'гіпсокартон', 'профіль']):
        return 'budmaterialy', 'inshe'
        
    # Default fallback
    return 'budmaterialy', 'inshe'

with open(CATALOG_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace SUBCATEGORIES
content = re.sub(r'var SUBCATEGORIES = \{.*?\};', NEW_SUBCATEGORIES_JS, content, flags=re.DOTALL)

start_marker = "var PRODUCTS = ["
end_marker = "];\n\n// ============================================"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find PRODUCTS array.")
    exit(1)

products_json_str = content[start_idx + 15 : end_idx + 1]
products = json.loads(products_json_str)

changes = 0
for p in products:
    cat, subcat = deep_categorize(p['name'])
    if p['category'] != cat or p['subcategory'] != subcat:
        p['category'] = cat
        p['subcategory'] = subcat
        changes += 1

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_content = content[:start_idx + 15] + new_products_str + content[end_idx + 1:]

with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Deep categorization complete! {changes} products updated.")
