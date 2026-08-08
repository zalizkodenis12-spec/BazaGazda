import json
import re

CATALOG_FILE = 'assets/js/catalog.js'

NEW_SUBCATEGORIES_JS = """var SUBCATEGORIES = {
  technika:     [],
  instrument:   [],
  dlyadomu:     [
    { id:'all', name:'Всі' },
    { id:'posud', name:'Посуд та кухонне приладдя' },
    { id:'tekstyl', name:'Домашній текстиль' },
    { id:'himiya', name:'Госптовари та прибирання' },
    { id:'zberigannya', name:'Зберігання' },
    { id:'inshe', name:'Інше' }
  ],
  budmaterialy: []
};"""

def categorize_dlyadomu(name):
    name_lo = name.lower()
    
    # Текстиль
    tekstyl_words = ['рушник', 'плед', 'килимок', 'шторка', 'подушка', 'скатертина', 'покривало', 'серветка бамбук', 'серветка мікрофібра']
    if any(w in name_lo for w in tekstyl_words):
        return 'tekstyl'
        
    # Госптовари та прибирання
    himiya_words = ['щітка', 'швабра', 'запаска', 'серветка', 'таз ', 'тазик', 'йоржик', 'губка', 'відро', 'совок', 'пакет', 'рукавич', 'миючий', 'чистячий', 'мило', 'пральн', 'туалет', 'ванн', 'освіжувач', 'порошок', 'гель', 'спрей']
    if any(w in name_lo for w in himiya_words):
        return 'himiya'
        
    # Зберігання
    zberigannya_words = ['ємність', 'судок', 'контейнер', 'пляшка', 'термос', 'термокружка', 'ланч-бокс', 'органайзер', 'кошик', 'банка']
    if any(w in name_lo for w in zberigannya_words):
        return 'zberigannya'
        
    # Посуд та кухонне приладдя
    posud_words = ['чашка', 'тарілка', 'каструля', 'салатник', 'сковорода', 'сковорідка', 'ніж', 'чайник', 'форма', 'френч', 'бульйонниця', 'гейзерна', 'келих', 'глечик', 'ложка', 'миска', 'тертка', 'лопатка', 'ківш', 'кришка', 'склянка', 'ваза', 'решітка', 'сервіз', 'вилка', 'дошка', 'вінчик', 'ополоник']
    if any(w in name_lo for w in posud_words):
        return 'posud'
        
    # Інше
    return 'inshe'

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

for p in products:
    p['category'] = 'dlyadomu' # ВСІ товари тепер у категорії "Для дому"
    p['subcategory'] = categorize_dlyadomu(p['name'])

new_products_str = json.dumps(products, ensure_ascii=False, indent=2)
new_content = content[:start_idx + 15] + new_products_str + content[end_idx + 1:]

with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"All products moved to 'dlyadomu' and subcategorized!")
