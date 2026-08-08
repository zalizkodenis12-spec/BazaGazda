import openpyxl

print("Loading workbook to find images...")
wb = openpyxl.load_workbook('Прайс 13.07.2026р.xlsx')

for sheet_name in wb.sheetnames:
    ws = wb[sheet_name]
    num_images = len(ws._images)
    print(f"Sheet '{sheet_name}' has {num_images} images.")
    
    if num_images > 0:
        print(f"Extracting first image from sheet '{sheet_name}'...")
        img = ws._images[0]
        row = img.anchor._from.row + 1 if hasattr(img, 'anchor') and hasattr(img.anchor, '_from') else "Unknown"
        print(f"Image found around row {row}")
        
        # Save first image to use it for the test product
        img_data = img._data()
        with open('assets/images/test_excel_image.jpg', 'wb') as f:
            f.write(img_data)
        print("Saved to assets/images/test_excel_image.jpg")
        break
