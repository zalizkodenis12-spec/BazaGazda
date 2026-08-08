from duckduckgo_search import DDGS

name = "Варильна поверхня GPC 453 BE"
try:
    with DDGS() as ddgs:
        results = list(ddgs.images(name, max_results=1))
        if results:
            print("Found image:", results[0]['image'])
        else:
            print("No image found.")
except Exception as e:
    print("Error:", e)
