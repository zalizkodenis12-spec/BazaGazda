import sys

with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Wrap button and select in a flex row
js = js.replace(
    'html += \'<button class="filter-btn" id="mobileFilterBtn"',
    'html += \'<div style="display:flex; gap:10px; width:100%; justify-content:space-between;"><button class="filter-btn" id="mobileFilterBtn" style="flex:1; justify-content:center;"'
)

js = js.replace(
    '</select></div>\';\n  \n  html += \'<div class="products-grid" id="productsGrid">\';',
    '</select></div></div>\';\n  \n  html += \'<div class="products-grid" id="productsGrid">\';'
)

js = js.replace(
    'html += \'<select class="sort-select" id="sortSelect">\'+',
    'html += \'<select class="sort-select" id="sortSelect" style="flex:1;">\'+'
)

with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("JS patched for side-by-side buttons.")
