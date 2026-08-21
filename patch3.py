import sys

# 1. Update catalog.js HTML ordering
with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    js = f.read()

subs_block = """if (subs && subs.length>0) {
    html += '<div class="filter-group" style="margin-bottom:20px; background:var(--surface-2); padding:15px; border-radius:8px;">';
    html += '<h3 style="margin-bottom:12px; font-size:16px;">\\u041f\\u0456\\u0434\\u043a\\u0430\\u0442\\u0435\\u0433\\u043e\\u0440\\u0456\\u044f</h3>';
    html += '<div class="catalog-filters" style="display:flex; flex-direction:column; gap:8px;">';
    for (var s=0;s<subs.length;s++) {
      html += '<button class="chip'+(state.subcategory===subs[s].id?' active':'')+'" data-sub="'+subs[s].id+'" onclick="document.getElementById(\\'catalogSidebar\\').classList.remove(\\'mobile-open\\'); document.getElementById(\\'sidebarOverlay\\').classList.remove(\\'active\\');" style="justify-content:flex-start; text-align:left;">'+subs[s].name+'</button>';
    }
    html += '</div></div>';
  }"""

brands_block = """if (brands && brands.length>0) {
    html += '<div class="filter-group" style="margin-bottom:20px; background:var(--surface-2); padding:15px; border-radius:8px;">';
    html += '<h3 style="margin-bottom:12px; font-size:16px;">\\u0412\\u0438\\u0440\\u043e\\u0431\\u043d\\u0438\\u043a</h3>';
    html += '<select class="brand-select" onchange="document.getElementById(\\'catalogSidebar\\').classList.remove(\\'mobile-open\\'); document.getElementById(\\'sidebarOverlay\\').classList.remove(\\'active\\');" style="width:100%; padding:10px; border-radius:6px; border:1px solid var(--border); background:var(--surface); color:var(--text-primary);">';
    html += '<option value="all"'+(state.brand==='all'?' selected':'')+'>\\u0423\\u0441\\u0456 \\u0432\\u0438\\u0440\\u043e\\u0431\\u043d\\u0438\\u043a\\u0438</option>';
    for (var b=0;b<brands.length;b++) {
      html += '<option value="'+brands[b].id+'"'+(state.brand===brands[b].id?' selected':'')+'>'+brands[b].name+'</option>';
    }
    html += '</select></div>';
  }"""

if subs_block in js and brands_block in js and js.find(subs_block) < js.find(brands_block):
    # Perform swap
    js = js.replace(subs_block + "\n  \n  " + brands_block, brands_block + "\n  \n  " + subs_block)
    js = js.replace(subs_block + "\n\n  " + brands_block, brands_block + "\n  \n  " + subs_block)
    with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("Swapped blocks in catalog.js")
else:
    print("Could not swap, maybe already swapped?")

# 2. Update update_catalog.py Python filtering logic
with open('update_catalog.py', 'r', encoding='utf-8') as f:
    upd = f.read()

old_logic = """for (var cat in BRANDS) {
    var arr = [];
    var brandsList = Array.from(BRANDS[cat]).sort(function(a, b) {"""

new_logic = """for (var cat in BRANDS) {
    var arr = [];
    var rawBrands = Array.from(BRANDS[cat]);
    if (cat === 'instrument') {
        var allowedInst = ['forte', 'procraft', 'haisser', 'сталь', 'x-treme', 'світязь'];
        rawBrands = rawBrands.filter(function(b) {
            var bLower = b.toLowerCase();
            return allowedInst.some(function(al) { return bLower.includes(al); });
        });
    } else if (cat === 'technika') {
        rawBrands = rawBrands.filter(function(b) { return b.toLowerCase().includes('grunhelm'); });
    }
    
    var brandsList = rawBrands.sort(function(a, b) {"""

if old_logic in upd:
    upd = upd.replace(old_logic, new_logic)
    with open('update_catalog.py', 'w', encoding='utf-8') as f:
        f.write(upd)
    print("Updated update_catalog.py")
else:
    print("Could not find old_logic in update_catalog.py")

