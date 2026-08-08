import requests
from bs4 import BeautifulSoup

url = 'https://budpostach.ua/product/22053-ruletka-izmeriteljnaja-werk-8mh25mm/'
r = requests.get(url, timeout=10)
soup = BeautifulSoup(r.text, 'html.parser')

classes = set()
for tag in soup.find_all(True):
    cls = tag.get('class')
    if cls:
        if isinstance(cls, list):
            classes.update(cls)
        else:
            classes.add(cls)

print("Classes containing price:", [c for c in classes if 'price' in c.lower()])
print("Classes containing img:", [c for c in classes if 'img' in c.lower() or 'image' in c.lower()])
print("Classes containing title:", [c for c in classes if 'title' in c.lower() or 'name' in c.lower()])
print("Classes containing desc:", [c for c in classes if 'desc' in c.lower() or 'tab' in c.lower()])
