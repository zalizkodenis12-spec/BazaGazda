import sys
content = open('assets/js/catalog.js', 'r', encoding='utf-8').read()

c1 = content.replace(
    'html += \'<aside class="catalog-sidebar" style="flex: 0 0 260px; width:100%;">\';',
    'html += \'<aside class="catalog-sidebar" style="flex: 0 0 260px; width:100%; position: sticky; top: 80px; max-height: calc(100vh - 100px); overflow-y: auto; padding-right:10px;">\';'
)

c2 = c1.replace(
    'html += \'<div class="catalog-search-wrap-inline" style="margin-bottom:20px;">\' + searchBarHtml(state.search).replace(\'class="catalog-search-wrap"\',\'class="catalog-search-wrap" style="margin-bottom:0; max-width:none;"\') + \'</div>\';\n',
    ''
)

c3 = c2.replace(
    'html += \'<div class="catalog-search-wrap-inline" style="margin-bottom:20px;">\' + searchBarHtml(state.search).replace(\'class="catalog-search-wrap"\',\'class="catalog-search-wrap" style="margin-bottom:0; max-width:none;"\') + \'</div>\';',
    ''
)

c4 = c3.replace(
    'html += \'<div class="catalog-controls" style="display:flex; justify-content:flex-end; margin-bottom:20px;">\';',
    'html += \'<div class="catalog-controls" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; gap: 20px;">\';\n  html += \'<div class="catalog-search-wrap-inline" style="flex-grow:1; margin-bottom:0;">\' + searchBarHtml(state.search).replace(\'class="catalog-search-wrap"\',\'class="catalog-search-wrap" style="margin-bottom:0; max-width:none;"\') + \'</div>\';'
)

c5 = c4.replace(
    'html += \'<select class="brand-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid var(--border); background:var(--surface);">\';',
    'html += \'<select class="brand-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid var(--border); background:var(--surface); color:var(--text-primary);">\';'
)

if c5 != content:
    open('assets/js/catalog.js', 'w', encoding='utf-8').write(c5)
    print('Patched successfully.')
else:
    print('No changes made. Check search strings.')
