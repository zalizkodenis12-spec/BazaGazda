import json
import re

print("Loading JSON data...")
with open('scraped_products_sitemap.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Loaded {len(products)} products.")

for p in products:
    if p.get('_src_img'):
        p['images'] = [p['_src_img']]

with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('function findProduct(id)')
if idx == -1:
    print("Error: Could not find logic code in catalog.js")
    exit(1)

logic_code = content[idx:]

header = """// ============================================
//  CATALOG DATA
// ============================================
var CATEGORIES = [
  { id:'technika',     name:'Побутова техніка',        desc:'Для дому та кухні', img:'assets/images/техніка.jpg' },
  { id:'budmaterialy', name:'Будматеріали',   desc:'Все для ремонту', img:'assets/images/будматеріали.jpg' },
  { id:'instrument',   name:'Інструменти',      desc:'Електро та ручний', img:'assets/images/інструменти.jpg' },
  { id:'posud',        name:'Посуд',          desc:'Все для кухні', img:'assets/images/для  дому.jpg' },
  { id:'gospodarchi',  name:'Господарчі товари',      desc:'Для саду і городу', img:'assets/images/для  дому.jpg' }
];

var PRODUCTS = """ + json.dumps(products, ensure_ascii=False, indent=2) + """;

var SUBCATEGORIES = {};
var BRANDS = {};

PRODUCTS.forEach(function(p) {
    if (!SUBCATEGORIES[p.category]) SUBCATEGORIES[p.category] = new Set();
    if (p.subcategory && p.subcategory !== 'all') {
        SUBCATEGORIES[p.category].add(p.subcategory);
    }
    
    if (!BRANDS[p.category]) BRANDS[p.category] = new Set();
    if (p.brand && p.brand !== 'Інший' && p.brand !== '-') {
        BRANDS[p.category].add(p.brand);
    }
});

for (var cat in SUBCATEGORIES) {
    var arr = [{ id: 'all', name: 'Усі товари' }];
    Array.from(SUBCATEGORIES[cat]).sort().forEach(function(sub) {
        arr.push({ id: sub, name: sub });
    });
    SUBCATEGORIES[cat] = arr;
}
for (var cat in BRANDS) {
    var arr = [];
    Array.from(BRANDS[cat]).sort().forEach(function(brand) {
        arr.push({ id: brand, name: brand });
    });
    BRANDS[cat] = arr;
}

"""

print("Replacing data in catalog.js...")
with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
    f.write(header + "\n" + logic_code)

print("catalog.js updated successfully.")
