import requests
from bs4 import BeautifulSoup
import json

url = 'https://budpostach.ua/product/22053-ruletka-izmeriteljnaja-werk-8mh25mm/'
r = requests.get(url, timeout=10)
soup = BeautifulSoup(r.text, 'html.parser')

name = soup.select_one('h1').text.strip()
print("Name:", name)

price_elem = soup.select_one('.us-price-new') or soup.select_one('.us-price__price') or soup.select_one('.product-price')
print("Price:", price_elem.text.strip() if price_elem else 'Not found')

old_price_elem = soup.select_one('.us-price-old') or soup.select_one('.price-old')
print("Old Price:", old_price_elem.text.strip() if old_price_elem else 'Not found')

desc = soup.select_one('#tab-description')
print("Desc length:", len(desc.text.strip()) if desc else 0)

specs = soup.select('#tab-specification tr')
print("Specs count:", len(specs) if specs else 0)

img = soup.select_one('.product-image img') or soup.select_one('.thumbnails img') or soup.select_one('.us-product-photo__image')
print("Image:", img.get('src') if img else 'Not found')

breadcrumbs = [a.text.strip() for a in soup.select('.breadcrumb a')]
print("Breadcrumbs:", breadcrumbs)
