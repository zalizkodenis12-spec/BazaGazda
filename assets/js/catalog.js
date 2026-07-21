// ============================================
//  CATALOG DATA
// ============================================
var CATEGORIES = [
  {
    id: 'technika',
    name: 'Техніка',
    desc: 'Велика та дрібна побутова техніка',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80'
  },
  {
    id: 'budmaterialy',
    name: 'Будматеріали',
    desc: 'Все для ремонту та будівництва',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
  },
  {
    id: 'instrument',
    name: 'Інструмент',
    desc: 'Електроінструмент та набори',
    img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80'
  },
  {
    id: 'dlyadomu',
    name: 'Для дому',
    desc: 'Посуд та побутова хімія',
    img: 'https://images.unsplash.com/photo-1556909114-5b6d12b1d4e5?w=600&q=80'
  }
];

var SUBCATEGORIES = {
  technika:     [{ id: 'all', name: 'Всі товари' }, { id: 'dribna', name: 'Дрібна техніка' }, { id: 'velyka', name: 'Велика техніка' }],
  instrument:   [{ id: 'all', name: 'Всі товари' }, { id: 'elektro', name: 'Електроінструмент' }, { id: 'nabory', name: 'Набори інструментів' }],
  dlyadomu:     [{ id: 'all', name: 'Всі товари' }, { id: 'posud', name: 'Посуд' }, { id: 'himiya', name: 'Побутова хімія' }],
  budmaterialy: []
};

var PRODUCTS = [
  // ---- Техніка: Дрібна ----
  {
    id: 'td1', category: 'technika', subcategory: 'dribna',
    name: 'Блендер Phillipa BL-200',
    price: 1350,
    desc: 'Потужний стаціонарний блендер 800 Вт з набором чаш для щоденного використання. Ідеальний для смузі, супів, соусів та дитячого харчування.',
    img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80',
    specs: []
  },
  {
    id: 'td2', category: 'technika', subcategory: 'dribna',
    name: 'Тостер TechHome T4',
    price: 980,
    desc: 'Тостер на 4 слоти з плавним регулюванням ступеня підсмаження. Функції підігріву та розморожування. Знімний піддон для крихт.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    specs: []
  },
  {
    id: 'td3', category: 'technika', subcategory: 'dribna',
    name: 'Чайник електричний 2.5л',
    price: 1100,
    desc: 'Швидке кипіння за 3–4 хвилини. Корпус з нержавіючої сталі, підсвітка рівня води, автоматичне відключення при закипанні та захист від роботи без води.',
    img: 'https://images.unsplash.com/photo-1556909114-cbdf34048dce?w=600&q=80',
    specs: []
  },
  {
    id: 'td4', category: 'technika', subcategory: 'dribna',
    name: 'Мікрохвильова піч 20л',
    price: 2850,
    desc: 'Мікрохвильова піч з функцією гриля. 5 рівнів потужності, механічний таймер до 30 хвилин, об`єм камери 20 літрів.',
    img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80',
    specs: []
  },
  {
    id: 'td5', category: 'technika', subcategory: 'dribna',
    name: 'Соковижималка ProFresh S1',
    price: 1600,
    desc: 'Шнекова соковижималка холодного віджиму. Зберігає максимум вітамінів та ферментів. Тихий двигун, легке чищення, соковитість до 90%.',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80',
    specs: []
  },
  {
    id: 'td6', category: 'technika', subcategory: 'dribna',
    name: 'Кавоварка EspressoPro E15',
    price: 3200,
    desc: 'Автоматична рожкова кавоварка з капучинатором. 15 бар тиску, нагрів за 30 секунд, знімний резервуар 1.5 л.',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
    specs: []
  },
  // ---- Техніка: Велика ----
  {
    id: 'tv1', category: 'technika', subcategory: 'velyka',
    name: 'Холодильник FrostMax 300',
    price: 18000,
    desc: 'Двокамерний холодильник з технологією No Frost. Рівномірне охолодження, відсутність інею, тихий компресор. Клас енергоефективності A++.',
    img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
    specs: [['Об`єм', '300 л'], ['Клас', 'A++'], ['Висота', '185 см'], ['Гарантія', '3 роки']]
  },
  {
    id: 'tv2', category: 'technika', subcategory: 'velyka',
    name: 'Пральна машина ClearWash 7',
    price: 15500,
    desc: 'Фронтальне завантаження 7 кг. 16 програм прання, функція швидкого прання 15 хв, захист від протікань, клас A+++.',
    img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
    specs: [['Завантаження', '7 кг'], ['Обороти', '1200 об/хв'], ['Програми', '16'], ['Гарантія', '2 роки']]
  },
  {
    id: 'tv3', category: 'technika', subcategory: 'velyka',
    name: 'Посудомийна машина DishMate 12',
    price: 14000,
    desc: 'Вбудована посудомийна машина на 12 комплектів. 5 програм миття, функція затримки старту, відкладений старт до 24 год, тихий режим 44 дБ.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    specs: [['Місткість', '12 компл.'], ['Програми', '5'], ['Рівень шуму', '44 дБ'], ['Гарантія', '2 роки']]
  },
  {
    id: 'tv4', category: 'technika', subcategory: 'velyka',
    name: 'Кондиціонер AirCool 12000',
    price: 22000,
    desc: 'Спліт-система з інверторним компресором. Охолодження та обігрів, таймер, режим осушення, Wi-Fi управління через додаток.',
    img: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80',
    specs: [['Потужність', '12000 BTU'], ['Площа', 'до 35 м²'], ['Тип', 'Інвертор'], ['Гарантія', '3 роки']]
  },
  // ---- Будматеріали ----
  {
    id: 'bm1', category: 'budmaterialy', subcategory: null,
    name: 'Цемент М500 (50 кг)',
    price: 320,
    desc: 'Портландцемент марки M500. Застосовується для виготовлення бетонних і залізобетонних конструкцій, фундаментів, підлог та монолітних робіт.',
    img: 'https://images.unsplash.com/photo-1590693289367-dc8e8ed0b567?w=600&q=80',
    specs: [['Марка', 'М500'], ['Вага', '50 кг'], ['Фасування', 'Мішок'], ['Гарантія', '6 міс']]
  },
  {
    id: 'bm2', category: 'budmaterialy', subcategory: null,
    name: 'Штукатурна суміш (25 кг)',
    price: 280,
    desc: 'Гіпсова штукатурна суміш для внутрішніх робіт. Легко наноситься, швидко твердіє, дає рівний гладкий шар без тріщин.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    specs: [['Витрата', '8–10 кг/м²'], ['Шар', '5–50 мм'], ['Тип', 'Гіпсова']]
  },
  {
    id: 'bm3', category: 'budmaterialy', subcategory: null,
    name: 'Плитка керамічна 30×60',
    price: 450,
    desc: 'Універсальна керамічна плитка для стін та підлоги. Глянсова поверхня, стійка до вологи та механічних пошкоджень. Упаковка 6 шт / 1.08 м².',
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80',
    specs: [['Розмір', '30×60 см'], ['Поверхня', 'Глянець'], ['В упаковці', '6 шт / 1.08 м²']]
  },
  {
    id: 'bm4', category: 'budmaterialy', subcategory: null,
    name: 'Пінопласт 50мм (плита)',
    price: 190,
    desc: 'Теплоізоляційні плити з EPS-пінопласту. Використовуються для утеплення стін, підлог та покрівлі. Простий монтаж, нетоксичний матеріал.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    specs: [['Товщина', '50 мм'], ['Щільність', '25 кг/м³'], ['Розмір плити', '1000×500 мм']]
  },
  {
    id: 'bm5', category: 'budmaterialy', subcategory: null,
    name: 'Гіпсокартон 2500×1200',
    price: 360,
    desc: 'Стандартний гіпсокартон для внутрішніх перегородок та підвісних стель. Легка обробка, рівна поверхня, не деформується.',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
    specs: [['Розмір', '2500×1200 мм'], ['Товщина', '12.5 мм'], ['Тип', 'Стандартний']]
  },
  {
    id: 'bm6', category: 'budmaterialy', subcategory: null,
    name: 'Фарба інтер`єрна біла (10л)',
    price: 680,
    desc: 'Акрилова інтер`єрна фарба для стін та стель. Білосніжна, без запаху, легко наноситься валиком чи пензлем, стійка до вологого прибирання.',
    img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
    specs: [['Об`єм', '10 л'], ['Витрата', '8–12 м²/л'], ['Покриттів', '2']]
  },
  {
    id: 'bm7', category: 'budmaterialy', subcategory: null,
    name: 'Клей плиточний (25 кг)',
    price: 230,
    desc: 'Цементний клей C1 для укладання керамічної та кам`яної плитки на підлогу та стіни в приміщеннях. Відкритий час роботи 20 хвилин.',
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
    specs: [['Вага', '25 кг'], ['Клас', 'C1'], ['Відкритий час', '20 хв']]
  },
  {
    id: 'bm8', category: 'budmaterialy', subcategory: null,
    name: 'Профіль металевий UD 3м',
    price: 95,
    desc: 'Направляючий профіль UD 28×27 мм для монтажу гіпсокартонних перегородок та підвісних стель. Оцинкована сталь 0.55 мм.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    specs: [['Довжина', '3 м'], ['Переріз', '28×27 мм'], ['Матеріал', 'Оцинкована сталь']]
  },
  // ---- Інструмент: Електро ----
  {
    id: 'ie1', category: 'instrument', subcategory: 'elektro',
    name: 'Дриль-шурупокрут 18В',
    price: 3800,
    desc: 'Акумуляторний шурупокрут 18 В з двома акумуляторами у комплекті. 25+1 крутний момент, реверс, підсвітка робочої зони, швидкозмінний патрон.',
    img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80',
    specs: []
  },
  {
    id: 'ie2', category: 'instrument', subcategory: 'elektro',
    name: 'Болгарка 125мм 850Вт',
    price: 2900,
    desc: 'Кутова шліфувальна машина 850 Вт. Плавний пуск, захист від перевантаження та перезапуску, фіксатор шпинделя, бічна рукоятка в комплекті.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    specs: []
  },
  {
    id: 'ie3', category: 'instrument', subcategory: 'elektro',
    name: 'Перфоратор SDS+ 900Вт',
    price: 5500,
    desc: 'Перфоратор SDS+ 900 Вт з трьома режимами роботи: свердління, свердління з ударом, тільки удар. Сила удару 3 Дж, швидкий патрон SDS+.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    specs: []
  },
  {
    id: 'ie4', category: 'instrument', subcategory: 'elektro',
    name: 'Лобзик електричний 650Вт',
    price: 2200,
    desc: 'Електричний лобзик 650 Вт з маятниковим ходом (4 режими). Плавне регулювання швидкості, напрямний упор, пиловий мішок у комплекті.',
    img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80',
    specs: []
  },
  // ---- Інструмент: Набори ----
  {
    id: 'in1', category: 'instrument', subcategory: 'nabory',
    name: 'Набір інструментів 108 предметів',
    price: 2400,
    desc: 'Комплект 108 одиниць у металевому валізці. Ключі, відвертки, пасатижі, молоток, рулетка та інше. Сталь CRV, ергономічні рукоятки.',
    img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&q=80',
    specs: []
  },
  {
    id: 'in2', category: 'instrument', subcategory: 'nabory',
    name: 'Набір біт та свердел 60 пр.',
    price: 1200,
    desc: 'Набір з 60 насадок різних типів: біти PH, PZ, Torx, шліц, свердла по дереву та металу. Зручний пластиковий кейс з фіксаторами.',
    img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80',
    specs: []
  },
  {
    id: 'in3', category: 'instrument', subcategory: 'nabory',
    name: 'Набір ключів ріжкових 12 пр.',
    price: 890,
    desc: 'Набір ріжково-накидних ключів 8–24 мм (12 предметів). Матеріал хром-ванадій, термообробка, хромований захисний шар.',
    img: 'https://images.unsplash.com/photo-1609208599629-a4b9bf3ecc5c?w=600&q=80',
    specs: []
  },
  {
    id: 'in4', category: 'instrument', subcategory: 'nabory',
    name: 'Набір викруток 8 пр.',
    price: 450,
    desc: 'Набір відверток Philips та Torx (8 предметів). Ергономічні трикомпонентні рукоятки, наконечники S2 з термообробкою.',
    img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80',
    specs: []
  },
  // ---- Для дому: Посуд ----
  {
    id: 'dp1', category: 'dlyadomu', subcategory: 'posud',
    name: 'Набір каструль з нержавійки 6 пр.',
    price: 3800,
    desc: 'Набір з 6 каструль різних розмірів зі шляхетної нержавіючої сталі 18/10. Товщина дна 5 мм, теплорозподільний диск, кришки зі скла.',
    img: 'https://images.unsplash.com/photo-1556909114-cbdf34048dce?w=600&q=80',
    specs: []
  },
  {
    id: 'dp2', category: 'dlyadomu', subcategory: 'posud',
    name: 'Сковорода Granite 28 см',
    price: 1200,
    desc: 'Алюмінієва сковорода з 5-шаровим гранітним антипригарним покриттям. Можна мити в посудомийній машині, підходить для всіх типів плит включно з індукцією.',
    img: 'https://images.unsplash.com/photo-1593759608142-e9b70c406d58?w=600&q=80',
    specs: []
  },
  {
    id: 'dp3', category: 'dlyadomu', subcategory: 'posud',
    name: 'Столовий сервіз 18 предметів',
    price: 2900,
    desc: 'Порцеляновий столовий сервіз на 6 персон. 6 тарілок обідніх, 6 тарілок десертних, 6 мисок для супу. Класичний білий дизайн, можна мити в посудомийній машині.',
    img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80',
    specs: []
  },
  {
    id: 'dp4', category: 'dlyadomu', subcategory: 'posud',
    name: 'Термос харчовий 1.5 л',
    price: 780,
    desc: 'Термос з широким горлом зі шляхетної нержавіючої сталі. Зберігає температуру гарячого до 12 годин, холодного до 24 годин. Зручна ручка для перенесення.',
    img: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&q=80',
    specs: []
  },
  // ---- Для дому: Побутова хімія ----
  {
    id: 'dh1', category: 'dlyadomu', subcategory: 'himiya',
    name: 'Гель для прання 3 л',
    price: 380,
    desc: 'Концентрований гель для прання всіх типів тканин при температурах 30–90°C. Видаляє складні плями з першого разу. Ефективний для 60 прань.',
    img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    specs: []
  },
  {
    id: 'dh2', category: 'dlyadomu', subcategory: 'himiya',
    name: 'Засіб для миття посуду 1л',
    price: 120,
    desc: 'Концентрований антибактеріальний засіб для ручного миття посуду. Видаляє жир, нагар і залишки їжі без залишків, приємний аромат лимону.',
    img: 'https://images.unsplash.com/photo-1556909114-cbdf34048dce?w=600&q=80',
    specs: []
  },
  {
    id: 'dh3', category: 'dlyadomu', subcategory: 'himiya',
    name: 'Спрей для ванної кімнати 750мл',
    price: 95,
    desc: 'Активна формула видаляє вапняний наліт, іржу та мильний осад із кераміки, хромованих поверхонь та скла. Без хлору.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    specs: []
  },
  {
    id: 'dh4', category: 'dlyadomu', subcategory: 'himiya',
    name: 'Кондиціонер для білизни 2 л',
    price: 290,
    desc: 'М`який кондиціонер надає білизні неперевершену м`якість та свіжий квітковий аромат. Захищає волокна тканин при пранні, розрахований на 50 прань.',
    img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    specs: []
  }
];

// ============================================
//  HELPERS
// ============================================
function findProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}
function findCategory(id) {
  for (var i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].id === id) return CATEGORIES[i];
  }
  return null;
}

// ============================================
//  APP STATE
// ============================================
var state = { category: null, product: null, subcategory: 'all', sort: 'default' };

var root    = document.getElementById('catalog-root');
var modal   = document.getElementById('orderModal');
var orderForm = document.getElementById('orderForm');

// ============================================
//  INIT
// ============================================
function initCatalog() {
  if (!root) return;
  var params = new URLSearchParams(window.location.search);
  state.category = params.get('category') || null;
  state.product  = params.get('product')  || null;

  if (state.product && state.category) {
    var prod = findProduct(state.product);
    if (prod) { renderProductPage(prod); return; }
  }
  if (state.category && findCategory(state.category)) {
    renderCategoryPage();
  } else {
    state.category = null;
    renderMainCatalog();
  }
}

// ============================================
//  MAIN CATALOG (4 category cards)
// ============================================
function renderMainCatalog() {
  var html = '<div class="container">';
  html += '<div class="catalog-header"><h1 class="section-title">Каталог Товарів</h1>';
  html += '<p class="section-desc">Оберіть категорію, щоб переглянути асортимент</p></div>';
  html += '<div class="category-grid">';
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    html += '<a href="catalog.html?category=' + c.id + '" class="category-card">';
    html += '<img src="' + c.img + '" alt="' + c.name + '" loading="lazy">';
    html += '<div class="category-card-title">';
    html += '<span class="category-card-name">' + c.name + '</span>';
    html += '<span class="category-card-sub">' + c.desc + '</span>';
    html += '</div>';
    html += '</a>';
  }
  html += '</div></div>';
  root.innerHTML = html;
}

// ============================================
//  CATEGORY PAGE
// ============================================
function renderCategoryPage() {
  var catInfo = findCategory(state.category);
  var subs    = SUBCATEGORIES[state.category];

  var filtered = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].category === state.category) filtered.push(PRODUCTS[i]);
  }
  if (state.subcategory && state.subcategory !== 'all') {
    var tmp = [];
    for (var j = 0; j < filtered.length; j++) {
      if (filtered[j].subcategory === state.subcategory) tmp.push(filtered[j]);
    }
    filtered = tmp;
  }
  if (state.sort === 'price-asc')  filtered.sort(function(a,b){ return a.price - b.price; });
  if (state.sort === 'price-desc') filtered.sort(function(a,b){ return b.price - a.price; });

  var html = '<div class="container">';
  html += '<a href="catalog.html" class="back-link">';
  html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  html += ' Усі категорії</a>';
  html += '<div class="catalog-header"><h1 class="section-title">' + catInfo.name + '</h1></div>';
  html += '<div class="catalog-controls">';

  if (subs && subs.length > 0) {
    html += '<div class="catalog-filters">';
    for (var s = 0; s < subs.length; s++) {
      var sub = subs[s];
      html += '<button class="chip' + (state.subcategory === sub.id ? ' active' : '') + '" data-sub="' + sub.id + '">' + sub.name + '</button>';
    }
    html += '</div>';
  } else {
    html += '<div></div>';
  }

  html += '<select class="sort-select" id="sortSelect">';
  html += '<option value="default"' + (state.sort === 'default' ? ' selected' : '') + '>За замовчуванням</option>';
  html += '<option value="price-asc"' + (state.sort === 'price-asc' ? ' selected' : '') + '>Від найдешевших</option>';
  html += '<option value="price-desc"' + (state.sort === 'price-desc' ? ' selected' : '') + '>Від найдорожчих</option>';
  html += '</select>';
  html += '</div>';

  html += '<div class="products-grid" id="productsGrid">';
  if (filtered.length === 0) {
    html += '<div class="product-empty">Товарів не знайдено</div>';
  } else {
    for (var k = 0; k < filtered.length; k++) {
      var p = filtered[k];
      var link = 'catalog.html?category=' + p.category + '&product=' + p.id;
      html += '<a href="' + link + '" class="product-card">';
      html += '<img src="' + p.img + '" alt="' + p.name + '" class="product-img" loading="lazy">';
      html += '<div class="product-content">';
      html += '<h3 class="product-title">' + p.name + '</h3>';
      html += '<p class="product-desc">' + p.desc.substring(0, 80) + '…</p>';
      html += '<div class="product-footer">';
      html += '<div class="product-price">' + p.price.toLocaleString('uk-UA') + ' ₴</div>';
      html += '<span class="product-card-arrow">Детальніше →</span>';
      html += '</div></div></a>';
    }
  }
  html += '</div></div>';
  root.innerHTML = html;
  bindEvents();
}

// ============================================
//  PRODUCT PAGE
// ============================================
function renderProductPage(p) {
  var catInfo   = findCategory(p.category);
  var catLink   = 'catalog.html?category=' + p.category;

  var specsHtml = '';
  if (p.specs && p.specs.length > 0) {
    specsHtml += '<div class="product-detail-specs">';
    specsHtml += '<h3 class="product-specs-title">Характеристики</h3>';
    specsHtml += '<table class="specs-table">';
    for (var i = 0; i < p.specs.length; i++) {
      specsHtml += '<tr><td>' + p.specs[i][0] + '</td><td>' + p.specs[i][1] + '</td></tr>';
    }
    specsHtml += '</table>';
    specsHtml += '</div>';
  }

  var html = '<div class="container">';
  html += '<nav class="breadcrumb">';
  html += '<a href="catalog.html">Каталог</a>';
  html += '<span class="bc-sep">›</span>';
  html += '<a href="' + catLink + '">' + catInfo.name + '</a>';
  html += '<span class="bc-sep">›</span>';
  html += '<span>' + p.name + '</span>';
  html += '</nav>';

  html += '<div class="product-detail-grid">';
  // Left: image
  html += '<div class="product-detail-img-wrap">';
  html += '<img src="' + p.img + '" alt="' + p.name + '" class="product-detail-img">';
  html += '</div>';
  // Right: info
  html += '<div class="product-detail-info">';
  html += '<div class="product-detail-cat">' + catInfo.name + '</div>';
  html += '<h1 class="product-detail-title">' + p.name + '</h1>';
  html += '<div class="product-detail-price">' + p.price.toLocaleString('uk-UA') + ' ₴</div>';
  html += '<p class="product-detail-desc">' + p.desc + '</p>';
  html += specsHtml;
  html += '<div class="product-detail-actions">';
  html += '<button class="btn btn-cta btn-lg btn-order-detail" data-id="' + p.id + '" data-name="' + p.name + '">Залишити заявку</button>';
  html += '<a href="tel:+380978973207" class="btn btn-outline btn-lg">';
  html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:6px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  html += 'Зателефонувати';
  html += '</a>';
  html += '</div>';
  html += '<a href="' + catLink + '" class="product-back-link">';
  html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  html += ' Назад до категорії «' + catInfo.name + '»';
  html += '</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>';

  root.innerHTML = html;

  var orderBtn = document.querySelector('.btn-order-detail');
  if (orderBtn) {
    orderBtn.addEventListener('click', function(e) {
      openModal(e.currentTarget.getAttribute('data-id'), e.currentTarget.getAttribute('data-name'));
    });
  }
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
