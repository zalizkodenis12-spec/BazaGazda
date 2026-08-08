import pandas as pd
import sys

try:
    print("Reading excel file...")
    df = pd.read_excel('Прайс 13.07.2026р.xlsx', nrows=10)
    print("Columns:")
    print(df.columns.tolist())
    print("\nFirst few rows:")
    print(df.head())
except Exception as e:
    print("Error:", e)
