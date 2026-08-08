import requests
from bs4 import BeautifulSoup

url = 'https://budpostach.ua/category/sadova-tehnika/kosi-ta-trimmeri/'
r = requests.get(url, timeout=10)
soup = BeautifulSoup(r.text, 'html.parser')

print("Product items:", len(soup.select('.product-thumb')))

# Try to find pagination
for ul in soup.select('ul'):
    if 'class' in ul.attrs:
        print("ul class:", ul['class'])
        
# Try to find next button
for a in soup.select('a'):
    if a.get('href') and 'page=' in a.get('href'):
        print("Page link:", a.get('href'))
