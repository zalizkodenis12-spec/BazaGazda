// ============================================
//  CATALOG DATA
// ============================================
var CATEGORIES = [
  { id: 'technika',     name: 'Техніка',       img: 'https://placehold.co/600x400/e53935/ffffff?text=%D0%A2%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0' },
  { id: 'budmaterialy', name: 'Будматеріали',   img: 'https://placehold.co/600x400/e53935/ffffff?text=%D0%91%D1%83%D0%B4%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8' },
  { id: 'instrument',   name: 'Інструмент',     img: 'https://placehold.co/600x400/e53935/ffffff?text=%D0%86%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82' },
  { id: 'dlyadomu',    name: 'Для дому',       img: 'https://placehold.co/600x400/e53935/ffffff?text=%D0%94%D0%BB%D1%8F+%D0%B4%D0%BE%D0%BC%D1%83' }
];

var SUBCATEGORIES = {
  technika:     [{ id: 'all', name: 'Всі товари' }, { id: 'dribna', name: 'Дрібна техніка' }, { id: 'velyka', name: 'Велика техніка' }],
  instrument:   [{ id: 'all', name: 'Всі товари' }, { id: 'elektro', name: 'Електроінструмент' }, { id: 'nabory', name: 'Набори інструментів' }],
  dlyadomu:     [{ id: 'all', name: 'Всі товари' }, { id: 'posud', name: 'Посуд' }, { id: 'himiya', name: 'Побутова хімія' }],
  budmaterialy: []
};

var PRODUCTS = [
  // ---- Техніка: Дрібна ----
  { id: 'td1', category: 'technika', subcategory: 'dribna', name: 'Блендер Phillipa BL-200',    price: 1350, desc: 'Потужний блендер 800Вт з набором чаш для щоденного використання.',    img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Блендер' },
  { id: 'td2', category: 'technika', subcategory: 'dribna', name: 'Тостер TechHome T4',         price: 980,  desc: 'Тостер на 4 слоти з регулюванням ступеня підсмаження.',               img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Тостер' },
  { id: 'td3', category: 'technika', subcategory: 'dribna', name: 'Чайник електричний 2.5л',    price: 1100, desc: 'Швидке кипіння за 3 хвилини, нержавіюча сталь, підсвітка.',             img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Чайник' },
  { id: 'td4', category: 'technika', subcategory: 'dribna', name: 'Мікрохвильова піч 20л',      price: 2850, desc: 'Мікрохвильова піч з грилем, 5 режимів потужності, таймер.',            img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Мікрохвильова' },
  { id: 'td5', category: 'technika', subcategory: 'dribna', name: 'Соковижималка ProFresh',     price: 1600, desc: 'Шнекова соковижималка, зберігає максимум вітамінів.',                  img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Соковижималка' },
  { id: 'td6', category: 'technika', subcategory: 'dribna', name: 'Кавоварка EspressoPro',      price: 3200, desc: 'Автоматична кавоварка з капучинатором, 15 бар тиску.',                img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Кавоварка' },
  // ---- Техніка: Велика ----
  { id: 'tv1', category: 'technika', subcategory: 'velyka', name: 'Холодильник FrostMax 300',   price: 18000, desc: 'Двокамерний холодильник No Frost, клас A++.', img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Холодильник', specs: [['Об`єм', '300 л'], ['Клас', 'A++'], ['Гарантія', '3 роки']] },
  { id: 'tv2', category: 'technika', subcategory: 'velyka', name: 'Пральна машина ClearWash 7', price: 15500, desc: 'Фронтальне завантаження 7 кг, 1200 об/хв, 16 програм.',               img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Пральна', specs: [['Завантаження', '7 кг'], ['Обороти', '1200 об/хв'], ['Гарантія', '2 роки']] },
  { id: 'tv3', category: 'technika', subcategory: 'velyka', name: 'Посудомийна машина DishMate', price: 14000, desc: 'Вбудована посудомийка, 12 комплектів, 5 програм.', img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Посудомийна', specs: [['Місткість', '12 компл.'], ['Програми', '5'], ['Гарантія', '2 роки']] },
  { id: 'tv4', category: 'technika', subcategory: 'velyka', name: 'Кондиціонер AirCool 12000',  price: 22000, desc: 'Спліт-система 12000 BTU, інвертор, функція нагріву.',                  img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Кондиціонер', specs: [['Потужність', '12000 BTU'], ['Тип', 'Інвертор'], ['Гарантія', '3 роки']] },
  // ---- Будматеріали ----
  { id: 'bm1', category: 'budmaterialy', subcategory: null, name: 'Цемент М500 50кг',           price: 320,  desc: 'Портландцемент M500, мішок 50 кг. Для фундаментів і конструкцій.',      img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Цемент',     specs: [['Марка', 'М500'], ['Вага', '50 кг'], ['Гарантія', '6 міс']] },
  { id: 'bm2', category: 'budmaterialy', subcategory: null, name: 'Суміш штукатурна 25кг',      price: 280,  desc: 'Гіпсова штукатурна суміш для внутрішніх робіт, рівний шар.',           img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Штукатурка', specs: [['Витрата', '8-10 кг/м2'], ['Тип', 'Гіпсова'], ['Гарантія', '12 міс']] },
  { id: 'bm3', category: 'budmaterialy', subcategory: null, name: 'Плитка керамічна 30x60',     price: 450,  desc: 'Універсальна керамічна плитка, упаковка 1.08 м2.',                     img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Плитка',     specs: [['Розмір', '30x60 см'], ['Кількість', '6 шт'], ['Гарантія', '24 міс']] },
  { id: 'bm4', category: 'budmaterialy', subcategory: null, name: 'Пінопласт 50мм (плита)',      price: 190,  desc: 'Теплоізоляційні плити EPS, щільність 25 кг/м3.',                       img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Пінопласт',  specs: [['Товщина', '50 мм'], ['Щільність', '25 кг/м3'], ['Гарантія', '12 міс']] },
  { id: 'bm5', category: 'budmaterialy', subcategory: null, name: 'Гіпсокартон 2500x1200',      price: 360,  desc: 'Стандартний гіпсокартон 12.5 мм, для перегородок і стель.',             img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Гіпсокартон', specs: [['Розмір', '2500x1200 мм'], ['Товщина', '12.5 мм'], ['Гарантія', '12 міс']] },
  { id: 'bm6', category: 'budmaterialy', subcategory: null, name: 'Фарба інтер`єрна 10л',       price: 680,  desc: 'Акрилова інтер`єрна фарба, для стін і стель, білосніжна.',             img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Фарба' },
  { id: 'bm7', category: 'budmaterialy', subcategory: null, name: 'Клей плиточний 25кг',        price: 230,  desc: 'Цементний клей для керамічної і кам`яної плитки в приміщеннях.',      img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Клей',       specs: [['Вага', '25 кг'], ['Тип', 'Цементний'], ['Гарантія', '12 міс']] },
  { id: 'bm8', category: 'budmaterialy', subcategory: null, name: 'Профіль металевий UD 3м',    price: 95,   desc: 'Направляючий профіль для гіпсокартонних конструкцій.',                 img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Профіль' },
  // ---- Інструмент: Електро ----
  { id: 'ie1', category: 'instrument', subcategory: 'elektro', name: 'Дриль-шурупокрут 18В',   price: 3800, desc: 'Акумуляторний шурупокрут 18В, 2 акумулятори у комплекті.',             img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Дриль' },
  { id: 'ie2', category: 'instrument', subcategory: 'elektro', name: 'Болгарка 125мм 850Вт',   price: 2900, desc: 'Кутова шліфмашина 850 Вт, плавний пуск, захист від перевантаження.',  img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Болгарка' },
  { id: 'ie3', category: 'instrument', subcategory: 'elektro', name: 'Перфоратор SDS+ 900Вт',  price: 5500, desc: 'Перфоратор SDS+ 900 Вт, 3 режими, 3 Дж удару.',                        img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Перфоратор' },
  { id: 'ie4', category: 'instrument', subcategory: 'elektro', name: 'Лобзик електричний',     price: 2200, desc: 'Електролобзик 650 Вт, маятниковий хід, 4 режими.',                    img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Лобзик' },
  // ---- Інструмент: Набори ----
  { id: 'in1', category: 'instrument', subcategory: 'nabory', name: 'Набір інструментів 108пр', price: 2400, desc: 'Комплект 108 одиниць у металевому валізці, CRV сталь.',                img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Набір+108' },
  { id: 'in2', category: 'instrument', subcategory: 'nabory', name: 'Набір біт і свердел 60пр', price: 1200, desc: 'Набір з 60 насадок різних типів, в пластиковому кейсі.',               img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Біти+60' },
  { id: 'in3', category: 'instrument', subcategory: 'nabory', name: 'Набір ключів ріжкових',   price: 890,  desc: 'Набір ріжково-накидних ключів 8-24 мм, 12 предметів, хром-ванадій.',   img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Ключі' },
  { id: 'in4', category: 'instrument', subcategory: 'nabory', name: 'Набір викруток 8пр',       price: 450,  desc: 'Набір відверток Philips та Torx, ергономічні рукоятки.',               img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Викрутки' },
  // ---- Для дому: Посуд ----
  { id: 'dp1', category: 'dlyadomu', subcategory: 'posud', name: 'Набір каструль 6пр',         price: 3800, desc: 'Нержавіюча сталь 18/10, товсте дно, 6 каструль різних розмірів.',      img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Каструлі' },
  { id: 'dp2', category: 'dlyadomu', subcategory: 'posud', name: 'Сковорода Granite 28см',     price: 1200, desc: 'Алюмінієва сковорода з гранітним покриттям, антипригарна.',            img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Сковорода' },
  { id: 'dp3', category: 'dlyadomu', subcategory: 'posud', name: 'Сервіз столовий 18пр',       price: 2900, desc: 'Порцеляновий столовий сервіз на 6 персон, класичний дизайн.',          img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Сервіз' },
  { id: 'dp4', category: 'dlyadomu', subcategory: 'posud', name: 'Термос харчовий 1.5л',       price: 780,  desc: 'Нержавіюча сталь, зберігає температуру 12 годин.',                   img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Термос' },
  // ---- Для дому: Побутова хімія ----
  { id: 'dh1', category: 'dlyadomu', subcategory: 'himiya', name: 'Гель для прання 3л',        price: 380,  desc: 'Концентрований гель для прання всіх типів тканин, 60 прань.',          img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Гель' },
  { id: 'dh2', category: 'dlyadomu', subcategory: 'himiya', name: 'Засіб для миття посуду',    price: 120,  desc: 'Антибактеріальний засіб, видаляє жир без залишків, 1 л.',              img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Посуд' },
  { id: 'dh3', category: 'dlyadomu', subcategory: 'himiya', name: 'Чистячий спрей для ванної', price: 95,   desc: 'Видаляє вапняний наліт і іржу, 750 мл.',                              img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Спрей' },
  { id: 'dh4', category: 'dlyadomu', subcategory: 'himiya', name: 'Кондиціонер для білизни 2л',price: 290,  desc: 'Надає м`якість та квітковий аромат, 50 прань.',                       img: 'https://placehold.co/400x300/2a2a2a/cccccc?text=Кондиціонер' }
];

// ============================================
//  APP STATE
// ============================================
var state = { category: null, subcategory: 'all', sort: 'default' };

var root    = document.getElementById('catalog-root');
var modal   = document.getElementById('orderModal');
var orderForm = document.getElementById('orderForm');

// ============================================
//  INIT
// ============================================
function initCatalog() {
  if (!root) return;
  var params = new URLSearchParams(window.location.search);
  state.category = params.get('category');
  if (state.category && CATEGORIES.find(function(c){ return c.id === state.category; })) {
    renderCategoryPage();
  } else {
    state.category = null;
    renderMainCatalog();
  }
}

// ============================================
//  MAIN CATALOG (4 categories)
// ============================================
function renderMainCatalog() {
  var html = '<div class="container">';
  html += '<div class="catalog-header"><h1 class="section-title">Каталог Товарів</h1><p class="section-desc">Оберіть категорію, щоб переглянути асортимент</p></div>';
  html += '<div class="category-grid">';
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    html += '<a href="catalog.html?category=' + c.id + '" class="category-card">';
    html += '<img src="' + c.img + '" alt="' + c.name + '" loading="lazy">';
    html += '<div class="category-card-title">' + c.name + '</div>';
    html += '</a>';
  }
  html += '</div></div>';
  root.innerHTML = html;
}

// ============================================
//  CATEGORY PAGE (products + chips + sort)
// ============================================
function renderCategoryPage() {
  var catInfo = CATEGORIES.find(function(c){ return c.id === state.category; });
  var subs    = SUBCATEGORIES[state.category];

  var filtered = PRODUCTS.filter(function(p){ return p.category === state.category; });
  if (state.subcategory && state.subcategory !== 'all') {
    filtered = filtered.filter(function(p){ return p.subcategory === state.subcategory; });
  }
  if (state.sort === 'price-asc')  { filtered.sort(function(a,b){ return a.price - b.price; }); }
  if (state.sort === 'price-desc') { filtered.sort(function(a,b){ return b.price - a.price; }); }

  var html = '<div class="container">';

  // Back link
  html += '<a href="catalog.html" class="back-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Назад до категорій</a>';

  // Title
  html += '<div class="catalog-header"><h1 class="section-title">' + catInfo.name + '</h1></div>';

  // Controls row
  html += '<div class="catalog-controls">';

  // Chips
  if (subs && subs.length > 0) {
    html += '<div class="catalog-filters">';
    for (var j = 0; j < subs.length; j++) {
      var s = subs[j];
      html += '<button class="chip' + (state.subcategory === s.id ? ' active' : '') + '" data-sub="' + s.id + '">' + s.name + '</button>';
    }
    html += '</div>';
  } else {
    html += '<div></div>';
  }

  // Sort
  html += '<select class="sort-select" id="sortSelect">';
  html += '<option value="default"' + (state.sort === 'default' ? ' selected' : '') + '>Сортування: За замовчуванням</option>';
  html += '<option value="price-asc"' + (state.sort === 'price-asc' ? ' selected' : '') + '>Від найдешевших</option>';
  html += '<option value="price-desc"' + (state.sort === 'price-desc' ? ' selected' : '') + '>Від найдорожчих</option>';
  html += '</select>';
  html += '</div>'; // catalog-controls

  // Products grid
  html += '<div class="products-grid" id="productsGrid">';
  if (filtered.length === 0) {
    html += '<div class="product-empty">Товарів не знайдено</div>';
  } else {
    for (var k = 0; k < filtered.length; k++) {
      var p = filtered[k];
      html += '<div class="product-card">';
      html += '<img src="' + p.img + '" alt="' + p.name + '" class="product-img" loading="lazy">';
      html += '<div class="product-content">';
      html += '<div class="product-category">' + catInfo.name + '</div>';
      html += '<h3 class="product-title">' + p.name + '</h3>';
      html += '<p class="product-desc">' + p.desc + '</p>';
      if (p.specs && p.specs.length > 0) {
        html += '<div class="product-specs">';
        for (var si = 0; si < p.specs.length; si++) {
          html += '<p><strong>' + p.specs[si][0] + ':</strong> ' + p.specs[si][1] + '</p>';
        }
        html += '</div>';
      }
      html += '<div class="product-footer">';
      html += '<div class="product-price">' + p.price.toLocaleString('uk-UA') + ' ₴</div>';
      html += '<button class="btn btn-cta btn-sm btn-order" data-id="' + p.id + '" data-name="' + p.name + '">Залишити заявку</button>';
      html += '</div></div></div>';
    }
  }
  html += '</div>'; // products-grid
  html += '</div>'; // container

  root.innerHTML = html;
  bindEvents();
}

// ============================================
//  EVENTS
// ============================================
function bindEvents() {
  var chips = document.querySelectorAll('.chip');
  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function(e) {
      state.subcategory = e.currentTarget.getAttribute('data-sub');
      renderCategoryPage();
    });
  }
  var sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      state.sort = e.target.value;
      renderCategoryPage();
    });
  }
  var orderBtns = document.querySelectorAll('.btn-order');
  for (var j = 0; j < orderBtns.length; j++) {
    orderBtns[j].addEventListener('click', function(e) {
      openModal(e.currentTarget.getAttribute('data-id'), e.currentTarget.getAttribute('data-name'));
    });
  }
}

// ============================================
//  MODAL
// ============================================
function openModal(productId, productName) {
  if (!modal) return;
  document.getElementById('orderProductId').value = productId;
  document.getElementById('modalProductName').textContent = productName;
  document.getElementById('orderStatus').textContent = '';
  document.getElementById('orderStatus').className = 'booking-status';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  if (orderForm) orderForm.reset();
}

if (modal) {
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
}

if (orderForm) {
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name      = orderForm.elements.name.value.trim();
    var phone     = orderForm.elements.phone.value.trim();
    var comment   = orderForm.elements.comment.value.trim();
    var productId = orderForm.elements.productId.value;
    var productName = document.getElementById('modalProductName').textContent;
    if (!name || !phone) return;
    console.log('=== Нова Заявка ===');
    console.log('Товар:', productName, '| ID:', productId);
    console.log('Імя:', name, '| Тел:', phone, '| Коментар:', comment);
    var submitBtn = orderForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Надсилаємо...';
    setTimeout(function() {
      var statusEl = document.getElementById('orderStatus');
      statusEl.textContent = 'Дякуємо! Ми зателефонуємо вам найближчим часом.';
      statusEl.className = 'booking-status success';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Надіслати заявку';
      orderForm.reset();
      setTimeout(closeModal, 3000);
    }, 800);
  });
}

// ============================================
//  START
// ============================================
initCatalog();
