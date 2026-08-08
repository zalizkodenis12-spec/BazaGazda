import re

STYLES_CSS = 'assets/css/styles.css'

with open(STYLES_CSS, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Replace the filters mobile block
old_filters = """  .catalog-filters { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 8px; -webkit-overflow-scrolling: touch; }
  .catalog-filters::-webkit-scrollbar { display: none; }
  .chip { white-space: nowrap; font-size: 13px; padding: 8px 16px; flex-shrink: 0; }"""

new_filters = """  .catalog-filters { justify-content: flex-start; flex-wrap: wrap; gap: 8px; overflow-x: visible; padding-bottom: 0; }
  .chip { white-space: nowrap; font-size: 12px; padding: 6px 12px; }"""

if old_filters in css_content:
    css_content = css_content.replace(old_filters, new_filters)
else:
    print("Could not find old_filters block.")

# Replace the products grid mobile block
old_grid = """  /* Product Grid - 2 Columns */
  .products-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .product-img { height: 150px; }
  .product-content { padding: 12px; }
  .product-title { font-size: 0.95rem; margin-bottom: 6px; }
  .product-desc { display: none; }
  .product-specs { display: none; }
  .product-price { font-size: 1.15rem; }
  .product-card-arrow { display: none; }
  .btn-add-cart { width: 40px; height: 40px; padding: 0; justify-content: center; border-radius: 50%; }
  .add-cart-text { display: none; }"""

new_grid = """  /* Product Grid - 2 Columns */
  .products-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .product-card-img-link img { height: 160px; }
  .product-content { padding: 8px; }
  .product-title { font-size: 0.85rem; margin-bottom: 4px; line-height: 1.3; }
  .product-desc { display: none; }
  .product-specs { display: none; }
  .product-price { font-size: 1.1rem; font-weight: 700; }
  .product-card-arrow { display: none; }
  .btn-add-cart { width: 34px; height: 34px; padding: 0; justify-content: center; border-radius: 50%; }
  .btn-add-cart svg { width: 16px; height: 16px; }
  .add-cart-text { display: none; }"""

if old_grid in css_content:
    css_content = css_content.replace(old_grid, new_grid)
else:
    print("Could not find old_grid block.")

with open(STYLES_CSS, 'w', encoding='utf-8') as f:
    f.write(css_content)

print("CSS updated successfully!")
