import requests
from bs4 import BeautifulSoup
import re

r = requests.get('https://budpostach.ua/category/sadova-tehnika/kosi-ta-trimmeri/', timeout=10)
soup = BeautifulSoup(r.text, 'html.parser')

items = soup.select('.product-thumb')
print("Items found:", len(items))

# Let's see if there is any script tag containing JSON data that holds the remaining items
scripts = soup.select('script')
for script in scripts:
    if script.string:
        if 'window.products' in script.string or 'items' in script.string:
            print("Found some JS data...")

text = soup.get_text()
match = re.search(r'\d+\s+товар', text)
if match:
    print("Found text:", match.group())
