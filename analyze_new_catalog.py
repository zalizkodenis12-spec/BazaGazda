import pandas as pd
import json

file_path = "ПТ_ПРАЙС_З_ФОТО_ПТ_15_07_2026_ (3).xlsx"

print(f"Loading {file_path}...")
df = pd.read_excel(file_path, nrows=20) # Just read the first 20 rows to understand the structure

print("\nColumns found:")
for col in df.columns:
    print(f"- {col}")

print("\nFirst 5 rows (as dicts):")
rows = df.head(5).to_dict(orient='records')
print(json.dumps(rows, ensure_ascii=False, indent=2))
