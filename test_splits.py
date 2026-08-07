import json

catalog = open('assets/js/catalog.js', 'r', encoding='utf-8').read()
products_json = catalog.split('var PRODUCTS = ')[1].split(';\n\n//')[0]
products = json.loads(products_json)

def split_price(p):
    s = str(int(p))
    L = len(s)
    valid_splits = []
    for mid in range(1, L):
        old_str = s[:mid]
        new_str = s[mid:]
        if new_str.startswith('0') and len(new_str) > 1:
            continue
        try:
            old_p = int(old_str)
            new_p = int(new_str)
            # Old price > new price, and old price is <= new_price * 2.5 (max 60% discount)
            if new_p > 0 and old_p > new_p and old_p <= new_p * 2.5:
                valid_splits.append((old_p, new_p))
        except:
            pass
    return valid_splits

count = 0
for p in products:
    price = p.get('price', 0)
    if price > 0 and str(p.get('id', '')).startswith('bp_'):
        splits = split_price(price)
        if len(splits) == 1:
            print(f"{p['name'][:30]}: {price} -> {splits[0]}")
            count += 1
        elif len(splits) > 1:
            print(f"MULTIPLE SPLITS for {p['name'][:30]}: {price} -> {splits}")
            count += 1

print(f'Total concatenated candidates: {count}')
