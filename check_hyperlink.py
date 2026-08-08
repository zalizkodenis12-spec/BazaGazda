import openpyxl

print("Loading workbook to check hyperlinks...")
wb = openpyxl.load_workbook('Прайс 13.07.2026р.xlsx')
ws = wb.worksheets[0]

for row_idx in range(6, 11):
    row = ws[row_idx]
    for cell in row:
        val = str(cell.value).strip() if cell.value else ""
        if 'фото' in val.lower():
            if cell.hyperlink:
                print(f"Row {cell.row}, Col {cell.column} has value '{val}' with hyperlink: {cell.hyperlink.target}")
            else:
                print(f"Row {cell.row}, Col {cell.column} has value '{val}' but NO hyperlink.")
