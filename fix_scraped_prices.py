import json
import urllib.parse
import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, as_completed

CATALOG_JS_FILE = 'assets/js/catalog.js'

with open(CATALOG_JS_FILE, 'r', encoding='utf-8') as f:
    catalog = f.read()

start_idx = catalog.find("var PRODUCTS = [")
end_idx = catalog.find("];\n\n// ============================================", start_idx) + 1

products = json.loads(catalog[start_idx + 15 : end_idx])

def fetch_correct_price(p):
    name = p['name']
    url = f"https://budpostach.ua/ua/search/?search={urllib.parse.quote(name)}"
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            soup = BeautifulSoup(r.text, 'html.parser')
            # The search page has items, find the one with the same name if possible, or just the first one
            items = soup.select('.product-thumb')
            for item in items:
                t = item.select_one('.product-thumb__name')
                if t and t.text.strip() == name:
                    price_elem = item.select_one('.product-thumb__price')
                    if price_elem:
                        d_price = price_elem.get('data-price')
                        d_special = price_elem.get('data-special')
                        if d_special:
                            return float(d_special), float(d_price)
                        elif d_price:
                            return float(d_price), None
                        else:
                            # Try parsing text if attributes missing
                            pt = price_elem.select_one('.price-new')
                            if pt:
                                n = pt.text.replace(' ', '').replace('грн', '').replace('₴', '')
                                o = price_elem.select_one('.price-old')
                                o_val = o.text.replace(' ', '').replace('грн', '').replace('₴', '') if o else None
                                return float(''.join(c for c in n if c.isdigit())), float(''.join(c for c in o_val if c.isdigit())) if o_val else None
                            
                            # Fallback to pure text without spaces inside
                            # We already know pure text fails if it's concatenated, but if it has no discount it's fine.
                            n = price_elem.text.replace(' ', '').replace('грн', '').replace('₴', '')
                            # If no discount, it's just one number. If it has discount, we can't parse it easily.
                            n = ''.join(c for c in n if c.isdigit())
                            if n:
                                return float(n), None
            # If we didn't find exact match, try the first one
            if items:
                item = items[0]
                price_elem = item.select_one('.product-thumb__price')
                if price_elem:
                    d_price = price_elem.get('data-price')
                    d_special = price_elem.get('data-special')
                    if d_special:
                        return float(d_special), float(d_price)
                    elif d_price:
                        return float(d_price), None
    except Exception as e:
        pass
    return None, None

bp_products = [p for p in products if str(p.get('id', '')).startswith('bp_')]

print(f"Checking {len(bp_products)} products...")

updates = 0
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(fetch_correct_price, p): p for p in bp_products}
    for future in as_completed(futures):
        p = futures[future]
        new_p, old_p = future.result()
        if new_p is not None:
            # check if it differs
            if p.get('price') != new_p or p.get('oldPrice') != old_p:
                try:
                    print(f"Updated product: {p.get('price')} -> {new_p} (old: {old_p})")
                except:
                    pass
                p['price'] = int(new_p) if new_p.is_integer() else new_p
                if old_p:
                    p['oldPrice'] = int(old_p) if old_p.is_integer() else old_p
                else:
                    p['oldPrice'] = None
                updates += 1

print(f"Total updates: {updates}")

new_products_str = "var PRODUCTS = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n\n// ============================================"
catalog = catalog[:start_idx] + new_products_str + catalog[end_idx + 47:]

with open(CATALOG_JS_FILE, 'w', encoding='utf-8') as f:
    f.write(catalog)
print("Done!")
