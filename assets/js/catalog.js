document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('catalog-root');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('category');
  let currentSubcategory = urlParams.get('subcategory') || 'all';
  let currentSort = 'default';

  const data = window.CATALOG_DATA;

  function render() {
    root.innerHTML = '';
    
    if (!currentCategory) {
      renderCategoriesGrid();
    } else {
      const categoryObj = data.categories.find(c => c.id === currentCategory);
      if (!categoryObj) {
        root.innerHTML = '<h2>Категорія не знайдена</h2>';
        return;
      }
      renderCategoryPage(categoryObj);
    }
  }

  function renderCategoriesGrid() {
    const html = `
      <div class="section-head text-center">
        <h2 class="section-title center">Каталог товарів</h2>
        <p class="section-desc">Оберіть потрібну категорію</p>
      </div>
      <div class="catalog-grid">
        ${data.categories.map(c => `
          <a href="?category=${c.id}" class="category-card">
            <div class="cat-image" style="background-image: url('${c.image}')"></div>
            <h3 class="cat-title">${c.name}</h3>
          </a>
        `).join('')}
      </div>
    `;
    root.innerHTML = html;
  }

  function renderCategoryPage(cat) {
    const subs = data.subcategories[cat.id] || [];
    let products = data.products.filter(p => p.category === cat.id);

    if (currentSubcategory !== 'all') {
      products = products.filter(p => p.subcategory === currentSubcategory);
    }

    if (currentSort === 'price-asc') products.sort((a,b) => a.price - b.price);
    else if (currentSort === 'price-desc') products.sort((a,b) => b.price - a.price);

    let chipsHtml = '';
    if (subs.length > 0) {
      chipsHtml = `
        <div class="chips-wrap">
          <button class="chip ${currentSubcategory === 'all' ? 'active' : ''}" data-sub="all">Всі товари</button>
          ${subs.map(s => `
            <button class="chip ${currentSubcategory === s.id ? 'active' : ''}" data-sub="${s.id}">${s.name}</button>
          `).join('')}
        </div>
      `;
    }

    const html = `
      <div class="catalog-header">
        <a href="catalog.html" class="btn btn-outline btn-sm back-btn">&larr; Всі категорії</a>
        <h2 class="section-title">${cat.name}</h2>
      </div>
      
      <div class="catalog-controls">
        ${chipsHtml}
        <div class="sort-wrap">
          <select id="sortSelect" class="form-select">
            <option value="default" ${currentSort === 'default' ? 'selected' : ''}>За замовчуванням</option>
            <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Дешевші вище</option>
            <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Дорожчі вище</option>
          </select>
        </div>
      </div>

      <div class="products-grid">
        ${products.map(p => `
          <div class="product-card">
            <div class="p-image"><img src="${p.image}" alt="${p.name}"></div>
            <div class="p-content">
              <h4 class="p-title">${p.name}</h4>
              <p class="p-desc">${p.desc}</p>
              ${p.specs ? `<ul class="p-specs">${Object.entries(p.specs).map(([k,v]) => `<li><span>${k}:</span> ${v}</li>`).join('')}</ul>` : ''}
              <div class="p-bottom">
                <span class="p-price">${p.price} ₴</span>
                <button class="btn btn-cta btn-sm order-btn" data-product="${p.name}">Замовити</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    root.innerHTML = html;

    // Listeners
    const chips = root.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        currentSubcategory = e.target.getAttribute('data-sub');
        render();
      });
    });

    const sortSelect = root.querySelector('#sortSelect');
    if(sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        render();
      });
    }

    const orderBtns = root.querySelectorAll('.order-btn');
    orderBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        openOrderModal(e.target.getAttribute('data-product'));
      });
    });
  }

  // --- Modal ---
  const modalHtml = `
    <div class="modal-overlay" id="orderModal">
      <div class="modal-box">
        <button class="modal-close" id="closeModal">&times;</button>
        <h3 class="modal-title">Залишити заявку</h3>
        <p class="modal-desc" id="modalProductText"></p>
        <form id="orderForm">
          <input type="hidden" id="modalProductName" name="product">
          <div class="form-group">
            <label>Ім'я</label>
            <input type="text" name="name" class="form-input" required placeholder="Ваше ім'я">
          </div>
          <div class="form-group">
            <label>Телефон</label>
            <input type="tel" name="phone" class="form-input" required placeholder="+38 (0__) ___-__-__">
          </div>
          <div class="form-group">
            <label>Коментар (необов'язково)</label>
            <textarea name="comment" class="form-input" rows="2" placeholder="Додаткові побажання"></textarea>
          </div>
          <button type="submit" class="btn btn-cta" style="width:100%;">Відправити</button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('orderModal');
  const closeBtn = document.getElementById('closeModal');
  const orderForm = document.getElementById('orderForm');

  function openOrderModal(productName) {
    document.getElementById('modalProductText').innerText = `Товар: ${productName}`;
    document.getElementById('modalProductName').value = productName;
    modal.classList.add('active');
  }

  function closeOrderModal() {
    modal.classList.remove('active');
    orderForm.reset();
  }

  closeBtn.addEventListener('click', closeOrderModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeOrderModal();
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(orderForm);
    const dataObj = Object.fromEntries(formData.entries());
    console.log('--- ЗАЯВКА НА ТОВАР ---');
    console.log(dataObj);
    alert('Заявку успішно створено! Ми з вами зв\'яжемось (дані виведені в консоль).');
    closeOrderModal();
  });

  // Initial render
  render();
});
