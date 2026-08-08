import json

with open('scraped_products_deep.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

categories = {}
for p in products:
    c = p['category']
    categories[c] = categories.get(c, 0) + 1

print("Counts by main category:")
for c, count in categories.items():
    print(f"{c}: {count}")
