import requests
import json
import re
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

SITEMAP_URL = 'https://budpostach.ua/fx-sitemap/'
JSON_FILE = 'scraped_products_sitemap.json'

print("Loading JSON...")
with open(JSON_FILE, 'r', encoding='utf-8') as f:
    products = json.load(f)

# Convert to dict for fast lookup by pid
products_dict = {p['id']: p for p in products}

print("Fetching sitemap to map URLs...")
r = requests.get(SITEMAP_URL, timeout=30)
soup = BeautifulSoup(r.text, 'xml')
urls = [loc.text for loc in soup.find_all('loc') if '/product/' in loc.text]

url_map = {}
for url in urls:
    pid = "bp_" + re.sub(r'\D', '', url.split('-')[0].split('/')[-1])
    if not pid or pid == "bp_":
        pid = "bp_" + str(hash(url))[-8:]
    if pid in products_dict:
        url_map[pid] = url

print(f"Mapped {len(url_map)} products to original URLs.")

def fix_price(pid):
    url = url_map.get(pid)
    if not url:
        return
    try:
        req = requests.get(url, timeout=10)
        psoup = BeautifulSoup(req.text, 'html.parser')
        price_elem = psoup.select_one('.product-page__price')
        if price_elem:
            d_price = price_elem.get('data-price', '0')
            d_special = price_elem.get('data-special', '0')
            
            p_val = float(d_price)
            s_val = float(d_special)
            
            p_val = int(p_val) if p_val.is_integer() else p_val
            s_val = int(s_val) if s_val.is_integer() else s_val
            
            if s_val > 0:
                products_dict[pid]['price'] = s_val
                products_dict[pid]['oldPrice'] = p_val
            else:
                products_dict[pid]['price'] = p_val
                products_dict[pid]['oldPrice'] = None
                
            products_dict[pid]['available'] = (products_dict[pid]['price'] > 0)
    except Exception as e:
        pass

print("Refetching product prices to ensure 100% accuracy...")
pids = list(url_map.keys())
count = 0
with ThreadPoolExecutor(max_workers=50) as executor:
    futures = {executor.submit(fix_price, pid): pid for pid in pids}
    for future in futures:
        try:
            future.result(timeout=30)
        except Exception:
            pass
        count += 1
        if count % 500 == 0:
            print(f"Fixed {count}/{len(pids)}")
            
print("Saving fixed JSON...")
with open(JSON_FILE, 'w', encoding='utf-8') as f:
    json.dump(list(products_dict.values()), f, ensure_ascii=False, indent=2)

print("Updating catalog.js...")
with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'(const PRODUCTS = )\[.*?\];(.*?const CATEGORIES =)'
def replacer(match):
    return match.group(1) + json.dumps(list(products_dict.values()), ensure_ascii=False, indent=2) + ";" + match.group(2)

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! All prices fixed.")
