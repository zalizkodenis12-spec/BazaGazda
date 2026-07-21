// Dummy data for Catalog
const CATEGORIES = [
  { id: 'technika', name: 'Техніка', img: 'https://placehold.co/600x400/e53935/ffffff?text=Техніка' },
  { id: 'budmaterialy', name: 'Будматеріали', img: 'https://placehold.co/600x400/e53935/ffffff?text=Будматеріали' },
  { id: 'instrument', name: 'Інструмент', img: 'https://placehold.co/600x400/e53935/ffffff?text=Інструмент' },
  { id: 'dlyadomu', name: 'Для дому', img: 'https://placehold.co/600x400/e53935/ffffff?text=Для+дому' }
];

const SUBCATEGORIES = {
  technika: [
    { id: 'all', name: 'Всі товари' },
    { id: 'dribna', name: 'Дрібна техніка' },
    { id: 'velyka', name: 'Велика техніка' }
  ],
  instrument: [
    { id: 'all', name: 'Всі товари' },
    { id: 'elektro', name: 'Електроінструмент' },
    { id: 'nabory', name: 'Набори інструментів' }
  ],
  dlyadomu: [
    { id: 'all', name: 'Всі товари' },
    { id: 'posud', name: 'Посуд' },
    { id: 'himiya', name: 'Побутова хімія' }
  ],
  budmaterialy: []
};

// Generate dummy products
const generateProducts = () => {
  const products = [];
  
  // Техніка
  for(let i=1; i<=4; i++) {
    products.push({ id: `tech-d-${i}`, category: 'technika', subcategory: 'dribna', name: `Блендер Заглушка ${i}`, desc: 'Короткий опис товару, який розкриває його основні переваги та можливості.', price: 1200 + (i*150), img: `https://placehold.co/400x400/eee/999?text=Блендер+${i}` });
  }
  for(let i=1; i<=4; i++) {
    products.push({ id: `tech-v-${i}`, category: 'technika', subcategory: 'velyka', name: `Холодильник Заглушка ${i}`, desc: 'Великий місткий холодильник для всієї родини.', price: 15000 + (i*2000), img: `https://placehold.co/400x400/eee/999?text=Холодильник+${i}`, specs: { 'Об\\'єм': '300л', 'Клас': 'A++', 'Гарантія': '3 роки' } });
  }
  
  // Будматеріали
  for(let i=1; i<=8; i++) {
    products.push({ id: `bud-${i}`, category: 'budmaterialy', subcategory: null, name: `Суміш будівельна Заглушка ${i}`, desc: 'Якісна суміш для внутрішніх та зовнішніх робіт.', price: 250 + (i*20), img: `https://placehold.co/400x400/eee/999?text=Будматеріал+${i}`, specs: { 'Вага': '25кг', 'Тип': 'Універсальний' } });
  }

  // Інструмент
  for(let i=1; i<=4; i++) {
    products.push({ id: `inst-e-${i}`, category: 'instrument', subcategory: 'elektro', name: `Дриль-шурупокрут Заглушка ${i}`, desc: 'Надійний інструмент для професійного та домашнього використання.', price: 2500 + (i*300), img: `https://placehold.co/400x400/eee/999?text=Дриль+${i}` });
  }
  for(let i=1; i<=4; i++) {
    products.push({ id: `inst-n-${i}`, category: 'instrument', subcategory: 'nabory', name: `Набір ключів Заглушка ${i}`, desc: 'Комплект з 108 одиниць у зручному кейсі.', price: 1800 + (i*100), img: `https://placehold.co/400x400/eee/999?text=Набір+${i}` });
  }

  // Для дому
  for(let i=1; i<=4; i++) {
    products.push({ id: `dom-p-${i}`, category: 'dlyadomu', subcategory: 'posud', name: `Набір каструль Заглушка ${i}`, desc: 'Каструлі з нержавіючої сталі з товстим дном.', price: 3200 + (i*400), img: `https://placehold.co/400x400/eee/999?text=Каструлі+${i}` });
  }
  for(let i=1; i<=4; i++) {
    products.push({ id: `dom-h-${i}`, category: 'dlyadomu', subcategory: 'himiya', name: `Гель для прання Заглушка ${i}`, desc: 'Ефективний засіб для виведення складних плям.', price: 350 + (i*15), img: `https://placehold.co/400x400/eee/999?text=Гель+${i}` });
  }

  return products;
};

const PRODUCTS = generateProducts();

// App State
const state = {
  category: null,
  subcategory: 'all',
  sort: 'default'
};

const root = document.getElementById('catalog-root');
const modal = document.getElementById('orderModal');
const orderForm = document.getElementById('orderForm');

// Parse URL on load
const initCatalog = () => {
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  state.category = params.get('category');
  
  if (state.category && CATEGORIES.find(c => c.id === state.category)) {
    renderCategoryPage();
  } else {
    renderMainCatalog();
  }
};

const renderMainCatalog = () => {
  root.innerHTML = `
    <div class="container">
      <div class="catalog-header reveal">
        <h1 class="section-title">Каталог Товарів</h1>
        <p class="section-desc">Оберіть категорію, щоб переглянути асортимент</p>
      </div>
      <div class="category-grid reveal">
        ${CATEGORIES.map(c => `
          <a href="?category=${c.id}" class="category-card">
            <img src="${c.img}" alt="${c.name}" loading="lazy">
            <div class="category-card-title">${c.name}</div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
};

const renderCategoryPage = () => {
  const catInfo = CATEGORIES.find(c => c.id === state.category);
  const subs = SUBCATEGORIES[state.category];
  
  let filteredProducts = PRODUCTS.filter(p => p.category === state.category);
  if (state.subcategory && state.subcategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.subcategory === state.subcategory);
  }
  
  if (state.sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (state.sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const chipsHtml = subs && subs.length > 0 ? `
    <div class="catalog-filters">
      ${subs.map(s => `
        <button class="chip ${state.subcategory === s.id ? 'active' : ''}" data-sub="${s.id}">
          ${s.name}
        </button>
      `).join('')}
    </div>
  ` : '<div></div>';

  const productsHtml = filteredProducts.length > 0 ? filteredProducts.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
      <div class="product-content">
        <div class="product-category">${catInfo.name}</div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        
        ${p.specs ? `
          <div class="product-specs">
            ${Object.entries(p.specs).map(([k,v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('')}
          </div>
        ` : ''}
        
        <div class="product-footer">
          <div class="product-price">${p.price} ₴</div>
          <button class="btn btn-cta btn-sm btn-order" data-id="${p.id}" data-name="${p.name}">Залишити заявку</button>
        </div>
      </div>
    </div>
  `).join('') : '<div class="product-empty">Товарів не знайдено</div>';

  root.innerHTML = `
    <div class="container">
      <a href="catalog.html" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Назад до категорій
      </a>
      
      <div class="catalog-header reveal">
        <h1 class="section-title">${catInfo.name}</h1>
      </div>
      
      <div class="catalog-controls reveal">
        ${chipsHtml}
        <select class="sort-select" id="sortSelect">
          <option value="default" ${state.sort === 'default' ? 'selected' : ''}>Сортування: За замовчуванням</option>
          <option value="price-asc" ${state.sort === 'price-asc' ? 'selected' : ''}>Від найдешевших</option>
          <option value="price-desc" ${state.sort === 'price-desc' ? 'selected' : ''}>Від найдорожчих</option>
        </select>
      </div>

      <div class="products-grid reveal" id="productsGrid">
        ${productsHtml}
      </div>
    </div>
  `;

  bindEvents();
};

const bindEvents = () => {
  // Chips filter
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      state.subcategory = e.target.dataset.sub;
      renderCategoryPage();
    });
  });

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderCategoryPage();
    });
  }

  // Order buttons
  const orderBtns = document.querySelectorAll('.btn-order');
  orderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      openModal(e.target.dataset.id, e.target.dataset.name);
    });
  });
};

// Modal Logic
const openModal = (productId, productName) => {
  if (!modal) return;
  document.getElementById('orderProductId').value = productId;
  document.getElementById('modalProductName').textContent = productName;
  document.getElementById('orderStatus').textContent = '';
  document.getElementById('orderStatus').className = 'booking-status';
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  orderForm.reset();
};

if (modal) {
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = orderForm.name.value.trim();
    const phone = orderForm.phone.value.trim();
    const comment = orderForm.comment.value.trim();
    const productId = orderForm.productId.value;
    const productName = document.getElementById('modalProductName').textContent;

    if (!name || !phone) return;

    // Simulate sending data
    console.log("=== Нова Заявка ===");
    console.log("Товар:", productName, "(ID:", productId, ")");
    console.log("Ім'я:", name);
    console.log("Телефон:", phone);
    console.log("Коментар:", comment);
    
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Надсилаємо...';

    setTimeout(() => {
      const statusEl = document.getElementById('orderStatus');
      statusEl.textContent = 'Дякуємо за заявку! Ми зателефонуємо вам найближчим часом.';
      statusEl.className = 'booking-status success';
      
      submitBtn.disabled = false;
      submitBtn.textContent = 'Надіслати заявку';
      orderForm.reset();
      
      setTimeout(closeModal, 3000);
    }, 1000);
  });
}

// Initialize
initCatalog();
