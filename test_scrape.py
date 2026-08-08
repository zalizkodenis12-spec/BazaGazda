import requests
from bs4 import BeautifulSoup
import json

url = "https://budpostach.ua/category/sadova-tehnika/"
print(f"Fetching {url}...")
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')

products = []
for item in soup.select('.product-thumb'):
    try:
        # Title and URL
        title_elem = item.select_one('.product-thumb__name')
        if not title_elem:
            continue
        title = title_elem.text.strip()
        link = title_elem.get('href')
        
        # Price
        price_elem = item.select_one('.product-thumb__price')
        price_text = price_elem.text.strip().replace(' ', '').replace('грн', '').replace('₴', '') if price_elem else '0'
        price_text = ''.join(c for c in price_text if c.isdigit())
        price = float(price_text) if price_text else 0
        
        # Image
        img_elem = item.select_one('.product-thumb__image img')
        img_url = img_elem.get('src') or img_elem.get('data-src') if img_elem else ''
        
        # Model / SKU
        sku_elem = item.select_one('.product-thumb__model')
        sku = sku_elem.text.replace('Модель:', '').strip() if sku_elem else ''
        
        products.append({
            'name': title,
            'price': price,
            'sku': sku,
            'img': img_url,
            'link': link
        })
    except Exception as e:
        print(f"Error parsing item: {e}")

print(f"Found {len(products)} products on first page.")
if products:
    print("Sample:", json.dumps(products[0], ensure_ascii=False, indent=2))

# Also check pagination
pagination = soup.select('.pagination a')
pages = [a.text for a in pagination if a.text.isdigit()]
print("Pages:", pages)
