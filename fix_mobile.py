import re

CATALOG_JS = 'assets/js/catalog.js'
STYLES_CSS = 'assets/css/styles.css'

print("Fixing catalog.js inline styles...")
with open(CATALOG_JS, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Remove inline styles that break mobile
js_content = js_content.replace(
    '<div class="catalog-filters-wrap" style="display:flex; flex-wrap:wrap; align-items:center; gap:16px; flex:1;">',
    '<div class="catalog-filters-wrap">'
)
js_content = js_content.replace(
    '<div class="catalog-filters" style="margin:0;">',
    '<div class="catalog-filters">'
)
js_content = js_content.replace(
    '<div style="flex-grow:1; margin-bottom:0;" class="catalog-search-wrap-inline">',
    '<div class="catalog-search-wrap-inline">'
)

with open(CATALOG_JS, 'w', encoding='utf-8') as f:
    f.write(js_content)


print("Fixing styles.css for mobile and desktop...")
with open(STYLES_CSS, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Add desktop styles for .catalog-filters-wrap and .catalog-search-wrap-inline if not exist
if '.catalog-filters-wrap {' not in css_content:
    new_rules = """
.catalog-filters-wrap { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; flex: 1; }
.catalog-search-wrap-inline { flex-grow: 1; margin-bottom: 0; }
.catalog-search-wrap-inline .catalog-search-wrap { margin-bottom: 0; max-width: none; }
"""
    # insert after .catalog-filters
    css_content = css_content.replace('.catalog-filters { display: flex; flex-wrap: wrap; gap: 10px; }', 
                                      '.catalog-filters { display: flex; flex-wrap: wrap; gap: 10px; }' + new_rules)


# Fix mobile chips - add flex-shrink: 0
mobile_chip_target = ".chip { white-space: nowrap; font-size: 13px; padding: 8px 16px; }"
if mobile_chip_target in css_content:
    css_content = css_content.replace(
        mobile_chip_target,
        ".chip { white-space: nowrap; font-size: 13px; padding: 8px 16px; flex-shrink: 0; }"
    )

with open(STYLES_CSS, 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Done fixing responsive layout!")
