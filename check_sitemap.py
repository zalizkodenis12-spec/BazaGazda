import requests
from bs4 import BeautifulSoup
import time

url = 'https://budpostach.ua/fx-sitemap/'
r = requests.get(url, timeout=10)
soup = BeautifulSoup(r.text, 'xml')

urls = [loc.text for loc in soup.find_all('loc') if '/product/' in loc.text]
print(f"Total product URLs in sitemap: {len(urls)}")

# Check one product to see breadcrumbs
if urls:
    test_url = urls[10]
    print(f"Testing {test_url}...")
    pr = requests.get(test_url, timeout=10)
    psoup = BeautifulSoup(pr.text, 'html.parser')
    
    breadcrumbs = []
    for li in psoup.select('.breadcrumb li'):
        a = li.select_one('a')
        if a:
            breadcrumbs.append((a.text.strip(), a.get('href')))
    
    print("Breadcrumbs:")
    for b in breadcrumbs:
        print(" -", b[0], "->", b[1])
