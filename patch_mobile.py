import sys

# 1. Update styles.css
css_patch = """
/* Mobile Filter */
.filter-btn {
  display: none;
  background: var(--surface-2);
  color: var(--text-primary);
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  align-items: center;
  gap: 8px;
}
.catalog-sidebar-close {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 28px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
  line-height: 1;
}
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  z-index: 99;
}
.sidebar-overlay.active {
  display: block;
}

@media (max-width: 768px) {
  .filter-btn {
    display: flex;
  }
  .catalog-sidebar {
    position: fixed !important;
    bottom: -100%;
    left: 0;
    right: 0;
    top: auto !important;
    width: 100% !important;
    max-height: 85vh !important;
    background: var(--bg);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 40px 20px 20px 20px;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.5);
    z-index: 100;
    transition: bottom 0.3s ease;
    overflow-y: auto;
  }
  .catalog-sidebar.mobile-open {
    bottom: 0;
  }
  .catalog-sidebar-close {
    display: block;
  }
  .catalog-controls {
    flex-wrap: wrap;
  }
  .catalog-search-wrap-inline {
    width: 100%;
    order: -1;
  }
}
"""

with open('assets/css/styles.css', 'r', encoding='utf-8') as f:
    styles = f.read()

if '/* Mobile Filter */' not in styles:
    with open('assets/css/styles.css', 'a', encoding='utf-8') as f:
        f.write(css_patch)
    print("CSS updated.")

# 2. Update catalog.js
with open('assets/js/catalog.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Add overlay, id to sidebar, and close button
js = js.replace(
    'html += \'<aside class="catalog-sidebar" style="flex: 0 0 260px; width:100%; position: sticky; top: 80px; max-height: calc(100vh - 100px); overflow-y: auto; padding-right:10px;">\';',
    'html += \'<div class="sidebar-overlay" id="sidebarOverlay" onclick="document.getElementById(\\\'catalogSidebar\\\').classList.remove(\\\'mobile-open\\\'); this.classList.remove(\\\'active\\\');"></div>\';\n  html += \'<aside class="catalog-sidebar" id="catalogSidebar" style="flex: 0 0 260px; width:100%; position: sticky; top: 80px; max-height: calc(100vh - 100px); overflow-y: auto; padding-right:10px;">\';\n  html += \'<button class="catalog-sidebar-close" onclick="document.getElementById(\\\'catalogSidebar\\\').classList.remove(\\\'mobile-open\\\'); document.getElementById(\\\'sidebarOverlay\\\').classList.remove(\\\'active\\\');">×</button>\';'
)

# Add filter button
js = js.replace(
    'html += \'<select class="sort-select" id="sortSelect">\'+',
    'html += \'<button class="filter-btn" id="mobileFilterBtn" onclick="document.getElementById(\\\'catalogSidebar\\\').classList.add(\\\'mobile-open\\\'); document.getElementById(\\\'sidebarOverlay\\\').classList.add(\\\'active\\\');"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg> Фільтр</button>\';\n  html += \'<select class="sort-select" id="sortSelect">\'+'
)

# Also close mobile sidebar if they click a chip!
js = js.replace(
    'html += \'<button class="chip\'+(state.subcategory===subs[s].id?\' active\':\'\')+\'" data-sub="\'+subs[s].id+\'" style="justify-content:flex-start; text-align:left;">\'+subs[s].name+\'</button>\';',
    'html += \'<button class="chip\'+(state.subcategory===subs[s].id?\' active\':\'\')+\'" data-sub="\'+subs[s].id+\'" onclick="document.getElementById(\\\'catalogSidebar\\\').classList.remove(\\\'mobile-open\\\'); document.getElementById(\\\'sidebarOverlay\\\').classList.remove(\\\'active\\\');" style="justify-content:flex-start; text-align:left;">\'+subs[s].name+\'</button>\';'
)
# And when they change brand select!
js = js.replace(
    'html += \'<select class="brand-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid var(--border); background:var(--surface); color:var(--text-primary);">\';',
    'html += \'<select class="brand-select" onchange="document.getElementById(\\\'catalogSidebar\\\').classList.remove(\\\'mobile-open\\\'); document.getElementById(\\\'sidebarOverlay\\\').classList.remove(\\\'active\\\');" style="width:100%; padding:10px; border-radius:6px; border:1px solid var(--border); background:var(--surface); color:var(--text-primary);">\';'
)

with open('assets/js/catalog.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("JS updated.")
