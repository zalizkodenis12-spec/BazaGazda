import json
import collections

with open('scratch_products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

counter = collections.Counter(p['name'].split()[0] for p in data)
with open('themes.txt', 'w', encoding='utf-8') as f:
    for word, count in counter.most_common(50):
        f.write(f"{word}: {count}\n")
