import pandas as pd
import PyPDF2
import re

pdf_file = "Каталог ПТ 2026.pdf"
excel_file = "ПТ_ПРАЙС_З_ФОТО_ПТ_15_07_2026_ (3).xlsx"

print("Reading Excel...")
df = pd.read_excel(excel_file)
# Columns: 'Група (батьківська, поточна) - GRUNHELM', 'Код', 'Код 1С', 'Назва', 'Артикул', ...
articles_excel = set(df.iloc[:, 4].dropna().astype(str).str.strip().str.lower())
print(f"Total unique articles in Excel: {len(articles_excel)}")

print("Reading PDF...")
try:
    with open(pdf_file, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        num_pages = len(reader.pages)
        print(f"PDF has {num_pages} pages.")
        
        pdf_text = ""
        # Read a few pages to see if text is extractable
        for i in range(min(5, num_pages)):
            page = reader.pages[i]
            pdf_text += page.extract_text() + "\n"
            
        print("\n--- Snippet of PDF text (first 5 pages) ---")
        print(pdf_text[:1000])
        print("------------------------------------------")
except ImportError:
    print("PyPDF2 not installed. Need to install PyPDF2 or pypdf.")
except Exception as e:
    print(f"Error reading PDF: {e}")
