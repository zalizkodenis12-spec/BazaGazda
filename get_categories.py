import requests
from bs4 import BeautifulSoup

url = "https://budpostach.ua/"
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')

print("Categories found:")
for a in soup.select('.menu__level-1-a'):
    name = a.text.strip()
    href = a.get('href')
    print(f"- {name}: {href}")
