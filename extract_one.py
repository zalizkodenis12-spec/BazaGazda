import pandas as pd
import json

df = pd.read_excel('Прайс 13.07.2026р.xlsx', nrows=10, sheet_name=0)
data = df.to_dict(orient='records')

with open('scratch_excel.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
