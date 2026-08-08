import openpyxl
import json
import math

print("Loading workbook...")
wb = openpyxl.load_workbook('Прайс 13.07.2026р.xlsx', data_only=True)
ws = wb.worksheets[0]

products = []
current_category = "dlyadomu" # Default category
current_subcategory = "all"

# Start iterating from row 6
for row_idx, row in enumerate(ws.iter_rows(min_row=6, values_only=True), start=6):
    # Column indices (0-based):
    # 1: Код 1С (ID)
    # 3: Найменування (Name)
    # 6: Артикул (SKU)
    # 8: РРЦ, в грн з ПДВ (Price)
    # 14: Залишки ЦС (Availability) - if > 0 then available
    
    col_name = str(row[3]).strip() if row[3] else ""
    
    if not col_name or col_name == 'None':
        continue
        
    # If the row has no ID, it might be a category header
    col_id = row[1]
    if not col_id:
        # Category heuristic or just ignore
        continue
        
    try:
        price = float(row[8]) if row[8] is not None else 0.0
    except ValueError:
        price = 0.0
        
    if price == 0:
        continue
        
    # Image URL
    img_url = f"http://31.172.143.18/price/image/{col_id}.jpg"
    
    # Available
    try:
        qty = float(row[12]) if row[12] is not None else 0
        available = qty > 0
    except ValueError:
        available = True

    # Description
    sku = str(row[6]) if row[6] else ""
    desc = f"Артикул: {sku}. Код 1С: {col_id}."
    
    product = {
        "id": str(col_id),
        "category": current_category,
        "subcategory": current_subcategory,
        "available": available,
        "name": col_name,
        "price": price,
        "desc": desc,
        "images": [img_url],
        "specs": []
    }
    products.append(product)

print(f"Extracted {len(products)} products.")

# Dump first 2 products to verify
print("First 2 products:")
print(json.dumps(products[:2], ensure_ascii=False, indent=2))

with open('scratch_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)
