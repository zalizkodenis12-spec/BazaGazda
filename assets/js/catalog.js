// ============================================
//  CATALOG DATA
// ============================================
var CATEGORIES = [
  { id:'technika',     name:'\u0422\u0435\u0445\u043d\u0456\u043a\u0430',        desc:'\u0412\u0435\u043b\u0438\u043a\u0430 \u0442\u0430 \u0434\u0440\u0456\u0431\u043d\u0430 \u043f\u043e\u0431\u0443\u0442\u043e\u0432\u0430', img:'assets/images/техніка.jpg' },
  { id:'budmaterialy', name:'\u0411\u0443\u0434\u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438',   desc:'\u0414\u043b\u044f \u0440\u0435\u043c\u043e\u043d\u0442\u0443 \u0442\u0430 \u0431\u0443\u0434\u0456\u0432\u043d\u0438\u0446\u0442\u0432\u0430', img:'assets/images/будматеріали.jpg' },
  { id:'instrument',   name:'\u0406\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442',      desc:'\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0442\u0430 \u043d\u0430\u0431\u043e\u0440\u0438', img:'assets/images/інструменти.jpg' },
  { id:'dlyadomu',     name:'\u0414\u043b\u044f \u0434\u043e\u043c\u0443',      desc:'\u041f\u043e\u0441\u0443\u0434 \u0442\u0430 \u043f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0445\u0456\u043c\u0456\u044f', img:'assets/images/для  дому.jpg' }
];

var SUBCATEGORIES = {
  technika:     [],
  instrument:   [],
  dlyadomu:     [
    { id:'all', name:'Всі' },
    { id:'posud', name:'Посуд та кухонне приладдя' },
    { id:'tekstyl', name:'Домашній текстиль' },
    { id:'himiya', name:'Госптовари та прибирання' },
    { id:'zberigannya', name:'Зберігання' },
    { id:'inshe', name:'Інше' }
  ],
  budmaterialy: []
};

// available: true = В наявності, false = Під замовлення
var PRODUCTS = [
  {
    "id": "127333",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Корсо 26х4,8см PEPPER",
    "price": 825.0,
    "desc": "Артикул: PR-2308-26. Код 1С: 127333.",
    "images": [
      "assets/images/products/127333.jpg"
    ],
    "specs": []
  },
  {
    "id": "127329",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Loft 26х5,5см PEPPER",
    "price": 1308.0,
    "desc": "Артикул: PR-2307-26. Код 1С: 127329.",
    "images": [
      "assets/images/products/127329.jpg"
    ],
    "specs": []
  },
  {
    "id": "124150",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Арабеска\" 20х4см PEPPER",
    "price": 1027.0,
    "desc": "Артикул: PR-2223. Код 1С: 124150.",
    "images": [
      "assets/images/products/124150.jpg"
    ],
    "specs": []
  },
  {
    "id": "135941",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Корсо 28х5см PEPPER",
    "price": 940.0,
    "desc": "Артикул: PR-2308-28. Код 1С: 135941.",
    "images": [
      "assets/images/products/135941.jpg"
    ],
    "specs": []
  },
  {
    "id": "127331",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Корсо 20х4см PEPPER",
    "price": 647.0,
    "desc": "Артикул: PR-2308-20. Код 1С: 127331.",
    "images": [
      "assets/images/products/127331.jpg"
    ],
    "specs": []
  },
  {
    "id": "127327",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Loft 20х5см PEPPER",
    "price": 967.0,
    "desc": "Артикул: PR-2307-20. Код 1С: 127327.",
    "images": [
      "assets/images/products/127327.jpg"
    ],
    "specs": []
  },
  {
    "id": "127332",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Корсо 24х4,5с, PEPPER",
    "price": 739.0,
    "desc": "Артикул: PR-2308-24. Код 1С: 127332.",
    "images": [
      "assets/images/products/127332.jpg"
    ],
    "specs": []
  },
  {
    "id": "127328",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Loft 24х5,5см PEPPER",
    "price": 1177.0,
    "desc": "Артикул: PR-2307-24. Код 1С: 127328.",
    "images": [
      "assets/images/products/127328.jpg"
    ],
    "specs": []
  },
  {
    "id": "124152",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Арабеска\" 24х4,5см PEPPER",
    "price": 1244.0,
    "desc": "Артикул: PR-2224. Код 1С: 124152.",
    "images": [
      "assets/images/products/124152.jpg"
    ],
    "specs": []
  },
  {
    "id": "127330",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Loft 28х6см PEPPER",
    "price": 1427.0,
    "desc": "Артикул: PR-2307-28. Код 1С: 127330.",
    "images": [
      "assets/images/products/127330.jpg"
    ],
    "specs": []
  },
  {
    "id": "113286",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' 22x4,5cм TITANIUM PRO, PEPPER",
    "price": 1415.0,
    "desc": "Артикул: PR-2107-22 . Код 1С: 113286.",
    "images": [
      "assets/images/products/113286.jpg"
    ],
    "specs": []
  },
  {
    "id": "113292",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' 28x5cм TITANIUM PRO, PEPPER",
    "price": 1606.0,
    "desc": "Артикул: PR-2107-28 . Код 1С: 113292.",
    "images": [
      "assets/images/products/113292.jpg"
    ],
    "specs": []
  },
  {
    "id": "113294",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' WOK 26x8cм TITANIUM PRO, PEPPER",
    "price": 1624.0,
    "desc": "Артикул: PR-2108-26 . Код 1С: 113294.",
    "images": [
      "assets/images/products/113294.jpg"
    ],
    "specs": []
  },
  {
    "id": "113296",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' WOK 28x8cм TITANIUM PRO, PEPPER",
    "price": 2074.0,
    "desc": "Артикул: PR-2108-28 . Код 1С: 113296.",
    "images": [
      "assets/images/products/113296.jpg"
    ],
    "specs": []
  },
  {
    "id": "113288",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' 24x4,8cм TITANIUM PRO, PEPPER",
    "price": 1449.0,
    "desc": "Артикул: PR-2107-24 . Код 1С: 113288.",
    "images": [
      "assets/images/products/113288.jpg"
    ],
    "specs": []
  },
  {
    "id": "124154",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Арабеска\" 26х4,8см PEPPER",
    "price": 1398.0,
    "desc": "Артикул: PR-2225. Код 1С: 124154.",
    "images": [
      "assets/images/products/124154.jpg"
    ],
    "specs": []
  },
  {
    "id": "113298",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' WOK 30x9cм TITANIUM PRO, PEPPER",
    "price": 2378.0,
    "desc": "Артикул: PR-2108-30 . Код 1С: 113298.",
    "images": [
      "assets/images/products/113298.jpg"
    ],
    "specs": []
  },
  {
    "id": "113284",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' 20x4,5cм TITANIUM PRO, PEPPER",
    "price": 1101.0,
    "desc": "Артикул: PR-2107-20 . Код 1С: 113284.",
    "images": [
      "assets/images/products/113284.jpg"
    ],
    "specs": []
  },
  {
    "id": "113300",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'CHERRY' LAVA-STONE 20x4,5cм PEPPER",
    "price": 813.0,
    "desc": "Артикул: PR-2109-20 . Код 1С: 113300.",
    "images": [
      "assets/images/products/113300.jpg"
    ],
    "specs": []
  },
  {
    "id": "113290",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'EMERALD' 26x5см TITANIUM PRO, PEPPER",
    "price": 1470.0,
    "desc": "Артикул: PR-2107-26 . Код 1С: 113290.",
    "images": [
      "assets/images/products/113290.jpg"
    ],
    "specs": []
  },
  {
    "id": "113302",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'CHERRY' LAVA-STONE 24x5,0cм PEPPER",
    "price": 1072.0,
    "desc": "Артикул: PR-2109-24 . Код 1С: 113302.",
    "images": [
      "assets/images/products/113302.jpg"
    ],
    "specs": []
  },
  {
    "id": "113306",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'CHERRY' LAVA-STONE 28x5,4cм PEPPER",
    "price": 1314.0,
    "desc": "Артикул: PR-2109-28 . Код 1С: 113306.",
    "images": [
      "assets/images/products/113306.jpg"
    ],
    "specs": []
  },
  {
    "id": "113308",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Гриль 'CHERRY' LAVA-STONE 24x2,4cм PEPPER",
    "price": 1575.0,
    "desc": "Артикул: PR-2110-24 . Код 1С: 113308.",
    "images": [
      "assets/images/products/113308.jpg"
    ],
    "specs": []
  },
  {
    "id": "113310",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Гриль 'CHERRY' LAVA-STONE 28x2,8cм PEPPER",
    "price": 1883.0,
    "desc": "Артикул: PR-2110-28 . Код 1С: 113310.",
    "images": [
      "assets/images/products/113310.jpg"
    ],
    "specs": []
  },
  {
    "id": "113304",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'CHERRY' LAVA-STONE 26x5,2cм PEPPER",
    "price": 1193.0,
    "desc": "Артикул: PR-2109-26 . Код 1С: 113304.",
    "images": [
      "assets/images/products/113304.jpg"
    ],
    "specs": []
  },
  {
    "id": "77327",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття MEGA-STONE 20х4,3 см GUSTO",
    "price": 603.0,
    "desc": "Артикул: GT-2102-20. Код 1С: 77327.",
    "images": [
      "assets/images/products/77327.jpg"
    ],
    "specs": []
  },
  {
    "id": "146318",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода STONE DROP 26х4,9 см GUSTO",
    "price": 866.0,
    "desc": "Артикул: GT-2601-26 . Код 1С: 146318.",
    "images": [
      "assets/images/products/146318.jpg"
    ],
    "specs": []
  },
  {
    "id": "146319",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода STONE DROP 28х5,1 см GUSTO",
    "price": 978.0,
    "desc": "Артикул: GT-2601-28 . Код 1С: 146319.",
    "images": [
      "assets/images/products/146319.jpg"
    ],
    "specs": []
  },
  {
    "id": "146317",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода STONE DROP 24х4,7 см GUSTO",
    "price": 772.0,
    "desc": "Артикул: GT-2601-24 . Код 1С: 146317.",
    "images": [
      "assets/images/products/146317.jpg"
    ],
    "specs": []
  },
  {
    "id": "77328",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття MEGA-STONE 24х4,8 см GUSTO",
    "price": 755.0,
    "desc": "Артикул: GT-2102-24. Код 1С: 77328.",
    "images": [
      "assets/images/products/77328.jpg"
    ],
    "specs": []
  },
  {
    "id": "77329",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття MEGA-STONE 26х5,0 см GUSTO",
    "price": 834.0,
    "desc": "Артикул: GT-2102-26. Код 1С: 77329.",
    "images": [
      "assets/images/products/77329.jpg"
    ],
    "specs": []
  },
  {
    "id": "77330",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття MEGA-STONE 28х5,3 см GUSTO",
    "price": 922.0,
    "desc": "Артикул: GT-2102-28. Код 1С: 77330.",
    "images": [
      "assets/images/products/77330.jpg"
    ],
    "specs": []
  },
  {
    "id": "102474",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття GRANITE 26x50 см GUSTO",
    "price": 907.0,
    "desc": "Артикул: GT-2109-26. Код 1С: 102474.",
    "images": [
      "assets/images/products/102474.jpg"
    ],
    "specs": []
  },
  {
    "id": "102471",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття GRANITE 24x48 см GUSTO",
    "price": 826.0,
    "desc": "Артикул: GT-2109-24. Код 1С: 102471.",
    "images": [
      "assets/images/products/102471.jpg"
    ],
    "specs": []
  },
  {
    "id": "77333",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покриття GRANITE 28x7,3 см GUSTO",
    "price": 1187.0,
    "desc": "Артикул: GT-2103-28. Код 1С: 77333.",
    "images": [
      "assets/images/products/77333.jpg"
    ],
    "specs": []
  },
  {
    "id": "79091",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття Marble 20x4,3 см GUSTO",
    "price": 608.0,
    "desc": "Артикул: GT-2104-20. Код 1С: 79091.",
    "images": [
      "assets/images/products/79091.jpg"
    ],
    "specs": []
  },
  {
    "id": "77332",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покриття GRANITE 26x7,0 см GUSTO",
    "price": 1063.0,
    "desc": "Артикул: GT-2103-26. Код 1С: 77332.",
    "images": [
      "assets/images/products/77332.jpg"
    ],
    "specs": []
  },
  {
    "id": "77331",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покриття GRANITE 24x6,8 см GUSTO",
    "price": 958.0,
    "desc": "Артикул: GT-2103-24. Код 1С: 77331.",
    "images": [
      "assets/images/products/77331.jpg"
    ],
    "specs": []
  },
  {
    "id": "152067",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців GUSTO, покр.Marble, 200x3,0 мм",
    "price": 610.0,
    "desc": "Артикул: GT-2204-20. Код 1С: 152067.",
    "images": [
      "assets/images/products/152067.jpg"
    ],
    "specs": []
  },
  {
    "id": "152064",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців GUSTO, покр.Marble, 240x2,5 мм",
    "price": 704.0,
    "desc": "Артикул: GT-2204-24. Код 1С: 152064.",
    "images": [],
    "specs": []
  },
  {
    "id": "79097",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покр.Marble 24x6,8 см GUSTO",
    "price": 881.0,
    "desc": "Артикул: GT-2105-24. Код 1С: 79097.",
    "images": [
      "assets/images/products/79097.jpg"
    ],
    "specs": []
  },
  {
    "id": "155849",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Marbella 24х4.7см, GUSTO",
    "price": 789.0,
    "desc": "Артикул: GT-2501-24. Код 1С: 155849.",
    "images": [],
    "specs": []
  },
  {
    "id": "79093",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття Marble 26x5,0 см GUSTO",
    "price": 840.0,
    "desc": "Артикул: GT-2104-26. Код 1С: 79093.",
    "images": [
      "assets/images/products/79093.jpg"
    ],
    "specs": []
  },
  {
    "id": "79098",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покр.Marble 26x7,0 см GUSTO",
    "price": 984.0,
    "desc": "Артикул: GT-2105-26. Код 1С: 79098.",
    "images": [
      "assets/images/products/79098.jpg"
    ],
    "specs": []
  },
  {
    "id": "146202",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Marbella 26х5см, GUSTO",
    "price": 866.0,
    "desc": "Артикул: GT-2501-26. Код 1С: 146202.",
    "images": [],
    "specs": []
  },
  {
    "id": "79099",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода ГЛИБОКА покр.Marble 28x7,3 см GUSTO",
    "price": 1100.0,
    "desc": "Артикул: GT-2105-28. Код 1С: 79099.",
    "images": [
      "assets/images/products/79099.jpg"
    ],
    "specs": []
  },
  {
    "id": "155850",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Marbella 28х5,1см, GUSTO",
    "price": 957.0,
    "desc": "Артикул: GT-2501-28. Код 1С: 155850.",
    "images": [],
    "specs": []
  },
  {
    "id": "79094",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття Marble 28x5,3 см GUSTO",
    "price": 931.0,
    "desc": "Артикул: GT-2104-28. Код 1С: 79094.",
    "images": [
      "assets/images/products/79094.jpg"
    ],
    "specs": []
  },
  {
    "id": "102473",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття GRANITE 28x53 см GUSTO",
    "price": 1003.0,
    "desc": "Артикул: GT-2109-28. Код 1С: 102473.",
    "images": [
      "assets/images/products/102473.jpg"
    ],
    "specs": []
  },
  {
    "id": "79092",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття Marble 24x4,8 см GUSTO",
    "price": 761.0,
    "desc": "Артикул: GT-2104-24. Код 1С: 79092.",
    "images": [
      "assets/images/products/79092.jpg"
    ],
    "specs": []
  },
  {
    "id": "102472",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття GRANITE 20x43 см GUSTO",
    "price": 665.0,
    "desc": "Артикул: GT-2109-20. Код 1С: 102472.",
    "images": [
      "assets/images/products/102472.jpg"
    ],
    "specs": []
  },
  {
    "id": "79096",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців  покр.Marble 260x1,5 мм GUSTO",
    "price": 830.0,
    "desc": "Артикул: GT-2204-26. Код 1С: 79096.",
    "images": [
      "assets/images/products/79096.jpg"
    ],
    "specs": []
  },
  {
    "id": "155457",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Lume 20x4,3см, GUSTO",
    "price": 586.0,
    "desc": "Артикул: GT-2700-20. Код 1С: 155457.",
    "images": [
      "assets/images/products/155457.jpg"
    ],
    "specs": []
  },
  {
    "id": "155461",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода глибока Lume 24х6,8см, GUSTO",
    "price": 889.0,
    "desc": "Артикул: GT-2701-24. Код 1С: 155461.",
    "images": [
      "assets/images/products/155461.jpg"
    ],
    "specs": []
  },
  {
    "id": "155460",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Lume 28х5,1см, GUSTO",
    "price": 914.0,
    "desc": "Артикул: GT-2700-28. Код 1С: 155460.",
    "images": [
      "assets/images/products/155460.jpg"
    ],
    "specs": []
  },
  {
    "id": "155464",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода млинцева Lume 26х1,5см, GUSTO",
    "price": 834.0,
    "desc": "Артикул: GT-2702-26. Код 1С: 155464.",
    "images": [
      "assets/images/products/155464.jpg"
    ],
    "specs": []
  },
  {
    "id": "155462",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода глибока Lume 26х7,0см, GUSTO",
    "price": 983.0,
    "desc": "Артикул: GT-2701-26. Код 1С: 155462.",
    "images": [
      "assets/images/products/155462.jpg"
    ],
    "specs": []
  },
  {
    "id": "155463",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода глибока Lume 28х7,3см, GUSTO",
    "price": 1100.0,
    "desc": "Артикул: GT-2701-28. Код 1С: 155463.",
    "images": [
      "assets/images/products/155463.jpg"
    ],
    "specs": []
  },
  {
    "id": "112199",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода 'XYLAN matte' 20 x 3,5cм GUSTO",
    "price": 473.0,
    "desc": "Артикул: GT-2308-20 . Код 1С: 112199.",
    "images": [
      "assets/images/products/112199.jpg"
    ],
    "specs": []
  },
  {
    "id": "155851",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Senso 20х4,3см, GUSTO",
    "price": 737.0,
    "desc": "Артикул: GT-2800-20. Код 1С: 155851.",
    "images": [
      "assets/images/products/155851.jpg"
    ],
    "specs": []
  },
  {
    "id": "155458",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Lume 24х4,7см, GUSTO",
    "price": 751.0,
    "desc": "Артикул: GT-2700-24. Код 1С: 155458.",
    "images": [
      "assets/images/products/155458.jpg"
    ],
    "specs": []
  },
  {
    "id": "112200",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода 'XYLAN matte' 24 x 4cм GUSTO",
    "price": 640.0,
    "desc": "Артикул: GT-2308-24 . Код 1С: 112200.",
    "images": [
      "assets/images/products/112200.jpg"
    ],
    "specs": []
  },
  {
    "id": "112201",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода 'XYLAN matte' 26 x 4,3cм GUSTO",
    "price": 715.0,
    "desc": "Артикул: GT-2308-26 . Код 1С: 112201.",
    "images": [
      "assets/images/products/112201.jpg"
    ],
    "specs": []
  },
  {
    "id": "112202",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода 'XYLAN matte' 28 x 4,5cм GUSTO",
    "price": 801.0,
    "desc": "Артикул: GT-2308-28 . Код 1С: 112202.",
    "images": [
      "assets/images/products/112202.jpg"
    ],
    "specs": []
  },
  {
    "id": "155853",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Senso 28х5,1см, GUSTO",
    "price": 1063.0,
    "desc": "Артикул: GT-2800-28. Код 1С: 155853.",
    "images": [
      "assets/images/products/155853.jpg"
    ],
    "specs": []
  },
  {
    "id": "155852",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Senso 24х4,7см, GUSTO",
    "price": 882.0,
    "desc": "Артикул: GT-2800-24. Код 1С: 155852.",
    "images": [
      "assets/images/products/155852.jpg"
    ],
    "specs": []
  },
  {
    "id": "155459",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Lume 26х4,9см, GUSTO",
    "price": 825.0,
    "desc": "Артикул: GT-2700-26. Код 1С: 155459.",
    "images": [
      "assets/images/products/155459.jpg"
    ],
    "specs": []
  },
  {
    "id": "80442",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття XYLAN (чор) 24 см GUSTO",
    "price": 499.0,
    "desc": "Артикул: GT-2100-24/3. Код 1С: 80442.",
    "images": [
      "assets/images/products/80442.jpg"
    ],
    "specs": []
  },
  {
    "id": "80443",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття XYLAN (чор) 26 см GUSTO",
    "price": 599.0,
    "desc": "Артикул: GT-2100-26/3. Код 1С: 80443.",
    "images": [
      "assets/images/products/80443.jpg"
    ],
    "specs": []
  },
  {
    "id": "153711",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 26x12cм, 5,5л GUSTO",
    "price": 1671.0,
    "desc": "Артикул: GT-2404-26. Код 1С: 153711.",
    "images": [],
    "specs": []
  },
  {
    "id": "86510",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода  покриття XYLAN (чор) 28 см GUSTO",
    "price": 668.0,
    "desc": "Артикул: GT-2100-28/3. Код 1С: 86510.",
    "images": [
      "assets/images/products/86510.jpg"
    ],
    "specs": []
  },
  {
    "id": "146307",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш, покриття MARBLE, 16x8,0cм, 1,3л GUSTO",
    "price": 1018.0,
    "desc": "Артикул: GT-2404-16. Код 1С: 146307.",
    "images": [
      "assets/images/products/146307.jpg"
    ],
    "specs": []
  },
  {
    "id": "117014",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців покриття Xylan matte, 22x2см (чорн) GUSTO",
    "price": 434.0,
    "desc": "Артикул: GT-2308PC-22 . Код 1С: 117014.",
    "images": [
      "assets/images/products/117014.jpg"
    ],
    "specs": []
  },
  {
    "id": "86992",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців(чор) 24 см GUSTO",
    "price": 457.0,
    "desc": "Артикул: GT-2200-24/3. Код 1С: 86992.",
    "images": [
      "assets/images/products/86992.jpg"
    ],
    "specs": []
  },
  {
    "id": "146301",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 20x8,5cм, 2,3л GUSTO",
    "price": 1219.0,
    "desc": "Артикул: GT-2404-20. Код 1С: 146301.",
    "images": [
      "assets/images/products/146301.jpg"
    ],
    "specs": []
  },
  {
    "id": "146302",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 22x10cм, 3,2л GUSTO",
    "price": 1382.0,
    "desc": "Артикул: GT-2404-22. Код 1С: 146302.",
    "images": [
      "assets/images/products/146302.jpg"
    ],
    "specs": []
  },
  {
    "id": "146303",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 24x11,5cм, 4,5л GUSTO",
    "price": 1476.0,
    "desc": "Артикул: GT-2404-24. Код 1С: 146303.",
    "images": [
      "assets/images/products/146303.jpg"
    ],
    "specs": []
  },
  {
    "id": "146304",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття MARBLE, 20x9cм, 2,8л GUSTO",
    "price": 1367.0,
    "desc": "Артикул: GT-2504-20. Код 1С: 146304.",
    "images": [
      "assets/images/products/146304.jpg"
    ],
    "specs": []
  },
  {
    "id": "146305",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття MARBLE, 22x9,5cм, 3,5л GUSTO",
    "price": 1474.0,
    "desc": "Артикул: GT-2504-22. Код 1С: 146305.",
    "images": [
      "assets/images/products/146305.jpg"
    ],
    "specs": []
  },
  {
    "id": "136588",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода гриль 3в1 Multi-F 31x2,5см PEPPER",
    "price": 2016.0,
    "desc": "Артикул: PR-2327-31. Код 1С: 136588.",
    "images": [
      "assets/images/products/136588.jpg"
    ],
    "specs": []
  },
  {
    "id": "153714",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 26x12cм, 5,5л GUSTO",
    "price": 1671.0,
    "desc": "Артикул: GT-2604-26. Код 1С: 153714.",
    "images": [],
    "specs": []
  },
  {
    "id": "146308",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш, покриття CERAMIC SNOW, 16x8,0cм, 1,3л GUSTO",
    "price": 1018.0,
    "desc": "Артикул: GT-2604-16. Код 1С: 146308.",
    "images": [
      "assets/images/products/146308.jpg"
    ],
    "specs": []
  },
  {
    "id": "146306",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття MARBLE, 24x10cм, 4,4л GUSTO",
    "price": 1718.0,
    "desc": "Артикул: GT-2504-24. Код 1С: 146306.",
    "images": [
      "assets/images/products/146306.jpg"
    ],
    "specs": []
  },
  {
    "id": "153712",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 28x20cм, 10л GUSTO",
    "price": 2144.0,
    "desc": "Артикул: GT-2404-28/1. Код 1С: 153712.",
    "images": [
      "assets/images/products/153712.jpg"
    ],
    "specs": []
  },
  {
    "id": "146311",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 22x10cм, 3,2л GUSTO",
    "price": 1382.0,
    "desc": "Артикул: GT-2604-22. Код 1С: 146311.",
    "images": [
      "assets/images/products/146311.jpg"
    ],
    "specs": []
  },
  {
    "id": "146309",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 20x8,5cм, 2,3л GUSTO",
    "price": 1219.0,
    "desc": "Артикул: GT-2604-20. Код 1С: 146309.",
    "images": [
      "assets/images/products/146309.jpg"
    ],
    "specs": []
  },
  {
    "id": "146314",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 24x11,5cм, 4,5л GUSTO",
    "price": 1476.0,
    "desc": "Артикул: GT-2604-24. Код 1С: 146314.",
    "images": [
      "assets/images/products/146314.jpg"
    ],
    "specs": []
  },
  {
    "id": "146310",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття CERAMIC SNOW, 20x9cм, 2,8л GUSTO",
    "price": 1367.0,
    "desc": "Артикул: GT-2704-20. Код 1С: 146310.",
    "images": [
      "assets/images/products/146310.jpg"
    ],
    "specs": []
  },
  {
    "id": "146312",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття CERAMIC SNOW, 22x9,5cм, 3,5л GUSTO",
    "price": 1474.0,
    "desc": "Артикул: GT-2704-22. Код 1С: 146312.",
    "images": [
      "assets/images/products/146312.jpg"
    ],
    "specs": []
  },
  {
    "id": "141995",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода для млинців Tiger 24х2см PEPPER",
    "price": 809.0,
    "desc": "Артикул: PR-2343-24. Код 1С: 141995.",
    "images": [
      "assets/images/products/141995.jpg"
    ],
    "specs": []
  },
  {
    "id": "153713",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття MARBLE, 32x22cм, 14л GUSTO",
    "price": 2840.0,
    "desc": "Артикул: GT-2404-32/1. Код 1С: 153713.",
    "images": [
      "assets/images/products/153713.jpg"
    ],
    "specs": []
  },
  {
    "id": "146313",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля квадратна, покриття CERAMIC SNOW, 24x10cм, 4,4л GUSTO",
    "price": 1718.0,
    "desc": "Артикул: GT-2704-24. Код 1С: 146313.",
    "images": [
      "assets/images/products/146313.jpg"
    ],
    "specs": []
  },
  {
    "id": "137000",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Tiger 20х9см, 2л, PEPPER",
    "price": 1600.0,
    "desc": "Артикул: PR-2342-20. Код 1С: 137000.",
    "images": [
      "assets/images/products/137000.jpg"
    ],
    "specs": []
  },
  {
    "id": "136993",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Tiger 20х4,7см PEPPER",
    "price": 838.0,
    "desc": "Артикул: PR-2340-20. Код 1С: 136993.",
    "images": [
      "assets/images/products/136993.jpg"
    ],
    "specs": []
  },
  {
    "id": "153716",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 32x22cм, 14л GUSTO",
    "price": 2840.0,
    "desc": "Артикул: GT-2604-32/1. Код 1С: 153716.",
    "images": [
      "assets/images/products/153716.jpg"
    ],
    "specs": []
  },
  {
    "id": "137001",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Tiger 22х10см, 2.7л, PEPPER",
    "price": 1810.0,
    "desc": "Артикул: PR-2342-22. Код 1С: 137001.",
    "images": [
      "assets/images/products/137001.jpg"
    ],
    "specs": []
  },
  {
    "id": "137006",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Tiger 24х11см, 3.5л, PEPPER",
    "price": 1942.0,
    "desc": "Артикул: PR-2342-24. Код 1С: 137006.",
    "images": [
      "assets/images/products/137006.jpg"
    ],
    "specs": []
  },
  {
    "id": "136996",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Tiger 28х5,7см PEPPER",
    "price": 1240.0,
    "desc": "Артикул: PR-2340-28. Код 1С: 136996.",
    "images": [
      "assets/images/products/136996.jpg"
    ],
    "specs": []
  },
  {
    "id": "124146",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Маренго\" 24х4,5см PEPPER",
    "price": 990.0,
    "desc": "Артикул: PR-2217. Код 1С: 124146.",
    "images": [
      "assets/images/products/124146.jpg"
    ],
    "specs": []
  },
  {
    "id": "153715",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля, покриття CERAMIC SNOW, 28x20cм, 10л GUSTO",
    "price": 2144.0,
    "desc": "Артикул: GT-2604-28/1. Код 1С: 153715.",
    "images": [
      "assets/images/products/153715.jpg"
    ],
    "specs": []
  },
  {
    "id": "124148",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Маренго\" 26х4,8см PEPPER",
    "price": 1153.0,
    "desc": "Артикул: PR-2218. Код 1С: 124148.",
    "images": [
      "assets/images/products/124148.jpg"
    ],
    "specs": []
  },
  {
    "id": "136994",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Tiger 24х5,3см PEPPER",
    "price": 1027.0,
    "desc": "Артикул: PR-2340-24. Код 1С: 136994.",
    "images": [
      "assets/images/products/136994.jpg"
    ],
    "specs": []
  },
  {
    "id": "136990",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Маренго\" 28х5см PEPPER",
    "price": 1234.0,
    "desc": "Артикул: PR-2232. Код 1С: 136990.",
    "images": [],
    "specs": []
  },
  {
    "id": "136998",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з кришкою Tiger 26х5,5см PEPPER",
    "price": 1418.0,
    "desc": "Артикул: PR-2341-26. Код 1С: 136998.",
    "images": [
      "assets/images/products/136998.jpg"
    ],
    "specs": []
  },
  {
    "id": "136997",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з кришкою Tiger 24х5,3см PEPPER",
    "price": 1307.0,
    "desc": "Артикул: PR-2341-24. Код 1С: 136997.",
    "images": [
      "assets/images/products/136997.jpg"
    ],
    "specs": []
  },
  {
    "id": "136995",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Tiger 26х5,5см PEPPER",
    "price": 1118.0,
    "desc": "Артикул: PR-2340-26. Код 1С: 136995.",
    "images": [
      "assets/images/products/136995.jpg"
    ],
    "specs": []
  },
  {
    "id": "124144",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка \"Маренго\" 20х4,3см PEPPER",
    "price": 818.0,
    "desc": "Артикул: PR-2216. Код 1С: 124144.",
    "images": [
      "assets/images/products/124144.jpg"
    ],
    "specs": []
  },
  {
    "id": "124178",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Маренго\" 18х8см 1,8л., PEPPER",
    "price": 1380.0,
    "desc": "Артикул: PR-2219. Код 1С: 124178.",
    "images": [
      "assets/images/products/124178.jpg"
    ],
    "specs": []
  },
  {
    "id": "136999",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з кришкою Tiger 28х5,7см PEPPER",
    "price": 1564.0,
    "desc": "Артикул: PR-2341-28. Код 1С: 136999.",
    "images": [
      "assets/images/products/136999.jpg"
    ],
    "specs": []
  },
  {
    "id": "124180",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Маренго\" 20х9см 2,2л., PEPPER",
    "price": 1493.0,
    "desc": "Артикул: PR-2220. Код 1С: 124180.",
    "images": [
      "assets/images/products/124180.jpg"
    ],
    "specs": []
  },
  {
    "id": "124182",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Маренго\" 22х9см 3л., PEPPER",
    "price": 1692.0,
    "desc": "Артикул: PR-2221. Код 1С: 124182.",
    "images": [
      "assets/images/products/124182.jpg"
    ],
    "specs": []
  },
  {
    "id": "127326",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Viva 26х4,8см, PEPPER",
    "price": 1111.0,
    "desc": "Артикул: PR-2305-26. Код 1С: 127326.",
    "images": [
      "assets/images/products/127326.jpg"
    ],
    "specs": []
  },
  {
    "id": "127325",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Viva 24х4,5см, PEPPER",
    "price": 957.0,
    "desc": "Артикул: PR-2305-24. Код 1С: 127325.",
    "images": [
      "assets/images/products/127325.jpg"
    ],
    "specs": []
  },
  {
    "id": "127323",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Viva 16х7,5см, 1.2л, PEPPER",
    "price": 795.0,
    "desc": "Артикул: PR-2304-16. Код 1С: 127323.",
    "images": [
      "assets/images/products/127323.jpg"
    ],
    "specs": []
  },
  {
    "id": "127320",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Viva 18х8,5см, 1,7л, PEPPER",
    "price": 1242.0,
    "desc": "Артикул: PR-2306-18. Код 1С: 127320.",
    "images": [
      "assets/images/products/127320.jpg"
    ],
    "specs": []
  },
  {
    "id": "127324",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Viva 20х4,1см, PEPPER",
    "price": 768.0,
    "desc": "Артикул: PR-2305-20. Код 1С: 127324.",
    "images": [
      "assets/images/products/127324.jpg"
    ],
    "specs": []
  },
  {
    "id": "124184",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Маренго\" 24х10см 3,9л., PEPPER",
    "price": 1897.0,
    "desc": "Артикул: PR-2222. Код 1С: 124184.",
    "images": [
      "assets/images/products/124184.jpg"
    ],
    "specs": []
  },
  {
    "id": "127321",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Viva 20х9,5см, 2,4л, PEPPER",
    "price": 1413.0,
    "desc": "Артикул: PR-2306-20. Код 1С: 127321.",
    "images": [
      "assets/images/products/127321.jpg"
    ],
    "specs": []
  },
  {
    "id": "127322",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Viva 22х10см, 3,0л, PEPPER",
    "price": 1628.0,
    "desc": "Артикул: PR-2306-22. Код 1С: 127322.",
    "images": [
      "assets/images/products/127322.jpg"
    ],
    "specs": []
  },
  {
    "id": "124156",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Графен 20х4 см, PEPPER",
    "price": 1170.0,
    "desc": "Артикул: PR-2226. Код 1С: 124156.",
    "images": [
      "assets/images/products/124156.jpg"
    ],
    "specs": []
  },
  {
    "id": "124158",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Графен 24х4,3 см, PEPPER",
    "price": 1431.0,
    "desc": "Артикул: PR-2227. Код 1С: 124158.",
    "images": [
      "assets/images/products/124158.jpg"
    ],
    "specs": []
  },
  {
    "id": "124160",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Графен 26х4,8 см, PEPPER",
    "price": 1591.0,
    "desc": "Артикул: PR-2228. Код 1С: 124160.",
    "images": [
      "assets/images/products/124160.jpg"
    ],
    "specs": []
  },
  {
    "id": "136982",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Графен 28х4,8 см, PEPPER",
    "price": 1776.0,
    "desc": "Артикул: PR-2229-28. Код 1С: 136982.",
    "images": [
      "assets/images/products/136982.jpg"
    ],
    "specs": []
  },
  {
    "id": "124186",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Графен\" 20х9 см 2,1 л., PEPPER",
    "price": 1793.0,
    "desc": "Артикул: PR-2229. Код 1С: 124186.",
    "images": [
      "assets/images/products/124186.jpg"
    ],
    "specs": []
  },
  {
    "id": "124188",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Графен\" 24х10 см 3,5 л., PEPPER",
    "price": 2228.0,
    "desc": "Артикул: PR-2230. Код 1С: 124188.",
    "images": [
      "assets/images/products/124188.jpg"
    ],
    "specs": []
  },
  {
    "id": "124190",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля \"Графен\" 28х12 см 5,5 л., PEPPER",
    "price": 2807.0,
    "desc": "Артикул: PR-2231. Код 1С: 124190.",
    "images": [
      "assets/images/products/124190.jpg"
    ],
    "specs": []
  },
  {
    "id": "127430",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Wood 24х5,5см, PEPPER",
    "price": 943.0,
    "desc": "Артикул: PR-2314-24. Код 1С: 127430.",
    "images": [
      "assets/images/products/127430.jpg"
    ],
    "specs": []
  },
  {
    "id": "127450",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Wood 16x8см, 1,2л PEPPER",
    "price": 1125.0,
    "desc": "Артикул: PR-2312-16. Код 1С: 127450.",
    "images": [
      "assets/images/products/127450.jpg"
    ],
    "specs": []
  },
  {
    "id": "127452",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Wood 20х9,5см, 2,3л PEPPER",
    "price": 1344.0,
    "desc": "Артикул: PR-2313-20. Код 1С: 127452.",
    "images": [
      "assets/images/products/127452.jpg"
    ],
    "specs": []
  },
  {
    "id": "127432",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Wood 28х6см, PEPPER",
    "price": 1189.0,
    "desc": "Артикул: PR-2314-28. Код 1С: 127432.",
    "images": [
      "assets/images/products/127432.jpg"
    ],
    "specs": []
  },
  {
    "id": "127454",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Wood 24х11,5см, 4,2л PEPPER",
    "price": 1655.0,
    "desc": "Артикул: PR-2313-24. Код 1С: 127454.",
    "images": [
      "assets/images/products/127454.jpg"
    ],
    "specs": []
  },
  {
    "id": "127426",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Arma 20х5см, PEPPER",
    "price": 1386.0,
    "desc": "Артикул: PR-2311-20. Код 1С: 127426.",
    "images": [
      "assets/images/products/127426.jpg"
    ],
    "specs": []
  },
  {
    "id": "127428",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Arma 24х5,5см, PEPPER",
    "price": 1675.0,
    "desc": "Артикул: PR-2311-24. Код 1С: 127428.",
    "images": [
      "assets/images/products/127428.jpg"
    ],
    "specs": []
  },
  {
    "id": "127456",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Wood 28х12,5см, 6,2л PEPPER",
    "price": 1902.0,
    "desc": "Артикул: PR-2313-28. Код 1С: 127456.",
    "images": [
      "assets/images/products/127456.jpg"
    ],
    "specs": []
  },
  {
    "id": "136575",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Arma 28х6см, PEPPER",
    "price": 1938.0,
    "desc": "Артикул: PR-2311-28. Код 1С: 136575.",
    "images": [
      "assets/images/products/136575.jpg"
    ],
    "specs": []
  },
  {
    "id": "136576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Arma 30х6,5см, PEPPER",
    "price": 2127.0,
    "desc": "Артикул: PR-2311-30. Код 1С: 136576.",
    "images": [
      "assets/images/products/136576.jpg"
    ],
    "specs": []
  },
  {
    "id": "127444",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Arma 16х8см, 1,3л PEPPER",
    "price": 1728.0,
    "desc": "Артикул: PR-2309-16. Код 1С: 127444.",
    "images": [
      "assets/images/products/127444.jpg"
    ],
    "specs": []
  },
  {
    "id": "127438",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з ложкою Smart 20х5см, PEPPER",
    "price": 1563.0,
    "desc": "Артикул: PR-2320-20. Код 1С: 127438.",
    "images": [
      "assets/images/products/127438.jpg"
    ],
    "specs": []
  },
  {
    "id": "127446",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Arma 20х10см, 2,5л PEPPER",
    "price": 2056.0,
    "desc": "Артикул: PR-2310-20. Код 1С: 127446.",
    "images": [
      "assets/images/products/127446.jpg"
    ],
    "specs": []
  },
  {
    "id": "127448",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Arma 24х12см, 4,5л PEPPER",
    "price": 2556.0,
    "desc": "Артикул: PR-2310-24. Код 1С: 127448.",
    "images": [
      "assets/images/products/127448.jpg"
    ],
    "specs": []
  },
  {
    "id": "136580",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Wood 20х5см, PEPPER",
    "price": 892.0,
    "desc": "Артикул: PR-2314-20. Код 1С: 136580.",
    "images": [
      "assets/images/products/136580.jpg"
    ],
    "specs": []
  },
  {
    "id": "127440",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з ложкою Smart 24х5см, PEPPER",
    "price": 1581.0,
    "desc": "Артикул: PR-2320-24. Код 1С: 127440.",
    "images": [
      "assets/images/products/127440.jpg"
    ],
    "specs": []
  },
  {
    "id": "127464",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Smart 18х9см, 1,9л PEPPER",
    "price": 2133.0,
    "desc": "Артикул: PR-2318-18. Код 1С: 127464.",
    "images": [
      "assets/images/products/127464.jpg"
    ],
    "specs": []
  },
  {
    "id": "127442",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з ложкою Smart 26х6см, PEPPER",
    "price": 1909.0,
    "desc": "Артикул: PR-2320-26. Код 1С: 127442.",
    "images": [
      "assets/images/products/127442.jpg"
    ],
    "specs": []
  },
  {
    "id": "127466",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Smart 24х13см, 5,1л PEPPER",
    "price": 2884.0,
    "desc": "Артикул: PR-2319-24. Код 1С: 127466.",
    "images": [
      "assets/images/products/127466.jpg"
    ],
    "specs": []
  },
  {
    "id": "127468",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Smart 20х10см, 2,7л PEPPER",
    "price": 2343.0,
    "desc": "Артикул: PR-2319-20. Код 1С: 127468.",
    "images": [
      "assets/images/products/127468.jpg"
    ],
    "specs": []
  },
  {
    "id": "127434",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Panna 24х5,5см, PEPPER",
    "price": 1748.0,
    "desc": "Артикул: PR-2317-24. Код 1С: 127434.",
    "images": [
      "assets/images/products/127434.jpg"
    ],
    "specs": []
  },
  {
    "id": "127436",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Panna 26х6см, PEPPER",
    "price": 2097.0,
    "desc": "Артикул: PR-2317-26. Код 1С: 127436.",
    "images": [
      "assets/images/products/127436.jpg"
    ],
    "specs": []
  },
  {
    "id": "127458",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Panna 18х8,5см, 1,9л PEPPER",
    "price": 2158.0,
    "desc": "Артикул: PR-2315-18. Код 1С: 127458.",
    "images": [
      "assets/images/products/127458.jpg"
    ],
    "specs": []
  },
  {
    "id": "136579",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода WOK з кришкою Wood 30x9см, PEPPER",
    "price": 1883.0,
    "desc": "Артикул: PR-2314-30. Код 1С: 136579.",
    "images": [
      "assets/images/products/136579.jpg"
    ],
    "specs": []
  },
  {
    "id": "127462",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Panna 20х10см, 3,0л PEPPER",
    "price": 2589.0,
    "desc": "Артикул: PR-2316-20. Код 1С: 127462.",
    "images": [
      "assets/images/products/127462.jpg"
    ],
    "specs": []
  },
  {
    "id": "127460",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Panna 24х12см, 4,9л PEPPER",
    "price": 2889.0,
    "desc": "Артикул: PR-2316-24. Код 1С: 127460.",
    "images": [
      "assets/images/products/127460.jpg"
    ],
    "specs": []
  },
  {
    "id": "136581",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш DOMA 18х8,5см, 1,8л PEPPER",
    "price": 2419.0,
    "desc": "Артикул: PR-2323-18. Код 1С: 136581.",
    "images": [
      "assets/images/products/136581.jpg"
    ],
    "specs": []
  },
  {
    "id": "136584",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля DOMA 20х9,5см, 2,5л PEPPER",
    "price": 2430.0,
    "desc": "Артикул: PR-2324-20. Код 1С: 136584.",
    "images": [
      "assets/images/products/136584.jpg"
    ],
    "specs": []
  },
  {
    "id": "136577",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з кришкою Arma 28х8см, PEPPER",
    "price": 2544.0,
    "desc": "Артикул: PR-2321-28. Код 1С: 136577.",
    "images": [
      "assets/images/products/136577.jpg"
    ],
    "specs": []
  },
  {
    "id": "124132",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка з з'ємною ручкою \"Агат\" 20х4 см, PEPPER",
    "price": 1098.0,
    "desc": "Артикул: PR-2206. Код 1С: 124132.",
    "images": [
      "assets/images/products/124132.jpg"
    ],
    "specs": []
  },
  {
    "id": "136585",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля DOMA 24х11,5см, 4,5л PEPPER",
    "price": 2883.0,
    "desc": "Артикул: PR-2324-24. Код 1С: 136585.",
    "images": [
      "assets/images/products/136585.jpg"
    ],
    "specs": []
  },
  {
    "id": "124136",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка з з'ємною ручкою \"Агат\" 26х5 см, PEPPER",
    "price": 1396.0,
    "desc": "Артикул: PR-2208. Код 1С: 124136.",
    "images": [
      "assets/images/products/124136.jpg"
    ],
    "specs": []
  },
  {
    "id": "124134",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка з з'ємною ручкою \"Агат\" 24х4,3 см, PEPPER",
    "price": 1320.0,
    "desc": "Артикул: PR-2207. Код 1С: 124134.",
    "images": [
      "assets/images/products/124134.jpg"
    ],
    "specs": []
  },
  {
    "id": "124170",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш зі з'ємною ручкою \"Агат\" 16х7,5 см 1,2 л., PEPPER",
    "price": 1462.0,
    "desc": "Артикул: PR-2212. Код 1С: 124170.",
    "images": [
      "assets/images/products/124170.jpg"
    ],
    "specs": []
  },
  {
    "id": "124138",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка гриль зі з'ємною ручкою \"Агат\" 24 см, PEPPER",
    "price": 1597.0,
    "desc": "Артикул: PR-2209. Код 1С: 124138.",
    "images": [
      "assets/images/products/124138.jpg"
    ],
    "specs": []
  },
  {
    "id": "124140",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка гриль зі з'ємною ручкою \"Агат\" 28 см, PEPPER",
    "price": 1905.0,
    "desc": "Артикул: PR-2210. Код 1С: 124140.",
    "images": [
      "assets/images/products/124140.jpg"
    ],
    "specs": []
  },
  {
    "id": "136578",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода гриль Arma 28х5см, PEPPER",
    "price": 2035.0,
    "desc": "Артикул: PR-2322-28. Код 1С: 136578.",
    "images": [
      "assets/images/products/136578.jpg"
    ],
    "specs": []
  },
  {
    "id": "110805",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля 'BLACK ICE' (GREBLON C2) 2,5л. 20x10 см PEPPER",
    "price": 2584.0,
    "desc": "Артикул: PR-6002. Код 1С: 110805.",
    "images": [
      "assets/images/products/110805.jpg"
    ],
    "specs": []
  },
  {
    "id": "124172",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля зі з'ємними ручками \"Агат\" 20х10 см 2,9 л., PEPPER",
    "price": 2285.0,
    "desc": "Артикул: PR-2213. Код 1С: 124172.",
    "images": [
      "assets/images/products/124172.jpg"
    ],
    "specs": []
  },
  {
    "id": "124142",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка з з'ємною ручкою і кришкою \"Агат\" 28х8 см, PEPPER",
    "price": 2100.0,
    "desc": "Артикул: PR-2211. Код 1С: 124142.",
    "images": [
      "assets/images/products/124142.jpg"
    ],
    "specs": []
  },
  {
    "id": "110804",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля 'BLACK ICE' (GREBLON C2) 1,5л. 16x8.5 см PEPPER",
    "price": 2093.0,
    "desc": "Артикул: PR-6001. Код 1С: 110804.",
    "images": [
      "assets/images/products/110804.jpg"
    ],
    "specs": []
  },
  {
    "id": "110806",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля 'BLACK ICE' (GREBLON C2) 4,4л. 24x12 см PEPPER",
    "price": 3144.0,
    "desc": "Артикул: PR-6003. Код 1С: 110806.",
    "images": [
      "assets/images/products/110806.jpg"
    ],
    "specs": []
  },
  {
    "id": "124176",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля зі з'ємними ручками \"Агат\" 24х14 см 5,3 л., PEPPER",
    "price": 2912.0,
    "desc": "Артикул: PR-2215. Код 1С: 124176.",
    "images": [
      "assets/images/products/124176.jpg"
    ],
    "specs": []
  },
  {
    "id": "110807",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня 'BLACK ICE' (GREBLON C2) 4,2л. 28x8,5 см PEPPER",
    "price": 3748.0,
    "desc": "Артикул: PR-6004. Код 1С: 110807.",
    "images": [
      "assets/images/products/110807.jpg"
    ],
    "specs": []
  },
  {
    "id": "110809",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка 'BLACK ICE' (GREBLON C2) 28x5 см PEPPER",
    "price": 3280.0,
    "desc": "Артикул: PR-6006. Код 1С: 110809.",
    "images": [
      "assets/images/products/110809.jpg"
    ],
    "specs": []
  },
  {
    "id": "127316",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорідка Біла перлина 24х4,7см, PEPPER",
    "price": 1639.0,
    "desc": "Артикул: PR-2302-24. Код 1С: 127316.",
    "images": [
      "assets/images/products/127316.jpg"
    ],
    "specs": []
  },
  {
    "id": "127317",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Біла перлина 18х10см, 2,3л PEPPER",
    "price": 2805.0,
    "desc": "Артикул: PR-2303-18. Код 1С: 127317.",
    "images": [
      "assets/images/products/127317.jpg"
    ],
    "specs": []
  },
  {
    "id": "110808",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш 'BLACK ICE' (GREBLON C2) 1,4л. 16x8 см PEPPER",
    "price": 2141.0,
    "desc": "Артикул: PR-6005. Код 1С: 110808.",
    "images": [
      "assets/images/products/110808.jpg"
    ],
    "specs": []
  },
  {
    "id": "127318",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Біла перлина 20х10,5см, 3л PEPPER",
    "price": 3101.0,
    "desc": "Артикул: PR-2303-20. Код 1С: 127318.",
    "images": [
      "assets/images/products/127318.jpg"
    ],
    "specs": []
  },
  {
    "id": "124174",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля зі з'ємними ручками \"Агат\" 22х11 см 3,6 л., PEPPER",
    "price": 2447.0,
    "desc": "Артикул: PR-2214. Код 1С: 124174.",
    "images": [
      "assets/images/products/124174.jpg"
    ],
    "specs": []
  },
  {
    "id": "127315",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш Біла перлина 16,5х9,2см, 1,8л PEPPER",
    "price": 2270.0,
    "desc": "Артикул: PR-2301-16. Код 1С: 127315.",
    "images": [
      "assets/images/products/127315.jpg"
    ],
    "specs": []
  },
  {
    "id": "124130",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода Чорна перлина 24х4,7 см, PEPPER",
    "price": 1595.0,
    "desc": "Артикул: PR-2202. Код 1С: 124130.",
    "images": [
      "assets/images/products/124130.jpg"
    ],
    "specs": []
  },
  {
    "id": "136991",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня  Біла перлина 22х6,8см, 2л PEPPER",
    "price": 2944.0,
    "desc": "Артикул: PR-2330-22. Код 1С: 136991.",
    "images": [
      "assets/images/products/136991.jpg"
    ],
    "specs": []
  },
  {
    "id": "124164",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Чорна перлина 18х10 см 2,3 л., PEPPER",
    "price": 2775.0,
    "desc": "Артикул: PR-2203. Код 1С: 124164.",
    "images": [
      "assets/images/products/124164.jpg"
    ],
    "specs": []
  },
  {
    "id": "124162",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш з кришкою Чорна Перлина 16х9 см 1,8 л., PEPPER",
    "price": 2224.0,
    "desc": "Артикул: PR-2201. Код 1С: 124162.",
    "images": [
      "assets/images/products/124162.jpg"
    ],
    "specs": []
  },
  {
    "id": "124168",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Чорна перлина 22х11,5 см 4 л., PEPPER",
    "price": 3850.0,
    "desc": "Артикул: PR-2205. Код 1С: 124168.",
    "images": [
      "assets/images/products/124168.jpg"
    ],
    "specs": []
  },
  {
    "id": "127319",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Біла перлина 22х11,5см, 4л PEPPER",
    "price": 3855.0,
    "desc": "Артикул: PR-2303-22. Код 1С: 127319.",
    "images": [
      "assets/images/products/127319.jpg"
    ],
    "specs": []
  },
  {
    "id": "124166",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Чорна перлина 20х10,5 см 3 л., PEPPER",
    "price": 3038.0,
    "desc": "Артикул: PR-2204. Код 1С: 124166.",
    "images": [
      "assets/images/products/124166.jpg"
    ],
    "specs": []
  },
  {
    "id": "110810",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Гусятниця 'BLACK ICE' 2в1 (GREBLON C2) 32x21x11 см PEPPER",
    "price": 4978.0,
    "desc": "Артикул: PR-6007. Код 1С: 110810.",
    "images": [
      "assets/images/products/110810.jpg"
    ],
    "specs": []
  },
  {
    "id": "136966",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня Чорна перлина 24х7 см, 2.5л., PEPPER",
    "price": 3291.0,
    "desc": "Артикул: PR-2243. Код 1С: 136966.",
    "images": [
      "assets/images/products/136966.jpg"
    ],
    "specs": []
  },
  {
    "id": "136949",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Молочник Чорна Перлина 10х13,6 см, 1.1л PEPPER",
    "price": 1273.0,
    "desc": "Артикул: PR-2240. Код 1С: 136949.",
    "images": [
      "assets/images/products/136949.jpg"
    ],
    "specs": []
  },
  {
    "id": "79296",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 16 см Gusto",
    "price": 120.0,
    "desc": "Артикул: GT-8100-16 . Код 1С: 79296.",
    "images": [
      "assets/images/products/79296.jpg"
    ],
    "specs": []
  },
  {
    "id": "136962",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Чорна Перлина 50мл, PEPPER",
    "price": 826.0,
    "desc": "Артикул: PR-2241. Код 1С: 136962.",
    "images": [
      "assets/images/products/136962.jpg"
    ],
    "specs": []
  },
  {
    "id": "136963",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Чорна Перлина 100мл, PEPPER",
    "price": 977.0,
    "desc": "Артикул: PR-2242. Код 1С: 136963.",
    "images": [
      "assets/images/products/136963.jpg"
    ],
    "specs": []
  },
  {
    "id": "136587",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня DOMA 26х8см, 3,5л PEPPER",
    "price": 3054.0,
    "desc": "Артикул: PR-2326-26. Код 1С: 136587.",
    "images": [
      "assets/images/products/136587.jpg"
    ],
    "specs": []
  },
  {
    "id": "79300",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 18 см Gusto",
    "price": 142.0,
    "desc": "Артикул: GT-8100-18 . Код 1С: 79300.",
    "images": [
      "assets/images/products/79300.jpg"
    ],
    "specs": []
  },
  {
    "id": "136586",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Сковорода з кришкою DOMA 26х5см, PEPPER",
    "price": 2841.0,
    "desc": "Артикул: PR-2325-26. Код 1С: 136586.",
    "images": [
      "assets/images/products/136586.jpg"
    ],
    "specs": []
  },
  {
    "id": "79302",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 22 см Gusto",
    "price": 157.0,
    "desc": "Артикул: GT-8100-22 . Код 1С: 79302.",
    "images": [
      "assets/images/products/79302.jpg"
    ],
    "specs": []
  },
  {
    "id": "79301",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 20 см Gusto",
    "price": 148.0,
    "desc": "Артикул: GT-8100-20 . Код 1С: 79301.",
    "images": [
      "assets/images/products/79301.jpg"
    ],
    "specs": []
  },
  {
    "id": "79303",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 24 см Gusto",
    "price": 179.0,
    "desc": "Артикул: GT-8100-24 . Код 1С: 79303.",
    "images": [
      "assets/images/products/79303.jpg"
    ],
    "specs": []
  },
  {
    "id": "79304",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 26 см Gusto",
    "price": 192.0,
    "desc": "Артикул: GT-8100-26 . Код 1С: 79304.",
    "images": [
      "assets/images/products/79304.jpg"
    ],
    "specs": []
  },
  {
    "id": "79305",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 28 cм Gusto",
    "price": 224.0,
    "desc": "Артикул: GT-8100-28 . Код 1С: 79305.",
    "images": [],
    "specs": []
  },
  {
    "id": "79306",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ручка для кришки Gusto GT-4100",
    "price": 47.0,
    "desc": "Артикул: GT-4100. Код 1С: 79306.",
    "images": [],
    "specs": []
  },
  {
    "id": "119761",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна 30 cм Gusto",
    "price": 254.0,
    "desc": "Артикул: GT-8100-30. Код 1С: 119761.",
    "images": [
      "assets/images/products/119761.jpg"
    ],
    "specs": []
  },
  {
    "id": "149687",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": false,
    "name": "Набір посуду Forest Chef, 10 предметів, PEPPER  1-2)Ківш з кришкою 1,65л, 18*8 см;3-4)Каструля з кришкою 5,0л, 26*11,5 см;5)Глибока сковорода 3,5л, 26*8 см;6-7)Дві силіконові підставки 19см і 27см;8)Одна З'ємна ручка;9-10)Дві силіконові захисні прихватки. Внутрішнє 2-шарове антипригарне покриття Pfluon",
    "price": 4750.0,
    "desc": "Артикул: PR-2501. Код 1С: 149687.",
    "images": [
      "assets/images/products/149687.jpg"
    ],
    "specs": []
  },
  {
    "id": "118851",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ручка для кришки-022 Gusto",
    "price": 47.0,
    "desc": "Артикул: GT-4122-032. Код 1С: 118851.",
    "images": [
      "assets/images/products/118851.jpg"
    ],
    "specs": []
  },
  {
    "id": "149688",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір посуду Sunny Chef, 10 предметів, PEPPER  1-2)Ківш з кришкою 1,65л, 18*8 см;3-4)Каструля з кришкою 5,0л, 26*11,5 см;5)Глибока сковорода 3,5л, 26*8 см;6-7)Дві силіконові підставки 19см і 27см;8)Одна З'ємна ручка;9-10)Дві силіконові захисні прихватки. Внутрішнє 2-шарове антипригарне покриття Pfluon",
    "price": 4750.0,
    "desc": "Артикул: PR-2502. Код 1С: 149688.",
    "images": [
      "assets/images/products/149688.jpg"
    ],
    "specs": []
  },
  {
    "id": "118846",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ручка для кришки -016 Gusto",
    "price": 47.0,
    "desc": "Артикул: GT-4122-016. Код 1С: 118846.",
    "images": [
      "assets/images/products/118846.jpg"
    ],
    "specs": []
  },
  {
    "id": "100055",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для хліба 25x13x6 см GUSTO",
    "price": 291.0,
    "desc": "Артикул: GT-3125. Код 1С: 100055.",
    "images": [
      "assets/images/products/100055.jpg"
    ],
    "specs": []
  },
  {
    "id": "121488",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для тарта хвиляста GUSTO, 25x3 см GUSTO",
    "price": 313.0,
    "desc": "Артикул: GT-3125/1. Код 1С: 121488.",
    "images": [
      "assets/images/products/121488.jpg"
    ],
    "specs": []
  },
  {
    "id": "121486",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для тарта хвиляста 20x3 см GUSTO",
    "price": 291.0,
    "desc": "Артикул: GT-3120. Код 1С: 121486.",
    "images": [
      "assets/images/products/121486.jpg"
    ],
    "specs": []
  },
  {
    "id": "121482",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма кругла розємна для випікання 20x6,8 см GUSTO",
    "price": 327.0,
    "desc": "Артикул: GT-3220. Код 1С: 121482.",
    "images": [
      "assets/images/products/121482.jpg"
    ],
    "specs": []
  },
  {
    "id": "136590",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня Scala 32х16,5см, 5,6х2,5л PEPPER",
    "price": 3679.0,
    "desc": "Артикул: PR-2329-32. Код 1С: 136590.",
    "images": [
      "assets/images/products/136590.jpg"
    ],
    "specs": []
  },
  {
    "id": "121484",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма кругла розємна для випікання 22x6,8 см GUSTO",
    "price": 345.0,
    "desc": "Артикул: GT-3222. Код 1С: 121484.",
    "images": [
      "assets/images/products/121484.jpg"
    ],
    "specs": []
  },
  {
    "id": "136393",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна з силіконовим обідком (з ручкою) Gusto 24 см",
    "price": 426.0,
    "desc": "Артикул: GT-8200-24. Код 1С: 136393.",
    "images": [
      "assets/images/products/136393.jpg"
    ],
    "specs": []
  },
  {
    "id": "136402",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна з силіконовим обідком (з ручкою) Gusto 28 см",
    "price": 529.0,
    "desc": "Артикул: GT-8200-28. Код 1С: 136402.",
    "images": [
      "assets/images/products/136402.jpg"
    ],
    "specs": []
  },
  {
    "id": "136397",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка універсальна з силіконовим обідком (з ручкою) Gusto 26 см",
    "price": 453.0,
    "desc": "Артикул: GT-8200-26. Код 1С: 136397.",
    "images": [
      "assets/images/products/136397.jpg"
    ],
    "specs": []
  },
  {
    "id": "100067",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма квадратна для випікання 22x22x4,8см GUSTO",
    "price": 303.0,
    "desc": "Артикул: GT-3122. Код 1С: 100067.",
    "images": [
      "assets/images/products/100067.jpg"
    ],
    "specs": []
  },
  {
    "id": "100068",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма прямокутна для випікання 34x24x4,5 см GUSTO",
    "price": 390.0,
    "desc": "Артикул: GT-3134. Код 1С: 100068.",
    "images": [
      "assets/images/products/100068.jpg"
    ],
    "specs": []
  },
  {
    "id": "100066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання кексу 25x8,5 см GUSTO",
    "price": 491.0,
    "desc": "Артикул: GT-3225. Код 1С: 100066.",
    "images": [
      "assets/images/products/100066.jpg"
    ],
    "specs": []
  },
  {
    "id": "100056",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма кругла розємна для випікання 24x6,8 см GUSTO",
    "price": 369.0,
    "desc": "Артикул: GT-3224. Код 1С: 100056.",
    "images": [
      "assets/images/products/100056.jpg"
    ],
    "specs": []
  },
  {
    "id": "100063",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма кругла розємна для випікання 26x6,8 см GUSTO",
    "price": 402.0,
    "desc": "Артикул: GT-3226. Код 1С: 100063.",
    "images": [
      "assets/images/products/100063.jpg"
    ],
    "specs": []
  },
  {
    "id": "100069",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма прямокутна для випікання 38x27x5,2 см GUSTO",
    "price": 445.0,
    "desc": "Артикул: GT-3138. Код 1С: 100069.",
    "images": [
      "assets/images/products/100069.jpg"
    ],
    "specs": []
  },
  {
    "id": "100070",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для мафінів на 6 шт 26x17x2,8 см GUSTO",
    "price": 412.0,
    "desc": "Артикул: GT-3126. Код 1С: 100070.",
    "images": [
      "assets/images/products/100070.jpg"
    ],
    "specs": []
  },
  {
    "id": "127808",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір форм для випікання 3 шт (серце 23см/круг 26см/квадрат 28 см) GUSTO",
    "price": 1133.0,
    "desc": "Артикул: GT-3303. Код 1С: 127808.",
    "images": [
      "assets/images/products/127808.jpg"
    ],
    "specs": []
  },
  {
    "id": "121480",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для мафінів на 12 шт 35x27x3 см GUSTO",
    "price": 586.0,
    "desc": "Артикул: GT-3135. Код 1С: 121480.",
    "images": [
      "assets/images/products/121480.jpg"
    ],
    "specs": []
  },
  {
    "id": "100064",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір круглих форм для випікання 3 шт (22/24/26 см)GUSTO",
    "price": 801.0,
    "desc": "Артикул: GT-3301 . Код 1С: 100064.",
    "images": [],
    "specs": []
  },
  {
    "id": "148973",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower прямокутна PEPPER, 30x18.5x6см",
    "price": 585.0,
    "desc": "Артикул: PR-3332. Код 1С: 148973.",
    "images": [
      "assets/images/products/148973.jpg"
    ],
    "specs": []
  },
  {
    "id": "148972",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower прямокутна PEPPER, 37x24x6.7см",
    "price": 939.0,
    "desc": "Артикул: PR-3331. Код 1С: 148972.",
    "images": [
      "assets/images/products/148972.jpg"
    ],
    "specs": []
  },
  {
    "id": "148974",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower прямокутна PEPPER, 20.5x13.5x4.5см",
    "price": 273.0,
    "desc": "Артикул: PR-3333. Код 1С: 148974.",
    "images": [
      "assets/images/products/148974.jpg"
    ],
    "specs": []
  },
  {
    "id": "148976",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower овальна PEPPER, 20.3x13x5.5 см",
    "price": 268.0,
    "desc": "Артикул: PR-3335. Код 1С: 148976.",
    "images": [
      "assets/images/products/148976.jpg"
    ],
    "specs": []
  },
  {
    "id": "148975",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower овальна PEPPER, 29.7x18.2x6 см",
    "price": 509.0,
    "desc": "Артикул: PR-3334. Код 1С: 148975.",
    "images": [
      "assets/images/products/148975.jpg"
    ],
    "specs": []
  },
  {
    "id": "148977",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower кругла PEPPER, 23.5x5.5 см",
    "price": 510.0,
    "desc": "Артикул: PR-3336. Код 1С: 148977.",
    "images": [
      "assets/images/products/148977.jpg"
    ],
    "specs": []
  },
  {
    "id": "148978",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower кругла PEPPER, 13x4.4 см",
    "price": 184.0,
    "desc": "Артикул: PR-3337. Код 1С: 148978.",
    "images": [
      "assets/images/products/148978.jpg"
    ],
    "specs": []
  },
  {
    "id": "148979",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower кругла PEPPER, 10x6 см",
    "price": 148.0,
    "desc": "Артикул: PR-3338. Код 1С: 148979.",
    "images": [
      "assets/images/products/148979.jpg"
    ],
    "specs": []
  },
  {
    "id": "148981",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower кругла з кришкою PEPPER, 14.2x10x8.8 см",
    "price": 257.0,
    "desc": "Артикул: PR-3340. Код 1С: 148981.",
    "images": [
      "assets/images/products/148981.jpg"
    ],
    "specs": []
  },
  {
    "id": "112878",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "ФОРМА ДЛЯ ВИПІКАННЯ ПОРЦІЙНА 6,7*3,8 см, PEPPER",
    "price": 84.0,
    "desc": "Артикул: PR-3267. Код 1С: 112878.",
    "images": [
      "assets/images/products/112878.jpg"
    ],
    "specs": []
  },
  {
    "id": "148982",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower кругла з кришкою PEPPER, 18.5x14x9.5 см",
    "price": 393.0,
    "desc": "Артикул: PR-3341. Код 1С: 148982.",
    "images": [
      "assets/images/products/148982.jpg"
    ],
    "specs": []
  },
  {
    "id": "148980",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання Tower квадратна PEPPER, 28x24x5.5 см",
    "price": 582.0,
    "desc": "Артикул: PR-3339. Код 1С: 148980.",
    "images": [
      "assets/images/products/148980.jpg"
    ],
    "specs": []
  },
  {
    "id": "112879",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "ГОРЩИК ДЛЯ ВИПІКАННЯ з кришкою 10 см, 0,3 л, PEPPER",
    "price": 271.0,
    "desc": "Артикул: PR-3213. Код 1С: 112879.",
    "images": [
      "assets/images/products/112879.jpg"
    ],
    "specs": []
  },
  {
    "id": "136589",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Жаровня Scala 42х7,5см, 4,8л PEPPER",
    "price": 2787.0,
    "desc": "Артикул: PR-2328-42. Код 1С: 136589.",
    "images": [
      "assets/images/products/136589.jpg"
    ],
    "specs": []
  },
  {
    "id": "102863",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "ГОРЩИК ДЛЯ ВИПІКАННЯ з кришкою 10 см, 0,2 л, PEPPER",
    "price": 230.0,
    "desc": "Артикул: PR-3210. Код 1С: 102863.",
    "images": [
      "assets/images/products/102863.jpg"
    ],
    "specs": []
  },
  {
    "id": "102862",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "КАСТРУЛЯ ДЛЯ ВИПІКАННЯ з кришкою 19 см, 1,4 л, PEPPER",
    "price": 897.0,
    "desc": "Артикул: PR-3219. Код 1С: 102862.",
    "images": [
      "assets/images/products/102862.jpg"
    ],
    "specs": []
  },
  {
    "id": "111156",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "КАСТРУЛЯ ДЛЯ ВИПІКАННЯ з кришкою 23 см, 2 л, PEPPER",
    "price": 1212.0,
    "desc": "Артикул: PR-3223. Код 1С: 111156.",
    "images": [
      "assets/images/products/111156.jpg"
    ],
    "specs": []
  },
  {
    "id": "109804",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання прямокутна 1,6л 28x19x5см VITTORA",
    "price": 387.0,
    "desc": "Артикул: VT-6116. Код 1С: 109804.",
    "images": [
      "assets/images/products/109804.jpg"
    ],
    "specs": []
  },
  {
    "id": "111157",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "КАСТРУЛЯ ДЛЯ ВИПІКАННЯ з кришкою 25 см, 3,5 л, PEPPER",
    "price": 1602.0,
    "desc": "Артикул: PR-3225. Код 1С: 111157.",
    "images": [
      "assets/images/products/111157.jpg"
    ],
    "specs": []
  },
  {
    "id": "103524",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання прямокутна 2л 32*20*5см VITTORA",
    "price": 476.0,
    "desc": "Артикул: VT-6120. Код 1С: 103524.",
    "images": [
      "assets/images/products/103524.jpg"
    ],
    "specs": []
  },
  {
    "id": "103525",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання прямокутна 2,6л 35*22*5,5см VITTORA",
    "price": 543.0,
    "desc": "Артикул: VT-6126. Код 1С: 103525.",
    "images": [
      "assets/images/products/103525.jpg"
    ],
    "specs": []
  },
  {
    "id": "103527",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання овальна 2л 30*21*6см VITTORA",
    "price": 400.0,
    "desc": "Артикул: VT-6220. Код 1С: 103527.",
    "images": [
      "assets/images/products/103527.jpg"
    ],
    "specs": []
  },
  {
    "id": "103526",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання прямокутна 3,6л 39*24*6,5см VITTORA",
    "price": 700.0,
    "desc": "Артикул: VT-6136. Код 1С: 103526.",
    "images": [
      "assets/images/products/103526.jpg"
    ],
    "specs": []
  },
  {
    "id": "109806",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання  кругла з кришкою 2,1л 23x20x10см VITTORA",
    "price": 515.0,
    "desc": "Артикул: VT-6221. Код 1С: 109806.",
    "images": [
      "assets/images/products/109806.jpg"
    ],
    "specs": []
  },
  {
    "id": "128395",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання кругла з кришкою 3л 26x23x11см VITTORA",
    "price": 565.0,
    "desc": "Артикул: VT-6230. Код 1С: 128395.",
    "images": [
      "assets/images/products/128395.jpg"
    ],
    "specs": []
  },
  {
    "id": "103528",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання  овальна з кришкою 4л 33*20*13см VITTORA",
    "price": 674.0,
    "desc": "Артикул: VT-6240. Код 1С: 103528.",
    "images": [
      "assets/images/products/103528.jpg"
    ],
    "specs": []
  },
  {
    "id": "103529",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма для випікання прямокутна з кришкою 4,5л 32,5*20*13см VITTORA",
    "price": 828.0,
    "desc": "Артикул: VT-6245. Код 1С: 103529.",
    "images": [
      "assets/images/products/103529.jpg"
    ],
    "specs": []
  },
  {
    "id": "147008",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для шоколаду, Цукерки 23х14х1,8см GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-S-217. Код 1С: 147008.",
    "images": [
      "assets/images/products/147008.jpg"
    ],
    "specs": []
  },
  {
    "id": "146478",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Форма прямокутна для випікання (жаровня) 39.5x30x6 см GUSTO",
    "price": 417.0,
    "desc": "Артикул: GT-3304. Код 1С: 146478.",
    "images": [
      "assets/images/products/146478.jpg"
    ],
    "specs": []
  },
  {
    "id": "147009",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для шоколаду, Квіточки 21х11х1,5см GUSTO",
    "price": 74.0,
    "desc": "Артикул: GT-S-218. Код 1С: 147009.",
    "images": [
      "assets/images/products/147009.jpg"
    ],
    "specs": []
  },
  {
    "id": "138647",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для шоколаду, сердечка 21*10,5*1,5см GUSTO",
    "price": 84.0,
    "desc": "Артикул: GT-S-204. Код 1С: 138647.",
    "images": [
      "assets/images/products/138647.jpg"
    ],
    "specs": []
  },
  {
    "id": "147006",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів, Тістечка на 6шт 27х17х3см GUSTO",
    "price": 147.0,
    "desc": "Артикул: GT-S-215. Код 1С: 147006.",
    "images": [
      "assets/images/products/147006.jpg"
    ],
    "specs": []
  },
  {
    "id": "147007",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів, Ведмедики на 7шт 26х19.5х2см GUSTO",
    "price": 168.0,
    "desc": "Артикул: GT-S-216. Код 1С: 147007.",
    "images": [
      "assets/images/products/147007.jpg"
    ],
    "specs": []
  },
  {
    "id": "138651",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для хлібу 24*13*5,5см GUSTO",
    "price": 126.0,
    "desc": "Артикул: GT-S-208. Код 1С: 138651.",
    "images": [
      "assets/images/products/138651.jpg"
    ],
    "specs": []
  },
  {
    "id": "138650",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма серце 21*20*4см GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-S-207. Код 1С: 138650.",
    "images": [
      "assets/images/products/138650.jpg"
    ],
    "specs": []
  },
  {
    "id": "138652",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексу 21,5*21,5*9,5см GUSTO",
    "price": 186.0,
    "desc": "Артикул: GT-S-209. Код 1С: 138652.",
    "images": [
      "assets/images/products/138652.jpg"
    ],
    "specs": []
  },
  {
    "id": "147005",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів, Звірята на 6шт 25.5х16.5х2см GUSTO",
    "price": 117.0,
    "desc": "Артикул: GT-S-214. Код 1С: 147005.",
    "images": [
      "assets/images/products/147005.jpg"
    ],
    "specs": []
  },
  {
    "id": "138648",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма серця на 6шт  26*16*3см GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-S-205. Код 1С: 138648.",
    "images": [
      "assets/images/products/138648.jpg"
    ],
    "specs": []
  },
  {
    "id": "138655",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для мафінів на 6шт 26*16*3,5см GUSTO",
    "price": 138.0,
    "desc": "Артикул: GT-S-212. Код 1С: 138655.",
    "images": [
      "assets/images/products/138655.jpg"
    ],
    "specs": []
  },
  {
    "id": "138649",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма квітка 24*22*4см GUSTO",
    "price": 169.0,
    "desc": "Артикул: GT-S-206. Код 1С: 138649.",
    "images": [
      "assets/images/products/138649.jpg"
    ],
    "specs": []
  },
  {
    "id": "138653",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма кругла 24*22*4см GUSTO",
    "price": 155.0,
    "desc": "Артикул: GT-S-210. Код 1С: 138653.",
    "images": [
      "assets/images/products/138653.jpg"
    ],
    "specs": []
  },
  {
    "id": "138644",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів на 6шт 26*16*3см GUSTO",
    "price": 119.0,
    "desc": "Артикул: GT-S-201. Код 1С: 138644.",
    "images": [
      "assets/images/products/138644.jpg"
    ],
    "specs": []
  },
  {
    "id": "138654",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма квадратна 26*24*6см GUSTO",
    "price": 224.0,
    "desc": "Артикул: GT-S-211. Код 1С: 138654.",
    "images": [
      "assets/images/products/138654.jpg"
    ],
    "specs": []
  },
  {
    "id": "138656",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів, квіточки на 6шт 26*16*2,5см GUSTO",
    "price": 132.0,
    "desc": "Артикул: GT-S-213. Код 1С: 138656.",
    "images": [
      "assets/images/products/138656.jpg"
    ],
    "specs": []
  },
  {
    "id": "136073",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 40х50см (зелений)",
    "price": 155.0,
    "desc": "Артикул: GT-4050-1. Код 1С: 136073.",
    "images": [
      "assets/images/products/136073.jpg"
    ],
    "specs": []
  },
  {
    "id": "138646",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для мафінів на 12шт  30*20*3см GUSTO",
    "price": 180.0,
    "desc": "Артикул: GT-S-203. Код 1С: 138646.",
    "images": [
      "assets/images/products/138646.jpg"
    ],
    "specs": []
  },
  {
    "id": "136074",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 40х50см (кобальт зелений)",
    "price": 155.0,
    "desc": "Артикул: GT-4050-1. Код 1С: 136074.",
    "images": [
      "assets/images/products/136074.jpg"
    ],
    "specs": []
  },
  {
    "id": "138645",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для кексів, асорті на 6шт 26*16*3,5см GUSTO",
    "price": 155.0,
    "desc": "Артикул: GT-S-202. Код 1С: 138645.",
    "images": [
      "assets/images/products/138645.jpg"
    ],
    "specs": []
  },
  {
    "id": "136196",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 40х50см (рожевий)",
    "price": 155.0,
    "desc": "Артикул: GT-4050-1. Код 1С: 136196.",
    "images": [
      "assets/images/products/136196.jpg"
    ],
    "specs": []
  },
  {
    "id": "136075",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 40х50см (синій)",
    "price": 155.0,
    "desc": "Артикул: GT-4050-1. Код 1С: 136075.",
    "images": [
      "assets/images/products/136075.jpg"
    ],
    "specs": []
  },
  {
    "id": "136026",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (кобальт зелений)",
    "price": 233.0,
    "desc": "Артикул: GT-4565-1. Код 1С: 136026.",
    "images": [
      "assets/images/products/136026.jpg"
    ],
    "specs": []
  },
  {
    "id": "136027",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (зелений)",
    "price": 233.0,
    "desc": "Артикул: GT-4565-1. Код 1С: 136027.",
    "images": [
      "assets/images/products/136027.jpg"
    ],
    "specs": []
  },
  {
    "id": "136028",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (рожевий)",
    "price": 233.0,
    "desc": "Артикул: GT-4565-1. Код 1С: 136028.",
    "images": [
      "assets/images/products/136028.jpg"
    ],
    "specs": []
  },
  {
    "id": "136195",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (синій)",
    "price": 233.0,
    "desc": "Артикул: GT-4565-1. Код 1С: 136195.",
    "images": [
      "assets/images/products/136195.jpg"
    ],
    "specs": []
  },
  {
    "id": "121302",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник зі свистком 2 л GUSTO",
    "price": 660.0,
    "desc": "Артикул: GT-1410-20. Код 1С: 121302.",
    "images": [
      "assets/images/products/121302.jpg"
    ],
    "specs": []
  },
  {
    "id": "157757",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для аерогрилю/мультипечі GUSTO, 18.5х5см",
    "price": 131.0,
    "desc": "Артикул: GT-S-220. Код 1С: 157757.",
    "images": [
      "assets/images/products/157757.jpg"
    ],
    "specs": []
  },
  {
    "id": "136077",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (бордо) зміцнений",
    "price": 250.0,
    "desc": "Артикул: GT-4565-2. Код 1С: 136077.",
    "images": [
      "assets/images/products/136077.jpg"
    ],
    "specs": []
  },
  {
    "id": "157761",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для аерогрилю/мультипечі кругла GUSTO, 18х4.5см",
    "price": 72.0,
    "desc": "Артикул: GT-S-221. Код 1С: 157761.",
    "images": [
      "assets/images/products/157761.jpg"
    ],
    "specs": []
  },
  {
    "id": "136078",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (кобальт) зміцнений",
    "price": 250.0,
    "desc": "Артикул: GT-4565-2. Код 1С: 136078.",
    "images": [
      "assets/images/products/136078.jpg"
    ],
    "specs": []
  },
  {
    "id": "83515",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник зі свистком 2,5л GUSTO",
    "price": 968.0,
    "desc": "Артикул: GT-1406-25. Код 1С: 83515.",
    "images": [
      "assets/images/products/83515.jpg"
    ],
    "specs": []
  },
  {
    "id": "136076",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок силіконовий для формування та випікання тіста GUSTO, 45х65см (бузок) зміцнений",
    "price": 250.0,
    "desc": "Артикул: GT-4565-2. Код 1С: 136076.",
    "images": [
      "assets/images/products/136076.jpg"
    ],
    "specs": []
  },
  {
    "id": "157758",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для аерогрилю/мультипечі GUSTO, 21х5см",
    "price": 147.0,
    "desc": "Артикул: GT-S-220. Код 1С: 157758.",
    "images": [
      "assets/images/products/157758.jpg"
    ],
    "specs": []
  },
  {
    "id": "77342",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник зі свистком 2,5 л GUSTO",
    "price": 704.0,
    "desc": "Артикул: GT-1402-25. Код 1С: 77342.",
    "images": [
      "assets/images/products/77342.jpg"
    ],
    "specs": []
  },
  {
    "id": "77346",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник зі свистком 3л GUSTO",
    "price": 1056.0,
    "desc": "Артикул: GT-1406-30. Код 1С: 77346.",
    "images": [
      "assets/images/products/77346.jpg"
    ],
    "specs": []
  },
  {
    "id": "157763",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для аерогрилю/мультипечі кругла GUSTO, 24х4.5см",
    "price": 142.0,
    "desc": "Артикул: GT-S-221. Код 1С: 157763.",
    "images": [
      "assets/images/products/157763.jpg"
    ],
    "specs": []
  },
  {
    "id": "126959",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Граф зі свистком 1.5л GUSTO",
    "price": 838.0,
    "desc": "Артикул: GT-1416-15. Код 1С: 126959.",
    "images": [
      "assets/images/products/126959.jpg"
    ],
    "specs": []
  },
  {
    "id": "126958",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Веселі горохи зі свистком 2л GUSTO",
    "price": 950.0,
    "desc": "Артикул: GT-1415-20. Код 1С: 126958.",
    "images": [
      "assets/images/products/126958.jpg"
    ],
    "specs": []
  },
  {
    "id": "157762",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Силіконова форма для аерогрилю/мультипечі кругла GUSTO, 20.5х4.5см",
    "price": 110.0,
    "desc": "Артикул: GT-S-221. Код 1С: 157762.",
    "images": [
      "assets/images/products/157762.jpg"
    ],
    "specs": []
  },
  {
    "id": "135045",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Грей зі свистком GUSTO, 2.8л",
    "price": 1142.0,
    "desc": "Артикул: GT-1419-28. Код 1С: 135045.",
    "images": [
      "assets/images/products/135045.jpg"
    ],
    "specs": []
  },
  {
    "id": "135048",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Маркіза зі свистком GUSTO, 2.8л",
    "price": 985.0,
    "desc": "Артикул: GT-1422-28. Код 1С: 135048.",
    "images": [
      "assets/images/products/135048.jpg"
    ],
    "specs": []
  },
  {
    "id": "135044",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Сіріус (чорний) зі свистком GUSTO, 2.8л",
    "price": 1544.0,
    "desc": "Артикул: GT-1418-28. Код 1С: 135044.",
    "images": [
      "assets/images/products/135044.jpg"
    ],
    "specs": []
  },
  {
    "id": "126957",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "ЧАЙНИК Геракл зі свистком 2.5л GUSTO",
    "price": 950.0,
    "desc": "Артикул: GT-1414-25. Код 1С: 126957.",
    "images": [
      "assets/images/products/126957.jpg"
    ],
    "specs": []
  },
  {
    "id": "135046",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Кориця зі свистком GUSTO, 2.8л",
    "price": 1338.0,
    "desc": "Артикул: GT-1420-28. Код 1С: 135046.",
    "images": [
      "assets/images/products/135046.jpg"
    ],
    "specs": []
  },
  {
    "id": "135047",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Сіріус (білий) зі свистком GUSTO, 2.8л",
    "price": 1544.0,
    "desc": "Артикул: GT-1421-28. Код 1С: 135047.",
    "images": [
      "assets/images/products/135047.jpg"
    ],
    "specs": []
  },
  {
    "id": "126956",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Ніка зі свистком 3л GUSTO",
    "price": 1342.0,
    "desc": "Артикул: GT-1413-30. Код 1С: 126956.",
    "images": [
      "assets/images/products/126956.jpg"
    ],
    "specs": []
  },
  {
    "id": "126954",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Пірат зі свистком 3л GUSTO",
    "price": 1310.0,
    "desc": "Артикул: GT-1411-30. Код 1С: 126954.",
    "images": [
      "assets/images/products/126954.jpg"
    ],
    "specs": []
  },
  {
    "id": "142736",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Гарсон зі свистком GUSTO, 1.8л",
    "price": 703.0,
    "desc": "Артикул: GT-1425-18. Код 1С: 142736.",
    "images": [
      "assets/images/products/142736.jpg"
    ],
    "specs": []
  },
  {
    "id": "135043",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Шерлок зі свистком GUSTO, 3.0л",
    "price": 1646.0,
    "desc": "Артикул: GT-1417-30. Код 1С: 135043.",
    "images": [
      "assets/images/products/135043.jpg"
    ],
    "specs": []
  },
  {
    "id": "95950",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Лаванда 2,2 л в кор.GUSTO",
    "price": 1592.0,
    "desc": "Артикул: GT-T-522-L. Код 1С: 95950.",
    "images": [
      "assets/images/products/95950.jpg"
    ],
    "specs": []
  },
  {
    "id": "126955",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Мускус зі свистком 3л GUSTO",
    "price": 1369.0,
    "desc": "Артикул: GT-1412-30. Код 1С: 126955.",
    "images": [
      "assets/images/products/126955.jpg"
    ],
    "specs": []
  },
  {
    "id": "95948",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Перчинка 3,3 л в кор. GUSTO",
    "price": 1655.0,
    "desc": "Артикул: GT-T-533-P. Код 1С: 95948.",
    "images": [
      "assets/images/products/95948.jpg"
    ],
    "specs": []
  },
  {
    "id": "136213",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Como GUSTO, 3 чашки (150 мл) (алюм)",
    "price": 614.0,
    "desc": "Артикул: GU-1000-3. Код 1С: 136213.",
    "images": [
      "assets/images/products/136213.jpg"
    ],
    "specs": []
  },
  {
    "id": "136214",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Como GUSTO, 6 чашок (300 мл) (алюм)",
    "price": 841.0,
    "desc": "Артикул: GU-1000-6. Код 1С: 136214.",
    "images": [
      "assets/images/products/136214.jpg"
    ],
    "specs": []
  },
  {
    "id": "136218",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda GUSTO, 9 чашок (450 мл) (алюм)",
    "price": 1137.0,
    "desc": "Артикул: GU-1001-9. Код 1С: 136218.",
    "images": [
      "assets/images/products/136218.jpg"
    ],
    "specs": []
  },
  {
    "id": "136219",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Lugano GUSTO, 3 чашки (150 мл) (алюм)",
    "price": 681.0,
    "desc": "Артикул: GU-1002-3. Код 1С: 136219.",
    "images": [
      "assets/images/products/136219.jpg"
    ],
    "specs": []
  },
  {
    "id": "136217",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda GUSTO, 6 чашок (300 мл) (алюм)",
    "price": 975.0,
    "desc": "Артикул: GU-1001-6. Код 1С: 136217.",
    "images": [
      "assets/images/products/136217.jpg"
    ],
    "specs": []
  },
  {
    "id": "136216",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda GUSTO, 3 чашки (150 мл) (алюм)",
    "price": 663.0,
    "desc": "Артикул: GU-1001-3. Код 1С: 136216.",
    "images": [
      "assets/images/products/136216.jpg"
    ],
    "specs": []
  },
  {
    "id": "136215",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Como GUSTO, 9 чашок (450 мл) (алюм)",
    "price": 965.0,
    "desc": "Артикул: GU-1000-9. Код 1С: 136215.",
    "images": [
      "assets/images/products/136215.jpg"
    ],
    "specs": []
  },
  {
    "id": "136220",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Lugano GUSTO, 6 чашок (300 мл) (алюм)",
    "price": 795.0,
    "desc": "Артикул: GU-1002-6. Код 1С: 136220.",
    "images": [
      "assets/images/products/136220.jpg"
    ],
    "specs": []
  },
  {
    "id": "136221",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Lugano GUSTO, 9 чашок (450 мл) (алюм)",
    "price": 887.0,
    "desc": "Артикул: GU-1002-9. Код 1С: 136221.",
    "images": [
      "assets/images/products/136221.jpg"
    ],
    "specs": []
  },
  {
    "id": "136222",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Vico GUSTO, 4 чашки (200 мл) (сталь)",
    "price": 771.0,
    "desc": "Артикул: GU-1003-4. Код 1С: 136222.",
    "images": [
      "assets/images/products/136222.jpg"
    ],
    "specs": []
  },
  {
    "id": "136223",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Vico GUSTO, 6 чашок (300 мл) (сталь)",
    "price": 873.0,
    "desc": "Артикул: GU-1003-6. Код 1С: 136223.",
    "images": [
      "assets/images/products/136223.jpg"
    ],
    "specs": []
  },
  {
    "id": "136224",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Vico GUSTO, 9 чашок (450 мл) (сталь)",
    "price": 1108.0,
    "desc": "Артикул: GU-1003-9. Код 1С: 136224.",
    "images": [
      "assets/images/products/136224.jpg"
    ],
    "specs": []
  },
  {
    "id": "147810",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda (індукція) GUSTO, 3 чашки",
    "price": 589.0,
    "desc": "Артикул: GU-1004-3. Код 1С: 147810.",
    "images": [],
    "specs": []
  },
  {
    "id": "142734",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Кардинал зі свистком GUSTO, 3л",
    "price": 1054.0,
    "desc": "Артикул: GT-1423-30. Код 1С: 142734.",
    "images": [
      "assets/images/products/142734.jpg"
    ],
    "specs": []
  },
  {
    "id": "147820",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda (індукція) GUSTO, 6 чашок",
    "price": 724.0,
    "desc": "Артикул: GU-1004-6. Код 1С: 147820.",
    "images": [],
    "specs": []
  },
  {
    "id": "147819",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Garda (індукція) GUSTO, 9 чашок",
    "price": 866.0,
    "desc": "Артикул: GU-1004-9. Код 1С: 147819.",
    "images": [],
    "specs": []
  },
  {
    "id": "147815",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Delio GUSTO, 6 чашок",
    "price": 700.0,
    "desc": "Артикул: GU-1006-6. Код 1С: 147815.",
    "images": [
      "assets/images/products/147815.jpg"
    ],
    "specs": []
  },
  {
    "id": "111661",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш SOLO 12x6см, 0,5 л GUSTO",
    "price": 622.0,
    "desc": "Артикул: GT-1203-12 . Код 1С: 111661.",
    "images": [
      "assets/images/products/111661.jpg"
    ],
    "specs": []
  },
  {
    "id": "147811",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Idro GUSTO, 9 чашок",
    "price": 806.0,
    "desc": "Артикул: GU-1007-9. Код 1С: 147811.",
    "images": [
      "assets/images/products/147811.jpg"
    ],
    "specs": []
  },
  {
    "id": "111662",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш SOLO 14x7см, 0,9 л GUSTO",
    "price": 723.0,
    "desc": "Артикул: GT-1203-14 . Код 1С: 111662.",
    "images": [
      "assets/images/products/111662.jpg"
    ],
    "specs": []
  },
  {
    "id": "142735",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник Віконт зі свистком GUSTO, 2.5л",
    "price": 1031.0,
    "desc": "Артикул: GT-1424-25. Код 1С: 142735.",
    "images": [
      "assets/images/products/142735.jpg"
    ],
    "specs": []
  },
  {
    "id": "147814",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Delio GUSTO, 9 чашок",
    "price": 866.0,
    "desc": "Артикул: GU-1006-9. Код 1С: 147814.",
    "images": [
      "assets/images/products/147814.jpg"
    ],
    "specs": []
  },
  {
    "id": "111663",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш SOLO 16x6см, 1,4 л GUSTO",
    "price": 778.0,
    "desc": "Артикул: GT-1203-16 . Код 1С: 111663.",
    "images": [
      "assets/images/products/111663.jpg"
    ],
    "specs": []
  },
  {
    "id": "85171",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo 16см, 1,9л GUSTO",
    "price": 800.0,
    "desc": "Артикул: GT-1500-16. Код 1С: 85171.",
    "images": [
      "assets/images/products/85171.jpg"
    ],
    "specs": []
  },
  {
    "id": "85173",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo 20см, 3,6л GUSTO",
    "price": 1016.0,
    "desc": "Артикул: GT-1500-20. Код 1С: 85173.",
    "images": [
      "assets/images/products/85173.jpg"
    ],
    "specs": []
  },
  {
    "id": "128888",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo 18см, 2,4л GUSTO",
    "price": 874.0,
    "desc": "Артикул: GT-1500-18. Код 1С: 128888.",
    "images": [
      "assets/images/products/128888.jpg"
    ],
    "specs": []
  },
  {
    "id": "85174",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo 22см, 4,7л GUSTO",
    "price": 1178.0,
    "desc": "Артикул: GT-1500-22. Код 1С: 85174.",
    "images": [
      "assets/images/products/85174.jpg"
    ],
    "specs": []
  },
  {
    "id": "85175",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo 24см, 6,1л GUSTO",
    "price": 1352.0,
    "desc": "Артикул: GT-1500-24. Код 1С: 85175.",
    "images": [
      "assets/images/products/85175.jpg"
    ],
    "specs": []
  },
  {
    "id": "147818",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Lazio GUSTO, 6 чашок",
    "price": 806.0,
    "desc": "Артикул: GU-1005-6. Код 1С: 147818.",
    "images": [
      "assets/images/products/147818.jpg"
    ],
    "specs": []
  },
  {
    "id": "127240",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля FORCE, 16см, 1,9 л GUSTO",
    "price": 805.0,
    "desc": "Артикул: GT-1107-16. Код 1С: 127240.",
    "images": [
      "assets/images/products/127240.jpg"
    ],
    "specs": []
  },
  {
    "id": "147817",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Lazio GUSTO, 9 чашок",
    "price": 995.0,
    "desc": "Артикул: GU-1005-9. Код 1С: 147817.",
    "images": [
      "assets/images/products/147817.jpg"
    ],
    "specs": []
  },
  {
    "id": "127241",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля FORCE, 18 см, 2,6 л GUSTO",
    "price": 893.0,
    "desc": "Артикул: GT-1107-18. Код 1С: 127241.",
    "images": [
      "assets/images/products/127241.jpg"
    ],
    "specs": []
  },
  {
    "id": "147816",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Delio GUSTO, 3 чашки",
    "price": 576.0,
    "desc": "Артикул: GU-1006-3. Код 1С: 147816.",
    "images": [
      "assets/images/products/147816.jpg"
    ],
    "specs": []
  },
  {
    "id": "127242",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля FORCE, 20 см, 3,6 л GUSTO",
    "price": 1035.0,
    "desc": "Артикул: GT-1107-20. Код 1С: 127242.",
    "images": [
      "assets/images/products/127242.jpg"
    ],
    "specs": []
  },
  {
    "id": "127243",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля FORCE, 22 см, 4,7 л GUSTO",
    "price": 1186.0,
    "desc": "Артикул: GT-1107-22. Код 1С: 127243.",
    "images": [
      "assets/images/products/127243.jpg"
    ],
    "specs": []
  },
  {
    "id": "127244",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля FORCE, 24 см, 6,1л GUSTO",
    "price": 1367.0,
    "desc": "Артикул: GT-1107-24. Код 1С: 127244.",
    "images": [
      "assets/images/products/127244.jpg"
    ],
    "specs": []
  },
  {
    "id": "77381",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Practico 16 см, 1,9 л GUSTO",
    "price": 940.0,
    "desc": "Артикул: GT-1102-16. Код 1С: 77381.",
    "images": [
      "assets/images/products/77381.jpg"
    ],
    "specs": []
  },
  {
    "id": "147233",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo Matte 20см,3,6л Gusto",
    "price": 1016.0,
    "desc": "Артикул: GT-1501-20. Код 1С: 147233.",
    "images": [
      "assets/images/products/147233.jpg"
    ],
    "specs": []
  },
  {
    "id": "77383",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Practico 20 см, 3,6 л GUSTO",
    "price": 1122.0,
    "desc": "Артикул: GT-1102-20. Код 1С: 77383.",
    "images": [
      "assets/images/products/77383.jpg"
    ],
    "specs": []
  },
  {
    "id": "77382",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Practico 18 см, 2,6 л GUSTO",
    "price": 1027.0,
    "desc": "Артикул: GT-1102-18. Код 1С: 77382.",
    "images": [
      "assets/images/products/77382.jpg"
    ],
    "specs": []
  },
  {
    "id": "77384",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Practico 22 см, 4,7л GUSTO",
    "price": 1251.0,
    "desc": "Артикул: GT-1102-22. Код 1С: 77384.",
    "images": [
      "assets/images/products/77384.jpg"
    ],
    "specs": []
  },
  {
    "id": "147234",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo Matte 22см,4,7л Gusto",
    "price": 1178.0,
    "desc": "Артикул: GT-1501-22. Код 1С: 147234.",
    "images": [
      "assets/images/products/147234.jpg"
    ],
    "specs": []
  },
  {
    "id": "147812",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гейзерна кавоварка Idro GUSTO, 6 чашок",
    "price": 647.0,
    "desc": "Артикул: GU-1007-6. Код 1С: 147812.",
    "images": [
      "assets/images/products/147812.jpg"
    ],
    "specs": []
  },
  {
    "id": "147231",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo Matte  16см,1,9л Gusto",
    "price": 800.0,
    "desc": "Артикул: GT-1501-16. Код 1С: 147231.",
    "images": [
      "assets/images/products/147231.jpg"
    ],
    "specs": []
  },
  {
    "id": "147235",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo Matte 24см, 6,1л Gusto",
    "price": 1352.0,
    "desc": "Артикул: GT-1501-24. Код 1С: 147235.",
    "images": [
      "assets/images/products/147235.jpg"
    ],
    "specs": []
  },
  {
    "id": "147232",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Nuovo Matte 18см,2,4л Gusto",
    "price": 874.0,
    "desc": "Артикул: GT-1501-18. Код 1С: 147232.",
    "images": [
      "assets/images/products/147232.jpg"
    ],
    "specs": []
  },
  {
    "id": "77385",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Practico 24 см, 6,1 л GUSTO",
    "price": 1424.0,
    "desc": "Артикул: GT-1102-24. Код 1С: 77385.",
    "images": [
      "assets/images/products/77385.jpg"
    ],
    "specs": []
  },
  {
    "id": "90852",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля LEVEL 16 см, 1,9 л GUSTO",
    "price": 897.0,
    "desc": "Артикул: GT-1103-16. Код 1С: 90852.",
    "images": [
      "assets/images/products/90852.jpg"
    ],
    "specs": []
  },
  {
    "id": "90853",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля LEVEL 18 см, 2,6 л GUSTO",
    "price": 992.0,
    "desc": "Артикул: GT-1103-18. Код 1С: 90853.",
    "images": [
      "assets/images/products/90853.jpg"
    ],
    "specs": []
  },
  {
    "id": "90854",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля LEVEL 20 см, 3,6 л GUSTO",
    "price": 1100.0,
    "desc": "Артикул: GT-1103-20. Код 1С: 90854.",
    "images": [
      "assets/images/products/90854.jpg"
    ],
    "specs": []
  },
  {
    "id": "90856",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля LEVEL 24 см, 6,1 л GUSTO",
    "price": 1395.0,
    "desc": "Артикул: GT-1103-24. Код 1С: 90856.",
    "images": [
      "assets/images/products/90856.jpg"
    ],
    "specs": []
  },
  {
    "id": "127025",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BELL 16 см, 1.9 л PEPPER",
    "price": 1074.0,
    "desc": "Артикул: PR-1112-16. Код 1С: 127025.",
    "images": [
      "assets/images/products/127025.jpg"
    ],
    "specs": []
  },
  {
    "id": "90855",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля LEVEL 22 см, 4,7 л GUSTO",
    "price": 1251.0,
    "desc": "Артикул: GT-1103-22. Код 1С: 90855.",
    "images": [
      "assets/images/products/90855.jpg"
    ],
    "specs": []
  },
  {
    "id": "127022",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BELL 22 см, 4.7 л PEPPER",
    "price": 1568.0,
    "desc": "Артикул: PR-1112-22. Код 1С: 127022.",
    "images": [
      "assets/images/products/127022.jpg"
    ],
    "specs": []
  },
  {
    "id": "127024",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BELL 18 см, 2.6 л PEPPER",
    "price": 1212.0,
    "desc": "Артикул: PR-1112-18. Код 1С: 127024.",
    "images": [
      "assets/images/products/127024.jpg"
    ],
    "specs": []
  },
  {
    "id": "127023",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BELL 20 см, 3,6 л PEPPER",
    "price": 1365.0,
    "desc": "Артикул: PR-1112-20. Код 1С: 127023.",
    "images": [
      "assets/images/products/127023.jpg"
    ],
    "specs": []
  },
  {
    "id": "127021",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BELL 24 см, 6.1 л PEPPER",
    "price": 1777.0,
    "desc": "Артикул: PR-1112-24. Код 1С: 127021.",
    "images": [
      "assets/images/products/127021.jpg"
    ],
    "specs": []
  },
  {
    "id": "127017",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BEGONIA 18 см, 2.4 л PEPPER",
    "price": 671.0,
    "desc": "Артикул: PR-1111-18. Код 1С: 127017.",
    "images": [
      "assets/images/products/127017.jpg"
    ],
    "specs": []
  },
  {
    "id": "127016",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BEGONIA 16 см, 1.7 л PEPPER",
    "price": 960.0,
    "desc": "Артикул: PR-1111-16. Код 1С: 127016.",
    "images": [
      "assets/images/products/127016.jpg"
    ],
    "specs": []
  },
  {
    "id": "127018",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BEGONIA 20 см, 3,3 л PEPPER",
    "price": 779.0,
    "desc": "Артикул: PR-1111-20. Код 1С: 127018.",
    "images": [
      "assets/images/products/127018.jpg"
    ],
    "specs": []
  },
  {
    "id": "127019",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BEGONIA 22 см, 4.4 л PEPPER",
    "price": 1434.0,
    "desc": "Артикул: PR-1111-22. Код 1С: 127019.",
    "images": [
      "assets/images/products/127019.jpg"
    ],
    "specs": []
  },
  {
    "id": "127020",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля BEGONIA 24 см, 5.8 л PEPPER",
    "price": 1618.0,
    "desc": "Артикул: PR-1111-24. Код 1С: 127020.",
    "images": [
      "assets/images/products/127020.jpg"
    ],
    "specs": []
  },
  {
    "id": "127245",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля SESAME 16х9,5 см, 1,9л PEPPER",
    "price": 923.0,
    "desc": "Артикул: PR-1202-16. Код 1С: 127245.",
    "images": [
      "assets/images/products/127245.jpg"
    ],
    "specs": []
  },
  {
    "id": "127246",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля SESAME 18х10,5 см, 2,6л PEPPER",
    "price": 1043.0,
    "desc": "Артикул: PR-1202-18. Код 1С: 127246.",
    "images": [
      "assets/images/products/127246.jpg"
    ],
    "specs": []
  },
  {
    "id": "127247",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля SESAME 20x11,5 см, 3,6л PEPPER",
    "price": 1171.0,
    "desc": "Артикул: PR-1202-20. Код 1С: 127247.",
    "images": [
      "assets/images/products/127247.jpg"
    ],
    "specs": []
  },
  {
    "id": "127249",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля SESAME 24x13.5 см, 6,1л PEPPER",
    "price": 1528.0,
    "desc": "Артикул: PR-1202-24. Код 1С: 127249.",
    "images": [
      "assets/images/products/127249.jpg"
    ],
    "specs": []
  },
  {
    "id": "127248",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля SESAME 22x12.5 см, 4,7л PEPPER",
    "price": 1348.0,
    "desc": "Артикул: PR-1202-22. Код 1С: 127248.",
    "images": [
      "assets/images/products/127248.jpg"
    ],
    "specs": []
  },
  {
    "id": "127251",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля CROCUS 18х10,5 см, 2,4л PEPPER",
    "price": 1221.0,
    "desc": "Артикул: PR-2404-18. Код 1С: 127251.",
    "images": [
      "assets/images/products/127251.jpg"
    ],
    "specs": []
  },
  {
    "id": "127250",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля CROCUS 16х9,5 см, 1,7л PEPPER",
    "price": 1089.0,
    "desc": "Артикул: PR-2404-16. Код 1С: 127250.",
    "images": [
      "assets/images/products/127250.jpg"
    ],
    "specs": []
  },
  {
    "id": "127252",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля CROCUS 20x11,5 см, 3,3л PEPPER",
    "price": 1361.0,
    "desc": "Артикул: PR-2404-20. Код 1С: 127252.",
    "images": [
      "assets/images/products/127252.jpg"
    ],
    "specs": []
  },
  {
    "id": "127253",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля CROCUS 22x12.5 см, 4,4л PEPPER",
    "price": 1509.0,
    "desc": "Артикул: PR-2404-22. Код 1С: 127253.",
    "images": [
      "assets/images/products/127253.jpg"
    ],
    "specs": []
  },
  {
    "id": "126777",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду SOLO (3 каструлі) 16см/1,9л, 18см/2,6л, 22см/4,7л GUSTO",
    "price": 2328.0,
    "desc": "Артикул: GT-1300-06/3. Код 1С: 126777.",
    "images": [
      "assets/images/products/126777.jpg"
    ],
    "specs": []
  },
  {
    "id": "126778",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір посуду NUOVO (2 каструлі: 18см/2,4л, 22см/4,4л, ківш 16см/1л , чайник 2л) GUSTO",
    "price": 3363.0,
    "desc": "Артикул: GT-1304-07. Код 1С: 126778.",
    "images": [
      "assets/images/products/126778.jpg"
    ],
    "specs": []
  },
  {
    "id": "77386",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду PREMIO (3 каструлі) 16см/1,7л, 18см/2,4л, 22см/4,4л GUSTO",
    "price": 3040.0,
    "desc": "Артикул: GT-1303-06/1. Код 1С: 77386.",
    "images": [
      "assets/images/products/77386.jpg"
    ],
    "specs": []
  },
  {
    "id": "87693",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-P. Код 1С: 87693.",
    "images": [
      "assets/images/products/87693.jpg"
    ],
    "specs": []
  },
  {
    "id": "87695",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-P. Код 1С: 87695.",
    "images": [
      "assets/images/products/87695.jpg"
    ],
    "specs": []
  },
  {
    "id": "87696",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-P. Код 1С: 87696.",
    "images": [
      "assets/images/products/87696.jpg"
    ],
    "specs": []
  },
  {
    "id": "87697",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": false,
    "name": "Каструля Перчинка 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-P. Код 1С: 87697.",
    "images": [
      "assets/images/products/87697.jpg"
    ],
    "specs": []
  },
  {
    "id": "87698",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-P. Код 1С: 87698.",
    "images": [
      "assets/images/products/87698.jpg"
    ],
    "specs": []
  },
  {
    "id": "117491",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка біла 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-WP. Код 1С: 117491.",
    "images": [
      "assets/images/products/117491.jpg"
    ],
    "specs": []
  },
  {
    "id": "90316",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Перчинка 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-P. Код 1С: 90316.",
    "images": [
      "assets/images/products/90316.jpg"
    ],
    "specs": []
  },
  {
    "id": "117492",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка біла 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-WP. Код 1С: 117492.",
    "images": [
      "assets/images/products/117492.jpg"
    ],
    "specs": []
  },
  {
    "id": "117493",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка біла 20 см, 4 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-WP. Код 1С: 117493.",
    "images": [
      "assets/images/products/117493.jpg"
    ],
    "specs": []
  },
  {
    "id": "117496",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (чорна) 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-LCB. Код 1С: 117496.",
    "images": [
      "assets/images/products/117496.jpg"
    ],
    "specs": []
  },
  {
    "id": "126779",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду GRAND (3 каструлі) 24см/8л, 26см/10л, 28см/12л GUSTO",
    "price": 5271.0,
    "desc": "Артикул: GT-1305-06. Код 1С: 126779.",
    "images": [
      "assets/images/products/126779.jpg"
    ],
    "specs": []
  },
  {
    "id": "126780",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду GRAND (2 каструлі) 30см/14л, 32см/16л GUSTO",
    "price": 5821.0,
    "desc": "Артикул: GT-1305-04. Код 1С: 126780.",
    "images": [
      "assets/images/products/126780.jpg"
    ],
    "specs": []
  },
  {
    "id": "117495",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка біла 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-WP. Код 1С: 117495.",
    "images": [
      "assets/images/products/117495.jpg"
    ],
    "specs": []
  },
  {
    "id": "117494",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Перчинка біла 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-WP. Код 1С: 117494.",
    "images": [
      "assets/images/products/117494.jpg"
    ],
    "specs": []
  },
  {
    "id": "117884",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Перчинка біла 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-WP. Код 1С: 117884.",
    "images": [
      "assets/images/products/117884.jpg"
    ],
    "specs": []
  },
  {
    "id": "117498",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (чорна) 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-LCB. Код 1С: 117498.",
    "images": [
      "assets/images/products/117498.jpg"
    ],
    "specs": []
  },
  {
    "id": "117497",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (чорна) 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-LCB. Код 1С: 117497.",
    "images": [
      "assets/images/products/117497.jpg"
    ],
    "specs": []
  },
  {
    "id": "117499",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (чорна) 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-LCB. Код 1С: 117499.",
    "images": [
      "assets/images/products/117499.jpg"
    ],
    "specs": []
  },
  {
    "id": "117658",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (біла) 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-LCW. Код 1С: 117658.",
    "images": [
      "assets/images/products/117658.jpg"
    ],
    "specs": []
  },
  {
    "id": "117660",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (біла) 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-LCW. Код 1С: 117660.",
    "images": [
      "assets/images/products/117660.jpg"
    ],
    "specs": []
  },
  {
    "id": "117666",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (біла) 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-LCW. Код 1С: 117666.",
    "images": [
      "assets/images/products/117666.jpg"
    ],
    "specs": []
  },
  {
    "id": "117664",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (біла) 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-LCW. Код 1С: 117664.",
    "images": [
      "assets/images/products/117664.jpg"
    ],
    "specs": []
  },
  {
    "id": "117662",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (біла) 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-LCW. Код 1С: 117662.",
    "images": [
      "assets/images/products/117662.jpg"
    ],
    "specs": []
  },
  {
    "id": "117889",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Давайте готувати (чорна) 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-LCB. Код 1С: 117889.",
    "images": [
      "assets/images/products/117889.jpg"
    ],
    "specs": []
  },
  {
    "id": "117500",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Давайте готувати (чорна) 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-LCB. Код 1С: 117500.",
    "images": [
      "assets/images/products/117500.jpg"
    ],
    "specs": []
  },
  {
    "id": "117622",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Давайте готувати (біла) 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-LCW. Код 1С: 117622.",
    "images": [
      "assets/images/products/117622.jpg"
    ],
    "specs": []
  },
  {
    "id": "87705",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Прянощі 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-S. Код 1С: 87705.",
    "images": [
      "assets/images/products/87705.jpg"
    ],
    "specs": []
  },
  {
    "id": "87706",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Прянощі 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-S. Код 1С: 87706.",
    "images": [
      "assets/images/products/87706.jpg"
    ],
    "specs": []
  },
  {
    "id": "87708",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Прянощі 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-S. Код 1С: 87708.",
    "images": [
      "assets/images/products/87708.jpg"
    ],
    "specs": []
  },
  {
    "id": "87709",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Прянощі 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-S. Код 1С: 87709.",
    "images": [
      "assets/images/products/87709.jpg"
    ],
    "specs": []
  },
  {
    "id": "87707",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Прянощі 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-S. Код 1С: 87707.",
    "images": [
      "assets/images/products/87707.jpg"
    ],
    "specs": []
  },
  {
    "id": "90318",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Прянощі 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-S. Код 1С: 90318.",
    "images": [
      "assets/images/products/90318.jpg"
    ],
    "specs": []
  },
  {
    "id": "87712",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Квітковий сад 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-FG. Код 1С: 87712.",
    "images": [
      "assets/images/products/87712.jpg"
    ],
    "specs": []
  },
  {
    "id": "87711",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Квітковий сад 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-FG. Код 1С: 87711.",
    "images": [
      "assets/images/products/87711.jpg"
    ],
    "specs": []
  },
  {
    "id": "87710",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Квітковий сад 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-FG. Код 1С: 87710.",
    "images": [
      "assets/images/products/87710.jpg"
    ],
    "specs": []
  },
  {
    "id": "87713",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Квітковий сад 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-FG. Код 1С: 87713.",
    "images": [
      "assets/images/products/87713.jpg"
    ],
    "specs": []
  },
  {
    "id": "87714",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Квітковий сад 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-FG. Код 1С: 87714.",
    "images": [
      "assets/images/products/87714.jpg"
    ],
    "specs": []
  },
  {
    "id": "90321",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Квітковий сад 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-FG. Код 1С: 90321.",
    "images": [
      "assets/images/products/90321.jpg"
    ],
    "specs": []
  },
  {
    "id": "96029",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Лаванда 18 см, 3,1 л GUSTO",
    "price": 855.0,
    "desc": "Артикул: GT-T-118-L. Код 1С: 96029.",
    "images": [
      "assets/images/products/96029.jpg"
    ],
    "specs": []
  },
  {
    "id": "96030",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Лаванда 20 см, 4,0 л GUSTO",
    "price": 967.0,
    "desc": "Артикул: GT-T-120-L. Код 1С: 96030.",
    "images": [
      "assets/images/products/96030.jpg"
    ],
    "specs": []
  },
  {
    "id": "96031",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Лаванда 22 см, 5,1 л GUSTO",
    "price": 1078.0,
    "desc": "Артикул: GT-T-122-L. Код 1С: 96031.",
    "images": [
      "assets/images/products/96031.jpg"
    ],
    "specs": []
  },
  {
    "id": "96028",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Лаванда 16 см, 2,1 л GUSTO",
    "price": 729.0,
    "desc": "Артикул: GT-T-116-L. Код 1С: 96028.",
    "images": [
      "assets/images/products/96028.jpg"
    ],
    "specs": []
  },
  {
    "id": "95951",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір каструль Лаванда 2,1л/3,1л/4л GUSTO",
    "price": 2863.0,
    "desc": "Артикул: GT-T-3-L. Код 1С: 95951.",
    "images": [
      "assets/images/products/95951.jpg"
    ],
    "specs": []
  },
  {
    "id": "96061",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Мережка Premium 20 см, 4,0 л GUSTO",
    "price": 1620.0,
    "desc": "Артикул: GT-T-220-С. Код 1С: 96061.",
    "images": [
      "assets/images/products/96061.jpg"
    ],
    "specs": []
  },
  {
    "id": "96060",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Мережка Premium 18 см, 3,1 л GUSTO",
    "price": 1452.0,
    "desc": "Артикул: GT-T-218-С. Код 1С: 96060.",
    "images": [
      "assets/images/products/96060.jpg"
    ],
    "specs": []
  },
  {
    "id": "96059",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Мережка Premium 16 см, 2,1 л GUSTO",
    "price": 1295.0,
    "desc": "Артикул: GT-T-216-С. Код 1С: 96059.",
    "images": [
      "assets/images/products/96059.jpg"
    ],
    "specs": []
  },
  {
    "id": "96032",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Лаванда 24 см, 5,7 л GUSTO",
    "price": 1193.0,
    "desc": "Артикул: GT-T-124-L. Код 1С: 96032.",
    "images": [
      "assets/images/products/96032.jpg"
    ],
    "specs": []
  },
  {
    "id": "96062",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Мережка Premium 22 см, 5,1 л GUSTO",
    "price": 1788.0,
    "desc": "Артикул: GT-T-222-С. Код 1С: 96062.",
    "images": [
      "assets/images/products/96062.jpg"
    ],
    "specs": []
  },
  {
    "id": "96063",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Мережка Premium 24 см, 5,7 л GUSTO",
    "price": 1956.0,
    "desc": "Артикул: GT-T-224-С. Код 1С: 96063.",
    "images": [
      "assets/images/products/96063.jpg"
    ],
    "specs": []
  },
  {
    "id": "96318",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Місячне сяйво Premium 18 см, 3,1 л GUSTO",
    "price": 1452.0,
    "desc": "Артикул: GT-T-218-М. Код 1С: 96318.",
    "images": [
      "assets/images/products/96318.jpg"
    ],
    "specs": []
  },
  {
    "id": "96319",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Місячне сяйво Premium 20 см, 4,0 л GUSTO",
    "price": 1620.0,
    "desc": "Артикул: GT-T-220-М. Код 1С: 96319.",
    "images": [
      "assets/images/products/96319.jpg"
    ],
    "specs": []
  },
  {
    "id": "96317",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Місячне сяйво Premium 16 см, 2,1 л GUSTO",
    "price": 1295.0,
    "desc": "Артикул: GT-T-216-М. Код 1С: 96317.",
    "images": [
      "assets/images/products/96317.jpg"
    ],
    "specs": []
  },
  {
    "id": "96321",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Місячне сяйво Premium 24 см, 5,7 л GUSTO",
    "price": 1956.0,
    "desc": "Артикул: GT-T-224-М. Код 1С: 96321.",
    "images": [
      "assets/images/products/96321.jpg"
    ],
    "specs": []
  },
  {
    "id": "96320",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Місячне сяйво Premium 22 см, 5,1 л GUSTO",
    "price": 1788.0,
    "desc": "Артикул: GT-T-222-М. Код 1С: 96320.",
    "images": [
      "assets/images/products/96320.jpg"
    ],
    "specs": []
  },
  {
    "id": "117682",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Срібні етюди 20 см, 4,0 л GUSTO",
    "price": 1620.0,
    "desc": "Артикул: GT-T-120-SE. Код 1С: 117682.",
    "images": [
      "assets/images/products/117682.jpg"
    ],
    "specs": []
  },
  {
    "id": "117678",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Срібні етюди 16 см, 2,1 л GUSTO",
    "price": 1295.0,
    "desc": "Артикул: GT-T-116-SE. Код 1С: 117678.",
    "images": [
      "assets/images/products/117678.jpg"
    ],
    "specs": []
  },
  {
    "id": "117680",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Срібні етюди 18 см, 3,1 л GUSTO",
    "price": 1452.0,
    "desc": "Артикул: GT-T-118-SE. Код 1С: 117680.",
    "images": [
      "assets/images/products/117680.jpg"
    ],
    "specs": []
  },
  {
    "id": "117688",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Яскраві Лайми 16 см, 2,1 л GUSTO",
    "price": 1295.0,
    "desc": "Артикул: GT-T-116-LI. Код 1С: 117688.",
    "images": [
      "assets/images/products/117688.jpg"
    ],
    "specs": []
  },
  {
    "id": "117690",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Яскраві Лайми 18 см, 3,1 л GUSTO",
    "price": 1452.0,
    "desc": "Артикул: GT-T-118-LI. Код 1С: 117690.",
    "images": [
      "assets/images/products/117690.jpg"
    ],
    "specs": []
  },
  {
    "id": "117686",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Срібні етюди 24 см, 5,7 л GUSTO",
    "price": 1956.0,
    "desc": "Артикул: GT-T-124-SE. Код 1С: 117686.",
    "images": [
      "assets/images/products/117686.jpg"
    ],
    "specs": []
  },
  {
    "id": "117692",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Яскраві Лайми 20 см, 4,0 л GUSTO",
    "price": 1620.0,
    "desc": "Артикул: GT-T-120-LI. Код 1С: 117692.",
    "images": [
      "assets/images/products/117692.jpg"
    ],
    "specs": []
  },
  {
    "id": "117684",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Срібні етюди 22 см, 5,1 л GUSTO",
    "price": 1788.0,
    "desc": "Артикул: GT-T-122-SE. Код 1С: 117684.",
    "images": [
      "assets/images/products/117684.jpg"
    ],
    "specs": []
  },
  {
    "id": "121716",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір алюмінієвих каструль 5шт (3,5л/4,5л/6л/8л/10л) GUSTO",
    "price": 3786.0,
    "desc": "Артикул: GT-1600-05. Код 1С: 121716.",
    "images": [
      "assets/images/products/121716.jpg"
    ],
    "specs": []
  },
  {
    "id": "93993",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір алюмінієвих каструль 4 шт (2,5л/3,5л/4,5л/6л)",
    "price": 2791.0,
    "desc": "Артикул: GT-1600-04 . Код 1С: 93993.",
    "images": [
      "assets/images/products/93993.jpg"
    ],
    "specs": []
  },
  {
    "id": "117694",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Яскраві Лайми 22 см, 5,1 л GUSTO",
    "price": 1788.0,
    "desc": "Артикул: GT-T-122-LI. Код 1С: 117694.",
    "images": [
      "assets/images/products/117694.jpg"
    ],
    "specs": []
  },
  {
    "id": "121714",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір алюмінієвих каструль 8шт (2,5л/3,5л/4,5л/6л/8л/10л/15л/20л) GUSTO",
    "price": 8245.0,
    "desc": "Артикул: GT-1600-08. Код 1С: 121714.",
    "images": [
      "assets/images/products/121714.jpg"
    ],
    "specs": []
  },
  {
    "id": "127263",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз алюмінієвий 50×15см 22л GUSTO",
    "price": 1248.0,
    "desc": "Артикул: GT-1700-50. Код 1С: 127263.",
    "images": [
      "assets/images/products/127263.jpg"
    ],
    "specs": []
  },
  {
    "id": "127261",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз алюмінієвий 45×14см 18л GUSTO",
    "price": 1028.0,
    "desc": "Артикул: GT-1700-45. Код 1С: 127261.",
    "images": [
      "assets/images/products/127261.jpg"
    ],
    "specs": []
  },
  {
    "id": "127259",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз алюмінієвий 40×13см 13л GUSTO",
    "price": 867.0,
    "desc": "Артикул: GT-1700-40. Код 1С: 127259.",
    "images": [
      "assets/images/products/127259.jpg"
    ],
    "specs": []
  },
  {
    "id": "128571",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф СІРА перлина GUSTO 20,3см",
    "price": 292.0,
    "desc": "Артикул: GT-4003-1. Код 1С: 128571.",
    "images": [
      "assets/images/products/128571.jpg"
    ],
    "specs": []
  },
  {
    "id": "127257",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз алюмінієвий 32×10см 6л GUSTO",
    "price": 516.0,
    "desc": "Артикул: GT-1700-32. Код 1С: 127257.",
    "images": [
      "assets/images/products/127257.jpg"
    ],
    "specs": []
  },
  {
    "id": "128569",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса СІРА перлина GUSTO 20,3см",
    "price": 279.0,
    "desc": "Артикул: GT-4003-2. Код 1С: 128569.",
    "images": [
      "assets/images/products/128569.jpg"
    ],
    "specs": []
  },
  {
    "id": "128570",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба СІРА перлина GUSTO 21,5см",
    "price": 279.0,
    "desc": "Артикул: GT-4003-3. Код 1С: 128570.",
    "images": [
      "assets/images/products/128570.jpg"
    ],
    "specs": []
  },
  {
    "id": "128567",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний СІРА перлина GUSTO 12,7см",
    "price": 186.0,
    "desc": "Артикул: GT-4003-4. Код 1С: 128567.",
    "images": [
      "assets/images/products/128567.jpg"
    ],
    "specs": []
  },
  {
    "id": "117696",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Каструля Яскраві Лайми 24 см, 5,7 л GUSTO",
    "price": 1956.0,
    "desc": "Артикул: GT-T-124-LI. Код 1С: 117696.",
    "images": [
      "assets/images/products/117696.jpg"
    ],
    "specs": []
  },
  {
    "id": "128566",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів СІРА перлина GUSTO 8,8см",
    "price": 173.0,
    "desc": "Артикул: GT-4003-5. Код 1С: 128566.",
    "images": [
      "assets/images/products/128566.jpg"
    ],
    "specs": []
  },
  {
    "id": "128572",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф БІЛА перлина GUSTO 20,3см",
    "price": 254.0,
    "desc": "Артикул: GT-4004-1. Код 1С: 128572.",
    "images": [
      "assets/images/products/128572.jpg"
    ],
    "specs": []
  },
  {
    "id": "128574",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний БІЛА перлина GUSTO 12см",
    "price": 161.0,
    "desc": "Артикул: GT-4004-4. Код 1С: 128574.",
    "images": [
      "assets/images/products/128574.jpg"
    ],
    "specs": []
  },
  {
    "id": "128575",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів БІЛА перлина GUSTO 8,8см",
    "price": 144.0,
    "desc": "Артикул: GT-4004-5. Код 1С: 128575.",
    "images": [
      "assets/images/products/128575.jpg"
    ],
    "specs": []
  },
  {
    "id": "128573",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку БІЛА перлина GUSTO 17,7см",
    "price": 258.0,
    "desc": "Артикул: GT-4004-6. Код 1С: 128573.",
    "images": [
      "assets/images/products/128573.jpg"
    ],
    "specs": []
  },
  {
    "id": "128568",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку СІРА перлина GUSTO 17,7см",
    "price": 292.0,
    "desc": "Артикул: GT-4003-6. Код 1С: 128568.",
    "images": [
      "assets/images/products/128568.jpg"
    ],
    "specs": []
  },
  {
    "id": "128576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф ЧОРНА перлина GUSTO 20,3см",
    "price": 283.0,
    "desc": "Артикул: GT-4005-1. Код 1С: 128576.",
    "images": [
      "assets/images/products/128576.jpg"
    ],
    "specs": []
  },
  {
    "id": "128578",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса ЧОРНА перлина GUSTO 20,3см",
    "price": 271.0,
    "desc": "Артикул: GT-4005-2. Код 1С: 128578.",
    "images": [
      "assets/images/products/128578.jpg"
    ],
    "specs": []
  },
  {
    "id": "128580",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний ЧОРНА перлина GUSTO 12,7см",
    "price": 178.0,
    "desc": "Артикул: GT-4005-4. Код 1С: 128580.",
    "images": [
      "assets/images/products/128580.jpg"
    ],
    "specs": []
  },
  {
    "id": "128577",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку ЧОРНА перлина GUSTO 17,7см",
    "price": 288.0,
    "desc": "Артикул: GT-4005-6. Код 1С: 128577.",
    "images": [
      "assets/images/products/128577.jpg"
    ],
    "specs": []
  },
  {
    "id": "100165",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф Classic 20,3 см GUSTO",
    "price": 356.0,
    "desc": "Артикул: GT-4001-1. Код 1С: 100165.",
    "images": [
      "assets/images/products/100165.jpg"
    ],
    "specs": []
  },
  {
    "id": "128581",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів ЧОРНА перлина GUSTO 8,8см",
    "price": 169.0,
    "desc": "Артикул: GT-4005-5. Код 1С: 128581.",
    "images": [
      "assets/images/products/128581.jpg"
    ],
    "specs": []
  },
  {
    "id": "128579",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба ЧОРНА перлина GUSTO 20,3см",
    "price": 271.0,
    "desc": "Артикул: GT-4005-3. Код 1С: 128579.",
    "images": [
      "assets/images/products/128579.jpg"
    ],
    "specs": []
  },
  {
    "id": "128565",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів СІРА перлина GUSTO 5 пр",
    "price": 1336.0,
    "desc": "Артикул: GT-4103-5. Код 1С: 128565.",
    "images": [
      "assets/images/products/128565.jpg"
    ],
    "specs": []
  },
  {
    "id": "100166",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба Classic 20,3 см GUSTO",
    "price": 320.0,
    "desc": "Артикул: GT-4001-3. Код 1С: 100166.",
    "images": [
      "assets/images/products/100166.jpg"
    ],
    "specs": []
  },
  {
    "id": "100167",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса Classic 20,3 см GUSTO",
    "price": 320.0,
    "desc": "Артикул: GT-4001-2. Код 1С: 100167.",
    "images": [
      "assets/images/products/100167.jpg"
    ],
    "specs": []
  },
  {
    "id": "100168",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний Classic 11,4 см GUSTO",
    "price": 213.0,
    "desc": "Артикул: GT-4001-4. Код 1С: 100168.",
    "images": [
      "assets/images/products/100168.jpg"
    ],
    "specs": []
  },
  {
    "id": "149069",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса Blade GUSTO 20,3см",
    "price": 561.0,
    "desc": "Артикул: GT-4006-2. Код 1С: 149069.",
    "images": [
      "assets/images/products/149069.jpg"
    ],
    "specs": []
  },
  {
    "id": "121985",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів Classic 6 пр GUSTO",
    "price": 2752.0,
    "desc": "Артикул: GT-4103. Код 1С: 121985.",
    "images": [
      "assets/images/products/121985.jpg"
    ],
    "specs": []
  },
  {
    "id": "149071",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний Blade GUSTO 12,2см",
    "price": 379.0,
    "desc": "Артикул: GT-4006-4. Код 1С: 149071.",
    "images": [
      "assets/images/products/149071.jpg"
    ],
    "specs": []
  },
  {
    "id": "149070",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку Blade GUSTO 17,7см",
    "price": 599.0,
    "desc": "Артикул: GT-4006-6. Код 1С: 149070.",
    "images": [
      "assets/images/products/149070.jpg"
    ],
    "specs": []
  },
  {
    "id": "100143",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів Classic 8 пр GUSTO",
    "price": 1898.0,
    "desc": "Артикул: GT-4101/8. Код 1С: 100143.",
    "images": [
      "assets/images/products/100143.jpg"
    ],
    "specs": []
  },
  {
    "id": "149072",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів Blade GUSTO 9,0см",
    "price": 373.0,
    "desc": "Артикул: GT-4006-5. Код 1С: 149072.",
    "images": [
      "assets/images/products/149072.jpg"
    ],
    "specs": []
  },
  {
    "id": "100178",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф METAL 20,3 см PEPPER",
    "price": 464.0,
    "desc": "Артикул: PR-4003-1. Код 1С: 100178.",
    "images": [
      "assets/images/products/100178.jpg"
    ],
    "specs": []
  },
  {
    "id": "100179",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса METAL 20,3 см PEPPER",
    "price": 433.0,
    "desc": "Артикул: PR-4003-2. Код 1С: 100179.",
    "images": [
      "assets/images/products/100179.jpg"
    ],
    "specs": []
  },
  {
    "id": "100180",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба METAL 20,3 см PEPPER",
    "price": 433.0,
    "desc": "Артикул: PR-4003-3. Код 1С: 100180.",
    "images": [
      "assets/images/products/100180.jpg"
    ],
    "specs": []
  },
  {
    "id": "100181",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний METAL PEPPER 11,4 см",
    "price": 308.0,
    "desc": "Артикул: PR-4003-4. Код 1С: 100181.",
    "images": [
      "assets/images/products/100181.jpg"
    ],
    "specs": []
  },
  {
    "id": "149068",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф Blade GUSTO 20,3см",
    "price": 599.0,
    "desc": "Артикул: GT-4006-1 . Код 1С: 149068.",
    "images": [
      "assets/images/products/149068.jpg"
    ],
    "specs": []
  },
  {
    "id": "100182",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів METAL PEPPER 8,8 см",
    "price": 303.0,
    "desc": "Артикул: PR-4003-5. Код 1С: 100182.",
    "images": [
      "assets/images/products/100182.jpg"
    ],
    "specs": []
  },
  {
    "id": "121991",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку METAL PEPPER 13см",
    "price": 359.0,
    "desc": "Артикул: PR-4003-6. Код 1С: 121991.",
    "images": [
      "assets/images/products/121991.jpg"
    ],
    "specs": []
  },
  {
    "id": "100169",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів Classic 8,8 см GUSTO",
    "price": 211.0,
    "desc": "Артикул: GT-4001-5. Код 1С: 100169.",
    "images": [
      "assets/images/products/100169.jpg"
    ],
    "specs": []
  },
  {
    "id": "121993",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для сиру METAL PEPPER 13см",
    "price": 329.0,
    "desc": "Артикул: PR-4003-7. Код 1С: 121993.",
    "images": [
      "assets/images/products/121993.jpg"
    ],
    "specs": []
  },
  {
    "id": "121995",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів METAL BLOCK PEPPER 6 пр",
    "price": 2747.0,
    "desc": "Артикул: PR-4104. Код 1С: 121995.",
    "images": [
      "assets/images/products/121995.jpg"
    ],
    "specs": []
  },
  {
    "id": "100173",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса WOOD 20,3 см PEPPER",
    "price": 693.0,
    "desc": "Артикул: PR-4002-2. Код 1С: 100173.",
    "images": [
      "assets/images/products/100173.jpg"
    ],
    "specs": []
  },
  {
    "id": "100172",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф WOOD 20,3 см PEPPER",
    "price": 767.0,
    "desc": "Артикул: PR-4002-1. Код 1С: 100172.",
    "images": [
      "assets/images/products/100172.jpg"
    ],
    "specs": []
  },
  {
    "id": "100174",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба WOOD 20,3 см PEPPER",
    "price": 693.0,
    "desc": "Артикул: PR-4002-3. Код 1С: 100174.",
    "images": [
      "assets/images/products/100174.jpg"
    ],
    "specs": []
  },
  {
    "id": "100175",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний WOOD 12,7 см PEPPER",
    "price": 538.0,
    "desc": "Артикул: PR-4002-4. Код 1С: 100175.",
    "images": [
      "assets/images/products/100175.jpg"
    ],
    "specs": []
  },
  {
    "id": "100177",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів METAL 6 пр PEPPER",
    "price": 2453.0,
    "desc": "Артикул: PR-4103/6. Код 1С: 100177.",
    "images": [
      "assets/images/products/100177.jpg"
    ],
    "specs": []
  },
  {
    "id": "100176",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів WOOD 7,6 см PEPPER",
    "price": 520.0,
    "desc": "Артикул: PR-4002-5. Код 1С: 100176.",
    "images": [
      "assets/images/products/100176.jpg"
    ],
    "specs": []
  },
  {
    "id": "101633",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф LABRIS 20,3 см PEPPER",
    "price": 761.0,
    "desc": "Артикул: PR-4004-1. Код 1С: 101633.",
    "images": [
      "assets/images/products/101633.jpg"
    ],
    "specs": []
  },
  {
    "id": "101634",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса LABRIS 20,3 см PEPPER",
    "price": 707.0,
    "desc": "Артикул: PR-4004-2. Код 1С: 101634.",
    "images": [
      "assets/images/products/101634.jpg"
    ],
    "specs": []
  },
  {
    "id": "101635",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба LABRIS 20,3 см PEPPER",
    "price": 722.0,
    "desc": "Артикул: PR-4004-3. Код 1С: 101635.",
    "images": [
      "assets/images/products/101635.jpg"
    ],
    "specs": []
  },
  {
    "id": "101636",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний LABRIS 12,7 см PEPPER",
    "price": 507.0,
    "desc": "Артикул: PR-4004-4. Код 1С: 101636.",
    "images": [
      "assets/images/products/101636.jpg"
    ],
    "specs": []
  },
  {
    "id": "111206",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку LABRIS 17,5 см PEPPER",
    "price": 839.0,
    "desc": "Артикул: PR-4004-6. Код 1С: 111206.",
    "images": [
      "assets/images/products/111206.jpg"
    ],
    "specs": []
  },
  {
    "id": "101638",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф MAXIMUS 20,3 см PEPPER",
    "price": 793.0,
    "desc": "Артикул: PR-4005-1. Код 1С: 101638.",
    "images": [
      "assets/images/products/101638.jpg"
    ],
    "specs": []
  },
  {
    "id": "101637",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів LABRIS 7,6 см PEPPER",
    "price": 504.0,
    "desc": "Артикул: PR-4004-5. Код 1С: 101637.",
    "images": [
      "assets/images/products/101637.jpg"
    ],
    "specs": []
  },
  {
    "id": "101639",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса MAXIMUS 20,3 см PEPPER",
    "price": 732.0,
    "desc": "Артикул: PR-4005-2. Код 1С: 101639.",
    "images": [
      "assets/images/products/101639.jpg"
    ],
    "specs": []
  },
  {
    "id": "101640",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба MAXIMUS 20,3 см PEPPER",
    "price": 765.0,
    "desc": "Артикул: PR-4005-3. Код 1С: 101640.",
    "images": [
      "assets/images/products/101640.jpg"
    ],
    "specs": []
  },
  {
    "id": "128564",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів БІЛА перлина GUSTO 8 пр",
    "price": 2148.0,
    "desc": "Артикул: GT-4104-8. Код 1С: 128564.",
    "images": [
      "assets/images/products/128564.jpg"
    ],
    "specs": []
  },
  {
    "id": "101641",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний MAXIMUS 12,7 см PEPPER",
    "price": 540.0,
    "desc": "Артикул: PR-4005-4. Код 1С: 101641.",
    "images": [
      "assets/images/products/101641.jpg"
    ],
    "specs": []
  },
  {
    "id": "101642",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів MAXIMUS 7,6 см PEPPER",
    "price": 535.0,
    "desc": "Артикул: PR-4005-5. Код 1С: 101642.",
    "images": [
      "assets/images/products/101642.jpg"
    ],
    "specs": []
  },
  {
    "id": "111207",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф OKINAVA 20,3 см PEPPER",
    "price": 1003.0,
    "desc": "Артикул: PR-4006-1. Код 1С: 111207.",
    "images": [
      "assets/images/products/111207.jpg"
    ],
    "specs": []
  },
  {
    "id": "111208",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса OKINAVA 20,3 см PEPPER",
    "price": 974.0,
    "desc": "Артикул: PR-4006-2. Код 1С: 111208.",
    "images": [
      "assets/images/products/111208.jpg"
    ],
    "specs": []
  },
  {
    "id": "111205",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку MAXIMUS 17,5 см PEPPER",
    "price": 902.0,
    "desc": "Артикул: PR-4005-6. Код 1С: 111205.",
    "images": [
      "assets/images/products/111205.jpg"
    ],
    "specs": []
  },
  {
    "id": "111210",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний OKINAVA 12,7 см PEPPER",
    "price": 597.0,
    "desc": "Артикул: PR-4006-4. Код 1С: 111210.",
    "images": [
      "assets/images/products/111210.jpg"
    ],
    "specs": []
  },
  {
    "id": "111209",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для хліба OKINAVA 20,3 см PEPPER",
    "price": 996.0,
    "desc": "Артикул: PR-4006-3. Код 1С: 111209.",
    "images": [
      "assets/images/products/111209.jpg"
    ],
    "specs": []
  },
  {
    "id": "111211",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів OKINAVA 10,2 см PEPPER",
    "price": 597.0,
    "desc": "Артикул: PR-4006-5. Код 1С: 111211.",
    "images": [
      "assets/images/products/111211.jpg"
    ],
    "specs": []
  },
  {
    "id": "134301",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж шеф TADAMI PEPPER 20,3см",
    "price": 964.0,
    "desc": "Артикул: PR-4007-1. Код 1С: 134301.",
    "images": [
      "assets/images/products/134301.jpg"
    ],
    "specs": []
  },
  {
    "id": "134303",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж універсальний TADAMI PEPPER 12,7см",
    "price": 576.0,
    "desc": "Артикул: PR-4007-4. Код 1С: 134303.",
    "images": [
      "assets/images/products/134303.jpg"
    ],
    "specs": []
  },
  {
    "id": "134302",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для м'яса TADAMI PEPPER 20,3см",
    "price": 836.0,
    "desc": "Артикул: PR-4007-2. Код 1С: 134302.",
    "images": [
      "assets/images/products/134302.jpg"
    ],
    "specs": []
  },
  {
    "id": "134305",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж сантоку TADAMI PEPPER 17,5см",
    "price": 964.0,
    "desc": "Артикул: PR-4007-6. Код 1С: 134305.",
    "images": [
      "assets/images/products/134305.jpg"
    ],
    "specs": []
  },
  {
    "id": "134304",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для овочів TADAMI PEPPER 7,6см",
    "price": 576.0,
    "desc": "Артикул: PR-4007-5. Код 1С: 134304.",
    "images": [
      "assets/images/products/134304.jpg"
    ],
    "specs": []
  },
  {
    "id": "135991",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Підставка для ножів Бета та кухонного приладдя GUSTO, 11.1×11.1×22.5см",
    "price": 599.0,
    "desc": "Артикул: GT-6803. Код 1С: 135991.",
    "images": [
      "assets/images/products/135991.jpg"
    ],
    "specs": []
  },
  {
    "id": "135992",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Підставка для ножів Гамма GUSTO, 14×14×23см",
    "price": 683.0,
    "desc": "Артикул: GT-6804. Код 1С: 135992.",
    "images": [
      "assets/images/products/135992.jpg"
    ],
    "specs": []
  },
  {
    "id": "128563",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножів ЧОРНА перлина GUSTO 6 пр",
    "price": 2478.0,
    "desc": "Артикул: GT-4105-6. Код 1С: 128563.",
    "images": [
      "assets/images/products/128563.jpg"
    ],
    "specs": []
  },
  {
    "id": "135990",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Підставка для ножів Альфа та кухонних аксесуарів GUSTO, 20.2×12.2×22см",
    "price": 1090.0,
    "desc": "Артикул: GT-6802. Код 1С: 135990.",
    "images": [
      "assets/images/products/135990.jpg"
    ],
    "specs": []
  },
  {
    "id": "122001",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для чищення овочів 3 шт 13x7,3x3,7 см GUSTO",
    "price": 261.0,
    "desc": "Артикул: GT-5314. Код 1С: 122001.",
    "images": [
      "assets/images/products/122001.jpg"
    ],
    "specs": []
  },
  {
    "id": "121997",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для чищення овочів горизонтальний 13x7,8 см GUSTO",
    "price": 102.0,
    "desc": "Артикул: GT-5312. Код 1С: 121997.",
    "images": [
      "assets/images/products/121997.jpg"
    ],
    "specs": []
  },
  {
    "id": "121999",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для чищення овочів двосторонній 19x8,5 см GUSTO",
    "price": 182.0,
    "desc": "Артикул: GT-5313. Код 1С: 121999.",
    "images": [
      "assets/images/products/121999.jpg"
    ],
    "specs": []
  },
  {
    "id": "149287",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для авокадо GUSTO",
    "price": 146.0,
    "desc": "Артикул: GT-6503. Код 1С: 149287.",
    "images": [
      "assets/images/products/149287.jpg"
    ],
    "specs": []
  },
  {
    "id": "109714",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Штопор-метелик GUSTO",
    "price": 309.0,
    "desc": "Артикул: GT-6201. Код 1С: 109714.",
    "images": [
      "assets/images/products/109714.jpg"
    ],
    "specs": []
  },
  {
    "id": "110212",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Відкривачка 3в1 чорна GUSTO",
    "price": 108.0,
    "desc": "Артикул: GT-6203. Код 1С: 110212.",
    "images": [
      "assets/images/products/110212.jpg"
    ],
    "specs": []
  },
  {
    "id": "149289",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Яйцерізка овальна GUSTO",
    "price": 146.0,
    "desc": "Артикул: GT-6505. Код 1С: 149289.",
    "images": [
      "assets/images/products/149289.jpg"
    ],
    "specs": []
  },
  {
    "id": "110213",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Штопор сомельє бордо GUSTO",
    "price": 106.0,
    "desc": "Артикул: GT-6204. Код 1С: 110213.",
    "images": [
      "assets/images/products/110213.jpg"
    ],
    "specs": []
  },
  {
    "id": "144560",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Штопор металевий GUSTO",
    "price": 113.0,
    "desc": "Артикул: GT-6205. Код 1С: 144560.",
    "images": [
      "assets/images/products/144560.jpg"
    ],
    "specs": []
  },
  {
    "id": "109717",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для томатів 11 см GUSTO",
    "price": 89.0,
    "desc": "Артикул: GT-4002-6. Код 1С: 109717.",
    "images": [
      "assets/images/products/109717.jpg"
    ],
    "specs": []
  },
  {
    "id": "109716",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для томатів чорний 11см GUSTO",
    "price": 72.0,
    "desc": "Артикул: GT-4002. Код 1С: 109716.",
    "images": [
      "assets/images/products/109716.jpg"
    ],
    "specs": []
  },
  {
    "id": "109719",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Прес для часнику GUSTO",
    "price": 137.0,
    "desc": "Артикул: GT-6401. Код 1С: 109719.",
    "images": [
      "assets/images/products/109719.jpg"
    ],
    "specs": []
  },
  {
    "id": "144561",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Відкривачка для консервних банок, металева GUSTO",
    "price": 178.0,
    "desc": "Артикул: GT-6206. Код 1С: 144561.",
    "images": [
      "assets/images/products/144561.jpg"
    ],
    "specs": []
  },
  {
    "id": "109718",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Планка магнітна для ножів 33 см GUSTO",
    "price": 224.0,
    "desc": "Артикул: GT-6333. Код 1С: 109718.",
    "images": [
      "assets/images/products/109718.jpg"
    ],
    "specs": []
  },
  {
    "id": "144562",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Відкривачка для консервних банок, чорна GUSTO",
    "price": 150.0,
    "desc": "Артикул: GT-6207. Код 1С: 144562.",
    "images": [
      "assets/images/products/144562.jpg"
    ],
    "specs": []
  },
  {
    "id": "149439",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Маслянка з кришкою GUSTO",
    "price": 134.0,
    "desc": "Артикул: GT-4262. Код 1С: 149439.",
    "images": [
      "assets/images/products/149439.jpg"
    ],
    "specs": []
  },
  {
    "id": "149288",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Яйцерізка прямокутна GUSTO",
    "price": 68.0,
    "desc": "Артикул: GT-6504. Код 1С: 149288.",
    "images": [
      "assets/images/products/149288.jpg"
    ],
    "specs": []
  },
  {
    "id": "110214",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кухонні ножиці 23 см сір./чорн. GUSTO",
    "price": 372.0,
    "desc": "Артикул: GT-6123. Код 1С: 110214.",
    "images": [
      "assets/images/products/110214.jpg"
    ],
    "specs": []
  },
  {
    "id": "109715",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кухонні ножиці 20 см GUSTO",
    "price": 140.0,
    "desc": "Артикул: GT-6120. Код 1С: 109715.",
    "images": [
      "assets/images/products/109715.jpg"
    ],
    "specs": []
  },
  {
    "id": "110215",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кухонні ножиці 21 см блак./оран GUSTO",
    "price": 223.0,
    "desc": "Артикул: GT-6121. Код 1С: 110215.",
    "images": [
      "assets/images/products/110215.jpg"
    ],
    "specs": []
  },
  {
    "id": "118632",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Прес для часнику з цинкового сплаву GUSTO",
    "price": 464.0,
    "desc": "Артикул: GT-6404. Код 1С: 118632.",
    "images": [
      "assets/images/products/118632.jpg"
    ],
    "specs": []
  },
  {
    "id": "144564",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Прес для часнику з нержавіючої сталі GUSTO",
    "price": 299.0,
    "desc": "Артикул: GT-6403. Код 1С: 144564.",
    "images": [
      "assets/images/products/144564.jpg"
    ],
    "specs": []
  },
  {
    "id": "110216",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ножиць 3 шт GUSTO",
    "price": 142.0,
    "desc": "Артикул: GT-6103. Код 1С: 110216.",
    "images": [
      "assets/images/products/110216.jpg"
    ],
    "specs": []
  },
  {
    "id": "110209",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Точило для ножів 194 г GUSTO",
    "price": 454.0,
    "desc": "Артикул: GT-6602. Код 1С: 110209.",
    "images": [
      "assets/images/products/110209.jpg"
    ],
    "specs": []
  },
  {
    "id": "110208",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Точило для ножів 236 г GUSTO",
    "price": 471.0,
    "desc": "Артикул: GT-6601. Код 1С: 110208.",
    "images": [
      "assets/images/products/110208.jpg"
    ],
    "specs": []
  },
  {
    "id": "135989",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Підставка для ножів Дельта дерев'яна з магнітом GUSTO, 22×22×1.8см",
    "price": 1019.0,
    "desc": "Артикул: GT-6801. Код 1С: 135989.",
    "images": [
      "assets/images/products/135989.jpg"
    ],
    "specs": []
  },
  {
    "id": "110210",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Точило для ножів 68 г GUSTO",
    "price": 227.0,
    "desc": "Артикул: GT-6603. Код 1С: 110210.",
    "images": [
      "assets/images/products/110210.jpg"
    ],
    "specs": []
  },
  {
    "id": "144563",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Прес для часнику з ручкою GUSTO",
    "price": 200.0,
    "desc": "Артикул: GT-6402. Код 1С: 144563.",
    "images": [
      "assets/images/products/144563.jpg"
    ],
    "specs": []
  },
  {
    "id": "144558",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Точило для ножів 148 г GUSTO",
    "price": 193.0,
    "desc": "Артикул: GT-6604. Код 1С: 144558.",
    "images": [
      "assets/images/products/144558.jpg"
    ],
    "specs": []
  },
  {
    "id": "110217",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для тіста 2в1 GUSTO",
    "price": 125.0,
    "desc": "Артикул: GT-6502. Код 1С: 110217.",
    "images": [
      "assets/images/products/110217.jpg"
    ],
    "specs": []
  },
  {
    "id": "144559",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Точило для ножів 24 г GUSTO",
    "price": 76.0,
    "desc": "Артикул: GT-6605. Код 1С: 144559.",
    "images": [
      "assets/images/products/144559.jpg"
    ],
    "specs": []
  },
  {
    "id": "110205",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млин для солі та перцю 12,5 см GUSTO",
    "price": 430.0,
    "desc": "Артикул: GT-6712. Код 1С: 110205.",
    "images": [
      "assets/images/products/110205.jpg"
    ],
    "specs": []
  },
  {
    "id": "136096",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з дерев'яною кришкою Vittora, 170мл",
    "price": 343.0,
    "desc": "Артикул: VT-9305. Код 1С: 136096.",
    "images": [
      "assets/images/products/136096.jpg"
    ],
    "specs": []
  },
  {
    "id": "136095",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з дерев'яною кришкою Vittora, 200мл",
    "price": 356.0,
    "desc": "Артикул: VT-9306. Код 1С: 136095.",
    "images": [
      "assets/images/products/136095.jpg"
    ],
    "specs": []
  },
  {
    "id": "110206",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млин для солі та перцю 20 см GUSTO",
    "price": 547.0,
    "desc": "Артикул: GT-6720. Код 1С: 110206.",
    "images": [
      "assets/images/products/110206.jpg"
    ],
    "specs": []
  },
  {
    "id": "110207",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млин для солі та перцю 25 см GUSTO",
    "price": 642.0,
    "desc": "Артикул: GT-6735. Код 1С: 110207.",
    "images": [
      "assets/images/products/110207.jpg"
    ],
    "specs": []
  },
  {
    "id": "126975",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL плоска одностороння GUSTO",
    "price": 220.0,
    "desc": "Артикул: GT-GR-1001. Код 1С: 126975.",
    "images": [
      "assets/images/products/126975.jpg"
    ],
    "specs": []
  },
  {
    "id": "126977",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL чотиристороння з округлою ручкою 20см GUSTO",
    "price": 313.0,
    "desc": "Артикул: GT-GR-1003. Код 1С: 126977.",
    "images": [
      "assets/images/products/126977.jpg"
    ],
    "specs": []
  },
  {
    "id": "126976",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL чотиристороння 20см GUSTO",
    "price": 162.0,
    "desc": "Артикул: GT-GR-1002. Код 1С: 126976.",
    "images": [
      "assets/images/products/126976.jpg"
    ],
    "specs": []
  },
  {
    "id": "126979",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL чотиристороння з дерев'яною ручкою 23см GUSTO",
    "price": 410.0,
    "desc": "Артикул: GT-GR-1005. Код 1С: 126979.",
    "images": [
      "assets/images/products/126979.jpg"
    ],
    "specs": []
  },
  {
    "id": "126978",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL шестистороння 23см GUSTO",
    "price": 338.0,
    "desc": "Артикул: GT-GR-1004. Код 1С: 126978.",
    "images": [
      "assets/images/products/126978.jpg"
    ],
    "specs": []
  },
  {
    "id": "136100",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з нержавіючою кришкою Vittora, 170мл",
    "price": 217.0,
    "desc": "Артикул: VT-9301. Код 1С: 136100.",
    "images": [
      "assets/images/products/136100.jpg"
    ],
    "specs": []
  },
  {
    "id": "136098",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з пластиковою кришкою Vittora, 170мл",
    "price": 126.0,
    "desc": "Артикул: VT-9303. Код 1С: 136098.",
    "images": [
      "assets/images/products/136098.jpg"
    ],
    "specs": []
  },
  {
    "id": "126989",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка METAL чотиристороння з опорою з металевою антиковзаючою ручкою 20см GUSTO",
    "price": 381.0,
    "desc": "Артикул: GT-GR-1006. Код 1С: 126989.",
    "images": [
      "assets/images/products/126989.jpg"
    ],
    "specs": []
  },
  {
    "id": "136097",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з пластиковою кришкою Vittora, 170мл",
    "price": 117.0,
    "desc": "Артикул: VT-9304. Код 1С: 136097.",
    "images": [
      "assets/images/products/136097.jpg"
    ],
    "specs": []
  },
  {
    "id": "126981",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO чотиристороння 20см GUSTO",
    "price": 162.0,
    "desc": "Артикул: GT-GR-2002. Код 1С: 126981.",
    "images": [
      "assets/images/products/126981.jpg"
    ],
    "specs": []
  },
  {
    "id": "126982",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO чотиристороння з опорою з округлою ручкою 20см GUSTO",
    "price": 182.0,
    "desc": "Артикул: GT-GR-2003-1. Код 1С: 126982.",
    "images": [
      "assets/images/products/126982.jpg"
    ],
    "specs": []
  },
  {
    "id": "126983",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO чотиристороння з округлою ручкою 20см GUSTO",
    "price": 188.0,
    "desc": "Артикул: GT-GR-2003-2. Код 1С: 126983.",
    "images": [
      "assets/images/products/126983.jpg"
    ],
    "specs": []
  },
  {
    "id": "136099",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Млинок для спецій з нержавіючою кришкою Vittora, 170мл",
    "price": 206.0,
    "desc": "Артикул: VT-9302. Код 1С: 136099.",
    "images": [
      "assets/images/products/136099.jpg"
    ],
    "specs": []
  },
  {
    "id": "126984",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO чотиристороння з опорою з округлою ручкою Soft Touch 20см GUSTO",
    "price": 229.0,
    "desc": "Артикул: GT-GR-2003-3. Код 1С: 126984.",
    "images": [
      "assets/images/products/126984.jpg"
    ],
    "specs": []
  },
  {
    "id": "126987",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка SUPER SHARP чотиристороння з опорою з округлою ручкою 20см GUSTO",
    "price": 571.0,
    "desc": "Артикул: GT-GR-3003. Код 1С: 126987.",
    "images": [
      "assets/images/products/126987.jpg"
    ],
    "specs": []
  },
  {
    "id": "126985",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO шестистороння з опорою 23см GUSTO",
    "price": 254.0,
    "desc": "Артикул: GT-GR-2004. Код 1С: 126985.",
    "images": [
      "assets/images/products/126985.jpg"
    ],
    "specs": []
  },
  {
    "id": "125062",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Терка з контейнером 19,5х10х5,5см GUSTO",
    "price": 175.0,
    "desc": "Артикул: GT-204. Код 1С: 125062.",
    "images": [
      "assets/images/products/125062.jpg"
    ],
    "specs": []
  },
  {
    "id": "126986",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка SUPER SHARP чотиристороння 20см GUSTO",
    "price": 491.0,
    "desc": "Артикул: GT-GR-3002. Код 1С: 126986.",
    "images": [
      "assets/images/products/126986.jpg"
    ],
    "specs": []
  },
  {
    "id": "100737",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка чорна, нейлон GUSTO",
    "price": 82.0,
    "desc": "Артикул: GT-5201. Код 1С: 100737.",
    "images": [
      "assets/images/products/100737.jpg"
    ],
    "specs": []
  },
  {
    "id": "100738",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами чорна, нейлон GUSTO",
    "price": 71.0,
    "desc": "Артикул: GT-5203. Код 1С: 100738.",
    "images": [
      "assets/images/products/100738.jpg"
    ],
    "specs": []
  },
  {
    "id": "126988",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка SUPER SHARP шестистороння з опорою 23см GUSTO",
    "price": 685.0,
    "desc": "Артикул: GT-GR-3004. Код 1С: 126988.",
    "images": [
      "assets/images/products/126988.jpg"
    ],
    "specs": []
  },
  {
    "id": "100740",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник чорний, нейлон GUSTO",
    "price": 102.0,
    "desc": "Артикул: GT-5205. Код 1С: 100740.",
    "images": [
      "assets/images/products/100740.jpg"
    ],
    "specs": []
  },
  {
    "id": "100754",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Щипці кухонні чорні, нейлон GUSTO",
    "price": 126.0,
    "desc": "Артикул: GT-5207. Код 1С: 100754.",
    "images": [
      "assets/images/products/100754.jpg"
    ],
    "specs": []
  },
  {
    "id": "147517",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5505. Код 1С: 147517.",
    "images": [
      "assets/images/products/147517.jpg"
    ],
    "specs": []
  },
  {
    "id": "147518",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка з отворами Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5506. Код 1С: 147518.",
    "images": [
      "assets/images/products/147518.jpg"
    ],
    "specs": []
  },
  {
    "id": "147516",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5504. Код 1С: 147516.",
    "images": [
      "assets/images/products/147516.jpg"
    ],
    "specs": []
  },
  {
    "id": "100739",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська чорна, нейлон GUSTO",
    "price": 77.0,
    "desc": "Артикул: GT-5204. Код 1С: 100739.",
    "images": [
      "assets/images/products/100739.jpg"
    ],
    "specs": []
  },
  {
    "id": "147514",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка для спагеті Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5502. Код 1С: 147514.",
    "images": [
      "assets/images/products/147514.jpg"
    ],
    "specs": []
  },
  {
    "id": "100753",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка з отворами чорна, нейлон GUSTO",
    "price": 77.0,
    "desc": "Артикул: GT-5206. Код 1С: 100753.",
    "images": [
      "assets/images/products/100753.jpg"
    ],
    "specs": []
  },
  {
    "id": "126980",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка ART-DECO плоска одностороння GUSTO",
    "price": 130.0,
    "desc": "Артикул: GT-GR-2001. Код 1С: 126980.",
    "images": [
      "assets/images/products/126980.jpg"
    ],
    "specs": []
  },
  {
    "id": "147529",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5507. Код 1С: 147529.",
    "images": [
      "assets/images/products/147529.jpg"
    ],
    "specs": []
  },
  {
    "id": "147515",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5503. Код 1С: 147515.",
    "images": [
      "assets/images/products/147515.jpg"
    ],
    "specs": []
  },
  {
    "id": "147513",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка Ментол, нейлон GUSTO",
    "price": 75.0,
    "desc": "Артикул: GT-5501. Код 1С: 147513.",
    "images": [
      "assets/images/products/147513.jpg"
    ],
    "specs": []
  },
  {
    "id": "149330",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тертка для корейської моркви 26.5x10 GUSTO",
    "price": 47.0,
    "desc": "Артикул: GT-GR-3001. Код 1С: 149330.",
    "images": [
      "assets/images/products/149330.jpg"
    ],
    "specs": []
  },
  {
    "id": "118622",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник WOOD, нейлон GUSTO",
    "price": 148.0,
    "desc": "Артикул: GT-5905. Код 1С: 118622.",
    "images": [
      "assets/images/products/118622.jpg"
    ],
    "specs": []
  },
  {
    "id": "118616",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка для спагеті WOOD GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5902. Код 1С: 118616.",
    "images": [
      "assets/images/products/118616.jpg"
    ],
    "specs": []
  },
  {
    "id": "147519",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка з отворами WOOD, нейлон GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5906. Код 1С: 147519.",
    "images": [
      "assets/images/products/147519.jpg"
    ],
    "specs": []
  },
  {
    "id": "118574",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська бузок, нейлон GUSTO",
    "price": 146.0,
    "desc": "Артикул: GT-5704. Код 1С: 118574.",
    "images": [
      "assets/images/products/118574.jpg"
    ],
    "specs": []
  },
  {
    "id": "118564",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка бузок, нейлон GUSTO",
    "price": 146.0,
    "desc": "Артикул: GT-5701. Код 1С: 118564.",
    "images": [
      "assets/images/products/118564.jpg"
    ],
    "specs": []
  },
  {
    "id": "118620",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська WOOD, нейлон GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5904. Код 1С: 118620.",
    "images": [
      "assets/images/products/118620.jpg"
    ],
    "specs": []
  },
  {
    "id": "118582",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами бузок, нейлон GUSTO",
    "price": 146.0,
    "desc": "Артикул: GT-5703. Код 1С: 118582.",
    "images": [
      "assets/images/products/118582.jpg"
    ],
    "specs": []
  },
  {
    "id": "147520",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка WOOD, нейлон GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5907. Код 1С: 147520.",
    "images": [
      "assets/images/products/147520.jpg"
    ],
    "specs": []
  },
  {
    "id": "118618",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами WOOD, нейлон GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5903. Код 1С: 118618.",
    "images": [
      "assets/images/products/118618.jpg"
    ],
    "specs": []
  },
  {
    "id": "118612",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник Горіх, нейлон GUSTO",
    "price": 198.0,
    "desc": "Артикул: GT-5805. Код 1С: 118612.",
    "images": [
      "assets/images/products/118612.jpg"
    ],
    "specs": []
  },
  {
    "id": "118614",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка WOOD, нейлон GUSTO",
    "price": 136.0,
    "desc": "Артикул: GT-5901. Код 1С: 118614.",
    "images": [
      "assets/images/products/118614.jpg"
    ],
    "specs": []
  },
  {
    "id": "118609",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка для спагеті Горіх, нейлон GUSTO",
    "price": 190.0,
    "desc": "Артикул: GT-5807. Код 1С: 118609.",
    "images": [
      "assets/images/products/118609.jpg"
    ],
    "specs": []
  },
  {
    "id": "118603",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка Горіх, нейлон GUSTO",
    "price": 190.0,
    "desc": "Артикул: GT-5801. Код 1С: 118603.",
    "images": [
      "assets/images/products/118603.jpg"
    ],
    "specs": []
  },
  {
    "id": "118604",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами Горіх, нейлон GUSTO",
    "price": 190.0,
    "desc": "Артикул: GT-5803. Код 1С: 118604.",
    "images": [
      "assets/images/products/118604.jpg"
    ],
    "specs": []
  },
  {
    "id": "118605",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська Горіх, нейлон GUSTO",
    "price": 190.0,
    "desc": "Артикул: GT-5804. Код 1С: 118605.",
    "images": [
      "assets/images/products/118605.jpg"
    ],
    "specs": []
  },
  {
    "id": "118607",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка з отворами Горіх, нейлон GUSTO",
    "price": 190.0,
    "desc": "Артикул: GT-5806. Код 1С: 118607.",
    "images": [
      "assets/images/products/118607.jpg"
    ],
    "specs": []
  },
  {
    "id": "100763",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка блак./оран., нейлон GUSTO",
    "price": 171.0,
    "desc": "Артикул: GT-5301. Код 1С: 100763.",
    "images": [
      "assets/images/products/100763.jpg"
    ],
    "specs": []
  },
  {
    "id": "100764",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка для спагеті блак./оран., нейлон GUSTO",
    "price": 159.0,
    "desc": "Артикул: GT-5302. Код 1С: 100764.",
    "images": [
      "assets/images/products/100764.jpg"
    ],
    "specs": []
  },
  {
    "id": "100767",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник блак./оран., нейлон GUSTO",
    "price": 172.0,
    "desc": "Артикул: GT-5305. Код 1С: 100767.",
    "images": [
      "assets/images/products/100767.jpg"
    ],
    "specs": []
  },
  {
    "id": "100766",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська блак./оран., нейлон GUSTO",
    "price": 163.0,
    "desc": "Артикул: GT-5304. Код 1С: 100766.",
    "images": [
      "assets/images/products/100766.jpg"
    ],
    "specs": []
  },
  {
    "id": "100765",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами блак./оран., нейлон GUSTO",
    "price": 164.0,
    "desc": "Артикул: GT-5303. Код 1С: 100765.",
    "images": [
      "assets/images/products/100765.jpg"
    ],
    "specs": []
  },
  {
    "id": "110215",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кухонні ножиці 21 см блак./оран GUSTO",
    "price": 223.0,
    "desc": "Артикул: GT-6121. Код 1С: 110215.",
    "images": [
      "assets/images/products/110215.jpg"
    ],
    "specs": []
  },
  {
    "id": "100771",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Картоплем'ялка блак./оран., нейлон GUSTO",
    "price": 173.0,
    "desc": "Артикул: GT-5308. Код 1С: 100771.",
    "images": [
      "assets/images/products/100771.jpg"
    ],
    "specs": []
  },
  {
    "id": "110218",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для піци GUSTO",
    "price": 179.0,
    "desc": "Артикул: GT-6501. Код 1С: 110218.",
    "images": [
      "assets/images/products/110218.jpg"
    ],
    "specs": []
  },
  {
    "id": "136665",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами граніт, силікон GUSTO",
    "price": 158.0,
    "desc": "Артикул: GT-6301. Код 1С: 136665.",
    "images": [
      "assets/images/products/136665.jpg"
    ],
    "specs": []
  },
  {
    "id": "100773",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Вінчик блак./оран.GUSTO",
    "price": 218.0,
    "desc": "Артикул: GT-5310. Код 1С: 100773.",
    "images": [
      "assets/images/products/100773.jpg"
    ],
    "specs": []
  },
  {
    "id": "136666",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка граніт, силікон GUSTO",
    "price": 158.0,
    "desc": "Артикул: GT-6302. Код 1С: 136666.",
    "images": [
      "assets/images/products/136666.jpg"
    ],
    "specs": []
  },
  {
    "id": "136739",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка з отворами граніт, силікон GUSTO",
    "price": 158.0,
    "desc": "Артикул: GT-6305. Код 1С: 136739.",
    "images": [
      "assets/images/products/136739.jpg"
    ],
    "specs": []
  },
  {
    "id": "136737",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник граніт, силікон GUSTO",
    "price": 186.0,
    "desc": "Артикул: GT-6303. Код 1С: 136737.",
    "images": [
      "assets/images/products/136737.jpg"
    ],
    "specs": []
  },
  {
    "id": "136740",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська граніт, силікон GUSTO",
    "price": 158.0,
    "desc": "Артикул: GT-6306. Код 1С: 136740.",
    "images": [
      "assets/images/products/136740.jpg"
    ],
    "specs": []
  },
  {
    "id": "136738",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка граніт, силікон GUSTO",
    "price": 186.0,
    "desc": "Артикул: GT-6304. Код 1С: 136738.",
    "images": [
      "assets/images/products/136738.jpg"
    ],
    "specs": []
  },
  {
    "id": "100772",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ніж для чищення овочів горизонтальний блак./оран.GUSTO",
    "price": 141.0,
    "desc": "Артикул: GT-5309. Код 1С: 100772.",
    "images": [
      "assets/images/products/100772.jpg"
    ],
    "specs": []
  },
  {
    "id": "138637",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Пензлик  бузок, силікон GUSTO",
    "price": 42.0,
    "desc": "Артикул: GT-S-02. Код 1С: 138637.",
    "images": [
      "assets/images/products/138637.jpg"
    ],
    "specs": []
  },
  {
    "id": "138639",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір лопатка+пензлик  блакитний, силікон GUSTO",
    "price": 78.0,
    "desc": "Артикул: GT-S-102. Код 1С: 138639.",
    "images": [
      "assets/images/products/138639.jpg"
    ],
    "specs": []
  },
  {
    "id": "138641",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка жовта, силікон GUSTO",
    "price": 40.0,
    "desc": "Артикул: GT-S-05. Код 1С: 138641.",
    "images": [
      "assets/images/products/138641.jpg"
    ],
    "specs": []
  },
  {
    "id": "147589",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір лопатка+пензлик бірюза, силікон GUSTO",
    "price": 78.0,
    "desc": "Артикул: GT-S-103. Код 1С: 147589.",
    "images": [
      "assets/images/products/147589.jpg"
    ],
    "specs": []
  },
  {
    "id": "138638",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Вінчик бузок, силікон GUSTO",
    "price": 82.0,
    "desc": "Артикул: GT-S-03. Код 1С: 138638.",
    "images": [
      "assets/images/products/138638.jpg"
    ],
    "specs": []
  },
  {
    "id": "138636",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка бузок, силікон GUSTO",
    "price": 44.0,
    "desc": "Артикул: GT-S-01. Код 1С: 138636.",
    "images": [
      "assets/images/products/138636.jpg"
    ],
    "specs": []
  },
  {
    "id": "147590",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Вінчик бірюза, силікон GUSTO",
    "price": 72.0,
    "desc": "Артикул: GT-S-10. Код 1С: 147590.",
    "images": [
      "assets/images/products/147590.jpg"
    ],
    "specs": []
  },
  {
    "id": "138642",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Пензлик рожевий, силікон GUSTO",
    "price": 71.0,
    "desc": "Артикул: GT-S-06. Код 1С: 138642.",
    "images": [
      "assets/images/products/138642.jpg"
    ],
    "specs": []
  },
  {
    "id": "138643",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка рожева, силікон GUSTO",
    "price": 71.0,
    "desc": "Артикул: GT-S-07. Код 1С: 138643.",
    "images": [
      "assets/images/products/138643.jpg"
    ],
    "specs": []
  },
  {
    "id": "138634",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Качалка для тіста силіконова з дерев'яними ручками м'ята 30см GUSTO",
    "price": 183.0,
    "desc": "Артикул: GT-S-08. Код 1С: 138634.",
    "images": [
      "assets/images/products/138634.jpg"
    ],
    "specs": []
  },
  {
    "id": "138640",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Пензлик жовтий, силікон GUSTO",
    "price": 40.0,
    "desc": "Артикул: GT-S-04. Код 1С: 138640.",
    "images": [
      "assets/images/products/138640.jpg"
    ],
    "specs": []
  },
  {
    "id": "149284",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Щипці GUSTO граніт, силікон",
    "price": 172.0,
    "desc": "Артикул: GT-6307. Код 1С: 149284.",
    "images": [
      "assets/images/products/149284.jpg"
    ],
    "specs": []
  },
  {
    "id": "103632",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 16 см  нерж. 620мл",
    "price": 64.0,
    "desc": "Артикул: GT-5614-16. Код 1С: 103632.",
    "images": [
      "assets/images/products/103632.jpg"
    ],
    "specs": []
  },
  {
    "id": "103633",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 18 см  нерж. 900мл",
    "price": 79.0,
    "desc": "Артикул: GT-5614-18. Код 1С: 103633.",
    "images": [
      "assets/images/products/103633.jpg"
    ],
    "specs": []
  },
  {
    "id": "147012",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір силіконових прихваток 2 шт GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-S-219. Код 1С: 147012.",
    "images": [
      "assets/images/products/147012.jpg"
    ],
    "specs": []
  },
  {
    "id": "103634",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 20 см  нерж. 1200мл",
    "price": 96.0,
    "desc": "Артикул: GT-5614-20. Код 1С: 103634.",
    "images": [
      "assets/images/products/103634.jpg"
    ],
    "specs": []
  },
  {
    "id": "147011",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір мірних ложок 12шт, пластик GUSTO",
    "price": 153.0,
    "desc": "Артикул: GT-S-105. Код 1С: 147011.",
    "images": [
      "assets/images/products/147011.jpg"
    ],
    "specs": []
  },
  {
    "id": "138633",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір кухонного приладдя м'ята 5пред., силікон GUSTO",
    "price": 442.0,
    "desc": "Артикул: GT-S-101. Код 1С: 138633.",
    "images": [
      "assets/images/products/138633.jpg"
    ],
    "specs": []
  },
  {
    "id": "103636",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 24 см  нерж. 2400мл",
    "price": 134.0,
    "desc": "Артикул: GT-5614-24. Код 1С: 103636.",
    "images": [
      "assets/images/products/103636.jpg"
    ],
    "specs": []
  },
  {
    "id": "103635",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 22 см  нерж. 1700мл",
    "price": 112.0,
    "desc": "Артикул: GT-5614-22. Код 1С: 103635.",
    "images": [
      "assets/images/products/103635.jpg"
    ],
    "specs": []
  },
  {
    "id": "103637",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 26 см  нерж. 2900мл",
    "price": 151.0,
    "desc": "Артикул: GT-5614-26. Код 1С: 103637.",
    "images": [
      "assets/images/products/103637.jpg"
    ],
    "specs": []
  },
  {
    "id": "138635",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір щипців м'ята 3шт 15*20*25см GUSTO",
    "price": 113.0,
    "desc": "Артикул: GT-S-09. Код 1С: 138635.",
    "images": [
      "assets/images/products/138635.jpg"
    ],
    "specs": []
  },
  {
    "id": "136842",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 40х14 см нерж. GUSTO",
    "price": 375.0,
    "desc": "Артикул: GT-5614-40. Код 1С: 136842.",
    "images": [
      "assets/images/products/136842.jpg"
    ],
    "specs": []
  },
  {
    "id": "103638",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршлаг з ручкою 20 см  нерж.",
    "price": 156.0,
    "desc": "Артикул: GT-5615-20. Код 1С: 103638.",
    "images": [
      "assets/images/products/103638.jpg"
    ],
    "specs": []
  },
  {
    "id": "147010",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір мірних ложок 8шт, пластик+нержавіюча сталь GUSTO",
    "price": 174.0,
    "desc": "Артикул: GT-S-104. Код 1С: 147010.",
    "images": [
      "assets/images/products/147010.jpg"
    ],
    "specs": []
  },
  {
    "id": "136843",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 44х15 см нерж. GUSTO",
    "price": 462.0,
    "desc": "Артикул: GT-5614-44. Код 1С: 136843.",
    "images": [
      "assets/images/products/136843.jpg"
    ],
    "specs": []
  },
  {
    "id": "136844",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска 50х19 см нерж. GUSTO",
    "price": 800.0,
    "desc": "Артикул: GT-5614-50. Код 1С: 136844.",
    "images": [
      "assets/images/products/136844.jpg"
    ],
    "specs": []
  },
  {
    "id": "103641",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршлаг з двома ручками 24 см  нерж.",
    "price": 185.0,
    "desc": "Артикул: GT-5616-24. Код 1С: 103641.",
    "images": [
      "assets/images/products/103641.jpg"
    ],
    "specs": []
  },
  {
    "id": "127944",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кружка 8CM - 350ML",
    "price": 72.0,
    "desc": "Артикул: GT-5617-350. Код 1С: 127944.",
    "images": [
      "assets/images/products/127944.jpg"
    ],
    "specs": []
  },
  {
    "id": "103640",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршлаг з двома ручками 22 см  нерж.",
    "price": 169.0,
    "desc": "Артикул: GT-5616-22. Код 1С: 103640.",
    "images": [
      "assets/images/products/103640.jpg"
    ],
    "specs": []
  },
  {
    "id": "103622",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ополоник  нерж.",
    "price": 90.0,
    "desc": "Артикул: GT-5605. Код 1С: 103622.",
    "images": [
      "assets/images/products/103622.jpg"
    ],
    "specs": []
  },
  {
    "id": "103639",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршлаг з ручкою 22 см  нерж.",
    "price": 187.0,
    "desc": "Артикул: GT-5615-22. Код 1С: 103639.",
    "images": [
      "assets/images/products/103639.jpg"
    ],
    "specs": []
  },
  {
    "id": "103621",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Щипці кухонні 25 см  нерж.",
    "price": 97.0,
    "desc": "Артикул: GT-5607. Код 1С: 103621.",
    "images": [
      "assets/images/products/103621.jpg"
    ],
    "specs": []
  },
  {
    "id": "103623",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шумівка  нерж.",
    "price": 90.0,
    "desc": "Артикул: GT-5601. Код 1С: 103623.",
    "images": [
      "assets/images/products/103623.jpg"
    ],
    "specs": []
  },
  {
    "id": "103624",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська  нерж.",
    "price": 76.0,
    "desc": "Артикул: GT-5604. Код 1С: 103624.",
    "images": [
      "assets/images/products/103624.jpg"
    ],
    "specs": []
  },
  {
    "id": "136846",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Турка 9х9см 450мл, нерж.GUSTO",
    "price": 221.0,
    "desc": "Артикул: GT-5618-450. Код 1С: 136846.",
    "images": [
      "assets/images/products/136846.jpg"
    ],
    "specs": []
  },
  {
    "id": "103625",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ложка кухарська з отворами  нерж.",
    "price": 76.0,
    "desc": "Артикул: GT-5606. Код 1С: 103625.",
    "images": [
      "assets/images/products/103625.jpg"
    ],
    "specs": []
  },
  {
    "id": "136845",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Турка 8,5х8см 350мл, нерж.GUSTO",
    "price": 171.0,
    "desc": "Артикул: GT-5618-350. Код 1С: 136845.",
    "images": [
      "assets/images/products/136845.jpg"
    ],
    "specs": []
  },
  {
    "id": "103626",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка  нерж.",
    "price": 76.0,
    "desc": "Артикул: GT-5612. Код 1С: 103626.",
    "images": [
      "assets/images/products/103626.jpg"
    ],
    "specs": []
  },
  {
    "id": "127945",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кружка 9CM - 500ML",
    "price": 101.0,
    "desc": "Артикул: GT-5617-500. Код 1С: 127945.",
    "images": [
      "assets/images/products/127945.jpg"
    ],
    "specs": []
  },
  {
    "id": "103627",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Лопатка з отворами  нерж.",
    "price": 76.0,
    "desc": "Артикул: GT-5603. Код 1С: 103627.",
    "images": [
      "assets/images/products/103627.jpg"
    ],
    "specs": []
  },
  {
    "id": "103628",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Виделка кухарська  нерж.",
    "price": 61.0,
    "desc": "Артикул: GT-5613. Код 1С: 103628.",
    "images": [
      "assets/images/products/103628.jpg"
    ],
    "specs": []
  },
  {
    "id": "103630",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Картоплем'ялка 23,3 см  нерж.",
    "price": 146.0,
    "desc": "Артикул: GT-5608. Код 1С: 103630.",
    "images": [
      "assets/images/products/103630.jpg"
    ],
    "specs": []
  },
  {
    "id": "103629",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Вінчик 25 см  нерж.",
    "price": 102.0,
    "desc": "Артикул: GT-5610. Код 1С: 103629.",
    "images": [
      "assets/images/products/103629.jpg"
    ],
    "specs": []
  },
  {
    "id": "103131",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського MISKET 190 мл,  6 шт",
    "price": 572.0,
    "desc": "Артикул: VS-1190. Код 1С: 103131.",
    "images": [
      "assets/images/products/103131.jpg"
    ],
    "specs": []
  },
  {
    "id": "103132",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина MISKET 645 мл,  6 шт",
    "price": 875.0,
    "desc": "Артикул: VS-1655. Код 1С: 103132.",
    "images": [
      "assets/images/products/103132.jpg"
    ],
    "specs": []
  },
  {
    "id": "103133",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина MISKET 365 мл,  6 шт",
    "price": 643.0,
    "desc": "Артикул: VS-1645. Код 1С: 103133.",
    "images": [
      "assets/images/products/103133.jpg"
    ],
    "specs": []
  },
  {
    "id": "125096",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Просіювач з ручкою 1л GUSTO",
    "price": 248.0,
    "desc": "Артикул: GT-841. Код 1С: 125096.",
    "images": [
      "assets/images/products/125096.jpg"
    ],
    "specs": []
  },
  {
    "id": "103631",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Картоплем'ялка 26 см  пластик і нерж.",
    "price": 97.0,
    "desc": "Артикул: GT-5608/1. Код 1С: 103631.",
    "images": [
      "assets/images/products/103631.jpg"
    ],
    "specs": []
  },
  {
    "id": "125092",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Просіювач з ручкою 0,35л GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-839. Код 1С: 125092.",
    "images": [
      "assets/images/products/125092.jpg"
    ],
    "specs": []
  },
  {
    "id": "103137",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів MISKET 400 мл,  6 шт",
    "price": 528.0,
    "desc": "Артикул: VS-1400. Код 1С: 103137.",
    "images": [
      "assets/images/products/103137.jpg"
    ],
    "specs": []
  },
  {
    "id": "103138",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для білого вина MISKET 170 мл,  6 шт",
    "price": 522.0,
    "desc": "Артикул: VS-1170. Код 1С: 103138.",
    "images": [
      "assets/images/products/103138.jpg"
    ],
    "specs": []
  },
  {
    "id": "103139",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для Маргарити MISKET 295 мл,  6 шт",
    "price": 596.0,
    "desc": "Артикул: VS-1295. Код 1С: 103139.",
    "images": [
      "assets/images/products/103139.jpg"
    ],
    "specs": []
  },
  {
    "id": "103141",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для Мартіні MISKET 175 мл,  6 шт",
    "price": 595.0,
    "desc": "Артикул: VS-1175. Код 1С: 103141.",
    "images": [
      "assets/images/products/103141.jpg"
    ],
    "specs": []
  },
  {
    "id": "103140",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для коньяку MISKET 390 мл,  6 шт",
    "price": 652.0,
    "desc": "Артикул: VS-1390. Код 1С: 103140.",
    "images": [
      "assets/images/products/103140.jpg"
    ],
    "specs": []
  },
  {
    "id": "112345",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина LILLE 330 мл,  6 шт",
    "price": 718.0,
    "desc": "Артикул: VS-5330. Код 1С: 112345.",
    "images": [
      "assets/images/products/112345.jpg"
    ],
    "specs": []
  },
  {
    "id": "112137",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського LILLE 230 мл,  6 шт",
    "price": 694.0,
    "desc": "Артикул: VS-5230. Код 1С: 112137.",
    "images": [
      "assets/images/products/112137.jpg"
    ],
    "specs": []
  },
  {
    "id": "112344",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина LILLE 400 мл,  6 шт",
    "price": 792.0,
    "desc": "Артикул: VS-5400. Код 1С: 112344.",
    "images": [
      "assets/images/products/112344.jpg"
    ],
    "specs": []
  },
  {
    "id": "112346",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина LILLE 295 мл,  6 шт",
    "price": 637.0,
    "desc": "Артикул: VS-5295. Код 1С: 112346.",
    "images": [
      "assets/images/products/112346.jpg"
    ],
    "specs": []
  },
  {
    "id": "103134",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина MISKET 260 мл,  6 шт",
    "price": 516.0,
    "desc": "Артикул: VS-1260. Код 1С: 103134.",
    "images": [
      "assets/images/products/103134.jpg"
    ],
    "specs": []
  },
  {
    "id": "112347",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для лікеру LILLE 80 мл, VERSAILLES 6 шт",
    "price": 464.0,
    "desc": "Артикул: VS-5080. Код 1С: 112347.",
    "images": [],
    "specs": []
  },
  {
    "id": "112349",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок LILLE 480 мл,  6 шт",
    "price": 509.0,
    "desc": "Артикул: VS-5480. Код 1С: 112349.",
    "images": [
      "assets/images/products/112349.jpg"
    ],
    "specs": []
  },
  {
    "id": "103143",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ADORA 390 мл,  6 шт",
    "price": 387.0,
    "desc": "Артикул: VS-2390. Код 1С: 103143.",
    "images": [
      "assets/images/products/103143.jpg"
    ],
    "specs": []
  },
  {
    "id": "112352",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок LILLE 95 мл,  6 шт",
    "price": 272.0,
    "desc": "Артикул: VS-5095. Код 1С: 112352.",
    "images": [
      "assets/images/products/112352.jpg"
    ],
    "specs": []
  },
  {
    "id": "103149",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ARAS 300 мл,  6 шт",
    "price": 444.0,
    "desc": "Артикул: VS-3300. Код 1С: 103149.",
    "images": [
      "assets/images/products/103149.jpg"
    ],
    "specs": []
  },
  {
    "id": "103147",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ARAS 360 мл,  6 шт",
    "price": 525.0,
    "desc": "Артикул: VS-3361. Код 1С: 103147.",
    "images": [
      "assets/images/products/103147.jpg"
    ],
    "specs": []
  },
  {
    "id": "103148",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ARAS 360 мл,  6 шт",
    "price": 460.0,
    "desc": "Артикул: VS-3360. Код 1С: 103148.",
    "images": [
      "assets/images/products/103148.jpg"
    ],
    "specs": []
  },
  {
    "id": "103144",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ADORA 290 мл,  6 шт",
    "price": 393.0,
    "desc": "Артикул: VS-2290. Код 1С: 103144.",
    "images": [
      "assets/images/products/103144.jpg"
    ],
    "specs": []
  },
  {
    "id": "130482",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір високих склянок VALERIA 460 мл, 6 шт",
    "price": 515.0,
    "desc": "Артикул: VS-6460. Код 1С: 130482.",
    "images": [
      "assets/images/products/130482.jpg"
    ],
    "specs": []
  },
  {
    "id": "130480",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок VALERIA 400 мл, 6 шт",
    "price": 501.0,
    "desc": "Артикул: VS-6400. Код 1С: 130480.",
    "images": [
      "assets/images/products/130480.jpg"
    ],
    "specs": []
  },
  {
    "id": "112351",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок LILLE 345 мл,  6 шт",
    "price": 460.0,
    "desc": "Артикул: VS-5345. Код 1С: 112351.",
    "images": [
      "assets/images/products/112351.jpg"
    ],
    "specs": []
  },
  {
    "id": "127484",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Кварц зелений 350мл, 1 шт VERSAILLES",
    "price": 128.0,
    "desc": "Артикул: VS-H350QG . Код 1С: 127484.",
    "images": [
      "assets/images/products/127484.jpg"
    ],
    "specs": []
  },
  {
    "id": "127470",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Кварц синій 150мл, 1 шт VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150QB . Код 1С: 127470.",
    "images": [
      "assets/images/products/127470.jpg"
    ],
    "specs": []
  },
  {
    "id": "127520",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Кварц зелений 310мл, 1 шт VERSAILLES",
    "price": 155.0,
    "desc": "Артикул: VS-W310QG . Код 1С: 127520.",
    "images": [
      "assets/images/products/127520.jpg"
    ],
    "specs": []
  },
  {
    "id": "127480",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Кварц синій 350мл, 1 шт VERSAILLES",
    "price": 128.0,
    "desc": "Артикул: VS-H350QB . Код 1С: 127480.",
    "images": [
      "assets/images/products/127480.jpg"
    ],
    "specs": []
  },
  {
    "id": "127500",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Кварц зелений 240мл, 1 шт VERSAILLES",
    "price": 103.0,
    "desc": "Артикул: VS-T240QG . Код 1С: 127500.",
    "images": [
      "assets/images/products/127500.jpg"
    ],
    "specs": []
  },
  {
    "id": "127516",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Кварц синій 310мл, 1 шт VERSAILLES",
    "price": 155.0,
    "desc": "Артикул: VS-W310QB . Код 1С: 127516.",
    "images": [
      "assets/images/products/127516.jpg"
    ],
    "specs": []
  },
  {
    "id": "132559",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Кварц зелений 1,1л, VERSAILLES",
    "price": 677.0,
    "desc": "Артикул: VS-P1100QG. Код 1С: 132559.",
    "images": [
      "assets/images/products/132559.jpg"
    ],
    "specs": []
  },
  {
    "id": "132592",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Кварц зелений 350мл, 1 шт VERSAILLES",
    "price": 142.0,
    "desc": "Артикул: VS-I350QG. Код 1С: 132592.",
    "images": [
      "assets/images/products/132592.jpg"
    ],
    "specs": []
  },
  {
    "id": "127496",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Кварц синій 240мл, 1 шт VERSAILLES",
    "price": 103.0,
    "desc": "Артикул: VS-T240QB . Код 1С: 127496.",
    "images": [
      "assets/images/products/127496.jpg"
    ],
    "specs": []
  },
  {
    "id": "127474",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Кварц рожевий 150мл, 1 шт VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150QP . Код 1С: 127474.",
    "images": [
      "assets/images/products/127474.jpg"
    ],
    "specs": []
  },
  {
    "id": "132555",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Кварц синій 350мл, 1 шт VERSAILLES",
    "price": 142.0,
    "desc": "Артикул: VS-I350QB. Код 1С: 132555.",
    "images": [
      "assets/images/products/132555.jpg"
    ],
    "specs": []
  },
  {
    "id": "132557",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Кварц синій 1,1л, VERSAILLES",
    "price": 677.0,
    "desc": "Артикул: VS-P1100QB. Код 1С: 132557.",
    "images": [
      "assets/images/products/132557.jpg"
    ],
    "specs": []
  },
  {
    "id": "127522",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Кварц рожевий 310мл, 1 шт VERSAILLES",
    "price": 155.0,
    "desc": "Артикул: VS-W310QP . Код 1С: 127522.",
    "images": [
      "assets/images/products/127522.jpg"
    ],
    "specs": []
  },
  {
    "id": "127486",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Кварц рожевий 350мл, 1 шт VERSAILLES",
    "price": 128.0,
    "desc": "Артикул: VS-H350QP . Код 1С: 127486.",
    "images": [
      "assets/images/products/127486.jpg"
    ],
    "specs": []
  },
  {
    "id": "127472",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Кварц димчастий 150мл, 1 шт VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150QD . Код 1С: 127472.",
    "images": [
      "assets/images/products/127472.jpg"
    ],
    "specs": []
  },
  {
    "id": "127502",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Кварц рожевий 240мл, 1 шт VERSAILLES",
    "price": 103.0,
    "desc": "Артикул: VS-T240QP . Код 1С: 127502.",
    "images": [
      "assets/images/products/127502.jpg"
    ],
    "specs": []
  },
  {
    "id": "132561",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Кварц рожевий 1,1л, VERSAILLES",
    "price": 677.0,
    "desc": "Артикул: VS-P1100QP. Код 1С: 132561.",
    "images": [
      "assets/images/products/132561.jpg"
    ],
    "specs": []
  },
  {
    "id": "132596",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Кварц рожевий 350мл, 1 шт VERSAILLES",
    "price": 142.0,
    "desc": "Артикул: VS-I350QP. Код 1С: 132596.",
    "images": [
      "assets/images/products/132596.jpg"
    ],
    "specs": []
  },
  {
    "id": "127518",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Кварц димчастий 310мл, 1 шт VERSAILLES",
    "price": 155.0,
    "desc": "Артикул: VS-W310QD . Код 1С: 127518.",
    "images": [
      "assets/images/products/127518.jpg"
    ],
    "specs": []
  },
  {
    "id": "136748",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Кварц райдужний 150мл, 1 шт VERSAILLES",
    "price": 158.0,
    "desc": "Артикул: VS-C150QR. Код 1С: 136748.",
    "images": [],
    "specs": []
  },
  {
    "id": "136769",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Кварц райдужний 350мл, 1 шт VERSAILLES",
    "price": 145.0,
    "desc": "Артикул: VS-H350QR. Код 1С: 136769.",
    "images": [],
    "specs": []
  },
  {
    "id": "127498",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Кварц димчастий 240мл, 1 шт VERSAILLES",
    "price": 103.0,
    "desc": "Артикул: VS-T240QD . Код 1С: 127498.",
    "images": [
      "assets/images/products/127498.jpg"
    ],
    "specs": []
  },
  {
    "id": "136772",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Кварц райдужний 310мл, 1 шт VERSAILLES",
    "price": 158.0,
    "desc": "Артикул: VS-W310QR. Код 1С: 136772.",
    "images": [],
    "specs": []
  },
  {
    "id": "127482",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Кварц димчастий 350мл, 1 шт VERSAILLES",
    "price": 128.0,
    "desc": "Артикул: VS-H350QD . Код 1С: 127482.",
    "images": [
      "assets/images/products/127482.jpg"
    ],
    "specs": []
  },
  {
    "id": "136771",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Кварц райдужний 240мл, 1 шт VERSAILLES",
    "price": 125.0,
    "desc": "Артикул: VS-T240QR. Код 1С: 136771.",
    "images": [],
    "specs": []
  },
  {
    "id": "132594",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Кварц димчастий 350мл, 1 шт VERSAILLES",
    "price": 142.0,
    "desc": "Артикул: VS-I350QD. Код 1С: 132594.",
    "images": [
      "assets/images/products/132594.jpg"
    ],
    "specs": []
  },
  {
    "id": "132571",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Кварц димчастий 1,1л, VERSAILLES",
    "price": 677.0,
    "desc": "Артикул: VS-P1100QD. Код 1С: 132571.",
    "images": [
      "assets/images/products/132571.jpg"
    ],
    "specs": []
  },
  {
    "id": "127289",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Кварц зелений 150мл, VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150QG . Код 1С: 127289.",
    "images": [
      "assets/images/products/127289.jpg"
    ],
    "specs": []
  },
  {
    "id": "127478",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Турмалін рожевий 150мл, 1 шт VERSAILLES",
    "price": 160.0,
    "desc": "Артикул: VS-C150TP . Код 1С: 127478.",
    "images": [
      "assets/images/products/127478.jpg"
    ],
    "specs": []
  },
  {
    "id": "127526",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Турмалін рожевий 350мл, 1 шт VERSAILLES",
    "price": 179.0,
    "desc": "Артикул: VS-W350TP . Код 1С: 127526.",
    "images": [
      "assets/images/products/127526.jpg"
    ],
    "specs": []
  },
  {
    "id": "127494",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Турмалін рожевий 410мл, 1 шт VERSAILLES",
    "price": 165.0,
    "desc": "Артикул: VS-H410TP . Код 1С: 127494.",
    "images": [
      "assets/images/products/127494.jpg"
    ],
    "specs": []
  },
  {
    "id": "127476",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Турмалін димчастий 150мл, 1 шт VERSAILLES",
    "price": 160.0,
    "desc": "Артикул: VS-C150TD . Код 1С: 127476.",
    "images": [
      "assets/images/products/127476.jpg"
    ],
    "specs": []
  },
  {
    "id": "127524",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Турмалін димчастий 350мл, 1 шт VERSAILLES",
    "price": 179.0,
    "desc": "Артикул: VS-W350TD . Код 1С: 127524.",
    "images": [
      "assets/images/products/127524.jpg"
    ],
    "specs": []
  },
  {
    "id": "127506",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Турмалін рожевий 260мл, 1 шт VERSAILLES",
    "price": 135.0,
    "desc": "Артикул: VS-T260TP . Код 1С: 127506.",
    "images": [
      "assets/images/products/127506.jpg"
    ],
    "specs": []
  },
  {
    "id": "132574",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Турмалін рожевий  1,1л, VERSAILLES",
    "price": 704.0,
    "desc": "Артикул: VS-P1100TP. Код 1С: 132574.",
    "images": [
      "assets/images/products/132574.jpg"
    ],
    "specs": []
  },
  {
    "id": "127492",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Турмалін димчастий 410мл, 1 шт VERSAILLES",
    "price": 165.0,
    "desc": "Артикул: VS-H410TD . Код 1С: 127492.",
    "images": [
      "assets/images/products/127492.jpg"
    ],
    "specs": []
  },
  {
    "id": "132600",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Турмалін димчастий 350мл, 1 шт VERSAILLES",
    "price": 149.0,
    "desc": "Артикул: VS-I350TD. Код 1С: 132600.",
    "images": [
      "assets/images/products/132600.jpg"
    ],
    "specs": []
  },
  {
    "id": "127512",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Топаз рожевий 300мл, 1 шт VERSAILLES",
    "price": 140.0,
    "desc": "Артикул: VS-W300TOP . Код 1С: 127512.",
    "images": [
      "assets/images/products/127512.jpg"
    ],
    "specs": []
  },
  {
    "id": "127504",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Турмалін димчастий 260мл, 1 шт VERSAILLES",
    "price": 135.0,
    "desc": "Артикул: VS-T260TD . Код 1С: 127504.",
    "images": [
      "assets/images/products/127504.jpg"
    ],
    "specs": []
  },
  {
    "id": "132576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Турмалін димчастий  1,1л, VERSAILLES",
    "price": 704.0,
    "desc": "Артикул: VS-P1100TD. Код 1С: 132576.",
    "images": [
      "assets/images/products/132576.jpg"
    ],
    "specs": []
  },
  {
    "id": "127488",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Топаз рожевий 380мл, 1 шт VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-H380TOP . Код 1С: 127488.",
    "images": [
      "assets/images/products/127488.jpg"
    ],
    "specs": []
  },
  {
    "id": "132582",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Опал зелений 150мл, VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150OG. Код 1С: 132582.",
    "images": [
      "assets/images/products/132582.jpg"
    ],
    "specs": []
  },
  {
    "id": "132588",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Опал зелений 310мл, 1 шт VERSAILLES",
    "price": 155.0,
    "desc": "Артикул: VS-W310OG. Код 1С: 132588.",
    "images": [
      "assets/images/products/132588.jpg"
    ],
    "specs": []
  },
  {
    "id": "132584",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для шампанського Опал рожевий 150мл, VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-C150OP. Код 1С: 132584.",
    "images": [
      "assets/images/products/132584.jpg"
    ],
    "specs": []
  },
  {
    "id": "132578",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Опал зелений 350мл, 1 шт VERSAILLES",
    "price": 128.0,
    "desc": "Артикул: VS-H340OG. Код 1С: 132578.",
    "images": [
      "assets/images/products/132578.jpg"
    ],
    "specs": []
  },
  {
    "id": "132586",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Опал зелений 240мл, 1 шт VERSAILLES",
    "price": 103.0,
    "desc": "Артикул: VS-T240OG. Код 1С: 132586.",
    "images": [
      "assets/images/products/132586.jpg"
    ],
    "specs": []
  },
  {
    "id": "127508",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Топаз рожевий 300мл, 1 шт VERSAILLES",
    "price": 110.0,
    "desc": "Артикул: VS-T300TOP . Код 1С: 127508.",
    "images": [
      "assets/images/products/127508.jpg"
    ],
    "specs": []
  },
  {
    "id": "132590",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Опал рожевий 350мл, VERSAILLES, 1 шт",
    "price": 155.0,
    "desc": "Артикул: VS-W310OP. Код 1С: 132590.",
    "images": [
      "assets/images/products/132590.jpg"
    ],
    "specs": []
  },
  {
    "id": "132580",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Опал рожевий 410мл, VERSAILLES, 1 шт",
    "price": 128.0,
    "desc": "Артикул: VS-H340OP. Код 1С: 132580.",
    "images": [
      "assets/images/products/132580.jpg"
    ],
    "specs": []
  },
  {
    "id": "148065",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського MISKET 180 мл, VERSAILLES 6 шт",
    "price": 524.0,
    "desc": "Артикул: VS-11180. Код 1С: 148065.",
    "images": [
      "assets/images/products/148065.jpg"
    ],
    "specs": []
  },
  {
    "id": "132602",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Опал рожевий 260мл, VERSAILLES, 1 шт",
    "price": 103.0,
    "desc": "Артикул: VS-T240OP. Код 1С: 132602.",
    "images": [
      "assets/images/products/132602.jpg"
    ],
    "specs": []
  },
  {
    "id": "148067",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина MISKET 340 мл, VERSAILLES 6 шт",
    "price": 539.0,
    "desc": "Артикул: VS-11340. Код 1С: 148067.",
    "images": [
      "assets/images/products/148067.jpg"
    ],
    "specs": []
  },
  {
    "id": "148063",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина MISKET 220 мл, VERSAILLES 6 шт",
    "price": 466.0,
    "desc": "Артикул: VS-11220. Код 1С: 148063.",
    "images": [
      "assets/images/products/148063.jpg"
    ],
    "specs": []
  },
  {
    "id": "148062",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок 280 мл, VERSAILLES 6 шт",
    "price": 349.0,
    "desc": "Артикул: VS-12280. Код 1С: 148062.",
    "images": [],
    "specs": []
  },
  {
    "id": "148068",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок високих ADORA 370 мл, VERSAILLES 6 шт",
    "price": 383.0,
    "desc": "Артикул: VS-12370. Код 1С: 148068.",
    "images": [],
    "specs": []
  },
  {
    "id": "148069",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок ADORA 80 мл, VERSAILLES 6 шт",
    "price": 274.0,
    "desc": "Артикул: VS-12080. Код 1С: 148069.",
    "images": [],
    "specs": []
  },
  {
    "id": "148070",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок високих ARAS 300 мл, VERSAILLES 6 шт",
    "price": 349.0,
    "desc": "Артикул: VS-13300. Код 1С: 148070.",
    "images": [],
    "specs": []
  },
  {
    "id": "148066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для лікеру MISKET 60 мл, VERSAILLES 6 шт",
    "price": 494.0,
    "desc": "Артикул: VS-11060. Код 1С: 148066.",
    "images": [
      "assets/images/products/148066.jpg"
    ],
    "specs": []
  },
  {
    "id": "148064",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для коньяку MISKET 370 мл, VERSAILLES 6 шт",
    "price": 582.0,
    "desc": "Артикул: VS-11370. Код 1С: 148064.",
    "images": [
      "assets/images/products/148064.jpg"
    ],
    "specs": []
  },
  {
    "id": "148071",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ARAS 290 мл, VERSAILLES 6 шт",
    "price": 435.0,
    "desc": "Артикул: VS-13290. Код 1С: 148071.",
    "images": [],
    "specs": []
  },
  {
    "id": "156226",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок Classic 55 мл, VERSAILLES 6 шт",
    "price": 132.0,
    "desc": "Артикул: VS-13155. Код 1С: 156226.",
    "images": [],
    "specs": []
  },
  {
    "id": "148072",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок ARAS 50 мл, VERSAILLES 6 шт",
    "price": 186.0,
    "desc": "Артикул: VS-13050. Код 1С: 148072.",
    "images": [
      "assets/images/products/148072.jpg"
    ],
    "specs": []
  },
  {
    "id": "156227",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок Crystal Drop 45 мл, VERSAILLES 6 шт",
    "price": 149.0,
    "desc": "Артикул: VS-13165. Код 1С: 156227.",
    "images": [],
    "specs": []
  },
  {
    "id": "148073",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок MISKET 30 мл, VERSAILLES 6 шт",
    "price": 186.0,
    "desc": "Артикул: VS-13030. Код 1С: 148073.",
    "images": [
      "assets/images/products/148073.jpg"
    ],
    "specs": []
  },
  {
    "id": "148074",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок 60 мл, VERSAILLES 6 шт",
    "price": 220.0,
    "desc": "Артикул: VS-13060. Код 1С: 148074.",
    "images": [
      "assets/images/products/148074.jpg"
    ],
    "specs": []
  },
  {
    "id": "156229",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір пивних бокалів Urban 470 мл, VERSAILLES 2 шт",
    "price": 194.0,
    "desc": "Артикул: VS-123470. Код 1С: 156229.",
    "images": [],
    "specs": []
  },
  {
    "id": "156228",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок Crystal Drop 50 мл, VERSAILLES 6 шт",
    "price": 186.0,
    "desc": "Артикул: VS-13150. Код 1С: 156228.",
    "images": [],
    "specs": []
  },
  {
    "id": "156230",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір пивних бокалів Urban 370 мл, VERSAILLES 2 шт",
    "price": 203.0,
    "desc": "Артикул: VS-123370. Код 1С: 156230.",
    "images": [],
    "specs": []
  },
  {
    "id": "156232",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір пивних бокалів Urban 570 мл, VERSAILLES 2 шт",
    "price": 217.0,
    "desc": "Артикул: VS-123570. Код 1С: 156232.",
    "images": [],
    "specs": []
  },
  {
    "id": "148040",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Texas 250 мл, VERSAILLES 4 шт",
    "price": 585.0,
    "desc": "Артикул: VSC-91250. Код 1С: 148040.",
    "images": [],
    "specs": []
  },
  {
    "id": "148041",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Texas 450 мл, VERSAILLES 4 шт",
    "price": 615.0,
    "desc": "Артикул: VSC-92450. Код 1С: 148041.",
    "images": [],
    "specs": []
  },
  {
    "id": "127490",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Висока склянка Топаз білий 380мл, 1 шт VERSAILLES",
    "price": 137.0,
    "desc": "Артикул: VS-H380TOW . Код 1С: 127490.",
    "images": [
      "assets/images/products/127490.jpg"
    ],
    "specs": []
  },
  {
    "id": "148042",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Texas 400 мл, VERSAILLES 4 шт",
    "price": 593.0,
    "desc": "Артикул: VSC-93400. Код 1С: 148042.",
    "images": [],
    "specs": []
  },
  {
    "id": "148043",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір високих склянок Texas 390 мл, VERSAILLES 4 шт",
    "price": 393.0,
    "desc": "Артикул: VSC-94390. Код 1С: 148043.",
    "images": [],
    "specs": []
  },
  {
    "id": "156225",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок Classic 45 мл, VERSAILLES 6 шт",
    "price": 131.0,
    "desc": "Артикул: VS-13145. Код 1С: 156225.",
    "images": [
      "assets/images/products/156225.jpg"
    ],
    "specs": []
  },
  {
    "id": "147413",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для червоного вина Los Angeles 650 мл, VERSAILLES 2 шт",
    "price": 492.0,
    "desc": "Артикул: VSC-72650. Код 1С: 147413.",
    "images": [],
    "specs": []
  },
  {
    "id": "148044",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Texas 370 мл, VERSAILLES 4 шт",
    "price": 372.0,
    "desc": "Артикул: VSC-95370. Код 1С: 148044.",
    "images": [],
    "specs": []
  },
  {
    "id": "147414",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для білого вина Los Angeles 500 мл, VERSAILLES 2 шт",
    "price": 502.0,
    "desc": "Артикул: VSC-73500. Код 1С: 147414.",
    "images": [],
    "specs": []
  },
  {
    "id": "156224",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чарок Slim 60 мл, VERSAILLES 6 шт",
    "price": 180.0,
    "desc": "Артикул: VS-13160. Код 1С: 156224.",
    "images": [
      "assets/images/products/156224.jpg"
    ],
    "specs": []
  },
  {
    "id": "147415",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для коктейлю Los Angeles 500 мл, VERSAILLES 2 шт",
    "price": 497.0,
    "desc": "Артикул: VSC-74500. Код 1С: 147415.",
    "images": [],
    "specs": []
  },
  {
    "id": "147412",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Los Angeles 310 мл, VERSAILLES 2 шт",
    "price": 463.0,
    "desc": "Артикул: VSC-71310. Код 1С: 147412.",
    "images": [],
    "specs": []
  },
  {
    "id": "147416",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір високих склянок Los Angeles 650 мл, VERSAILLES 2 шт",
    "price": 443.0,
    "desc": "Артикул: VSC-75650. Код 1С: 147416.",
    "images": [],
    "specs": []
  },
  {
    "id": "147417",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Los Angeles 550 мл, VERSAILLES 2 шт",
    "price": 423.0,
    "desc": "Артикул: VSC-76550. Код 1С: 147417.",
    "images": [],
    "specs": []
  },
  {
    "id": "136780",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Chicago 300 мл, VERSAILLES 2 шт",
    "price": 658.0,
    "desc": "Артикул: VSC-23300. Код 1С: 136780.",
    "images": [],
    "specs": []
  },
  {
    "id": "136775",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина New York 500 мл, VERSAILLES 2 шт",
    "price": 726.0,
    "desc": "Артикул: VSC-12500. Код 1С: 136775.",
    "images": [
      "assets/images/products/136775.jpg"
    ],
    "specs": []
  },
  {
    "id": "136779",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Chicago 150 мл, VERSAILLES 2 шт",
    "price": 614.0,
    "desc": "Артикул: VSC-22150. Код 1С: 136779.",
    "images": [
      "assets/images/products/136779.jpg"
    ],
    "specs": []
  },
  {
    "id": "136782",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір високих склянок Chicago 450 мл, VERSAILLES 2 шт",
    "price": 612.0,
    "desc": "Артикул: VSC-25450. Код 1С: 136782.",
    "images": [],
    "specs": []
  },
  {
    "id": "136781",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для коктейлю Chicago 300 мл, VERSAILLES 2 шт",
    "price": 711.0,
    "desc": "Артикул: VSC-24300. Код 1С: 136781.",
    "images": [
      "assets/images/products/136781.jpg"
    ],
    "specs": []
  },
  {
    "id": "136783",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Chicago 300 мл, VERSAILLES 2 шт",
    "price": 597.0,
    "desc": "Артикул: VSC-26300. Код 1С: 136783.",
    "images": [],
    "specs": []
  },
  {
    "id": "136774",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського New York 150 мл, VERSAILLES 2 шт",
    "price": 687.0,
    "desc": "Артикул: VSC-11150. Код 1С: 136774.",
    "images": [
      "assets/images/products/136774.jpg"
    ],
    "specs": []
  },
  {
    "id": "136795",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Boston 160 мл, VERSAILLES 2 шт",
    "price": 560.0,
    "desc": "Артикул: VSC-41160. Код 1С: 136795.",
    "images": [
      "assets/images/products/136795.jpg"
    ],
    "specs": []
  },
  {
    "id": "136796",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Boston 300 мл, VERSAILLES 2 шт",
    "price": 521.0,
    "desc": "Артикул: VSC-42300. Код 1С: 136796.",
    "images": [
      "assets/images/products/136796.jpg"
    ],
    "specs": []
  },
  {
    "id": "136797",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для коктейлю Boston 300 мл, VERSAILLES 2 шт",
    "price": 660.0,
    "desc": "Артикул: VSC-43300. Код 1С: 136797.",
    "images": [
      "assets/images/products/136797.jpg"
    ],
    "specs": []
  },
  {
    "id": "127514",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Келих для вина Топаз білий 300мл, 1 шт VERSAILLES",
    "price": 140.0,
    "desc": "Артикул: VS-W300TOW . Код 1С: 127514.",
    "images": [
      "assets/images/products/127514.jpg"
    ],
    "specs": []
  },
  {
    "id": "143781",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Dallas 300 мл, VERSAILLES 2 шт",
    "price": 549.0,
    "desc": "Артикул: VSC-61300. Код 1С: 143781.",
    "images": [],
    "specs": []
  },
  {
    "id": "143782",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Dallas 500 мл, VERSAILLES 2 шт",
    "price": 597.0,
    "desc": "Артикул: VSC-62500. Код 1С: 143782.",
    "images": [],
    "specs": []
  },
  {
    "id": "147418",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Baltimore 600 мл, VERSAILLES 2 шт",
    "price": 501.0,
    "desc": "Артикул: VSC-81600. Код 1С: 147418.",
    "images": [],
    "specs": []
  },
  {
    "id": "127510",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Топаз білий 300мл, 1 шт VERSAILLES",
    "price": 110.0,
    "desc": "Артикул: VS-T300TOW . Код 1С: 127510.",
    "images": [
      "assets/images/products/127510.jpg"
    ],
    "specs": []
  },
  {
    "id": "127664",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Beluga 1L, чорний VITTORA",
    "price": 173.0,
    "desc": "Артикул: VT-111028. Код 1С: 127664.",
    "images": [
      "assets/images/products/127664.jpg"
    ],
    "specs": []
  },
  {
    "id": "127666",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Beluga 1L, бежевий VITTORA",
    "price": 173.0,
    "desc": "Артикул:  VT-111028. Код 1С: 127666.",
    "images": [
      "assets/images/products/127666.jpg"
    ],
    "specs": []
  },
  {
    "id": "126021",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Beluga 1L, рожевий VITTORA",
    "price": 180.0,
    "desc": "Артикул: VT-111028. Код 1С: 126021.",
    "images": [
      "assets/images/products/126021.jpg"
    ],
    "specs": []
  },
  {
    "id": "133111",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Bonjour VITTORA, 1,2L",
    "price": 572.0,
    "desc": "Артикул: VT-5901-1200. Код 1С: 133111.",
    "images": [
      "assets/images/products/133111.jpg"
    ],
    "specs": []
  },
  {
    "id": "132598",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка Турмалін рожевий 350мл, 1 шт VERSAILLES",
    "price": 149.0,
    "desc": "Артикул: VS-I350TP. Код 1С: 132598.",
    "images": [
      "assets/images/products/132598.jpg"
    ],
    "specs": []
  },
  {
    "id": "133112",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Salut VITTORA, 1,8L",
    "price": 695.0,
    "desc": "Артикул: VT-5902-1800. Код 1С: 133112.",
    "images": [
      "assets/images/products/133112.jpg"
    ],
    "specs": []
  },
  {
    "id": "135073",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Ciao VITTORA, 1,8L",
    "price": 814.0,
    "desc": "Артикул: VT-5903-1800. Код 1С: 135073.",
    "images": [
      "assets/images/products/135073.jpg"
    ],
    "specs": []
  },
  {
    "id": "136798",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір для віскі Madrid, 5 предметів, VERSAILLES 750",
    "price": 1750.0,
    "desc": "Артикул: VSC-3750. Код 1С: 136798.",
    "images": [
      "assets/images/products/136798.jpg"
    ],
    "specs": []
  },
  {
    "id": "156576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Aqua VITTORA, 1,6L",
    "price": 415.0,
    "desc": "Артикул: VT-5910-1600. Код 1С: 156576.",
    "images": [],
    "specs": []
  },
  {
    "id": "155482",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Гербарій з подвійними стінками VITTORA, 0,6L",
    "price": 556.0,
    "desc": "Артикул: VT-5907-600. Код 1С: 155482.",
    "images": [],
    "specs": []
  },
  {
    "id": "156577",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Aqua VITTORA, 1,5L",
    "price": 415.0,
    "desc": "Артикул: VT-5910-1500. Код 1С: 156577.",
    "images": [],
    "specs": []
  },
  {
    "id": "155485",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Квіткова блакить з подвійними стінками VITTORA, 0,6L",
    "price": 556.0,
    "desc": "Артикул: VT-5908-600. Код 1С: 155485.",
    "images": [],
    "specs": []
  },
  {
    "id": "155486",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик Фіолетове диво з подвійними стінками VITTORA, 0,6L",
    "price": 556.0,
    "desc": "Артикул: VT-5909-600. Код 1С: 155486.",
    "images": [],
    "specs": []
  },
  {
    "id": "136778",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок New York 350 мл, VERSAILLES 2 шт",
    "price": 627.0,
    "desc": "Артикул: VSC-14350. Код 1С: 136778.",
    "images": [
      "assets/images/products/136778.jpg"
    ],
    "specs": []
  },
  {
    "id": "136784",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для шампанського Atlantis 180 мл, VERSAILLES 2 шт",
    "price": 643.0,
    "desc": "Артикул: VSC-51180. Код 1С: 136784.",
    "images": [
      "assets/images/products/136784.jpg"
    ],
    "specs": []
  },
  {
    "id": "136776",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір високих склянок New York 450 мл, VERSAILLES 2 шт",
    "price": 636.0,
    "desc": "Артикул: VSC-13450. Код 1С: 136776.",
    "images": [
      "assets/images/products/136776.jpg"
    ],
    "specs": []
  },
  {
    "id": "135074",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Hola VITTORA, 1,5L",
    "price": 670.0,
    "desc": "Артикул: VT-5904-1500. Код 1С: 135074.",
    "images": [
      "assets/images/products/135074.jpg"
    ],
    "specs": []
  },
  {
    "id": "111178",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою 1300 мл VITTORA",
    "price": 272.0,
    "desc": "Артикул: VT-7113. Код 1С: 111178.",
    "images": [
      "assets/images/products/111178.jpg"
    ],
    "specs": []
  },
  {
    "id": "111177",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою 1100 мл VITTORA",
    "price": 262.0,
    "desc": "Артикул: VT-7111. Код 1С: 111177.",
    "images": [
      "assets/images/products/111177.jpg"
    ],
    "specs": []
  },
  {
    "id": "136786",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір келихів для вина Atlantis 550 мл, VERSAILLES 2 шт",
    "price": 697.0,
    "desc": "Артикул: VSC-52550. Код 1С: 136786.",
    "images": [
      "assets/images/products/136786.jpg"
    ],
    "specs": []
  },
  {
    "id": "111176",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою 700 мл VITTORA",
    "price": 245.0,
    "desc": "Артикул: VT-7107. Код 1С: 111176.",
    "images": [
      "assets/images/products/111176.jpg"
    ],
    "specs": []
  },
  {
    "id": "111179",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з нержавіючою кришкою 500 мл VITTORA",
    "price": 248.0,
    "desc": "Артикул: VT-7205. Код 1С: 111179.",
    "images": [
      "assets/images/products/111179.jpg"
    ],
    "specs": []
  },
  {
    "id": "147380",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Brook 1,7L VITTORA",
    "price": 360.0,
    "desc": "Артикул: VT-5906-1700. Код 1С: 147380.",
    "images": [
      "assets/images/products/147380.jpg"
    ],
    "specs": []
  },
  {
    "id": "111180",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з нержавіючою кришкою 700 мл VITTORA",
    "price": 258.0,
    "desc": "Артикул: VT-7207. Код 1С: 111180.",
    "images": [
      "assets/images/products/111180.jpg"
    ],
    "specs": []
  },
  {
    "id": "111182",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з нержавіючою кришкою 1300 мл VITTORA",
    "price": 286.0,
    "desc": "Артикул: VT-7213. Код 1С: 111182.",
    "images": [
      "assets/images/products/111182.jpg"
    ],
    "specs": []
  },
  {
    "id": "111175",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою 500 мл VITTORA",
    "price": 238.0,
    "desc": "Артикул: VT-7105. Код 1С: 111175.",
    "images": [
      "assets/images/products/111175.jpg"
    ],
    "specs": []
  },
  {
    "id": "124990",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Ємність скляна з бугельним замком 450 мл VITTORA",
    "price": 254.0,
    "desc": "Артикул: VT-7445. Код 1С: 124990.",
    "images": [
      "assets/images/products/124990.jpg"
    ],
    "specs": []
  },
  {
    "id": "124991",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Ємність скляна з бугельним замком 750 мл VITTORA",
    "price": 275.0,
    "desc": "Артикул: VT-7475. Код 1С: 124991.",
    "images": [
      "assets/images/products/124991.jpg"
    ],
    "specs": []
  },
  {
    "id": "124992",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Ємність скляна з бугельним замком 1000 мл VITTORA",
    "price": 292.0,
    "desc": "Артикул: VT-7410. Код 1С: 124992.",
    "images": [
      "assets/images/products/124992.jpg"
    ],
    "specs": []
  },
  {
    "id": "135508",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (прямокутна) Vittora, 2500 мл (29cм Spaghetti)",
    "price": 385.0,
    "desc": "Артикул: VT-7325. Код 1С: 135508.",
    "images": [
      "assets/images/products/135508.jpg"
    ],
    "specs": []
  },
  {
    "id": "111181",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з нержавіючою кришкою 1100 мл VITTORA",
    "price": 275.0,
    "desc": "Артикул: VT-7211. Код 1С: 111181.",
    "images": [
      "assets/images/products/111181.jpg"
    ],
    "specs": []
  },
  {
    "id": "124993",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Ємність скляна з бугельним замком 1500 мл VITTORA",
    "price": 333.0,
    "desc": "Артикул: VT-7415. Код 1С: 124993.",
    "images": [
      "assets/images/products/124993.jpg"
    ],
    "specs": []
  },
  {
    "id": "147379",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Глечик скляний Amber Brook 1,7L VITTORA",
    "price": 360.0,
    "desc": "Артикул: VT-5905-1700. Код 1С: 147379.",
    "images": [
      "assets/images/products/147379.jpg"
    ],
    "specs": []
  },
  {
    "id": "124986",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (прямокутна) 600 мл VITTORA",
    "price": 314.0,
    "desc": "Артикул: VT-7306. Код 1С: 124986.",
    "images": [
      "assets/images/products/124986.jpg"
    ],
    "specs": []
  },
  {
    "id": "136787",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Atlantis 500 мл, VERSAILLES 2 шт",
    "price": 597.0,
    "desc": "Артикул: VSC-53500. Код 1С: 136787.",
    "images": [
      "assets/images/products/136787.jpg"
    ],
    "specs": []
  },
  {
    "id": "124987",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (прямокутна) 800 мл VITTORA",
    "price": 328.0,
    "desc": "Артикул: VT-7308. Код 1С: 124987.",
    "images": [
      "assets/images/products/124987.jpg"
    ],
    "specs": []
  },
  {
    "id": "124988",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (прямокутна) 1100 мл VITTORA",
    "price": 352.0,
    "desc": "Артикул: VT-7311. Код 1С: 124988.",
    "images": [
      "assets/images/products/124988.jpg"
    ],
    "specs": []
  },
  {
    "id": "135492",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (кругла) Vittora, 500 мл",
    "price": 216.0,
    "desc": "Артикул: VT-8105. Код 1С: 135492.",
    "images": [
      "assets/images/products/135492.jpg"
    ],
    "specs": []
  },
  {
    "id": "135507",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (прямокутна) Vittora, 1500 мл",
    "price": 313.0,
    "desc": "Артикул: VT-7815. Код 1С: 135507.",
    "images": [
      "assets/images/products/135507.jpg"
    ],
    "specs": []
  },
  {
    "id": "135510",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (трапеція) Vittora, 800 мл",
    "price": 342.0,
    "desc": "Артикул: VT-7908. Код 1С: 135510.",
    "images": [
      "assets/images/products/135510.jpg"
    ],
    "specs": []
  },
  {
    "id": "135493",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (кругла) Vittora, 700 мл",
    "price": 230.0,
    "desc": "Артикул: VT-8107. Код 1С: 135493.",
    "images": [
      "assets/images/products/135493.jpg"
    ],
    "specs": []
  },
  {
    "id": "135505",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (прямокутна) Vittora, 800 мл",
    "price": 265.0,
    "desc": "Артикул: VT-7808. Код 1С: 135505.",
    "images": [
      "assets/images/products/135505.jpg"
    ],
    "specs": []
  },
  {
    "id": "135509",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (трапеція) Vittora, 500 мл",
    "price": 231.0,
    "desc": "Артикул: VT-7905. Код 1С: 135509.",
    "images": [
      "assets/images/products/135509.jpg"
    ],
    "specs": []
  },
  {
    "id": "135511",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (трапеція) Vittora, 1000 мл",
    "price": 394.0,
    "desc": "Артикул: VT-7910. Код 1С: 135511.",
    "images": [
      "assets/images/products/135511.jpg"
    ],
    "specs": []
  },
  {
    "id": "135494",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (кругла) Vittora, 1100 мл",
    "price": 247.0,
    "desc": "Артикул: VT-8111. Код 1С: 135494.",
    "images": [
      "assets/images/products/135494.jpg"
    ],
    "specs": []
  },
  {
    "id": "135497",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла смугаста) Vittora, 700 мл",
    "price": 282.0,
    "desc": "Артикул: VT-7607. Код 1С: 135497.",
    "images": [
      "assets/images/products/135497.jpg"
    ],
    "specs": []
  },
  {
    "id": "135498",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла смугаста) Vittora, 1100 мл",
    "price": 299.0,
    "desc": "Артикул: VT-7611. Код 1С: 135498.",
    "images": [
      "assets/images/products/135498.jpg"
    ],
    "specs": []
  },
  {
    "id": "135496",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла смугаста) Vittora, 500 мл",
    "price": 264.0,
    "desc": "Артикул: VT-7605. Код 1С: 135496.",
    "images": [
      "assets/images/products/135496.jpg"
    ],
    "specs": []
  },
  {
    "id": "135499",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла смугаста) Vittora, 1300 мл",
    "price": 317.0,
    "desc": "Артикул: VT-7613. Код 1С: 135499.",
    "images": [
      "assets/images/products/135499.jpg"
    ],
    "specs": []
  },
  {
    "id": "135506",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (прямокутна) Vittora, 1100 мл",
    "price": 299.0,
    "desc": "Артикул: VT-7811. Код 1С: 135506.",
    "images": [
      "assets/images/products/135506.jpg"
    ],
    "specs": []
  },
  {
    "id": "135500",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з вакуумною скляною кришкою (кругла) Vittora, 500 мл",
    "price": 366.0,
    "desc": "Артикул: VT-7705. Код 1С: 135500.",
    "images": [
      "assets/images/products/135500.jpg"
    ],
    "specs": []
  },
  {
    "id": "135501",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з вакуумною скляною кришкою (кругла) Vittora, 700 мл",
    "price": 381.0,
    "desc": "Артикул: VT-7707. Код 1С: 135501.",
    "images": [
      "assets/images/products/135501.jpg"
    ],
    "specs": []
  },
  {
    "id": "124989",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (прямокутна) 1500 мл VITTORA",
    "price": 369.0,
    "desc": "Артикул: VT-7315. Код 1С: 124989.",
    "images": [
      "assets/images/products/124989.jpg"
    ],
    "specs": []
  },
  {
    "id": "135503",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з вакуумною скляною кришкою (кругла) Vittora, 1300 мл",
    "price": 411.0,
    "desc": "Артикул: VT-7713. Код 1С: 135503.",
    "images": [
      "assets/images/products/135503.jpg"
    ],
    "specs": []
  },
  {
    "id": "135512",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла) бурштин Vittora, 500 мл",
    "price": 254.0,
    "desc": "Артикул: VT-8005. Код 1С: 135512.",
    "images": [
      "assets/images/products/135512.jpg"
    ],
    "specs": []
  },
  {
    "id": "135513",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла) бурштин Vittora, 800 мл",
    "price": 270.0,
    "desc": "Артикул: VT-8008. Код 1С: 135513.",
    "images": [
      "assets/images/products/135513.jpg"
    ],
    "specs": []
  },
  {
    "id": "135514",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла) бурштин Vittora, 1000 мл",
    "price": 284.0,
    "desc": "Артикул: VT-8010. Код 1С: 135514.",
    "images": [
      "assets/images/products/135514.jpg"
    ],
    "specs": []
  },
  {
    "id": "135495",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (кругла) Vittora, 1300 мл",
    "price": 263.0,
    "desc": "Артикул: VT-8113. Код 1С: 135495.",
    "images": [
      "assets/images/products/135495.jpg"
    ],
    "specs": []
  },
  {
    "id": "135502",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з вакуумною скляною кришкою (кругла) Vittora, 1100 мл",
    "price": 397.0,
    "desc": "Артикул: VT-7711. Код 1С: 135502.",
    "images": [
      "assets/images/products/135502.jpg"
    ],
    "specs": []
  },
  {
    "id": "135515",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою (кругла) бурштин Vittora, 1200 мл",
    "price": 309.0,
    "desc": "Артикул: VT-8012. Код 1С: 135515.",
    "images": [
      "assets/images/products/135515.jpg"
    ],
    "specs": []
  },
  {
    "id": "136101",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою та ложкою Vittora, 470мл",
    "price": 404.0,
    "desc": "Артикул: VT-9247. Код 1С: 136101.",
    "images": [
      "assets/images/products/136101.jpg"
    ],
    "specs": []
  },
  {
    "id": "135504",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з пластиковою кришкою (прямокутна) Vittora, 600 мл",
    "price": 253.0,
    "desc": "Артикул: VT-7806. Код 1С: 135504.",
    "images": [
      "assets/images/products/135504.jpg"
    ],
    "specs": []
  },
  {
    "id": "136102",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна з дерев'яною кришкою та ложкою Vittora, 730мл",
    "price": 434.0,
    "desc": "Артикул: VT-9273. Код 1С: 136102.",
    "images": [
      "assets/images/products/136102.jpg"
    ],
    "specs": []
  },
  {
    "id": "136105",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою Vittora, 100мл",
    "price": 73.0,
    "desc": "Артикул: VT-9010. Код 1С: 136105.",
    "images": [
      "assets/images/products/136105.jpg"
    ],
    "specs": []
  },
  {
    "id": "136104",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою Vittora, 120мл",
    "price": 73.0,
    "desc": "Артикул: VT-9012. Код 1С: 136104.",
    "images": [
      "assets/images/products/136104.jpg"
    ],
    "specs": []
  },
  {
    "id": "147027",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій квадратна з дерев'яною кришкою Vittora, 230мл",
    "price": 133.0,
    "desc": "Артикул: VT-9034-230. Код 1С: 147027.",
    "images": [],
    "specs": []
  },
  {
    "id": "147022",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій кругла з дерев'яною кришкою Vittora, 110мл",
    "price": 87.0,
    "desc": "Артикул: VT-9039-110. Код 1С: 147022.",
    "images": [
      "assets/images/products/147022.jpg"
    ],
    "specs": []
  },
  {
    "id": "147025",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій кругла з дерев'яною кришкою Vittora, 120мл      (по факту-180 мл)",
    "price": 123.0,
    "desc": "Артикул: VT-9036-120. Код 1С: 147025.",
    "images": [
      "assets/images/products/147025.jpg"
    ],
    "specs": []
  },
  {
    "id": "147026",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій квадратна  з дерев'яною кришкою Vittora, 170мл",
    "price": 125.0,
    "desc": "Артикул: VT-9035-170. Код 1С: 147026.",
    "images": [
      "assets/images/products/147026.jpg"
    ],
    "specs": []
  },
  {
    "id": "147023",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій квадратна з дерев'яною кришкою Vittora, 150мл",
    "price": 97.0,
    "desc": "Артикул: VT-9038-150. Код 1С: 147023.",
    "images": [
      "assets/images/products/147023.jpg"
    ],
    "specs": []
  },
  {
    "id": "147019",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з жерстяною кришкою Vittora, 150мл               (По факту це Ємність скляна для спецій з жерстяною кришкою Vittora, 200мл)",
    "price": 40.0,
    "desc": "Артикул: VT-9030-150. Код 1С: 147019.",
    "images": [
      "assets/images/products/147019.jpg"
    ],
    "specs": []
  },
  {
    "id": "147028",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою + ручка з мотузки Vittora, 190мл",
    "price": 107.0,
    "desc": "Артикул: VT-9033-190. Код 1С: 147028.",
    "images": [
      "assets/images/products/147028.jpg"
    ],
    "specs": []
  },
  {
    "id": "147024",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій кругла з дерев'яною кришкою Vittora, 180мл        (по факту-120 мл)",
    "price": 103.0,
    "desc": "Артикул: VT-9037-180. Код 1С: 147024.",
    "images": [
      "assets/images/products/147024.jpg"
    ],
    "specs": []
  },
  {
    "id": "136106",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для спецій Vittora, 12шт по 120мл",
    "price": 2065.0,
    "desc": "Артикул: VT-8902-12. Код 1С: 136106.",
    "images": [
      "assets/images/products/136106.jpg"
    ],
    "specs": []
  },
  {
    "id": "136094",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для спецій Vittora, 8шт по 230мл",
    "price": 1827.0,
    "desc": "Артикул: VT-8903-8. Код 1С: 136094.",
    "images": [
      "assets/images/products/136094.jpg"
    ],
    "specs": []
  },
  {
    "id": "142650",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою Vittora, 200мл",
    "price": 125.0,
    "desc": "Артикул: VT-9020. Код 1С: 142650.",
    "images": [
      "assets/images/products/142650.jpg"
    ],
    "specs": []
  },
  {
    "id": "142651",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою Vittora, 250мл",
    "price": 92.0,
    "desc": "Артикул: VT-9025. Код 1С: 142651.",
    "images": [
      "assets/images/products/142651.jpg"
    ],
    "specs": []
  },
  {
    "id": "136107",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для спецій Vittora, 4шт по 250мл",
    "price": 981.0,
    "desc": "Артикул: VT-8901-4. Код 1С: 136107.",
    "images": [
      "assets/images/products/136107.jpg"
    ],
    "specs": []
  },
  {
    "id": "147019",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з жерстяною кришкою Vittora, 150мл",
    "price": 40.0,
    "desc": "Артикул: VT-9030-150. Код 1С: 147019.",
    "images": [
      "assets/images/products/147019.jpg"
    ],
    "specs": []
  },
  {
    "id": "147030",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з жерстяною кришкою Vittora, 200мл           (По факту це Ємність скляна для спецій з віконною кришкою Vittora, 190мл )",
    "price": 46.0,
    "desc": "Артикул: VT-9031-200. Код 1С: 147030.",
    "images": [
      "assets/images/products/147030.jpg"
    ],
    "specs": []
  },
  {
    "id": "147029",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з віконною кришкою Vittora, 190мл             (По факту це Ємність скляна для спецій з жерстяною кришкою Vittora, 150мл )",
    "price": 46.0,
    "desc": "Артикул: VT-9032-190. Код 1С: 147029.",
    "images": [
      "assets/images/products/147029.jpg"
    ],
    "specs": []
  },
  {
    "id": "135483",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний VITTORA, 630 мл",
    "price": 216.0,
    "desc": "Артикул: VT-8363. Код 1С: 135483.",
    "images": [
      "assets/images/products/135483.jpg"
    ],
    "specs": []
  },
  {
    "id": "147020",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для спецій Vittora, 12шт по 100мл",
    "price": 1560.0,
    "desc": "Артикул: VT-8905-12. Код 1С: 147020.",
    "images": [
      "assets/images/products/147020.jpg"
    ],
    "specs": []
  },
  {
    "id": "147021",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з віконною кришкою Vittora, 220мл",
    "price": 159.0,
    "desc": "Артикул: VT-9040-220. Код 1С: 147021.",
    "images": [
      "assets/images/products/147021.jpg"
    ],
    "specs": []
  },
  {
    "id": "136093",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для спецій Vittora, 8шт по 250мл",
    "price": 1549.0,
    "desc": "Артикул: VT-8904-8. Код 1С: 136093.",
    "images": [
      "assets/images/products/136093.jpg"
    ],
    "specs": []
  },
  {
    "id": "135484",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний VITTORA, 1040 мл",
    "price": 266.0,
    "desc": "Артикул: VT-8310. Код 1С: 135484.",
    "images": [
      "assets/images/products/135484.jpg"
    ],
    "specs": []
  },
  {
    "id": "135485",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний VITTORA, 1500 мл",
    "price": 352.0,
    "desc": "Артикул: VT-8315. Код 1С: 135485.",
    "images": [
      "assets/images/products/135485.jpg"
    ],
    "specs": []
  },
  {
    "id": "135486",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з дерев'яною кришкою, прямокутний VITTORA, 370 мл",
    "price": 258.0,
    "desc": "Артикул: VT-8437. Код 1С: 135486.",
    "images": [
      "assets/images/products/135486.jpg"
    ],
    "specs": []
  },
  {
    "id": "135487",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з дерев'яною кришкою, прямокутний VITTORA, 630 мл",
    "price": 331.0,
    "desc": "Артикул: VT-8463. Код 1С: 135487.",
    "images": [
      "assets/images/products/135487.jpg"
    ],
    "specs": []
  },
  {
    "id": "135488",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з дерев'яною кришкою, прямокутний VITTORA, 1040 мл",
    "price": 446.0,
    "desc": "Артикул: VT-8410. Код 1С: 135488.",
    "images": [
      "assets/images/products/135488.jpg"
    ],
    "specs": []
  },
  {
    "id": "135489",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з дерев'яною кришкою, прямокутний VITTORA, 1500 мл",
    "price": 559.0,
    "desc": "Артикул: VT-8415. Код 1С: 135489.",
    "images": [
      "assets/images/products/135489.jpg"
    ],
    "specs": []
  },
  {
    "id": "142652",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність скляна для спецій з дерев'яною кришкою Vittora, 220мл",
    "price": 77.0,
    "desc": "Артикул: VT-9022. Код 1С: 142652.",
    "images": [
      "assets/images/products/142652.jpg"
    ],
    "specs": []
  },
  {
    "id": "127035",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, квадратний 310 мл VITTORA",
    "price": 159.0,
    "desc": "Артикул: VT-7531. Код 1С: 127035.",
    "images": [
      "assets/images/products/127035.jpg"
    ],
    "specs": []
  },
  {
    "id": "127039",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, квадратний 530 мл VITTORA",
    "price": 197.0,
    "desc": "Артикул: VT-7553. Код 1С: 127039.",
    "images": [
      "assets/images/products/127039.jpg"
    ],
    "specs": []
  },
  {
    "id": "127050",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, квадратний 800 мл VITTORA",
    "price": 244.0,
    "desc": "Артикул: VT-7580. Код 1С: 127050.",
    "images": [
      "assets/images/products/127050.jpg"
    ],
    "specs": []
  },
  {
    "id": "135478",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з куточком VITTORA, 370 мл",
    "price": 157.0,
    "desc": "Артикул: VT-8237. Код 1С: 135478.",
    "images": [
      "assets/images/products/135478.jpg"
    ],
    "specs": []
  },
  {
    "id": "135479",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з куточком VITTORA, 630 мл",
    "price": 226.0,
    "desc": "Артикул: VT-8263. Код 1С: 135479.",
    "images": [
      "assets/images/products/135479.jpg"
    ],
    "specs": []
  },
  {
    "id": "135482",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний VITTORA, 370 мл",
    "price": 147.0,
    "desc": "Артикул: VT-8337. Код 1С: 135482.",
    "images": [
      "assets/images/products/135482.jpg"
    ],
    "specs": []
  },
  {
    "id": "135480",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з куточком VITTORA, 1040 мл",
    "price": 275.0,
    "desc": "Артикул: VT-8210. Код 1С: 135480.",
    "images": [
      "assets/images/products/135480.jpg"
    ],
    "specs": []
  },
  {
    "id": "136103",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір ємностей для олії та оцту Vittora, 2шт по 250мл",
    "price": 601.0,
    "desc": "Артикул: VT-9125. Код 1С: 136103.",
    "images": [
      "assets/images/products/136103.jpg"
    ],
    "specs": []
  },
  {
    "id": "135481",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з куточком VITTORA, 1500 мл",
    "price": 358.0,
    "desc": "Артикул: VT-8215. Код 1С: 135481.",
    "images": [
      "assets/images/products/135481.jpg"
    ],
    "specs": []
  },
  {
    "id": "127053",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний 630 мл VITTORA",
    "price": 225.0,
    "desc": "Артикул: VT-7663. Код 1С: 127053.",
    "images": [
      "assets/images/products/127053.jpg"
    ],
    "specs": []
  },
  {
    "id": "127052",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний 370 мл VITTORA",
    "price": 172.0,
    "desc": "Артикул: VT-7637. Код 1С: 127052.",
    "images": [
      "assets/images/products/127052.jpg"
    ],
    "specs": []
  },
  {
    "id": "127049",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний 1040 мл VITTORA",
    "price": 309.0,
    "desc": "Артикул: VT-7610. Код 1С: 127049.",
    "images": [
      "assets/images/products/127049.jpg"
    ],
    "specs": []
  },
  {
    "id": "127048",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний 1500 мл VITTORA",
    "price": 396.0,
    "desc": "Артикул: VT-7615. Код 1С: 127048.",
    "images": [
      "assets/images/products/127048.jpg"
    ],
    "specs": []
  },
  {
    "id": "127051",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, квадратний 1100 мл VITTORA",
    "price": 335.0,
    "desc": "Артикул: VT-7511. Код 1С: 127051.",
    "images": [
      "assets/images/products/127051.jpg"
    ],
    "specs": []
  },
  {
    "id": "127042",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний Бурштин 630 мл VITTORA",
    "price": 303.0,
    "desc": "Артикул: VT-7863. Код 1С: 127042.",
    "images": [
      "assets/images/products/127042.jpg"
    ],
    "specs": []
  },
  {
    "id": "127043",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний Бурштин 370 мл VITTORA",
    "price": 219.0,
    "desc": "Артикул: VT-7837. Код 1С: 127043.",
    "images": [
      "assets/images/products/127043.jpg"
    ],
    "specs": []
  },
  {
    "id": "135687",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з прозорою пластиковою кришкою, прямокутний VITTORA, 630 мл",
    "price": 346.0,
    "desc": "Артикул: VT-8763. Код 1С: 135687.",
    "images": [
      "assets/images/products/135687.jpg"
    ],
    "specs": []
  },
  {
    "id": "135686",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з скляною дерев'яною кришкою, прямокутний VITTORA, 1380 мл",
    "price": 476.0,
    "desc": "Артикул: VT-8613. Код 1С: 135686.",
    "images": [
      "assets/images/products/135686.jpg"
    ],
    "specs": []
  },
  {
    "id": "127041",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний Бурштин 1040 мл VITTORA",
    "price": 404.0,
    "desc": "Артикул: VT-7810. Код 1С: 127041.",
    "images": [
      "assets/images/products/127041.jpg"
    ],
    "specs": []
  },
  {
    "id": "135689",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з прозорою пластиковою кришкою, прямокутний VITTORA, 1040 мл",
    "price": 421.0,
    "desc": "Артикул: VT-8710. Код 1С: 135689.",
    "images": [
      "assets/images/products/135689.jpg"
    ],
    "specs": []
  },
  {
    "id": "135688",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з прозорою пластиковою кришкою, прямокутний VITTORA, 1500 мл",
    "price": 529.0,
    "desc": "Артикул: VT-8715. Код 1С: 135688.",
    "images": [
      "assets/images/products/135688.jpg"
    ],
    "specs": []
  },
  {
    "id": "135490",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з скляною силіконовою кришкою, прямокутний вакуум VITTORA, 1000мл",
    "price": 434.0,
    "desc": "Артикул: VT-8510. Код 1С: 135490.",
    "images": [
      "assets/images/products/135490.jpg"
    ],
    "specs": []
  },
  {
    "id": "135491",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з скляною силіконовою кришкою, прямокутний вакуум VITTORA, 1600мл",
    "price": 519.0,
    "desc": "Артикул: VT-8516. Код 1С: 135491.",
    "images": [
      "assets/images/products/135491.jpg"
    ],
    "specs": []
  },
  {
    "id": "135685",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з скляною дерев'яною кришкою, прямокутний VITTORA, 800 мл",
    "price": 370.0,
    "desc": "Артикул: VT-8680. Код 1С: 135685.",
    "images": [
      "assets/images/products/135685.jpg"
    ],
    "specs": []
  },
  {
    "id": "135691",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з силіконовою кришкою, прямокутний VITTORA,1400 мл",
    "price": 458.0,
    "desc": "Артикул: VT-8814. Код 1С: 135691.",
    "images": [],
    "specs": []
  },
  {
    "id": "127040",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний с пластиковою кришкою, прямокутний + прибори 630 мл VITTORA",
    "price": 454.0,
    "desc": "Артикул: VT-7963. Код 1С: 127040.",
    "images": [
      "assets/images/products/127040.jpg"
    ],
    "specs": []
  },
  {
    "id": "135690",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з силіконовою кришкою, прямокутний VITTORA,600 мл",
    "price": 297.0,
    "desc": "Артикул: VT-8860. Код 1С: 135690.",
    "images": [],
    "specs": []
  },
  {
    "id": "147453",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Аляска 0.5л, VITTORA",
    "price": 87.0,
    "desc": "Артикул: VT-3111. Код 1С: 147453.",
    "images": [
      "assets/images/products/147453.jpg"
    ],
    "specs": []
  },
  {
    "id": "148212",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Антарктида 0.8л, VITTORA",
    "price": 231.0,
    "desc": "Артикул: VT-3121. Код 1С: 148212.",
    "images": [
      "assets/images/products/148212.jpg"
    ],
    "specs": []
  },
  {
    "id": "148211",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Аляска 1.5л, VITTORA",
    "price": 183.0,
    "desc": "Артикул: VT-3113. Код 1С: 148211.",
    "images": [
      "assets/images/products/148211.jpg"
    ],
    "specs": []
  },
  {
    "id": "148221",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Морозна квітка 240мм, VITTORA",
    "price": 201.0,
    "desc": "Артикул: VT-3152. Код 1С: 148221.",
    "images": [],
    "specs": []
  },
  {
    "id": "127047",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з малюнком VITTORA, 370 мл",
    "price": 157.0,
    "desc": "Артикул: VT-7737. Код 1С: 127047.",
    "images": [
      "assets/images/products/127047.jpg"
    ],
    "specs": []
  },
  {
    "id": "148213",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Антарктида 1.2л, VITTORA",
    "price": 306.0,
    "desc": "Артикул: VT-3122. Код 1С: 148213.",
    "images": [
      "assets/images/products/148213.jpg"
    ],
    "specs": []
  },
  {
    "id": "147454",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Аляска 1л, VITTORA",
    "price": 129.0,
    "desc": "Артикул: VT-3112. Код 1С: 147454.",
    "images": [
      "assets/images/products/147454.jpg"
    ],
    "specs": []
  },
  {
    "id": "148215",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Гренландія 0.32л, VITTORA",
    "price": 200.0,
    "desc": "Артикул: VT-3131. Код 1С: 148215.",
    "images": [
      "assets/images/products/148215.jpg"
    ],
    "specs": []
  },
  {
    "id": "127045",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з малюнком VITTORA, 1040 мл",
    "price": 288.0,
    "desc": "Артикул: VT-7710. Код 1С: 127045.",
    "images": [
      "assets/images/products/127045.jpg"
    ],
    "specs": []
  },
  {
    "id": "148216",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Гренландія 0.68л, VITTORA",
    "price": 291.0,
    "desc": "Артикул: VT-3132. Код 1С: 148216.",
    "images": [
      "assets/images/products/148216.jpg"
    ],
    "specs": []
  },
  {
    "id": "127044",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з малюнком VITTORA, 1500 мл",
    "price": 383.0,
    "desc": "Артикул: VT-7715. Код 1С: 127044.",
    "images": [
      "assets/images/products/127044.jpg"
    ],
    "specs": []
  },
  {
    "id": "148222",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Морозна квітка 290мм, VITTORA",
    "price": 261.0,
    "desc": "Артикул: VT-3153. Код 1С: 148222.",
    "images": [
      "assets/images/products/148222.jpg"
    ],
    "specs": []
  },
  {
    "id": "112353",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник скляний Хвиля VERSAILLES, 210мм, 1880мл",
    "price": 422.0,
    "desc": "Артикул: VS-6188. Код 1С: 112353.",
    "images": [
      "assets/images/products/112353.jpg"
    ],
    "specs": []
  },
  {
    "id": "148214",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Антарктида 3л, VITTORA",
    "price": 499.0,
    "desc": "Артикул: VT-3123. Код 1С: 148214.",
    "images": [
      "assets/images/products/148214.jpg"
    ],
    "specs": []
  },
  {
    "id": "148218",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Північний полюс 0.7л, VITTORA",
    "price": 132.0,
    "desc": "Артикул: VT-3141. Код 1С: 148218.",
    "images": [
      "assets/images/products/148218.jpg"
    ],
    "specs": []
  },
  {
    "id": "148220",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Морозна квітка 185мм, VITTORA",
    "price": 106.0,
    "desc": "Артикул: VT-3151. Код 1С: 148220.",
    "images": [
      "assets/images/products/148220.jpg"
    ],
    "specs": []
  },
  {
    "id": "112054",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Креманка скляна VERSAILLES, 165мл",
    "price": 103.0,
    "desc": "Артикул: VS-6016. Код 1С: 112054.",
    "images": [
      "assets/images/products/112054.jpg"
    ],
    "specs": []
  },
  {
    "id": "153128",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Сяйво кохання VITTORA, 2шт, 300мл",
    "price": 390.0,
    "desc": "Артикул: VT-3101-300. Код 1С: 153128.",
    "images": [],
    "specs": []
  },
  {
    "id": "112354",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник скляний Квадрат VERSAILLES, 196мм, 1900мл",
    "price": 430.0,
    "desc": "Артикул: VS-6190. Код 1С: 112354.",
    "images": [
      "assets/images/products/112354.jpg"
    ],
    "specs": []
  },
  {
    "id": "127046",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Харчовий контейнер скляний з пластиковою кришкою, прямокутний з малюнком VITTORA, 630 мл",
    "price": 206.0,
    "desc": "Артикул: VT-7763. Код 1С: 127046.",
    "images": [
      "assets/images/products/127046.jpg"
    ],
    "specs": []
  },
  {
    "id": "137020",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник скляний ODIN, VERSAILLES, 95мм, 260мл",
    "price": 176.0,
    "desc": "Артикул: VS-7260. Код 1С: 137020.",
    "images": [
      "assets/images/products/137020.jpg"
    ],
    "specs": []
  },
  {
    "id": "153140",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Сяйво кохання VITTORA, 2шт, 700мл",
    "price": 741.0,
    "desc": "Артикул: VT-3101-700. Код 1С: 153140.",
    "images": [],
    "specs": []
  },
  {
    "id": "153135",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Сяйво кохання VITTORA, 2шт, 500мл",
    "price": 569.0,
    "desc": "Артикул: VT-3101-500. Код 1С: 153135.",
    "images": [],
    "specs": []
  },
  {
    "id": "148217",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Гренландія 1л, VITTORA",
    "price": 450.0,
    "desc": "Артикул: VT-3133. Код 1С: 148217.",
    "images": [
      "assets/images/products/148217.jpg"
    ],
    "specs": []
  },
  {
    "id": "153141",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір салатників  з подвійним дном Квіткова блакить VITTORA, 2шт, 700мл",
    "price": 741.0,
    "desc": "Артикул: VT-3102-700. Код 1С: 153141.",
    "images": [],
    "specs": []
  },
  {
    "id": "153136",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Квіткова блакить VITTORA, 2шт, 500мл",
    "price": 569.0,
    "desc": "Артикул: VT-3102-500. Код 1С: 153136.",
    "images": [],
    "specs": []
  },
  {
    "id": "153130",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Фіолетове диво  VITTORA, 2шт, 300мл",
    "price": 390.0,
    "desc": "Артикул: VT-3103-300. Код 1С: 153130.",
    "images": [],
    "specs": []
  },
  {
    "id": "153138",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Викрадач снів  VITTORA, 2шт,500мл",
    "price": 569.0,
    "desc": "Артикул: VT-3104-500. Код 1С: 153138.",
    "images": [],
    "specs": []
  },
  {
    "id": "153142",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Фіолетове диво  VITTORA, 2шт, 700мл",
    "price": 741.0,
    "desc": "Артикул: VT-3103-700. Код 1С: 153142.",
    "images": [],
    "specs": []
  },
  {
    "id": "153132",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном  Сонячний промінь VITTORA, 2шт, 300мл",
    "price": 390.0,
    "desc": "Артикул: VT-3105-300. Код 1С: 153132.",
    "images": [],
    "specs": []
  },
  {
    "id": "153143",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Викрадач снів  VITTORA, 2шт,700мл",
    "price": 741.0,
    "desc": "Артикул: VT-3104-700. Код 1С: 153143.",
    "images": [],
    "specs": []
  },
  {
    "id": "153137",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Фіолетове диво  VITTORA, 2шт, 500мл",
    "price": 569.0,
    "desc": "Артикул: VT-3103-500. Код 1С: 153137.",
    "images": [
      "assets/images/products/153137.jpg"
    ],
    "specs": []
  },
  {
    "id": "153144",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном  Сонячний промінь VITTORA, 2шт, 700мл",
    "price": 741.0,
    "desc": "Артикул: VT-3105-700. Код 1С: 153144.",
    "images": [],
    "specs": []
  },
  {
    "id": "148219",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Північний полюс 1.4л, VITTORA",
    "price": 185.0,
    "desc": "Артикул: VT-3142. Код 1С: 148219.",
    "images": [
      "assets/images/products/148219.jpg"
    ],
    "specs": []
  },
  {
    "id": "153139",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном  Сонячний промінь VITTORA, 2шт, 500мл",
    "price": 569.0,
    "desc": "Артикул: VT-3105-500. Код 1С: 153139.",
    "images": [
      "assets/images/products/153139.jpg"
    ],
    "specs": []
  },
  {
    "id": "137022",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник скляний ARTEMIS, VERSAILLES, 226мм, 2150мл",
    "price": 398.0,
    "desc": "Артикул: VS-92150. Код 1С: 137022.",
    "images": [
      "assets/images/products/137022.jpg"
    ],
    "specs": []
  },
  {
    "id": "101806",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна, Blanco, Buongiorno, Vittora 180 мм",
    "price": 82.0,
    "desc": "Артикул: V-180B. Код 1С: 101806.",
    "images": [
      "assets/images/products/101806.jpg"
    ],
    "specs": []
  },
  {
    "id": "104161",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco, Buongiorno, Vittora 230 мм",
    "price": 139.0,
    "desc": "Артикул: V-230B. Код 1С: 104161.",
    "images": [
      "assets/images/products/104161.jpg"
    ],
    "specs": []
  },
  {
    "id": "104162",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco, Buongiorno, Vittora 165 мм",
    "price": 108.0,
    "desc": "Артикул: V-165B. Код 1С: 104162.",
    "images": [
      "assets/images/products/104162.jpg"
    ],
    "specs": []
  },
  {
    "id": "153131",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Викрадач снів  VITTORA, 2шт,300мл",
    "price": 390.0,
    "desc": "Артикул: VT-3104-300. Код 1С: 153131.",
    "images": [
      "assets/images/products/153131.jpg"
    ],
    "specs": []
  },
  {
    "id": "137010",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Prima, Салатник,Vittora, 152 мм",
    "price": 78.0,
    "desc": "Артикул: V-152PR. Код 1С: 137010.",
    "images": [
      "assets/images/products/137010.jpg"
    ],
    "specs": []
  },
  {
    "id": "104160",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco, Buongiorno, Vittora 200 мм",
    "price": 112.0,
    "desc": "Артикул: V-200B. Код 1С: 104160.",
    "images": [
      "assets/images/products/104160.jpg"
    ],
    "specs": []
  },
  {
    "id": "97445",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco Wave, Vittora 190 мм",
    "price": 73.0,
    "desc": "Артикул: V-190W. Код 1С: 97445.",
    "images": [
      "assets/images/products/97445.jpg"
    ],
    "specs": []
  },
  {
    "id": "137011",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Prima, Салатник,Vittora, 178 мм",
    "price": 104.0,
    "desc": "Артикул: V-178PR. Код 1С: 137011.",
    "images": [
      "assets/images/products/137011.jpg"
    ],
    "specs": []
  },
  {
    "id": "153826",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір піала і чашка з подвійним дном Червоне намисто VITTORA, 500 мл/320 мл",
    "price": 508.0,
    "desc": "Артикул: VT-31062. Код 1С: 153826.",
    "images": [
      "assets/images/products/153826.jpg"
    ],
    "specs": []
  },
  {
    "id": "97446",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Blanco Wave, Vittora 215 мм",
    "price": 128.0,
    "desc": "Артикул: V-215W. Код 1С: 97446.",
    "images": [
      "assets/images/products/97446.jpg"
    ],
    "specs": []
  },
  {
    "id": "153129",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір піал з подвійним дном Квіткова блакить VITTORA, 2шт, 300мл",
    "price": 390.0,
    "desc": "Артикул: VT-3102-300. Код 1С: 153129.",
    "images": [
      "assets/images/products/153129.jpg"
    ],
    "specs": []
  },
  {
    "id": "97447",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220W. Код 1С: 97447.",
    "images": [
      "assets/images/products/97447.jpg"
    ],
    "specs": []
  },
  {
    "id": "97448",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Wave, Vittora 155 мм",
    "price": 82.0,
    "desc": "Артикул: V-155W. Код 1С: 97448.",
    "images": [
      "assets/images/products/97448.jpg"
    ],
    "specs": []
  },
  {
    "id": "97449",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Wave, Vittora 175 мм",
    "price": 100.0,
    "desc": "Артикул: V-175W. Код 1С: 97449.",
    "images": [
      "assets/images/products/97449.jpg"
    ],
    "specs": []
  },
  {
    "id": "110998",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Wave, Vittora 225 мм",
    "price": 182.0,
    "desc": "Артикул: V-225W. Код 1С: 110998.",
    "images": [
      "assets/images/products/110998.jpg"
    ],
    "specs": []
  },
  {
    "id": "153827",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір піала і чашка з подвійним дном Жовте намисто VITTORA, 500 мл/320 мл",
    "price": 508.0,
    "desc": "Артикул: VT-31063. Код 1С: 153827.",
    "images": [
      "assets/images/products/153827.jpg"
    ],
    "specs": []
  },
  {
    "id": "97469",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco Square, Vittora 215 мм",
    "price": 95.0,
    "desc": "Артикул: V-215S. Код 1С: 97469.",
    "images": [
      "assets/images/products/97469.jpg"
    ],
    "specs": []
  },
  {
    "id": "153828",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір піала і чашка з подвійним дном Бузкове намисто VITTORA, 500 мл/320 мл",
    "price": 508.0,
    "desc": "Артикул: VT-31064. Код 1С: 153828.",
    "images": [
      "assets/images/products/153828.jpg"
    ],
    "specs": []
  },
  {
    "id": "111007",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Оселедниця Blanco Wave, Vittora 225 мм",
    "price": 93.0,
    "desc": "Артикул: V-225W-F. Код 1С: 111007.",
    "images": [
      "assets/images/products/111007.jpg"
    ],
    "specs": []
  },
  {
    "id": "97470",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco Square, Vittora 240 мм",
    "price": 122.0,
    "desc": "Артикул: V-240S. Код 1С: 97470.",
    "images": [
      "assets/images/products/97470.jpg"
    ],
    "specs": []
  },
  {
    "id": "97471",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Blanco Square, Vittora 230 мм",
    "price": 131.0,
    "desc": "Артикул: V-230S. Код 1С: 97471.",
    "images": [
      "assets/images/products/97471.jpg"
    ],
    "specs": []
  },
  {
    "id": "110999",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Wave, Vittora 250 мм",
    "price": 221.0,
    "desc": "Артикул: V-250W. Код 1С: 110999.",
    "images": [
      "assets/images/products/110999.jpg"
    ],
    "specs": []
  },
  {
    "id": "97473",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Square, Vittora 190 мм",
    "price": 105.0,
    "desc": "Артикул: V-190S. Код 1С: 97473.",
    "images": [
      "assets/images/products/97473.jpg"
    ],
    "specs": []
  },
  {
    "id": "110959",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Square, Vittora 225 мм",
    "price": 162.0,
    "desc": "Артикул: V-225S. Код 1С: 110959.",
    "images": [
      "assets/images/products/110959.jpg"
    ],
    "specs": []
  },
  {
    "id": "97472",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Square, Vittora 165 мм",
    "price": 93.0,
    "desc": "Артикул: V-165S. Код 1С: 97472.",
    "images": [
      "assets/images/products/97472.jpg"
    ],
    "specs": []
  },
  {
    "id": "110960",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Square, Vittora 265 мм",
    "price": 219.0,
    "desc": "Артикул: V-265S. Код 1С: 110960.",
    "images": [
      "assets/images/products/110960.jpg"
    ],
    "specs": []
  },
  {
    "id": "127742",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка овальна Square, Vittora 230 мм",
    "price": 159.0,
    "desc": "Артикул: V-230S-F. Код 1С: 127742.",
    "images": [
      "assets/images/products/127742.jpg"
    ],
    "specs": []
  },
  {
    "id": "153825",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір піала і чашка з подвійним дном Рожеве намисто VITTORA, 500 мл/320 мл",
    "price": 508.0,
    "desc": "Артикул: VT-31061. Код 1С: 153825.",
    "images": [
      "assets/images/products/153825.jpg"
    ],
    "specs": []
  },
  {
    "id": "101807",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco, Buongiorno, Vittora 187 мм",
    "price": 122.0,
    "desc": "Артикул: V-187B. Код 1С: 101807.",
    "images": [
      "assets/images/products/101807.jpg"
    ],
    "specs": []
  },
  {
    "id": "97692",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco Diva, Vittora 190 мм",
    "price": 80.0,
    "desc": "Артикул: V-190D . Код 1С: 97692.",
    "images": [
      "assets/images/products/97692.jpg"
    ],
    "specs": []
  },
  {
    "id": "97694",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco Diva, Vittora 240мм",
    "price": 139.0,
    "desc": "Артикул: V-240D. Код 1С: 97694.",
    "images": [
      "assets/images/products/97694.jpg"
    ],
    "specs": []
  },
  {
    "id": "97695",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Diva, Vittora 140 мм",
    "price": 105.0,
    "desc": "Артикул: V-140D. Код 1С: 97695.",
    "images": [
      "assets/images/products/97695.jpg"
    ],
    "specs": []
  },
  {
    "id": "97693",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco Diva, Vittora 220 мм",
    "price": 105.0,
    "desc": "Артикул: V-220D. Код 1С: 97693.",
    "images": [
      "assets/images/products/97693.jpg"
    ],
    "specs": []
  },
  {
    "id": "127736",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco  Panna, Vittora 200 мм",
    "price": 112.0,
    "desc": "Артикул: V-200P. Код 1С: 127736.",
    "images": [
      "assets/images/products/127736.jpg"
    ],
    "specs": []
  },
  {
    "id": "97696",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Diva, Vittora 165 мм",
    "price": 118.0,
    "desc": "Артикул: V-165D. Код 1С: 97696.",
    "images": [
      "assets/images/products/97696.jpg"
    ],
    "specs": []
  },
  {
    "id": "127737",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco Panna, Vittora 230 мм",
    "price": 156.0,
    "desc": "Артикул: V-230P. Код 1С: 127737.",
    "images": [
      "assets/images/products/127737.jpg"
    ],
    "specs": []
  },
  {
    "id": "127739",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Panna, Vittora 150 мм",
    "price": 80.0,
    "desc": "Артикул: V-150P. Код 1С: 127739.",
    "images": [
      "assets/images/products/127739.jpg"
    ],
    "specs": []
  },
  {
    "id": "146566",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Origami, Тарілка десертна Vittora 190 мм",
    "price": 79.0,
    "desc": "Артикул: V-190OR. Код 1С: 146566.",
    "images": [],
    "specs": []
  },
  {
    "id": "127738",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Panna, Vittora 130 мм",
    "price": 61.0,
    "desc": "Артикул: V-130P. Код 1С: 127738.",
    "images": [
      "assets/images/products/127738.jpg"
    ],
    "specs": []
  },
  {
    "id": "146577",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Origami, Тарілка обідня Vittorа 265 мм",
    "price": 138.0,
    "desc": "Артикул: V-265OR. Код 1С: 146577.",
    "images": [],
    "specs": []
  },
  {
    "id": "137008",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Prima, Тарілка десертна,Vittora, 175 мм",
    "price": 70.0,
    "desc": "Артикул: V-175PR. Код 1С: 137008.",
    "images": [
      "assets/images/products/137008.jpg"
    ],
    "specs": []
  },
  {
    "id": "146564",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Origami, Салатник Vittora 140 мм",
    "price": 73.0,
    "desc": "Артикул: V-140OR. Код 1С: 146564.",
    "images": [],
    "specs": []
  },
  {
    "id": "146565",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Origami, Салатник Vittora 230 мм",
    "price": 172.0,
    "desc": "Артикул: V-230OR. Код 1С: 146565.",
    "images": [],
    "specs": []
  },
  {
    "id": "146578",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Lava, Тарілка десертна Vittora 190 мм",
    "price": 65.0,
    "desc": "Артикул: V-190LA. Код 1С: 146578.",
    "images": [],
    "specs": []
  },
  {
    "id": "146579",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Lava, Тарілка обідня Vittora 265 мм",
    "price": 117.0,
    "desc": "Артикул: V-265LA. Код 1С: 146579.",
    "images": [],
    "specs": []
  },
  {
    "id": "146582",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Lava, Салатник Vittora 230 мм",
    "price": 165.0,
    "desc": "Артикул: V-230LA. Код 1С: 146582.",
    "images": [],
    "specs": []
  },
  {
    "id": "146581",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Lava, Салатник Vittora 140 мм",
    "price": 67.0,
    "desc": "Артикул: V-140LA. Код 1С: 146581.",
    "images": [],
    "specs": []
  },
  {
    "id": "146580",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Lava, Тарілка супова Vittora 215 мм",
    "price": 111.0,
    "desc": "Артикул: V-215LA. Код 1С: 146580.",
    "images": [],
    "specs": []
  },
  {
    "id": "137009",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Prima, Тарілка обідня,Vittora, 200 мм",
    "price": 106.0,
    "desc": "Артикул: V-200PR. Код 1С: 137009.",
    "images": [
      "assets/images/products/137009.jpg"
    ],
    "specs": []
  },
  {
    "id": "146589",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Тарілка десертна Vittora 205 мм",
    "price": 82.0,
    "desc": "Артикул: V-205VE. Код 1С: 146589.",
    "images": [],
    "specs": []
  },
  {
    "id": "146590",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Тарілка обідня Vittora 255 мм",
    "price": 132.0,
    "desc": "Артикул: V-255VE. Код 1С: 146590.",
    "images": [],
    "specs": []
  },
  {
    "id": "146585",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Салатник Vittora 150 мм",
    "price": 73.0,
    "desc": "Артикул: V-150VE. Код 1С: 146585.",
    "images": [],
    "specs": []
  },
  {
    "id": "146591",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Тарілка супова Vittora 180 мм",
    "price": 71.0,
    "desc": "Артикул: V-180VE-S. Код 1С: 146591.",
    "images": [],
    "specs": []
  },
  {
    "id": "146587",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Салатник Vittora 180 мм",
    "price": 94.0,
    "desc": "Артикул: V-180VE. Код 1С: 146587.",
    "images": [],
    "specs": []
  },
  {
    "id": "146583",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Blanco, Lava, Блюдо Vittora 355 мм",
    "price": 172.0,
    "desc": "Артикул: V-355LA. Код 1С: 146583.",
    "images": [],
    "specs": []
  },
  {
    "id": "147611",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Тарілка десертна, Vittora, 180 мм",
    "price": 65.0,
    "desc": "Артикул: V-180RE. Код 1С: 147611.",
    "images": [],
    "specs": []
  },
  {
    "id": "146584",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Blanco, Velvet, Піала Vittora 115 мм",
    "price": 48.0,
    "desc": "Артикул: V-115VE. Код 1С: 146584.",
    "images": [],
    "specs": []
  },
  {
    "id": "146588",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Салатник Vittora 255 мм",
    "price": 180.0,
    "desc": "Артикул: V-255VE-C. Код 1С: 146588.",
    "images": [],
    "specs": []
  },
  {
    "id": "146586",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Velvet, Салатник Vittora 230 мм",
    "price": 138.0,
    "desc": "Артикул: V-230VE. Код 1С: 146586.",
    "images": [],
    "specs": []
  },
  {
    "id": "147610",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Тарілка десертна, Vittora, 205 мм",
    "price": 82.0,
    "desc": "Артикул: V-205RE. Код 1С: 147610.",
    "images": [],
    "specs": []
  },
  {
    "id": "147606",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Салатник, Vittora, 150 мм",
    "price": 79.0,
    "desc": "Артикул: V-150RE. Код 1С: 147606.",
    "images": [],
    "specs": []
  },
  {
    "id": "147608",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Тарілка супова, Vittora, 205 мм",
    "price": 98.0,
    "desc": "Артикул: V-205RE-s. Код 1С: 147608.",
    "images": [],
    "specs": []
  },
  {
    "id": "147607",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Салатник, Vittora, 125 мм",
    "price": 67.0,
    "desc": "Артикул: V-125RE. Код 1С: 147607.",
    "images": [],
    "specs": []
  },
  {
    "id": "147609",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Тарілка обідня, Vittora, 255 мм",
    "price": 146.0,
    "desc": "Артикул: V-255RE. Код 1С: 147609.",
    "images": [],
    "specs": []
  },
  {
    "id": "147620",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Vintage, Тарілка обідня, Vittora, 265 мм",
    "price": 159.0,
    "desc": "Артикул: V-265VI. Код 1С: 147620.",
    "images": [],
    "specs": []
  },
  {
    "id": "147618",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Vintage, Салатник, Vittora, 125 мм",
    "price": 65.0,
    "desc": "Артикул: V-125VI. Код 1С: 147618.",
    "images": [],
    "specs": []
  },
  {
    "id": "147605",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Retro, Салатник, Vittora, 180 мм",
    "price": 103.0,
    "desc": "Артикул: V-180RE-s. Код 1С: 147605.",
    "images": [
      "assets/images/products/147605.jpg"
    ],
    "specs": []
  },
  {
    "id": "147617",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Vintage, Салатник, Vittora, 150 мм",
    "price": 82.0,
    "desc": "Артикул: V-150VI. Код 1С: 147617.",
    "images": [],
    "specs": []
  },
  {
    "id": "147604",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Vintage, Тарілка десертна, Vittora, 190 мм",
    "price": 79.0,
    "desc": "Артикул: V-190VI. Код 1С: 147604.",
    "images": [],
    "specs": []
  },
  {
    "id": "147619",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Vintage, Тарілка супова, Vittora, 215 мм",
    "price": 103.0,
    "desc": "Артикул: V-215VI. Код 1С: 147619.",
    "images": [
      "assets/images/products/147619.jpg"
    ],
    "specs": []
  },
  {
    "id": "147615",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Ethno, Тарілка обідня, Vittora, 265 мм",
    "price": 159.0,
    "desc": "Артикул: V-265ET. Код 1С: 147615.",
    "images": [],
    "specs": []
  },
  {
    "id": "147614",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Ethno, Тарілка супова, Vittora, 215 мм",
    "price": 103.0,
    "desc": "Артикул: V-215ET. Код 1С: 147614.",
    "images": [],
    "specs": []
  },
  {
    "id": "147612",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Ethno, Салатник, Vittora, 150 мм",
    "price": 82.0,
    "desc": "Артикул: V-150ET. Код 1С: 147612.",
    "images": [],
    "specs": []
  },
  {
    "id": "147613",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Ethno, Салатник, Vittora, 125 мм",
    "price": 65.0,
    "desc": "Артикул: V-125ET. Код 1С: 147613.",
    "images": [],
    "specs": []
  },
  {
    "id": "147616",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Ethno, Тарілка десертна, Vittora, 190 мм",
    "price": 82.0,
    "desc": "Артикул: V-190ET. Код 1С: 147616.",
    "images": [],
    "specs": []
  },
  {
    "id": "146573",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra, Салатник, Vittora, 165 мм",
    "price": 111.0,
    "desc": "Артикул: V-165AS. Код 1С: 146573.",
    "images": [],
    "specs": []
  },
  {
    "id": "146574",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra, Тарілка супова, Vittora, 215 мм",
    "price": 123.0,
    "desc": "Артикул: V-215AS. Код 1С: 146574.",
    "images": [],
    "specs": []
  },
  {
    "id": "146568",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra Gold, Салатник, Vittora, 165 мм",
    "price": 159.0,
    "desc": "Артикул: V-165ASG. Код 1С: 146568.",
    "images": [],
    "specs": []
  },
  {
    "id": "146571",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra Gold, Тарілка десертна, Vittora, 205 мм",
    "price": 163.0,
    "desc": "Артикул: V-205ASG. Код 1С: 146571.",
    "images": [],
    "specs": []
  },
  {
    "id": "146576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra, Тарілка десертна, Vittora, 205 мм",
    "price": 113.0,
    "desc": "Артикул: V-205AS. Код 1С: 146576.",
    "images": [
      "assets/images/products/146576.jpg"
    ],
    "specs": []
  },
  {
    "id": "146569",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra Gold, Тарілка супова, Vittora, 215 мм",
    "price": 174.0,
    "desc": "Артикул: V-215ASG. Код 1С: 146569.",
    "images": [],
    "specs": []
  },
  {
    "id": "146572",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra, Салатник, Vittora, 230 мм",
    "price": 223.0,
    "desc": "Артикул: V-230AS. Код 1С: 146572.",
    "images": [
      "assets/images/products/146572.jpg"
    ],
    "specs": []
  },
  {
    "id": "146575",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra, Тарілка обідня, Vittora, 255 мм",
    "price": 169.0,
    "desc": "Артикул: V-255AS. Код 1С: 146575.",
    "images": [
      "assets/images/products/146575.jpg"
    ],
    "specs": []
  },
  {
    "id": "146567",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra Gold, Салатник, Vittora, 230 мм",
    "price": 306.0,
    "desc": "Артикул: V-230ASG. Код 1С: 146567.",
    "images": [],
    "specs": []
  },
  {
    "id": "146570",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Astra Gold, Тарілка обідня, Vittora, 255 мм",
    "price": 230.0,
    "desc": "Артикул: V-255ASG. Код 1С: 146570.",
    "images": [],
    "specs": []
  },
  {
    "id": "156877",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Тарілка десертна, Vittora, 190 мм",
    "price": 69.0,
    "desc": "Артикул: V-190AA. Код 1С: 156877.",
    "images": [],
    "specs": []
  },
  {
    "id": "156878",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Тарілка обідня, Vittora, 266 мм",
    "price": 116.0,
    "desc": "Артикул: V-266AA. Код 1С: 156878.",
    "images": [],
    "specs": []
  },
  {
    "id": "156879",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Тарілка супова, Vittora, 215 мм",
    "price": 93.0,
    "desc": "Артикул: V-215AA. Код 1С: 156879.",
    "images": [],
    "specs": []
  },
  {
    "id": "156880",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Салатник, Vittora, 127 мм",
    "price": 57.0,
    "desc": "Артикул: V-127AA. Код 1С: 156880.",
    "images": [],
    "specs": []
  },
  {
    "id": "146563",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Pizza, Тарілка для піци Vittora 320 мм",
    "price": 224.0,
    "desc": "Артикул: V-32PI. Код 1С: 146563.",
    "images": [],
    "specs": []
  },
  {
    "id": "156881",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Салатник, Vittora, 160 мм",
    "price": 69.0,
    "desc": "Артикул: V-160AA. Код 1С: 156881.",
    "images": [],
    "specs": []
  },
  {
    "id": "111013",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Blanco Arris, Versailles 215 мм",
    "price": 114.0,
    "desc": "Артикул: VS-215A . Код 1С: 111013.",
    "images": [
      "assets/images/products/111013.jpg"
    ],
    "specs": []
  },
  {
    "id": "111014",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Blanco Arris, Versailles 330 мм",
    "price": 224.0,
    "desc": "Артикул: VS-330A. Код 1С: 111014.",
    "images": [
      "assets/images/products/111014.jpg"
    ],
    "specs": []
  },
  {
    "id": "127740",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Charm, Vittora 230 мм",
    "price": 141.0,
    "desc": "Артикул: V-230C. Код 1С: 127740.",
    "images": [
      "assets/images/products/127740.jpg"
    ],
    "specs": []
  },
  {
    "id": "127741",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Charm, Vittora 250 мм",
    "price": 207.0,
    "desc": "Артикул: V-250C. Код 1С: 127741.",
    "images": [
      "assets/images/products/127741.jpg"
    ],
    "specs": []
  },
  {
    "id": "156882",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Blanco, Asia, Салатник, Vittora, 228 мм",
    "price": 137.0,
    "desc": "Артикул: V-228AA. Код 1С: 156882.",
    "images": [],
    "specs": []
  },
  {
    "id": "111015",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Blanco Arris, Versailles 250 мм",
    "price": 156.0,
    "desc": "Артикул: VS-250A. Код 1С: 111015.",
    "images": [
      "assets/images/products/111015.jpg"
    ],
    "specs": []
  },
  {
    "id": "111017",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Arris, Versailles 280 мм",
    "price": 249.0,
    "desc": "Артикул: VS-280A. Код 1С: 111017.",
    "images": [
      "assets/images/products/111017.jpg"
    ],
    "specs": []
  },
  {
    "id": "111016",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Blanco Arris, Versailles 165 мм",
    "price": 89.0,
    "desc": "Артикул: VS-165A. Код 1С: 111016.",
    "images": [
      "assets/images/products/111016.jpg"
    ],
    "specs": []
  },
  {
    "id": "111018",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка овальна Blanco Arris, Versailles 380х350 мм",
    "price": 371.0,
    "desc": "Артикул: VS-380A. Код 1С: 111018.",
    "images": [
      "assets/images/products/111018.jpg"
    ],
    "specs": []
  },
  {
    "id": "111002",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Black Wave, Vittora 220 мм",
    "price": 126.0,
    "desc": "Артикул: V-220WBL. Код 1С: 111002.",
    "images": [
      "assets/images/products/111002.jpg"
    ],
    "specs": []
  },
  {
    "id": "111006",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Black Wave, Vittora 250 мм",
    "price": 201.0,
    "desc": "Артикул: V-250WBL. Код 1С: 111006.",
    "images": [
      "assets/images/products/111006.jpg"
    ],
    "specs": []
  },
  {
    "id": "110963",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Black Square, Vittora 240 мм",
    "price": 127.0,
    "desc": "Артикул: V-240Sbl. Код 1С: 110963.",
    "images": [
      "assets/images/products/110963.jpg"
    ],
    "specs": []
  },
  {
    "id": "110961",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Black Square, Vittora 215 мм",
    "price": 106.0,
    "desc": "Артикул: V-215Sbl. Код 1С: 110961.",
    "images": [
      "assets/images/products/110961.jpg"
    ],
    "specs": []
  },
  {
    "id": "116532",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Овочевий етюд, Black Wave, Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155Bvs. Код 1С: 116532.",
    "images": [
      "assets/images/products/116532.jpg"
    ],
    "specs": []
  },
  {
    "id": "111001",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Black Wave, Vittora 215 мм",
    "price": 132.0,
    "desc": "Артикул: V-215WBL. Код 1С: 111001.",
    "images": [
      "assets/images/products/111001.jpg"
    ],
    "specs": []
  },
  {
    "id": "116530",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна,Овочевий етюд, Black Wave, Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190Bvs. Код 1С: 116530.",
    "images": [
      "assets/images/products/116530.jpg"
    ],
    "specs": []
  },
  {
    "id": "110968",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Black Square, Vittora 190 мм",
    "price": 114.0,
    "desc": "Артикул: V-190Sbl. Код 1С: 110968.",
    "images": [
      "assets/images/products/110968.jpg"
    ],
    "specs": []
  },
  {
    "id": "116533",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Овочевий етюд, Black Wave,Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175Bvs. Код 1С: 116533.",
    "images": [
      "assets/images/products/116533.jpg"
    ],
    "specs": []
  },
  {
    "id": "116531",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня, Овочевий етюд, Black Wave, Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220Bvs. Код 1С: 116531.",
    "images": [
      "assets/images/products/116531.jpg"
    ],
    "specs": []
  },
  {
    "id": "111005",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Black Wave, Vittora 225 мм",
    "price": 175.0,
    "desc": "Артикул: V-225WBL. Код 1С: 111005.",
    "images": [
      "assets/images/products/111005.jpg"
    ],
    "specs": []
  },
  {
    "id": "110965",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Black Square, Vittora 165 мм",
    "price": 95.0,
    "desc": "Артикул: V-165Sbl. Код 1С: 110965.",
    "images": [
      "assets/images/products/110965.jpg"
    ],
    "specs": []
  },
  {
    "id": "87595",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Beige AURA, Vittora 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165AB. Код 1С: 87595.",
    "images": [
      "assets/images/products/87595.jpg"
    ],
    "specs": []
  },
  {
    "id": "104158",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Піони AURA, Vittora 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165AР. Код 1С: 104158.",
    "images": [
      "assets/images/products/104158.jpg"
    ],
    "specs": []
  },
  {
    "id": "104159",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Піони AURA, Vittora 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187AР. Код 1С: 104159.",
    "images": [
      "assets/images/products/104159.jpg"
    ],
    "specs": []
  },
  {
    "id": "104156",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Піони AURA, Vittora 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180AР. Код 1С: 104156.",
    "images": [
      "assets/images/products/104156.jpg"
    ],
    "specs": []
  },
  {
    "id": "87588",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Beige AURA, Vittora 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180AB. Код 1С: 87588.",
    "images": [
      "assets/images/products/87588.jpg"
    ],
    "specs": []
  },
  {
    "id": "104157",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Піони AURA, Vittora 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230AР. Код 1С: 104157.",
    "images": [
      "assets/images/products/104157.jpg"
    ],
    "specs": []
  },
  {
    "id": "87589",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Beige AURA, Vittora 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230AB. Код 1С: 87589.",
    "images": [
      "assets/images/products/87589.jpg"
    ],
    "specs": []
  },
  {
    "id": "104154",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Купаж AURA, Vittora 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165AН. Код 1С: 104154.",
    "images": [
      "assets/images/products/104154.jpg"
    ],
    "specs": []
  },
  {
    "id": "87596",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Beige AURA, Vittora 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187AB. Код 1С: 87596.",
    "images": [
      "assets/images/products/87596.jpg"
    ],
    "specs": []
  },
  {
    "id": "104152",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Купаж AURA, Vittora 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180AН. Код 1С: 104152.",
    "images": [
      "assets/images/products/104152.jpg"
    ],
    "specs": []
  },
  {
    "id": "104153",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Купаж AURA, Vittora 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230AН. Код 1С: 104153.",
    "images": [
      "assets/images/products/104153.jpg"
    ],
    "specs": []
  },
  {
    "id": "104155",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Купаж AURA, Vittora 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187AН. Код 1С: 104155.",
    "images": [
      "assets/images/products/104155.jpg"
    ],
    "specs": []
  },
  {
    "id": "116523",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Квітковий вернісаж, AURA, Vittora 165 мм",
    "price": 132.0,
    "desc": "Артикул: 2165Afo. Код 1С: 116523.",
    "images": [
      "assets/images/products/116523.jpg"
    ],
    "specs": []
  },
  {
    "id": "116524",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Квітковий вернісаж, AURA, Vittora 187 мм",
    "price": 148.0,
    "desc": "Артикул: 2187Afo. Код 1С: 116524.",
    "images": [
      "assets/images/products/116524.jpg"
    ],
    "specs": []
  },
  {
    "id": "116522",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня,Квітковий вернісаж, AURA,  Vittora 230 мм",
    "price": 164.0,
    "desc": "Артикул: 1230Afo. Код 1С: 116522.",
    "images": [
      "assets/images/products/116522.jpg"
    ],
    "specs": []
  },
  {
    "id": "116521",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна, Квітковий вернісаж, AURA, Vittora 180 мм",
    "price": 105.0,
    "desc": "Артикул: 1180Afo. Код 1С: 116521.",
    "images": [
      "assets/images/products/116521.jpg"
    ],
    "specs": []
  },
  {
    "id": "136983",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Весняне цвітіння, Aura, Салатник,Vittora, 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165AVC. Код 1С: 136983.",
    "images": [
      "assets/images/products/136983.jpg"
    ],
    "specs": []
  },
  {
    "id": "136985",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Трояндовий сон, Aura, Тарілка десертна,Vittora, 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180ATS. Код 1С: 136985.",
    "images": [
      "assets/images/products/136985.jpg"
    ],
    "specs": []
  },
  {
    "id": "136987",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Трояндовий сон, Aura, Салатник,Vittora, 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165ATS. Код 1С: 136987.",
    "images": [
      "assets/images/products/136987.jpg"
    ],
    "specs": []
  },
  {
    "id": "136986",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Трояндовий сон, Aura, Тарілка обідня,Vittora, 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230ATS. Код 1С: 136986.",
    "images": [
      "assets/images/products/136986.jpg"
    ],
    "specs": []
  },
  {
    "id": "136979",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гармонія, Aura, Салатник,Vittora, 165 мм",
    "price": 132.0,
    "desc": "Артикул: VT-2165AG. Код 1С: 136979.",
    "images": [
      "assets/images/products/136979.jpg"
    ],
    "specs": []
  },
  {
    "id": "136980",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гармонія, Aura, Салатник,Vittora, 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187AG. Код 1С: 136980.",
    "images": [
      "assets/images/products/136980.jpg"
    ],
    "specs": []
  },
  {
    "id": "116534",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна, Овочевий етюд, Wave, Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул:  V-190Vs. Код 1С: 116534.",
    "images": [
      "assets/images/products/116534.jpg"
    ],
    "specs": []
  },
  {
    "id": "116535",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня, Овочевий етюд, Wave, Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул:  V-220Vs. Код 1С: 116535.",
    "images": [
      "assets/images/products/116535.jpg"
    ],
    "specs": []
  },
  {
    "id": "116537",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Овочевий етюд, Wave, Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул:  V-175Vs. Код 1С: 116537.",
    "images": [
      "assets/images/products/116537.jpg"
    ],
    "specs": []
  },
  {
    "id": "116536",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Овочевий етюд, Wave, Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155Vs. Код 1С: 116536.",
    "images": [
      "assets/images/products/116536.jpg"
    ],
    "specs": []
  },
  {
    "id": "104135",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Чорно-біле суцвіття Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190BW. Код 1С: 104135.",
    "images": [
      "assets/images/products/104135.jpg"
    ],
    "specs": []
  },
  {
    "id": "104136",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Чорно-біле суцвіття Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220BW. Код 1С: 104136.",
    "images": [
      "assets/images/products/104136.jpg"
    ],
    "specs": []
  },
  {
    "id": "104141",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Чорно-біле суцвіття Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155BW. Код 1С: 104141.",
    "images": [
      "assets/images/products/104141.jpg"
    ],
    "specs": []
  },
  {
    "id": "104142",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Чорно-біле суцвіття Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175BW. Код 1С: 104142.",
    "images": [
      "assets/images/products/104142.jpg"
    ],
    "specs": []
  },
  {
    "id": "127724",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Графічні квіти Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155GF. Код 1С: 127724.",
    "images": [
      "assets/images/products/127724.jpg"
    ],
    "specs": []
  },
  {
    "id": "127723",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Графічні квіти Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220GF. Код 1С: 127723.",
    "images": [
      "assets/images/products/127723.jpg"
    ],
    "specs": []
  },
  {
    "id": "127722",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Графічні квіти Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190GF. Код 1С: 127722.",
    "images": [
      "assets/images/products/127722.jpg"
    ],
    "specs": []
  },
  {
    "id": "136977",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Весняне цвітіння, Aura, Тарілка десертна,Vittora, 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180AVC. Код 1С: 136977.",
    "images": [
      "assets/images/products/136977.jpg"
    ],
    "specs": []
  },
  {
    "id": "136989",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гармонія, Aura, Тарілка десертна,Vittora, 180 мм",
    "price": 105.0,
    "desc": "Артикул: VT-1180AG. Код 1С: 136989.",
    "images": [
      "assets/images/products/136989.jpg"
    ],
    "specs": []
  },
  {
    "id": "136978",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Гармонія, Aura, Тарілка обідня,Vittora, 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230AG. Код 1С: 136978.",
    "images": [
      "assets/images/products/136978.jpg"
    ],
    "specs": []
  },
  {
    "id": "127725",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Графічні квіти Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175GF. Код 1С: 127725.",
    "images": [
      "assets/images/products/127725.jpg"
    ],
    "specs": []
  },
  {
    "id": "136981",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Весняне цвітіння, Aura, Тарілка обідня,Vittora, 230 мм",
    "price": 164.0,
    "desc": "Артикул: VT-1230AVC. Код 1С: 136981.",
    "images": [
      "assets/images/products/136981.jpg"
    ],
    "specs": []
  },
  {
    "id": "136988",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Трояндовий сон, Aura, Салатник,Vittora, 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187ATS. Код 1С: 136988.",
    "images": [
      "assets/images/products/136988.jpg"
    ],
    "specs": []
  },
  {
    "id": "122936",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Бабусин сад, Wave, Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155GG. Код 1С: 122936.",
    "images": [
      "assets/images/products/122936.jpg"
    ],
    "specs": []
  },
  {
    "id": "136984",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Весняне цвітіння, Aura, Салатник,Vittora, 187 мм",
    "price": 148.0,
    "desc": "Артикул: VT-2187AVC. Код 1С: 136984.",
    "images": [
      "assets/images/products/136984.jpg"
    ],
    "specs": []
  },
  {
    "id": "122940",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна,Бабусин сад, Wave,  Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190GG. Код 1С: 122940.",
    "images": [
      "assets/images/products/122940.jpg"
    ],
    "specs": []
  },
  {
    "id": "122942",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня, Бабусин сад, Wave, Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220GG. Код 1С: 122942.",
    "images": [
      "assets/images/products/122942.jpg"
    ],
    "specs": []
  },
  {
    "id": "122938",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Бабусин сад, Wave,  Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175GG. Код 1С: 122938.",
    "images": [
      "assets/images/products/122938.jpg"
    ],
    "specs": []
  },
  {
    "id": "127728",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Лісова галявина Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155FC. Код 1С: 127728.",
    "images": [
      "assets/images/products/127728.jpg"
    ],
    "specs": []
  },
  {
    "id": "127729",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Лісова галявина Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175FC. Код 1С: 127729.",
    "images": [
      "assets/images/products/127729.jpg"
    ],
    "specs": []
  },
  {
    "id": "127727",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Лісова галявина Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220FC. Код 1С: 127727.",
    "images": [
      "assets/images/products/127727.jpg"
    ],
    "specs": []
  },
  {
    "id": "127732",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Радісні пташки Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155HB. Код 1С: 127732.",
    "images": [
      "assets/images/products/127732.jpg"
    ],
    "specs": []
  },
  {
    "id": "127731",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Радісні пташки Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220HB. Код 1С: 127731.",
    "images": [
      "assets/images/products/127731.jpg"
    ],
    "specs": []
  },
  {
    "id": "127730",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Радісні пташки Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190HB. Код 1С: 127730.",
    "images": [
      "assets/images/products/127730.jpg"
    ],
    "specs": []
  },
  {
    "id": "127733",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Радісні пташки Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175HB. Код 1С: 127733.",
    "images": [
      "assets/images/products/127733.jpg"
    ],
    "specs": []
  },
  {
    "id": "110945",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Квіткові вензеля Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190FM. Код 1С: 110945.",
    "images": [
      "assets/images/products/110945.jpg"
    ],
    "specs": []
  },
  {
    "id": "110946",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Квіткові вензеля Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220FM. Код 1С: 110946.",
    "images": [
      "assets/images/products/110946.jpg"
    ],
    "specs": []
  },
  {
    "id": "110947",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткові вензеля Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155FM. Код 1С: 110947.",
    "images": [
      "assets/images/products/110947.jpg"
    ],
    "specs": []
  },
  {
    "id": "127726",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Лісова галявина Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190FC. Код 1С: 127726.",
    "images": [
      "assets/images/products/127726.jpg"
    ],
    "specs": []
  },
  {
    "id": "110948",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткові вензеля Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175FM. Код 1С: 110948.",
    "images": [
      "assets/images/products/110948.jpg"
    ],
    "specs": []
  },
  {
    "id": "110949",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Східні мотиви Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190EM. Код 1С: 110949.",
    "images": [
      "assets/images/products/110949.jpg"
    ],
    "specs": []
  },
  {
    "id": "110950",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Східні мотиви Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220EM. Код 1С: 110950.",
    "images": [
      "assets/images/products/110950.jpg"
    ],
    "specs": []
  },
  {
    "id": "110951",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Східні мотиви Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155EM. Код 1С: 110951.",
    "images": [
      "assets/images/products/110951.jpg"
    ],
    "specs": []
  },
  {
    "id": "110952",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Східні мотиви Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175EM. Код 1С: 110952.",
    "images": [
      "assets/images/products/110952.jpg"
    ],
    "specs": []
  },
  {
    "id": "101799",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Фіолетова орхідея Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220PO. Код 1С: 101799.",
    "images": [
      "assets/images/products/101799.jpg"
    ],
    "specs": []
  },
  {
    "id": "101800",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Фіолетова орхідея Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155PO. Код 1С: 101800.",
    "images": [
      "assets/images/products/101800.jpg"
    ],
    "specs": []
  },
  {
    "id": "100401",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Квіткова симфонія Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190F. Код 1С: 100401.",
    "images": [
      "assets/images/products/100401.jpg"
    ],
    "specs": []
  },
  {
    "id": "101801",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Фіолетова орхідея Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175PO. Код 1С: 101801.",
    "images": [
      "assets/images/products/101801.jpg"
    ],
    "specs": []
  },
  {
    "id": "101798",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Фіолетова орхідея Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190PO. Код 1С: 101798.",
    "images": [
      "assets/images/products/101798.jpg"
    ],
    "specs": []
  },
  {
    "id": "100403",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Квіткова симфонія Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220F. Код 1С: 100403.",
    "images": [
      "assets/images/products/100403.jpg"
    ],
    "specs": []
  },
  {
    "id": "97674",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткова симфонія Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155F. Код 1С: 97674.",
    "images": [
      "assets/images/products/97674.jpg"
    ],
    "specs": []
  },
  {
    "id": "100402",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткова симфонія Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175F. Код 1С: 100402.",
    "images": [
      "assets/images/products/100402.jpg"
    ],
    "specs": []
  },
  {
    "id": "97691",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Виноградна лоза Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175G. Код 1С: 97691.",
    "images": [
      "assets/images/products/97691.jpg"
    ],
    "specs": []
  },
  {
    "id": "97688",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Виноградна лоза Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190G. Код 1С: 97688.",
    "images": [
      "assets/images/products/97688.jpg"
    ],
    "specs": []
  },
  {
    "id": "97690",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Виноградна лоза Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155G. Код 1С: 97690.",
    "images": [
      "assets/images/products/97690.jpg"
    ],
    "specs": []
  },
  {
    "id": "103441",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Лаванда Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155L. Код 1С: 103441.",
    "images": [
      "assets/images/products/103441.jpg"
    ],
    "specs": []
  },
  {
    "id": "97672",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Лаванда Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190L. Код 1С: 97672.",
    "images": [
      "assets/images/products/97672.jpg"
    ],
    "specs": []
  },
  {
    "id": "97689",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Виноградна лоза Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220G. Код 1С: 97689.",
    "images": [
      "assets/images/products/97689.jpg"
    ],
    "specs": []
  },
  {
    "id": "97675",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Лаванда Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175L. Код 1С: 97675.",
    "images": [
      "assets/images/products/97675.jpg"
    ],
    "specs": []
  },
  {
    "id": "111009",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Лаванда, Wave, Оселедниця , Vittora 225 мм",
    "price": 105.0,
    "desc": "Артикул: V-225L-F. Код 1С: 111009.",
    "images": [
      "assets/images/products/111009.jpg"
    ],
    "specs": []
  },
  {
    "id": "104147",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Рожевий букет Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155РВ. Код 1С: 104147.",
    "images": [
      "assets/images/products/104147.jpg"
    ],
    "specs": []
  },
  {
    "id": "136971",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Чарівний сад Wave Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155CS. Код 1С: 136971.",
    "images": [
      "assets/images/products/136971.jpg"
    ],
    "specs": []
  },
  {
    "id": "104148",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Рожевий букет Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175РB. Код 1С: 104148.",
    "images": [
      "assets/images/products/104148.jpg"
    ],
    "specs": []
  },
  {
    "id": "111008",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Оселедниця Рожевий букет Wave, Vittora 225 мм",
    "price": 105.0,
    "desc": "Артикул: V-225PB-F. Код 1С: 111008.",
    "images": [
      "assets/images/products/111008.jpg"
    ],
    "specs": []
  },
  {
    "id": "104145",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Рожевий букет Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190РВ. Код 1С: 104145.",
    "images": [
      "assets/images/products/104145.jpg"
    ],
    "specs": []
  },
  {
    "id": "136972",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Чарівний сад Wave Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220CS. Код 1С: 136972.",
    "images": [
      "assets/images/products/136972.jpg"
    ],
    "specs": []
  },
  {
    "id": "104146",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Рожевий букет Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220РB. Код 1С: 104146.",
    "images": [
      "assets/images/products/104146.jpg"
    ],
    "specs": []
  },
  {
    "id": "97673",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Лаванда Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-\\220L. Код 1С: 97673.",
    "images": [
      "assets/images/products/97673.jpg"
    ],
    "specs": []
  },
  {
    "id": "127714",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Ніжність Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190T. Код 1С: 127714.",
    "images": [
      "assets/images/products/127714.jpg"
    ],
    "specs": []
  },
  {
    "id": "127715",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Ніжність Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220T. Код 1С: 127715.",
    "images": [
      "assets/images/products/127715.jpg"
    ],
    "specs": []
  },
  {
    "id": "127717",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Ніжність Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175T. Код 1С: 127717.",
    "images": [
      "assets/images/products/127717.jpg"
    ],
    "specs": []
  },
  {
    "id": "127734",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Ніжність Charm Vittora 230 мм",
    "price": 176.0,
    "desc": "Артикул: V-230CTF. Код 1С: 127734.",
    "images": [
      "assets/images/products/127734.jpg"
    ],
    "specs": []
  },
  {
    "id": "127716",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Ніжність Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155T. Код 1С: 127716.",
    "images": [
      "assets/images/products/127716.jpg"
    ],
    "specs": []
  },
  {
    "id": "127735",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Ніжність Charm, Vittora 250 мм",
    "price": 260.0,
    "desc": "Артикул: V-250CTF. Код 1С: 127735.",
    "images": [
      "assets/images/products/127735.jpg"
    ],
    "specs": []
  },
  {
    "id": "122952",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Лаванда і троянда, Wave, Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155LR. Код 1С: 122952.",
    "images": [
      "assets/images/products/122952.jpg"
    ],
    "specs": []
  },
  {
    "id": "136973",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Чарівний сад Wave Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190CS. Код 1С: 136973.",
    "images": [
      "assets/images/products/136973.jpg"
    ],
    "specs": []
  },
  {
    "id": "122956",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна,Лаванда і троянда, Wave,  Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190LR. Код 1С: 122956.",
    "images": [
      "assets/images/products/122956.jpg"
    ],
    "specs": []
  },
  {
    "id": "122958",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня, Лаванда і троянда, Wave, Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220LR. Код 1С: 122958.",
    "images": [
      "assets/images/products/122958.jpg"
    ],
    "specs": []
  },
  {
    "id": "136970",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Чарівний сад Wave Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175CS. Код 1С: 136970.",
    "images": [
      "assets/images/products/136970.jpg"
    ],
    "specs": []
  },
  {
    "id": "122954",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Лаванда і троянда, Wave,  Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175LR. Код 1С: 122954.",
    "images": [
      "assets/images/products/122954.jpg"
    ],
    "specs": []
  },
  {
    "id": "127720",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Букет для пані Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155BL. Код 1С: 127720.",
    "images": [
      "assets/images/products/127720.jpg"
    ],
    "specs": []
  },
  {
    "id": "127721",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Букет для пані Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175BL. Код 1С: 127721.",
    "images": [
      "assets/images/products/127721.jpg"
    ],
    "specs": []
  },
  {
    "id": "127718",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Букет для пані Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190BL. Код 1С: 127718.",
    "images": [
      "assets/images/products/127718.jpg"
    ],
    "specs": []
  },
  {
    "id": "97684",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Букет орхідеї Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190O. Код 1С: 97684.",
    "images": [
      "assets/images/products/97684.jpg"
    ],
    "specs": []
  },
  {
    "id": "97687",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Букет орхідеї Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175O. Код 1С: 97687.",
    "images": [
      "assets/images/products/97687.jpg"
    ],
    "specs": []
  },
  {
    "id": "127719",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Букет для пані Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220BL. Код 1С: 127719.",
    "images": [
      "assets/images/products/127719.jpg"
    ],
    "specs": []
  },
  {
    "id": "97686",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Букет орхідеї Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155O. Код 1С: 97686.",
    "images": [
      "assets/images/products/97686.jpg"
    ],
    "specs": []
  },
  {
    "id": "97685",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Букет орхідеї Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220O. Код 1С: 97685.",
    "images": [
      "assets/images/products/97685.jpg"
    ],
    "specs": []
  },
  {
    "id": "97677",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Сакура Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190SK. Код 1С: 97677.",
    "images": [
      "assets/images/products/97677.jpg"
    ],
    "specs": []
  },
  {
    "id": "97680",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Сакура Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155SK. Код 1С: 97680.",
    "images": [
      "assets/images/products/97680.jpg"
    ],
    "specs": []
  },
  {
    "id": "97683",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Сакура Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175SK. Код 1С: 97683.",
    "images": [
      "assets/images/products/97683.jpg"
    ],
    "specs": []
  },
  {
    "id": "97678",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Сакура Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220SK. Код 1С: 97678.",
    "images": [
      "assets/images/products/97678.jpg"
    ],
    "specs": []
  },
  {
    "id": "122946",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Дотик весни, Wave, Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175TS. Код 1С: 122946.",
    "images": [
      "assets/images/products/122946.jpg"
    ],
    "specs": []
  },
  {
    "id": "122948",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна,Дотик весни, Wave,  Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190TS. Код 1С: 122948.",
    "images": [
      "assets/images/products/122948.jpg"
    ],
    "specs": []
  },
  {
    "id": "122950",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня, Дотик весни, Wave, Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220TS. Код 1С: 122950.",
    "images": [
      "assets/images/products/122950.jpg"
    ],
    "specs": []
  },
  {
    "id": "122944",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Дотик весни, Wave, Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155TS. Код 1С: 122944.",
    "images": [
      "assets/images/products/122944.jpg"
    ],
    "specs": []
  },
  {
    "id": "110953",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Акварельні квіти Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190AF. Код 1С: 110953.",
    "images": [
      "assets/images/products/110953.jpg"
    ],
    "specs": []
  },
  {
    "id": "110954",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Акварельні квіти Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220AF. Код 1С: 110954.",
    "images": [
      "assets/images/products/110954.jpg"
    ],
    "specs": []
  },
  {
    "id": "110955",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Акварельні квіти Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155AF. Код 1С: 110955.",
    "images": [
      "assets/images/products/110955.jpg"
    ],
    "specs": []
  },
  {
    "id": "110957",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Акварельні квіти Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175AF. Код 1С: 110957.",
    "images": [
      "assets/images/products/110957.jpg"
    ],
    "specs": []
  },
  {
    "id": "122964",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна,Рідні барви, Wave,  Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190NC. Код 1С: 122964.",
    "images": [
      "assets/images/products/122964.jpg"
    ],
    "specs": []
  },
  {
    "id": "122960",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник,Рідні барви, Wave,  Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155NC. Код 1С: 122960.",
    "images": [
      "assets/images/products/122960.jpg"
    ],
    "specs": []
  },
  {
    "id": "122966",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня,Рідні барви, Wave,  Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220NC. Код 1С: 122966.",
    "images": [
      "assets/images/products/122966.jpg"
    ],
    "specs": []
  },
  {
    "id": "122962",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Рідні барви, Wave, Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175NC. Код 1С: 122962.",
    "images": [
      "assets/images/products/122962.jpg"
    ],
    "specs": []
  },
  {
    "id": "116540",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Літні Барви Wave Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: 155Sс. Код 1С: 116540.",
    "images": [
      "assets/images/products/116540.jpg"
    ],
    "specs": []
  },
  {
    "id": "116542",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Літні Барви Wave Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: 175Sс. Код 1С: 116542.",
    "images": [
      "assets/images/products/116542.jpg"
    ],
    "specs": []
  },
  {
    "id": "116538",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Літні Барви Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: 190Sс. Код 1С: 116538.",
    "images": [
      "assets/images/products/116538.jpg"
    ],
    "specs": []
  },
  {
    "id": "136967",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Магічна краса Wave Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220MG. Код 1С: 136967.",
    "images": [
      "assets/images/products/136967.jpg"
    ],
    "specs": []
  },
  {
    "id": "116539",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Літні Барви  Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: 220Sс. Код 1С: 116539.",
    "images": [
      "assets/images/products/116539.jpg"
    ],
    "specs": []
  },
  {
    "id": "136968",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Магічна краса Wave Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155MG. Код 1С: 136968.",
    "images": [
      "assets/images/products/136968.jpg"
    ],
    "specs": []
  },
  {
    "id": "101803",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Фіалки Wave, Vittora 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220V. Код 1С: 101803.",
    "images": [
      "assets/images/products/101803.jpg"
    ],
    "specs": []
  },
  {
    "id": "101805",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Фіалки Wave, Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175V. Код 1С: 101805.",
    "images": [
      "assets/images/products/101805.jpg"
    ],
    "specs": []
  },
  {
    "id": "101802",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Фіалки Wave, Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190V. Код 1С: 101802.",
    "images": [
      "assets/images/products/101802.jpg"
    ],
    "specs": []
  },
  {
    "id": "136969",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Магічна краса Wave Vittora 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190MG. Код 1С: 136969.",
    "images": [
      "assets/images/products/136969.jpg"
    ],
    "specs": []
  },
  {
    "id": "101804",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Фіалки Wave, Vittora 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155V. Код 1С: 101804.",
    "images": [
      "assets/images/products/101804.jpg"
    ],
    "specs": []
  },
  {
    "id": "110974",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Тендітна лілія Square, Vittora 215 мм",
    "price": 105.0,
    "desc": "Артикул: V-215Stl. Код 1С: 110974.",
    "images": [
      "assets/images/products/110974.jpg"
    ],
    "specs": []
  },
  {
    "id": "110976",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Тендітна лілія Square, Vittora 240 мм",
    "price": 135.0,
    "desc": "Артикул: V-240Stl. Код 1С: 110976.",
    "images": [
      "assets/images/products/110976.jpg"
    ],
    "specs": []
  },
  {
    "id": "110978",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Тендітна лілія Square, Vittora 230 мм",
    "price": 139.0,
    "desc": "Артикул: V-230Stl. Код 1С: 110978.",
    "images": [
      "assets/images/products/110978.jpg"
    ],
    "specs": []
  },
  {
    "id": "110979",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Тендітна лілія Square, Vittora 165 мм",
    "price": 97.0,
    "desc": "Артикул: V-165Stl. Код 1С: 110979.",
    "images": [
      "assets/images/products/110979.jpg"
    ],
    "specs": []
  },
  {
    "id": "136965",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Магічна краса Wave Vittora 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175MG. Код 1С: 136965.",
    "images": [
      "assets/images/products/136965.jpg"
    ],
    "specs": []
  },
  {
    "id": "136964",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Квітковий сюжет, Wave, Тарілка десертна,Vittora, 190 мм",
    "price": 84.0,
    "desc": "Артикул: V-190KC. Код 1С: 136964.",
    "images": [
      "assets/images/products/136964.jpg"
    ],
    "specs": []
  },
  {
    "id": "136975",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Квітковий сюжет, Wave, Салатник,Vittora, 155 мм",
    "price": 101.0,
    "desc": "Артикул: V-155KC. Код 1С: 136975.",
    "images": [
      "assets/images/products/136975.jpg"
    ],
    "specs": []
  },
  {
    "id": "116525",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Фіолетова гілка Square, Vittora  215 мм",
    "price": 105.0,
    "desc": "Артикул: V-215SPB. Код 1С: 116525.",
    "images": [
      "assets/images/products/116525.jpg"
    ],
    "specs": []
  },
  {
    "id": "136976",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Квітковий сюжет, Wave, Тарілка обідня,Vittora, 220 мм",
    "price": 118.0,
    "desc": "Артикул: V-220KC. Код 1С: 136976.",
    "images": [
      "assets/images/products/136976.jpg"
    ],
    "specs": []
  },
  {
    "id": "116526",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня  Фіолетова гілка Square, Vittora 240 мм",
    "price": 135.0,
    "desc": "Артикул: V-240SPB. Код 1С: 116526.",
    "images": [
      "assets/images/products/116526.jpg"
    ],
    "specs": []
  },
  {
    "id": "116528",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник ,Фіолетова гілка Square, Vittora  165 мм",
    "price": 97.0,
    "desc": "Артикул: V-165SPB. Код 1С: 116528.",
    "images": [
      "assets/images/products/116528.jpg"
    ],
    "specs": []
  },
  {
    "id": "116529",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник, Фіолетова гілка Square, Vittora  190 мм",
    "price": 114.0,
    "desc": "Артикул: V-190SPB. Код 1С: 116529.",
    "images": [
      "assets/images/products/116529.jpg"
    ],
    "specs": []
  },
  {
    "id": "116527",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова ,Фіолетова гілка Square, Vittora  230 мм",
    "price": 139.0,
    "desc": "Артикул: V-230SPB. Код 1С: 116527.",
    "images": [
      "assets/images/products/116527.jpg"
    ],
    "specs": []
  },
  {
    "id": "110989",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Сірі бульбашки Square, Vittora 165 мм",
    "price": 97.0,
    "desc": "Артикул: V-165Sgb. Код 1С: 110989.",
    "images": [
      "assets/images/products/110989.jpg"
    ],
    "specs": []
  },
  {
    "id": "110980",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Тендітна лілія Square, Vittora 190 мм",
    "price": 114.0,
    "desc": "Артикул: V-190Stl. Код 1С: 110980.",
    "images": [
      "assets/images/products/110980.jpg"
    ],
    "specs": []
  },
  {
    "id": "110990",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Сірі бульбашки Square, Vittora 190 мм",
    "price": 114.0,
    "desc": "Артикул: V-190Sgb. Код 1С: 110990.",
    "images": [
      "assets/images/products/110990.jpg"
    ],
    "specs": []
  },
  {
    "id": "110988",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Сірі бульбашки Square, Vittora 230 мм",
    "price": 139.0,
    "desc": "Артикул: V-230Sgb. Код 1С: 110988.",
    "images": [
      "assets/images/products/110988.jpg"
    ],
    "specs": []
  },
  {
    "id": "110987",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Сірі бульбашки Square, Vittora 240 мм",
    "price": 135.0,
    "desc": "Артикул: V-240Sgb. Код 1С: 110987.",
    "images": [
      "assets/images/products/110987.jpg"
    ],
    "specs": []
  },
  {
    "id": "110986",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Сірі бульбашки Square, Vittora 215 мм",
    "price": 105.0,
    "desc": "Артикул: V-215Sgb. Код 1С: 110986.",
    "images": [
      "assets/images/products/110986.jpg"
    ],
    "specs": []
  },
  {
    "id": "110992",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Рожева лілія Square, Vittora 215 мм",
    "price": 105.0,
    "desc": "Артикул: V-215Spl. Код 1С: 110992.",
    "images": [
      "assets/images/products/110992.jpg"
    ],
    "specs": []
  },
  {
    "id": "110995",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Рожева лілія Square, Vittora 230 мм",
    "price": 139.0,
    "desc": "Артикул: V-230Spl. Код 1С: 110995.",
    "images": [
      "assets/images/products/110995.jpg"
    ],
    "specs": []
  },
  {
    "id": "110994",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Рожева лілія Square, Vittora 240 мм",
    "price": 135.0,
    "desc": "Артикул: V-240Spl. Код 1С: 110994.",
    "images": [
      "assets/images/products/110994.jpg"
    ],
    "specs": []
  },
  {
    "id": "110996",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Рожева лілія Square, Vittora 165 мм",
    "price": 97.0,
    "desc": "Артикул: V-165Spl. Код 1С: 110996.",
    "images": [
      "assets/images/products/110996.jpg"
    ],
    "specs": []
  },
  {
    "id": "104151",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду Blanco, Vittora 19 пр",
    "price": 1992.0,
    "desc": "Артикул: VT-419W. Код 1С: 104151.",
    "images": [
      "assets/images/products/104151.jpg"
    ],
    "specs": []
  },
  {
    "id": "110997",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Рожева лілія Square, Vittora 190 мм",
    "price": 114.0,
    "desc": "Артикул: V-190Spl. Код 1С: 110997.",
    "images": [
      "assets/images/products/110997.jpg"
    ],
    "specs": []
  },
  {
    "id": "104149",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду Лаванда Wave, Vittora 18 пр в кор.",
    "price": 2380.0,
    "desc": "Артикул: VT-419L . Код 1С: 104149.",
    "images": [
      "assets/images/products/104149.jpg"
    ],
    "specs": []
  },
  {
    "id": "104150",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду Рожевий букет Wave, Vittora 18 пр в кор.",
    "price": 2380.0,
    "desc": "Артикул: VT-419РВ. Код 1С: 104150.",
    "images": [
      "assets/images/products/104150.jpg"
    ],
    "specs": []
  },
  {
    "id": "118458",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір салатників Рожевий букет Wave, Vittora 7 пр(6шт.165мм+1шт.200мм)",
    "price": 857.0,
    "desc": "Артикул: VT-420РВ. Код 1С: 118458.",
    "images": [
      "assets/images/products/118458.jpg"
    ],
    "specs": []
  },
  {
    "id": "118460",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір салатників Барвисті троянди Wave, Vittora 7 пр(6шт.175мм+1шт.230мм)",
    "price": 1059.0,
    "desc": "Артикул: VT-420СR. Код 1С: 118460.",
    "images": [
      "assets/images/products/118460.jpg"
    ],
    "specs": []
  },
  {
    "id": "136974",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Квітковий сюжет, Wave, Салатник,Vittora, 175 мм",
    "price": 118.0,
    "desc": "Артикул: V-175KC. Код 1С: 136974.",
    "images": [
      "assets/images/products/136974.jpg"
    ],
    "specs": []
  },
  {
    "id": "117587",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Прибульці Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-408P. Код 1С: 117587.",
    "images": [
      "assets/images/products/117587.jpg"
    ],
    "specs": []
  },
  {
    "id": "105757",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Комахи Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-405I. Код 1С: 105757.",
    "images": [
      "assets/images/products/105757.jpg"
    ],
    "specs": []
  },
  {
    "id": "105760",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Мед Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-407H. Код 1С: 105760.",
    "images": [
      "assets/images/products/105760.jpg"
    ],
    "specs": []
  },
  {
    "id": "105758",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Сонечко Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-406LB. Код 1С: 105758.",
    "images": [
      "assets/images/products/105758.jpg"
    ],
    "specs": []
  },
  {
    "id": "111012",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Фруктовниця 3-х ярусна Blanco Buongiorno, Vittora",
    "price": 576.0,
    "desc": "Артикул: VT-422B. Код 1С: 111012.",
    "images": [
      "assets/images/products/111012.jpg"
    ],
    "specs": []
  },
  {
    "id": "147188",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Джоконда Vittora, 190мм",
    "price": 103.0,
    "desc": "Артикул: VT-P-1190GI. Код 1С: 147188.",
    "images": [],
    "specs": []
  },
  {
    "id": "105756",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Динозаври Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-404D. Код 1С: 105756.",
    "images": [
      "assets/images/products/105756.jpg"
    ],
    "specs": []
  },
  {
    "id": "111011",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Фруктовниця 3-х ярусна Піони AURA, Vittora",
    "price": 665.0,
    "desc": "Артикул: VT-421AР. Код 1С: 111011.",
    "images": [
      "assets/images/products/111011.jpg"
    ],
    "specs": []
  },
  {
    "id": "117588",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Мі-Мишка Vittora 3 пр.(десертна-175мм  глибока-150мм Чашка -150мм)",
    "price": 439.0,
    "desc": "Артикул: VT-409P. Код 1С: 117588.",
    "images": [
      "assets/images/products/117588.jpg"
    ],
    "specs": []
  },
  {
    "id": "147186",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Джоконда Vittora, 140мм",
    "price": 118.0,
    "desc": "Артикул: VT-P-2140GI. Код 1С: 147186.",
    "images": [],
    "specs": []
  },
  {
    "id": "147183",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Венера Vittora, 190мм",
    "price": 103.0,
    "desc": "Артикул: VT-P-1190VE. Код 1С: 147183.",
    "images": [],
    "specs": []
  },
  {
    "id": "147185",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Джоконда Vittora 300мл",
    "price": 103.0,
    "desc": "Артикул: VT-P-3300GI. Код 1С: 147185.",
    "images": [
      "assets/images/products/147185.jpg"
    ],
    "specs": []
  },
  {
    "id": "147150",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Джоконда Vittora, 270мм",
    "price": 180.0,
    "desc": "Артикул: VT-P-1270GI. Код 1С: 147150.",
    "images": [
      "assets/images/products/147150.jpg"
    ],
    "specs": []
  },
  {
    "id": "147180",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Венера Vittora 300мл",
    "price": 103.0,
    "desc": "Артикул: VT-P-3300VE. Код 1С: 147180.",
    "images": [
      "assets/images/products/147180.jpg"
    ],
    "specs": []
  },
  {
    "id": "147154",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Мадонна Vittora, 267мм",
    "price": 158.0,
    "desc": "Артикул: VT-P-1267MA. Код 1С: 147154.",
    "images": [
      "assets/images/products/147154.jpg"
    ],
    "specs": []
  },
  {
    "id": "147187",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Джоконда Vittora, 220мм",
    "price": 148.0,
    "desc": "Артикул: VT-P-1220GI. Код 1С: 147187.",
    "images": [
      "assets/images/products/147187.jpg"
    ],
    "specs": []
  },
  {
    "id": "147153",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Мадонна Vittora, 190мм",
    "price": 96.0,
    "desc": "Артикул: VT-P-1190MA. Код 1С: 147153.",
    "images": [
      "assets/images/products/147153.jpg"
    ],
    "specs": []
  },
  {
    "id": "147181",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Венера Vittora, 160мм",
    "price": 118.0,
    "desc": "Артикул: VT-P-2160VE. Код 1С: 147181.",
    "images": [
      "assets/images/products/147181.jpg"
    ],
    "specs": []
  },
  {
    "id": "147184",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Венера Vittora, 265мм",
    "price": 180.0,
    "desc": "Артикул: VT-P-1265VE. Код 1С: 147184.",
    "images": [
      "assets/images/products/147184.jpg"
    ],
    "specs": []
  },
  {
    "id": "147152",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Мадонна Vittora, 220мм",
    "price": 126.0,
    "desc": "Артикул: VT-P-1220MA. Код 1С: 147152.",
    "images": [
      "assets/images/products/147152.jpg"
    ],
    "specs": []
  },
  {
    "id": "147182",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Венера Vittora, 220мм",
    "price": 148.0,
    "desc": "Артикул: VT-P-1220VE. Код 1С: 147182.",
    "images": [
      "assets/images/products/147182.jpg"
    ],
    "specs": []
  },
  {
    "id": "147158",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Вавилон Vittora, 152мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2152VA. Код 1С: 147158.",
    "images": [
      "assets/images/products/147158.jpg"
    ],
    "specs": []
  },
  {
    "id": "156020",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдо Вавилон Vittora, 300мм",
    "price": 208.0,
    "desc": "Артикул: VT-P-1300VA. Код 1С: 156020.",
    "images": [],
    "specs": []
  },
  {
    "id": "147160",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Вавилон Vittora, 203мм",
    "price": 99.0,
    "desc": "Артикул: VT-P-1203VA. Код 1С: 147160.",
    "images": [
      "assets/images/products/147160.jpg"
    ],
    "specs": []
  },
  {
    "id": "155465",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Вавилон Vittora, 203мм",
    "price": 172.0,
    "desc": "Артикул: VT-P-2203VA. Код 1С: 155465.",
    "images": [],
    "specs": []
  },
  {
    "id": "147159",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня глибока Вавилон Vittora, 254мм",
    "price": 147.0,
    "desc": "Артикул: VT-P-1254VA. Код 1С: 147159.",
    "images": [
      "assets/images/products/147159.jpg"
    ],
    "specs": []
  },
  {
    "id": "147157",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник з вушками Вавилон Vittora, 146мм",
    "price": 150.0,
    "desc": "Артикул: VT-P-2146VA. Код 1С: 147157.",
    "images": [
      "assets/images/products/147157.jpg"
    ],
    "specs": []
  },
  {
    "id": "147155",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник у формі серця Вавилон Vittora, 178мм",
    "price": 163.0,
    "desc": "Артикул: VT-P-2178VA. Код 1С: 147155.",
    "images": [
      "assets/images/products/147155.jpg"
    ],
    "specs": []
  },
  {
    "id": "147156",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка восьмикутна Вавилон Vittora, 210мм",
    "price": 175.0,
    "desc": "Артикул: VT-P-1210VA. Код 1С: 147156.",
    "images": [
      "assets/images/products/147156.jpg"
    ],
    "specs": []
  },
  {
    "id": "147151",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Мадонна Vittora, 152мм",
    "price": 115.0,
    "desc": "Артикул: VT-P-2152MA. Код 1С: 147151.",
    "images": [
      "assets/images/products/147151.jpg"
    ],
    "specs": []
  },
  {
    "id": "155469",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка овальна з ручками Вавилон Vittora, 355мм",
    "price": 345.0,
    "desc": "Артикул: VT-P-2355VA. Код 1С: 155469.",
    "images": [
      "assets/images/products/155469.jpg"
    ],
    "specs": []
  },
  {
    "id": "155466",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник у формі серця Вавилон Vittora, 200мм",
    "price": 195.0,
    "desc": "Артикул: VT-P-2200VA. Код 1С: 155466.",
    "images": [
      "assets/images/products/155466.jpg"
    ],
    "specs": []
  },
  {
    "id": "157284",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Cream Royale Vittora, 175мм",
    "price": 163.0,
    "desc": "Артикул: VT-P-2175CR. Код 1С: 157284.",
    "images": [
      "assets/images/products/157284.jpg"
    ],
    "specs": []
  },
  {
    "id": "155467",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка для пасти Вавилон Vittora, 178мм",
    "price": 108.0,
    "desc": "Артикул: VT-P-4178VA. Код 1С: 155467.",
    "images": [
      "assets/images/products/155467.jpg"
    ],
    "specs": []
  },
  {
    "id": "155468",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка для пасти Вавилон Vittora, 203мм",
    "price": 111.0,
    "desc": "Артикул: VT-P-4203VA. Код 1С: 155468.",
    "images": [
      "assets/images/products/155468.jpg"
    ],
    "specs": []
  },
  {
    "id": "157282",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдце Cream Royale Vittora, 147мм",
    "price": 64.0,
    "desc": "Артикул: VT-P-1147CR. Код 1С: 157282.",
    "images": [
      "assets/images/products/157282.jpg"
    ],
    "specs": []
  },
  {
    "id": "157280",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Cream Royale Vittora, 200мм",
    "price": 139.0,
    "desc": "Артикул: VT-P-1200CR. Код 1С: 157280.",
    "images": [
      "assets/images/products/157280.jpg"
    ],
    "specs": []
  },
  {
    "id": "157281",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Cream Royale Vittora, 165мм",
    "price": 95.0,
    "desc": "Артикул: VT-P-1165CR. Код 1С: 157281.",
    "images": [
      "assets/images/products/157281.jpg"
    ],
    "specs": []
  },
  {
    "id": "157283",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Cream Royale Vittora, 225мм",
    "price": 282.0,
    "desc": "Артикул: VT-P-2225CR. Код 1С: 157283.",
    "images": [
      "assets/images/products/157283.jpg"
    ],
    "specs": []
  },
  {
    "id": "156628",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Cream Royale Vittora, 250мм",
    "price": 208.0,
    "desc": "Артикул: VT-P-1250CR. Код 1С: 156628.",
    "images": [
      "assets/images/products/156628.jpg"
    ],
    "specs": []
  },
  {
    "id": "157285",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Cream Royale Vittora, 120мм",
    "price": 88.0,
    "desc": "Артикул: VT-P-2120CR. Код 1С: 157285.",
    "images": [
      "assets/images/products/157285.jpg"
    ],
    "specs": []
  },
  {
    "id": "157288",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдо Cream Royale Vittora, 250*118мм",
    "price": 233.0,
    "desc": "Артикул: VT-P-1255CR. Код 1С: 157288.",
    "images": [
      "assets/images/products/157288.jpg"
    ],
    "specs": []
  },
  {
    "id": "157289",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдо Cream Royale Vittora, 217*103мм",
    "price": 211.0,
    "desc": "Артикул: VT-P-2217CR. Код 1С: 157289.",
    "images": [
      "assets/images/products/157289.jpg"
    ],
    "specs": []
  },
  {
    "id": "157286",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з блюдцем Cream Royale Vittora, 250мл",
    "price": 137.0,
    "desc": "Артикул: VT-P-3250CR. Код 1С: 157286.",
    "images": [
      "assets/images/products/157286.jpg"
    ],
    "specs": []
  },
  {
    "id": "157287",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдо Cream Royale Vittora, 335*148мм",
    "price": 394.0,
    "desc": "Артикул: VT-P-1335CR. Код 1С: 157287.",
    "images": [
      "assets/images/products/157287.jpg"
    ],
    "specs": []
  },
  {
    "id": "157733",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Grafene Night Vittora, 350мл",
    "price": 143.0,
    "desc": "Артикул: VT-P-3350GN. Код 1С: 157733.",
    "images": [
      "assets/images/products/157733.jpg"
    ],
    "specs": []
  },
  {
    "id": "155472",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Вернісаж Vittora, 228мм",
    "price": 191.0,
    "desc": "Артикул: VT-P-1228Vs. Код 1С: 155472.",
    "images": [],
    "specs": []
  },
  {
    "id": "156021",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Блюдо Вернісаж Vittora, 305мм",
    "price": 247.0,
    "desc": "Артикул: VT-P-1305V. Код 1С: 156021.",
    "images": [],
    "specs": []
  },
  {
    "id": "156022",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Вернісаж Vittora, 140мм",
    "price": 96.0,
    "desc": "Артикул: VT-P-2140V. Код 1С: 156022.",
    "images": [],
    "specs": []
  },
  {
    "id": "156024",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Вернісаж Vittora, 228мм",
    "price": 117.0,
    "desc": "Артикул: VT-P-1228V. Код 1С: 156024.",
    "images": [],
    "specs": []
  },
  {
    "id": "156633",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Grafene Day Vittora, 260мм",
    "price": 193.0,
    "desc": "Артикул: VT-P-1260GD. Код 1С: 156633.",
    "images": [
      "assets/images/products/156633.jpg"
    ],
    "specs": []
  },
  {
    "id": "156023",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Вернісаж Vittora, 200мм",
    "price": 99.0,
    "desc": "Артикул: VT-P-2200V. Код 1С: 156023.",
    "images": [],
    "specs": []
  },
  {
    "id": "156025",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Вернісаж Vittora, 140мм",
    "price": 90.0,
    "desc": "Артикул: VT-P-2141V. Код 1С: 156025.",
    "images": [],
    "specs": []
  },
  {
    "id": "157736",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Grafene Day Vittora, 350мл",
    "price": 118.0,
    "desc": "Артикул: VT-P-3350GD. Код 1С: 157736.",
    "images": [
      "assets/images/products/157736.jpg"
    ],
    "specs": []
  },
  {
    "id": "156026",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Вернісаж Vittora, 150мм",
    "price": 99.0,
    "desc": "Артикул: VT-P-2150V. Код 1С: 156026.",
    "images": [],
    "specs": []
  },
  {
    "id": "157732",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Grafene Night Vittora, 140мм",
    "price": 174.0,
    "desc": "Артикул: VT-P-2140GN. Код 1С: 157732.",
    "images": [
      "assets/images/products/157732.jpg"
    ],
    "specs": []
  },
  {
    "id": "156632",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Grafene Night Vittora, 260мм",
    "price": 234.0,
    "desc": "Артикул: VT-P-1260GN. Код 1С: 156632.",
    "images": [
      "assets/images/products/156632.jpg"
    ],
    "specs": []
  },
  {
    "id": "157734",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Grafene Day Vittora, 200мм",
    "price": 113.0,
    "desc": "Артикул: VT-P-1200GD. Код 1С: 157734.",
    "images": [
      "assets/images/products/157734.jpg"
    ],
    "specs": []
  },
  {
    "id": "157731",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Grafene Night Vittora, 200мм",
    "price": 132.0,
    "desc": "Артикул: VT-P-1200GN. Код 1С: 157731.",
    "images": [
      "assets/images/products/157731.jpg"
    ],
    "specs": []
  },
  {
    "id": "157735",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Grafene Day Vittora, 140мм",
    "price": 143.0,
    "desc": "Артикул: VT-P-2140GD. Код 1С: 157735.",
    "images": [
      "assets/images/products/157735.jpg"
    ],
    "specs": []
  },
  {
    "id": "147170",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка квадратна Аполлон Vittora, 240мм",
    "price": 147.0,
    "desc": "Артикул: VT-P-1240AP. Код 1С: 147170.",
    "images": [
      "assets/images/products/147170.jpg"
    ],
    "specs": []
  },
  {
    "id": "147168",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Аполлон Vittora, 140мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2140AP. Код 1С: 147168.",
    "images": [
      "assets/images/products/147168.jpg"
    ],
    "specs": []
  },
  {
    "id": "147169",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Аполлон Vittora, 178мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2178AP. Код 1С: 147169.",
    "images": [
      "assets/images/products/147169.jpg"
    ],
    "specs": []
  },
  {
    "id": "156029",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Камелія Vittora, 190мм",
    "price": 90.0,
    "desc": "Артикул: VT-P-1190СA. Код 1С: 156029.",
    "images": [
      "assets/images/products/156029.jpg"
    ],
    "specs": []
  },
  {
    "id": "155473",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Камелія Vittora, 254мм",
    "price": 137.0,
    "desc": "Артикул: VT-P-1254СA. Код 1С: 155473.",
    "images": [
      "assets/images/products/155473.jpg"
    ],
    "specs": []
  },
  {
    "id": "156030",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Камелія Vittora, 203мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2203СA. Код 1С: 156030.",
    "images": [
      "assets/images/products/156030.jpg"
    ],
    "specs": []
  },
  {
    "id": "147167",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Аполлон Vittora, 203мм",
    "price": 108.0,
    "desc": "Артикул: VT-P-1203AP. Код 1С: 147167.",
    "images": [
      "assets/images/products/147167.jpg"
    ],
    "specs": []
  },
  {
    "id": "147166",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Аполлон Vittora, 254мм",
    "price": 163.0,
    "desc": "Артикул: VT-P-1254AP. Код 1С: 147166.",
    "images": [
      "assets/images/products/147166.jpg"
    ],
    "specs": []
  },
  {
    "id": "156031",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Камелія Vittora, 140мм",
    "price": 90.0,
    "desc": "Артикул: VT-P-2140СA. Код 1С: 156031.",
    "images": [
      "assets/images/products/156031.jpg"
    ],
    "specs": []
  },
  {
    "id": "147165",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка квадратна Артеміда Vittora, 240мм",
    "price": 147.0,
    "desc": "Артикул: VT-P-1240AR. Код 1С: 147165.",
    "images": [
      "assets/images/products/147165.jpg"
    ],
    "specs": []
  },
  {
    "id": "147164",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Артеміда Vittora, 178мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2178AR. Код 1С: 147164.",
    "images": [
      "assets/images/products/147164.jpg"
    ],
    "specs": []
  },
  {
    "id": "147163",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Артеміда Vittora, 140мм",
    "price": 104.0,
    "desc": "Артикул: VT-P-2140AR. Код 1С: 147163.",
    "images": [
      "assets/images/products/147163.jpg"
    ],
    "specs": []
  },
  {
    "id": "147161",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Артеміда Vittora, 254мм",
    "price": 163.0,
    "desc": "Артикул: VT-P-1254AR. Код 1С: 147161.",
    "images": [
      "assets/images/products/147161.jpg"
    ],
    "specs": []
  },
  {
    "id": "147162",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Артеміда Vittora, 203мм",
    "price": 108.0,
    "desc": "Артикул: VT-P-1203AR. Код 1С: 147162.",
    "images": [
      "assets/images/products/147162.jpg"
    ],
    "specs": []
  },
  {
    "id": "159074",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Gray Texture Vittora, 205мл",
    "price": 179.0,
    "desc": "Артикул: VT-P-1205GT. Код 1С: 159074.",
    "images": [],
    "specs": []
  },
  {
    "id": "147175",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Офелія Vittora 350мл",
    "price": 126.0,
    "desc": "Артикул: VT-P-3350OF. Код 1С: 147175.",
    "images": [
      "assets/images/products/147175.jpg"
    ],
    "specs": []
  },
  {
    "id": "147176",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Офелія Vittora, 140мм",
    "price": 177.0,
    "desc": "Артикул: VT-P-2140OF. Код 1С: 147176.",
    "images": [
      "assets/images/products/147176.jpg"
    ],
    "specs": []
  },
  {
    "id": "159075",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Gray Texture Vittora, 265мл",
    "price": 236.0,
    "desc": "Артикул: VT-P-1265GT. Код 1С: 159075.",
    "images": [],
    "specs": []
  },
  {
    "id": "147177",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Офелія Vittora, 203мм",
    "price": 197.0,
    "desc": "Артикул: VT-P-2203OF. Код 1С: 147177.",
    "images": [
      "assets/images/products/147177.jpg"
    ],
    "specs": []
  },
  {
    "id": "147179",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Офелія Vittora, 265мм",
    "price": 231.0,
    "desc": "Артикул: VT-P-1265OF. Код 1С: 147179.",
    "images": [
      "assets/images/products/147179.jpg"
    ],
    "specs": []
  },
  {
    "id": "147178",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Офелія Vittora, 200мм",
    "price": 133.0,
    "desc": "Артикул: VT-P-1200OF. Код 1С: 147178.",
    "images": [
      "assets/images/products/147178.jpg"
    ],
    "specs": []
  },
  {
    "id": "147171",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Калахарі Vittora 350мл",
    "price": 104.0,
    "desc": "Артикул: VT-P-3340KA. Код 1С: 147171.",
    "images": [
      "assets/images/products/147171.jpg"
    ],
    "specs": []
  },
  {
    "id": "147174",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Калахарі Vittora, 260мм",
    "price": 194.0,
    "desc": "Артикул: VT-P-1260KA. Код 1С: 147174.",
    "images": [
      "assets/images/products/147174.jpg"
    ],
    "specs": []
  },
  {
    "id": "147173",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Калахарі Vittora, 200мм",
    "price": 113.0,
    "desc": "Артикул: VT-P-1200KA. Код 1С: 147173.",
    "images": [
      "assets/images/products/147173.jpg"
    ],
    "specs": []
  },
  {
    "id": "147172",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Калахарі Vittora, 152мм",
    "price": 165.0,
    "desc": "Артикул: VT-P-2152KA. Код 1С: 147172.",
    "images": [
      "assets/images/products/147172.jpg"
    ],
    "specs": []
  },
  {
    "id": "156630",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Galaxy Vittora, 260мм",
    "price": 182.0,
    "desc": "Артикул: VT-P-1260GA. Код 1С: 156630.",
    "images": [],
    "specs": []
  },
  {
    "id": "157737",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Galaxy Vittora, 210мм",
    "price": 117.0,
    "desc": "Артикул: VT-P-1210GA. Код 1С: 157737.",
    "images": [],
    "specs": []
  },
  {
    "id": "157739",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Galaxy Vittora, 150*80мм",
    "price": 145.0,
    "desc": "Артикул: VT-P-2150GA. Код 1С: 157739.",
    "images": [],
    "specs": []
  },
  {
    "id": "157738",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Galaxy Vittora, 230*45мм",
    "price": 250.0,
    "desc": "Артикул: VT-P-2230GA. Код 1С: 157738.",
    "images": [],
    "specs": []
  },
  {
    "id": "158614",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Gray Texture Vittora, 340мл",
    "price": 88.0,
    "desc": "Артикул: VT-P-3340GT. Код 1С: 158614.",
    "images": [
      "assets/images/products/158614.jpg"
    ],
    "specs": []
  },
  {
    "id": "159076",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Golden Line Vittora, 220мм",
    "price": 180.0,
    "desc": "Артикул: VT-P-1220GL. Код 1С: 159076.",
    "images": [
      "assets/images/products/159076.jpg"
    ],
    "specs": []
  },
  {
    "id": "158615",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Golden Line Vittora, 285мм",
    "price": 270.0,
    "desc": "Артикул: VT-P-1285GL. Код 1С: 158615.",
    "images": [
      "assets/images/products/158615.jpg"
    ],
    "specs": []
  },
  {
    "id": "159073",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Gray Texture Vittora, 150мм",
    "price": 143.0,
    "desc": "Артикул: VT-P-2150GT. Код 1С: 159073.",
    "images": [
      "assets/images/products/159073.jpg"
    ],
    "specs": []
  },
  {
    "id": "159078",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Golden Line Vittora, 245мм",
    "price": 313.0,
    "desc": "Артикул: VT-P-2245GL. Код 1С: 159078.",
    "images": [
      "assets/images/products/159078.jpg"
    ],
    "specs": []
  },
  {
    "id": "157290",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Verona Verde Vittora, 205мм",
    "price": 146.0,
    "desc": "Артикул: VT-P-1205VV. Код 1С: 157290.",
    "images": [],
    "specs": []
  },
  {
    "id": "156629",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Verona Verde Vittora, 260мм",
    "price": 249.0,
    "desc": "Артикул: VT-P-1260VV. Код 1С: 156629.",
    "images": [],
    "specs": []
  },
  {
    "id": "159077",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Golden Line Vittora, 280мм",
    "price": 372.0,
    "desc": "Артикул: VT-P-2280GL . Код 1С: 159077.",
    "images": [
      "assets/images/products/159077.jpg"
    ],
    "specs": []
  },
  {
    "id": "157293",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Verona Verde Vittora, 175*70мм",
    "price": 191.0,
    "desc": "Артикул: VT-P-2175VV. Код 1С: 157293.",
    "images": [],
    "specs": []
  },
  {
    "id": "157292",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Verona Verde Vittora, 200*50мм",
    "price": 212.0,
    "desc": "Артикул: VT-P-2200VV. Код 1С: 157292.",
    "images": [],
    "specs": []
  },
  {
    "id": "157291",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка супова Verona Verde Vittora, 230*50мм",
    "price": 378.0,
    "desc": "Артикул: VT-P-2230VV. Код 1С: 157291.",
    "images": [],
    "specs": []
  },
  {
    "id": "157740",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Eclipse Vittora, 220x204мм",
    "price": 177.0,
    "desc": "Артикул: VT-P-1220EC. Код 1С: 157740.",
    "images": [
      "assets/images/products/157740.jpg"
    ],
    "specs": []
  },
  {
    "id": "159079",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Golden Line Vittora, 220мм",
    "price": 258.0,
    "desc": "Артикул: VT-P-2220GL. Код 1С: 159079.",
    "images": [
      "assets/images/products/159079.jpg"
    ],
    "specs": []
  },
  {
    "id": "157742",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Eclipse Vittora, 130x115мм",
    "price": 159.0,
    "desc": "Артикул: VT-P-2130EC. Код 1С: 157742.",
    "images": [
      "assets/images/products/157742.jpg"
    ],
    "specs": []
  },
  {
    "id": "157294",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Verona Verde Vittora, 340мм",
    "price": 114.0,
    "desc": "Артикул: VT-P-3340VV. Код 1С: 157294.",
    "images": [],
    "specs": []
  },
  {
    "id": "156631",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Eclipse Vittora, 295x265мм",
    "price": 261.0,
    "desc": "Артикул: VT-P-1295EC. Код 1С: 156631.",
    "images": [
      "assets/images/products/156631.jpg"
    ],
    "specs": []
  },
  {
    "id": "157741",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Eclipse Vittora, 200x225мм",
    "price": 200.0,
    "desc": "Артикул: VT-P-2200EC. Код 1С: 157741.",
    "images": [
      "assets/images/products/157741.jpg"
    ],
    "specs": []
  },
  {
    "id": "157743",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Eclipse Vittora, 350мл",
    "price": 99.0,
    "desc": "Артикул: VT-P-3350EC. Код 1С: 157743.",
    "images": [
      "assets/images/products/157743.jpg"
    ],
    "specs": []
  },
  {
    "id": "111067",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Океан ТМ Vittora 650мл, 200мм",
    "price": 158.0,
    "desc": "Артикул: VT-P-2200О. Код 1С: 111067.",
    "images": [
      "assets/images/products/111067.jpg"
    ],
    "specs": []
  },
  {
    "id": "111068",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Океан ТМ Vittora 570мл, 150мм",
    "price": 205.0,
    "desc": "Артикул: VT-P-2150О. Код 1С: 111068.",
    "images": [
      "assets/images/products/111068.jpg"
    ],
    "specs": []
  },
  {
    "id": "111069",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Океан ТМ Vittora 320мл",
    "price": 139.0,
    "desc": "Артикул: VT-P-3320О. Код 1С: 111069.",
    "images": [
      "assets/images/products/111069.jpg"
    ],
    "specs": []
  },
  {
    "id": "111065",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Океан ТМ Vittora 265мм",
    "price": 207.0,
    "desc": "Артикул: VT-P-1265О. Код 1С: 111065.",
    "images": [
      "assets/images/products/111065.jpg"
    ],
    "specs": []
  },
  {
    "id": "111072",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка глибока Тропічний персик ТМ Vittora 650мл, 200мм",
    "price": 165.0,
    "desc": "Артикул: VT-P-2200TP. Код 1С: 111072.",
    "images": [
      "assets/images/products/111072.jpg"
    ],
    "specs": []
  },
  {
    "id": "111066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Океан ТМ Vittora 190мм",
    "price": 134.0,
    "desc": "Артикул: VT-P-1190О. Код 1С: 111066.",
    "images": [
      "assets/images/products/111066.jpg"
    ],
    "specs": []
  },
  {
    "id": "111070",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Тропічний персик ТМ Vittora 265мм",
    "price": 219.0,
    "desc": "Артикул: VT-P-1265TP. Код 1С: 111070.",
    "images": [
      "assets/images/products/111070.jpg"
    ],
    "specs": []
  },
  {
    "id": "111071",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Тропічний персик ТМ Vittora 190мм",
    "price": 141.0,
    "desc": "Артикул: VT-P-1190TP. Код 1С: 111071.",
    "images": [
      "assets/images/products/111071.jpg"
    ],
    "specs": []
  },
  {
    "id": "128703",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка обідня Квіткова вуаль Vittora, 256мм",
    "price": 401.0,
    "desc": "Артикул: VT-P-1256FV. Код 1С: 128703.",
    "images": [
      "assets/images/products/128703.jpg"
    ],
    "specs": []
  },
  {
    "id": "111073",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Тропічний персик ТМ Vittora 570мл, 155мм",
    "price": 189.0,
    "desc": "Артикул: VT-P-2155TP. Код 1С: 111073.",
    "images": [
      "assets/images/products/111073.jpg"
    ],
    "specs": []
  },
  {
    "id": "128704",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка десертна Квіткова вуаль Vittora, 197мм",
    "price": 263.0,
    "desc": "Артикул: VT-P-1197FV. Код 1С: 128704.",
    "images": [
      "assets/images/products/128704.jpg"
    ],
    "specs": []
  },
  {
    "id": "128705",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткова вуаль Vittora, 420мл, 140мм",
    "price": 208.0,
    "desc": "Артикул: VT-P-2140FV. Код 1С: 128705.",
    "images": [
      "assets/images/products/128705.jpg"
    ],
    "specs": []
  },
  {
    "id": "111074",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Тропічний персик ТМ Vittora 320мл",
    "price": 139.0,
    "desc": "Артикул: VT-P-3320TP. Код 1С: 111074.",
    "images": [
      "assets/images/products/111074.jpg"
    ],
    "specs": []
  },
  {
    "id": "128706",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Квіткова вуаль Vittora, 210мл, 100мм",
    "price": 151.0,
    "desc": "Артикул: VT-P-2100FV. Код 1С: 128706.",
    "images": [
      "assets/images/products/128706.jpg"
    ],
    "specs": []
  },
  {
    "id": "133483",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Вишукана троянда Vittora, 125мм, 480мл",
    "price": 217.0,
    "desc": "Артикул: VT-C-190130 . Код 1С: 133483.",
    "images": [
      "assets/images/products/133483.jpg"
    ],
    "specs": []
  },
  {
    "id": "128889",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Веселі горохи Vittora, 140мм, 550мл",
    "price": 178.0,
    "desc": "Артикул: VT-C-37140. Код 1С: 128889.",
    "images": [
      "assets/images/products/128889.jpg"
    ],
    "specs": []
  },
  {
    "id": "134851",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Мамина турбота  Vittora, 650мл",
    "price": 134.0,
    "desc": "Артикул: VT-P-43140. Код 1С: 134851.",
    "images": [
      "assets/images/products/134851.jpg"
    ],
    "specs": []
  },
  {
    "id": "128961",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Квітковий вальс з вушками , Vittora 125мм, 500мл",
    "price": 134.0,
    "desc": "Артикул: VT-C-39125. Код 1С: 128961.",
    "images": [
      "assets/images/products/128961.jpg"
    ],
    "specs": []
  },
  {
    "id": "128964",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Ароматний обід з вушками , Vittora 125мм, 500мл",
    "price": 134.0,
    "desc": "Артикул: VT-C-40125. Код 1С: 128964.",
    "images": [
      "assets/images/products/128964.jpg"
    ],
    "specs": []
  },
  {
    "id": "134850",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Барви ночі  Vittora, 650мл",
    "price": 134.0,
    "desc": "Артикул: VT-P-42140. Код 1С: 134850.",
    "images": [
      "assets/images/products/134850.jpg"
    ],
    "specs": []
  },
  {
    "id": "137555",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Незабутній вечір Vittora, 140мм",
    "price": 251.0,
    "desc": "Артикул: VT-C-297140. Код 1С: 137555.",
    "images": [
      "assets/images/products/137555.jpg"
    ],
    "specs": []
  },
  {
    "id": "155471",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Менажниця біла Vittora, 305мм",
    "price": 270.0,
    "desc": "Артикул: VT-P-1305МW. Код 1С: 155471.",
    "images": [
      "assets/images/products/155471.jpg"
    ],
    "specs": []
  },
  {
    "id": "122682",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Смак свободи Vittora, 660мл",
    "price": 119.0,
    "desc": "Артикул: VT-C-94160. Код 1С: 122682.",
    "images": [
      "assets/images/products/122682.jpg"
    ],
    "specs": []
  },
  {
    "id": "128966",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Пастельні візерунки з вушками , Vittora 165мм, 600мл",
    "price": 212.0,
    "desc": "Артикул: VT-C-41165. Код 1С: 128966.",
    "images": [
      "assets/images/products/128966.jpg"
    ],
    "specs": []
  },
  {
    "id": "155470",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Менажниця біла Vittora, 254мм",
    "price": 198.0,
    "desc": "Артикул: VT-P-1254МW. Код 1С: 155470.",
    "images": [
      "assets/images/products/155470.jpg"
    ],
    "specs": []
  },
  {
    "id": "127365",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний 750мл VITTORA",
    "price": 534.0,
    "desc": "Артикул: VT-5501-750. Код 1С: 127365.",
    "images": [
      "assets/images/products/127365.jpg"
    ],
    "specs": []
  },
  {
    "id": "146631",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний VITTORA, 350мл",
    "price": 510.0,
    "desc": "Артикул: VT-5502-350. Код 1С: 146631.",
    "images": [
      "assets/images/products/146631.jpg"
    ],
    "specs": []
  },
  {
    "id": "128959",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Безмежна любов з вушками , Vittora 140мм, 650мл",
    "price": 126.0,
    "desc": "Артикул: VT-C-38140. Код 1С: 128959.",
    "images": [
      "assets/images/products/128959.jpg"
    ],
    "specs": []
  },
  {
    "id": "146638",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний VITTORA, 750мл",
    "price": 575.0,
    "desc": "Артикул: VT-5502-750. Код 1С: 146638.",
    "images": [
      "assets/images/products/146638.jpg"
    ],
    "specs": []
  },
  {
    "id": "137554",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Баланс смаку Vittora, 165мм",
    "price": 199.0,
    "desc": "Артикул: VT-C-287165. Код 1С: 137554.",
    "images": [
      "assets/images/products/137554.jpg"
    ],
    "specs": []
  },
  {
    "id": "146639",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний VITTORA, 550мл",
    "price": 541.0,
    "desc": "Артикул: VT-5502-550. Код 1С: 146639.",
    "images": [
      "assets/images/products/146639.jpg"
    ],
    "specs": []
  },
  {
    "id": "146637",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний VITTORA, 1200мл",
    "price": 671.0,
    "desc": "Артикул: VT-5502-1200. Код 1С: 146637.",
    "images": [
      "assets/images/products/146637.jpg"
    ],
    "specs": []
  },
  {
    "id": "127366",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LE MANS скляний VITTORA, 950мл",
    "price": 642.0,
    "desc": "Артикул: VT-5502-950. Код 1С: 127366.",
    "images": [
      "assets/images/products/127366.jpg"
    ],
    "specs": []
  },
  {
    "id": "135472",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LOUVRE скляний VITTORA, 1000мл",
    "price": 551.0,
    "desc": "Артикул: VT-5506-1000. Код 1С: 135472.",
    "images": [
      "assets/images/products/135472.jpg"
    ],
    "specs": []
  },
  {
    "id": "135474",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний GUSTAFF скляний VITTORA, 1000мл",
    "price": 909.0,
    "desc": "Артикул: VT-5507-1000. Код 1С: 135474.",
    "images": [
      "assets/images/products/135474.jpg"
    ],
    "specs": []
  },
  {
    "id": "135473",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LOUVRE скляний VITTORA, 1500мл",
    "price": 630.0,
    "desc": "Артикул: VT-5506-1500. Код 1С: 135473.",
    "images": [
      "assets/images/products/135473.jpg"
    ],
    "specs": []
  },
  {
    "id": "138467",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний CHER скляний VITTORA, 1000мл                    (аналог VT-5505-1000)",
    "price": 848.0,
    "desc": "Артикул: VT-5504-1000. Код 1С: 138467.",
    "images": [
      "assets/images/products/138467.jpg"
    ],
    "specs": []
  },
  {
    "id": "127368",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний CHER скляний 800мл VITTORA",
    "price": 697.0,
    "desc": "Артикул: VT-5504-800. Код 1С: 127368.",
    "images": [
      "assets/images/products/127368.jpg"
    ],
    "specs": []
  },
  {
    "id": "127369",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний CHER скляний 1000мл VITTORA",
    "price": 847.0,
    "desc": "Артикул: VT-5505-1000. Код 1С: 127369.",
    "images": [
      "assets/images/products/127369.jpg"
    ],
    "specs": []
  },
  {
    "id": "127367",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LOIR скляний 1000мл VITTORA",
    "price": 650.0,
    "desc": "Артикул: VT-5503-1000. Код 1С: 127367.",
    "images": [
      "assets/images/products/127367.jpg"
    ],
    "specs": []
  },
  {
    "id": "135069",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LOIR скляний VITTORA, 1500мл",
    "price": 703.0,
    "desc": "Артикул: VT-5503-1500. Код 1С: 135069.",
    "images": [
      "assets/images/products/135069.jpg"
    ],
    "specs": []
  },
  {
    "id": "135476",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний GUSTAFF скляний VITTORA, 1500мл",
    "price": 984.0,
    "desc": "Артикул: VT-5507-1500. Код 1С: 135476.",
    "images": [
      "assets/images/products/135476.jpg"
    ],
    "specs": []
  },
  {
    "id": "146635",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний MICHEL скляний VITTORA, 1000мл",
    "price": 414.0,
    "desc": "Артикул: VT-5509-1000. Код 1С: 146635.",
    "images": [
      "assets/images/products/146635.jpg"
    ],
    "specs": []
  },
  {
    "id": "136063",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний BARON VITTORA, 1250мл",
    "price": 419.0,
    "desc": "Артикул: VT-8901-1250. Код 1С: 136063.",
    "images": [
      "assets/images/products/136063.jpg"
    ],
    "specs": []
  },
  {
    "id": "146636",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний PIERRE скляний VITTORA, 850мл",
    "price": 977.0,
    "desc": "Артикул: VT-5508-850. Код 1С: 146636.",
    "images": [
      "assets/images/products/146636.jpg"
    ],
    "specs": []
  },
  {
    "id": "146634",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний VOYAGE скляний VITTORA, 1500мл",
    "price": 637.0,
    "desc": "Артикул: VT-5510-1500. Код 1С: 146634.",
    "images": [
      "assets/images/products/146634.jpg"
    ],
    "specs": []
  },
  {
    "id": "146633",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний VOYAGE скляний VITTORA, 1800мл",
    "price": 676.0,
    "desc": "Артикул: VT-5510-1800. Код 1С: 146633.",
    "images": [
      "assets/images/products/146633.jpg"
    ],
    "specs": []
  },
  {
    "id": "127372",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес DIJON, 800мл VITTORA",
    "price": 480.0,
    "desc": "Артикул: VT-5603-800. Код 1С: 127372.",
    "images": [
      "assets/images/products/127372.jpg"
    ],
    "specs": []
  },
  {
    "id": "127371",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес DIJON, 600мл VITTORA",
    "price": 385.0,
    "desc": "Артикул: VT-5602-600. Код 1С: 127371.",
    "images": [
      "assets/images/products/127371.jpg"
    ],
    "specs": []
  },
  {
    "id": "127370",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес DIJON, 350мл VITTORA",
    "price": 287.0,
    "desc": "Артикул: VT-5601-350. Код 1С: 127370.",
    "images": [
      "assets/images/products/127370.jpg"
    ],
    "specs": []
  },
  {
    "id": "136061",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес DIJON, 1000мл VITTORA",
    "price": 508.0,
    "desc": "Артикул: VT-5604-1000. Код 1С: 136061.",
    "images": [
      "assets/images/products/136061.jpg"
    ],
    "specs": []
  },
  {
    "id": "146632",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чайник заварювальний LUPIN скляний VITTORA, 1000мл",
    "price": 414.0,
    "desc": "Артикул: VT-5511-1000. Код 1С: 146632.",
    "images": [
      "assets/images/products/146632.jpg"
    ],
    "specs": []
  },
  {
    "id": "127377",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MARSEILLE, 600мл VITTORA",
    "price": 479.0,
    "desc": "Артикул: VT-5802-600. Код 1С: 127377.",
    "images": [
      "assets/images/products/127377.jpg"
    ],
    "specs": []
  },
  {
    "id": "127373",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес ORLEANS, 350мл VITTORA",
    "price": 442.0,
    "desc": "Артикул: VT-5701-350. Код 1С: 127373.",
    "images": [
      "assets/images/products/127373.jpg"
    ],
    "specs": []
  },
  {
    "id": "127376",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MARSEILLE, 350мл VITTORA",
    "price": 378.0,
    "desc": "Артикул: VT-5801-350. Код 1С: 127376.",
    "images": [
      "assets/images/products/127376.jpg"
    ],
    "specs": []
  },
  {
    "id": "136062",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес ORLEANS, 800мл VITTORA",
    "price": 647.0,
    "desc": "Артикул: VT-5703-800. Код 1С: 136062.",
    "images": [
      "assets/images/products/136062.jpg"
    ],
    "specs": []
  },
  {
    "id": "127375",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес ORLEANS, 1000мл VITTORA",
    "price": 685.0,
    "desc": "Артикул: VT-5704-1000. Код 1С: 127375.",
    "images": [
      "assets/images/products/127375.jpg"
    ],
    "specs": []
  },
  {
    "id": "127378",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MARSEILLE, 800мл VITTORA",
    "price": 636.0,
    "desc": "Артикул: VT-5803-800. Код 1С: 127378.",
    "images": [
      "assets/images/products/127378.jpg"
    ],
    "specs": []
  },
  {
    "id": "127380",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MARSEILLE, 1000мл VITTORA",
    "price": 648.0,
    "desc": "Артикул: VT-5804-1000. Код 1С: 127380.",
    "images": [
      "assets/images/products/127380.jpg"
    ],
    "specs": []
  },
  {
    "id": "136084",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес LYON, 600мл VITTORA",
    "price": 598.0,
    "desc": "Артикул: VT-9402-600. Код 1С: 136084.",
    "images": [
      "assets/images/products/136084.jpg"
    ],
    "specs": []
  },
  {
    "id": "136085",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес LYON, 800мл VITTORA",
    "price": 695.0,
    "desc": "Артикул: VT-9403-800. Код 1С: 136085.",
    "images": [
      "assets/images/products/136085.jpg"
    ],
    "specs": []
  },
  {
    "id": "127374",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес ORLEANS, 600мл VITTORA",
    "price": 543.0,
    "desc": "Артикул: VT-5702-600. Код 1С: 127374.",
    "images": [
      "assets/images/products/127374.jpg"
    ],
    "specs": []
  },
  {
    "id": "136086",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес LYON, 1000мл VITTORA",
    "price": 717.0,
    "desc": "Артикул: VT-9404-1000. Код 1С: 136086.",
    "images": [
      "assets/images/products/136086.jpg"
    ],
    "specs": []
  },
  {
    "id": "136064",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес GERARD, 600мл VITTORA",
    "price": 379.0,
    "desc": "Артикул: VT-9002-600. Код 1С: 136064.",
    "images": [
      "assets/images/products/136064.jpg"
    ],
    "specs": []
  },
  {
    "id": "136070",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MACRON, 350мл VITTORA",
    "price": 552.0,
    "desc": "Артикул: VT-9201-350. Код 1С: 136070.",
    "images": [
      "assets/images/products/136070.jpg"
    ],
    "specs": []
  },
  {
    "id": "136072",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MACRON, 800мл VITTORA",
    "price": 734.0,
    "desc": "Артикул: VT-9203-800. Код 1С: 136072.",
    "images": [
      "assets/images/products/136072.jpg"
    ],
    "specs": []
  },
  {
    "id": "136080",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес PARIS, 350мл VITTORA",
    "price": 343.0,
    "desc": "Артикул: VT-9301-350. Код 1С: 136080.",
    "images": [
      "assets/images/products/136080.jpg"
    ],
    "specs": []
  },
  {
    "id": "136081",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес PARIS, 600мл VITTORA",
    "price": 428.0,
    "desc": "Артикул: VT-9302-600. Код 1С: 136081.",
    "images": [
      "assets/images/products/136081.jpg"
    ],
    "specs": []
  },
  {
    "id": "136071",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MACRON, 600мл VITTORA",
    "price": 673.0,
    "desc": "Артикул: VT-9202-600. Код 1С: 136071.",
    "images": [
      "assets/images/products/136071.jpg"
    ],
    "specs": []
  },
  {
    "id": "136079",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес MACRON, 1000мл VITTORA",
    "price": 769.0,
    "desc": "Артикул: VT-9204-1000. Код 1С: 136079.",
    "images": [
      "assets/images/products/136079.jpg"
    ],
    "specs": []
  },
  {
    "id": "136066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес FLAIR, 600мл VITTORA",
    "price": 753.0,
    "desc": "Артикул: VT-9102-600. Код 1С: 136066.",
    "images": [
      "assets/images/products/136066.jpg"
    ],
    "specs": []
  },
  {
    "id": "136069",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес FLAIR, 1000мл VITTORA",
    "price": 880.0,
    "desc": "Артикул: VT-9104-1000. Код 1С: 136069.",
    "images": [
      "assets/images/products/136069.jpg"
    ],
    "specs": []
  },
  {
    "id": "136068",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес FLAIR, 800мл VITTORA",
    "price": 836.0,
    "desc": "Артикул: VT-9103-800. Код 1С: 136068.",
    "images": [
      "assets/images/products/136068.jpg"
    ],
    "specs": []
  },
  {
    "id": "134049",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Бульйонниця Серпанок, Vittora, 500мл Україна",
    "price": 89.0,
    "desc": "Артикул: VU-20500 . Код 1С: 134049.",
    "images": [
      "assets/images/products/134049.jpg"
    ],
    "specs": []
  },
  {
    "id": "136065",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес FLAIR, 350мл VITTORA",
    "price": 606.0,
    "desc": "Артикул: VT-9101-350. Код 1С: 136065.",
    "images": [
      "assets/images/products/136065.jpg"
    ],
    "specs": []
  },
  {
    "id": "134048",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Борщівниця Серпанок, Vittora, 350мл Україна",
    "price": 99.0,
    "desc": "Артикул: VU-18350. Код 1С: 134048.",
    "images": [
      "assets/images/products/134048.jpg"
    ],
    "specs": []
  },
  {
    "id": "134044",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка пряма Серпанок, Vittora, 400мл  Україна",
    "price": 92.0,
    "desc": "Артикул: VU-8400. Код 1С: 134044.",
    "images": [
      "assets/images/products/134044.jpg"
    ],
    "specs": []
  },
  {
    "id": "134042",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка пряма Серпанок, Vittora, 320мл Україна",
    "price": 75.0,
    "desc": "Артикул: VU-5320. Код 1С: 134042.",
    "images": [
      "assets/images/products/134042.jpg"
    ],
    "specs": []
  },
  {
    "id": "134045",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Серпанок, Vittora, 280мл  Україна",
    "price": 53.0,
    "desc": "Артикул: VU-11280. Код 1С: 134045.",
    "images": [
      "assets/images/products/134045.jpg"
    ],
    "specs": []
  },
  {
    "id": "134041",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка пряма Серпанок, Vittora, 250мл Україна",
    "price": 50.0,
    "desc": "Артикул: VU-1250. Код 1С: 134041.",
    "images": [
      "assets/images/products/134041.jpg"
    ],
    "specs": []
  },
  {
    "id": "133105",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ESPRESSO з подвійним дном VITTORA, 2 шт, 80мл",
    "price": 265.0,
    "desc": "Артикул: VT-5405-80. Код 1С: 133105.",
    "images": [
      "assets/images/products/133105.jpg"
    ],
    "specs": []
  },
  {
    "id": "134043",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка для лате Серпанок, Vittora, 330мл Україна",
    "price": 75.0,
    "desc": "Артикул: VU-6330. Код 1С: 134043.",
    "images": [
      "assets/images/products/134043.jpg"
    ],
    "specs": []
  },
  {
    "id": "133063",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TWIN з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 476.0,
    "desc": "Артикул: VT-5404-350. Код 1С: 133063.",
    "images": [
      "assets/images/products/133063.jpg"
    ],
    "specs": []
  },
  {
    "id": "127360",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TWIN з подвійним дном 2 шт, 300мл VITTORA",
    "price": 443.0,
    "desc": "Артикул: VT-5401-300. Код 1С: 127360.",
    "images": [
      "assets/images/products/127360.jpg"
    ],
    "specs": []
  },
  {
    "id": "127362",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TWIN з подвійним дном 2 шт, 360мл VITTORA",
    "price": 548.0,
    "desc": "Артикул: VT-5402-360. Код 1С: 127362.",
    "images": [
      "assets/images/products/127362.jpg"
    ],
    "specs": []
  },
  {
    "id": "141392",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TWIN з подвійним дном VITTORA, 2 шт, 250мл",
    "price": 274.0,
    "desc": "Артикул: VT-5413-250. Код 1С: 141392.",
    "images": [
      "assets/images/products/141392.jpg"
    ],
    "specs": []
  },
  {
    "id": "136083",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес PARIS, 1000мл VITTORA",
    "price": 552.0,
    "desc": "Артикул: VT-9304-1000. Код 1С: 136083.",
    "images": [
      "assets/images/products/136083.jpg"
    ],
    "specs": []
  },
  {
    "id": "136082",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Френч прес PARIS, 800мл VITTORA",
    "price": 528.0,
    "desc": "Артикул: VT-9303-800. Код 1С: 136082.",
    "images": [
      "assets/images/products/136082.jpg"
    ],
    "specs": []
  },
  {
    "id": "133062",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок TWIN з подвійним дном VITTORA, 2шт, 350мл",
    "price": 527.0,
    "desc": "Артикул: VT-5304-350. Код 1С: 133062.",
    "images": [
      "assets/images/products/133062.jpg"
    ],
    "specs": []
  },
  {
    "id": "141384",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок TWINNY з подвійним дном VITTORA, 2шт, 250мл",
    "price": 334.0,
    "desc": "Артикул: VT-5314-250. Код 1С: 141384.",
    "images": [
      "assets/images/products/141384.jpg"
    ],
    "specs": []
  },
  {
    "id": "127359",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок TWIN LOVE з подвійним дном 2 шт, 300мл VITTORA",
    "price": 665.0,
    "desc": "Артикул: VT-5302-300. Код 1С: 127359.",
    "images": [
      "assets/images/products/127359.jpg"
    ],
    "specs": []
  },
  {
    "id": "133107",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок RABBITS з подвійним дном VITTORA, 2 шт, 300мл",
    "price": 593.0,
    "desc": "Артикул: VT-5406-300. Код 1С: 133107.",
    "images": [
      "assets/images/products/133107.jpg"
    ],
    "specs": []
  },
  {
    "id": "141381",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок KITTY PINK з подвійним дном VITTORA, 2 шт, 250мл",
    "price": 806.0,
    "desc": "Артикул: VT-5317-250. Код 1С: 141381.",
    "images": [],
    "specs": []
  },
  {
    "id": "133109",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок GOLD з подвійним дном VITTORA, 2 шт, 270мл",
    "price": 644.0,
    "desc": "Артикул: VT-5305-270. Код 1С: 133109.",
    "images": [
      "assets/images/products/133109.jpg"
    ],
    "specs": []
  },
  {
    "id": "133108",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок GOLD з подвійним дном VITTORA, 2 шт, 250мл",
    "price": 534.0,
    "desc": "Артикул: VT-5407-250. Код 1С: 133108.",
    "images": [
      "assets/images/products/133108.jpg"
    ],
    "specs": []
  },
  {
    "id": "127364",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок ANIMALS з подвійним дном 2 шт, 200мл VITTORA",
    "price": 666.0,
    "desc": "Артикул: VT-5403-200. Код 1С: 127364.",
    "images": [
      "assets/images/products/127364.jpg"
    ],
    "specs": []
  },
  {
    "id": "127363",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок ANIMALS з подвійним дном 2 шт, 250мл VITTORA",
    "price": 707.0,
    "desc": "Артикул: VT-5303-250. Код 1С: 127363.",
    "images": [
      "assets/images/products/127363.jpg"
    ],
    "specs": []
  },
  {
    "id": "133106",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок CATS з подвійним дном VITTORA, 2 шт, 250мл",
    "price": 767.0,
    "desc": "Артикул: VT-5305-250. Код 1С: 133106.",
    "images": [
      "assets/images/products/133106.jpg"
    ],
    "specs": []
  },
  {
    "id": "135072",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок DIAMOND з боросилікатного скла, 2 шт, 300 мл",
    "price": 474.0,
    "desc": "Артикул: VT-5102-300. Код 1С: 135072.",
    "images": [
      "assets/images/products/135072.jpg"
    ],
    "specs": []
  },
  {
    "id": "141380",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок KITTY BLUE з подвійним дном VITTORA, 2 шт, 250мл",
    "price": 806.0,
    "desc": "Артикул: VT-5318-250. Код 1С: 141380.",
    "images": [
      "assets/images/products/141380.jpg"
    ],
    "specs": []
  },
  {
    "id": "135078",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок NIGHT з боросилікатного скла, 2 шт, 400 мл",
    "price": 424.0,
    "desc": "Артикул: VT-5106-400. Код 1С: 135078.",
    "images": [
      "assets/images/products/135078.jpg"
    ],
    "specs": []
  },
  {
    "id": "142109",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з подвійним дном Дика Роза в кор. VITTORA, 330мл",
    "price": 353.0,
    "desc": "Артикул: VT-6006-330. Код 1С: 142109.",
    "images": [],
    "specs": []
  },
  {
    "id": "141394",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TILT з подвійним дном VITTORA, 2 шт, 220мл",
    "price": 524.0,
    "desc": "Артикул: VT-5411-220. Код 1С: 141394.",
    "images": [],
    "specs": []
  },
  {
    "id": "135076",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок HOLA з боросилікатного скла, 2 шт, 400 мл",
    "price": 450.0,
    "desc": "Артикул: VT-5104-400. Код 1С: 135076.",
    "images": [
      "assets/images/products/135076.jpg"
    ],
    "specs": []
  },
  {
    "id": "135077",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок SUNSET з боросилікатного скла, 2 шт, 400 мл",
    "price": 470.0,
    "desc": "Артикул: VT-5105-400. Код 1С: 135077.",
    "images": [
      "assets/images/products/135077.jpg"
    ],
    "specs": []
  },
  {
    "id": "135071",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок CRYSTAL з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 699.0,
    "desc": "Артикул: VT-5408-350. Код 1С: 135071.",
    "images": [
      "assets/images/products/135071.jpg"
    ],
    "specs": []
  },
  {
    "id": "141393",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок TILT з подвійним дном VITTORA, 2 шт, 280мл",
    "price": 597.0,
    "desc": "Артикул: VT-5412-280. Код 1С: 141393.",
    "images": [],
    "specs": []
  },
  {
    "id": "127361",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок TWIN з подвійним дном 2шт, 250мл VITTORA",
    "price": 510.0,
    "desc": "Артикул: VT-5301-250. Код 1С: 127361.",
    "images": [
      "assets/images/products/127361.jpg"
    ],
    "specs": []
  },
  {
    "id": "158609",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (червоний) VITTORA, 2шт, 200мл",
    "price": 337.0,
    "desc": "Артикул: VT-6108-200. Код 1С: 158609.",
    "images": [],
    "specs": []
  },
  {
    "id": "135070",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок ICE з боросилікатного скла, 2 шт, 350 мл",
    "price": 379.0,
    "desc": "Артикул: VT-5101-350. Код 1С: 135070.",
    "images": [
      "assets/images/products/135070.jpg"
    ],
    "specs": []
  },
  {
    "id": "158608",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок  Ранкова окраса з подвійними стінками (фіолетовий) VITTORA, 2шт, 200мл",
    "price": 337.0,
    "desc": "Артикул: VT-6107-200 . Код 1С: 158608.",
    "images": [],
    "specs": []
  },
  {
    "id": "135075",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок CIAO з боросилікатного скла, 2 шт, 400 мл",
    "price": 520.0,
    "desc": "Артикул: VT-5103-400. Код 1С: 135075.",
    "images": [
      "assets/images/products/135075.jpg"
    ],
    "specs": []
  },
  {
    "id": "158610",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (білий) VITTORA, 2шт, 200мл",
    "price": 337.0,
    "desc": "Артикул: VT-6109-200 . Код 1С: 158610.",
    "images": [],
    "specs": []
  },
  {
    "id": "141387",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Квіткова блакить з подвійним дном VITTORA, 2шт, 200мл",
    "price": 538.0,
    "desc": "Артикул: VT-5311-200. Код 1С: 141387.",
    "images": [],
    "specs": []
  },
  {
    "id": "141386",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Фіолетове диво з подвійним дном VITTORA, 2шт, 200мл",
    "price": 538.0,
    "desc": "Артикул: VT-5312-200. Код 1С: 141386.",
    "images": [],
    "specs": []
  },
  {
    "id": "158611",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (золотий) VITTORA, 2шт, 200мл",
    "price": 337.0,
    "desc": "Артикул: VT-6110-200 . Код 1С: 158611.",
    "images": [],
    "specs": []
  },
  {
    "id": "147375",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Сонячний промінь з подвійним дном VITTORA, 2шт, 200мл",
    "price": 538.0,
    "desc": "Артикул: VT-5323-200. Код 1С: 147375.",
    "images": [
      "assets/images/products/147375.jpg"
    ],
    "specs": []
  },
  {
    "id": "141391",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок STAR SILVER з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 458.0,
    "desc": "Артикул: VT-5409-350. Код 1С: 141391.",
    "images": [],
    "specs": []
  },
  {
    "id": "141395",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок STAR RED з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 458.0,
    "desc": "Артикул: VT-5410-350. Код 1С: 141395.",
    "images": [],
    "specs": []
  },
  {
    "id": "158606",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (фіолетовий) VITTORA, 2шт, 150мл",
    "price": 298.0,
    "desc": "Артикул: VT-6105-150. Код 1С: 158606.",
    "images": [
      "assets/images/products/158606.jpg"
    ],
    "specs": []
  },
  {
    "id": "158605",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (блакитний) VITTORA, 2шт, 150мл",
    "price": 298.0,
    "desc": "Артикул: VT-6104-150 . Код 1С: 158605.",
    "images": [
      "assets/images/products/158605.jpg"
    ],
    "specs": []
  },
  {
    "id": "158607",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Ранкова окраса з подвійними стінками (блакитний) VITTORA, 2шт, 200мл",
    "price": 337.0,
    "desc": "Артикул: VT-6106-200. Код 1С: 158607.",
    "images": [
      "assets/images/products/158607.jpg"
    ],
    "specs": []
  },
  {
    "id": "147365",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок BROOK з боросилікатного скла, 2 шт, 400 мл",
    "price": 334.0,
    "desc": "Артикул: VT-5108-400. Код 1С: 147365.",
    "images": [
      "assets/images/products/147365.jpg"
    ],
    "specs": []
  },
  {
    "id": "147362",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Квітковий спокій з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5319-320. Код 1С: 147362.",
    "images": [
      "assets/images/products/147362.jpg"
    ],
    "specs": []
  },
  {
    "id": "147374",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок М'ятний подих з подвійним дном VITTORA, 2шт, 200мл",
    "price": 538.0,
    "desc": "Артикул: VT-5324-200. Код 1С: 147374.",
    "images": [
      "assets/images/products/147374.jpg"
    ],
    "specs": []
  },
  {
    "id": "147373",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Фарби літа з подвійним дном VITTORA, 2шт, 200мл",
    "price": 538.0,
    "desc": "Артикул: VT-5325-200. Код 1С: 147373.",
    "images": [
      "assets/images/products/147373.jpg"
    ],
    "specs": []
  },
  {
    "id": "147371",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Спекотне літо з подвійним дном VITTORA, 2шт, 270мл",
    "price": 538.0,
    "desc": "Артикул: VT-5327-270. Код 1С: 147371.",
    "images": [
      "assets/images/products/147371.jpg"
    ],
    "specs": []
  },
  {
    "id": "147372",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Чарівний збір з подвійним дном VITTORA, 2шт, 270мл",
    "price": 538.0,
    "desc": "Артикул: VT-5326-270. Код 1С: 147372.",
    "images": [
      "assets/images/products/147372.jpg"
    ],
    "specs": []
  },
  {
    "id": "147378",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Танець квітів з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5320-320. Код 1С: 147378.",
    "images": [
      "assets/images/products/147378.jpg"
    ],
    "specs": []
  },
  {
    "id": "141374",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Кармен з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5306-320. Код 1С: 141374.",
    "images": [],
    "specs": []
  },
  {
    "id": "141379",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Викрадач снів з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5307-320. Код 1С: 141379.",
    "images": [],
    "specs": []
  },
  {
    "id": "141390",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Чар-Зілля з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5308-320. Код 1С: 141390.",
    "images": [],
    "specs": []
  },
  {
    "id": "141389",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Пристрасть з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5309-320. Код 1С: 141389.",
    "images": [],
    "specs": []
  },
  {
    "id": "141388",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Сухоцвіт з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5310-320. Код 1С: 141388.",
    "images": [],
    "specs": []
  },
  {
    "id": "147370",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Зимові розваги з подвійним дном VITTORA, 2шт, 350мл",
    "price": 545.0,
    "desc": "Артикул: VT-5415-350. Код 1С: 147370.",
    "images": [
      "assets/images/products/147370.jpg"
    ],
    "specs": []
  },
  {
    "id": "147369",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Північне сяйво з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 852.0,
    "desc": "Артикул: VT-5329-350. Код 1С: 147369.",
    "images": [
      "assets/images/products/147369.jpg"
    ],
    "specs": []
  },
  {
    "id": "141385",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Народна Берегиня з подвійним дном VITTORA, 2шт, 270мл",
    "price": 538.0,
    "desc": "Артикул: VT-5313-270. Код 1С: 141385.",
    "images": [
      "assets/images/products/141385.jpg"
    ],
    "specs": []
  },
  {
    "id": "147367",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Морозні обійми з подвійним дном VITTORA, 2 шт, 300мл",
    "price": 490.0,
    "desc": "Артикул: VT-5331-300. Код 1С: 147367.",
    "images": [
      "assets/images/products/147367.jpg"
    ],
    "specs": []
  },
  {
    "id": "147368",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Свято в чашці з подвійним дном VITTORA, 2 шт, 350мл",
    "price": 625.0,
    "desc": "Артикул: VT-5330-350. Код 1С: 147368.",
    "images": [
      "assets/images/products/147368.jpg"
    ],
    "specs": []
  },
  {
    "id": "153829",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Рожеве намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5332-320. Код 1С: 153829.",
    "images": [
      "assets/images/products/153829.jpg"
    ],
    "specs": []
  },
  {
    "id": "134345",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір чашка 180мл з блюдцем Зоряна любов, Vittora",
    "price": 203.0,
    "desc": "Артикул: VT-C-250180. Код 1С: 134345.",
    "images": [
      "assets/images/products/134345.jpg"
    ],
    "specs": []
  },
  {
    "id": "134846",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з блюдцем в коробці Купаж  Vittora, 250мл",
    "price": 195.0,
    "desc": "Артикул: VT-C-263250. Код 1С: 134846.",
    "images": [
      "assets/images/products/134846.jpg"
    ],
    "specs": []
  },
  {
    "id": "147376",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Гербарій з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5322-320. Код 1С: 147376.",
    "images": [
      "assets/images/products/147376.jpg"
    ],
    "specs": []
  },
  {
    "id": "147377",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Магія бутонів з подвійним дном VITTORA, 2шт, 320мл",
    "price": 553.0,
    "desc": "Артикул: VT-5321-320. Код 1С: 147377.",
    "images": [
      "assets/images/products/147377.jpg"
    ],
    "specs": []
  },
  {
    "id": "153831",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Червоне намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5334-320. Код 1С: 153831.",
    "images": [
      "assets/images/products/153831.jpg"
    ],
    "specs": []
  },
  {
    "id": "153832",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Жовте намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5335-320. Код 1С: 153832.",
    "images": [
      "assets/images/products/153832.jpg"
    ],
    "specs": []
  },
  {
    "id": "137542",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з блюдцем Незабутній вечір Vittora, 240мл",
    "price": 243.0,
    "desc": "Артикул: VT-C-295240. Код 1С: 137542.",
    "images": [
      "assets/images/products/137542.jpg"
    ],
    "specs": []
  },
  {
    "id": "147364",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Збережена краса з подвійним дном VITTORA, 2шт, 250мл",
    "price": 498.0,
    "desc": "Артикул: VT-5328-250. Код 1С: 147364.",
    "images": [
      "assets/images/products/147364.jpg"
    ],
    "specs": []
  },
  {
    "id": "147363",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір склянок Квіткова тиша з подвійним дном VITTORA, 2шт, 250мл",
    "price": 441.0,
    "desc": "Артикул: VT-5414-250. Код 1С: 147363.",
    "images": [
      "assets/images/products/147363.jpg"
    ],
    "specs": []
  },
  {
    "id": "153830",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Зелене намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5333-320. Код 1С: 153830.",
    "images": [
      "assets/images/products/153830.jpg"
    ],
    "specs": []
  },
  {
    "id": "137552",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок 4шт. Щасливі будні Vittora, 360мл",
    "price": 1169.0,
    "desc": "Артикул: VT-C-298360. Код 1С: 137552.",
    "images": [
      "assets/images/products/137552.jpg"
    ],
    "specs": []
  },
  {
    "id": "137550",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок 4шт. Вишукане золото Vittora, 320мл",
    "price": 1212.0,
    "desc": "Артикул: VT-C-292320. Код 1С: 137550.",
    "images": [
      "assets/images/products/137550.jpg"
    ],
    "specs": []
  },
  {
    "id": "153833",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Блакитне намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5336-320. Код 1С: 153833.",
    "images": [
      "assets/images/products/153833.jpg"
    ],
    "specs": []
  },
  {
    "id": "137539",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з блюдцем Полуденний оазис Vittora, 220мл",
    "price": 284.0,
    "desc": "Артикул: VT-C-291220. Код 1С: 137539.",
    "images": [
      "assets/images/products/137539.jpg"
    ],
    "specs": []
  },
  {
    "id": "153834",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок Бузкове намисто з подвійним дном VITTORA, 2шт, 320мл",
    "price": 538.0,
    "desc": "Артикул: VT-5337-320. Код 1С: 153834.",
    "images": [
      "assets/images/products/153834.jpg"
    ],
    "specs": []
  },
  {
    "id": "112339",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір Grace, 6 чашок з блюдцями на підставці, Vittora",
    "price": 906.0,
    "desc": "Артикул: VT-P-5301. Код 1С: 112339.",
    "images": [
      "assets/images/products/112339.jpg"
    ],
    "specs": []
  },
  {
    "id": "122813",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла для чаю Vittora 500мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-71500W. Код 1С: 122813.",
    "images": [
      "assets/images/products/122813.jpg"
    ],
    "specs": []
  },
  {
    "id": "112340",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір Elegance, 6 чашок з блюдцями на підставці, Vittora",
    "price": 906.0,
    "desc": "Артикул: VT-P-5303. Код 1С: 112340.",
    "images": [
      "assets/images/products/112340.jpg"
    ],
    "specs": []
  },
  {
    "id": "106822",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла 500мл",
    "price": 100.0,
    "desc": "Артикул: VT-C-42500W. Код 1С: 106822.",
    "images": [
      "assets/images/products/106822.jpg"
    ],
    "specs": []
  },
  {
    "id": "158613",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір Blooming, 6 чашок з блюдцями на підставці, Vittora",
    "price": 906.0,
    "desc": "Артикул: VT-P-5305. Код 1С: 158613.",
    "images": [
      "assets/images/products/158613.jpg"
    ],
    "specs": []
  },
  {
    "id": "106824",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла Тюльпан Vittora 360мл",
    "price": 105.0,
    "desc": "Артикул: VT-C-61360. Код 1С: 106824.",
    "images": [
      "assets/images/products/106824.jpg"
    ],
    "specs": []
  },
  {
    "id": "158612",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір Terra, 6 чашок з блюдцями на підставці, Vittora",
    "price": 803.0,
    "desc": "Артикул: VT-P-5302. Код 1С: 158612.",
    "images": [
      "assets/images/products/158612.jpg"
    ],
    "specs": []
  },
  {
    "id": "112336",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір Linea, 6 чашок з блюдцями на підставці, Vittora",
    "price": 790.0,
    "desc": "Артикул: VT-P-5304. Код 1С: 112336.",
    "images": [
      "assets/images/products/112336.jpg"
    ],
    "specs": []
  },
  {
    "id": "106828",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла для кави Vittora 270мл",
    "price": 89.0,
    "desc": "Артикул: VT-C-72270. Код 1С: 106828.",
    "images": [
      "assets/images/products/106828.jpg"
    ],
    "specs": []
  },
  {
    "id": "132806",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла для какао 325мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-179325W. Код 1С: 132806.",
    "images": [
      "assets/images/products/132806.jpg"
    ],
    "specs": []
  },
  {
    "id": "106825",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла для чаю  Vittora 500мл",
    "price": 139.0,
    "desc": "Артикул: VT-C-71500. Код 1С: 106825.",
    "images": [
      "assets/images/products/106825.jpg"
    ],
    "specs": []
  },
  {
    "id": "122568",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Смак кави Vittora, 110мл",
    "price": 89.0,
    "desc": "Артикул: VT-C-121350 . Код 1С: 122568.",
    "images": [
      "assets/images/products/122568.jpg"
    ],
    "specs": []
  },
  {
    "id": "147439",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір чашок 2шт. Нестримні почуття Vittora, 355 мл",
    "price": 306.0,
    "desc": "Артикул: VT-C-325355. Код 1С: 147439.",
    "images": [
      "assets/images/products/147439.jpg"
    ],
    "specs": []
  },
  {
    "id": "106829",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла для капучіно Vittora 390мл",
    "price": 110.0,
    "desc": "Артикул: VT-C-73390. Код 1С: 106829.",
    "images": [
      "assets/images/products/106829.jpg"
    ],
    "specs": []
  },
  {
    "id": "122562",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кумедні смайлики Vittora, 110мл",
    "price": 102.0,
    "desc": "Артикул: VT-C-118110. Код 1С: 122562.",
    "images": [
      "assets/images/products/122562.jpg"
    ],
    "specs": []
  },
  {
    "id": "122564",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Посмішка Vittora, 110мл",
    "price": 102.0,
    "desc": "Артикул: VT-C-119110 . Код 1С: 122564.",
    "images": [
      "assets/images/products/122564.jpg"
    ],
    "specs": []
  },
  {
    "id": "134373",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Американо, 210мл",
    "price": 63.0,
    "desc": "Артикул: VT-C-177210. Код 1С: 134373.",
    "images": [
      "assets/images/products/134373.jpg"
    ],
    "specs": []
  },
  {
    "id": "122654",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжні обійми Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-80200. Код 1С: 122654.",
    "images": [
      "assets/images/products/122654.jpg"
    ],
    "specs": []
  },
  {
    "id": "122632",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ланч Vittora, 180мл",
    "price": 164.0,
    "desc": "Артикул: VT-C-153180 . Код 1С: 122632.",
    "images": [
      "assets/images/products/122632.jpg"
    ],
    "specs": []
  },
  {
    "id": "122656",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вічна гармонія Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-81200. Код 1С: 122656.",
    "images": [
      "assets/images/products/122656.jpg"
    ],
    "specs": []
  },
  {
    "id": "122658",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Погляд ранку Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-82200. Код 1С: 122658.",
    "images": [
      "assets/images/products/122658.jpg"
    ],
    "specs": []
  },
  {
    "id": "122670",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Енергія ранку Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-88200. Код 1С: 122670.",
    "images": [
      "assets/images/products/122670.jpg"
    ],
    "specs": []
  },
  {
    "id": "122550",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зоо Vittora, 200мл",
    "price": 68.0,
    "desc": "Артикул: VT-C-112200 . Код 1С: 122550.",
    "images": [
      "assets/images/products/122550.jpg"
    ],
    "specs": []
  },
  {
    "id": "122676",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Смакота Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-91200. Код 1С: 122676.",
    "images": [
      "assets/images/products/122676.jpg"
    ],
    "specs": []
  },
  {
    "id": "127843",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Стримана грань Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-87250. Код 1С: 127843.",
    "images": [
      "assets/images/products/127843.jpg"
    ],
    "specs": []
  },
  {
    "id": "122680",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Щасливий ранок Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-93200. Код 1С: 122680.",
    "images": [
      "assets/images/products/122680.jpg"
    ],
    "specs": []
  },
  {
    "id": "134375",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Раф, 210мл",
    "price": 63.0,
    "desc": "Артикул: VT-C-178210. Код 1С: 134375.",
    "images": [
      "assets/images/products/134375.jpg"
    ],
    "specs": []
  },
  {
    "id": "122666",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжне розмаїття Vittora, 200мл",
    "price": 76.0,
    "desc": "Артикул: VT-C-86250. Код 1С: 122666.",
    "images": [
      "assets/images/products/122666.jpg"
    ],
    "specs": []
  },
  {
    "id": "128895",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ранковий підйом Vittora, 210мл",
    "price": 105.0,
    "desc": "Артикул: VT-C-228210 . Код 1С: 128895.",
    "images": [
      "assets/images/products/128895.jpg"
    ],
    "specs": []
  },
  {
    "id": "134340",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Улюблена лапка Vittora, 270мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-245270. Код 1С: 134340.",
    "images": [
      "assets/images/products/134340.jpg"
    ],
    "specs": []
  },
  {
    "id": "134324",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Рожеві фіранки Vittora, 270мл",
    "price": 126.0,
    "desc": "Артикул: VT-C-208270. Код 1С: 134324.",
    "images": [
      "assets/images/products/134324.jpg"
    ],
    "specs": []
  },
  {
    "id": "137446",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Витинанка Vittora, 240мл",
    "price": 87.0,
    "desc": "Артикул: VT-C-283240. Код 1С: 137446.",
    "images": [
      "assets/images/products/137446.jpg"
    ],
    "specs": []
  },
  {
    "id": "147410",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка біла Еспресо 80мл",
    "price": 59.0,
    "desc": "Артикул: VT-C-311080W. Код 1С: 147410.",
    "images": [
      "assets/images/products/147410.jpg"
    ],
    "specs": []
  },
  {
    "id": "128892",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Простір кави Vittora, 270мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-225270 . Код 1С: 128892.",
    "images": [
      "assets/images/products/128892.jpg"
    ],
    "specs": []
  },
  {
    "id": "122558",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Синя далечінь Vittora, 295мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-116295. Код 1С: 122558.",
    "images": [
      "assets/images/products/122558.jpg"
    ],
    "specs": []
  },
  {
    "id": "122672",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Неймовірне пробудження Vittora, 290мл",
    "price": 89.0,
    "desc": "Артикул: VT-C-89290. Код 1С: 122672.",
    "images": [
      "assets/images/products/122672.jpg"
    ],
    "specs": []
  },
  {
    "id": "122566",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Для еспрессо Vittora, 110мл",
    "price": 89.0,
    "desc": "Артикул: VT-C-120110 . Код 1С: 122566.",
    "images": [
      "assets/images/products/122566.jpg"
    ],
    "specs": []
  },
  {
    "id": "122602",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Грація Vittora, 290мл",
    "price": 72.0,
    "desc": "Артикул: VT-C-138290 . Код 1С: 122602.",
    "images": [
      "assets/images/products/122602.jpg"
    ],
    "specs": []
  },
  {
    "id": "135032",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сніданок Vittora, 290мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-270290. Код 1С: 135032.",
    "images": [
      "assets/images/products/135032.jpg"
    ],
    "specs": []
  },
  {
    "id": "134325",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Перші квіти Vittora, 300мл",
    "price": 113.0,
    "desc": "Артикул: VT-C-209300. Код 1С: 134325.",
    "images": [
      "assets/images/products/134325.jpg"
    ],
    "specs": []
  },
  {
    "id": "128899",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Галаретка Vittora, 300мл",
    "price": 218.0,
    "desc": "Артикул: VT-C-232300 . Код 1С: 128899.",
    "images": [
      "assets/images/products/128899.jpg"
    ],
    "specs": []
  },
  {
    "id": "128893",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Смугастий кофеїн Vittora, 300мл",
    "price": 148.0,
    "desc": "Артикул: VT-C-226300 . Код 1С: 128893.",
    "images": [
      "assets/images/products/128893.jpg"
    ],
    "specs": []
  },
  {
    "id": "126236",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавове свято Vittora, 300мл(вірний обєм)",
    "price": 127.0,
    "desc": "Артикул: VT-C-162340. Код 1С: 126236.",
    "images": [
      "assets/images/products/126236.jpg"
    ],
    "specs": []
  },
  {
    "id": "133475",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Душевні побажання Vittora, 305мл",
    "price": 174.0,
    "desc": "Артикул: VT-C-197305 . Код 1С: 133475.",
    "images": [
      "assets/images/products/133475.jpg"
    ],
    "specs": []
  },
  {
    "id": "133454",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зайченя Vittora, 270мл",
    "price": 125.0,
    "desc": "Артикул: VT-C-184270 . Код 1С: 133454.",
    "images": [
      "assets/images/products/133454.jpg"
    ],
    "specs": []
  },
  {
    "id": "133461",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Класичні барви Vittora, 310мл",
    "price": 176.0,
    "desc": "Артикул: VT-C-191310 . Код 1С: 133461.",
    "images": [
      "assets/images/products/133461.jpg"
    ],
    "specs": []
  },
  {
    "id": "135039",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Жозефіна Vittora, 310мл",
    "price": 154.0,
    "desc": "Артикул: VT-C-277310. Код 1С: 135039.",
    "images": [
      "assets/images/products/135039.jpg"
    ],
    "specs": []
  },
  {
    "id": "122638",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Парижанка Vittora, 310мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-156310. Код 1С: 122638.",
    "images": [
      "assets/images/products/122638.jpg"
    ],
    "specs": []
  },
  {
    "id": "122690",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Рум'яні щічки з ложкою Vittora, 290мл",
    "price": 106.0,
    "desc": "Артикул: VT-C-98290. Код 1С: 122690.",
    "images": [
      "assets/images/products/122690.jpg"
    ],
    "specs": []
  },
  {
    "id": "147446",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Валентинка Vittora, 300 мл",
    "price": 110.0,
    "desc": "Артикул: VT-C-318300. Код 1С: 147446.",
    "images": [
      "assets/images/products/147446.jpg"
    ],
    "specs": []
  },
  {
    "id": "147450",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кохання без кордонів Vittora, 310 мл",
    "price": 105.0,
    "desc": "Артикул: VT-C-314310. Код 1С: 147450.",
    "images": [
      "assets/images/products/147450.jpg"
    ],
    "specs": []
  },
  {
    "id": "137549",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Жасмин Vittora, 300мл",
    "price": 207.0,
    "desc": "Артикул: VT-C-304300. Код 1С: 137549.",
    "images": [
      "assets/images/products/137549.jpg"
    ],
    "specs": []
  },
  {
    "id": "122534",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Веселі посиденьки Vittora, 320мл",
    "price": 129.0,
    "desc": "Артикул: VT-C-104320 . Код 1С: 122534.",
    "images": [
      "assets/images/products/122534.jpg"
    ],
    "specs": []
  },
  {
    "id": "122548",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сімейство котячих Vittora, 325мл",
    "price": 80.0,
    "desc": "Артикул: VT-C-111325 . Код 1С: 122548.",
    "images": [
      "assets/images/products/122548.jpg"
    ],
    "specs": []
  },
  {
    "id": "84133",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Бланко Vittora 360мл",
    "price": 100.0,
    "desc": "Артикул: VT-C-20360. Код 1С: 84133.",
    "images": [
      "assets/images/products/84133.jpg"
    ],
    "specs": []
  },
  {
    "id": "122576",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Теплі почуття Vittora, 325мл",
    "price": 88.0,
    "desc": "Артикул: VT-C-125325 . Код 1С: 122576.",
    "images": [
      "assets/images/products/122576.jpg"
    ],
    "specs": []
  },
  {
    "id": "122578",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Пані Vittora, 325мл",
    "price": 88.0,
    "desc": "Артикул: VT-C-126325 . Код 1С: 122578.",
    "images": [
      "assets/images/products/122578.jpg"
    ],
    "specs": []
  },
  {
    "id": "122540",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Крем-брюле Vittora, 325мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-107325. Код 1С: 122540.",
    "images": [
      "assets/images/products/122540.jpg"
    ],
    "specs": []
  },
  {
    "id": "122584",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава на двох Vittora, 325мл",
    "price": 116.0,
    "desc": "Артикул: VT-C-129325 . Код 1С: 122584.",
    "images": [
      "assets/images/products/122584.jpg"
    ],
    "specs": []
  },
  {
    "id": "122574",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вдалий день Vittora, 325мл",
    "price": 110.0,
    "desc": "Артикул: VT-C-124325 . Код 1С: 122574.",
    "images": [
      "assets/images/products/122574.jpg"
    ],
    "specs": []
  },
  {
    "id": "122544",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Пухнастики Vittora, 325мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-109325. Код 1С: 122544.",
    "images": [
      "assets/images/products/122544.jpg"
    ],
    "specs": []
  },
  {
    "id": "122596",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Мамині троянди Vittora, 325мл",
    "price": 117.0,
    "desc": "Артикул: VT-C-135325 . Код 1С: 122596.",
    "images": [
      "assets/images/products/122596.jpg"
    ],
    "specs": []
  },
  {
    "id": "122592",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зорепад Vittora, 325мл",
    "price": 137.0,
    "desc": "Артикул: VT-C-133325. Код 1С: 122592.",
    "images": [
      "assets/images/products/122592.jpg"
    ],
    "specs": []
  },
  {
    "id": "134341",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Солодка булочка Vittora, 330мл",
    "price": 147.0,
    "desc": "Артикул: VT-C-246330. Код 1С: 134341.",
    "images": [
      "assets/images/products/134341.jpg"
    ],
    "specs": []
  },
  {
    "id": "147451",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Любов у дрібницях Vittora, 310 мл",
    "price": 105.0,
    "desc": "Артикул: VT-C-313310. Код 1С: 147451.",
    "images": [
      "assets/images/products/147451.jpg"
    ],
    "specs": []
  },
  {
    "id": "134349",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вогні відпустки  в коробці Vittora, 330мл",
    "price": 203.0,
    "desc": "Артикул: VT-C-254330. Код 1С: 134349.",
    "images": [
      "assets/images/products/134349.jpg"
    ],
    "specs": []
  },
  {
    "id": "128898",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сутінки Vittora, 330мл",
    "price": 184.0,
    "desc": "Артикул: VT-C-231330. Код 1С: 128898.",
    "images": [
      "assets/images/products/128898.jpg"
    ],
    "specs": []
  },
  {
    "id": "134326",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Хижак Vittora, 330мл",
    "price": 156.0,
    "desc": "Артикул: VT-C-242330. Код 1С: 134326.",
    "images": [
      "assets/images/products/134326.jpg"
    ],
    "specs": []
  },
  {
    "id": "111125",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжні почуття Vittora, 310мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-69310. Код 1С: 111125.",
    "images": [
      "assets/images/products/111125.jpg"
    ],
    "specs": []
  },
  {
    "id": "127857",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Крижана бежева Vittora, 330мл",
    "price": 181.0,
    "desc": "Артикул: VT-C-164330. Код 1С: 127857.",
    "images": [
      "assets/images/products/127857.jpg"
    ],
    "specs": []
  },
  {
    "id": "122634",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Крижана Vittora, 330мл",
    "price": 177.0,
    "desc": "Артикул: VT-C-154330. Код 1С: 122634.",
    "images": [
      "assets/images/products/122634.jpg"
    ],
    "specs": []
  },
  {
    "id": "122636",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Домашня Vittora, 330мл",
    "price": 156.0,
    "desc": "Артикул: VT-C-155330. Код 1С: 122636.",
    "images": [
      "assets/images/products/122636.jpg"
    ],
    "specs": []
  },
  {
    "id": "127859",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Крижана сіра Vittora, 330мл",
    "price": 181.0,
    "desc": "Артикул: VT-C-165330. Код 1С: 127859.",
    "images": [
      "assets/images/products/127859.jpg"
    ],
    "specs": []
  },
  {
    "id": "134350",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка в коробці Ліпша подруга Vittora, 330мл",
    "price": 182.0,
    "desc": "Артикул: VT-C-255330. Код 1С: 134350.",
    "images": [
      "assets/images/products/134350.jpg"
    ],
    "specs": []
  },
  {
    "id": "133478",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Тваринки на ніжках Vittora, 330мл",
    "price": 215.0,
    "desc": "Артикул: VT-C-200330 . Код 1С: 133478.",
    "images": [
      "assets/images/products/133478.jpg"
    ],
    "specs": []
  },
  {
    "id": "84134",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Айворі Vittora 360мл",
    "price": 100.0,
    "desc": "Артикул: VT-C-10360. Код 1С: 84134.",
    "images": [
      "assets/images/products/84134.jpg"
    ],
    "specs": []
  },
  {
    "id": "137534",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Золота каблучка Vittora, 330мл",
    "price": 217.0,
    "desc": "Артикул: VT-C-288330. Код 1С: 137534.",
    "images": [
      "assets/images/products/137534.jpg"
    ],
    "specs": []
  },
  {
    "id": "147435",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Орнаменти кохання Vittora, 315 мл",
    "price": 144.0,
    "desc": "Артикул: VT-C-329315. Код 1С: 147435.",
    "images": [
      "assets/images/products/147435.jpg"
    ],
    "specs": []
  },
  {
    "id": "147420",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Крижана чорна Vittora, 330мл",
    "price": 182.0,
    "desc": "Артикул: VT-C-312330. Код 1С: 147420.",
    "images": [
      "assets/images/products/147420.jpg"
    ],
    "specs": []
  },
  {
    "id": "147442",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Шалене кохання Vittora, 330 мл",
    "price": 156.0,
    "desc": "Артикул: VT-C-322330. Код 1С: 147442.",
    "images": [
      "assets/images/products/147442.jpg"
    ],
    "specs": []
  },
  {
    "id": "159062",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Песики на транспорті Vittora, 340 мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-345340. Код 1С: 159062.",
    "images": [
      "assets/images/products/159062.jpg"
    ],
    "specs": []
  },
  {
    "id": "159064",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Яскраві форми Vittora, 340 мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-347340. Код 1С: 159064.",
    "images": [
      "assets/images/products/159064.jpg"
    ],
    "specs": []
  },
  {
    "id": "152882",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжні пелюстки Vittora, 340 мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-344340. Код 1С: 152882.",
    "images": [],
    "specs": []
  },
  {
    "id": "152880",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Казковий дворик Vittora, 340 мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-342340. Код 1С: 152880.",
    "images": [
      "assets/images/products/152880.jpg"
    ],
    "specs": []
  },
  {
    "id": "152881",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Акварель Vittora, 340 мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-343340. Код 1С: 152881.",
    "images": [
      "assets/images/products/152881.jpg"
    ],
    "specs": []
  },
  {
    "id": "159066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Привиди Vittora, 340мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-349340. Код 1С: 159066.",
    "images": [
      "assets/images/products/159066.jpg"
    ],
    "specs": []
  },
  {
    "id": "159065",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Хелловін Vittora, 340мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-348340. Код 1С: 159065.",
    "images": [
      "assets/images/products/159065.jpg"
    ],
    "specs": []
  },
  {
    "id": "159068",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжний бант Vittora, 340мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-351340. Код 1С: 159068.",
    "images": [
      "assets/images/products/159068.jpg"
    ],
    "specs": []
  },
  {
    "id": "137544",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Щасливі будні Vittora, 340мл",
    "price": 251.0,
    "desc": "Артикул: VT-C-299340. Код 1С: 137544.",
    "images": [
      "assets/images/products/137544.jpg"
    ],
    "specs": []
  },
  {
    "id": "133450",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сіра крапинка Vittora, 340мл",
    "price": 119.0,
    "desc": "Артикул: VT-C-180340 . Код 1С: 133450.",
    "images": [
      "assets/images/products/133450.jpg"
    ],
    "specs": []
  },
  {
    "id": "159059",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Рожевий бант Vittora, 340мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-355340. Код 1С: 159059.",
    "images": [
      "assets/images/products/159059.jpg"
    ],
    "specs": []
  },
  {
    "id": "135029",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавова мелодія Vittora, 340мл",
    "price": 141.0,
    "desc": "Артикул: VT-C-267340. Код 1С: 135029.",
    "images": [
      "assets/images/products/135029.jpg"
    ],
    "specs": []
  },
  {
    "id": "135040",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Анаконда Vittora, 340мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-278340. Код 1С: 135040.",
    "images": [
      "assets/images/products/135040.jpg"
    ],
    "specs": []
  },
  {
    "id": "133451",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Овочева Vittora, 340мл",
    "price": 119.0,
    "desc": "Артикул: VT-C-181340 . Код 1С: 133451.",
    "images": [
      "assets/images/products/133451.jpg"
    ],
    "specs": []
  },
  {
    "id": "159067",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Павук Vittora, 340мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-350340. Код 1С: 159067.",
    "images": [
      "assets/images/products/159067.jpg"
    ],
    "specs": []
  },
  {
    "id": "133453",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава та побажання Vittora, 340мл",
    "price": 162.0,
    "desc": "Артикул: VT-C-183340 . Код 1С: 133453.",
    "images": [
      "assets/images/products/133453.jpg"
    ],
    "specs": []
  },
  {
    "id": "133452",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Пастельні трави Vittora, 340мл",
    "price": 172.0,
    "desc": "Артикул: VT-C-182340 . Код 1С: 133452.",
    "images": [
      "assets/images/products/133452.jpg"
    ],
    "specs": []
  },
  {
    "id": "127877",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Стерео звірі Vittora, 340мл",
    "price": 241.0,
    "desc": "Артикул: VT-C-174340 . Код 1С: 127877.",
    "images": [
      "assets/images/products/127877.jpg"
    ],
    "specs": []
  },
  {
    "id": "127875",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Мужність Vittora, 340мл",
    "price": 114.0,
    "desc": "Артикул: VT-C-173340. Код 1С: 127875.",
    "images": [
      "assets/images/products/127875.jpg"
    ],
    "specs": []
  },
  {
    "id": "127871",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Вдома найкраще Vittora, 340мл",
    "price": 114.0,
    "desc": "Артикул: VT-C-171340. Код 1С: 127871.",
    "images": [
      "assets/images/products/127871.jpg"
    ],
    "specs": []
  },
  {
    "id": "127879",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Рідна Vittora, 340мл",
    "price": 114.0,
    "desc": "Артикул: VT-C-175340. Код 1С: 127879.",
    "images": [
      "assets/images/products/127879.jpg"
    ],
    "specs": []
  },
  {
    "id": "159063",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Свіжа випічка Vittora, 340 мл",
    "price": 90.0,
    "desc": "Артикул: VT-C-346340. Код 1С: 159063.",
    "images": [
      "assets/images/products/159063.jpg"
    ],
    "specs": []
  },
  {
    "id": "127881",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Від серця Vittora, 340мл",
    "price": 114.0,
    "desc": "Артикул: VT-C-176340. Код 1С: 127881.",
    "images": [
      "assets/images/products/127881.jpg"
    ],
    "specs": []
  },
  {
    "id": "111127",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Любов Vittora, 340мл",
    "price": 139.0,
    "desc": "Артикул: VT-C-124340. Код 1С: 111127.",
    "images": [
      "assets/images/products/111127.jpg"
    ],
    "specs": []
  },
  {
    "id": "147448",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Мрії в саду Vittora, 340 мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-316340. Код 1С: 147448.",
    "images": [
      "assets/images/products/147448.jpg"
    ],
    "specs": []
  },
  {
    "id": "147449",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Пухнаста галявина Vittora, 340 мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-315340. Код 1С: 147449.",
    "images": [
      "assets/images/products/147449.jpg"
    ],
    "specs": []
  },
  {
    "id": "122610",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Симпатяги Vittora, 340мл",
    "price": 118.0,
    "desc": "Артикул: VT-C-142340. Код 1С: 122610.",
    "images": [
      "assets/images/products/122610.jpg"
    ],
    "specs": []
  },
  {
    "id": "97857",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Айворі Сучасна дівчина, Vittora 340мл",
    "price": 119.0,
    "desc": "Артикул: VT-C-113340. Код 1С: 97857.",
    "images": [
      "assets/images/products/97857.jpg"
    ],
    "specs": []
  },
  {
    "id": "122612",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Візерунки Vittora, 340мл",
    "price": 118.0,
    "desc": "Артикул: VT-C-143340. Код 1С: 122612.",
    "images": [
      "assets/images/products/122612.jpg"
    ],
    "specs": []
  },
  {
    "id": "122614",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Синя з орнаментом Vittora, 340мл",
    "price": 118.0,
    "desc": "Артикул: VT-C-144340. Код 1С: 122614.",
    "images": [
      "assets/images/products/122614.jpg"
    ],
    "specs": []
  },
  {
    "id": "122536",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Солодкі сни Vittora, 350мл",
    "price": 190.0,
    "desc": "Артикул: VT-C-105350 . Код 1С: 122536.",
    "images": [
      "assets/images/products/122536.jpg"
    ],
    "specs": []
  },
  {
    "id": "127869",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Кумедні звірі Vittora, 340мл",
    "price": 114.0,
    "desc": "Артикул: VT-C-170340. Код 1С: 127869.",
    "images": [
      "assets/images/products/127869.jpg"
    ],
    "specs": []
  },
  {
    "id": "122688",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Грайливі оченята Vittora, 350мл",
    "price": 143.0,
    "desc": "Артикул: VT-C-97350 . Код 1С: 122688.",
    "images": [
      "assets/images/products/122688.jpg"
    ],
    "specs": []
  },
  {
    "id": "122546",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка На хвилях Vittora, 350мл",
    "price": 130.0,
    "desc": "Артикул: VT-C-110350 . Код 1С: 122546.",
    "images": [
      "assets/images/products/122546.jpg"
    ],
    "specs": []
  },
  {
    "id": "122590",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Чашка Взаємність Vittora, 350мл",
    "price": 98.0,
    "desc": "Артикул: VT-C-132350 . Код 1С: 122590.",
    "images": [
      "assets/images/products/122590.jpg"
    ],
    "specs": []
  },
  {
    "id": "122538",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вухаті друзі Vittora, 350мл",
    "price": 122.0,
    "desc": "Артикул: VT-C-106350. Код 1С: 122538.",
    "images": [
      "assets/images/products/122538.jpg"
    ],
    "specs": []
  },
  {
    "id": "122526",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Щасливий ранок Vittora, 350мл",
    "price": 130.0,
    "desc": "Артикул: VT-C-100350. Код 1С: 122526.",
    "images": [
      "assets/images/products/122526.jpg"
    ],
    "specs": []
  },
  {
    "id": "122604",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава з кардамоном Vittora, 350мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-139350 . Код 1С: 122604.",
    "images": [
      "assets/images/products/122604.jpg"
    ],
    "specs": []
  },
  {
    "id": "122692",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Мяу Vittora, 350мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-99350. Код 1С: 122692.",
    "images": [
      "assets/images/products/122692.jpg"
    ],
    "specs": []
  },
  {
    "id": "122586",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вечірня кава Vittora, 350мл",
    "price": 132.0,
    "desc": "Артикул: VT-C-130350 . Код 1С: 122586.",
    "images": [
      "assets/images/products/122586.jpg"
    ],
    "specs": []
  },
  {
    "id": "122570",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Добре зернятко Vittora, 350мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-122350 . Код 1С: 122570.",
    "images": [
      "assets/images/products/122570.jpg"
    ],
    "specs": []
  },
  {
    "id": "122532",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Любов в деталях Vittora, 340мл",
    "price": 122.0,
    "desc": "Артикул: VT-C-103350. Код 1С: 122532.",
    "images": [
      "assets/images/products/122532.jpg"
    ],
    "specs": []
  },
  {
    "id": "137545",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Колір кохання Vittora, 350мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-301350. Код 1С: 137545.",
    "images": [
      "assets/images/products/137545.jpg"
    ],
    "specs": []
  },
  {
    "id": "135034",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Бджілка Vittora, 355мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-272355. Код 1С: 135034.",
    "images": [
      "assets/images/products/135034.jpg"
    ],
    "specs": []
  },
  {
    "id": "110836",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Айворі Звірята індіанці, Vittora 340мл",
    "price": 118.0,
    "desc": "Артикул: VT-C-117340. Код 1С: 110836.",
    "images": [
      "assets/images/products/110836.jpg"
    ],
    "specs": []
  },
  {
    "id": "137444",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Витинанка Vittora, 360мл",
    "price": 134.0,
    "desc": "Артикул: VT-C-281360. Код 1С: 137444.",
    "images": [
      "assets/images/products/137444.jpg"
    ],
    "specs": []
  },
  {
    "id": "134347",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сердечні справи Vittora, 360мл",
    "price": 141.0,
    "desc": "Артикул: VT-C-252360. Код 1С: 134347.",
    "images": [
      "assets/images/products/134347.jpg"
    ],
    "specs": []
  },
  {
    "id": "134327",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Мелодія гір Vittora, 360мл",
    "price": 132.0,
    "desc": "Артикул: VT-C-244360. Код 1С: 134327.",
    "images": [
      "assets/images/products/134327.jpg"
    ],
    "specs": []
  },
  {
    "id": "134342",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квіти сходу Vittora, 360мл",
    "price": 121.0,
    "desc": "Артикул: VT-C-247360. Код 1С: 134342.",
    "images": [
      "assets/images/products/134342.jpg"
    ],
    "specs": []
  },
  {
    "id": "134339",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Лісові пригоди Vittora, 360мл",
    "price": 119.0,
    "desc": "Артикул: VT-C-243360. Код 1С: 134339.",
    "images": [
      "assets/images/products/134339.jpg"
    ],
    "specs": []
  },
  {
    "id": "134841",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Барви ночі з ложкою  Vittora, 360мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-258360. Код 1С: 134841.",
    "images": [
      "assets/images/products/134841.jpg"
    ],
    "specs": []
  },
  {
    "id": "134845",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка в коробці Арабіка  Vittora, 320мл",
    "price": 144.0,
    "desc": "Артикул: VT-C-262360. Код 1С: 134845.",
    "images": [
      "assets/images/products/134845.jpg"
    ],
    "specs": []
  },
  {
    "id": "134848",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Спекотна кава  Vittora, 360мл",
    "price": 116.0,
    "desc": "Артикул: VT-C-265360. Код 1С: 134848.",
    "images": [
      "assets/images/products/134848.jpg"
    ],
    "specs": []
  },
  {
    "id": "134844",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Барви ночі  Vittora, 360мл",
    "price": 105.0,
    "desc": "Артикул: VT-C-261360. Код 1С: 134844.",
    "images": [
      "assets/images/products/134844.jpg"
    ],
    "specs": []
  },
  {
    "id": "134344",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Весела геометрія Vittora, 360мл",
    "price": 147.0,
    "desc": "Артикул: VT-C-249360. Код 1С: 134344.",
    "images": [
      "assets/images/products/134344.jpg"
    ],
    "specs": []
  },
  {
    "id": "134323",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ведмежі мандри Vittora, 360мл",
    "price": 123.0,
    "desc": "Артикул: VT-C-207360. Код 1С: 134323.",
    "images": [
      "assets/images/products/134323.jpg"
    ],
    "specs": []
  },
  {
    "id": "134849",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Африканські мотиви  Vittora, 360мл",
    "price": 111.0,
    "desc": "Артикул: VT-C-266360. Код 1С: 134849.",
    "images": [
      "assets/images/products/134849.jpg"
    ],
    "specs": []
  },
  {
    "id": "133480",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Гербарій Vittora, 355мл",
    "price": 176.0,
    "desc": "Артикул: VT-C-203355 . Код 1С: 133480.",
    "images": [
      "assets/images/products/133480.jpg"
    ],
    "specs": []
  },
  {
    "id": "147438",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ритм кохання Vittora, 355 мл",
    "price": 137.0,
    "desc": "Артикул: VT-C-326355. Код 1С: 147438.",
    "images": [
      "assets/images/products/147438.jpg"
    ],
    "specs": []
  },
  {
    "id": "122640",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Безмежна радість Vittora, 360мл",
    "price": 135.0,
    "desc": "Артикул: VT-C-157360. Код 1С: 122640.",
    "images": [
      "assets/images/products/122640.jpg"
    ],
    "specs": []
  },
  {
    "id": "147447",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квітковий вальс Vittora, 350 мл",
    "price": 126.0,
    "desc": "Артикул: VT-C-317350. Код 1С: 147447.",
    "images": [
      "assets/images/products/147447.jpg"
    ],
    "specs": []
  },
  {
    "id": "134847",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Робуста  Vittora, 360мл",
    "price": 111.0,
    "desc": "Артикул: VT-C-264360. Код 1С: 134847.",
    "images": [
      "assets/images/products/134847.jpg"
    ],
    "specs": []
  },
  {
    "id": "122642",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кольорове диво Vittora, 360мл",
    "price": 135.0,
    "desc": "Артикул: VT-C-158360. Код 1С: 122642.",
    "images": [
      "assets/images/products/122642.jpg"
    ],
    "specs": []
  },
  {
    "id": "128891",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Присмак еспресо Vittora, 360мл",
    "price": 160.0,
    "desc": "Артикул: VT-C-224360. Код 1С: 128891.",
    "images": [
      "assets/images/products/128891.jpg"
    ],
    "specs": []
  },
  {
    "id": "127865",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Супер кава Vittora, 365мл",
    "price": 124.0,
    "desc": "Артикул: VT-C-168365. Код 1С: 127865.",
    "images": [
      "assets/images/products/127865.jpg"
    ],
    "specs": []
  },
  {
    "id": "159056",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Казкові коти Vittora, 360мл",
    "price": 101.0,
    "desc": "Артикул: VT-C-352360. Код 1С: 159056.",
    "images": [
      "assets/images/products/159056.jpg"
    ],
    "specs": []
  },
  {
    "id": "122616",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Медова Vittora, 365мл *Бджовеліна*",
    "price": 125.0,
    "desc": "Артикул: VT-C-145365. Код 1С: 122616.",
    "images": [
      "assets/images/products/122616.jpg"
    ],
    "specs": []
  },
  {
    "id": "127867",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Тукан Vittora, 365мл",
    "price": 124.0,
    "desc": "Артикул: VT-C-169365. Код 1С: 127867.",
    "images": [
      "assets/images/products/127867.jpg"
    ],
    "specs": []
  },
  {
    "id": "122622",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Гармонія Vittora, 365мл",
    "price": 174.0,
    "desc": "Артикул: VT-C-148365. Код 1С: 122622.",
    "images": [
      "assets/images/products/122622.jpg"
    ],
    "specs": []
  },
  {
    "id": "122618",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зефірна хмаринка Vittora, 365мл",
    "price": 125.0,
    "desc": "Артикул: VT-C-146365. Код 1С: 122618.",
    "images": [
      "assets/images/products/122618.jpg"
    ],
    "specs": []
  },
  {
    "id": "122644",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Канікули Vittora, 365мл",
    "price": 182.0,
    "desc": "Артикул: VT-C-159365. Код 1С: 122644.",
    "images": [
      "assets/images/products/122644.jpg"
    ],
    "specs": []
  },
  {
    "id": "122648",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Справжній друг Vittora, 355мл",
    "price": 174.0,
    "desc": "Артикул: VT-C-161355. Код 1С: 122648.",
    "images": [
      "assets/images/products/122648.jpg"
    ],
    "specs": []
  },
  {
    "id": "122646",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Тайм-аут Vittora, 365мл",
    "price": 125.0,
    "desc": "Артикул: VT-C-160365. Код 1С: 122646.",
    "images": [
      "assets/images/products/122646.jpg"
    ],
    "specs": []
  },
  {
    "id": "135030",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Солодкий поцілунок Vittora, 365мл",
    "price": 111.0,
    "desc": "Артикул: VT-C-268365. Код 1С: 135030.",
    "images": [
      "assets/images/products/135030.jpg"
    ],
    "specs": []
  },
  {
    "id": "137448",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Спокута Vittora, 370мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-284370. Код 1С: 137448.",
    "images": [
      "assets/images/products/137448.jpg"
    ],
    "specs": []
  },
  {
    "id": "133455",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сафарі Vittora, 365мл",
    "price": 125.0,
    "desc": "Артикул: VT-C-185365 . Код 1С: 133455.",
    "images": [
      "assets/images/products/133455.jpg"
    ],
    "specs": []
  },
  {
    "id": "128902",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зимові орнаменти Vittora, 360мл",
    "price": 131.0,
    "desc": "Артикул: VT-C-235360 . Код 1С: 128902.",
    "images": [
      "assets/images/products/128902.jpg"
    ],
    "specs": []
  },
  {
    "id": "135041",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Коліжанка Vittora, 370мл",
    "price": 139.0,
    "desc": "Артикул: VT-C-279370. Код 1С: 135041.",
    "images": [
      "assets/images/products/135041.jpg"
    ],
    "specs": []
  },
  {
    "id": "137543",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Незабутній вечір Vittora, 380мл",
    "price": 209.0,
    "desc": "Артикул: VT-C-296380. Код 1С: 137543.",
    "images": [
      "assets/images/products/137543.jpg"
    ],
    "specs": []
  },
  {
    "id": "133459",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кольорова клітинка Vittora, 380мл",
    "price": 199.0,
    "desc": "Артикул: VT-C-188380 . Код 1С: 133459.",
    "images": [
      "assets/images/products/133459.jpg"
    ],
    "specs": []
  },
  {
    "id": "135042",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ейфорія Vittora, 370мл",
    "price": 139.0,
    "desc": "Артикул: VT-C-280370. Код 1С: 135042.",
    "images": [
      "assets/images/products/135042.jpg"
    ],
    "specs": []
  },
  {
    "id": "137533",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Скарби дракона Vittora, 380мл",
    "price": 243.0,
    "desc": "Артикул: VT-C-286380. Код 1С: 137533.",
    "images": [
      "assets/images/products/137533.jpg"
    ],
    "specs": []
  },
  {
    "id": "122598",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Цілющий чай Vittora, 380мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-136380 . Код 1С: 122598.",
    "images": [
      "assets/images/products/122598.jpg"
    ],
    "specs": []
  },
  {
    "id": "122600",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Котик-муркотик Vittora, 380мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-137380 . Код 1С: 122600.",
    "images": [
      "assets/images/products/122600.jpg"
    ],
    "specs": []
  },
  {
    "id": "127873",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка  Айворі Блискітка Vittora, 340мл",
    "price": 211.0,
    "desc": "Артикул: VT-C-172340 . Код 1С: 127873.",
    "images": [
      "assets/images/products/127873.jpg"
    ],
    "specs": []
  },
  {
    "id": "133482",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Чорно-білі напої Vittora, 380мл",
    "price": 168.0,
    "desc": "Артикул: VT-C-205380 . Код 1С: 133482.",
    "images": [
      "assets/images/products/133482.jpg"
    ],
    "specs": []
  },
  {
    "id": "122624",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Доміно Vittora, 380мл",
    "price": 165.0,
    "desc": "Артикул: VT-C-149380. Код 1С: 122624.",
    "images": [
      "assets/images/products/122624.jpg"
    ],
    "specs": []
  },
  {
    "id": "133457",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квіткове поле Vittora, 380мл",
    "price": 162.0,
    "desc": "Артикул: VT-C-187380 . Код 1С: 133457.",
    "images": [
      "assets/images/products/133457.jpg"
    ],
    "specs": []
  },
  {
    "id": "133463",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квітковий комплімент Vittora, 385мл",
    "price": 168.0,
    "desc": "Артикул: VT-C-193385 . Код 1С: 133463.",
    "images": [
      "assets/images/products/133463.jpg"
    ],
    "specs": []
  },
  {
    "id": "133465",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Стильні портрети Vittora, 385мл",
    "price": 170.0,
    "desc": "Артикул: VT-C-195385 . Код 1С: 133465.",
    "images": [
      "assets/images/products/133465.jpg"
    ],
    "specs": []
  },
  {
    "id": "133464",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Художні коти Vittora, 385мл",
    "price": 170.0,
    "desc": "Артикул: VT-C-194385 . Код 1С: 133464.",
    "images": [
      "assets/images/products/133464.jpg"
    ],
    "specs": []
  },
  {
    "id": "133474",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Дівоча радість Vittora, 385мл",
    "price": 168.0,
    "desc": "Артикул: VT-C-196385 . Код 1С: 133474.",
    "images": [
      "assets/images/products/133474.jpg"
    ],
    "specs": []
  },
  {
    "id": "128901",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Астронавт Vittora, 390мл",
    "price": 145.0,
    "desc": "Артикул: VT-C-234390. Код 1С: 128901.",
    "images": [
      "assets/images/products/128901.jpg"
    ],
    "specs": []
  },
  {
    "id": "122572",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавова подорож Vittora, 380мл",
    "price": 127.0,
    "desc": "Артикул: VT-C-123380. Код 1С: 122572.",
    "images": [
      "assets/images/products/122572.jpg"
    ],
    "specs": []
  },
  {
    "id": "134351",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка в коробці Мегаполіс Vittora, 390мл",
    "price": 208.0,
    "desc": "Артикул: VT-C-256390. Код 1С: 134351.",
    "images": [
      "assets/images/products/134351.jpg"
    ],
    "specs": []
  },
  {
    "id": "135035",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Герань Vittora, 390мл",
    "price": 160.0,
    "desc": "Артикул: VT-C-273390. Код 1С: 135035.",
    "images": [
      "assets/images/products/135035.jpg"
    ],
    "specs": []
  },
  {
    "id": "137538",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Золото небес Vittora, 370мл",
    "price": 207.0,
    "desc": "Артикул: VT-C-290370. Код 1С: 137538.",
    "images": [
      "assets/images/products/137538.jpg"
    ],
    "specs": []
  },
  {
    "id": "122630",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава та чай Vittora, 385мл",
    "price": 168.0,
    "desc": "Артикул: VT-C-152385. Код 1С: 122630.",
    "images": [
      "assets/images/products/122630.jpg"
    ],
    "specs": []
  },
  {
    "id": "135038",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Астра Vittora, 390мл",
    "price": 232.0,
    "desc": "Артикул: VT-C-276390. Код 1С: 135038.",
    "images": [
      "assets/images/products/135038.jpg"
    ],
    "specs": []
  },
  {
    "id": "135036",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавовий гостинець Vittora, 390мл",
    "price": 160.0,
    "desc": "Артикул: VT-C-274390. Код 1С: 135036.",
    "images": [
      "assets/images/products/135036.jpg"
    ],
    "specs": []
  },
  {
    "id": "135037",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Яскрава кава Vittora, 395мл",
    "price": 141.0,
    "desc": "Артикул: VT-C-275395. Код 1С: 135037.",
    "images": [
      "assets/images/products/135037.jpg"
    ],
    "specs": []
  },
  {
    "id": "128960",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кольорове орігамі , Vittora 360мл",
    "price": 69.0,
    "desc": "Артикул: VT-C-76360. Код 1С: 128960.",
    "images": [
      "assets/images/products/128960.jpg"
    ],
    "specs": []
  },
  {
    "id": "122626",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Закарпаття Vittora, 400мл",
    "price": 166.0,
    "desc": "Артикул: VT-C-150400. Код 1С: 122626.",
    "images": [
      "assets/images/products/122626.jpg"
    ],
    "specs": []
  },
  {
    "id": "122628",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Материнка Vittora, 400мл",
    "price": 166.0,
    "desc": "Артикул: VT-C-151400. Код 1С: 122628.",
    "images": [
      "assets/images/products/122628.jpg"
    ],
    "specs": []
  },
  {
    "id": "133460",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Букет з метеликом Vittora, 400мл",
    "price": 168.0,
    "desc": "Артикул: VT-C-189400 . Код 1С: 133460.",
    "images": [
      "assets/images/products/133460.jpg"
    ],
    "specs": []
  },
  {
    "id": "133462",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вишукана троянда Vittora, 400мл",
    "price": 201.0,
    "desc": "Артикул: VT-C-192400 . Код 1С: 133462.",
    "images": [
      "assets/images/products/133462.jpg"
    ],
    "specs": []
  },
  {
    "id": "147437",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Яскраві серця Vittora, 385 мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-327385. Код 1С: 147437.",
    "images": [
      "assets/images/products/147437.jpg"
    ],
    "specs": []
  },
  {
    "id": "135031",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Буржуа Vittora, 400мл",
    "price": 169.0,
    "desc": "Артикул: VT-C-269400. Код 1С: 135031.",
    "images": [
      "assets/images/products/135031.jpg"
    ],
    "specs": []
  },
  {
    "id": "147445",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Амурні справи Vittora, 385 мл",
    "price": 138.0,
    "desc": "Артикул: VT-C-319385. Код 1С: 147445.",
    "images": [
      "assets/images/products/147445.jpg"
    ],
    "specs": []
  },
  {
    "id": "147443",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ніжна любов Vittora, 390 мл",
    "price": 142.0,
    "desc": "Артикул: VT-C-321390. Код 1С: 147443.",
    "images": [
      "assets/images/products/147443.jpg"
    ],
    "specs": []
  },
  {
    "id": "133477",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Денді Vittora, 410мл",
    "price": 191.0,
    "desc": "Артикул: VT-C-199410 . Код 1С: 133477.",
    "images": [
      "assets/images/products/133477.jpg"
    ],
    "specs": []
  },
  {
    "id": "135033",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квітневі мрії Vittora, 405мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-271405. Код 1С: 135033.",
    "images": [
      "assets/images/products/135033.jpg"
    ],
    "specs": []
  },
  {
    "id": "137540",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Рівновага Vittora, 410мл",
    "price": 260.0,
    "desc": "Артикул: VT-C-294410. Код 1С: 137540.",
    "images": [
      "assets/images/products/137540.jpg"
    ],
    "specs": []
  },
  {
    "id": "134322",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Затишна любов Vittora, 420мл",
    "price": 249.0,
    "desc": "Артикул: VT-C-206420. Код 1С: 134322.",
    "images": [
      "assets/images/products/134322.jpg"
    ],
    "specs": []
  },
  {
    "id": "128900",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Скрижалі Vittora, 420мл",
    "price": 222.0,
    "desc": "Артикул: VT-C-233420. Код 1С: 128900.",
    "images": [
      "assets/images/products/128900.jpg"
    ],
    "specs": []
  },
  {
    "id": "128906",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Песик Міккі Vittora, 420мл",
    "price": 249.0,
    "desc": "Артикул: VT-C-239420. Код 1С: 128906.",
    "images": [
      "assets/images/products/128906.jpg"
    ],
    "specs": []
  },
  {
    "id": "134346",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Вишуканий орнамент Vittora, 420мл",
    "price": 158.0,
    "desc": "Артикул: VT-C-251420. Код 1С: 134346.",
    "images": [
      "assets/images/products/134346.jpg"
    ],
    "specs": []
  },
  {
    "id": "122594",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава в смужку Vittora, 440мл",
    "price": 141.0,
    "desc": "Артикул: VT-C-134440. Код 1С: 122594.",
    "images": [
      "assets/images/products/122594.jpg"
    ],
    "specs": []
  },
  {
    "id": "134343",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Гірський струмок Vittora, 420мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-248420. Код 1С: 134343.",
    "images": [
      "assets/images/products/134343.jpg"
    ],
    "specs": []
  },
  {
    "id": "122606",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавовий дует Vittora, 440мл",
    "price": 141.0,
    "desc": "Артикул: VT-C-140440. Код 1С: 122606.",
    "images": [
      "assets/images/products/122606.jpg"
    ],
    "specs": []
  },
  {
    "id": "128896",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Смак сходу Vittora, 450мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-229450. Код 1С: 128896.",
    "images": [
      "assets/images/products/128896.jpg"
    ],
    "specs": []
  },
  {
    "id": "133479",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Золоті гори Vittora, 435мл",
    "price": 343.0,
    "desc": "Артикул: VT-C-202435 . Код 1С: 133479.",
    "images": [
      "assets/images/products/133479.jpg"
    ],
    "specs": []
  },
  {
    "id": "134842",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Барви ночі з ложкою  Vittora, 450мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-259450. Код 1С: 134842.",
    "images": [
      "assets/images/products/134842.jpg"
    ],
    "specs": []
  },
  {
    "id": "134840",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Барви ночі Vittora, 450мл",
    "price": 134.0,
    "desc": "Артикул: VT-C-257450. Код 1С: 134840.",
    "images": [
      "assets/images/products/134840.jpg"
    ],
    "specs": []
  },
  {
    "id": "128894",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кавова хвилинка Vittora, 420мл",
    "price": 83.0,
    "desc": "Артикул: VT-C-227420. Код 1С: 128894.",
    "images": [
      "assets/images/products/128894.jpg"
    ],
    "specs": []
  },
  {
    "id": "128907",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зефірна кішечка Vittora, 480мл",
    "price": 162.0,
    "desc": "Артикул: VT-C-240480 . Код 1С: 128907.",
    "images": [
      "assets/images/products/128907.jpg"
    ],
    "specs": []
  },
  {
    "id": "122662",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Веселка Vittora, 470мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-84470. Код 1С: 122662.",
    "images": [
      "assets/images/products/122662.jpg"
    ],
    "specs": []
  },
  {
    "id": "128908",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Веселі горохи Vittora, 480мл",
    "price": 162.0,
    "desc": "Артикул: VT-C-241480. Код 1С: 128908.",
    "images": [
      "assets/images/products/128908.jpg"
    ],
    "specs": []
  },
  {
    "id": "159058",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Казкові песики Vittora, 415мл",
    "price": 160.0,
    "desc": "Артикул: VT-C-354415. Код 1С: 159058.",
    "images": [
      "assets/images/products/159058.jpg"
    ],
    "specs": []
  },
  {
    "id": "137546",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Час для чаю Vittora, 480мл",
    "price": 155.0,
    "desc": "Артикул: VT-C-302480. Код 1С: 137546.",
    "images": [
      "assets/images/products/137546.jpg"
    ],
    "specs": []
  },
  {
    "id": "122686",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ароматний обід Vittora, 500мл",
    "price": 139.0,
    "desc": "Артикул: VT-C-96500. Код 1С: 122686.",
    "images": [
      "assets/images/products/122686.jpg"
    ],
    "specs": []
  },
  {
    "id": "159057",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава з любов'ю Vittora, 415мл",
    "price": 150.0,
    "desc": "Артикул: VT-C-353415. Код 1С: 159057.",
    "images": [
      "assets/images/products/159057.jpg"
    ],
    "specs": []
  },
  {
    "id": "137445",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кристал Vittora, 420мл",
    "price": 143.0,
    "desc": "Артикул: VT-C-282420. Код 1С: 137445.",
    "images": [
      "assets/images/products/137445.jpg"
    ],
    "specs": []
  },
  {
    "id": "134348",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Boss Vittora, 485мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-253510. Код 1С: 134348.",
    "images": [
      "assets/images/products/134348.jpg"
    ],
    "specs": []
  },
  {
    "id": "147444",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Розквіт кохання Vittora, 440 мл",
    "price": 186.0,
    "desc": "Артикул: VT-C-320440. Код 1С: 147444.",
    "images": [
      "assets/images/products/147444.jpg"
    ],
    "specs": []
  },
  {
    "id": "133476",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Англійська клітинка Vittora, 520мл",
    "price": 222.0,
    "desc": "Артикул: VT-C-198520 . Код 1С: 133476.",
    "images": [
      "assets/images/products/133476.jpg"
    ],
    "specs": []
  },
  {
    "id": "137535",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Золотий бутон Vittora, 550мл",
    "price": 260.0,
    "desc": "Артикул: VT-C-289550. Код 1С: 137535.",
    "images": [
      "assets/images/products/137535.jpg"
    ],
    "specs": []
  },
  {
    "id": "122664",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кольорова мозаїка Vittora, 570мл",
    "price": 152.0,
    "desc": "Артикул: VT-C-85600. Код 1С: 122664.",
    "images": [
      "assets/images/products/122664.jpg"
    ],
    "specs": []
  },
  {
    "id": "122684",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Ароматний обід Vittora, 600мл",
    "price": 178.0,
    "desc": "Артикул: VT-C-95650. Код 1С: 122684.",
    "images": [
      "assets/images/products/122684.jpg"
    ],
    "specs": []
  },
  {
    "id": "133481",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Квіткові силуети Vittora, 600мл",
    "price": 306.0,
    "desc": "Артикул: VT-C-204600 . Код 1С: 133481.",
    "images": [
      "assets/images/products/133481.jpg"
    ],
    "specs": []
  },
  {
    "id": "137528",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Золото океану Vittora, 560мл",
    "price": 304.0,
    "desc": "Артикул: VT-C-285560. Код 1С: 137528.",
    "images": [
      "assets/images/products/137528.jpg"
    ],
    "specs": []
  },
  {
    "id": "137547",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Кава для тата Vittora, 600мл",
    "price": 199.0,
    "desc": "Артикул: VT-C-303600. Код 1С: 137547.",
    "images": [
      "assets/images/products/137547.jpg"
    ],
    "specs": []
  },
  {
    "id": "128902",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зимові орнаменти Vittora, 360мл",
    "price": 131.0,
    "desc": "Артикул: VT-C-235360 . Код 1С: 128902.",
    "images": [
      "assets/images/products/128902.jpg"
    ],
    "specs": []
  },
  {
    "id": "122580",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Заквітчана Vittora, 325мл",
    "price": 118.0,
    "desc": "Артикул: VT-C-127325. Код 1С: 122580.",
    "images": [
      "assets/images/products/122580.jpg"
    ],
    "specs": []
  },
  {
    "id": "133484",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дитячий набір Джентельмени Vittora,  2пр",
    "price": 368.0,
    "desc": "Артикул: VT-C-201G . Код 1С: 133484.",
    "images": [
      "assets/images/products/133484.jpg"
    ],
    "specs": []
  },
  {
    "id": "138320",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Новорічні іграшки Vittora, 370мл",
    "price": 161.0,
    "desc": "Артикул: VT-C-310355. Код 1С: 138320.",
    "images": [],
    "specs": []
  },
  {
    "id": "134843",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Барви ночі  Vittora, 780мл",
    "price": 147.0,
    "desc": "Артикул: VT-C-260780. Код 1С: 134843.",
    "images": [
      "assets/images/products/134843.jpg"
    ],
    "specs": []
  },
  {
    "id": "128897",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Улюблений напій Vittora, 450мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-230450 . Код 1С: 128897.",
    "images": [
      "assets/images/products/128897.jpg"
    ],
    "specs": []
  },
  {
    "id": "128905",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зимова пісня Vittora, 420мл",
    "price": 124.0,
    "desc": "Артикул: VT-C-238420. Код 1С: 128905.",
    "images": [
      "assets/images/products/128905.jpg"
    ],
    "specs": []
  },
  {
    "id": "147436",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сердечне тепло Vittora, 480 мл",
    "price": 184.0,
    "desc": "Артикул: VT-C-328480. Код 1С: 147436.",
    "images": [
      "assets/images/products/147436.jpg"
    ],
    "specs": []
  },
  {
    "id": "128904",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Фрея Vittora, 330мл",
    "price": 128.0,
    "desc": "Артикул: VT-C-237330. Код 1С: 128904.",
    "images": [
      "assets/images/products/128904.jpg"
    ],
    "specs": []
  },
  {
    "id": "147427",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Святкові пустощі Vittora, 340 мл",
    "price": 124.0,
    "desc": "Артикул: VT-C-337340. Код 1С: 147427.",
    "images": [
      "assets/images/products/147427.jpg"
    ],
    "specs": []
  },
  {
    "id": "147425",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Теплі спогади Vittora, 345 мл",
    "price": 149.0,
    "desc": "Артикул: VT-C-338345. Код 1С: 147425.",
    "images": [
      "assets/images/products/147425.jpg"
    ],
    "specs": []
  },
  {
    "id": "147432",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Різдвяний переполох Vittora, 340 мл",
    "price": 143.0,
    "desc": "Артикул: VT-C-332340. Код 1С: 147432.",
    "images": [
      "assets/images/products/147432.jpg"
    ],
    "specs": []
  },
  {
    "id": "147422",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Сніжний затишок Vittora, 380 мл",
    "price": 151.0,
    "desc": "Артикул: VT-C-340380. Код 1С: 147422.",
    "images": [
      "assets/images/products/147422.jpg"
    ],
    "specs": []
  },
  {
    "id": "147423",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Новорічні візерунки Vittora, 355 мл",
    "price": 151.0,
    "desc": "Артикул: VT-C-339355. Код 1С: 147423.",
    "images": [
      "assets/images/products/147423.jpg"
    ],
    "specs": []
  },
  {
    "id": "147431",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Помічники Санти Vittora, 305 мл",
    "price": 138.0,
    "desc": "Артикул: VT-C-333305. Код 1С: 147431.",
    "images": [
      "assets/images/products/147431.jpg"
    ],
    "specs": []
  },
  {
    "id": "147430",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Магія Різдва Vittora, 355 мл",
    "price": 138.0,
    "desc": "Артикул: VT-C-334355. Код 1С: 147430.",
    "images": [
      "assets/images/products/147430.jpg"
    ],
    "specs": []
  },
  {
    "id": "147433",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Різдвяні вітання Vittora, 360 мл",
    "price": 133.0,
    "desc": "Артикул: VT-C-331360. Код 1С: 147433.",
    "images": [
      "assets/images/products/147433.jpg"
    ],
    "specs": []
  },
  {
    "id": "147434",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Новорічний стиль Vittora, 380 мл",
    "price": 131.0,
    "desc": "Артикул: VT-C-330380. Код 1С: 147434.",
    "images": [
      "assets/images/products/147434.jpg"
    ],
    "specs": []
  },
  {
    "id": "144353",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води SPORT 350мл GT-699001-350, GUSTO",
    "price": 296.0,
    "desc": "Артикул: GT-699001-350. Код 1С: 144353.",
    "images": [
      "assets/images/products/144353.jpg"
    ],
    "specs": []
  },
  {
    "id": "144370",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води SPORT 800мл GT-699003-800, GUSTO",
    "price": 332.0,
    "desc": "Артикул: GT-699003-800. Код 1С: 144370.",
    "images": [
      "assets/images/products/144370.jpg"
    ],
    "specs": []
  },
  {
    "id": "144371",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води SPORT 500мл GT-699002-500, GUSTO",
    "price": 312.0,
    "desc": "Артикул: GT-699002-500. Код 1С: 144371.",
    "images": [
      "assets/images/products/144371.jpg"
    ],
    "specs": []
  },
  {
    "id": "147421",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Снігова мозаїка Vittora, 380 мл",
    "price": 151.0,
    "desc": "Артикул: VT-C-341380. Код 1С: 147421.",
    "images": [
      "assets/images/products/147421.jpg"
    ],
    "specs": []
  },
  {
    "id": "144368",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води WAY 900мл GT-699005-900, GUSTO бузкова",
    "price": 346.0,
    "desc": "Артикул: GT-699005-900. Код 1С: 144368.",
    "images": [
      "assets/images/products/144368.jpg"
    ],
    "specs": []
  },
  {
    "id": "144369",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води WAY 900мл GT-699004-900, GUSTO блакитна",
    "price": 346.0,
    "desc": "Артикул: GT-699004-900. Код 1С: 144369.",
    "images": [
      "assets/images/products/144369.jpg"
    ],
    "specs": []
  },
  {
    "id": "144367",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води WAY 900мл GT-699006-900, GUSTO чорна",
    "price": 346.0,
    "desc": "Артикул: GT-699006-900. Код 1С: 144367.",
    "images": [
      "assets/images/products/144367.jpg"
    ],
    "specs": []
  },
  {
    "id": "147428",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Новорічні мотиви Vittora, 395 мл",
    "price": 138.0,
    "desc": "Артикул: VT-C-336395. Код 1С: 147428.",
    "images": [
      "assets/images/products/147428.jpg"
    ],
    "specs": []
  },
  {
    "id": "144366",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води STEP 450мл GT-699007-450, GUSTO бузкова",
    "price": 262.0,
    "desc": "Артикул: GT-699007-450. Код 1С: 144366.",
    "images": [
      "assets/images/products/144366.jpg"
    ],
    "specs": []
  },
  {
    "id": "147429",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Зимова радість Vittora, 395 мл",
    "price": 138.0,
    "desc": "Артикул: VT-C-335395. Код 1С: 147429.",
    "images": [
      "assets/images/products/147429.jpg"
    ],
    "specs": []
  },
  {
    "id": "144365",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води STEP 450мл GT-699008-450, GUSTO рожева",
    "price": 262.0,
    "desc": "Артикул: GT-699008-450. Код 1С: 144365.",
    "images": [
      "assets/images/products/144365.jpg"
    ],
    "specs": []
  },
  {
    "id": "147441",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка Морозне диво Vittora, 400 мл",
    "price": 154.0,
    "desc": "Артикул: VT-C-323400. Код 1С: 147441.",
    "images": [
      "assets/images/products/147441.jpg"
    ],
    "specs": []
  },
  {
    "id": "144364",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води GO 750мл GT-699009-750, GUSTO бузкова",
    "price": 357.0,
    "desc": "Артикул: GT-699009-750. Код 1С: 144364.",
    "images": [
      "assets/images/products/144364.jpg"
    ],
    "specs": []
  },
  {
    "id": "144363",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води GO 750мл GT-699010-750, GUSTO блакитна",
    "price": 357.0,
    "desc": "Артикул: GT-699010-750. Код 1С: 144363.",
    "images": [
      "assets/images/products/144363.jpg"
    ],
    "specs": []
  },
  {
    "id": "144362",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води HOP 750мл GT-699011-750, GUSTO",
    "price": 386.0,
    "desc": "Артикул: GT-699011-750. Код 1С: 144362.",
    "images": [
      "assets/images/products/144362.jpg"
    ],
    "specs": []
  },
  {
    "id": "147440",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з блюдцем Снігова вишиванка Vittora, 240 мл",
    "price": 248.0,
    "desc": "Артикул: VT-C-324240. Код 1С: 147440.",
    "images": [
      "assets/images/products/147440.jpg"
    ],
    "specs": []
  },
  {
    "id": "144361",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води KEEP 800мл GT-699012-800, GUSTO сіра",
    "price": 370.0,
    "desc": "Артикул: GT-699012-800. Код 1С: 144361.",
    "images": [
      "assets/images/products/144361.jpg"
    ],
    "specs": []
  },
  {
    "id": "144359",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води KEEP 800мл GT-699014-800, GUSTO хакі",
    "price": 370.0,
    "desc": "Артикул: GT-699014-800. Код 1С: 144359.",
    "images": [
      "assets/images/products/144359.jpg"
    ],
    "specs": []
  },
  {
    "id": "144358",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води WENT 600мл GT-699015-600, GUSTO",
    "price": 303.0,
    "desc": "Артикул: GT-699015-600. Код 1С: 144358.",
    "images": [
      "assets/images/products/144358.jpg"
    ],
    "specs": []
  },
  {
    "id": "144357",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води WENT 750мл GT-699016-750, GUSTO",
    "price": 377.0,
    "desc": "Артикул: GT-699016-750. Код 1С: 144357.",
    "images": [
      "assets/images/products/144357.jpg"
    ],
    "specs": []
  },
  {
    "id": "144360",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води KEEP 800мл GT-699013-800, GUSTO графіт",
    "price": 370.0,
    "desc": "Артикул: GT-699013-800. Код 1С: 144360.",
    "images": [
      "assets/images/products/144360.jpg"
    ],
    "specs": []
  },
  {
    "id": "155948",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води VIBE 800мл, GUSTO",
    "price": 298.0,
    "desc": "Артикул: GT-699021-800. Код 1С: 155948.",
    "images": [],
    "specs": []
  },
  {
    "id": "144355",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води RUN 800мл GT-699018-800, GUSTO",
    "price": 296.0,
    "desc": "Артикул: GT-699018-800. Код 1С: 144355.",
    "images": [
      "assets/images/products/144355.jpg"
    ],
    "specs": []
  },
  {
    "id": "155944",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води FLOW 500мл , GUSTO",
    "price": 307.0,
    "desc": "Артикул: GT-699020-500. Код 1С: 155944.",
    "images": [
      "assets/images/products/155944.jpg"
    ],
    "specs": []
  },
  {
    "id": "155945",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води FLOW 650мл, GUSTO",
    "price": 322.0,
    "desc": "Артикул: GT-699020-650. Код 1С: 155945.",
    "images": [
      "assets/images/products/155945.jpg"
    ],
    "specs": []
  },
  {
    "id": "155949",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води VIBE 1000мл, GUSTO",
    "price": 333.0,
    "desc": "Артикул: GT-699021-1000. Код 1С: 155949.",
    "images": [],
    "specs": []
  },
  {
    "id": "144356",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води RUN 600мл GT-699017-600, GUSTO",
    "price": 281.0,
    "desc": "Артикул: GT-699017-600. Код 1С: 144356.",
    "images": [
      "assets/images/products/144356.jpg"
    ],
    "specs": []
  },
  {
    "id": "144354",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води SKIP 1000мл GT-699019-1000, GUSTO",
    "price": 348.0,
    "desc": "Артикул: GT-699019-1000. Код 1С: 144354.",
    "images": [
      "assets/images/products/144354.jpg"
    ],
    "specs": []
  },
  {
    "id": "155946",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води FLOW 800мл , GUSTO",
    "price": 334.0,
    "desc": "Артикул: GT-699020-800. Код 1С: 155946.",
    "images": [
      "assets/images/products/155946.jpg"
    ],
    "specs": []
  },
  {
    "id": "126097",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Migo 300мл GUSTO, зелена",
    "price": 266.0,
    "desc": "Артикул: GT-G-912013. Код 1С: 126097.",
    "images": [
      "assets/images/products/126097.jpg"
    ],
    "specs": []
  },
  {
    "id": "126099",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Migo 300мл GUSTO, рожева",
    "price": 266.0,
    "desc": "Артикул: GT-G-912013. Код 1С: 126099.",
    "images": [
      "assets/images/products/126099.jpg"
    ],
    "specs": []
  },
  {
    "id": "126105",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Mini Sky 450мл GUSTO, аквамарін",
    "price": 150.0,
    "desc": "Артикул: GT-G-911034. Код 1С: 126105.",
    "images": [
      "assets/images/products/126105.jpg"
    ],
    "specs": []
  },
  {
    "id": "126101",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Migo 300мл GUSTO, синя",
    "price": 266.0,
    "desc": "Артикул: GT-G-912013. Код 1С: 126101.",
    "images": [
      "assets/images/products/126101.jpg"
    ],
    "specs": []
  },
  {
    "id": "126107",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Mini Sky 450мл GUSTO, салатова",
    "price": 150.0,
    "desc": "Артикул: GT-G-911034. Код 1С: 126107.",
    "images": [
      "assets/images/products/126107.jpg"
    ],
    "specs": []
  },
  {
    "id": "126117",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Sonic 500мл GUSTO, синя",
    "price": 206.0,
    "desc": "Артикул: GT-G-912058. Код 1С: 126117.",
    "images": [
      "assets/images/products/126117.jpg"
    ],
    "specs": []
  },
  {
    "id": "126115",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Sonic 500мл GUSTO, рожева",
    "price": 206.0,
    "desc": "Артикул: GT-G-912058. Код 1С: 126115.",
    "images": [
      "assets/images/products/126115.jpg"
    ],
    "specs": []
  },
  {
    "id": "126067",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Falcon 500мл GUSTO, рожева",
    "price": 332.0,
    "desc": "Артикул: GT-G-912037. Код 1С: 126067.",
    "images": [
      "assets/images/products/126067.jpg"
    ],
    "specs": []
  },
  {
    "id": "155947",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води VIBE 550мл, GUSTO",
    "price": 256.0,
    "desc": "Артикул: GT-699021-550. Код 1С: 155947.",
    "images": [
      "assets/images/products/155947.jpg"
    ],
    "specs": []
  },
  {
    "id": "126069",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Falcon 500мл GUSTO, синя",
    "price": 332.0,
    "desc": "Артикул: GT-G-912037. Код 1С: 126069.",
    "images": [
      "assets/images/products/126069.jpg"
    ],
    "specs": []
  },
  {
    "id": "126071",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Falcon 500мл GUSTO, сіра",
    "price": 332.0,
    "desc": "Артикул: GT-G-912037. Код 1С: 126071.",
    "images": [
      "assets/images/products/126071.jpg"
    ],
    "specs": []
  },
  {
    "id": "126073",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Juno 500мл GUSTO, рожева",
    "price": 288.0,
    "desc": "Артикул: GT-G-912089. Код 1С: 126073.",
    "images": [
      "assets/images/products/126073.jpg"
    ],
    "specs": []
  },
  {
    "id": "126075",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Juno 500мл GUSTO, сіра",
    "price": 288.0,
    "desc": "Артикул: GT-G-912089. Код 1С: 126075.",
    "images": [
      "assets/images/products/126075.jpg"
    ],
    "specs": []
  },
  {
    "id": "126079",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 500мл GUSTO, рожева",
    "price": 255.0,
    "desc": "Артикул: GT-G-912036. Код 1С: 126079.",
    "images": [
      "assets/images/products/126079.jpg"
    ],
    "specs": []
  },
  {
    "id": "126081",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 500мл GUSTO, сіра",
    "price": 255.0,
    "desc": "Артикул: GT-G-912036. Код 1С: 126081.",
    "images": [
      "assets/images/products/126081.jpg"
    ],
    "specs": []
  },
  {
    "id": "126093",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 630мл GUSTO, синя",
    "price": 299.0,
    "desc": "Артикул: GT-G-912033. Код 1С: 126093.",
    "images": [
      "assets/images/products/126093.jpg"
    ],
    "specs": []
  },
  {
    "id": "126077",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Juno 500мл GUSTO,синя",
    "price": 288.0,
    "desc": "Артикул: GT-G-912089. Код 1С: 126077.",
    "images": [
      "assets/images/products/126077.jpg"
    ],
    "specs": []
  },
  {
    "id": "126083",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 500мл GUSTO,синя",
    "price": 255.0,
    "desc": "Артикул: GT-G-912036. Код 1С: 126083.",
    "images": [
      "assets/images/products/126083.jpg"
    ],
    "specs": []
  },
  {
    "id": "126091",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 630мл GUSTO, рожева",
    "price": 299.0,
    "desc": "Артикул: GT-G-912033. Код 1С: 126091.",
    "images": [
      "assets/images/products/126091.jpg"
    ],
    "specs": []
  },
  {
    "id": "126095",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya 630мл GUSTO, сіра",
    "price": 299.0,
    "desc": "Артикул: GT-G-912033. Код 1С: 126095.",
    "images": [
      "assets/images/products/126095.jpg"
    ],
    "specs": []
  },
  {
    "id": "126109",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Sky 630мл GUSTO, аквамарін",
    "price": 163.0,
    "desc": "Артикул: GT-G-911035. Код 1С: 126109.",
    "images": [
      "assets/images/products/126109.jpg"
    ],
    "specs": []
  },
  {
    "id": "126111",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Sky 630мл GUSTO, рожева",
    "price": 163.0,
    "desc": "Артикул: GT-G-911035. Код 1С: 126111.",
    "images": [
      "assets/images/products/126111.jpg"
    ],
    "specs": []
  },
  {
    "id": "126113",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Sky 630мл GUSTO, салатова",
    "price": 163.0,
    "desc": "Артикул: GT-G-911035. Код 1С: 126113.",
    "images": [
      "assets/images/products/126113.jpg"
    ],
    "specs": []
  },
  {
    "id": "128509",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Atlas 630мл GUSTO, бежева",
    "price": 417.0,
    "desc": "Артикул: GT-G-912113. Код 1С: 128509.",
    "images": [
      "assets/images/products/128509.jpg"
    ],
    "specs": []
  },
  {
    "id": "128508",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Atlas 630мл GUSTO, фіолетова",
    "price": 417.0,
    "desc": "Артикул: GT-G-912113. Код 1С: 128508.",
    "images": [
      "assets/images/products/128508.jpg"
    ],
    "specs": []
  },
  {
    "id": "128510",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Atlas 630мл GUSTO, бірюза",
    "price": 417.0,
    "desc": "Артикул: GT-G-912113. Код 1С: 128510.",
    "images": [
      "assets/images/products/128510.jpg"
    ],
    "specs": []
  },
  {
    "id": "128506",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Saga 630мл GUSTO, синя",
    "price": 408.0,
    "desc": "Артикул: GT-G-912120. Код 1С: 128506.",
    "images": [
      "assets/images/products/128506.jpg"
    ],
    "specs": []
  },
  {
    "id": "126087",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya з інфузором 730мл GUSTO, синя",
    "price": 354.0,
    "desc": "Артикул: GT-G-912051. Код 1С: 126087.",
    "images": [
      "assets/images/products/126087.jpg"
    ],
    "specs": []
  },
  {
    "id": "128505",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Saga 630мл GUSTO, зелена",
    "price": 408.0,
    "desc": "Артикул: GT-G-912120. Код 1С: 128505.",
    "images": [
      "assets/images/products/128505.jpg"
    ],
    "specs": []
  },
  {
    "id": "128507",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Saga 630мл GUSTO, фіолетова",
    "price": 408.0,
    "desc": "Артикул: GT-G-912120. Код 1С: 128507.",
    "images": [
      "assets/images/products/128507.jpg"
    ],
    "specs": []
  },
  {
    "id": "126085",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya з інфузором 730мл GUSTO, рожева",
    "price": 354.0,
    "desc": "Артикул: GT-G-912051. Код 1С: 126085.",
    "images": [
      "assets/images/products/126085.jpg"
    ],
    "specs": []
  },
  {
    "id": "126055",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 750мл GUSTO, рожева",
    "price": 395.0,
    "desc": "Артикул: GT-G-912068. Код 1С: 126055.",
    "images": [
      "assets/images/products/126055.jpg"
    ],
    "specs": []
  },
  {
    "id": "126059",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 750мл GUSTO, сіра",
    "price": 395.0,
    "desc": "Артикул: GT-G-912068. Код 1С: 126059.",
    "images": [
      "assets/images/products/126059.jpg"
    ],
    "specs": []
  },
  {
    "id": "126057",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 750мл GUSTO, синя",
    "price": 395.0,
    "desc": "Артикул: GT-G-912068. Код 1С: 126057.",
    "images": [
      "assets/images/products/126057.jpg"
    ],
    "specs": []
  },
  {
    "id": "126061",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 800мл GUSTO, рожева",
    "price": 338.0,
    "desc": "Артикул: GT-G-912069. Код 1С: 126061.",
    "images": [
      "assets/images/products/126061.jpg"
    ],
    "specs": []
  },
  {
    "id": "126063",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 800мл GUSTO, синя",
    "price": 338.0,
    "desc": "Артикул: GT-G-912069. Код 1С: 126063.",
    "images": [
      "assets/images/products/126063.jpg"
    ],
    "specs": []
  },
  {
    "id": "126065",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Ege 800мл GUSTO, сіра",
    "price": 338.0,
    "desc": "Артикул: GT-G-912069. Код 1С: 126065.",
    "images": [
      "assets/images/products/126065.jpg"
    ],
    "specs": []
  },
  {
    "id": "128515",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Cross 1л GUSTO, рожева",
    "price": 183.0,
    "desc": "Артикул: GT-G-911044. Код 1С: 128515.",
    "images": [
      "assets/images/products/128515.jpg"
    ],
    "specs": []
  },
  {
    "id": "126089",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Lidya з інфузором 730мл GUSTO, сіра",
    "price": 354.0,
    "desc": "Артикул: GT-G-912051. Код 1С: 126089.",
    "images": [
      "assets/images/products/126089.jpg"
    ],
    "specs": []
  },
  {
    "id": "128514",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Cross 1л GUSTO, синя",
    "price": 183.0,
    "desc": "Артикул: GT-G-911044. Код 1С: 128514.",
    "images": [
      "assets/images/products/128514.jpg"
    ],
    "specs": []
  },
  {
    "id": "128516",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для води Cross 1л GUSTO, зелена",
    "price": 183.0,
    "desc": "Артикул: GT-G-911044. Код 1С: 128516.",
    "images": [
      "assets/images/products/128516.jpg"
    ],
    "specs": []
  },
  {
    "id": "88434",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Перерва на каву (біла) GUSTO, 350мл",
    "price": 607.0,
    "desc": "Артикул: GT123. Код 1С: 88434.",
    "images": [
      "assets/images/products/88434.jpg"
    ],
    "specs": []
  },
  {
    "id": "88437",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Перерва на каву (коричнева) GUSTO, 350мл",
    "price": 607.0,
    "desc": "Артикул: GT124. Код 1С: 88437.",
    "images": [
      "assets/images/products/88437.jpg"
    ],
    "specs": []
  },
  {
    "id": "135663",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Волошкове поле GUSTO, 350мл",
    "price": 698.0,
    "desc": "Артикул: GT135. Код 1С: 135663.",
    "images": [
      "assets/images/products/135663.jpg"
    ],
    "specs": []
  },
  {
    "id": "156245",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Ванільне небо (пудрова) GUSTO, 320 мл",
    "price": 525.0,
    "desc": "Артикул: GT146. Код 1С: 156245.",
    "images": [
      "assets/images/products/156245.jpg"
    ],
    "specs": []
  },
  {
    "id": "156244",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Ванільне небо (молочна) GUSTO, 320 мл",
    "price": 525.0,
    "desc": "Артикул: GT145. Код 1С: 156244.",
    "images": [
      "assets/images/products/156244.jpg"
    ],
    "specs": []
  },
  {
    "id": "135661",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Диско (рожева) GUSTO, 380мл",
    "price": 646.0,
    "desc": "Артикул: GT133. Код 1С: 135661.",
    "images": [
      "assets/images/products/135661.jpg"
    ],
    "specs": []
  },
  {
    "id": "135660",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Диско (синя) GUSTO, 380мл",
    "price": 646.0,
    "desc": "Артикул: GT132. Код 1С: 135660.",
    "images": [
      "assets/images/products/135660.jpg"
    ],
    "specs": []
  },
  {
    "id": "156249",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Перерва на каву (пудрова) GUSTO, 350мл",
    "price": 453.0,
    "desc": "Артикул: GT151. Код 1С: 156249.",
    "images": [
      "assets/images/products/156249.jpg"
    ],
    "specs": []
  },
  {
    "id": "135662",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Місячне сяйво GUSTO, 400мл",
    "price": 659.0,
    "desc": "Артикул: GT134. Код 1С: 135662.",
    "images": [
      "assets/images/products/135662.jpg"
    ],
    "specs": []
  },
  {
    "id": "156246",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Мрійлива (зелена) GUSTO, 350 мл",
    "price": 536.0,
    "desc": "Артикул: GT147. Код 1С: 156246.",
    "images": [
      "assets/images/products/156246.jpg"
    ],
    "specs": []
  },
  {
    "id": "156251",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Перерва на каву (олива) GUSTO, 350мл",
    "price": 453.0,
    "desc": "Артикул: GT150. Код 1С: 156251.",
    "images": [
      "assets/images/products/156251.jpg"
    ],
    "specs": []
  },
  {
    "id": "156243",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Пульс GUSTO, 500",
    "price": 536.0,
    "desc": "Артикул: GT144-500. Код 1С: 156243.",
    "images": [
      "assets/images/products/156243.jpg"
    ],
    "specs": []
  },
  {
    "id": "88665",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Гаряча насолода (бузкова) GUSTO, 480мл",
    "price": 946.0,
    "desc": "Артикул: GT701. Код 1С: 88665.",
    "images": [
      "assets/images/products/88665.jpg"
    ],
    "specs": []
  },
  {
    "id": "88668",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Гранатовий браслет (червона) GUSTO, 500мл",
    "price": 826.0,
    "desc": "Артикул: GT502. Код 1С: 88668.",
    "images": [
      "assets/images/products/88668.jpg"
    ],
    "specs": []
  },
  {
    "id": "88429",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Блакить GUSTO, 500мл",
    "price": 807.0,
    "desc": "Артикул: GT111. Код 1С: 88429.",
    "images": [
      "assets/images/products/88429.jpg"
    ],
    "specs": []
  },
  {
    "id": "156247",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Мрійлива (фіолетова) GUSTO, 350 мл",
    "price": 536.0,
    "desc": "Артикул: GT148. Код 1С: 156247.",
    "images": [
      "assets/images/products/156247.jpg"
    ],
    "specs": []
  },
  {
    "id": "156242",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Пульс GUSTO, 350",
    "price": 513.0,
    "desc": "Артикул: GT144-350. Код 1С: 156242.",
    "images": [
      "assets/images/products/156242.jpg"
    ],
    "specs": []
  },
  {
    "id": "135665",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Сонячний промінь GUSTO, 560мл",
    "price": 739.0,
    "desc": "Артикул: GT121. Код 1С: 135665.",
    "images": [
      "assets/images/products/135665.jpg"
    ],
    "specs": []
  },
  {
    "id": "135666",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Травневе небо GUSTO, 560мл",
    "price": 739.0,
    "desc": "Артикул: GT122. Код 1С: 135666.",
    "images": [
      "assets/images/products/135666.jpg"
    ],
    "specs": []
  },
  {
    "id": "88433",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Пляшка для пиття з нержавіючої сталі Солодка ягідка GUSTO, 400мл",
    "price": 474.0,
    "desc": "Артикул: GT114. Код 1С: 88433.",
    "images": [
      "assets/images/products/88433.jpg"
    ],
    "specs": []
  },
  {
    "id": "88435",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термо-пляшка Чемпіон GUSTO, 500мл",
    "price": 768.0,
    "desc": "Артикул: GT901. Код 1С: 88435.",
    "images": [
      "assets/images/products/88435.jpg"
    ],
    "specs": []
  },
  {
    "id": "88438",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Оновлення GUSTO, 600мл",
    "price": 659.0,
    "desc": "Артикул: GT125. Код 1С: 88438.",
    "images": [
      "assets/images/products/88438.jpg"
    ],
    "specs": []
  },
  {
    "id": "146920",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Дружній візит GUSTO, 1100мл",
    "price": 790.0,
    "desc": "Артикул: GT141. Код 1С: 146920.",
    "images": [],
    "specs": []
  },
  {
    "id": "135664",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Індиго GUSTO, 600мл",
    "price": 698.0,
    "desc": "Артикул: GT136. Код 1С: 135664.",
    "images": [
      "assets/images/products/135664.jpg"
    ],
    "specs": []
  },
  {
    "id": "126800",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Пробудження GUSTO, 600мл",
    "price": 659.0,
    "desc": "Артикул: GT126. Код 1С: 126800.",
    "images": [
      "assets/images/products/126800.jpg"
    ],
    "specs": []
  },
  {
    "id": "146919",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термокружка Променад GUSTO, 850мл",
    "price": 753.0,
    "desc": "Артикул: GT140. Код 1С: 146919.",
    "images": [],
    "specs": []
  },
  {
    "id": "135653",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Кульбабка GUSTO, 280мл",
    "price": 804.0,
    "desc": "Артикул: GT127. Код 1С: 135653.",
    "images": [
      "assets/images/products/135653.jpg"
    ],
    "specs": []
  },
  {
    "id": "135656",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Мелодія ранку (молочний) GUSTO, 450 мл",
    "price": 607.0,
    "desc": "Артикул: GT130-1. Код 1С: 135656.",
    "images": [
      "assets/images/products/135656.jpg"
    ],
    "specs": []
  },
  {
    "id": "135657",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Мелодія ранку (зелений) GUSTO, 450 мл",
    "price": 607.0,
    "desc": "Артикул: GT130-2. Код 1С: 135657.",
    "images": [
      "assets/images/products/135657.jpg"
    ],
    "specs": []
  },
  {
    "id": "135658",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Мелодія ранку (рожевий) GUSTO, 450 мл",
    "price": 607.0,
    "desc": "Артикул: GT130-3. Код 1С: 135658.",
    "images": [
      "assets/images/products/135658.jpg"
    ],
    "specs": []
  },
  {
    "id": "135654",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Марципан GUSTO, 500мл",
    "price": 672.0,
    "desc": "Артикул: GT128. Код 1С: 135654.",
    "images": [
      "assets/images/products/135654.jpg"
    ],
    "specs": []
  },
  {
    "id": "135655",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Полин GUSTO, 500мл",
    "price": 698.0,
    "desc": "Артикул: GT129. Код 1С: 135655.",
    "images": [
      "assets/images/products/135655.jpg"
    ],
    "specs": []
  },
  {
    "id": "156253",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Оазис GUSTO, 500 мл",
    "price": 624.0,
    "desc": "Артикул: GT141-500. Код 1С: 156253.",
    "images": [
      "assets/images/products/156253.jpg"
    ],
    "specs": []
  },
  {
    "id": "135659",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Шалений ритм GUSTO, 750мл",
    "price": 911.0,
    "desc": "Артикул: GT131. Код 1С: 135659.",
    "images": [
      "assets/images/products/135659.jpg"
    ],
    "specs": []
  },
  {
    "id": "135650",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос-глечик Міраж GUSTO, 1500 мл",
    "price": 1134.0,
    "desc": "Артикул: GTP001. Код 1С: 135650.",
    "images": [
      "assets/images/products/135650.jpg"
    ],
    "specs": []
  },
  {
    "id": "156258",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Модерн (сірий) GUSTO,450 мл",
    "price": 639.0,
    "desc": "Артикул: GT144-450. Код 1С: 156258.",
    "images": [
      "assets/images/products/156258.jpg"
    ],
    "specs": []
  },
  {
    "id": "146927",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Екстрім GUSTO, 600 мл",
    "price": 649.0,
    "desc": "Артикул: GT139-600. Код 1С: 146927.",
    "images": [
      "assets/images/products/146927.jpg"
    ],
    "specs": []
  },
  {
    "id": "156257",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Модерн (коричневий) GUSTO,450 мл",
    "price": 639.0,
    "desc": "Артикул: GT143-450. Код 1С: 156257.",
    "images": [
      "assets/images/products/156257.jpg"
    ],
    "specs": []
  },
  {
    "id": "135651",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос-глечик Погожий день (молочний) GUSTO, 1000 мл",
    "price": 791.0,
    "desc": "Артикул: GTP002-1. Код 1С: 135651.",
    "images": [
      "assets/images/products/135651.jpg"
    ],
    "specs": []
  },
  {
    "id": "146926",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Екстрім GUSTO, 900 мл",
    "price": 716.0,
    "desc": "Артикул: GT139-900. Код 1С: 146926.",
    "images": [
      "assets/images/products/146926.jpg"
    ],
    "specs": []
  },
  {
    "id": "135652",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос-глечик Погожий день (рожевий) GUSTO, 1000 мл",
    "price": 791.0,
    "desc": "Артикул: GTP002-2. Код 1С: 135652.",
    "images": [
      "assets/images/products/135652.jpg"
    ],
    "specs": []
  },
  {
    "id": "156259",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Модерн GUSTO (сіро-синій),450 мл",
    "price": 639.0,
    "desc": "Артикул: GT145-450. Код 1С: 156259.",
    "images": [
      "assets/images/products/156259.jpg"
    ],
    "specs": []
  },
  {
    "id": "156255",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Нічний шарм GUSTO,750 мл",
    "price": 822.0,
    "desc": "Артикул: GT142-750. Код 1С: 156255.",
    "images": [
      "assets/images/products/156255.jpg"
    ],
    "specs": []
  },
  {
    "id": "146923",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Навколо світу GUSTO, 500 мл",
    "price": 455.0,
    "desc": "Артикул: GT137-500. Код 1С: 146923.",
    "images": [
      "assets/images/products/146923.jpg"
    ],
    "specs": []
  },
  {
    "id": "126797",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Чорний бурштин GUSTO, 1000 мл",
    "price": 782.0,
    "desc": "Артикул: GT1000-P. Код 1С: 126797.",
    "images": [
      "assets/images/products/126797.jpg"
    ],
    "specs": []
  },
  {
    "id": "126796",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Чорний бурштин GUSTO, 600 мл",
    "price": 644.0,
    "desc": "Артикул: GT600-P. Код 1С: 126796.",
    "images": [
      "assets/images/products/126796.jpg"
    ],
    "specs": []
  },
  {
    "id": "156252",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Карамель GUSTO, 500 мл",
    "price": 590.0,
    "desc": "Артикул: GT140-500. Код 1С: 156252.",
    "images": [
      "assets/images/products/156252.jpg"
    ],
    "specs": []
  },
  {
    "id": "156256",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Нічний шарм GUSTO,1000 мл",
    "price": 886.0,
    "desc": "Артикул: GT142-1000. Код 1С: 156256.",
    "images": [
      "assets/images/products/156256.jpg"
    ],
    "specs": []
  },
  {
    "id": "156260",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Молочна карамель GUSTO,600 мл",
    "price": 670.0,
    "desc": "Артикул: GT146-600. Код 1С: 156260.",
    "images": [
      "assets/images/products/156260.jpg"
    ],
    "specs": []
  },
  {
    "id": "146928",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Навколо світу GUSTO, 1000 мл",
    "price": 660.0,
    "desc": "Артикул: GT137-1000. Код 1С: 146928.",
    "images": [
      "assets/images/products/146928.jpg"
    ],
    "specs": []
  },
  {
    "id": "146924",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Лавіна GUSTO, 1650 мл",
    "price": 716.0,
    "desc": "Артикул: GT138-1650. Код 1С: 146924.",
    "images": [
      "assets/images/products/146924.jpg"
    ],
    "specs": []
  },
  {
    "id": "126794",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос для їжі Смачний обід GUSTO, 1000 мл",
    "price": 1099.0,
    "desc": "Артикул: GT010-1. Код 1С: 126794.",
    "images": [
      "assets/images/products/126794.jpg"
    ],
    "specs": []
  },
  {
    "id": "146925",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос Лавіна GUSTO, 950 мл",
    "price": 611.0,
    "desc": "Артикул: GT138-950. Код 1С: 146925.",
    "images": [
      "assets/images/products/146925.jpg"
    ],
    "specs": []
  },
  {
    "id": "126795",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос для їжі Смачний обід GUSTO, 500 мл",
    "price": 915.0,
    "desc": "Артикул: GT005-1. Код 1С: 126795.",
    "images": [
      "assets/images/products/126795.jpg"
    ],
    "specs": []
  },
  {
    "id": "135649",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос для їжі Сапфір GUSTO, 750 мл",
    "price": 1127.0,
    "desc": "Артикул: GT750-2. Код 1С: 135649.",
    "images": [
      "assets/images/products/135649.jpg"
    ],
    "specs": []
  },
  {
    "id": "135648",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Термос для їжі Сапфір GUSTO, 500 мл",
    "price": 946.0,
    "desc": "Артикул: GT005-2. Код 1С: 135648.",
    "images": [
      "assets/images/products/135648.jpg"
    ],
    "specs": []
  },
  {
    "id": "114491",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Chromium Набір столових ложок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-S041-3. Код 1С: 114491.",
    "images": [
      "assets/images/products/114491.jpg"
    ],
    "specs": []
  },
  {
    "id": "114494",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Chromium Набір чайних ложок 3 шт, GUSTO",
    "price": 127.0,
    "desc": "Артикул: GT-S044-3. Код 1С: 114494.",
    "images": [
      "assets/images/products/114494.jpg"
    ],
    "specs": []
  },
  {
    "id": "114493",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Chromium Набір столових ножів 2 шт,GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-K043-2. Код 1С: 114493.",
    "images": [
      "assets/images/products/114493.jpg"
    ],
    "specs": []
  },
  {
    "id": "114492",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Chromium Набір столових виделок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-F042-3. Код 1С: 114492.",
    "images": [
      "assets/images/products/114492.jpg"
    ],
    "specs": []
  },
  {
    "id": "114488",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Mercury Набір столових виделок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-F032-3. Код 1С: 114488.",
    "images": [
      "assets/images/products/114488.jpg"
    ],
    "specs": []
  },
  {
    "id": "114489",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Mercury Набір столових ножів 2 шт, GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-K033-2. Код 1С: 114489.",
    "images": [
      "assets/images/products/114489.jpg"
    ],
    "specs": []
  },
  {
    "id": "114487",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Mercury Набір столових ложок 3 шт,GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-S031-3. Код 1С: 114487.",
    "images": [
      "assets/images/products/114487.jpg"
    ],
    "specs": []
  },
  {
    "id": "114490",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Mercury Набір чайних ложок 3 шт,GUSTO",
    "price": 127.0,
    "desc": "Артикул: GT-S034-3. Код 1С: 114490.",
    "images": [
      "assets/images/products/114490.jpg"
    ],
    "specs": []
  },
  {
    "id": "114496",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Platinum Набір столових виделок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-F052-3. Код 1С: 114496.",
    "images": [
      "assets/images/products/114496.jpg"
    ],
    "specs": []
  },
  {
    "id": "114479",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Modicum Набір столових ложок 3 шт, GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-S011-3. Код 1С: 114479.",
    "images": [
      "assets/images/products/114479.jpg"
    ],
    "specs": []
  },
  {
    "id": "114480",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Modicum Набір столових виделок 3 шт, GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-F012-3. Код 1С: 114480.",
    "images": [
      "assets/images/products/114480.jpg"
    ],
    "specs": []
  },
  {
    "id": "114495",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Platinum Набір столових ложок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-S051-3. Код 1С: 114495.",
    "images": [
      "assets/images/products/114495.jpg"
    ],
    "specs": []
  },
  {
    "id": "114497",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Platinum Набір столових ножів 2 шт, GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-K053-2. Код 1С: 114497.",
    "images": [
      "assets/images/products/114497.jpg"
    ],
    "specs": []
  },
  {
    "id": "114498",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Platinum Набір чайних ложок 3 шт, GUSTO",
    "price": 127.0,
    "desc": "Артикул: GT-S054-3. Код 1С: 114498.",
    "images": [
      "assets/images/products/114498.jpg"
    ],
    "specs": []
  },
  {
    "id": "114481",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Modicum Набір столових ножів 2 шт, GUSTO",
    "price": 152.0,
    "desc": "Артикул: GT-K013-2. Код 1С: 114481.",
    "images": [
      "assets/images/products/114481.jpg"
    ],
    "specs": []
  },
  {
    "id": "114482",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Modicum Набір чайних ложок 3 шт, GUSTO",
    "price": 123.0,
    "desc": "Артикул: GT-S014-3. Код 1С: 114482.",
    "images": [
      "assets/images/products/114482.jpg"
    ],
    "specs": []
  },
  {
    "id": "114484",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Silver Набір столових виделок 3 шт,GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-F022-3. Код 1С: 114484.",
    "images": [
      "assets/images/products/114484.jpg"
    ],
    "specs": []
  },
  {
    "id": "114483",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Silver Набір столових ложок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-S021-3. Код 1С: 114483.",
    "images": [
      "assets/images/products/114483.jpg"
    ],
    "specs": []
  },
  {
    "id": "133608",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Neptunium Набір столових приборів 24 шт, GT-SFKS01-24, GUSTO",
    "price": 1896.0,
    "desc": "Артикул: GT-SFKS01-24. Код 1С: 133608.",
    "images": [
      "assets/images/products/133608.jpg"
    ],
    "specs": []
  },
  {
    "id": "133609",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Plutonium Набір столових приборів 24 шт, GT-SFKS02-24, GUSTO",
    "price": 1896.0,
    "desc": "Артикул: GT-SFKS02-24. Код 1С: 133609.",
    "images": [
      "assets/images/products/133609.jpg"
    ],
    "specs": []
  },
  {
    "id": "114486",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Silver Набір чайних ложок 3 шт, GUSTO",
    "price": 127.0,
    "desc": "Артикул: GT-S024-3. Код 1С: 114486.",
    "images": [
      "assets/images/products/114486.jpg"
    ],
    "specs": []
  },
  {
    "id": "114502",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Titanium Набір чайних ложок 3 шт,GUSTO",
    "price": 127.0,
    "desc": "Артикул: GT-S064-3. Код 1С: 114502.",
    "images": [
      "assets/images/products/114502.jpg"
    ],
    "specs": []
  },
  {
    "id": "114485",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Silver Набір столових ножів 2 шт,GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-K023-2. Код 1С: 114485.",
    "images": [
      "assets/images/products/114485.jpg"
    ],
    "specs": []
  },
  {
    "id": "110912",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' 55x30x21.5 см GUSTO",
    "price": 330.0,
    "desc": "Артикул: GT-7100. Код 1С: 110912.",
    "images": [
      "assets/images/products/110912.jpg"
    ],
    "specs": []
  },
  {
    "id": "110913",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' для риби 61x28x28 см GUSTO",
    "price": 387.0,
    "desc": "Артикул: GT-7101. Код 1С: 110913.",
    "images": [
      "assets/images/products/110913.jpg"
    ],
    "specs": []
  },
  {
    "id": "114499",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Titanium Набір столових ложок 3 шт, GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-S061-3. Код 1С: 114499.",
    "images": [
      "assets/images/products/114499.jpg"
    ],
    "specs": []
  },
  {
    "id": "114500",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Titanium Набір столових виделок 3 шт,GUSTO",
    "price": 161.0,
    "desc": "Артикул: GT-F062-3. Код 1С: 114500.",
    "images": [
      "assets/images/products/114500.jpg"
    ],
    "specs": []
  },
  {
    "id": "114501",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Titanium Набір столових ножів 2 шт, GUSTO",
    "price": 156.0,
    "desc": "Артикул: GT-K063-2. Код 1С: 114501.",
    "images": [
      "assets/images/products/114501.jpg"
    ],
    "specs": []
  },
  {
    "id": "110915",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' 65x35x25 см GUSTO",
    "price": 526.0,
    "desc": "Артикул: GT-7103. Код 1С: 110915.",
    "images": [
      "assets/images/products/110915.jpg"
    ],
    "specs": []
  },
  {
    "id": "110914",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' 65x41x30 см GUSTO",
    "price": 526.0,
    "desc": "Артикул: GT-7102. Код 1С: 110914.",
    "images": [
      "assets/images/products/110914.jpg"
    ],
    "specs": []
  },
  {
    "id": "110916",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' 66x43,5x26 см GUSTO",
    "price": 579.0,
    "desc": "Артикул: GT-7104. Код 1С: 110916.",
    "images": [
      "assets/images/products/110916.jpg"
    ],
    "specs": []
  },
  {
    "id": "110917",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' з бортом 66x31x24x5,5 см GUSTO",
    "price": 607.0,
    "desc": "Артикул: GT-7105. Код 1С: 110917.",
    "images": [
      "assets/images/products/110917.jpg"
    ],
    "specs": []
  },
  {
    "id": "110918",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' з бортом 66x41x31x5,5 см GUSTO",
    "price": 692.0,
    "desc": "Артикул: GT-7106. Код 1С: 110918.",
    "images": [
      "assets/images/products/110918.jpg"
    ],
    "specs": []
  },
  {
    "id": "110922",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шампура 'Time2Grill' 45см (набір 6 шт) нерж.сталь GUSTO",
    "price": 627.0,
    "desc": "Артикул: GT-7112. Код 1С: 110922.",
    "images": [
      "assets/images/products/110922.jpg"
    ],
    "specs": []
  },
  {
    "id": "110920",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шампура 'Time2Grill' 45 см GUSTO",
    "price": 67.0,
    "desc": "Артикул: GT-7110. Код 1С: 110920.",
    "images": [
      "assets/images/products/110920.jpg"
    ],
    "specs": []
  },
  {
    "id": "110921",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шампура 'Time2Grill' 60 см GUSTO",
    "price": 77.0,
    "desc": "Артикул: GT-7111. Код 1С: 110921.",
    "images": [
      "assets/images/products/110921.jpg"
    ],
    "specs": []
  },
  {
    "id": "124832",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду для активного дозвілля (4 пр) нерж.сталь GUSTO",
    "price": 1320.0,
    "desc": "Артикул: GT-7121 . Код 1С: 124832.",
    "images": [
      "assets/images/products/124832.jpg"
    ],
    "specs": []
  },
  {
    "id": "124833",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір посуду для активного дозвілля (8 пр) нерж.сталь GUSTO",
    "price": 1628.0,
    "desc": "Артикул: GT-7122 . Код 1С: 124833.",
    "images": [
      "assets/images/products/124833.jpg"
    ],
    "specs": []
  },
  {
    "id": "110923",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шампура 'Time2Grill' 60 см (набір 6 шт) нерж.сталь GUSTO",
    "price": 741.0,
    "desc": "Артикул: GT-7113. Код 1С: 110923.",
    "images": [
      "assets/images/products/110923.jpg"
    ],
    "specs": []
  },
  {
    "id": "110924",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Аксесуари для барбекю 'Time2Grill' (набір 4 пр) нерж.сталь GUSTO",
    "price": 1085.0,
    "desc": "Артикул: GT-7120. Код 1С: 110924.",
    "images": [
      "assets/images/products/110924.jpg"
    ],
    "specs": []
  },
  {
    "id": "125074",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Міні-дуршляк з ручкою складний 0,6л GUSTO",
    "price": 132.0,
    "desc": "Артикул: GT-572. Код 1С: 125074.",
    "images": [
      "assets/images/products/125074.jpg"
    ],
    "specs": []
  },
  {
    "id": "125066",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дуршляк-миска складний з ручками 2л  GUSTO",
    "price": 174.0,
    "desc": "Артикул: GT-571. Код 1С: 125066.",
    "images": [
      "assets/images/products/125066.jpg"
    ],
    "specs": []
  },
  {
    "id": "125064",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршляк для рису складний 3л GUSTO",
    "price": 206.0,
    "desc": "Артикул: GT-757. Код 1С: 125064.",
    "images": [
      "assets/images/products/125064.jpg"
    ],
    "specs": []
  },
  {
    "id": "125068",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дуршляк складний з ручкою 1,5л GUSTO",
    "price": 178.0,
    "desc": "Артикул: GT-858. Код 1С: 125068.",
    "images": [
      "assets/images/products/125068.jpg"
    ],
    "specs": []
  },
  {
    "id": "125070",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дуршляк-миска складний 3л GUSTO",
    "price": 174.0,
    "desc": "Артикул: GT-570. Код 1С: 125070.",
    "images": [
      "assets/images/products/125070.jpg"
    ],
    "specs": []
  },
  {
    "id": "121436",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска-сито 4л GUSTO",
    "price": 267.0,
    "desc": "Артикул: GT-G-150. Код 1С: 121436.",
    "images": [
      "assets/images/products/121436.jpg"
    ],
    "specs": []
  },
  {
    "id": "121422",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Друшлак рожевий 2л.GUSTO",
    "price": 91.0,
    "desc": "Артикул: GT-G-179. Код 1С: 121422.",
    "images": [
      "assets/images/products/121422.jpg"
    ],
    "specs": []
  },
  {
    "id": "121430",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір 3шт. ємностей для змішування (1,5, 2,00, 2,5л) GUSTO",
    "price": 306.0,
    "desc": "Артикул: GT-G-480. Код 1С: 121430.",
    "images": [
      "assets/images/products/121430.jpg"
    ],
    "specs": []
  },
  {
    "id": "152377",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' з бортом GUSTO 66x31.5x24.5 см",
    "price": 448.0,
    "desc": "Артикул: GT-7107. Код 1С: 152377.",
    "images": [
      "assets/images/products/152377.jpg"
    ],
    "specs": []
  },
  {
    "id": "152378",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Решітка-гриль 'Time2Grill' з бортом GUSTO 66.5x43x31.5 см",
    "price": 541.0,
    "desc": "Артикул: GT-7108. Код 1С: 152378.",
    "images": [
      "assets/images/products/152378.jpg"
    ],
    "specs": []
  },
  {
    "id": "128764",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Лійка-воронка GUSTO, 115мм Україна",
    "price": 26.0,
    "desc": "Артикул: G-2003 . Код 1С: 128764.",
    "images": [
      "assets/images/products/128764.jpg"
    ],
    "specs": []
  },
  {
    "id": "128765",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска Господарочка GUSTO, 1.6л Україна",
    "price": 36.0,
    "desc": "Артикул: G-1055. Код 1С: 128765.",
    "images": [
      "assets/images/products/128765.jpg"
    ],
    "specs": []
  },
  {
    "id": "128766",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска Господарочка GUSTO, 2.8л Україна",
    "price": 52.0,
    "desc": "Артикул: G-1056 . Код 1С: 128766.",
    "images": [
      "assets/images/products/128766.jpg"
    ],
    "specs": []
  },
  {
    "id": "128767",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска прозора GUSTO, 1.6л Україна",
    "price": 61.0,
    "desc": "Артикул: G-1033 . Код 1С: 128767.",
    "images": [
      "assets/images/products/128767.jpg"
    ],
    "specs": []
  },
  {
    "id": "128768",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска прозора GUSTO, 2.8л Україна",
    "price": 96.0,
    "desc": "Артикул: G-1045. Код 1С: 128768.",
    "images": [
      "assets/images/products/128768.jpg"
    ],
    "specs": []
  },
  {
    "id": "128769",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска прозора GUSTO, 5л Україна",
    "price": 110.0,
    "desc": "Артикул: G-1049 . Код 1С: 128769.",
    "images": [
      "assets/images/products/128769.jpg"
    ],
    "specs": []
  },
  {
    "id": "121432",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Чаша для змішування 2,25л GUSTO",
    "price": 96.0,
    "desc": "Артикул: GT-G-22. Код 1С: 121432.",
    "images": [
      "assets/images/products/121432.jpg"
    ],
    "specs": []
  },
  {
    "id": "164172",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Лійка із жолобком  GUSTО Україна",
    "price": 26.0,
    "desc": "Артикул: G-2004 . Код 1С: 164172.",
    "images": [
      "assets/images/products/164172.jpg"
    ],
    "specs": []
  },
  {
    "id": "121434",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Чаша для змішування 4,5 л GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-G-23. Код 1С: 121434.",
    "images": [
      "assets/images/products/121434.jpg"
    ],
    "specs": []
  },
  {
    "id": "121444",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник малий  1,3л GUSTO",
    "price": 69.0,
    "desc": "Артикул: GT-G-283. Код 1С: 121444.",
    "images": [
      "assets/images/products/121444.jpg"
    ],
    "specs": []
  },
  {
    "id": "149286",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність для льоду GUSTO",
    "price": 115.0,
    "desc": "Артикул: GT-4260. Код 1С: 149286.",
    "images": [],
    "specs": []
  },
  {
    "id": "121446",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник середній 3л GUSTO",
    "price": 128.0,
    "desc": "Артикул: GT-G-270. Код 1С: 121446.",
    "images": [
      "assets/images/products/121446.jpg"
    ],
    "specs": []
  },
  {
    "id": "149285",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Ємність для льоду з кришкою GUSTO",
    "price": 129.0,
    "desc": "Артикул: GT-4259. Код 1С: 149285.",
    "images": [
      "assets/images/products/149285.jpg"
    ],
    "specs": []
  },
  {
    "id": "123226",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка для мікрохвильової печі (D-27см) GUSTO",
    "price": 123.0,
    "desc": "Артикул: GT-G-470. Код 1С: 123226.",
    "images": [
      "assets/images/products/123226.jpg"
    ],
    "specs": []
  },
  {
    "id": "149283",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Кришка для мікрохвильової печі 26х10см GUSTO",
    "price": 138.0,
    "desc": "Артикул: GT-4261. Код 1С: 149283.",
    "images": [
      "assets/images/products/149283.jpg"
    ],
    "specs": []
  },
  {
    "id": "130522",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска Ягідка з кришкою GUSTO, 2л Україна",
    "price": 88.0,
    "desc": "Артикул: G-1064. Код 1С: 130522.",
    "images": [
      "assets/images/products/130522.jpg"
    ],
    "specs": []
  },
  {
    "id": "128771",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір для пікніка Люкс GUSTO Україна",
    "price": 502.0,
    "desc": "Артикул: G-2068 . Код 1С: 128771.",
    "images": [
      "assets/images/products/128771.jpg"
    ],
    "specs": []
  },
  {
    "id": "123230",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Подвійний мірний стакан (1,20л, 0,13л) GUSTO",
    "price": 126.0,
    "desc": "Артикул: GT-G-12. Код 1С: 123230.",
    "images": [
      "assets/images/products/123230.jpg"
    ],
    "specs": []
  },
  {
    "id": "121438",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Соковитискач ручний для цитрусових GUSTO",
    "price": 117.0,
    "desc": "Артикул: GT-G-64. Код 1С: 121438.",
    "images": [
      "assets/images/products/121438.jpg"
    ],
    "specs": []
  },
  {
    "id": "130524",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска Ягідка з кришкою GUSTO, 6л Україна",
    "price": 182.0,
    "desc": "Артикул: G-1061. Код 1С: 130524.",
    "images": [
      "assets/images/products/130524.jpg"
    ],
    "specs": []
  },
  {
    "id": "123220",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Склянка Aura 350мл  GUSTO",
    "price": 73.0,
    "desc": "Артикул: GT-G-600. Код 1С: 123220.",
    "images": [
      "assets/images/products/123220.jpg"
    ],
    "specs": []
  },
  {
    "id": "130523",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Миска Ягідка з кришкою GUSTO, 3л Україна",
    "price": 118.0,
    "desc": "Артикул: G-1060. Код 1С: 130523.",
    "images": [
      "assets/images/products/130523.jpg"
    ],
    "specs": []
  },
  {
    "id": "123216",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Тарілка овальна Aura (170х270х50мм) GUSTO",
    "price": 159.0,
    "desc": "Артикул: GT-G-606. Код 1С: 123216.",
    "images": [
      "assets/images/products/123216.jpg"
    ],
    "specs": []
  },
  {
    "id": "123214",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник малий Aura 0,33л GUSTO",
    "price": 66.0,
    "desc": "Артикул: GT-G-601. Код 1С: 123214.",
    "images": [
      "assets/images/products/123214.jpg"
    ],
    "specs": []
  },
  {
    "id": "123218",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Кружка Aura 350мл  GUSTO",
    "price": 86.0,
    "desc": "Артикул: GT-G-607. Код 1С: 123218.",
    "images": [
      "assets/images/products/123218.jpg"
    ],
    "specs": []
  },
  {
    "id": "121424",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер продуктовий  1,2л GUSTO",
    "price": 137.0,
    "desc": "Артикул: GT-G-286. Код 1С: 121424.",
    "images": [
      "assets/images/products/121424.jpg"
    ],
    "specs": []
  },
  {
    "id": "121440",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Салатник Aura -3,5л GUSTO",
    "price": 197.0,
    "desc": "Артикул: GT-G-603. Код 1С: 121440.",
    "images": [
      "assets/images/products/121440.jpg"
    ],
    "specs": []
  },
  {
    "id": "121426",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер продуктовий 1,8л GUSTO",
    "price": 162.0,
    "desc": "Артикул: GT-G-287. Код 1С: 121426.",
    "images": [
      "assets/images/products/121426.jpg"
    ],
    "specs": []
  },
  {
    "id": "123194",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий герметичний  Смарагд 0,60л GUSTO",
    "price": 132.0,
    "desc": "Артикул: GT-G-587. Код 1С: 123194.",
    "images": [
      "assets/images/products/123194.jpg"
    ],
    "specs": []
  },
  {
    "id": "123190",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Потрійний контейнер для зберігання (3х0,75л) GUSTO",
    "price": 193.0,
    "desc": "Артикул: GT-G-285. Код 1С: 123190.",
    "images": [
      "assets/images/products/123190.jpg"
    ],
    "specs": []
  },
  {
    "id": "123192",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий герметичний Смарагд 0,35л GUSTO",
    "price": 113.0,
    "desc": "Артикул: GT-G-582. Код 1С: 123192.",
    "images": [
      "assets/images/products/123192.jpg"
    ],
    "specs": []
  },
  {
    "id": "123196",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий герметичний Смарагд 0,90л GUSTO",
    "price": 145.0,
    "desc": "Артикул: GT-G-588. Код 1С: 123196.",
    "images": [
      "assets/images/products/123196.jpg"
    ],
    "specs": []
  },
  {
    "id": "123200",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий герметичний Смарагд 1,7л  GUSTO",
    "price": 164.0,
    "desc": "Артикул: GT-G-584. Код 1С: 123200.",
    "images": [
      "assets/images/products/123200.jpg"
    ],
    "specs": []
  },
  {
    "id": "123198",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий герметичний Смарагд 1,0л  GUSTO",
    "price": 145.0,
    "desc": "Артикул: GT-G-583. Код 1С: 123198.",
    "images": [
      "assets/images/products/123198.jpg"
    ],
    "specs": []
  },
  {
    "id": "123204",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 0,60л  GUSTO",
    "price": 85.0,
    "desc": "Артикул: GT-G-487. Код 1С: 123204.",
    "images": [
      "assets/images/products/123204.jpg"
    ],
    "specs": []
  },
  {
    "id": "123202",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 0,35л  GUSTO",
    "price": 66.0,
    "desc": "Артикул: GT-G-482. Код 1С: 123202.",
    "images": [
      "assets/images/products/123202.jpg"
    ],
    "specs": []
  },
  {
    "id": "123208",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 1,0л  GUSTO",
    "price": 113.0,
    "desc": "Артикул: GT-G-483. Код 1С: 123208.",
    "images": [
      "assets/images/products/123208.jpg"
    ],
    "specs": []
  },
  {
    "id": "123210",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 2,0л  GUSTO",
    "price": 225.0,
    "desc": "Артикул: GT-G-489. Код 1С: 123210.",
    "images": [
      "assets/images/products/123210.jpg"
    ],
    "specs": []
  },
  {
    "id": "123206",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 0,90л  GUSTO",
    "price": 94.0,
    "desc": "Артикул: GT-G-488. Код 1С: 123206.",
    "images": [
      "assets/images/products/123206.jpg"
    ],
    "specs": []
  },
  {
    "id": "123212",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Судок харчовий Янтар 2,2л GT-G-485 GUSTO",
    "price": 143.0,
    "desc": "Артикул: GT-G-485. Код 1С: 123212.",
    "images": [
      "assets/images/products/123212.jpg"
    ],
    "specs": []
  },
  {
    "id": "137798",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Слон 2 пр. (тарілка фігурна+чашка) GUSTO Україна",
    "price": 118.0,
    "desc": "Артикул: GT-604. Код 1С: 137798.",
    "images": [
      "assets/images/products/137798.jpg"
    ],
    "specs": []
  },
  {
    "id": "137796",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Дитячий набір Сонечко 3 пр. (тарілка+салатник+стакан) GUSTO Україна",
    "price": 117.0,
    "desc": "Артикул: GT-603 . Код 1С: 137796.",
    "images": [
      "assets/images/products/137796.jpg"
    ],
    "specs": []
  },
  {
    "id": "123188",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ланчбокс Радість (140х180х75 мм) GUSTO",
    "price": 145.0,
    "desc": "Артикул: GT-G-499. Код 1С: 123188.",
    "images": [
      "assets/images/products/123188.jpg"
    ],
    "specs": []
  },
  {
    "id": "121418",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка гнучка  кухарська (246*346*2,6 мм) GUSTO",
    "price": 155.0,
    "desc": "Артикул: GT-G-508. Код 1С: 121418.",
    "images": [
      "assets/images/products/121418.jpg"
    ],
    "specs": []
  },
  {
    "id": "123222",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з кришкою Втіха 400мл  GUSTO",
    "price": 66.0,
    "desc": "Артикул: GT-G-670. Код 1С: 123222.",
    "images": [
      "assets/images/products/123222.jpg"
    ],
    "specs": []
  },
  {
    "id": "123184",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка Грушка GUSTO",
    "price": 232.0,
    "desc": "Артикул: GT-G-458. Код 1С: 123184.",
    "images": [
      "assets/images/products/123184.jpg"
    ],
    "specs": []
  },
  {
    "id": "121420",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка зелене яблуко (280*305*8мм) GUSTO",
    "price": 232.0,
    "desc": "Артикул: GT-G-457G. Код 1С: 121420.",
    "images": [
      "assets/images/products/121420.jpg"
    ],
    "specs": []
  },
  {
    "id": "121414",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка антиковзаюча (190*365*7 мм)  GUSTO",
    "price": 237.0,
    "desc": "Артикул: GT-G-565. Код 1С: 121414.",
    "images": [
      "assets/images/products/121414.jpg"
    ],
    "specs": []
  },
  {
    "id": "121416",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка антиковзаюча (205*290*8 мм)  GUSTO",
    "price": 259.0,
    "desc": "Артикул: GT-G-566. Код 1С: 121416.",
    "images": [
      "assets/images/products/121416.jpg"
    ],
    "specs": []
  },
  {
    "id": "123224",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Чашка з трубочкою Моє дитинство 400мл GUSTO",
    "price": 42.0,
    "desc": "Артикул: GT-G-258. Код 1С: 123224.",
    "images": [
      "assets/images/products/123224.jpg"
    ],
    "specs": []
  },
  {
    "id": "121412",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дощечка  Полуниця( 270*315*8мм) GUSTO",
    "price": 259.0,
    "desc": "Артикул: GT-G-540. Код 1С: 121412.",
    "images": [
      "assets/images/products/121412.jpg"
    ],
    "specs": []
  },
  {
    "id": "128773",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Набір глечик мірний + кружки 4шт, 0.2л. GUSTO Україна",
    "price": 126.0,
    "desc": "Артикул: G-2072 . Код 1С: 128773.",
    "images": [
      "assets/images/products/128773.jpg"
    ],
    "specs": []
  },
  {
    "id": "149282",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір дощечок 4 шт GUSTO",
    "price": 643.0,
    "desc": "Артикул: GT-4204. Код 1С: 149282.",
    "images": [
      "assets/images/products/149282.jpg"
    ],
    "specs": []
  },
  {
    "id": "148152",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Нефрит (зелена) 24.5см, VITTORA",
    "price": 383.0,
    "desc": "Артикул: \nVT-V-0002. Код 1С: 148152.",
    "images": [
      "assets/images/products/148152.jpg"
    ],
    "specs": []
  },
  {
    "id": "148158",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Діамант (прозора) 29.5см, VITTORA",
    "price": 418.0,
    "desc": "Артикул: \nVT-V-0008. Код 1С: 148158.",
    "images": [
      "assets/images/products/148158.jpg"
    ],
    "specs": []
  },
  {
    "id": "137792",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ланчбокс Сова з ложкою і виделкою 1л (145х170х60 мм) GUSTO Україна",
    "price": 87.0,
    "desc": "Артикул: GT-601. Код 1С: 137792.",
    "images": [
      "assets/images/products/137792.jpg"
    ],
    "specs": []
  },
  {
    "id": "148151",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Онікс (коричнева) 24.5см, VITTORA",
    "price": 383.0,
    "desc": "Артикул: VT-V-0001. Код 1С: 148151.",
    "images": [
      "assets/images/products/148151.jpg"
    ],
    "specs": []
  },
  {
    "id": "128770",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Стакан з трубочкою GUSTO, 0.3л Україна",
    "price": 29.0,
    "desc": "Артикул: G-2037 . Код 1С: 128770.",
    "images": [
      "assets/images/products/128770.jpg"
    ],
    "specs": []
  },
  {
    "id": "148159",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Місячний камінь (молочна) 29.5см, VITTORA",
    "price": 500.0,
    "desc": "Артикул: \nVT-V-0009. Код 1С: 148159.",
    "images": [
      "assets/images/products/148159.jpg"
    ],
    "specs": []
  },
  {
    "id": "151109",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця прямокутна Home 35.8х25х4см, VITTORA",
    "price": 300.0,
    "desc": "Артикул: VT-T-0001. Код 1С: 151109.",
    "images": [],
    "specs": []
  },
  {
    "id": "148157",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Турмалін 19.5см, VITTORA",
    "price": 499.0,
    "desc": "Артикул: \nVT-V-0007. Код 1С: 148157.",
    "images": [
      "assets/images/products/148157.jpg"
    ],
    "specs": []
  },
  {
    "id": "151110",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": false,
    "name": "Таця прямокутна Home 44х30х4см, VITTORA",
    "price": 319.0,
    "desc": "Артикул: VT-T-0002. Код 1С: 151110.",
    "images": [],
    "specs": []
  },
  {
    "id": "148155",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Аметист (бензинова) 27.5см, VITTORA",
    "price": 556.0,
    "desc": "Артикул: \nVT-V-0005. Код 1С: 148155.",
    "images": [
      "assets/images/products/148155.jpg"
    ],
    "specs": []
  },
  {
    "id": "151111",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця прямокутна Home 40х29х5см, VITTORA",
    "price": 319.0,
    "desc": "Артикул: VT-T-0003. Код 1С: 151111.",
    "images": [],
    "specs": []
  },
  {
    "id": "137793",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ланчбокс Дитячий 0,4л (143х145х30 мм) GUSTO Україна",
    "price": 59.0,
    "desc": "Артикул: GT-602. Код 1С: 137793.",
    "images": [
      "assets/images/products/137793.jpg"
    ],
    "specs": []
  },
  {
    "id": "148153",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Сапфір (синя) 20.5см, VITTORA",
    "price": 625.0,
    "desc": "Артикул: \nVT-V-0003. Код 1С: 148153.",
    "images": [
      "assets/images/products/148153.jpg"
    ],
    "specs": []
  },
  {
    "id": "148156",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Магічний Агат (димчата) 27.5см, VITTORA",
    "price": 556.0,
    "desc": "Артикул: \nVT-V-0006. Код 1С: 148156.",
    "images": [
      "assets/images/products/148156.jpg"
    ],
    "specs": []
  },
  {
    "id": "148160",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Гірський кришталь 30см, VITTORA",
    "price": 276.0,
    "desc": "Артикул: \nVT-V-0010. Код 1С: 148160.",
    "images": [
      "assets/images/products/148160.jpg"
    ],
    "specs": []
  },
  {
    "id": "136320",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Геометрія 45х30см, мокко Versailles",
    "price": 78.0,
    "desc": "Артикул: VS-PM3045-2. Код 1С: 136320.",
    "images": [
      "assets/images/products/136320.jpg"
    ],
    "specs": []
  },
  {
    "id": "148154",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ваза скляна Смарагд (зелена) 20.5см, VITTORA",
    "price": 625.0,
    "desc": "Артикул: \nVT-V-0004. Код 1С: 148154.",
    "images": [
      "assets/images/products/148154.jpg"
    ],
    "specs": []
  },
  {
    "id": "151120",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця прямокутна Provence 35х25х5см, VITTORA",
    "price": 433.0,
    "desc": "Артикул: VT-T-0012. Код 1С: 151120.",
    "images": [
      "assets/images/products/151120.jpg"
    ],
    "specs": []
  },
  {
    "id": "136322",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Домашній 45х30см, бежевий Versailles",
    "price": 78.0,
    "desc": "Артикул: VS-PM3045-4. Код 1С: 136322.",
    "images": [
      "assets/images/products/136322.jpg"
    ],
    "specs": []
  },
  {
    "id": "151121",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця прямокутна з ручками Provence 30х20х5см, VITTORA",
    "price": 360.0,
    "desc": "Артикул: VT-T-0013. Код 1С: 151121.",
    "images": [
      "assets/images/products/151121.jpg"
    ],
    "specs": []
  },
  {
    "id": "151122",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця прямокутна з ручками Provence 35х25х5см, VITTORA",
    "price": 399.0,
    "desc": "Артикул: VT-T0014. Код 1С: 151122.",
    "images": [
      "assets/images/products/151122.jpg"
    ],
    "specs": []
  },
  {
    "id": "151119",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця кругла Provence 35х5см, VITTORA",
    "price": 334.0,
    "desc": "Артикул: VT-T-0011. Код 1С: 151119.",
    "images": [
      "assets/images/products/151119.jpg"
    ],
    "specs": []
  },
  {
    "id": "136326",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Атмосфера 45х30см, бежевий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-8. Код 1С: 136326.",
    "images": [
      "assets/images/products/136326.jpg"
    ],
    "specs": []
  },
  {
    "id": "136325",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Затишний 45х30см, капучіно Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-7. Код 1С: 136325.",
    "images": [
      "assets/images/products/136325.jpg"
    ],
    "specs": []
  },
  {
    "id": "151118",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Таця кругла Provence 25х5см, VITTORA",
    "price": 260.0,
    "desc": "Артикул: VT-T-0010. Код 1С: 151118.",
    "images": [
      "assets/images/products/151118.jpg"
    ],
    "specs": []
  },
  {
    "id": "136331",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Сімейний 45х30см, шоколад Versailles",
    "price": 81.0,
    "desc": "Артикул: VS-PM3045-13. Код 1С: 136331.",
    "images": [
      "assets/images/products/136331.jpg"
    ],
    "specs": []
  },
  {
    "id": "136329",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Затишний 45х30см, світло-сірий Versailles",
    "price": 81.0,
    "desc": "Артикул: VS-PM3045-11. Код 1С: 136329.",
    "images": [
      "assets/images/products/136329.jpg"
    ],
    "specs": []
  },
  {
    "id": "136319",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Геометрія 45х30см, чорний Versailles",
    "price": 78.0,
    "desc": "Артикул: VS-PM3045-1. Код 1С: 136319.",
    "images": [
      "assets/images/products/136319.jpg"
    ],
    "specs": []
  },
  {
    "id": "136334",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Весняний колорит 45х30см, бузковий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-16. Код 1С: 136334.",
    "images": [
      "assets/images/products/136334.jpg"
    ],
    "specs": []
  },
  {
    "id": "136318",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування  45х30см,  Versailles",
    "price": 65.0,
    "desc": "Артикул: VS-PM3045-M. Код 1С: 136318.",
    "images": [
      "assets/images/products/136318.jpg"
    ],
    "specs": []
  },
  {
    "id": "136336",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Весняний колорит 45х30см, салатовий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-18. Код 1С: 136336.",
    "images": [
      "assets/images/products/136336.jpg"
    ],
    "specs": []
  },
  {
    "id": "136324",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Затишний 45х30см, гірчичний Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-6. Код 1С: 136324.",
    "images": [
      "assets/images/products/136324.jpg"
    ],
    "specs": []
  },
  {
    "id": "136327",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Атмосфера 45х30см, сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-9. Код 1С: 136327.",
    "images": [
      "assets/images/products/136327.jpg"
    ],
    "specs": []
  },
  {
    "id": "136337",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Весняний колорит 45х30см, темно-сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-19. Код 1С: 136337.",
    "images": [
      "assets/images/products/136337.jpg"
    ],
    "specs": []
  },
  {
    "id": "136335",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Весняний колорит 45х30см, червоний Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-17. Код 1С: 136335.",
    "images": [
      "assets/images/products/136335.jpg"
    ],
    "specs": []
  },
  {
    "id": "136338",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Мелодія Сходу 45х30см, сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-20. Код 1С: 136338.",
    "images": [
      "assets/images/products/136338.jpg"
    ],
    "specs": []
  },
  {
    "id": "136332",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Смарт 45х30см, сірий Versailles",
    "price": 81.0,
    "desc": "Артикул: VS-PM3045-14. Код 1С: 136332.",
    "images": [
      "assets/images/products/136332.jpg"
    ],
    "specs": []
  },
  {
    "id": "136342",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Симфонія 45х30см, бежевий Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-24. Код 1С: 136342.",
    "images": [
      "assets/images/products/136342.jpg"
    ],
    "specs": []
  },
  {
    "id": "136321",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Геометрія 45х30см, оливковий Versailles",
    "price": 78.0,
    "desc": "Артикул: VS-PM3045-3. Код 1С: 136321.",
    "images": [
      "assets/images/products/136321.jpg"
    ],
    "specs": []
  },
  {
    "id": "136323",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Затишний 45х30см, сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-5. Код 1С: 136323.",
    "images": [
      "assets/images/products/136323.jpg"
    ],
    "specs": []
  },
  {
    "id": "136339",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Мелодія Сходу 45х30см, червоний Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-21. Код 1С: 136339.",
    "images": [
      "assets/images/products/136339.jpg"
    ],
    "specs": []
  },
  {
    "id": "136333",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Зустріч 45х30см, сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-15. Код 1С: 136333.",
    "images": [
      "assets/images/products/136333.jpg"
    ],
    "specs": []
  },
  {
    "id": "136345",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Симфонія 45х30см, шоколад Versailles",
    "price": 92.0,
    "desc": "Артикул: VS-PM3045-27. Код 1С: 136345.",
    "images": [
      "assets/images/products/136345.jpg"
    ],
    "specs": []
  },
  {
    "id": "136328",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Затишний 45х30см, шоколад Versailles",
    "price": 81.0,
    "desc": "Артикул: VS-PM3045-10. Код 1С: 136328.",
    "images": [
      "assets/images/products/136328.jpg"
    ],
    "specs": []
  },
  {
    "id": "136349",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Енігма 45х30см, сірий Versailles",
    "price": 112.0,
    "desc": "Артикул: VS-PM3045-31. Код 1С: 136349.",
    "images": [
      "assets/images/products/136349.jpg"
    ],
    "specs": []
  },
  {
    "id": "136341",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Мелодія Сходу 45х30см, темно-сірий Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-23. Код 1С: 136341.",
    "images": [
      "assets/images/products/136341.jpg"
    ],
    "specs": []
  },
  {
    "id": "136344",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Симфонія 45х30см, темно-сірий Versailles",
    "price": 92.0,
    "desc": "Артикул: VS-PM3045-26. Код 1С: 136344.",
    "images": [
      "assets/images/products/136344.jpg"
    ],
    "specs": []
  },
  {
    "id": "136340",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Мелодія Сходу 45х30см, зелений Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-22. Код 1С: 136340.",
    "images": [
      "assets/images/products/136340.jpg"
    ],
    "specs": []
  },
  {
    "id": "136330",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Сімейний 45х30см, сірий Versailles",
    "price": 81.0,
    "desc": "Артикул: VS-PM3045-12. Код 1С: 136330.",
    "images": [
      "assets/images/products/136330.jpg"
    ],
    "specs": []
  },
  {
    "id": "136343",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Симфонія 45х30см, сірий Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-25. Код 1С: 136343.",
    "images": [
      "assets/images/products/136343.jpg"
    ],
    "specs": []
  },
  {
    "id": "136356",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Пальмова гілка 45х30см, сірий Versailles",
    "price": 154.0,
    "desc": "Артикул: VS-PM3045-38. Код 1С: 136356.",
    "images": [
      "assets/images/products/136356.jpg"
    ],
    "specs": []
  },
  {
    "id": "136357",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Смачний обід 45х30см, сірий Versailles",
    "price": 118.0,
    "desc": "Артикул: VS-PM3045-39. Код 1С: 136357.",
    "images": [
      "assets/images/products/136357.jpg"
    ],
    "specs": []
  },
  {
    "id": "136350",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Лоза 45х30см, бежевий Versailles",
    "price": 112.0,
    "desc": "Артикул: VS-PM3045-32. Код 1С: 136350.",
    "images": [
      "assets/images/products/136350.jpg"
    ],
    "specs": []
  },
  {
    "id": "136352",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Кульбабки 45х30см, блакитний Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-34. Код 1С: 136352.",
    "images": [
      "assets/images/products/136352.jpg"
    ],
    "specs": []
  },
  {
    "id": "136359",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Персона 45х30см, сірий Versailles",
    "price": 109.0,
    "desc": "Артикул: VS-PM3045-41. Код 1С: 136359.",
    "images": [
      "assets/images/products/136359.jpg"
    ],
    "specs": []
  },
  {
    "id": "136351",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Кульбабки 45х30см, сірий Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-33. Код 1С: 136351.",
    "images": [
      "assets/images/products/136351.jpg"
    ],
    "specs": []
  },
  {
    "id": "136360",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Персона 45х30см, мокко Versailles",
    "price": 109.0,
    "desc": "Артикул: VS-PM3045-42. Код 1С: 136360.",
    "images": [
      "assets/images/products/136360.jpg"
    ],
    "specs": []
  },
  {
    "id": "136363",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Віхола 38см,  Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-45. Код 1С: 136363.",
    "images": [
      "assets/images/products/136363.jpg"
    ],
    "specs": []
  },
  {
    "id": "136348",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Ретро 45х30см, сірий Versailles",
    "price": 112.0,
    "desc": "Артикул: VS-PM3045-30. Код 1С: 136348.",
    "images": [
      "assets/images/products/136348.jpg"
    ],
    "specs": []
  },
  {
    "id": "136364",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Жозефіна 38см,  Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-46. Код 1С: 136364.",
    "images": [
      "assets/images/products/136364.jpg"
    ],
    "specs": []
  },
  {
    "id": "136365",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Силует 38см,  Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-47. Код 1С: 136365.",
    "images": [
      "assets/images/products/136365.jpg"
    ],
    "specs": []
  },
  {
    "id": "141230",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір килимків для сервірування 4шт Домашній 45х30см, Versailles",
    "price": 499.0,
    "desc": "Артикул: VS-PM3045-49. Код 1С: 141230.",
    "images": [
      "assets/images/products/141230.jpg"
    ],
    "specs": []
  },
  {
    "id": "141229",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір килимків для сервірування 4шт Затишний 45х30см, Versailles",
    "price": 514.0,
    "desc": "Артикул: VS-PM3045-50. Код 1С: 141229.",
    "images": [
      "assets/images/products/141229.jpg"
    ],
    "specs": []
  },
  {
    "id": "141231",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір килимків для сервірування 4шт Мереживо 45х30см, Versailles",
    "price": 528.0,
    "desc": "Артикул: VS-PM3045-51. Код 1С: 141231.",
    "images": [
      "assets/images/products/141231.jpg"
    ],
    "specs": []
  },
  {
    "id": "156827",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування екошкіра, молочний 45х30см, Versailles",
    "price": 114.0,
    "desc": "Артикул: VS-PM3045-52. Код 1С: 156827.",
    "images": [],
    "specs": []
  },
  {
    "id": "156829",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування екошкіра, темний 45х30см, Versailles",
    "price": 114.0,
    "desc": "Артикул: VS-PM3045-54. Код 1С: 156829.",
    "images": [],
    "specs": []
  },
  {
    "id": "156828",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування екошкіра, коричневий 45х30см, Versailles",
    "price": 114.0,
    "desc": "Артикул: VS-PM3045-53. Код 1С: 156828.",
    "images": [],
    "specs": []
  },
  {
    "id": "156831",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні (соти) 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PU3045-1. Код 1С: 156831.",
    "images": [],
    "specs": []
  },
  {
    "id": "136354",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Кульбабки 45х30см, мокко Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-36. Код 1С: 136354.",
    "images": [
      "assets/images/products/136354.jpg"
    ],
    "specs": []
  },
  {
    "id": "156833",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні (орнамент) 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PU3045-3. Код 1С: 156833.",
    "images": [],
    "specs": []
  },
  {
    "id": "156834",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні (лимони) 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PU3045-4. Код 1С: 156834.",
    "images": [],
    "specs": []
  },
  {
    "id": "156835",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні (бежевий) 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PU3045-5. Код 1С: 156835.",
    "images": [],
    "specs": []
  },
  {
    "id": "156830",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Антиковзаючий килимок Сяйво Карпат, 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PM3045-55. Код 1С: 156830.",
    "images": [],
    "specs": []
  },
  {
    "id": "156836",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні (фантазія) 30х45 см, Versailles",
    "price": 103.0,
    "desc": "Артикул: VS-PU3045-6. Код 1С: 156836.",
    "images": [],
    "specs": []
  },
  {
    "id": "156832",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Вологопоглинаючий килимок для кухні ( смарагд) 30х45 см, Versailles",
    "price": 111.0,
    "desc": "Артикул: VS-PU3045-2. Код 1С: 156832.",
    "images": [],
    "specs": []
  },
  {
    "id": "136353",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Кульбабки 45х30см, помаранчевий Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-35. Код 1С: 136353.",
    "images": [
      "assets/images/products/136353.jpg"
    ],
    "specs": []
  },
  {
    "id": "153679",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Місячні обійми, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-107. Код 1С: 153679.",
    "images": [],
    "specs": []
  },
  {
    "id": "153681",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Ніжний ритм, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-110. Код 1С: 153681.",
    "images": [],
    "specs": []
  },
  {
    "id": "153702",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітовий ритм, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-113. Код 1С: 153702.",
    "images": [],
    "specs": []
  },
  {
    "id": "153686",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Глибока блакить, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-114. Код 1С: 153686.",
    "images": [],
    "specs": []
  },
  {
    "id": "153682",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Букет на сірому, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-111. Код 1С: 153682.",
    "images": [],
    "specs": []
  },
  {
    "id": "153689",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Тиха симетрія, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-116. Код 1С: 153689.",
    "images": [],
    "specs": []
  },
  {
    "id": "153701",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Смарагдовий стиль, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-118. Код 1С: 153701.",
    "images": [],
    "specs": []
  },
  {
    "id": "136361",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Мереживо 45х30см, срібний Versailles",
    "price": 85.0,
    "desc": "Артикул: VS-PM3045-43. Код 1С: 136361.",
    "images": [
      "assets/images/products/136361.jpg"
    ],
    "specs": []
  },
  {
    "id": "136355",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Золотий візерунок 45х30см, чорний Versailles",
    "price": 154.0,
    "desc": "Артикул: VS-PM3045-37. Код 1С: 136355.",
    "images": [
      "assets/images/products/136355.jpg"
    ],
    "specs": []
  },
  {
    "id": "153690",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Відтінки синього, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-117. Код 1С: 153690.",
    "images": [
      "assets/images/products/153690.jpg"
    ],
    "specs": []
  },
  {
    "id": "153683",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зоряний баланс, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-120. Код 1С: 153683.",
    "images": [],
    "specs": []
  },
  {
    "id": "153684",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни М’яка Ніжність, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-121. Код 1С: 153684.",
    "images": [],
    "specs": []
  },
  {
    "id": "153685",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика затишку, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-119. Код 1С: 153685.",
    "images": [
      "assets/images/products/153685.jpg"
    ],
    "specs": []
  },
  {
    "id": "136358",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування круглий 38см, шоколад Versailles",
    "price": 101.0,
    "desc": "Артикул: VS-PM3045-40. Код 1С: 136358.",
    "images": [],
    "specs": []
  },
  {
    "id": "153688",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Туманні квіти, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-123. Код 1С: 153688.",
    "images": [],
    "specs": []
  },
  {
    "id": "153703",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Ніжні контури, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-124. Код 1С: 153703.",
    "images": [],
    "specs": []
  },
  {
    "id": "153687",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Листя сну, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-122. Код 1С: 153687.",
    "images": [
      "assets/images/products/153687.jpg"
    ],
    "specs": []
  },
  {
    "id": "136362",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Ніжність 38см,  Versailles",
    "price": 89.0,
    "desc": "Артикул: VS-PM3045-44. Код 1С: 136362.",
    "images": [
      "assets/images/products/136362.jpg"
    ],
    "specs": []
  },
  {
    "id": "153704",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітовий ритм, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-113. Код 1С: 153704.",
    "images": [],
    "specs": []
  },
  {
    "id": "153705",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Глибока блакить, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-114. Код 1С: 153705.",
    "images": [
      "assets/images/products/153705.jpg"
    ],
    "specs": []
  },
  {
    "id": "147084",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синя геометрія, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-105. Код 1С: 147084.",
    "images": [
      "assets/images/products/147084.jpg"
    ],
    "specs": []
  },
  {
    "id": "146115",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Бежева клітинка, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-101. Код 1С: 146115.",
    "images": [
      "assets/images/products/146115.jpg"
    ],
    "specs": []
  },
  {
    "id": "147083",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена геометрія, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-104. Код 1С: 147083.",
    "images": [
      "assets/images/products/147083.jpg"
    ],
    "specs": []
  },
  {
    "id": "147085",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіра полоска, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-106. Код 1С: 147085.",
    "images": [
      "assets/images/products/147085.jpg"
    ],
    "specs": []
  },
  {
    "id": "147082",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Біла квітка, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-103. Код 1С: 147082.",
    "images": [
      "assets/images/products/147082.jpg"
    ],
    "specs": []
  },
  {
    "id": "147081",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сердечне тепло, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-102. Код 1С: 147081.",
    "images": [
      "assets/images/products/147081.jpg"
    ],
    "specs": []
  },
  {
    "id": "153706",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика затишку, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-119. Код 1С: 153706.",
    "images": [
      "assets/images/products/153706.jpg"
    ],
    "specs": []
  },
  {
    "id": "136347",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Плетіння 45х30см, сірий Versailles",
    "price": 112.0,
    "desc": "Артикул: VS-PM3045-29. Код 1С: 136347.",
    "images": [
      "assets/images/products/136347.jpg"
    ],
    "specs": []
  },
  {
    "id": "136346",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Рання пташка 45х30см, сірий Versailles",
    "price": 92.0,
    "desc": "Артикул: VS-PM3045-28. Код 1С: 136346.",
    "images": [
      "assets/images/products/136346.jpg"
    ],
    "specs": []
  },
  {
    "id": "147088",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Рожева ніжність, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-104. Код 1С: 147088.",
    "images": [
      "assets/images/products/147088.jpg"
    ],
    "specs": []
  },
  {
    "id": "147087",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Пісочна квітка, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-103. Код 1С: 147087.",
    "images": [
      "assets/images/products/147087.jpg"
    ],
    "specs": []
  },
  {
    "id": "147090",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіра полоска, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-106. Код 1С: 147090.",
    "images": [
      "assets/images/products/147090.jpg"
    ],
    "specs": []
  },
  {
    "id": "147089",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена полоска, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-105. Код 1С: 147089.",
    "images": [
      "assets/images/products/147089.jpg"
    ],
    "specs": []
  },
  {
    "id": "147091",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Місячні обійми, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-107. Код 1С: 147091.",
    "images": [
      "assets/images/products/147091.jpg"
    ],
    "specs": []
  },
  {
    "id": "147092",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Квітка в ночі, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-108. Код 1С: 147092.",
    "images": [
      "assets/images/products/147092.jpg"
    ],
    "specs": []
  },
  {
    "id": "147086",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Африканські мотиви, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-101. Код 1С: 147086.",
    "images": [
      "assets/images/products/147086.jpg"
    ],
    "specs": []
  },
  {
    "id": "153709",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Смарагдовий стиль, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-118. Код 1С: 153709.",
    "images": [],
    "specs": []
  },
  {
    "id": "153707",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Тиха симетрія, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-116. Код 1С: 153707.",
    "images": [],
    "specs": []
  },
  {
    "id": "153710",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика затишку, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-119. Код 1С: 153710.",
    "images": [],
    "specs": []
  },
  {
    "id": "153708",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Відтінки синього, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-117. Код 1С: 153708.",
    "images": [],
    "specs": []
  },
  {
    "id": "146116",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Графітова ніжність, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-102. Код 1С: 146116.",
    "images": [
      "assets/images/products/146116.jpg"
    ],
    "specs": []
  },
  {
    "id": "147094",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Ніжний ритм, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-110. Код 1С: 147094.",
    "images": [
      "assets/images/products/147094.jpg"
    ],
    "specs": []
  },
  {
    "id": "147096",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Пастельні сноведіння, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-112. Код 1С: 147096.",
    "images": [
      "assets/images/products/147096.jpg"
    ],
    "specs": []
  },
  {
    "id": "147093",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Листя на синьому, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-109. Код 1С: 147093.",
    "images": [
      "assets/images/products/147093.jpg"
    ],
    "specs": []
  },
  {
    "id": "147098",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Ніжний ритм, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-103. Код 1С: 147098.",
    "images": [
      "assets/images/products/147098.jpg"
    ],
    "specs": []
  },
  {
    "id": "147097",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітові листя, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-102. Код 1С: 147097.",
    "images": [
      "assets/images/products/147097.jpg"
    ],
    "specs": []
  },
  {
    "id": "147095",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Букет на сірому, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-111. Код 1С: 147095.",
    "images": [
      "assets/images/products/147095.jpg"
    ],
    "specs": []
  },
  {
    "id": "147100",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сірі сни, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-105. Код 1С: 147100.",
    "images": [
      "assets/images/products/147100.jpg"
    ],
    "specs": []
  },
  {
    "id": "147099",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Листопад, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-104. Код 1С: 147099.",
    "images": [
      "assets/images/products/147099.jpg"
    ],
    "specs": []
  },
  {
    "id": "146117",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класичні візерунки, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-101. Код 1С: 146117.",
    "images": [
      "assets/images/products/146117.jpg"
    ],
    "specs": []
  },
  {
    "id": "147101",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіра полоска, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-106. Код 1С: 147101.",
    "images": [
      "assets/images/products/147101.jpg"
    ],
    "specs": []
  },
  {
    "id": "147102",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелено-сіра класика, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-107. Код 1С: 147102.",
    "images": [
      "assets/images/products/147102.jpg"
    ],
    "specs": []
  },
  {
    "id": "147103",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синя гілка, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-108. Код 1С: 147103.",
    "images": [
      "assets/images/products/147103.jpg"
    ],
    "specs": []
  },
  {
    "id": "147104",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни Квіткова ніжність, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-109. Код 1С: 147104.",
    "images": [
      "assets/images/products/147104.jpg"
    ],
    "specs": []
  },
  {
    "id": "136366",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сервірування Імпресія 45х30см,  Versailles",
    "price": 98.0,
    "desc": "Артикул: VS-PM3045-48. Код 1С: 136366.",
    "images": [
      "assets/images/products/136366.jpg"
    ],
    "specs": []
  },
  {
    "id": "147107",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Пісочна геометрія, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-112. Код 1С: 147107.",
    "images": [
      "assets/images/products/147107.jpg"
    ],
    "specs": []
  },
  {
    "id": "147105",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Листя папороті, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-110. Код 1С: 147105.",
    "images": [
      "assets/images/products/147105.jpg"
    ],
    "specs": []
  },
  {
    "id": "146118",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Червоно-чорний, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-201. Код 1С: 146118.",
    "images": [
      "assets/images/products/146118.jpg"
    ],
    "specs": []
  },
  {
    "id": "147108",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Лимонно-сірий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-202. Код 1С: 147108.",
    "images": [
      "assets/images/products/147108.jpg"
    ],
    "specs": []
  },
  {
    "id": "146119",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Червоно-чорний, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-201. Код 1С: 146119.",
    "images": [
      "assets/images/products/146119.jpg"
    ],
    "specs": []
  },
  {
    "id": "147119",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Лимонно-сірий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-202. Код 1С: 147119.",
    "images": [
      "assets/images/products/147119.jpg"
    ],
    "specs": []
  },
  {
    "id": "147129",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Лимонно-сірий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-202. Код 1С: 147129.",
    "images": [
      "assets/images/products/147129.jpg"
    ],
    "specs": []
  },
  {
    "id": "146120",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Червоно-чорний, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-201. Код 1С: 146120.",
    "images": [
      "assets/images/products/146120.jpg"
    ],
    "specs": []
  },
  {
    "id": "147106",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Кремова квітка, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 80г/м2",
    "price": 1121.0,
    "desc": "Артикул: VS-BM2.5-111. Код 1С: 147106.",
    "images": [
      "assets/images/products/147106.jpg"
    ],
    "specs": []
  },
  {
    "id": "147110",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Коричнево-пісочний, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-203. Код 1С: 147110.",
    "images": [
      "assets/images/products/147110.jpg"
    ],
    "specs": []
  },
  {
    "id": "147130",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Коричнево-пісочний, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-203. Код 1С: 147130.",
    "images": [
      "assets/images/products/147130.jpg"
    ],
    "specs": []
  },
  {
    "id": "147120",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Коричнево-пісочний, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-203. Код 1С: 147120.",
    "images": [
      "assets/images/products/147120.jpg"
    ],
    "specs": []
  },
  {
    "id": "147111",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-бежевий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-204. Код 1С: 147111.",
    "images": [
      "assets/images/products/147111.jpg"
    ],
    "specs": []
  },
  {
    "id": "147131",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-бежевий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-204. Код 1С: 147131.",
    "images": [
      "assets/images/products/147131.jpg"
    ],
    "specs": []
  },
  {
    "id": "147112",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелено-сірий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-205. Код 1С: 147112.",
    "images": [
      "assets/images/products/147112.jpg"
    ],
    "specs": []
  },
  {
    "id": "147121",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-бежевий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-204. Код 1С: 147121.",
    "images": [
      "assets/images/products/147121.jpg"
    ],
    "specs": []
  },
  {
    "id": "147122",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелено-сірий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-205. Код 1С: 147122.",
    "images": [
      "assets/images/products/147122.jpg"
    ],
    "specs": []
  },
  {
    "id": "147132",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелено-сірий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-205. Код 1С: 147132.",
    "images": [
      "assets/images/products/147132.jpg"
    ],
    "specs": []
  },
  {
    "id": "147113",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Кремовий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-206. Код 1С: 147113.",
    "images": [
      "assets/images/products/147113.jpg"
    ],
    "specs": []
  },
  {
    "id": "147133",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Кремовий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-206. Код 1С: 147133.",
    "images": [
      "assets/images/products/147133.jpg"
    ],
    "specs": []
  },
  {
    "id": "147123",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Кремовий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-206. Код 1С: 147123.",
    "images": [
      "assets/images/products/147123.jpg"
    ],
    "specs": []
  },
  {
    "id": "147114",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-бежевий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-207. Код 1С: 147114.",
    "images": [
      "assets/images/products/147114.jpg"
    ],
    "specs": []
  },
  {
    "id": "147124",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-бежевий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-207. Код 1С: 147124.",
    "images": [
      "assets/images/products/147124.jpg"
    ],
    "specs": []
  },
  {
    "id": "147134",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-бежевий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-207. Код 1С: 147134.",
    "images": [
      "assets/images/products/147134.jpg"
    ],
    "specs": []
  },
  {
    "id": "147115",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-сірий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-208. Код 1С: 147115.",
    "images": [
      "assets/images/products/147115.jpg"
    ],
    "specs": []
  },
  {
    "id": "147125",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-сірий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-208. Код 1С: 147125.",
    "images": [
      "assets/images/products/147125.jpg"
    ],
    "specs": []
  },
  {
    "id": "147126",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-рожевий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-209. Код 1С: 147126.",
    "images": [
      "assets/images/products/147126.jpg"
    ],
    "specs": []
  },
  {
    "id": "147116",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-рожевий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-209. Код 1С: 147116.",
    "images": [
      "assets/images/products/147116.jpg"
    ],
    "specs": []
  },
  {
    "id": "147135",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Графітово-сірий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-208. Код 1С: 147135.",
    "images": [
      "assets/images/products/147135.jpg"
    ],
    "specs": []
  },
  {
    "id": "147127",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-кремовий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-210. Код 1С: 147127.",
    "images": [
      "assets/images/products/147127.jpg"
    ],
    "specs": []
  },
  {
    "id": "147118",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-сірий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-211. Код 1С: 147118.",
    "images": [
      "assets/images/products/147118.jpg"
    ],
    "specs": []
  },
  {
    "id": "147136",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-рожевий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-209. Код 1С: 147136.",
    "images": [
      "assets/images/products/147136.jpg"
    ],
    "specs": []
  },
  {
    "id": "147138",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-сірий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-211. Код 1С: 147138.",
    "images": [
      "assets/images/products/147138.jpg"
    ],
    "specs": []
  },
  {
    "id": "147137",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-кремовий, євро VERSAILLES, Мікрофібра\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1096.0,
    "desc": "Артикул: VS-BM2.5-210. Код 1С: 147137.",
    "images": [
      "assets/images/products/147137.jpg"
    ],
    "specs": []
  },
  {
    "id": "147128",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-сірий, двоспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 1011.0,
    "desc": "Артикул: VS-BM2.0-211. Код 1С: 147128.",
    "images": [
      "assets/images/products/147128.jpg"
    ],
    "specs": []
  },
  {
    "id": "146121",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Айворі, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1386.0,
    "desc": "Артикул: VS-BM2.0-301. Код 1С: 146121.",
    "images": [
      "assets/images/products/146121.jpg"
    ],
    "specs": []
  },
  {
    "id": "146122",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Айворі, євро VERSAILLES, Мікрофібра\nПідковдра: 200х230см (1 шт.), Простирадло: 230х240см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1519.0,
    "desc": "Артикул: VS-BM2.5-301. Код 1С: 146122.",
    "images": [
      "assets/images/products/146122.jpg"
    ],
    "specs": []
  },
  {
    "id": "147139",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Рожевий, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1386.0,
    "desc": "Артикул: VS-BM2.0-302. Код 1С: 147139.",
    "images": [
      "assets/images/products/147139.jpg"
    ],
    "specs": []
  },
  {
    "id": "147117",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Синьо-кремовий, півтораспальний VERSAILLES, Мікрофібра\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 85г/м2",
    "price": 940.0,
    "desc": "Артикул: VS-BM1.5-210. Код 1С: 147117.",
    "images": [
      "assets/images/products/147117.jpg"
    ],
    "specs": []
  },
  {
    "id": "147144",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Ізумрудний, євро VERSAILLES, Мікрофібра\nПідковдра: 200х230см (1 шт.), Простирадло: 230х240см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1519.0,
    "desc": "Артикул: VS-BM2.5-303. Код 1С: 147144.",
    "images": [
      "assets/images/products/147144.jpg"
    ],
    "specs": []
  },
  {
    "id": "147141",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Сарфіровий, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1386.0,
    "desc": "Артикул: VS-BM2.0-304. Код 1С: 147141.",
    "images": [
      "assets/images/products/147141.jpg"
    ],
    "specs": []
  },
  {
    "id": "147147",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Капучіно, євро VERSAILLES, Мікрофібра\nПідковдра: 200х230см (1 шт.), Простирадло: 230х240см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1519.0,
    "desc": "Артикул: VS-BM2.5-305. Код 1С: 147147.",
    "images": [
      "assets/images/products/147147.jpg"
    ],
    "specs": []
  },
  {
    "id": "147142",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Капучіно, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1386.0,
    "desc": "Артикул: VS-BM2.0-305. Код 1С: 147142.",
    "images": [
      "assets/images/products/147142.jpg"
    ],
    "specs": []
  },
  {
    "id": "147140",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Ізумрудний, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1386.0,
    "desc": "Артикул: VS-BM2.0-303. Код 1С: 147140.",
    "images": [
      "assets/images/products/147140.jpg"
    ],
    "specs": []
  },
  {
    "id": "147145",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Сарфіровий, євро VERSAILLES, Мікрофібра\nПідковдра: 200х230см (1 шт.), Простирадло: 230х240см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1519.0,
    "desc": "Артикул: VS-BM2.5-304. Код 1С: 147145.",
    "images": [
      "assets/images/products/147145.jpg"
    ],
    "specs": []
  },
  {
    "id": "152184",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Сон під хмарами, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-402. Код 1С: 152184.",
    "images": [
      "assets/images/products/152184.jpg"
    ],
    "specs": []
  },
  {
    "id": "147143",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Страйп Рожевий, євро VERSAILLES, Мікрофібра\nПідковдра: 200х230см (1 шт.), Простирадло: 230х240см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1519.0,
    "desc": "Артикул: VS-BM2.5-302. Код 1С: 147143.",
    "images": [
      "assets/images/products/147143.jpg"
    ],
    "specs": []
  },
  {
    "id": "152183",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни 3D Ранкова ніжність, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-401. Код 1С: 152183.",
    "images": [
      "assets/images/products/152183.jpg"
    ],
    "specs": []
  },
  {
    "id": "152186",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Сон під хмарами, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-402. Код 1С: 152186.",
    "images": [
      "assets/images/products/152186.jpg"
    ],
    "specs": []
  },
  {
    "id": "152185",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Комплект постільної білизни 3D Ранкова ніжність, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-401. Код 1С: 152185.",
    "images": [
      "assets/images/products/152185.jpg"
    ],
    "specs": []
  },
  {
    "id": "152190",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Срібний ранок, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-403. Код 1С: 152190.",
    "images": [
      "assets/images/products/152190.jpg"
    ],
    "specs": []
  },
  {
    "id": "152188",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Срібний ранок, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-403. Код 1С: 152188.",
    "images": [
      "assets/images/products/152188.jpg"
    ],
    "specs": []
  },
  {
    "id": "152191",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Тіні затишку, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-405. Код 1С: 152191.",
    "images": [
      "assets/images/products/152191.jpg"
    ],
    "specs": []
  },
  {
    "id": "152187",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Пісочний сон, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-404. Код 1С: 152187.",
    "images": [
      "assets/images/products/152187.jpg"
    ],
    "specs": []
  },
  {
    "id": "152195",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Обійми тепла, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1463.0,
    "desc": "Артикул: VS-BM1.5-407. Код 1С: 152195.",
    "images": [
      "assets/images/products/152195.jpg"
    ],
    "specs": []
  },
  {
    "id": "152194",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Тіні спокою, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-406. Код 1С: 152194.",
    "images": [
      "assets/images/products/152194.jpg"
    ],
    "specs": []
  },
  {
    "id": "152192",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Тіні спокою, півтораспальний VERSAILLES, Мікрофібра\nПідковдра: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1512.0,
    "desc": "Артикул: VS-BM1.5-406. Код 1С: 152192.",
    "images": [
      "assets/images/products/152192.jpg"
    ],
    "specs": []
  },
  {
    "id": "152196",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Обійми тепла, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1487.0,
    "desc": "Артикул: VS-BM2.0-407. Код 1С: 152196.",
    "images": [
      "assets/images/products/152196.jpg"
    ],
    "specs": []
  },
  {
    "id": "152189",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Пісочний сон, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-404. Код 1С: 152189.",
    "images": [
      "assets/images/products/152189.jpg"
    ],
    "specs": []
  },
  {
    "id": "146159",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Орнамент, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-101. Код 1С: 146159.",
    "images": [
      "assets/images/products/146159.jpg"
    ],
    "specs": []
  },
  {
    "id": "146156",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Орнамент, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-101. Код 1С: 146156.",
    "images": [
      "assets/images/products/146156.jpg"
    ],
    "specs": []
  },
  {
    "id": "152193",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни 3D Тіні затишку, двоспальний VERSAILLES, Мікрофібра\nПідковдра: 180х220см (1 шт.), Простирадло: 200х230см (1 шт.), Наволочка: 50х70 см (2 шт.)\nТканина: 100% поліестер, 105г/м2",
    "price": 1632.0,
    "desc": "Артикул: VS-BM2.0-405. Код 1С: 152193.",
    "images": [
      "assets/images/products/152193.jpg"
    ],
    "specs": []
  },
  {
    "id": "147048",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Горох, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-102. Код 1С: 147048.",
    "images": [
      "assets/images/products/147048.jpg"
    ],
    "specs": []
  },
  {
    "id": "153897",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Орнамент, сімейний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-101 . Код 1С: 153897.",
    "images": [
      "assets/images/products/153897.jpg"
    ],
    "specs": []
  },
  {
    "id": "147051",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Метелик, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-103. Код 1С: 147051.",
    "images": [
      "assets/images/products/147051.jpg"
    ],
    "specs": []
  },
  {
    "id": "147052",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Метелик, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-103. Код 1С: 147052.",
    "images": [
      "assets/images/products/147052.jpg"
    ],
    "specs": []
  },
  {
    "id": "146158",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Орнамент, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-101. Код 1С: 146158.",
    "images": [
      "assets/images/products/146158.jpg"
    ],
    "specs": []
  },
  {
    "id": "147049",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Горох, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-102. Код 1С: 147049.",
    "images": [
      "assets/images/products/147049.jpg"
    ],
    "specs": []
  },
  {
    "id": "147050",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Горох, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-102. Код 1С: 147050.",
    "images": [
      "assets/images/products/147050.jpg"
    ],
    "specs": []
  },
  {
    "id": "151984",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Метелик, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-103 . Код 1С: 151984.",
    "images": [
      "assets/images/products/151984.jpg"
    ],
    "specs": []
  },
  {
    "id": "147053",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Метелик, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-103. Код 1С: 147053.",
    "images": [
      "assets/images/products/147053.jpg"
    ],
    "specs": []
  },
  {
    "id": "147054",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Різнотрав'я, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-104. Код 1С: 147054.",
    "images": [
      "assets/images/products/147054.jpg"
    ],
    "specs": []
  },
  {
    "id": "147056",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Різнотрав'я, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-104. Код 1С: 147056.",
    "images": [
      "assets/images/products/147056.jpg"
    ],
    "specs": []
  },
  {
    "id": "147055",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Різнотрав'я, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-104. Код 1С: 147055.",
    "images": [
      "assets/images/products/147055.jpg"
    ],
    "specs": []
  },
  {
    "id": "147057",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Фантазія, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-105. Код 1С: 147057.",
    "images": [
      "assets/images/products/147057.jpg"
    ],
    "specs": []
  },
  {
    "id": "147059",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Фантазія, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-105. Код 1С: 147059.",
    "images": [
      "assets/images/products/147059.jpg"
    ],
    "specs": []
  },
  {
    "id": "147058",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Фантазія, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-105. Код 1С: 147058.",
    "images": [
      "assets/images/products/147058.jpg"
    ],
    "specs": []
  },
  {
    "id": "147061",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Трикутники, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-106. Код 1С: 147061.",
    "images": [
      "assets/images/products/147061.jpg"
    ],
    "specs": []
  },
  {
    "id": "147062",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Трикутники, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-106. Код 1С: 147062.",
    "images": [
      "assets/images/products/147062.jpg"
    ],
    "specs": []
  },
  {
    "id": "153917",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Нічна Лава, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-108. Код 1С: 153917.",
    "images": [
      "assets/images/products/153917.jpg"
    ],
    "specs": []
  },
  {
    "id": "153918",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Нічна Лава, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-108 . Код 1С: 153918.",
    "images": [
      "assets/images/products/153918.jpg"
    ],
    "specs": []
  },
  {
    "id": "147063",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-107. Код 1С: 147063.",
    "images": [
      "assets/images/products/147063.jpg"
    ],
    "specs": []
  },
  {
    "id": "153919",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Нічна Лава, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-108 . Код 1С: 153919.",
    "images": [
      "assets/images/products/153919.jpg"
    ],
    "specs": []
  },
  {
    "id": "153920",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Нічна Лава, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-108 . Код 1С: 153920.",
    "images": [
      "assets/images/products/153920.jpg"
    ],
    "specs": []
  },
  {
    "id": "147064",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-107. Код 1С: 147064.",
    "images": [
      "assets/images/products/147064.jpg"
    ],
    "specs": []
  },
  {
    "id": "147060",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Трикутники, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-106. Код 1С: 147060.",
    "images": [
      "assets/images/products/147060.jpg"
    ],
    "specs": []
  },
  {
    "id": "147065",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Класика, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-107. Код 1С: 147065.",
    "images": [
      "assets/images/products/147065.jpg"
    ],
    "specs": []
  },
  {
    "id": "153922",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Шелест Блакиті, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-109 . Код 1С: 153922.",
    "images": [
      "assets/images/products/153922.jpg"
    ],
    "specs": []
  },
  {
    "id": "153921",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Шелест Блакиті, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-109. Код 1С: 153921.",
    "images": [
      "assets/images/products/153921.jpg"
    ],
    "specs": []
  },
  {
    "id": "153923",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Шелест Блакиті, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-109. Код 1С: 153923.",
    "images": [
      "assets/images/products/153923.jpg"
    ],
    "specs": []
  },
  {
    "id": "153924",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Шелест Блакиті, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-109 . Код 1С: 153924.",
    "images": [
      "assets/images/products/153924.jpg"
    ],
    "specs": []
  },
  {
    "id": "153927",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена Казка, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-110. Код 1С: 153927.",
    "images": [
      "assets/images/products/153927.jpg"
    ],
    "specs": []
  },
  {
    "id": "153929",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена Казка, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-110 . Код 1С: 153929.",
    "images": [
      "assets/images/products/153929.jpg"
    ],
    "specs": []
  },
  {
    "id": "153930",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Шепіт, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-111. Код 1С: 153930.",
    "images": [
      "assets/images/products/153930.jpg"
    ],
    "specs": []
  },
  {
    "id": "153928",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена Казка, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-110. Код 1С: 153928.",
    "images": [
      "assets/images/products/153928.jpg"
    ],
    "specs": []
  },
  {
    "id": "153932",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Шепіт, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-111. Код 1С: 153932.",
    "images": [
      "assets/images/products/153932.jpg"
    ],
    "specs": []
  },
  {
    "id": "153931",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Шепіт, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-111 . Код 1С: 153931.",
    "images": [
      "assets/images/products/153931.jpg"
    ],
    "specs": []
  },
  {
    "id": "153926",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Зелена Казка, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-110 . Код 1С: 153926.",
    "images": [
      "assets/images/products/153926.jpg"
    ],
    "specs": []
  },
  {
    "id": "153933",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Срібна Вуаль, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-112 . Код 1С: 153933.",
    "images": [
      "assets/images/products/153933.jpg"
    ],
    "specs": []
  },
  {
    "id": "153936",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Небесна Любов, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-113 . Код 1С: 153936.",
    "images": [
      "assets/images/products/153936.jpg"
    ],
    "specs": []
  },
  {
    "id": "153937",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Небесна Любов, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-113 . Код 1С: 153937.",
    "images": [
      "assets/images/products/153937.jpg"
    ],
    "specs": []
  },
  {
    "id": "153934",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Срібна Вуаль, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-112 . Код 1С: 153934.",
    "images": [
      "assets/images/products/153934.jpg"
    ],
    "specs": []
  },
  {
    "id": "153938",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Небесна Любов, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-113. Код 1С: 153938.",
    "images": [
      "assets/images/products/153938.jpg"
    ],
    "specs": []
  },
  {
    "id": "153935",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Срібна Вуаль, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-112. Код 1С: 153935.",
    "images": [
      "assets/images/products/153935.jpg"
    ],
    "specs": []
  },
  {
    "id": "153939",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Ранок, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-114 . Код 1С: 153939.",
    "images": [
      "assets/images/products/153939.jpg"
    ],
    "specs": []
  },
  {
    "id": "153941",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Ранок, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-114. Код 1С: 153941.",
    "images": [
      "assets/images/products/153941.jpg"
    ],
    "specs": []
  },
  {
    "id": "153940",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Теплий Ранок, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-114 . Код 1С: 153940.",
    "images": [
      "assets/images/products/153940.jpg"
    ],
    "specs": []
  },
  {
    "id": "153942",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Папороть Ночі, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-115. Код 1С: 153942.",
    "images": [
      "assets/images/products/153942.jpg"
    ],
    "specs": []
  },
  {
    "id": "153943",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Папороть Ночі, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-115 . Код 1С: 153943.",
    "images": [
      "assets/images/products/153943.jpg"
    ],
    "specs": []
  },
  {
    "id": "153944",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Папороть Ночі. євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-115. Код 1С: 153944.",
    "images": [
      "assets/images/products/153944.jpg"
    ],
    "specs": []
  },
  {
    "id": "147066",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Чорний-Ізумруд, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-201. Код 1С: 147066.",
    "images": [
      "assets/images/products/147066.jpg"
    ],
    "specs": []
  },
  {
    "id": "147071",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Кремовий, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-202. Код 1С: 147071.",
    "images": [
      "assets/images/products/147071.jpg"
    ],
    "specs": []
  },
  {
    "id": "153910",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Чорний-Ізумруд, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-201 . Код 1С: 153910.",
    "images": [
      "assets/images/products/153910.jpg"
    ],
    "specs": []
  },
  {
    "id": "147072",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Рожево-Синій, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-203. Код 1С: 147072.",
    "images": [
      "assets/images/products/147072.jpg"
    ],
    "specs": []
  },
  {
    "id": "147067",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Чорний-Ізумруд, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-201. Код 1С: 147067.",
    "images": [
      "assets/images/products/147067.jpg"
    ],
    "specs": []
  },
  {
    "id": "147069",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Кремовий, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-202. Код 1С: 147069.",
    "images": [
      "assets/images/products/147069.jpg"
    ],
    "specs": []
  },
  {
    "id": "147073",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Рожево-Синій, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-203. Код 1С: 147073.",
    "images": [
      "assets/images/products/147073.jpg"
    ],
    "specs": []
  },
  {
    "id": "147074",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Рожево-Синій, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-203. Код 1С: 147074.",
    "images": [
      "assets/images/products/147074.jpg"
    ],
    "specs": []
  },
  {
    "id": "147070",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Кремовий, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-202. Код 1С: 147070.",
    "images": [
      "assets/images/products/147070.jpg"
    ],
    "specs": []
  },
  {
    "id": "153911",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Рожево-Синій, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-203 . Код 1С: 153911.",
    "images": [
      "assets/images/products/153911.jpg"
    ],
    "specs": []
  },
  {
    "id": "147068",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Чорний-Ізумруд, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-201. Код 1С: 147068.",
    "images": [
      "assets/images/products/147068.jpg"
    ],
    "specs": []
  },
  {
    "id": "147075",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Блакитно-Сірий, півтораспальний VERSAILLES, Сатин\nПідковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-204. Код 1С: 147075.",
    "images": [
      "assets/images/products/147075.jpg"
    ],
    "specs": []
  },
  {
    "id": "147076",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Блакитно-Сірий, двоспальний VERSAILLES, Сатин\nПідковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-204. Код 1С: 147076.",
    "images": [
      "assets/images/products/147076.jpg"
    ],
    "specs": []
  },
  {
    "id": "147077",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Блакитно-Сірий, євро VERSAILLES, Сатин\nПідковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-204. Код 1С: 147077.",
    "images": [
      "assets/images/products/147077.jpg"
    ],
    "specs": []
  },
  {
    "id": "147078",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Графітовий, півтораспальний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см, Простирадло: 180х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 1824.0,
    "desc": "Артикул: VS-BS1.5-205. Код 1С: 147078.",
    "images": [
      "assets/images/products/147078.jpg"
    ],
    "specs": []
  },
  {
    "id": "147079",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Графітовий, двоспальний VERSAILLES, Сатин.Підковдра на блискавці: 180х220см, Простирадло: 200х230см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2114.0,
    "desc": "Артикул: VS-BS2.0-205. Код 1С: 147079.",
    "images": [
      "assets/images/products/147079.jpg"
    ],
    "specs": []
  },
  {
    "id": "153912",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Графітовий, сімейний VERSAILLES, Сатин.Підковдра на блискавці: 160х210см (2 шт.), Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 3334.0,
    "desc": "Артикул: VS-BS3.0-205. Код 1С: 153912.",
    "images": [
      "assets/images/products/153912.jpg"
    ],
    "specs": []
  },
  {
    "id": "146110",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Вірідіан VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T21-5090. Код 1С: 146110.",
    "images": [
      "assets/images/products/146110.jpg"
    ],
    "specs": []
  },
  {
    "id": "146111",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Вірідіан VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T21-3050. Код 1С: 146111.",
    "images": [
      "assets/images/products/146111.jpg"
    ],
    "specs": []
  },
  {
    "id": "146770",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Коричневий VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T22-3050. Код 1С: 146770.",
    "images": [
      "assets/images/products/146770.jpg"
    ],
    "specs": []
  },
  {
    "id": "146769",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Коричневий VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T22-5090. Код 1С: 146769.",
    "images": [
      "assets/images/products/146769.jpg"
    ],
    "specs": []
  },
  {
    "id": "147080",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Комплект постільної білизни Сіро-Графітовий, євро VERSAILLES, Сатин.Підковдра на блискавці: 200х230см, Простирадло: 230х240см, Наволочка: 50х70 см (2 шт.)\nТканина: 100% бавовна, Сатин 200ТС",
    "price": 2269.0,
    "desc": "Артикул: VS-BS2.5-205. Код 1С: 147080.",
    "images": [
      "assets/images/products/147080.jpg"
    ],
    "specs": []
  },
  {
    "id": "146771",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Теракот VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T23-7014. Код 1С: 146771.",
    "images": [
      "assets/images/products/146771.jpg"
    ],
    "specs": []
  },
  {
    "id": "146109",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Вірідіан VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T21-7014. Код 1С: 146109.",
    "images": [
      "assets/images/products/146109.jpg"
    ],
    "specs": []
  },
  {
    "id": "146774",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Сірий VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T24-7014. Код 1С: 146774.",
    "images": [
      "assets/images/products/146774.jpg"
    ],
    "specs": []
  },
  {
    "id": "146768",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Коричневий VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T22-7014. Код 1С: 146768.",
    "images": [
      "assets/images/products/146768.jpg"
    ],
    "specs": []
  },
  {
    "id": "146772",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Теракот VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T23-5090. Код 1С: 146772.",
    "images": [
      "assets/images/products/146772.jpg"
    ],
    "specs": []
  },
  {
    "id": "146777",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Світло сірий VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T25-7014. Код 1С: 146777.",
    "images": [
      "assets/images/products/146777.jpg"
    ],
    "specs": []
  },
  {
    "id": "146778",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Світло сірий VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T25-5090. Код 1С: 146778.",
    "images": [
      "assets/images/products/146778.jpg"
    ],
    "specs": []
  },
  {
    "id": "146773",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Теракот VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T23-3050. Код 1С: 146773.",
    "images": [
      "assets/images/products/146773.jpg"
    ],
    "specs": []
  },
  {
    "id": "146775",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Сірий VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T24-5090. Код 1С: 146775.",
    "images": [
      "assets/images/products/146775.jpg"
    ],
    "specs": []
  },
  {
    "id": "146779",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Світло сірий VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T25-3050. Код 1С: 146779.",
    "images": [
      "assets/images/products/146779.jpg"
    ],
    "specs": []
  },
  {
    "id": "146112",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см мікрофібра, Айворі VERSAILLES",
    "price": 238.0,
    "desc": "Артикул: VS-T31-7014. Код 1С: 146112.",
    "images": [
      "assets/images/products/146112.jpg"
    ],
    "specs": []
  },
  {
    "id": "146114",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см мікрофібра, Айворі VERSAILLES",
    "price": 46.0,
    "desc": "Артикул: VS-T31-3050. Код 1С: 146114.",
    "images": [
      "assets/images/products/146114.jpg"
    ],
    "specs": []
  },
  {
    "id": "146113",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см мікрофібра, Айворі VERSAILLES",
    "price": 123.0,
    "desc": "Артикул: VS-T31-5090. Код 1С: 146113.",
    "images": [
      "assets/images/products/146113.jpg"
    ],
    "specs": []
  },
  {
    "id": "146786",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см мікрофібра, Капучіно VERSAILLES",
    "price": 238.0,
    "desc": "Артикул: VS-T32-7014. Код 1С: 146786.",
    "images": [
      "assets/images/products/146786.jpg"
    ],
    "specs": []
  },
  {
    "id": "146787",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см мікрофібра, Капучіно VERSAILLES",
    "price": 123.0,
    "desc": "Артикул: VS-T32-5090. Код 1С: 146787.",
    "images": [
      "assets/images/products/146787.jpg"
    ],
    "specs": []
  },
  {
    "id": "146789",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см мікрофібра, Сірий VERSAILLES",
    "price": 238.0,
    "desc": "Артикул: VS-T33-7014. Код 1С: 146789.",
    "images": [
      "assets/images/products/146789.jpg"
    ],
    "specs": []
  },
  {
    "id": "146790",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см мікрофібра, Сірий VERSAILLES",
    "price": 123.0,
    "desc": "Артикул: VS-T33-5090. Код 1С: 146790.",
    "images": [
      "assets/images/products/146790.jpg"
    ],
    "specs": []
  },
  {
    "id": "146788",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см мікрофібра, Капучіно VERSAILLES",
    "price": 46.0,
    "desc": "Артикул: VS-T32-3050. Код 1С: 146788.",
    "images": [
      "assets/images/products/146788.jpg"
    ],
    "specs": []
  },
  {
    "id": "146791",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см мікрофібра, Сірий VERSAILLES",
    "price": 46.0,
    "desc": "Артикул: VS-T33-3050. Код 1С: 146791.",
    "images": [
      "assets/images/products/146791.jpg"
    ],
    "specs": []
  },
  {
    "id": "146776",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Сірий VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T24-3050. Код 1С: 146776.",
    "images": [
      "assets/images/products/146776.jpg"
    ],
    "specs": []
  },
  {
    "id": "146783",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Блакитний VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T27-7014. Код 1С: 146783.",
    "images": [
      "assets/images/products/146783.jpg"
    ],
    "specs": []
  },
  {
    "id": "146792",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см мікрофібра, Сапфіровий VERSAILLES",
    "price": 238.0,
    "desc": "Артикул: VS-T34-7014. Код 1С: 146792.",
    "images": [
      "assets/images/products/146792.jpg"
    ],
    "specs": []
  },
  {
    "id": "146795",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см мікрофібра, Ізумрудний VERSAILLES",
    "price": 238.0,
    "desc": "Артикул: VS-T35-7014. Код 1С: 146795.",
    "images": [
      "assets/images/products/146795.jpg"
    ],
    "specs": []
  },
  {
    "id": "146784",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см бавовна/ПЕ, Блакитний VERSAILLES",
    "price": 152.0,
    "desc": "Артикул: VS-T27-5090. Код 1С: 146784.",
    "images": [
      "assets/images/products/146784.jpg"
    ],
    "specs": []
  },
  {
    "id": "146780",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см бавовна/ПЕ, Рожевий VERSAILLES",
    "price": 296.0,
    "desc": "Артикул: VS-T26-7014. Код 1С: 146780.",
    "images": [
      "assets/images/products/146780.jpg"
    ],
    "specs": []
  },
  {
    "id": "146794",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см мікрофібра, Сапфіровий VERSAILLES",
    "price": 46.0,
    "desc": "Артикул: VS-T34-3050. Код 1С: 146794.",
    "images": [
      "assets/images/products/146794.jpg"
    ],
    "specs": []
  },
  {
    "id": "146793",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см мікрофібра, Сапфіровий VERSAILLES",
    "price": 123.0,
    "desc": "Артикул: VS-T34-5090. Код 1С: 146793.",
    "images": [
      "assets/images/products/146793.jpg"
    ],
    "specs": []
  },
  {
    "id": "146796",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см мікрофібра, Ізумрудний VERSAILLES",
    "price": 123.0,
    "desc": "Артикул: VS-T35-5090. Код 1С: 146796.",
    "images": [
      "assets/images/products/146796.jpg"
    ],
    "specs": []
  },
  {
    "id": "146785",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см бавовна/ПЕ, Блакитний VERSAILLES",
    "price": 63.0,
    "desc": "Артикул: VS-T27-3050. Код 1С: 146785.",
    "images": [
      "assets/images/products/146785.jpg"
    ],
    "specs": []
  },
  {
    "id": "146797",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см мікрофібра, Ізумрудний VERSAILLES",
    "price": 46.0,
    "desc": "Артикул: VS-T35-3050. Код 1С: 146797.",
    "images": [
      "assets/images/products/146797.jpg"
    ],
    "specs": []
  },
  {
    "id": "151911",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 30х50см мікрофібра, корал VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T317-3050. Код 1С: 151911.",
    "images": [
      "assets/images/products/151911.jpg"
    ],
    "specs": []
  },
  {
    "id": "151918",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 70х140см мікрофібра, лазур VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T316-7014. Код 1С: 151918.",
    "images": [
      "assets/images/products/151918.jpg"
    ],
    "specs": []
  },
  {
    "id": "151909",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 30х50см мікрофібра, ніч VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T315-3050. Код 1С: 151909.",
    "images": [
      "assets/images/products/151909.jpg"
    ],
    "specs": []
  },
  {
    "id": "151910",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 30х50см мікрофібра, лазур VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T316-3050. Код 1С: 151910.",
    "images": [
      "assets/images/products/151910.jpg"
    ],
    "specs": []
  },
  {
    "id": "151913",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 50х90см мікрофібра, ніч VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T315-5090. Код 1С: 151913.",
    "images": [
      "assets/images/products/151913.jpg"
    ],
    "specs": []
  },
  {
    "id": "151915",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 50х90см мікрофібра, корал VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T317-5090. Код 1С: 151915.",
    "images": [
      "assets/images/products/151915.jpg"
    ],
    "specs": []
  },
  {
    "id": "151919",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 70х140см мікрофібра, корал VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T317-7014. Код 1С: 151919.",
    "images": [
      "assets/images/products/151919.jpg"
    ],
    "specs": []
  },
  {
    "id": "151917",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 70х140см мікрофібра, ніч VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T315-7014. Код 1С: 151917.",
    "images": [
      "assets/images/products/151917.jpg"
    ],
    "specs": []
  },
  {
    "id": "151908",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 30х50см мікрофібра, ніжність VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T314-3050. Код 1С: 151908.",
    "images": [
      "assets/images/products/151908.jpg"
    ],
    "specs": []
  },
  {
    "id": "151912",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 50х90см мікрофібра, ніжність VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T314-5090. Код 1С: 151912.",
    "images": [
      "assets/images/products/151912.jpg"
    ],
    "specs": []
  },
  {
    "id": "151914",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 50х90см мікрофібра, лазур VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T316-5090. Код 1С: 151914.",
    "images": [
      "assets/images/products/151914.jpg"
    ],
    "specs": []
  },
  {
    "id": "151896",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 30х50см мікрофібра, сірий VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T310-3050. Код 1С: 151896.",
    "images": [
      "assets/images/products/151896.jpg"
    ],
    "specs": []
  },
  {
    "id": "151900",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 50х90см мікрофібра, сірий VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T310-5090. Код 1С: 151900.",
    "images": [
      "assets/images/products/151900.jpg"
    ],
    "specs": []
  },
  {
    "id": "151905",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 70х140см мікрофібра, кремовий VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T311-7014. Код 1С: 151905.",
    "images": [
      "assets/images/products/151905.jpg"
    ],
    "specs": []
  },
  {
    "id": "151904",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 70х140см мікрофібра, сірий VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T310-7014. Код 1С: 151904.",
    "images": [
      "assets/images/products/151904.jpg"
    ],
    "specs": []
  },
  {
    "id": "151897",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 30х50см мікрофібра, кремовий VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T311-3050. Код 1С: 151897.",
    "images": [
      "assets/images/products/151897.jpg"
    ],
    "specs": []
  },
  {
    "id": "151898",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 30х50см мікрофібра, фісташковий VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T312-3050. Код 1С: 151898.",
    "images": [
      "assets/images/products/151898.jpg"
    ],
    "specs": []
  },
  {
    "id": "151901",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 50х90см мікрофібра, кремовий VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T311-5090. Код 1С: 151901.",
    "images": [
      "assets/images/products/151901.jpg"
    ],
    "specs": []
  },
  {
    "id": "151902",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 50х90см мікрофібра, фісташковий VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T312-5090. Код 1С: 151902.",
    "images": [
      "assets/images/products/151902.jpg"
    ],
    "specs": []
  },
  {
    "id": "151916",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник фактурний 70х140см мікрофібра, ніжність VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T314-7014. Код 1С: 151916.",
    "images": [
      "assets/images/products/151916.jpg"
    ],
    "specs": []
  },
  {
    "id": "151899",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 30х50см мікрофібра, малиновий VERSAILLES",
    "price": 50.0,
    "desc": "Артикул: VS-T313-3050. Код 1С: 151899.",
    "images": [
      "assets/images/products/151899.jpg"
    ],
    "specs": []
  },
  {
    "id": "151906",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 70х140см мікрофібра, фісташковий VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T312-7014. Код 1С: 151906.",
    "images": [
      "assets/images/products/151906.jpg"
    ],
    "specs": []
  },
  {
    "id": "151907",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 70х140см мікрофібра, малиновий VERSAILLES",
    "price": 221.0,
    "desc": "Артикул: VS-T313-7014. Код 1С: 151907.",
    "images": [
      "assets/images/products/151907.jpg"
    ],
    "specs": []
  },
  {
    "id": "151903",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Баланс 50х90см мікрофібра, малиновий VERSAILLES",
    "price": 115.0,
    "desc": "Артикул: VS-T313-5090. Код 1С: 151903.",
    "images": [
      "assets/images/products/151903.jpg"
    ],
    "specs": []
  },
  {
    "id": "151886",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 30х50см мікрофібра, графіт  VERSAILLES",
    "price": 54.0,
    "desc": "Артикул: VS-T38-3050. Код 1С: 151886.",
    "images": [
      "assets/images/products/151886.jpg"
    ],
    "specs": []
  },
  {
    "id": "151895",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 70х140см мікрофібра, блакить VERSAILLES",
    "price": 247.0,
    "desc": "Артикул: VS-T39-7014. Код 1С: 151895.",
    "images": [
      "assets/images/products/151895.jpg"
    ],
    "specs": []
  },
  {
    "id": "151887",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 30х50см мікрофібра, блакить VERSAILLES",
    "price": 54.0,
    "desc": "Артикул: VS-T39-3050. Код 1С: 151887.",
    "images": [
      "assets/images/products/151887.jpg"
    ],
    "specs": []
  },
  {
    "id": "151891",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 50х90см мікрофібра, блакить VERSAILLES",
    "price": 125.0,
    "desc": "Артикул: VS-T39-5090. Код 1С: 151891.",
    "images": [
      "assets/images/products/151891.jpg"
    ],
    "specs": []
  },
  {
    "id": "151890",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 50х90см мікрофібра, графіт VERSAILLES",
    "price": 125.0,
    "desc": "Артикул: VS-T38-5090. Код 1С: 151890.",
    "images": [
      "assets/images/products/151890.jpg"
    ],
    "specs": []
  },
  {
    "id": "151894",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 70х140см мікрофібра, графіт VERSAILLES",
    "price": 247.0,
    "desc": "Артикул: VS-T38-7014. Код 1С: 151894.",
    "images": [
      "assets/images/products/151894.jpg"
    ],
    "specs": []
  },
  {
    "id": "151884",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 30х50см мікрофібра, ваніль VERSAILLES",
    "price": 54.0,
    "desc": "Артикул: VS-T36-3050. Код 1С: 151884.",
    "images": [
      "assets/images/products/151884.jpg"
    ],
    "specs": []
  },
  {
    "id": "151885",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 30х50см мікрофібра, карамель VERSAILLES",
    "price": 54.0,
    "desc": "Артикул: VS-T37-3050. Код 1С: 151885.",
    "images": [
      "assets/images/products/151885.jpg"
    ],
    "specs": []
  },
  {
    "id": "151889",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 50х90см мікрофібра, карамель  VERSAILLES",
    "price": 125.0,
    "desc": "Артикул: VS-T37-5090. Код 1С: 151889.",
    "images": [
      "assets/images/products/151889.jpg"
    ],
    "specs": []
  },
  {
    "id": "151893",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 70х140см мікрофібра, карамель  VERSAILLES",
    "price": 247.0,
    "desc": "Артикул: VS-T37-7014. Код 1С: 151893.",
    "images": [
      "assets/images/products/151893.jpg"
    ],
    "specs": []
  },
  {
    "id": "151888",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 50х90см мікрофібра, ваніль  VERSAILLES",
    "price": 125.0,
    "desc": "Артикул: VS-T36-5090. Код 1С: 151888.",
    "images": [
      "assets/images/products/151888.jpg"
    ],
    "specs": []
  },
  {
    "id": "151892",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Хмаринка 70х140см мікрофібра, ваніль  VERSAILLES",
    "price": 247.0,
    "desc": "Артикул: VS-T36-7014. Код 1С: 151892.",
    "images": [
      "assets/images/products/151892.jpg"
    ],
    "specs": []
  },
  {
    "id": "146186",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Айворі VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T11-3050. Код 1С: 146186.",
    "images": [
      "assets/images/products/146186.jpg"
    ],
    "specs": []
  },
  {
    "id": "146184",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Айворі VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T11-7014. Код 1С: 146184.",
    "images": [
      "assets/images/products/146184.jpg"
    ],
    "specs": []
  },
  {
    "id": "146185",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Айворі VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T11-5090. Код 1С: 146185.",
    "images": [
      "assets/images/products/146185.jpg"
    ],
    "specs": []
  },
  {
    "id": "153092",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, Айворі VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T11-9015. Код 1С: 153092.",
    "images": [
      "assets/images/products/153092.jpg"
    ],
    "specs": []
  },
  {
    "id": "146678",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Перлинний VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T13-5090. Код 1С: 146678.",
    "images": [
      "assets/images/products/146678.jpg"
    ],
    "specs": []
  },
  {
    "id": "146674",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, М'ята VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T12-3050. Код 1С: 146674.",
    "images": [
      "assets/images/products/146674.jpg"
    ],
    "specs": []
  },
  {
    "id": "146677",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Перлинний VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T13-3050. Код 1С: 146677.",
    "images": [
      "assets/images/products/146677.jpg"
    ],
    "specs": []
  },
  {
    "id": "146675",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, М'ята VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T12-5090. Код 1С: 146675.",
    "images": [
      "assets/images/products/146675.jpg"
    ],
    "specs": []
  },
  {
    "id": "146676",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, М'ята VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T12-7014. Код 1С: 146676.",
    "images": [
      "assets/images/products/146676.jpg"
    ],
    "specs": []
  },
  {
    "id": "153093",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, М'ята VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T12-9015. Код 1С: 153093.",
    "images": [
      "assets/images/products/153093.jpg"
    ],
    "specs": []
  },
  {
    "id": "146679",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Перлинний VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T13-7014. Код 1С: 146679.",
    "images": [
      "assets/images/products/146679.jpg"
    ],
    "specs": []
  },
  {
    "id": "153094",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, Перлинний VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T13-9015. Код 1С: 153094.",
    "images": [
      "assets/images/products/153094.jpg"
    ],
    "specs": []
  },
  {
    "id": "146680",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Денім VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T14-3050. Код 1С: 146680.",
    "images": [
      "assets/images/products/146680.jpg"
    ],
    "specs": []
  },
  {
    "id": "146681",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Денім VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T14-5090. Код 1С: 146681.",
    "images": [
      "assets/images/products/146681.jpg"
    ],
    "specs": []
  },
  {
    "id": "146683",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Рожевий VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T15-3050. Код 1С: 146683.",
    "images": [
      "assets/images/products/146683.jpg"
    ],
    "specs": []
  },
  {
    "id": "146682",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Денім VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T14-7014. Код 1С: 146682.",
    "images": [
      "assets/images/products/146682.jpg"
    ],
    "specs": []
  },
  {
    "id": "153095",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, Денім VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T14-9015. Код 1С: 153095.",
    "images": [
      "assets/images/products/153095.jpg"
    ],
    "specs": []
  },
  {
    "id": "146685",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Рожевий VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T15-7014. Код 1С: 146685.",
    "images": [
      "assets/images/products/146685.jpg"
    ],
    "specs": []
  },
  {
    "id": "146684",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Рожевий VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T15-5090. Код 1С: 146684.",
    "images": [
      "assets/images/products/146684.jpg"
    ],
    "specs": []
  },
  {
    "id": "146728",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Ліловий VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T16-3050. Код 1С: 146728.",
    "images": [
      "assets/images/products/146728.jpg"
    ],
    "specs": []
  },
  {
    "id": "146729",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Ліловий VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T16-5090. Код 1С: 146729.",
    "images": [
      "assets/images/products/146729.jpg"
    ],
    "specs": []
  },
  {
    "id": "146730",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Ліловий VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T16-7014. Код 1С: 146730.",
    "images": [
      "assets/images/products/146730.jpg"
    ],
    "specs": []
  },
  {
    "id": "146731",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Пісочний VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T17-3050. Код 1С: 146731.",
    "images": [
      "assets/images/products/146731.jpg"
    ],
    "specs": []
  },
  {
    "id": "153096",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, Графіт VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T18-9015. Код 1С: 153096.",
    "images": [
      "assets/images/products/153096.jpg"
    ],
    "specs": []
  },
  {
    "id": "146743",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Пісочний VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T17-5090. Код 1С: 146743.",
    "images": [
      "assets/images/products/146743.jpg"
    ],
    "specs": []
  },
  {
    "id": "146746",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Графіт VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T18-3050. Код 1С: 146746.",
    "images": [
      "assets/images/products/146746.jpg"
    ],
    "specs": []
  },
  {
    "id": "146747",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Графіт VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T18-5090. Код 1С: 146747.",
    "images": [
      "assets/images/products/146747.jpg"
    ],
    "specs": []
  },
  {
    "id": "146751",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Графіт VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T18-7014. Код 1С: 146751.",
    "images": [
      "assets/images/products/146751.jpg"
    ],
    "specs": []
  },
  {
    "id": "146752",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Хакі VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T19-3050. Код 1С: 146752.",
    "images": [
      "assets/images/products/146752.jpg"
    ],
    "specs": []
  },
  {
    "id": "146744",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Пісочний VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T17-7014. Код 1С: 146744.",
    "images": [
      "assets/images/products/146744.jpg"
    ],
    "specs": []
  },
  {
    "id": "146756",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Хакі VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T19-7014. Код 1С: 146756.",
    "images": [
      "assets/images/products/146756.jpg"
    ],
    "specs": []
  },
  {
    "id": "146754",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Хакі VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T19-5090. Код 1С: 146754.",
    "images": [
      "assets/images/products/146754.jpg"
    ],
    "specs": []
  },
  {
    "id": "146757",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Марсала VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T110-3050. Код 1С: 146757.",
    "images": [
      "assets/images/products/146757.jpg"
    ],
    "specs": []
  },
  {
    "id": "146759",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Марсала VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T110-7014. Код 1С: 146759.",
    "images": [
      "assets/images/products/146759.jpg"
    ],
    "specs": []
  },
  {
    "id": "146758",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Марсала VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T110-5090. Код 1С: 146758.",
    "images": [
      "assets/images/products/146758.jpg"
    ],
    "specs": []
  },
  {
    "id": "146763",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Шоколад VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T112-3050. Код 1С: 146763.",
    "images": [
      "assets/images/products/146763.jpg"
    ],
    "specs": []
  },
  {
    "id": "146761",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Маренго VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T111-5090. Код 1С: 146761.",
    "images": [
      "assets/images/products/146761.jpg"
    ],
    "specs": []
  },
  {
    "id": "146760",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 30х50см 100% бавовна, Маренго VERSAILLES",
    "price": 74.0,
    "desc": "Артикул: VS-T111-3050. Код 1С: 146760.",
    "images": [
      "assets/images/products/146760.jpg"
    ],
    "specs": []
  },
  {
    "id": "146762",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Маренго VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T111-7014. Код 1С: 146762.",
    "images": [
      "assets/images/products/146762.jpg"
    ],
    "specs": []
  },
  {
    "id": "153091",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 90х150см 100% бавовна, Маренго VERSAILLES",
    "price": 562.0,
    "desc": "Артикул: VS-T111-9015. Код 1С: 153091.",
    "images": [
      "assets/images/products/153091.jpg"
    ],
    "specs": []
  },
  {
    "id": "151932",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, сірий VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T42-5090. Код 1С: 151932.",
    "images": [],
    "specs": []
  },
  {
    "id": "151939",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, сірий VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T42-7014. Код 1С: 151939.",
    "images": [],
    "specs": []
  },
  {
    "id": "146764",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 50х90см 100% бавовна, Шоколад VERSAILLES",
    "price": 215.0,
    "desc": "Артикул: VS-T112-5090. Код 1С: 146764.",
    "images": [
      "assets/images/products/146764.jpg"
    ],
    "specs": []
  },
  {
    "id": "146765",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник 70х140см 100% бавовна, Шоколад VERSAILLES",
    "price": 470.0,
    "desc": "Артикул: VS-T112-7014. Код 1С: 146765.",
    "images": [
      "assets/images/products/146765.jpg"
    ],
    "specs": []
  },
  {
    "id": "151931",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, білий VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T41-5090. Код 1С: 151931.",
    "images": [
      "assets/images/products/151931.jpg"
    ],
    "specs": []
  },
  {
    "id": "151938",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, білий VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T41-7014. Код 1С: 151938.",
    "images": [
      "assets/images/products/151938.jpg"
    ],
    "specs": []
  },
  {
    "id": "151926",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, сірий VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T42-3050. Код 1С: 151926.",
    "images": [
      "assets/images/products/151926.jpg"
    ],
    "specs": []
  },
  {
    "id": "151928",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, пісочний VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T44-3050. Код 1С: 151928.",
    "images": [
      "assets/images/products/151928.jpg"
    ],
    "specs": []
  },
  {
    "id": "151935",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, пісочний VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T44-5090. Код 1С: 151935.",
    "images": [
      "assets/images/products/151935.jpg"
    ],
    "specs": []
  },
  {
    "id": "151933",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, смарагдовий VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T43-5090. Код 1С: 151933.",
    "images": [
      "assets/images/products/151933.jpg"
    ],
    "specs": []
  },
  {
    "id": "151941",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, пісочний VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T44-7014. Код 1С: 151941.",
    "images": [
      "assets/images/products/151941.jpg"
    ],
    "specs": []
  },
  {
    "id": "151925",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, білий VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T41-3050. Код 1С: 151925.",
    "images": [
      "assets/images/products/151925.jpg"
    ],
    "specs": []
  },
  {
    "id": "151929",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, блакитний VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T45-3050. Код 1С: 151929.",
    "images": [
      "assets/images/products/151929.jpg"
    ],
    "specs": []
  },
  {
    "id": "151936",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, блакитний VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T45-5090. Код 1С: 151936.",
    "images": [
      "assets/images/products/151936.jpg"
    ],
    "specs": []
  },
  {
    "id": "151930",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, чорний VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T46-3050. Код 1С: 151930.",
    "images": [
      "assets/images/products/151930.jpg"
    ],
    "specs": []
  },
  {
    "id": "151942",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, блакитний VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T45-7014. Код 1С: 151942.",
    "images": [
      "assets/images/products/151942.jpg"
    ],
    "specs": []
  },
  {
    "id": "151944",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, чорний VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T46-7014. Код 1С: 151944.",
    "images": [
      "assets/images/products/151944.jpg"
    ],
    "specs": []
  },
  {
    "id": "153097",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 30х50см 100% бавовна, білий VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T61-3050. Код 1С: 153097.",
    "images": [
      "assets/images/products/153097.jpg"
    ],
    "specs": []
  },
  {
    "id": "151937",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 50х90см 100% бавовна, чорний VERSAILLES",
    "price": 276.0,
    "desc": "Артикул: VS-T46-5090. Код 1С: 151937.",
    "images": [
      "assets/images/products/151937.jpg"
    ],
    "specs": []
  },
  {
    "id": "153098",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 30х50см 100% бавовна, вершковий VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T62-3050. Код 1С: 153098.",
    "images": [
      "assets/images/products/153098.jpg"
    ],
    "specs": []
  },
  {
    "id": "153102",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 50х90см 100% бавовна, білий VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T61-5090. Код 1С: 153102.",
    "images": [
      "assets/images/products/153102.jpg"
    ],
    "specs": []
  },
  {
    "id": "151927",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 30х50см 100% бавовна, смарагдовий VERSAILLES",
    "price": 94.0,
    "desc": "Артикул: VS-T43-3050. Код 1С: 151927.",
    "images": [
      "assets/images/products/151927.jpg"
    ],
    "specs": []
  },
  {
    "id": "153099",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 30х50см 100% бавовна, карміновий VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T63-3050. Код 1С: 153099.",
    "images": [
      "assets/images/products/153099.jpg"
    ],
    "specs": []
  },
  {
    "id": "153108",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 70х140см 100% бавовна, вершковий VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T62-7014. Код 1С: 153108.",
    "images": [
      "assets/images/products/153108.jpg"
    ],
    "specs": []
  },
  {
    "id": "153107",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 70х140см 100% бавовна, білий VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T61-7014. Код 1С: 153107.",
    "images": [
      "assets/images/products/153107.jpg"
    ],
    "specs": []
  },
  {
    "id": "153109",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 70х140см 100% бавовна, карміновий VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T63-7014. Код 1С: 153109.",
    "images": [
      "assets/images/products/153109.jpg"
    ],
    "specs": []
  },
  {
    "id": "151940",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Афіна 70х140см 100% бавовна, смарагдовий VERSAILLES",
    "price": 598.0,
    "desc": "Артикул: VS-T43-7014. Код 1С: 151940.",
    "images": [
      "assets/images/products/151940.jpg"
    ],
    "specs": []
  },
  {
    "id": "153104",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 50х90см 100% бавовна, карміновий VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T63-5090. Код 1С: 153104.",
    "images": [
      "assets/images/products/153104.jpg"
    ],
    "specs": []
  },
  {
    "id": "153100",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 30х50см 100% бавовна, індиго VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T64-3050. Код 1С: 153100.",
    "images": [
      "assets/images/products/153100.jpg"
    ],
    "specs": []
  },
  {
    "id": "153105",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 50х90см 100% бавовна, індиго VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T64-5090. Код 1С: 153105.",
    "images": [
      "assets/images/products/153105.jpg"
    ],
    "specs": []
  },
  {
    "id": "153101",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 30х50см 100% бавовна, скеля VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T65-3050. Код 1С: 153101.",
    "images": [
      "assets/images/products/153101.jpg"
    ],
    "specs": []
  },
  {
    "id": "153111",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 70х140см 100% бавовна, скеля VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T65-7014. Код 1С: 153111.",
    "images": [
      "assets/images/products/153111.jpg"
    ],
    "specs": []
  },
  {
    "id": "153106",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 50х90см 100% бавовна, скеля VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T65-5090. Код 1С: 153106.",
    "images": [
      "assets/images/products/153106.jpg"
    ],
    "specs": []
  },
  {
    "id": "153116",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 50х90см 100% бавовна, пудровий VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T51-5090. Код 1С: 153116.",
    "images": [
      "assets/images/products/153116.jpg"
    ],
    "specs": []
  },
  {
    "id": "153110",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 70х140см 100% бавовна, індиго VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T64-7014. Код 1С: 153110.",
    "images": [
      "assets/images/products/153110.jpg"
    ],
    "specs": []
  },
  {
    "id": "153112",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 30х50см 100% бавовна, пудровий VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T51-3050. Код 1С: 153112.",
    "images": [
      "assets/images/products/153112.jpg"
    ],
    "specs": []
  },
  {
    "id": "153120",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 70х140см 100% бавовна, пудровий VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T51-7014. Код 1С: 153120.",
    "images": [
      "assets/images/products/153120.jpg"
    ],
    "specs": []
  },
  {
    "id": "153103",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Посейдон 50х90см 100% бавовна, вершковий VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T62-5090. Код 1С: 153103.",
    "images": [
      "assets/images/products/153103.jpg"
    ],
    "specs": []
  },
  {
    "id": "153117",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 50х90см 100% бавовна, небесний VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T52-5090. Код 1С: 153117.",
    "images": [
      "assets/images/products/153117.jpg"
    ],
    "specs": []
  },
  {
    "id": "153114",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 30х50см 100% бавовна, сірий VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T53-3050. Код 1С: 153114.",
    "images": [
      "assets/images/products/153114.jpg"
    ],
    "specs": []
  },
  {
    "id": "153121",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 70х140см 100% бавовна, небесний VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T52-7014. Код 1С: 153121.",
    "images": [
      "assets/images/products/153121.jpg"
    ],
    "specs": []
  },
  {
    "id": "153113",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 30х50см 100% бавовна, небесний VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T52-3050. Код 1С: 153113.",
    "images": [
      "assets/images/products/153113.jpg"
    ],
    "specs": []
  },
  {
    "id": "125045",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 160x200см \"Бургунді\" (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200BR. Код 1С: 125045.",
    "images": [
      "assets/images/products/125045.jpg"
    ],
    "specs": []
  },
  {
    "id": "125056",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 200х220см \"Бургунді\" (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400BR. Код 1С: 125056.",
    "images": [
      "assets/images/products/125056.jpg"
    ],
    "specs": []
  },
  {
    "id": "153118",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 50х90см 100% бавовна, сірий VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T53-5090. Код 1С: 153118.",
    "images": [
      "assets/images/products/153118.jpg"
    ],
    "specs": []
  },
  {
    "id": "125051",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 160x200см \"Айворі\" (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200IV. Код 1С: 125051.",
    "images": [
      "assets/images/products/125051.jpg"
    ],
    "specs": []
  },
  {
    "id": "125057",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 200х220см \"Айворі\" (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400IV. Код 1С: 125057.",
    "images": [
      "assets/images/products/125057.jpg"
    ],
    "specs": []
  },
  {
    "id": "125054",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 160x200см \"Синій океан\" (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200BO. Код 1С: 125054.",
    "images": [
      "assets/images/products/125054.jpg"
    ],
    "specs": []
  },
  {
    "id": "153115",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 30х50см 100% бавовна, амарант VERSAILLES",
    "price": 96.0,
    "desc": "Артикул: VS-T54-3050. Код 1С: 153115.",
    "images": [
      "assets/images/products/153115.jpg"
    ],
    "specs": []
  },
  {
    "id": "125109",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 200х220см \"Синій океан\"  (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400BO. Код 1С: 125109.",
    "images": [
      "assets/images/products/125109.jpg"
    ],
    "specs": []
  },
  {
    "id": "125055",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 160x200см \"Пильна троянда\"  (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200DR. Код 1С: 125055.",
    "images": [
      "assets/images/products/125055.jpg"
    ],
    "specs": []
  },
  {
    "id": "119201",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 125х150см \"Онікс сірий\"  (WERK)",
    "price": 507.0,
    "desc": "Артикул: WFB-1875GR. Код 1С: 119201.",
    "images": [
      "assets/images/products/119201.jpg"
    ],
    "specs": []
  },
  {
    "id": "119213",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 200х220см \"Онікс сірий\"  (WERK)",
    "price": 879.0,
    "desc": "Артикул: WFB-4400GR. Код 1С: 119213.",
    "images": [
      "assets/images/products/119213.jpg"
    ],
    "specs": []
  },
  {
    "id": "119205",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 160x200см \"Онікс сірий\" (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200GR. Код 1С: 119205.",
    "images": [
      "assets/images/products/119205.jpg"
    ],
    "specs": []
  },
  {
    "id": "125110",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 200х220см \"Пильна троянда\"  (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400DR. Код 1С: 125110.",
    "images": [
      "assets/images/products/125110.jpg"
    ],
    "specs": []
  },
  {
    "id": "119209",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 125х150см \"Сердолік бежевий\" (WERK)",
    "price": 507.0,
    "desc": "Артикул: WFB-1875BG. Код 1С: 119209.",
    "images": [
      "assets/images/products/119209.jpg"
    ],
    "specs": []
  },
  {
    "id": "146956",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 150x200см \"Аметист\" (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200AM. Код 1С: 146956.",
    "images": [],
    "specs": []
  },
  {
    "id": "119211",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 200х220см \"Сердолік бежевий\" (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400BG. Код 1С: 119211.",
    "images": [
      "assets/images/products/119211.jpg"
    ],
    "specs": []
  },
  {
    "id": "146957",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класичний 200x220см \"Аметист\" (WERK)",
    "price": 1062.0,
    "desc": "Артикул: WFB-4400AM. Код 1С: 146957.",
    "images": [],
    "specs": []
  },
  {
    "id": "119207",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед класчний 160x200см \"Сердолік бежевий\"  (WERK)",
    "price": 804.0,
    "desc": "Артикул: WFB-3200BG. Код 1С: 119207.",
    "images": [
      "assets/images/products/119207.jpg"
    ],
    "specs": []
  },
  {
    "id": "130336",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній зі штучною овчиною 200х220см WERK",
    "price": 1584.0,
    "desc": "Артикул: . Код 1С: 130336.",
    "images": [],
    "specs": []
  },
  {
    "id": "130334",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній зі штучною овчиною 125х150см WERK",
    "price": 712.0,
    "desc": "Артикул: . Код 1С: 130334.",
    "images": [
      "assets/images/products/130334.jpg"
    ],
    "specs": []
  },
  {
    "id": "130335",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній зі штучною овчиною 155х200см WERK",
    "price": 1126.0,
    "desc": "Артикул: . Код 1С: 130335.",
    "images": [
      "assets/images/products/130335.jpg"
    ],
    "specs": []
  },
  {
    "id": "130337",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній зі штучною овчиною та штучним хутром 125х150см WERK",
    "price": 727.0,
    "desc": "Артикул: . Код 1С: 130337.",
    "images": [
      "assets/images/products/130337.jpg"
    ],
    "specs": []
  },
  {
    "id": "130338",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній зі штучною овчиною та штучним хутром 155х200см WERK",
    "price": 1150.0,
    "desc": "Артикул: . Код 1С: 130338.",
    "images": [
      "assets/images/products/130338.jpg"
    ],
    "specs": []
  },
  {
    "id": "130341",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній рельєфний зі штучною овчиною 155х200см WERK",
    "price": 1197.0,
    "desc": "Артикул: . Код 1С: 130341.",
    "images": [
      "assets/images/products/130341.jpg"
    ],
    "specs": []
  },
  {
    "id": "147631",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед флісовий 130x180см \"Шотландська Зима\" (VERSAILLES)",
    "price": 339.0,
    "desc": "Артикул: VS-BF-2600RS. Код 1С: 147631.",
    "images": [],
    "specs": []
  },
  {
    "id": "153119",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 50х90см 100% бавовна, амарант VERSAILLES",
    "price": 256.0,
    "desc": "Артикул: VS-T54-5090. Код 1С: 153119.",
    "images": [
      "assets/images/products/153119.jpg"
    ],
    "specs": []
  },
  {
    "id": "130340",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед двосторонній рельєфний зі штучною овчиною 125х150см WERK",
    "price": 751.0,
    "desc": "Артикул: . Код 1С: 130340.",
    "images": [
      "assets/images/products/130340.jpg"
    ],
    "specs": []
  },
  {
    "id": "147630",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед флісовий 130x180см \"Британський Ранок\" (VERSAILLES)",
    "price": 339.0,
    "desc": "Артикул: VS-BF-2600GS. Код 1С: 147630.",
    "images": [],
    "specs": []
  },
  {
    "id": "153122",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 70х140см 100% бавовна, сірий VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T53-7014. Код 1С: 153122.",
    "images": [
      "assets/images/products/153122.jpg"
    ],
    "specs": []
  },
  {
    "id": "147633",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед флісовий 130x180см \"Лапки\" (VERSAILLES)",
    "price": 339.0,
    "desc": "Артикул: VS-BF-2600СP. Код 1С: 147633.",
    "images": [],
    "specs": []
  },
  {
    "id": "153123",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник Каліпсо 70х140см 100% бавовна, амарант VERSAILLES",
    "price": 563.0,
    "desc": "Артикул: VS-T54-7014. Код 1С: 153123.",
    "images": [
      "assets/images/products/153123.jpg"
    ],
    "specs": []
  },
  {
    "id": "147632",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед флісовий 130x180см \"Котики\" (VERSAILLES)",
    "price": 339.0,
    "desc": "Артикул: VS-BF-2600СS. Код 1С: 147632.",
    "images": [],
    "specs": []
  },
  {
    "id": "147629",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед флісовий 130x180см \"Зимовий Твід\" (VERSAILLES)",
    "price": 339.0,
    "desc": "Артикул: VS-BF-2600BS. Код 1С: 147629.",
    "images": [],
    "specs": []
  },
  {
    "id": "147635",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 200х220см \"Затишна Ідилія\" (VERSAILLES)",
    "price": 1133.0,
    "desc": "Артикул: VS-BF-4400MS. Код 1С: 147635.",
    "images": [],
    "specs": []
  },
  {
    "id": "147638",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 200х220см \"Туманний Ранок\" (VERSAILLES)",
    "price": 1133.0,
    "desc": "Артикул: VS-BF-4400GS. Код 1С: 147638.",
    "images": [],
    "specs": []
  },
  {
    "id": "147634",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 150х200см \"Затишна Ідилія\" (VERSAILLES)",
    "price": 807.0,
    "desc": "Артикул: VS-BF-3000MS. Код 1С: 147634.",
    "images": [],
    "specs": []
  },
  {
    "id": "147636",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 150х200см \"Туманний Ранок\" (VERSAILLES)",
    "price": 807.0,
    "desc": "Артикул: VS-BF-3000GS. Код 1С: 147636.",
    "images": [],
    "specs": []
  },
  {
    "id": "147639",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 150х200см \"М'яка Історія\" (VERSAILLES)",
    "price": 807.0,
    "desc": "Артикул: VS-BF-3000PS. Код 1С: 147639.",
    "images": [],
    "specs": []
  },
  {
    "id": "147640",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 200х220см \"М'яка Історія\" (VERSAILLES)",
    "price": 1133.0,
    "desc": "Артикул: VS-BF-4400PS. Код 1С: 147640.",
    "images": [],
    "specs": []
  },
  {
    "id": "147641",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 150х200см \"Ванільна смужка\" (VERSAILLES)",
    "price": 807.0,
    "desc": "Артикул: VS-BF-3000VS. Код 1С: 147641.",
    "images": [],
    "specs": []
  },
  {
    "id": "147642",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед смугастий 200х220см \"Ванільна смужка\" (VERSAILLES)",
    "price": 1133.0,
    "desc": "Артикул: VS-BF-4400VS. Код 1С: 147642.",
    "images": [],
    "specs": []
  },
  {
    "id": "147963",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 150х200см \"Молочна пінка\" (VERSAILLES)",
    "price": 986.0,
    "desc": "Артикул: VS-PR-3000M. Код 1С: 147963.",
    "images": [
      "assets/images/products/147963.jpg"
    ],
    "specs": []
  },
  {
    "id": "147967",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 200х220см \"Молочна пінка\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PR-4400M. Код 1С: 147967.",
    "images": [
      "assets/images/products/147967.jpg"
    ],
    "specs": []
  },
  {
    "id": "147968",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 200х220см \"Сонячний фрукт\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PR-4400F. Код 1С: 147968.",
    "images": [
      "assets/images/products/147968.jpg"
    ],
    "specs": []
  },
  {
    "id": "147964",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 150х200см \"Сонячний фрукт\" (VERSAILLES)",
    "price": 986.0,
    "desc": "Артикул: VS-PR-3000F. Код 1С: 147964.",
    "images": [
      "assets/images/products/147964.jpg"
    ],
    "specs": []
  },
  {
    "id": "147966",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 150х200см \"Атлантида\" (VERSAILLES)",
    "price": 986.0,
    "desc": "Артикул: VS-PR-3000A. Код 1С: 147966.",
    "images": [
      "assets/images/products/147966.jpg"
    ],
    "specs": []
  },
  {
    "id": "147969",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 200х220см \"Насичений графіт\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PR-4400G. Код 1С: 147969.",
    "images": [
      "assets/images/products/147969.jpg"
    ],
    "specs": []
  },
  {
    "id": "147970",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 200х220см \"Атлантида\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PR-4400A. Код 1С: 147970.",
    "images": [
      "assets/images/products/147970.jpg"
    ],
    "specs": []
  },
  {
    "id": "147965",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Рельєфний 150х200см \"Насичений графіт\" (VERSAILLES)",
    "price": 986.0,
    "desc": "Артикул: VS-PR-3000G. Код 1С: 147965.",
    "images": [
      "assets/images/products/147965.jpg"
    ],
    "specs": []
  },
  {
    "id": "147957",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 150х200см \"Зимовий ранок\" (VERSAILLES)",
    "price": 1146.0,
    "desc": "Артикул: VS-SP-3000W. Код 1С: 147957.",
    "images": [
      "assets/images/products/147957.jpg"
    ],
    "specs": []
  },
  {
    "id": "147960",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 200х220см \"Зимовий ранок\" (VERSAILLES)",
    "price": 1545.0,
    "desc": "Артикул: VS-SP-4400W. Код 1С: 147960.",
    "images": [
      "assets/images/products/147960.jpg"
    ],
    "specs": []
  },
  {
    "id": "147971",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Коси 150х200см \"Капучіно\" (VERSAILLES)",
    "price": 959.0,
    "desc": "Артикул: VS-PB-3000C. Код 1С: 147971.",
    "images": [
      "assets/images/products/147971.jpg"
    ],
    "specs": []
  },
  {
    "id": "147959",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 150х200см \"Бузковий травень\" (VERSAILLES)",
    "price": 1146.0,
    "desc": "Артикул: VS-SP-3000V. Код 1С: 147959.",
    "images": [
      "assets/images/products/147959.jpg"
    ],
    "specs": []
  },
  {
    "id": "147962",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 200х220см \"Бузковий травень\" (VERSAILLES)",
    "price": 1545.0,
    "desc": "Артикул: VS-SP-4400V. Код 1С: 147962.",
    "images": [
      "assets/images/products/147962.jpg"
    ],
    "specs": []
  },
  {
    "id": "147958",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 150х200см \"Зелень весни\" (VERSAILLES)",
    "price": 1146.0,
    "desc": "Артикул: VS-SP-3000G. Код 1С: 147958.",
    "images": [
      "assets/images/products/147958.jpg"
    ],
    "specs": []
  },
  {
    "id": "149099",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Електроплед максі 180*130см тем.сірий VERSAILLES",
    "price": 2868.0,
    "desc": "Артикул: VS-BE-2309Dg. Код 1С: 149099.",
    "images": [
      "assets/images/products/149099.jpg"
    ],
    "specs": []
  },
  {
    "id": "149101",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Електроплед 180*130см мокко VERSAILLES",
    "price": 2728.0,
    "desc": "Артикул: VS-BE-2303Br. Код 1С: 149101.",
    "images": [
      "assets/images/products/149101.jpg"
    ],
    "specs": []
  },
  {
    "id": "149100",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Електроплед максі 160*120см сірий VERSAILLES",
    "price": 2667.0,
    "desc": "Артикул: VS-BE-1909Gr. Код 1С: 149100.",
    "images": [
      "assets/images/products/149100.jpg"
    ],
    "specs": []
  },
  {
    "id": "147974",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Коси 200х220см \"Айворі\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PB-4400I. Код 1С: 147974.",
    "images": [
      "assets/images/products/147974.jpg"
    ],
    "specs": []
  },
  {
    "id": "152369",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра деміcезонна Comfort 170х205, VERSAILLES                             Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 250 г/м2 Україна",
    "price": 900.0,
    "desc": "Артикул: VS-B1-2.0. Код 1С: 152369.",
    "images": [
      "assets/images/products/152369.jpg"
    ],
    "specs": []
  },
  {
    "id": "152370",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра деміcезонна Comfort 200х220, VERSAILLES                             Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 250 г/м2 Україна",
    "price": 1121.0,
    "desc": "Артикул: VS-B1-2.5. Код 1С: 152370.",
    "images": [
      "assets/images/products/152370.jpg"
    ],
    "specs": []
  },
  {
    "id": "149102",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Електроплед 160*120см сірий VERSAILLES",
    "price": 2527.0,
    "desc": "Артикул: VS-BE-1903Gr. Код 1С: 149102.",
    "images": [
      "assets/images/products/149102.jpg"
    ],
    "specs": []
  },
  {
    "id": "152371",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра зимова Arctic Luxe 140х205, VERSAILLES                                                                       Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 300 г/м2 Україна",
    "price": 914.0,
    "desc": "Артикул: VS-B2-1.5. Код 1С: 152371.",
    "images": [
      "assets/images/products/152371.jpg"
    ],
    "specs": []
  },
  {
    "id": "152368",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра деміcезонна Comfort 140х205, VERSAILLES.                            Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 250 г/м2 Україна",
    "price": 755.0,
    "desc": "Артикул: VS-B1-1.5. Код 1С: 152368.",
    "images": [
      "assets/images/products/152368.jpg"
    ],
    "specs": []
  },
  {
    "id": "152372",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра зимова Arctic Luxe 170х205, VERSAILLES                                  Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 300 г/м2 Україна",
    "price": 1066.0,
    "desc": "Артикул: VS-B2-2.0. Код 1С: 152372.",
    "images": [
      "assets/images/products/152372.jpg"
    ],
    "specs": []
  },
  {
    "id": "152373",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Ковдра зимова Arctic Luxe 200х220, VERSAILLES                                 Антиалергійне 100% силіконізоване поліефірне волокно (полотно)\nщільність 300 г/м2 Україна",
    "price": 1326.0,
    "desc": "Артикул: VS-B2-2.5. Код 1С: 152373.",
    "images": [
      "assets/images/products/152373.jpg"
    ],
    "specs": []
  },
  {
    "id": "147973",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Коси 200х220см \"Капучіно\" (VERSAILLES)",
    "price": 1279.0,
    "desc": "Артикул: VS-PB-4400C. Код 1С: 147973.",
    "images": [
      "assets/images/products/147973.jpg"
    ],
    "specs": []
  },
  {
    "id": "147961",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Шарпей 200х220см \"Зелень весни\" (VERSAILLES)",
    "price": 1545.0,
    "desc": "Артикул: VS-SP-4400G. Код 1С: 147961.",
    "images": [
      "assets/images/products/147961.jpg"
    ],
    "specs": []
  },
  {
    "id": "146057",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 56x36см з ефектом пам'яті Aloe Vera, VERSAILLES",
    "price": 1298.0,
    "desc": "Артикул: VS-P-5636. Код 1С: 146057.",
    "images": [
      "assets/images/products/146057.jpg"
    ],
    "specs": []
  },
  {
    "id": "150540",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х12см з ефектом пам'яті Rose, VERSAILLES",
    "price": 1224.0,
    "desc": "Артикул: VS-P-6041 . Код 1С: 150540.",
    "images": [],
    "specs": []
  },
  {
    "id": "147972",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Плед Коси 150х200см \"Айворі\" (VERSAILLES)",
    "price": 959.0,
    "desc": "Артикул: VS-PB-3000I. Код 1С: 147972.",
    "images": [
      "assets/images/products/147972.jpg"
    ],
    "specs": []
  },
  {
    "id": "150542",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х12см з ефектом пам'яті Eucalyptus, VERSAILLES",
    "price": 1224.0,
    "desc": "Артикул: VS-P-6043 . Код 1С: 150542.",
    "images": [],
    "specs": []
  },
  {
    "id": "150543",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х12/9см з ефектом пам'яті AROMA CONTOUR Aloe, VERSAILLES",
    "price": 1356.0,
    "desc": "Артикул: VS-P-6044 . Код 1С: 150543.",
    "images": [],
    "specs": []
  },
  {
    "id": "150541",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х12см з ефектом пам'яті Sakura, VERSAILLES",
    "price": 1224.0,
    "desc": "Артикул: VS-P-6042 . Код 1С: 150541.",
    "images": [],
    "specs": []
  },
  {
    "id": "146058",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40см з ефектом пам'яті Lavender, VERSAILLES",
    "price": 1224.0,
    "desc": "Артикул: VS-P-6040. Код 1С: 146058.",
    "images": [
      "assets/images/products/146058.jpg"
    ],
    "specs": []
  },
  {
    "id": "150544",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х12/9см з ефектом пам'яті AROMA CONTOUR Lavender, VERSAILLES",
    "price": 1356.0,
    "desc": "Артикул: VS-P-6045 . Код 1С: 150544.",
    "images": [],
    "specs": []
  },
  {
    "id": "150546",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 60x40х13см з ефектом пам'яті MEDIUM, VERSAILLES",
    "price": 1419.0,
    "desc": "Артикул: VS-P-6046 . Код 1С: 150546.",
    "images": [],
    "specs": []
  },
  {
    "id": "160432",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 150х200см, рожеве VERSAILLES",
    "price": 1162.0,
    "desc": "Артикул: VS-СV-3000PN. Код 1С: 160432.",
    "images": [
      "assets/images/products/160432.jpg"
    ],
    "specs": []
  },
  {
    "id": "160430",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 150х200см, зелене VERSAILLES",
    "price": 1162.0,
    "desc": "Артикул: VS-СV-3000GN. Код 1С: 160430.",
    "images": [
      "assets/images/products/160430.jpg"
    ],
    "specs": []
  },
  {
    "id": "160435",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 200х220см, рожеве VERSAILLES",
    "price": 1631.0,
    "desc": "Артикул: VS-СV-4400PN. Код 1С: 160435.",
    "images": [
      "assets/images/products/160435.jpg"
    ],
    "specs": []
  },
  {
    "id": "160434",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 200х220см, блакитне VERSAILLES",
    "price": 1631.0,
    "desc": "Артикул: VS-СV-4400BL. Код 1С: 160434.",
    "images": [
      "assets/images/products/160434.jpg"
    ],
    "specs": []
  },
  {
    "id": "160433",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 200х220см, зелене VERSAILLES",
    "price": 1631.0,
    "desc": "Артикул: VS-СV-4400GN. Код 1С: 160433.",
    "images": [
      "assets/images/products/160433.jpg"
    ],
    "specs": []
  },
  {
    "id": "160431",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Покривало з ефектом охолодження 150х200см, блакитне VERSAILLES",
    "price": 1162.0,
    "desc": "Артикул: VS-СV-3000BL. Код 1С: 160431.",
    "images": [
      "assets/images/products/160431.jpg"
    ],
    "specs": []
  },
  {
    "id": "150545",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 55x45х10см з ефектом пам'яті BUTTERFLY, VERSAILLES",
    "price": 1230.0,
    "desc": "Артикул: VS-P-5545 . Код 1С: 150545.",
    "images": [
      "assets/images/products/150545.jpg"
    ],
    "specs": []
  },
  {
    "id": "146060",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 47x30см з ефектом пам'яті Bamboo, VERSAILLES",
    "price": 699.0,
    "desc": "Артикул: VS-P-4730. Код 1С: 146060.",
    "images": [
      "assets/images/products/146060.jpg"
    ],
    "specs": []
  },
  {
    "id": "146059",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 55x35см з ефектом пам'яті Spectrum, VERSAILLES",
    "price": 974.0,
    "desc": "Артикул: VS-P-5535. Код 1С: 146059.",
    "images": [
      "assets/images/products/146059.jpg"
    ],
    "specs": []
  },
  {
    "id": "146061",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 50x30см з ефектом пам'яті Gel Contour, VERSAILLES",
    "price": 1199.0,
    "desc": "Артикул: VS-P-5030. Код 1С: 146061.",
    "images": [
      "assets/images/products/146061.jpg"
    ],
    "specs": []
  },
  {
    "id": "149707",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка 50х70см Sleep Well, VERSAILLES\nНаповнювач поліефірне силіконізоване волокно DoubleAir 650 грам",
    "price": 360.0,
    "desc": "Артикул: VS-P-7050. Код 1С: 149707.",
    "images": [
      "assets/images/products/149707.jpg"
    ],
    "specs": []
  },
  {
    "id": "149706",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Подушка на блискавці 50х70см Sleep Cloud, VERSAILLES\nНа блискавці, з внутрішнім коконом.\nНаповнювач поліефірне силіконізоване волокно DoubleAir 650 грам",
    "price": 523.0,
    "desc": "Артикул: VS-P-5070. Код 1С: 149706.",
    "images": [
      "assets/images/products/149706.jpg"
    ],
    "specs": []
  },
  {
    "id": "147990",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Горнятко кави\" 100х137см, WERK",
    "price": 146.0,
    "desc": "Артикул: WK-30005. Код 1С: 147990.",
    "images": [
      "assets/images/products/147990.jpg"
    ],
    "specs": []
  },
  {
    "id": "147988",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Зелена мозаїка\" 100х137см, WERK",
    "price": 146.0,
    "desc": "Артикул: WK-30003. Код 1С: 147988.",
    "images": [
      "assets/images/products/147988.jpg"
    ],
    "specs": []
  },
  {
    "id": "147989",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Соняшники\" 100х137см, WERK",
    "price": 146.0,
    "desc": "Артикул: WK-30004. Код 1С: 147989.",
    "images": [
      "assets/images/products/147989.jpg"
    ],
    "specs": []
  },
  {
    "id": "126290",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Мандри океану WERK, PEVA 180×180 (без кілець)",
    "price": 217.0,
    "desc": "Артикул: WK-10001. Код 1С: 126290.",
    "images": [
      "assets/images/products/126290.jpg"
    ],
    "specs": []
  },
  {
    "id": "147987",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Бабусин затишок\" 100х137см, WERK",
    "price": 146.0,
    "desc": "Артикул: WK-30002. Код 1С: 147987.",
    "images": [
      "assets/images/products/147987.jpg"
    ],
    "specs": []
  },
  {
    "id": "147991",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Орнамент\" 120х150см, WERK",
    "price": 178.0,
    "desc": "Артикул: WK-30006. Код 1С: 147991.",
    "images": [
      "assets/images/products/147991.jpg"
    ],
    "specs": []
  },
  {
    "id": "146987",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Осіння пора\" 100х137см, WERK",
    "price": 146.0,
    "desc": "Артикул: WK-30001. Код 1С: 146987.",
    "images": [
      "assets/images/products/146987.jpg"
    ],
    "specs": []
  },
  {
    "id": "147992",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Лавандовий букет\" 120х150см, WERK",
    "price": 178.0,
    "desc": "Артикул: WK-30007. Код 1С: 147992.",
    "images": [
      "assets/images/products/147992.jpg"
    ],
    "specs": []
  },
  {
    "id": "126294",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Стрімка злива WERK, PEVA 180×180 (без кілець)",
    "price": 217.0,
    "desc": "Артикул: WK-10003. Код 1С: 126294.",
    "images": [
      "assets/images/products/126294.jpg"
    ],
    "specs": []
  },
  {
    "id": "147993",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Лимони\" 120х150см, WERK",
    "price": 178.0,
    "desc": "Артикул: WK-30008. Код 1С: 147993.",
    "images": [
      "assets/images/products/147993.jpg"
    ],
    "specs": []
  },
  {
    "id": "147994",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Кольорова клітинка\" 120х150см, WERK",
    "price": 178.0,
    "desc": "Артикул: WK-30009. Код 1С: 147994.",
    "images": [
      "assets/images/products/147994.jpg"
    ],
    "specs": []
  },
  {
    "id": "147995",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Скатертина з ПВХ \"Різдвяний настрій\" 120х150см, WERK",
    "price": 178.0,
    "desc": "Артикул: WK-30010. Код 1С: 147995.",
    "images": [
      "assets/images/products/147995.jpg"
    ],
    "specs": []
  },
  {
    "id": "126292",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Осіння позолота WERK, PEVA 180×180 (без кілець)",
    "price": 217.0,
    "desc": "Артикул: WK-10002. Код 1С: 126292.",
    "images": [
      "assets/images/products/126292.jpg"
    ],
    "specs": []
  },
  {
    "id": "126296",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Вітраж PEVA 180x180 (з кільцями)WERK",
    "price": 232.0,
    "desc": "Артикул: WK-10004. Код 1С: 126296.",
    "images": [
      "assets/images/products/126296.jpg"
    ],
    "specs": []
  },
  {
    "id": "126298",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Віра в любов  PEVA 180x180 (з кільцями)WERK",
    "price": 232.0,
    "desc": "Артикул: WK-10005. Код 1С: 126298.",
    "images": [
      "assets/images/products/126298.jpg"
    ],
    "specs": []
  },
  {
    "id": "126317",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Гірський водоспад PEVA 180x180 (з кільцями)WERK",
    "price": 232.0,
    "desc": "Артикул: WK-10008. Код 1С: 126317.",
    "images": [
      "assets/images/products/126317.jpg"
    ],
    "specs": []
  },
  {
    "id": "147982",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Гарний настрій  PEVA 180x180 (з кільцями)WERK",
    "price": 243.0,
    "desc": "Артикул: WK-10021. Код 1С: 147982.",
    "images": [
      "assets/images/products/147982.jpg"
    ],
    "specs": []
  },
  {
    "id": "126327",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Французький стиль PEVA 180x180 (з кільцями)WERK",
    "price": 232.0,
    "desc": "Артикул: WK-10012. Код 1С: 126327.",
    "images": [
      "assets/images/products/126327.jpg"
    ],
    "specs": []
  },
  {
    "id": "126315",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Весела геометрія WERK, PEVA 180×180 (з кільцями)",
    "price": 243.0,
    "desc": "Артикул: WK-10007. Код 1С: 126315.",
    "images": [
      "assets/images/products/126315.jpg"
    ],
    "specs": []
  },
  {
    "id": "147979",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Тіфані PEVA 180x180 (без кілець) WERK",
    "price": 216.0,
    "desc": "Артикул: WK-10018. Код 1С: 147979.",
    "images": [
      "assets/images/products/147979.jpg"
    ],
    "specs": []
  },
  {
    "id": "147981",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Краплі дощу PEVA 180x180 (з кільцями)WERK",
    "price": 243.0,
    "desc": "Артикул: WK-10020. Код 1С: 147981.",
    "images": [
      "assets/images/products/147981.jpg"
    ],
    "specs": []
  },
  {
    "id": "126302",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Морський танок WERK, PEVA 180×180 (з кільцями)",
    "price": 243.0,
    "desc": "Артикул: WK-10006. Код 1С: 126302.",
    "images": [
      "assets/images/products/126302.jpg"
    ],
    "specs": []
  },
  {
    "id": "126322",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Віртуозний ритм WERK, Поліестер 180×180 (без кілець)",
    "price": 507.0,
    "desc": "Артикул: WK-10010. Код 1С: 126322.",
    "images": [
      "assets/images/products/126322.jpg"
    ],
    "specs": []
  },
  {
    "id": "126325",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Візерунки океану WERK, Поліестер 180×180 (без кілець)",
    "price": 507.0,
    "desc": "Артикул: WK-10011. Код 1С: 126325.",
    "images": [
      "assets/images/products/126325.jpg"
    ],
    "specs": []
  },
  {
    "id": "126329",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Квіти в ночі PEVA 180x180 (з кільцями)WERK",
    "price": 232.0,
    "desc": "Артикул: WK-10013. Код 1С: 126329.",
    "images": [
      "assets/images/products/126329.jpg"
    ],
    "specs": []
  },
  {
    "id": "126331",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Весняні мотиви WERK, Поліестер 180×180 (з кільцями)",
    "price": 535.0,
    "desc": "Артикул: WK-10014. Код 1С: 126331.",
    "images": [
      "assets/images/products/126331.jpg"
    ],
    "specs": []
  },
  {
    "id": "154721",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Комплект для ванної кімнати Пісочний шторка PEVA (180*180см) та килимок (40*60см)WERK",
    "price": 514.0,
    "desc": "Артикул: WK-12003. Код 1С: 154721.",
    "images": [],
    "specs": []
  },
  {
    "id": "126320",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Цікава арифметика WERK, Поліестер 180×180 (без кілець)",
    "price": 507.0,
    "desc": "Артикул: WK-10009. Код 1С: 126320.",
    "images": [
      "assets/images/products/126320.jpg"
    ],
    "specs": []
  },
  {
    "id": "126334",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Сонячна симетрія WERK, Поліестер 180×180 (з кільцями)",
    "price": 535.0,
    "desc": "Артикул: WK-10015. Код 1С: 126334.",
    "images": [
      "assets/images/products/126334.jpg"
    ],
    "specs": []
  },
  {
    "id": "147980",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Градієнт PEVA 180x180 (з кільцями) WERK",
    "price": 243.0,
    "desc": "Артикул: WK-10019. Код 1С: 147980.",
    "images": [
      "assets/images/products/147980.jpg"
    ],
    "specs": []
  },
  {
    "id": "154723",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Комплект для ванної кімнати Зелений шторка PEVA (180*180см) та килимок (40*60см)WERK",
    "price": 514.0,
    "desc": "Артикул: WK-12004. Код 1С: 154723.",
    "images": [],
    "specs": []
  },
  {
    "id": "147978",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Квітковий ескіз PEVA 180x180 (без кілець) WERK",
    "price": 216.0,
    "desc": "Артикул: WK-10017. Код 1С: 147978.",
    "images": [
      "assets/images/products/147978.jpg"
    ],
    "specs": []
  },
  {
    "id": "142540",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Карниз для ванної з нержавіючої сталі 110-200см, WERK",
    "price": 318.0,
    "desc": "Артикул: WK-11002. Код 1С: 142540.",
    "images": [],
    "specs": []
  },
  {
    "id": "148000",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Комплект для ванної кімнати Сірий шторка PEVA (180х180см) та килимок (40х60см)WERK",
    "price": 514.0,
    "desc": "Артикул: WK-12002. Код 1С: 148000.",
    "images": [
      "assets/images/products/148000.jpg"
    ],
    "specs": []
  },
  {
    "id": "126336",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Карниз для ванної білий 110-200см, WERK",
    "price": 299.0,
    "desc": "Артикул: WK-11001. Код 1С: 126336.",
    "images": [],
    "specs": []
  },
  {
    "id": "147286",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Комплект для ванної кімнати Синій шторка PEVA (180х180см) та килимок (40х60см)WERK",
    "price": 514.0,
    "desc": "Артикул: WK-12001. Код 1С: 147286.",
    "images": [
      "assets/images/products/147286.jpg"
    ],
    "specs": []
  },
  {
    "id": "147977",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Планетарій PEVA 180x180 (без кілець) WERK",
    "price": 216.0,
    "desc": "Артикул: WK-10016. Код 1С: 147977.",
    "images": [
      "assets/images/products/147977.jpg"
    ],
    "specs": []
  },
  {
    "id": "144705",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова WD05 з віджимом і сухою запаскою, 110см WERK. Подвійник ролик, алюмінієва виделка, 110 см телескопічна ручка (фарбований метал). Запаска суха 27*5.5см",
    "price": 339.0,
    "desc": "Артикул: WD05. Код 1С: 144705.",
    "images": [
      "assets/images/products/144705.jpg"
    ],
    "specs": []
  },
  {
    "id": "144703",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова зелена WD03 з подвійнім віджимом, 110см WERK. Подвійник ролик, пластикова виделка, 110 см телескопічна ручка (фарбований метал). Запаска 27*5.5см",
    "price": 376.0,
    "desc": "Артикул: WD03. Код 1С: 144703.",
    "images": [
      "assets/images/products/144703.jpg"
    ],
    "specs": []
  },
  {
    "id": "117112",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова 27 см, з подвійнім віджимом, телескопічною ручкою 110 см. Подвійний ролик, пластикова основа WERK",
    "price": 467.0,
    "desc": "Артикул: WD01. Код 1С: 117112.",
    "images": [
      "assets/images/products/117112.jpg"
    ],
    "specs": []
  },
  {
    "id": "147984",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Соти Поліестер 180x180 (без кілець)WERK",
    "price": 507.0,
    "desc": "Артикул: WK-10023. Код 1С: 147984.",
    "images": [
      "assets/images/products/147984.jpg"
    ],
    "specs": []
  },
  {
    "id": "147983",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної М'ятна троянда Поліестер 180x180 (без кілець)WERK",
    "price": 507.0,
    "desc": "Артикул: WK-10022. Код 1С: 147983.",
    "images": [
      "assets/images/products/147983.jpg"
    ],
    "specs": []
  },
  {
    "id": "121957",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова WDS-01 з подвійнім віджимом, 110см Телескопічна ручка, Ø25/22мм, розмір пала: 27*5.5см. Подвійний ролик. Пластикова вилка. WERK",
    "price": 469.0,
    "desc": "Артикул: WDS-01. Код 1С: 121957.",
    "images": [
      "assets/images/products/121957.jpg"
    ],
    "specs": []
  },
  {
    "id": "147985",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Сухоцвіти Поліестер 180x180 (з кільцями)WERK",
    "price": 535.0,
    "desc": "Артикул: WK-10024. Код 1С: 147985.",
    "images": [
      "assets/images/products/147985.jpg"
    ],
    "specs": []
  },
  {
    "id": "144704",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова оранжева WD02 з подвійнім віджимом, 110см WERK.Подвійник ролик, пластикова виделка, 110 см телескопічна ручка (фарбований метал). Запаска 27*5.5см",
    "price": 409.0,
    "desc": "Артикул: WD02. Код 1С: 144704.",
    "images": [
      "assets/images/products/144704.jpg"
    ],
    "specs": []
  },
  {
    "id": "121955",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова WDS-04 з подвійнім віджимом, 110см Телескопічна ручка, Ø25/22мм, розмір пала: 27*5.5см. Подвійний ролик. Алюмінієва вилка.WERK",
    "price": 511.0,
    "desc": "Артикул: WDS-04. Код 1С: 121955.",
    "images": [
      "assets/images/products/121955.jpg"
    ],
    "specs": []
  },
  {
    "id": "144706",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Насадка запасна для швабри WRDS-02 WERK.  Запаска до WD02, WD03, WD05.  Розмір 27*5,5 см",
    "price": 126.0,
    "desc": "Артикул: WRDS-02. Код 1С: 144706.",
    "images": [
      "assets/images/products/144706.jpg"
    ],
    "specs": []
  },
  {
    "id": "137994",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Насадка запасна для швабри WPM-203 WERK.  Розмір 27*5,5 см",
    "price": 149.0,
    "desc": "Артикул: WRPM-203. Код 1С: 137994.",
    "images": [
      "assets/images/products/137994.jpg"
    ],
    "specs": []
  },
  {
    "id": "147986",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Шторка для ванної Павутинка Поліестер 180x180 (з кільцями)WERK",
    "price": 535.0,
    "desc": "Артикул: WK-10025. Код 1С: 147986.",
    "images": [
      "assets/images/products/147986.jpg"
    ],
    "specs": []
  },
  {
    "id": "121965",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Насадка запасна для швабри WDS-04 та WDS-01 розмір 27x6.3x4.2см WERK",
    "price": 152.0,
    "desc": "Артикул: WRDS-04. Код 1С: 121965.",
    "images": [
      "assets/images/products/121965.jpg"
    ],
    "specs": []
  },
  {
    "id": "121953",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-натирач для підлоги WDS-1208 з запаскою із мікрофібри, Металева телескопічна ручка 70-120 см, мікрофі WERK",
    "price": 305.0,
    "desc": "Артикул: WDS-1208. Код 1С: 121953.",
    "images": [
      "assets/images/products/121953.jpg"
    ],
    "specs": []
  },
  {
    "id": "137742",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова з віджимом, 120см\nТелескопічна ручка, Ø25/22мм, розмір пала: 27*5.5см. Металева вилка. WERK",
    "price": 421.0,
    "desc": "Артикул: WPM-203. Код 1С: 137742.",
    "images": [
      "assets/images/products/137742.jpg"
    ],
    "specs": []
  },
  {
    "id": "142706",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-натирач для підлоги 2 в 1 (двосторння насадка)WF02C WERK",
    "price": 357.0,
    "desc": "Артикул: WF02C. Код 1С: 142706.",
    "images": [
      "assets/images/products/142706.jpg"
    ],
    "specs": []
  },
  {
    "id": "121961",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска \"локшина\" до швабри WDS-1208, 100% поліестер, Розмір: 42x13см. Вага: 80±5 гр WERK",
    "price": 160.0,
    "desc": "Артикул: WRDS-02L. Код 1С: 121961.",
    "images": [
      "assets/images/products/121961.jpg"
    ],
    "specs": []
  },
  {
    "id": "143772",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-натирач для підлоги WF01B з запаскою із мікрофібри WERK",
    "price": 253.0,
    "desc": "Артикул: WF01B. Код 1С: 143772.",
    "images": [
      "assets/images/products/143772.jpg"
    ],
    "specs": []
  },
  {
    "id": "143771",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-натирач для підлоги WF01A з запаскою \"локшина\" WERK",
    "price": 239.0,
    "desc": "Артикул: WF01A. Код 1С: 143771.",
    "images": [
      "assets/images/products/143771.jpg"
    ],
    "specs": []
  },
  {
    "id": "137992",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра кругла з мікрофіброю WERK\nМеталева ручка 120см, запаска 150гр",
    "price": 405.0,
    "desc": "Артикул: WCY-450. Код 1С: 137992.",
    "images": [
      "assets/images/products/137992.jpg"
    ],
    "specs": []
  },
  {
    "id": "142707",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска 2 в 1 до швабри WF02C WERK,розмір 45*58*30cм",
    "price": 193.0,
    "desc": "Артикул: WRFS11. Код 1С: 142707.",
    "images": [
      "assets/images/products/142707.jpg"
    ],
    "specs": []
  },
  {
    "id": "143774",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска із мікрофібри до швабри WF01B WERK",
    "price": 97.0,
    "desc": "Артикул: WRF01B. Код 1С: 143774.",
    "images": [
      "assets/images/products/143774.jpg"
    ],
    "specs": []
  },
  {
    "id": "143773",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска \"локшина\"до швабри WF01A WERK,розмір 45*58*30cм",
    "price": 112.0,
    "desc": "Артикул: WRF01A. Код 1С: 143773.",
    "images": [
      "assets/images/products/143773.jpg"
    ],
    "specs": []
  },
  {
    "id": "137744",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра метелик з віджимом, 120см WERK\nТелескопічна металева ручка, Ø25/22мм, розмір пала: 27*5.5см.Пластикова вилка. WERK",
    "price": 412.0,
    "desc": "Артикул: WPM-213. Код 1С: 137744.",
    "images": [
      "assets/images/products/137744.jpg"
    ],
    "specs": []
  },
  {
    "id": "137990",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра з розпилювачем з запаскою із мікрофібри WERK\nРучка з нержавіючої сталі довжиною 126см, Ø22мм, запаска з мікрофібри, ємність для води 350мл.",
    "price": 768.0,
    "desc": "Артикул: WCY-400. Код 1С: 137990.",
    "images": [
      "assets/images/products/137990.jpg"
    ],
    "specs": []
  },
  {
    "id": "144895",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска до круглої швабри WRCY-450 (WERK)",
    "price": 256.0,
    "desc": "Артикул: WRCY-450. Код 1С: 144895.",
    "images": [
      "assets/images/products/144895.jpg"
    ],
    "specs": []
  },
  {
    "id": "121949",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-моп стрічкова , довжина ручки: 120 см. Вага: 200 гр",
    "price": 283.0,
    "desc": "Артикул: WDS-1904. Код 1С: 121949.",
    "images": [
      "assets/images/products/121949.jpg"
    ],
    "specs": []
  },
  {
    "id": "117558",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра \"Вільні і сухі руки\" довжина 125 см, запаска 35*11см Важливо- при відватаженні мають співпадати дати партії виробництва",
    "price": 505.0,
    "desc": "Артикул: WHF6 . Код 1С: 117558.",
    "images": [
      "assets/images/products/117558.jpg"
    ],
    "specs": []
  },
  {
    "id": "121959",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска до швабри-моп WDS-1904 . Вага: 200 гр",
    "price": 146.0,
    "desc": "Артикул: WRDS-19. Код 1С: 121959.",
    "images": [
      "assets/images/products/121959.jpg"
    ],
    "specs": []
  },
  {
    "id": "117562",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска із мікрофібри WRFS07 к WRF6/WHF6 (WERK) Важливо- при відватаженні мають співпадати дати партії виробництва.35*11см",
    "price": 80.0,
    "desc": "Артикул: WRFS07. Код 1С: 117562.",
    "images": [
      "assets/images/products/117562.jpg"
    ],
    "specs": []
  },
  {
    "id": "144897",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска до швабри з розпилювачем WRCY-400 (WERK)",
    "price": 109.0,
    "desc": "Артикул: WRCY-400. Код 1С: 144897.",
    "images": [
      "assets/images/products/144897.jpg"
    ],
    "specs": []
  },
  {
    "id": "137996",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Насадка запасна для швабри WPM-213 WERK,довжина 27 см. В пакеті",
    "price": 116.0,
    "desc": "Артикул: WRPM-213. Код 1С: 137996.",
    "images": [
      "assets/images/products/137996.jpg"
    ],
    "specs": []
  },
  {
    "id": "133156",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання відро 12л + швабра 300 ZAMBAK",
    "price": 804.0,
    "desc": "Артикул: 300. Код 1С: 133156.",
    "images": [
      "assets/images/products/133156.jpg"
    ],
    "specs": []
  },
  {
    "id": "127848",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра-пильник 450 ZAMBAK",
    "price": 281.0,
    "desc": "Артикул: 450. Код 1С: 127848.",
    "images": [
      "assets/images/products/127848.jpg"
    ],
    "specs": []
  },
  {
    "id": "137988",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання кругла швабра з відром, віджимом та запаскою WERK",
    "price": 1024.0,
    "desc": "Артикул: WCY-360. Код 1С: 137988.",
    "images": [
      "assets/images/products/137988.jpg"
    ],
    "specs": []
  },
  {
    "id": "143279",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска до набору для прибирання WRCY-360 (WERK)\nДля набору WCY-360 та WX01",
    "price": 72.0,
    "desc": "Артикул: WRCY-360. Код 1С: 143279.",
    "images": [
      "assets/images/products/143279.jpg"
    ],
    "specs": []
  },
  {
    "id": "121945",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання WDS-342 квадратне відро, віджимна швабра та запаска (WERK),ручка швабра 120 см(4секції),пад шв.32*11см,запаска 32,5*11,5см,відро 6,5л(19,5*16,5*35,5см)+1 додаткова запаска",
    "price": 1102.0,
    "desc": "Артикул: WDS-342. Код 1С: 121945.",
    "images": [
      "assets/images/products/121945.jpg"
    ],
    "specs": []
  },
  {
    "id": "121963",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска із мікрофібри до швабри WDS-1208, 100% поліестер, Розмір: 43x13см. Вага: 55±5 гр WERK",
    "price": 119.0,
    "desc": "Артикул: WRDS-03M. Код 1С: 121963.",
    "images": [
      "assets/images/products/121963.jpg"
    ],
    "specs": []
  },
  {
    "id": "135409",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання відро + швабра з віджимом 355 ZAMBAK",
    "price": 1013.0,
    "desc": "Артикул: 355. Код 1С: 135409.",
    "images": [
      "assets/images/products/135409.jpg"
    ],
    "specs": []
  },
  {
    "id": "144896",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска до набору для прибирання WRCY-351 (WERK),32,5*11,5см",
    "price": 55.0,
    "desc": "Артикул: WRCY-351. Код 1С: 144896.",
    "images": [
      "assets/images/products/144896.jpg"
    ],
    "specs": []
  },
  {
    "id": "126730",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска із мікрофібри  (WERK) до швабри з набору  WDS-342,мікрофібра 31.5X12см",
    "price": 134.0,
    "desc": "Артикул: WRDS-342. Код 1С: 126730.",
    "images": [
      "assets/images/products/126730.jpg"
    ],
    "specs": []
  },
  {
    "id": "127207",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра змінна з мікрофібри 279 ZAMBAK",
    "price": 334.0,
    "desc": "Артикул: 279. Код 1С: 127207.",
    "images": [
      "assets/images/products/127207.jpg"
    ],
    "specs": []
  },
  {
    "id": "112063",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочисник  20см довжина 76см",
    "price": 269.0,
    "desc": "Артикул: WDS-1505. Код 1С: 112063.",
    "images": [
      "assets/images/products/112063.jpg"
    ],
    "specs": []
  },
  {
    "id": "109474",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Швабра роликова 27 см, з подвійнім віджимом, телескопічною ручкою 110 см. Подвійний ролик, металева основа WERK",
    "price": 503.0,
    "desc": "Артикул: WD04. Код 1С: 109474.",
    "images": [
      "assets/images/products/109474.jpg"
    ],
    "specs": []
  },
  {
    "id": "137986",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання квадратне відро(, віджимна швабра та дві запаски WERK",
    "price": 823.0,
    "desc": "Артикул: WCY-351. Код 1С: 137986.",
    "images": [
      "assets/images/products/137986.jpg"
    ],
    "specs": []
  },
  {
    "id": "136851",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочищувач 20 см з телескопічною ручкою до 112 см  WERK",
    "price": 244.0,
    "desc": "Артикул: WDS-1534. Код 1С: 136851.",
    "images": [
      "assets/images/products/136851.jpg"
    ],
    "specs": []
  },
  {
    "id": "137998",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочищувач 3 в 1 телескопічною ручкою 128 см WERK",
    "price": 485.0,
    "desc": "Артикул: WWS-301. Код 1С: 137998.",
    "images": [
      "assets/images/products/137998.jpg"
    ],
    "specs": []
  },
  {
    "id": "137999",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочищувач 25 см зел.WERK",
    "price": 62.0,
    "desc": "Артикул: WWS-303. Код 1С: 137999.",
    "images": [
      "assets/images/products/137999.jpg"
    ],
    "specs": []
  },
  {
    "id": "112061",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка  для ванної та кухні 24x6х3,5см",
    "price": 64.0,
    "desc": "Артикул: WDS-206. Код 1С: 112061.",
    "images": [
      "assets/images/products/112061.jpg"
    ],
    "specs": []
  },
  {
    "id": "136847",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочищувач 25 см  WERK",
    "price": 79.0,
    "desc": "Артикул: WDS-1511. Код 1С: 136847.",
    "images": [
      "assets/images/products/136847.jpg"
    ],
    "specs": []
  },
  {
    "id": "116924",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочисник 20.5 см  ZAMBAK",
    "price": 47.0,
    "desc": "Артикул: 174. Код 1С: 116924.",
    "images": [
      "assets/images/products/116924.jpg"
    ],
    "specs": []
  },
  {
    "id": "124995",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочищувач зі щіткою 22 см 170 ZAMBAK",
    "price": 212.0,
    "desc": "Артикул: 170. Код 1С: 124995.",
    "images": [
      "assets/images/products/124995.jpg"
    ],
    "specs": []
  },
  {
    "id": "116923",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Склоочисник 28 см  ZAMBAK",
    "price": 66.0,
    "desc": "Артикул: 207. Код 1С: 116923.",
    "images": [
      "assets/images/products/116923.jpg"
    ],
    "specs": []
  },
  {
    "id": "127208",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір для прибирання відро 8л + швабра 304 ZAMBAK",
    "price": 794.0,
    "desc": "Артикул: 304. Код 1С: 127208.",
    "images": [
      "assets/images/products/127208.jpg"
    ],
    "specs": []
  },
  {
    "id": "133167",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка \"праска\" (15см x 6см) 145 ZAMBAK",
    "price": 82.0,
    "desc": "Артикул: 145. Код 1С: 133167.",
    "images": [
      "assets/images/products/133167.jpg"
    ],
    "specs": []
  },
  {
    "id": "133170",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка з ручкою 143 ZAMBAK",
    "price": 91.0,
    "desc": "Артикул: 143. Код 1С: 133170.",
    "images": [
      "assets/images/products/133170.jpg"
    ],
    "specs": []
  },
  {
    "id": "133171",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для миття посуду (27x7x4см) 148 ZAMBAK",
    "price": 61.0,
    "desc": "Артикул: 148. Код 1С: 133171.",
    "images": [
      "assets/images/products/133171.jpg"
    ],
    "specs": []
  },
  {
    "id": "133168",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для миття раковини та ванни (16х14х5,5см) 144 ZAMBAK",
    "price": 79.0,
    "desc": "Артикул: 144. Код 1С: 133168.",
    "images": [
      "assets/images/products/133168.jpg"
    ],
    "specs": []
  },
  {
    "id": "133172",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для миття посуду та раковини (8x23x5см) 149 ZAMBAK",
    "price": 61.0,
    "desc": "Артикул: 149. Код 1С: 133172.",
    "images": [
      "assets/images/products/133172.jpg"
    ],
    "specs": []
  },
  {
    "id": "116750",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка вулична 40 см з металевим кріпленням РР червоний(WERK Україна",
    "price": 166.0,
    "desc": "Артикул: W400/2.3.1.1. Код 1С: 116750.",
    "images": [
      "assets/images/products/116750.jpg"
    ],
    "specs": []
  },
  {
    "id": "136857",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мітла 18 см з металевим черенком 100 см WERK",
    "price": 158.0,
    "desc": "Артикул: WDS-868. Код 1С: 136857.",
    "images": [
      "assets/images/products/136857.jpg"
    ],
    "specs": []
  },
  {
    "id": "136855",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мітла 26,5 см з металевим черенком 108 см  WERK",
    "price": 209.0,
    "desc": "Артикул: WDS-702. Код 1С: 136855.",
    "images": [
      "assets/images/products/136855.jpg"
    ],
    "specs": []
  },
  {
    "id": "138069",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка 24х9 см чорна WERK",
    "price": 120.0,
    "desc": "Артикул: WBH-501. Код 1С: 138069.",
    "images": [
      "assets/images/products/138069.jpg"
    ],
    "specs": []
  },
  {
    "id": "138074",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір міні щіток 23х3 см 3 штуки WERK",
    "price": 93.0,
    "desc": "Артикул: WBH-508. Код 1С: 138074.",
    "images": [
      "assets/images/products/138074.jpg"
    ],
    "specs": []
  },
  {
    "id": "138070",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Черенок дерев'яний 115 см до щіток WBH-500 та WBH-501 WERK",
    "price": 71.0,
    "desc": "Артикул: W-115. Код 1С: 138070.",
    "images": [
      "assets/images/products/138070.jpg"
    ],
    "specs": []
  },
  {
    "id": "116756",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка вулична 80 см з металевим кріпленням РР червоний  WERK Україна",
    "price": 402.0,
    "desc": "Артикул: W800/2.3.1.1. Код 1С: 116756.",
    "images": [
      "assets/images/products/116756.jpg"
    ],
    "specs": []
  },
  {
    "id": "116754",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка вулична 60 см з металевим кріпленням РР червоний  WERK Україна",
    "price": 232.0,
    "desc": "Артикул: W600/2.3.1.1. Код 1С: 116754.",
    "images": [
      "assets/images/products/116754.jpg"
    ],
    "specs": []
  },
  {
    "id": "116752",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка вулична 50 см з металевим кріпленням РР червоний  WERK Україна",
    "price": 196.0,
    "desc": "Артикул: W500/2.3.1.1. Код 1С: 116752.",
    "images": [
      "assets/images/products/116752.jpg"
    ],
    "specs": []
  },
  {
    "id": "116759",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка вулична 100 см з металевим кріпленням РР червоний WERK Україна",
    "price": 464.0,
    "desc": "Артикул: W1000/2.3.1.1. Код 1С: 116759.",
    "images": [
      "assets/images/products/116759.jpg"
    ],
    "specs": []
  },
  {
    "id": "138076",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка \"праска\" 14х6 см WERK",
    "price": 46.0,
    "desc": "Артикул: WBH-509. Код 1С: 138076.",
    "images": [
      "assets/images/products/138076.jpg"
    ],
    "specs": []
  },
  {
    "id": "116722",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мітла вулична 23 см, різьба, з металічним черенком WERK Україна",
    "price": 211.0,
    "desc": "Артикул: W230/2.3.4. Код 1С: 116722.",
    "images": [
      "assets/images/products/116722.jpg"
    ],
    "specs": []
  },
  {
    "id": "116723",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мітла вулична 24 см, MINI з металічним черенком WERK Україна",
    "price": 225.0,
    "desc": "Артикул: W240/2.10.4.2. Код 1С: 116723.",
    "images": [
      "assets/images/products/116723.jpg"
    ],
    "specs": []
  },
  {
    "id": "116724",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мітла вулична 24 см, MAXI з металічним черенком WERK Україна",
    "price": 482.0,
    "desc": "Артикул: W240/2.8.4.3. Код 1С: 116724.",
    "images": [
      "assets/images/products/116724.jpg"
    ],
    "specs": []
  },
  {
    "id": "116732",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для підлоги 30 см, з металічним черенком WERK Україна",
    "price": 246.0,
    "desc": "Артикул: W300/1.5.4. Код 1С: 116732.",
    "images": [
      "assets/images/products/116732.jpg"
    ],
    "specs": []
  },
  {
    "id": "116727",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Черенок дерев'яний,L-1300,конус WERK Україна",
    "price": 83.0,
    "desc": "Артикул: W130/1.2. Код 1С: 116727.",
    "images": [],
    "specs": []
  },
  {
    "id": "116745",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для твердих поверхонь 205х62 мм WERK Україна",
    "price": 81.0,
    "desc": "Артикул: W205/2.7. Код 1С: 116745.",
    "images": [
      "assets/images/products/116745.jpg"
    ],
    "specs": []
  },
  {
    "id": "116731",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Черенок чорний металічний,L-1200,з різьбою WERK Україна",
    "price": 83.0,
    "desc": "Артикул: W120/2.1. Код 1С: 116731.",
    "images": [
      "assets/images/products/116731.jpg"
    ],
    "specs": []
  },
  {
    "id": "138015",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка 27х11 см  блакитна WERK",
    "price": 126.0,
    "desc": "Артикул: WBH-500. Код 1С: 138015.",
    "images": [
      "assets/images/products/138015.jpg"
    ],
    "specs": []
  },
  {
    "id": "116748",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для одягу та взуття 140х45 мм ECO WERK Україна",
    "price": 94.0,
    "desc": "Артикул: W140/1.1 ECO. Код 1С: 116748.",
    "images": [
      "assets/images/products/116748.jpg"
    ],
    "specs": []
  },
  {
    "id": "133163",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Запаска з мікрофібри 302 для наборів 300/304 (32x12см) ZAMBAK",
    "price": 106.0,
    "desc": "Артикул: 302. Код 1С: 133163.",
    "images": [
      "assets/images/products/133163.jpg"
    ],
    "specs": []
  },
  {
    "id": "116916",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком з ручкою ECO 21х15,5х84см ZAMBAK",
    "price": 235.0,
    "desc": "Артикул: 139. Код 1С: 116916.",
    "images": [
      "assets/images/products/116916.jpg"
    ],
    "specs": []
  },
  {
    "id": "112065",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком  24x24.5x85cm",
    "price": 329.0,
    "desc": "Артикул: WDS-888. Код 1С: 112065.",
    "images": [
      "assets/images/products/112065.jpg"
    ],
    "specs": []
  },
  {
    "id": "116915",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком з ручкою 21х17х86см ZAMBAK",
    "price": 256.0,
    "desc": "Артикул: 165. Код 1С: 116915.",
    "images": [
      "assets/images/products/116915.jpg"
    ],
    "specs": []
  },
  {
    "id": "116917",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком з ручкою 25х18х97см ZAMBAK",
    "price": 351.0,
    "desc": "Артикул: 128. Код 1С: 116917.",
    "images": [
      "assets/images/products/116917.jpg"
    ],
    "specs": []
  },
  {
    "id": "138006",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком 100 см складний WERK",
    "price": 500.0,
    "desc": "Артикул: WBD-263. Код 1С: 138006.",
    "images": [
      "assets/images/products/138006.jpg"
    ],
    "specs": []
  },
  {
    "id": "116741",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для змітання 285х40 мм WERK Україна",
    "price": 77.0,
    "desc": "Артикул: W285/1.5. Код 1С: 116741.",
    "images": [
      "assets/images/products/116741.jpg"
    ],
    "specs": []
  },
  {
    "id": "116918",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок з ручкою 25х24х86 см ZAMBAK",
    "price": 153.0,
    "desc": "Артикул: 213. Код 1С: 116918.",
    "images": [
      "assets/images/products/116918.jpg"
    ],
    "specs": []
  },
  {
    "id": "116739",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для змітання 263х33 мм WERK Україна",
    "price": 52.0,
    "desc": "Артикул: W263/1.1. Код 1С: 116739.",
    "images": [
      "assets/images/products/116739.jpg"
    ],
    "specs": []
  },
  {
    "id": "144899",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок з довгою ручкою WD-261 (WERK)",
    "price": 122.0,
    "desc": "Артикул: WD-261. Код 1С: 144899.",
    "images": [
      "assets/images/products/144899.jpg"
    ],
    "specs": []
  },
  {
    "id": "145358",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок складний з довгою ручкою WD-262 (WERK)",
    "price": 186.0,
    "desc": "Артикул: WD-262. Код 1С: 145358.",
    "images": [
      "assets/images/products/145358.jpg"
    ],
    "specs": []
  },
  {
    "id": "138002",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком 76 см зел. WERK",
    "price": 241.0,
    "desc": "Артикул: WBD-261. Код 1С: 138002.",
    "images": [
      "assets/images/products/138002.jpg"
    ],
    "specs": []
  },
  {
    "id": "128754",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок для сміття WERK Україна",
    "price": 39.0,
    "desc": "Артикул: W-3008 . Код 1С: 128754.",
    "images": [
      "assets/images/products/128754.jpg"
    ],
    "specs": []
  },
  {
    "id": "136853",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком WDS-519 WERK",
    "price": 202.0,
    "desc": "Артикул: WDS-519. Код 1С: 136853.",
    "images": [
      "assets/images/products/136853.jpg"
    ],
    "specs": []
  },
  {
    "id": "121967",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набiр вiник з совком 30*20,5*7,6см",
    "price": 152.0,
    "desc": "Артикул: WDS-503. Код 1С: 121967.",
    "images": [
      "assets/images/products/121967.jpg"
    ],
    "specs": []
  },
  {
    "id": "116919",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок з гумовою вставкою 169  23х31х6 см ZAMBAK",
    "price": 77.0,
    "desc": "Артикул: 169. Код 1С: 116919.",
    "images": [
      "assets/images/products/116919.jpg"
    ],
    "specs": []
  },
  {
    "id": "116743",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для килимів 30 см, з вставкою WERK Україна",
    "price": 103.0,
    "desc": "Артикул: W300/2.7.11. Код 1С: 116743.",
    "images": [
      "assets/images/products/116743.jpg"
    ],
    "specs": []
  },
  {
    "id": "116920",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок з гумовою вставкою 22х35х6.5см ZAMBAK",
    "price": 62.0,
    "desc": "Артикул: 131. Код 1С: 116920.",
    "images": [
      "assets/images/products/116920.jpg"
    ],
    "specs": []
  },
  {
    "id": "119227",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для скла 24.5х22см WERK",
    "price": 106.0,
    "desc": "Артикул: WCC-1633. Код 1С: 119227.",
    "images": [
      "assets/images/products/119227.jpg"
    ],
    "specs": []
  },
  {
    "id": "116922",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник великий 20х12х62см ZAMBAK",
    "price": 197.0,
    "desc": "Артикул: 260. Код 1С: 116922.",
    "images": [
      "assets/images/products/116922.jpg"
    ],
    "specs": []
  },
  {
    "id": "145359",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок сірий WD-264 (WERK)",
    "price": 93.0,
    "desc": "Артикул: WD-264. Код 1С: 145359.",
    "images": [
      "assets/images/products/145359.jpg"
    ],
    "specs": []
  },
  {
    "id": "116921",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник средній 20х11х40см ZAMBAK",
    "price": 142.0,
    "desc": "Артикул: 123. Код 1С: 116921.",
    "images": [
      "assets/images/products/116921.jpg"
    ],
    "specs": []
  },
  {
    "id": "145360",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Совок синій WD-265 (WERK)",
    "price": 48.0,
    "desc": "Артикул: WD-265. Код 1С: 145360.",
    "images": [
      "assets/images/products/145360.jpg"
    ],
    "specs": []
  },
  {
    "id": "161739",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник великий  19,5*11*63мм  ZAMBAK",
    "price": 150.0,
    "desc": "Артикул: ZP261. Код 1С: 161739.",
    "images": [
      "assets/images/products/161739.jpg"
    ],
    "specs": []
  },
  {
    "id": "138010",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір віник з совком сірий WERK",
    "price": 138.0,
    "desc": "Артикул: WBD-265. Код 1С: 138010.",
    "images": [
      "assets/images/products/138010.jpg"
    ],
    "specs": []
  },
  {
    "id": "119231",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 90-120см розсувна WERK\nзі шкребком",
    "price": 609.0,
    "desc": "Артикул: WCC-2268. Код 1С: 119231.",
    "images": [
      "assets/images/products/119231.jpg"
    ],
    "specs": []
  },
  {
    "id": "119229",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 52см WERK\nзі шкребком",
    "price": 296.0,
    "desc": "Артикул: WCC-2239. Код 1С: 119229.",
    "images": [
      "assets/images/products/119229.jpg"
    ],
    "specs": []
  },
  {
    "id": "119230",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 54-66см розсувна WERK\nзі шкребком",
    "price": 465.0,
    "desc": "Артикул: WCC-2248. Код 1С: 119230.",
    "images": [
      "assets/images/products/119230.jpg"
    ],
    "specs": []
  },
  {
    "id": "119242",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 39см WERK\nзі шкребком",
    "price": 211.0,
    "desc": "Артикул: WCC-2241. Код 1С: 119242.",
    "images": [
      "assets/images/products/119242.jpg"
    ],
    "specs": []
  },
  {
    "id": "119246",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка двустороння для авто 40x40см 1шт WERK",
    "price": 68.0,
    "desc": "Артикул: WCC-01MF. Код 1С: 119246.",
    "images": [
      "assets/images/products/119246.jpg"
    ],
    "specs": []
  },
  {
    "id": "119243",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 44см WERK\nзі шкребком",
    "price": 186.0,
    "desc": "Артикул: WCC-2276. Код 1С: 119243.",
    "images": [
      "assets/images/products/119243.jpg"
    ],
    "specs": []
  },
  {
    "id": "136829",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка безворсова 30x30см (1шт) - WERK",
    "price": 53.0,
    "desc": "Артикул: WCC-3030. Код 1С: 136829.",
    "images": [
      "assets/images/products/136829.jpg"
    ],
    "specs": []
  },
  {
    "id": "149645",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка ультрам’яка GREY Coral Fleece 40x40см (1шт) WERK",
    "price": 74.0,
    "desc": "Артикул: WCC-4041. Код 1С: 149645.",
    "images": [],
    "specs": []
  },
  {
    "id": "119244",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка волога замшева 32*43 WERK\nШтучна замша",
    "price": 144.0,
    "desc": "Артикул: WCC-3102. Код 1С: 119244.",
    "images": [
      "assets/images/products/119244.jpg"
    ],
    "specs": []
  },
  {
    "id": "136814",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка з мікрофібри 46x60см (1шт) -WERK",
    "price": 107.0,
    "desc": "Артикул: WCC-4660. Код 1С: 136814.",
    "images": [
      "assets/images/products/136814.jpg"
    ],
    "specs": []
  },
  {
    "id": "125150",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для авто 46см F-306 WERK",
    "price": 288.0,
    "desc": "Артикул: F-306. Код 1С: 125150.",
    "images": [
      "assets/images/products/125150.jpg"
    ],
    "specs": []
  },
  {
    "id": "127850",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір для прибирання VENUS з ручкою, насадкою для швабри та віджимним пристроєм 211 ZAMBAK",
    "price": 281.0,
    "desc": "Артикул: 211. Код 1С: 127850.",
    "images": [
      "assets/images/products/127850.jpg"
    ],
    "specs": []
  },
  {
    "id": "126150",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка з мікрофібри 35x35см (1шт) WERK",
    "price": 35.0,
    "desc": "Артикул: WCC-12MF. Код 1С: 126150.",
    "images": [
      "assets/images/products/126150.jpg"
    ],
    "specs": []
  },
  {
    "id": "133341",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка ультрам’яка Coral Fleece 40x40см (1шт) WERK",
    "price": 74.0,
    "desc": "Артикул: WCC-4040. Код 1С: 133341.",
    "images": [
      "assets/images/products/133341.jpg"
    ],
    "specs": []
  },
  {
    "id": "138294",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір серветок з мікрофібри 30х30 см (4шт) WERK",
    "price": 173.0,
    "desc": "Артикул: WYM-004. Код 1С: 138294.",
    "images": [
      "assets/images/products/138294.jpg"
    ],
    "specs": []
  },
  {
    "id": "119228",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Щітка для скла 20х23см WERK",
    "price": 148.0,
    "desc": "Артикул: WCC-1635. Код 1С: 119228.",
    "images": [
      "assets/images/products/119228.jpg"
    ],
    "specs": []
  },
  {
    "id": "138296",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір губок для чищення з мікрофібри 17х20 см (3шт) WERK",
    "price": 95.0,
    "desc": "Артикул: WYM-005. Код 1С: 138296.",
    "images": [
      "assets/images/products/138296.jpg"
    ],
    "specs": []
  },
  {
    "id": "138304",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка кухонна в квадрат, біла 30х30см WERK",
    "price": 36.0,
    "desc": "Артикул: WYM-009. Код 1С: 138304.",
    "images": [
      "assets/images/products/138304.jpg"
    ],
    "specs": []
  },
  {
    "id": "136823",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду коричневий 35х40см WERK",
    "price": 106.0,
    "desc": "Артикул: WDC-3540. Код 1С: 136823.",
    "images": [
      "assets/images/products/136823.jpg"
    ],
    "specs": []
  },
  {
    "id": "138292",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка з мікрофібри для скляних поверхонь 30x30см (1 шт) WERK",
    "price": 40.0,
    "desc": "Артикул: WYM-003. Код 1С: 138292.",
    "images": [
      "assets/images/products/138292.jpg"
    ],
    "specs": []
  },
  {
    "id": "138290",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Універсальна серветка з мікрофібри з малюнком 30х30 см (1шт) WERK",
    "price": 38.0,
    "desc": "Артикул: WYM-002. Код 1С: 138290.",
    "images": [
      "assets/images/products/138290.jpg"
    ],
    "specs": []
  },
  {
    "id": "149642",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду пісочний 35х40см WERK",
    "price": 106.0,
    "desc": "Артикул: WDC-3541. Код 1С: 149642.",
    "images": [],
    "specs": []
  },
  {
    "id": "149643",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду сірий 35х40см WERK",
    "price": 106.0,
    "desc": "Артикул: WDC-3542. Код 1С: 149643.",
    "images": [],
    "specs": []
  },
  {
    "id": "149640",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду, полоска 35х40см WERK",
    "price": 115.0,
    "desc": "Артикул: WDP-3541. Код 1С: 149640.",
    "images": [],
    "specs": []
  },
  {
    "id": "138202",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Універсальна серветка з мікрофібри 30х30 см (1шт) WERK",
    "price": 36.0,
    "desc": "Артикул: WYM-001. Код 1С: 138202.",
    "images": [
      "assets/images/products/138202.jpg"
    ],
    "specs": []
  },
  {
    "id": "149641",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду, келихи 35х40см WERK",
    "price": 115.0,
    "desc": "Артикул: WDP-3542. Код 1С: 149641.",
    "images": [],
    "specs": []
  },
  {
    "id": "138300",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка кухонна, жовта 30х30см WERK",
    "price": 50.0,
    "desc": "Артикул: WYM-007. Код 1С: 138300.",
    "images": [
      "assets/images/products/138300.jpg"
    ],
    "specs": []
  },
  {
    "id": "138298",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка кухонна в смужку, салатова 30х30см WERK",
    "price": 32.0,
    "desc": "Артикул: WYM-006. Код 1С: 138298.",
    "images": [
      "assets/images/products/138298.jpg"
    ],
    "specs": []
  },
  {
    "id": "136821",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Килимок для сушки посуду, геометрія 35х40см WERK",
    "price": 115.0,
    "desc": "Артикул: WDP-3540. Код 1С: 136821.",
    "images": [
      "assets/images/products/136821.jpg"
    ],
    "specs": []
  },
  {
    "id": "138302",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка кухонна хвиляста, синя 30х30см WERK",
    "price": 52.0,
    "desc": "Артикул: WYM-008. Код 1С: 138302.",
    "images": [
      "assets/images/products/138302.jpg"
    ],
    "specs": []
  },
  {
    "id": "133342",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір серветок з мікрофібри для скляних поверхонь 35x35см (3 шт) WERK",
    "price": 149.0,
    "desc": "Артикул: WCC-3535. Код 1С: 133342.",
    "images": [
      "assets/images/products/133342.jpg"
    ],
    "specs": []
  },
  {
    "id": "138306",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник кухонний з малюнком 40х60см WERK",
    "price": 75.0,
    "desc": "Артикул: WYM-010. Код 1С: 138306.",
    "images": [
      "assets/images/products/138306.jpg"
    ],
    "specs": []
  },
  {
    "id": "136825",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник кухонний бежевий 40х60см WERK",
    "price": 134.0,
    "desc": "Артикул: WDC-4060. Код 1С: 136825.",
    "images": [
      "assets/images/products/136825.jpg"
    ],
    "specs": []
  },
  {
    "id": "156680",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Scrubby 4 шт 9.8х6,8х3,5 см WERK,Україна",
    "price": 64.0,
    "desc": "Артикул: WR-769. Код 1С: 156680.",
    "images": [
      "assets/images/products/156680.jpg"
    ],
    "specs": []
  },
  {
    "id": "136827",
    "category": "dlyadomu",
    "subcategory": "tekstyl",
    "available": true,
    "name": "Рушник кухонний смугастий оранжевий 40х60см WERK",
    "price": 119.0,
    "desc": "Артикул: WDP-4060. Код 1С: 136827.",
    "images": [
      "assets/images/products/136827.jpg"
    ],
    "specs": []
  },
  {
    "id": "156683",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна  Daily Wash 6 шт 9.8х6,8х3,5 см WERK,Україна",
    "price": 64.0,
    "desc": "Артикул: WR-770. Код 1С: 156683.",
    "images": [
      "assets/images/products/156683.jpg"
    ],
    "specs": []
  },
  {
    "id": "156685",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Scrubby 4 шт 9.8х6,8х3,5 см WERK,Україна",
    "price": 66.0,
    "desc": "Артикул: WR-772. Код 1С: 156685.",
    "images": [
      "assets/images/products/156685.jpg"
    ],
    "specs": []
  },
  {
    "id": "156684",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна  Soft Scrub 6 шт 9х6х3 см WERK,Україна",
    "price": 53.0,
    "desc": "Артикул: WR-771. Код 1С: 156684.",
    "images": [
      "assets/images/products/156684.jpg"
    ],
    "specs": []
  },
  {
    "id": "123761",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Целюлозна серветка Super Absorb 3 шт. WERK, 15,7×16 Україна",
    "price": 88.0,
    "desc": "Артикул: WR761. Код 1С: 123761.",
    "images": [
      "assets/images/products/123761.jpg"
    ],
    "specs": []
  },
  {
    "id": "123763",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Абразивна фібра Scraber 5 шт WERK, 9×13 Україна",
    "price": 48.0,
    "desc": "Артикул: WR763. Код 1С: 123763.",
    "images": [
      "assets/images/products/123763.jpg"
    ],
    "specs": []
  },
  {
    "id": "156687",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Shiny Day  5 шт 9х6.5х4.5 см WERK,Україна",
    "price": 60.0,
    "desc": "Артикул: WR-774. Код 1С: 156687.",
    "images": [
      "assets/images/products/156687.jpg"
    ],
    "specs": []
  },
  {
    "id": "117135",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Валик для чищення одягу та видалення ворсу\n(підходить для чищення одягу, меблів, сидіння авто від шерсті тварин, пилу, тощо)\n- дві штуки в наборі                       \n- 20 листів                           \n- легка заміна блоку WERK",
    "price": 72.0,
    "desc": "Артикул: WI-03. Код 1С: 117135.",
    "images": [
      "assets/images/products/117135.jpg"
    ],
    "specs": []
  },
  {
    "id": "123762",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Серветка з віскози 7шт WERK, 35×38 Україна",
    "price": 166.0,
    "desc": "Артикул: WR762. Код 1С: 123762.",
    "images": [
      "assets/images/products/123762.jpg"
    ],
    "specs": []
  },
  {
    "id": "156688",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Foam Mate  5 шт 10х7х4 см WERK,Україна",
    "price": 69.0,
    "desc": "Артикул: WR-775. Код 1С: 156688.",
    "images": [
      "assets/images/products/156688.jpg"
    ],
    "specs": []
  },
  {
    "id": "117139",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір запасок до валику                  \n(підходить для чищення одягу, меблів, сидіння авто від шерсті тварин, пилу, тощо)                       \n- з чорною ручкою                         \n- спіральний виріз                          \n- 20 листів WERK",
    "price": 89.0,
    "desc": "Артикул: WLF-11. Код 1С: 117139.",
    "images": [
      "assets/images/products/117139.jpg"
    ],
    "specs": []
  },
  {
    "id": "161740",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Органайзер з ручкою  ZAMBAK",
    "price": 167.0,
    "desc": "Артикул: ZP324. Код 1С: 161740.",
    "images": [],
    "specs": []
  },
  {
    "id": "123766",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Bacterial protect 10x7x4 см WERK,Україна",
    "price": 85.0,
    "desc": "Артикул: WR-766. Код 1С: 123766.",
    "images": [
      "assets/images/products/123766.jpg"
    ],
    "specs": []
  },
  {
    "id": "127233",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір запасок до валика для чищення одягу 2 шт по 20 листів кольорова ручка WERK",
    "price": 89.0,
    "desc": "Артикул: WLF-11-С. Код 1С: 127233.",
    "images": [
      "assets/images/products/127233.jpg"
    ],
    "specs": []
  },
  {
    "id": "123765",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Bubble 5 шт 9x6x3 см WERK,Україна",
    "price": 57.0,
    "desc": "Артикул: WR-765. Код 1С: 123765.",
    "images": [
      "assets/images/products/123765.jpg"
    ],
    "specs": []
  },
  {
    "id": "126693",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір запасок  до валика для чищення одягу 2 шт по 60 листів чорна ручка WERK",
    "price": 152.0,
    "desc": "Артикул: WLF-12. Код 1С: 126693.",
    "images": [
      "assets/images/products/126693.jpg"
    ],
    "specs": []
  },
  {
    "id": "121976",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Прасувальна дошка - (110x30см) WERK Україна",
    "price": 730.0,
    "desc": "Артикул: W110. Код 1С: 121976.",
    "images": [
      "assets/images/products/121976.jpg"
    ],
    "specs": []
  },
  {
    "id": "127235",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Набір запасок до валика для чищення одягу 2 шт по 60 листів кольорова ручка WERK",
    "price": 152.0,
    "desc": "Артикул: WLF-12-С. Код 1С: 127235.",
    "images": [
      "assets/images/products/127235.jpg"
    ],
    "specs": []
  },
  {
    "id": "121977",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Прасувальна дошка - (120x38см) WERK Україна",
    "price": 874.0,
    "desc": "Артикул: W120. Код 1С: 121977.",
    "images": [
      "assets/images/products/121977.jpg"
    ],
    "specs": []
  },
  {
    "id": "158775",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сушарка для білизни розкладна -(18м) WERK Туреччина",
    "price": 796.0,
    "desc": "Артикул: W18A. Код 1С: 158775.",
    "images": [
      "assets/images/products/158775.jpg"
    ],
    "specs": []
  },
  {
    "id": "121975",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сушарка для білизни розкладна - 18м WERK (+блокуюче кільце) Україна",
    "price": 679.0,
    "desc": "Артикул: W18SE. Код 1С: 121975.",
    "images": [
      "assets/images/products/121975.jpg"
    ],
    "specs": []
  },
  {
    "id": "121974",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сушарка для білизни розкладна - 18м WERKУкраїна",
    "price": 646.0,
    "desc": "Артикул: W18. Код 1С: 121974.",
    "images": [
      "assets/images/products/121974.jpg"
    ],
    "specs": []
  },
  {
    "id": "144907",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сушарка для білизни розкладна - чорна  (18м) (WERK)",
    "price": 687.0,
    "desc": "Артикул: W18В. Код 1С: 144907.",
    "images": [
      "assets/images/products/144907.jpg"
    ],
    "specs": []
  },
  {
    "id": "121311",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур капроновий плетений  діаметр 2мм, довжина 20м Україна",
    "price": 55.0,
    "desc": "Артикул: 121312. Код 1С: 121311.",
    "images": [
      "assets/images/products/121311.jpg"
    ],
    "specs": []
  },
  {
    "id": "121315",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур капроновий плетений  діаметр 6мм, довжина 20мУкраїна",
    "price": 300.0,
    "desc": "Артикул: 121316. Код 1С: 121315.",
    "images": [
      "assets/images/products/121315.jpg"
    ],
    "specs": []
  },
  {
    "id": "121319",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур поліпропіленовий плетений  діаметр 3мм, довжина 20мУкраїна",
    "price": 34.0,
    "desc": "Артикул: 121320. Код 1С: 121319.",
    "images": [
      "assets/images/products/121319.jpg"
    ],
    "specs": []
  },
  {
    "id": "121321",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур поліпропіленовий плетений  діаметр 5мм, довжина 20мУкраїна",
    "price": 60.0,
    "desc": "Артикул: 121322. Код 1С: 121321.",
    "images": [
      "assets/images/products/121321.jpg"
    ],
    "specs": []
  },
  {
    "id": "121317",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур поліпропіленовий плетений  діаметр 2мм, довжина 20мУкраїна",
    "price": 28.0,
    "desc": "Артикул: 121318. Код 1С: 121317.",
    "images": [
      "assets/images/products/121317.jpg"
    ],
    "specs": []
  },
  {
    "id": "156686",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Губка кухонна Fresh Task  6 шт 9.8х6.8х3.5 см WERK,Україна",
    "price": 71.0,
    "desc": "Артикул: WR-773. Код 1С: 156686.",
    "images": [
      "assets/images/products/156686.jpg"
    ],
    "specs": []
  },
  {
    "id": "160126",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Підставка універсальна  Ажур  GUSTO, (156х185х147мм) в асорт.",
    "price": 116.0,
    "desc": "Артикул: GT-0-3. Код 1С: 160126.",
    "images": [],
    "specs": []
  },
  {
    "id": "121323",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур поліпропіленовий плетений  діаметр 6мм, довжина 20мУкраїна",
    "price": 122.0,
    "desc": "Артикул: 121324. Код 1С: 121323.",
    "images": [
      "assets/images/products/121323.jpg"
    ],
    "specs": []
  },
  {
    "id": "126691",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Валик  для чищення одягу, 60 листів чорна ручка WERK",
    "price": 106.0,
    "desc": "Артикул: WI-06. Код 1С: 126691.",
    "images": [
      "assets/images/products/126691.jpg"
    ],
    "specs": []
  },
  {
    "id": "121313",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур капроновий плетений  діаметр 4мм, довжина 20мУкраїна",
    "price": 109.0,
    "desc": "Артикул: 121314. Код 1С: 121313.",
    "images": [
      "assets/images/products/121313.jpg"
    ],
    "specs": []
  },
  {
    "id": "136155",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 1.8л (150х200х92мм) в асорт.Україна",
    "price": 102.0,
    "desc": "Артикул: GT-1-8. Код 1С: 136155.",
    "images": [
      "assets/images/products/136155.jpg"
    ],
    "specs": []
  },
  {
    "id": "136159",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 4,7 л (195х300х110 мм) в асорт.асорт.Україна",
    "price": 149.0,
    "desc": "Артикул: GT-4-7. Код 1С: 136159.",
    "images": [
      "assets/images/products/136159.jpg"
    ],
    "specs": []
  },
  {
    "id": "136157",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 3.5л (150х200х165мм) в асорт.асорт.Україна",
    "price": 130.0,
    "desc": "Артикул: GT-3-5. Код 1С: 136157.",
    "images": [
      "assets/images/products/136157.jpg"
    ],
    "specs": []
  },
  {
    "id": "136158",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 3.5л (150х200х165мм) з кришкою, в асорт.асорт.Україна",
    "price": 181.0,
    "desc": "Артикул: GT-3-5к. Код 1С: 136158.",
    "images": [
      "assets/images/products/136158.jpg"
    ],
    "specs": []
  },
  {
    "id": "136161",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 4,7 л (200х305х115 мм) з кришкою, в асорт.асорт.Україна",
    "price": 209.0,
    "desc": "Артикул: GT-4-7к. Код 1С: 136161.",
    "images": [
      "assets/images/products/136161.jpg"
    ],
    "specs": []
  },
  {
    "id": "136156",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 1.8л (156х207х95мм) з кришкою, в асорт.асорт.Україна",
    "price": 149.0,
    "desc": "Артикул: GT-1-8к. Код 1С: 136156.",
    "images": [
      "assets/images/products/136156.jpg"
    ],
    "specs": []
  },
  {
    "id": "136162",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Контейнер Ажур GUSTO, 7,5 л (200х305х165 мм) з кришкою, в асорт.асорт.Україна",
    "price": 246.0,
    "desc": "Артикул: GT-7-5к. Код 1С: 136162.",
    "images": [
      "assets/images/products/136162.jpg"
    ],
    "specs": []
  },
  {
    "id": "136165",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сухарниця прямокутна Ажур GUSTO (183х266х105 мм) в асорт.асорт.Україна",
    "price": 74.0,
    "desc": "Артикул: GT-0-1. Код 1С: 136165.",
    "images": [
      "assets/images/products/136165.jpg"
    ],
    "specs": []
  },
  {
    "id": "136160",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Кошик Ажур GUSTO, 12л з кришкою (296х396х127мм) в асорт.асорт.Україна",
    "price": 400.0,
    "desc": "Артикул: GT-12-0к. Код 1С: 136160.",
    "images": [
      "assets/images/products/136160.jpg"
    ],
    "specs": []
  },
  {
    "id": "136163",
    "category": "dlyadomu",
    "subcategory": "zberigannya",
    "available": true,
    "name": "Кошик Ажур GUSTO, 18л (296х396х194мм) з кришкою, в асорт.асорт.Україна",
    "price": 441.0,
    "desc": "Артикул: GT-18-0к. Код 1С: 136163.",
    "images": [
      "assets/images/products/136163.jpg"
    ],
    "specs": []
  },
  {
    "id": "136166",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Сухарниця кругла Ажур GUSTO (245х245х101 мм) в асорт.асорт.Україна",
    "price": 73.0,
    "desc": "Артикул: GT-0-2. Код 1С: 136166.",
    "images": [
      "assets/images/products/136166.jpg"
    ],
    "specs": []
  },
  {
    "id": "128753",
    "category": "dlyadomu",
    "subcategory": "posud",
    "available": true,
    "name": "Ківш пластиковий господарський 1л WERK, Україна",
    "price": 42.0,
    "desc": "Артикул: W-2001. Код 1С: 128753.",
    "images": [
      "assets/images/products/128753.jpg"
    ],
    "specs": []
  },
  {
    "id": "121325",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Шнур поліпропіленовий плетений  діаметр 8мм, довжина 25мУкраїна",
    "price": 270.0,
    "desc": "Артикул: 121326. Код 1С: 121325.",
    "images": [
      "assets/images/products/121325.jpg"
    ],
    "specs": []
  },
  {
    "id": "127231",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Валик для чищення одягу, 60 листів кольорова ручка WERK",
    "price": 106.0,
    "desc": "Артикул: WI-06-С. Код 1С: 127231.",
    "images": [
      "assets/images/products/127231.jpg"
    ],
    "specs": []
  },
  {
    "id": "128748",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий Незабудка 6л WERK, Україна",
    "price": 87.0,
    "desc": "Артикул: W-1071 . Код 1С: 128748.",
    "images": [
      "assets/images/products/128748.jpg"
    ],
    "specs": []
  },
  {
    "id": "128751",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий Незабудка 20л WERK, Україна",
    "price": 288.0,
    "desc": "Артикул: W-1067 . Код 1С: 128751.",
    "images": [
      "assets/images/products/128751.jpg"
    ],
    "specs": []
  },
  {
    "id": "127229",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Валик для чищення одягу, 20 листів кольорова ручка WERK",
    "price": 72.0,
    "desc": "Артикул: WI-03-С. Код 1С: 127229.",
    "images": [
      "assets/images/products/127229.jpg"
    ],
    "specs": []
  },
  {
    "id": "127036",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Прищіпки 20 шт 103 (ZAMBAK)",
    "price": 73.0,
    "desc": "Артикул: 103. Код 1С: 127036.",
    "images": [
      "assets/images/products/127036.jpg"
    ],
    "specs": []
  },
  {
    "id": "128752",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий Незабудка 28л WERK, Україна",
    "price": 414.0,
    "desc": "Артикул: W-1073 . Код 1С: 128752.",
    "images": [
      "assets/images/products/128752.jpg"
    ],
    "specs": []
  },
  {
    "id": "128749",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий Незабудка 9л WERK, Україна",
    "price": 135.0,
    "desc": "Артикул: W-1052 . Код 1С: 128749.",
    "images": [
      "assets/images/products/128749.jpg"
    ],
    "specs": []
  },
  {
    "id": "161293",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Відро пластикове господарське 5 л WERK,Україна",
    "price": 161.0,
    "desc": "Артикул: W-1005. Код 1С: 161293.",
    "images": [],
    "specs": []
  },
  {
    "id": "128750",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий Незабудка 15л WERK, Україна",
    "price": 201.0,
    "desc": "Артикул: W-1065 . Код 1С: 128750.",
    "images": [
      "assets/images/products/128750.jpg"
    ],
    "specs": []
  },
  {
    "id": "127210",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий круглий 7л 625 ZAMBAK",
    "price": 153.0,
    "desc": "Артикул: 625. Код 1С: 127210.",
    "images": [
      "assets/images/products/127210.jpg"
    ],
    "specs": []
  },
  {
    "id": "128742",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вiдро для смiття з поворотною кришкою 10л WERK, Україна",
    "price": 123.0,
    "desc": "Артикул: W-1079 . Код 1С: 128742.",
    "images": [
      "assets/images/products/128742.jpg"
    ],
    "specs": []
  },
  {
    "id": "128745",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вiдро пластикове господарське 12л WERK, Україна",
    "price": 213.0,
    "desc": "Артикул: W-1007 . Код 1С: 128745.",
    "images": [
      "assets/images/products/128745.jpg"
    ],
    "specs": []
  },
  {
    "id": "161292",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Відро пластикове мірне MODERN 10л WERK, Україна",
    "price": 199.0,
    "desc": "Артикул: W-1010 . Код 1С: 161292.",
    "images": [
      "assets/images/products/161292.jpg"
    ],
    "specs": []
  },
  {
    "id": "128744",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вiдро для смiття з поворотною кришкою 5л WERK, Україна",
    "price": 123.0,
    "desc": "Артикул: W-1078 . Код 1С: 128744.",
    "images": [
      "assets/images/products/128744.jpg"
    ],
    "specs": []
  },
  {
    "id": "130528",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Відро-туалет 16л WERK, Україна",
    "price": 717.0,
    "desc": "Артикул: W-3000. Код 1С: 130528.",
    "images": [
      "assets/images/products/130528.jpg"
    ],
    "specs": []
  },
  {
    "id": "130526",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вiдро пластикове мірне з носиком 5л WERK, Україна",
    "price": 208.0,
    "desc": "Артикул: W-1075. Код 1С: 130526.",
    "images": [
      "assets/images/products/130526.jpg"
    ],
    "specs": []
  },
  {
    "id": "136116",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Хвиля WERK, 500мл",
    "price": 155.0,
    "desc": "Артикул: 70134999 00. Код 1С: 136116.",
    "images": [
      "assets/images/products/136116.jpg"
    ],
    "specs": []
  },
  {
    "id": "127213",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий круглий 10л 626 ZAMBAK",
    "price": 189.0,
    "desc": "Артикул: 626. Код 1С: 127213.",
    "images": [
      "assets/images/products/127213.jpg"
    ],
    "specs": []
  },
  {
    "id": "136123",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Скеля WERK, 500мл",
    "price": 155.0,
    "desc": "Артикул: WK-20002. Код 1С: 136123.",
    "images": [
      "assets/images/products/136123.jpg"
    ],
    "specs": []
  },
  {
    "id": "136122",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Лагуна WERK, 300мл в ассортименті",
    "price": 155.0,
    "desc": "Артикул: WK-20003. Код 1С: 136122.",
    "images": [
      "assets/images/products/136122.jpg"
    ],
    "specs": []
  },
  {
    "id": "136119",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір аксесуарів для ванної кімнати Графіт WERK (дозатор, стакан, мильниця)",
    "price": 474.0,
    "desc": "Артикул: WK-20006. Код 1С: 136119.",
    "images": [
      "assets/images/products/136119.jpg"
    ],
    "specs": []
  },
  {
    "id": "121008",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні - розмір S WERK m- 28g",
    "price": 30.0,
    "desc": "Артикул: WHL-01S. Код 1С: 121008.",
    "images": [
      "assets/images/products/121008.jpg"
    ],
    "specs": []
  },
  {
    "id": "136117",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Набір аксесуарів для ванної кімнати Аметист WERK (дозатор, стакан, мильниця)",
    "price": 474.0,
    "desc": "Артикул: WK-20008. Код 1С: 136117.",
    "images": [
      "assets/images/products/136117.jpg"
    ],
    "specs": []
  },
  {
    "id": "146624",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Бриз WERK, 480мл в ассортименті",
    "price": 123.0,
    "desc": "Артикул: WK-20009. Код 1С: 146624.",
    "images": [
      "assets/images/products/146624.jpg"
    ],
    "specs": []
  },
  {
    "id": "146628",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мильниця Меридіан WERK, 15.2*9.9*2.3см в ассортименті",
    "price": 97.0,
    "desc": "Артикул: WK-20013. Код 1С: 146628.",
    "images": [
      "assets/images/products/146628.jpg"
    ],
    "specs": []
  },
  {
    "id": "146627",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Мильниця Паралель WERK, 15.2*9.9*2.3см в ассортименті",
    "price": 97.0,
    "desc": "Артикул: WK-20012. Код 1С: 146627.",
    "images": [
      "assets/images/products/146627.jpg"
    ],
    "specs": []
  },
  {
    "id": "146625",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Лиман WERK, 365мл в ассортименті",
    "price": 121.0,
    "desc": "Артикул: WK-20010. Код 1С: 146625.",
    "images": [
      "assets/images/products/146625.jpg"
    ],
    "specs": []
  },
  {
    "id": "146626",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Шарм WERK, 450мл в ассортименті",
    "price": 123.0,
    "desc": "Артикул: WK-20011. Код 1С: 146626.",
    "images": [
      "assets/images/products/146626.jpg"
    ],
    "specs": []
  },
  {
    "id": "121013",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні -розмір L WERK m- 28g",
    "price": 30.0,
    "desc": "Артикул: WHL-01L. Код 1С: 121013.",
    "images": [
      "assets/images/products/121013.jpg"
    ],
    "specs": []
  },
  {
    "id": "148541",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні потовщені - WHL-02M, розмір М WERK",
    "price": 36.0,
    "desc": "Артикул: WHL-02M. Код 1С: 148541.",
    "images": [],
    "specs": []
  },
  {
    "id": "148540",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні потовщені - WHL-02S, розмір S WERK",
    "price": 36.0,
    "desc": "Артикул: WHL-02S. Код 1С: 148540.",
    "images": [],
    "specs": []
  },
  {
    "id": "121011",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні -розмір М WERK m- 28g",
    "price": 30.0,
    "desc": "Артикул: WHL-01M. Код 1С: 121011.",
    "images": [
      "assets/images/products/121011.jpg"
    ],
    "specs": []
  },
  {
    "id": "148542",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Рукавички господарські латексні потовщені - WHL-02L, розмір L WERK",
    "price": 36.0,
    "desc": "Артикул: WHL-02L. Код 1С: 148542.",
    "images": [],
    "specs": []
  },
  {
    "id": "127215",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Таз пластиковий круглий 14л 627 ZAMBAK",
    "price": 257.0,
    "desc": "Артикул: 627. Код 1С: 127215.",
    "images": [
      "assets/images/products/127215.jpg"
    ],
    "specs": []
  },
  {
    "id": "136861",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу WDS-961 WERK",
    "price": 127.0,
    "desc": "Артикул: WDS-961. Код 1С: 136861.",
    "images": [
      "assets/images/products/136861.jpg"
    ],
    "specs": []
  },
  {
    "id": "121969",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу 37,5*11см WERK",
    "price": 101.0,
    "desc": "Артикул: WDS-904. Код 1С: 121969.",
    "images": [
      "assets/images/products/121969.jpg"
    ],
    "specs": []
  },
  {
    "id": "136859",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу WDS-960 WERK",
    "price": 115.0,
    "desc": "Артикул: WDS-960. Код 1С: 136859.",
    "images": [
      "assets/images/products/136859.jpg"
    ],
    "specs": []
  },
  {
    "id": "133166",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу 152 ZAMBAK",
    "price": 113.0,
    "desc": "Артикул: 152. Код 1С: 133166.",
    "images": [
      "assets/images/products/133166.jpg"
    ],
    "specs": []
  },
  {
    "id": "136120",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Міраж WERK, 450мл в ассортименті",
    "price": 142.0,
    "desc": "Артикул: 70134999 00. Код 1С: 136120.",
    "images": [
      "assets/images/products/136120.jpg"
    ],
    "specs": []
  },
  {
    "id": "136121",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Дозатор для мила Фантом WERK, 450мл в ассортименті",
    "price": 142.0,
    "desc": "Артикул: 70134999 00. Код 1С: 136121.",
    "images": [
      "assets/images/products/136121.jpg"
    ],
    "specs": []
  },
  {
    "id": "136865",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу WDS-963 WERK",
    "price": 115.0,
    "desc": "Артикул: WDS-963. Код 1С: 136865.",
    "images": [
      "assets/images/products/136865.jpg"
    ],
    "specs": []
  },
  {
    "id": "136863",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу WDS-962 WERK",
    "price": 88.0,
    "desc": "Артикул: WDS-962. Код 1С: 136863.",
    "images": [
      "assets/images/products/136863.jpg"
    ],
    "specs": []
  },
  {
    "id": "138080",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу рожевий WERK",
    "price": 77.0,
    "desc": "Артикул: WTB-03. Код 1С: 138080.",
    "images": [
      "assets/images/products/138080.jpg"
    ],
    "specs": []
  },
  {
    "id": "133165",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу з кришкою 150 ZAMBAK",
    "price": 152.0,
    "desc": "Артикул: 150. Код 1С: 133165.",
    "images": [
      "assets/images/products/133165.jpg"
    ],
    "specs": []
  },
  {
    "id": "138082",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу силіконовий зелений WERK",
    "price": 165.0,
    "desc": "Артикул: WTB-09. Код 1С: 138082.",
    "images": [
      "assets/images/products/138082.jpg"
    ],
    "specs": []
  },
  {
    "id": "127856",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вантуз гофрований (великий) 225 ZAMBAK",
    "price": 125.0,
    "desc": "Артикул: 225. Код 1С: 127856.",
    "images": [
      "assets/images/products/127856.jpg"
    ],
    "specs": []
  },
  {
    "id": "138087",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вантуз 50 см WERK",
    "price": 128.0,
    "desc": "Артикул: WTB-18. Код 1С: 138087.",
    "images": [
      "assets/images/products/138087.jpg"
    ],
    "specs": []
  },
  {
    "id": "147424",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу силіконовий сірий WERK",
    "price": 219.0,
    "desc": "Артикул: WTB-02. Код 1С: 147424.",
    "images": [
      "assets/images/products/147424.jpg"
    ],
    "specs": []
  },
  {
    "id": "123644",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник трьохпучковий 70-75*30 (УМАНЬ)",
    "price": 169.0,
    "desc": "Артикул: WR644. Код 1С: 123644.",
    "images": [
      "assets/images/products/123644.jpg"
    ],
    "specs": []
  },
  {
    "id": "123643",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник молдавський 75-80*30 (УМАНЬ)",
    "price": 184.0,
    "desc": "Артикул: WR643. Код 1С: 123643.",
    "images": [
      "assets/images/products/123643.jpg"
    ],
    "specs": []
  },
  {
    "id": "147426",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу силіконовий блакитний WERK",
    "price": 131.0,
    "desc": "Артикул: WTB-08. Код 1С: 147426.",
    "images": [
      "assets/images/products/147426.jpg"
    ],
    "specs": []
  },
  {
    "id": "127855",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вантуз гофрований (малий) 224 ZAMBAK",
    "price": 83.0,
    "desc": "Артикул: 224. Код 1С: 127855.",
    "images": [
      "assets/images/products/127855.jpg"
    ],
    "specs": []
  },
  {
    "id": "138085",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Вантуз 30 см WERK",
    "price": 73.0,
    "desc": "Артикул: WTB-17. Код 1С: 138085.",
    "images": [
      "assets/images/products/138085.jpg"
    ],
    "specs": []
  },
  {
    "id": "124480",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник ЛЮКС 80*35 (УМАНЬ)",
    "price": 168.0,
    "desc": "Артикул: WR480. Код 1С: 124480.",
    "images": [
      "assets/images/products/124480.jpg"
    ],
    "specs": []
  },
  {
    "id": "138078",
    "category": "dlyadomu",
    "subcategory": "himiya",
    "available": true,
    "name": "Йоржик для унітазу силіконовий білий WERK",
    "price": 276.0,
    "desc": "Артикул: WTB-01. Код 1С: 138078.",
    "images": [
      "assets/images/products/138078.jpg"
    ],
    "specs": []
  },
  {
    "id": "148557",
    "category": "dlyadomu",
    "subcategory": "inshe",
    "available": true,
    "name": "Віник малий 60*25 (УМАНЬ)",
    "price": 135.0,
    "desc": "Артикул: WR400. Код 1С: 148557.",
    "images": [
      "assets/images/products/148557.jpg"
    ],
    "specs": []
  }
];

// ============================================
//  HELPERS
// ============================================
function findProduct(id) { for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].id===id) return PRODUCTS[i]; return null; }
function findCategory(id) { for (var i=0;i<CATEGORIES.length;i++) if (CATEGORIES[i].id===id) return CATEGORIES[i]; return null; }

var NO_IMG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="30" height="30"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';

function noImgBox(cls) { return '<div class="no-img '+cls+'">'+NO_IMG_SVG+'<span>\u0424\u043e\u0442\u043e \u043d\u0435\u0432\u0434\u043e\u0432\u0437\u0456</span></div>'; }

function availBadge(available) {
  return available
    ? '<span class="avail-badge avail-badge--yes">\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456</span>'
    : '<span class="avail-badge avail-badge--no">\u041f\u0456\u0434 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f</span>';
}

// ============================================
//  SEARCH BAR HTML
// ============================================
function searchBarHtml(currentVal) {
  return '<div class="catalog-search-wrap">'+
    '<div class="catalog-search-inner">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>'+
      '<input type="search" id="catalogSearchInput" class="catalog-search-input" placeholder="\u041f\u043e\u0448\u0443\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432..." value="'+escHtml(currentVal)+'">'+
      (currentVal ? '<button class="search-clear-btn" id="searchClearBtn" aria-label="\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043f\u043e\u0448\u0443\u043a"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M18 6L6 18M6 6l12 12"/></svg></button>' : '')+
    '</div>'+
  '</div>';
}

function escHtml(s) { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function bindSearchEvents() {
  var inp = document.getElementById('catalogSearchInput');
  if (!inp) return;
  inp.addEventListener('input', function() {
    state.search = inp.value;
    doSearch(state.search);
  });
  var clr = document.getElementById('searchClearBtn');
  if (clr) clr.addEventListener('click', function(){
    state.search = '';
    if (state.category) renderCategoryPage();
    else renderMainCatalog();
  });
  // Focus search if it had value
  if (inp.value) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

// ============================================
//  SEARCH
// ============================================
function doSearch(q) {
  var grid = document.getElementById('productsGrid') || document.getElementById('searchGrid');
  q = (q || '').trim().toLowerCase();
  if (!q) {
    if (state.category) renderCategoryPage(); else renderMainCatalog();
    return;
  }
  // Update search bar (re-render just the controls area)
  var searchWrap = document.querySelector('.catalog-search-wrap');
  if (searchWrap) {
    var newWrap = document.createElement('div');
    newWrap.innerHTML = searchBarHtml(q);
    searchWrap.parentNode.replaceChild(newWrap.firstChild, searchWrap);
    bindSearchEvents();
    var inp2 = document.getElementById('catalogSearchInput');
    if (inp2) { inp2.focus(); inp2.setSelectionRange(inp2.value.length, inp2.value.length); }
  }
  // Filter all products
  var results = PRODUCTS.filter(function(p){ return p.name.toLowerCase().indexOf(q) !== -1 || p.desc.toLowerCase().indexOf(q) !== -1; });
  var html = '';
  if (!results.length) {
    html = '<div class="product-empty search-empty">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>'+
      '<p>\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c «'+escHtml(q)+'»</p>'+
      '<span>\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0456\u043d\u0448\u0435 \u0441\u043b\u043e\u0432\u043e \u0430\u0431\u043e \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u044c\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457</span>'+
    '</div>';
  } else {
    for (var i=0;i<results.length;i++) {
      html += productCardHtml(results[i], true);
    }
  }
  // Render into grid area
  var existing = document.getElementById('searchGrid') || document.getElementById('productsGrid');
  if (existing) {
    existing.id = 'searchGrid';
    existing.innerHTML = html;
    bindCardEvents(results);
  }
}

// ============================================
//  PRODUCT CARD HTML (shared)
// ============================================
function productCardHtml(p, showCategory) {
  var detailLink = 'catalog.html?category='+p.category+'&product='+p.id;
  var thumbSrc   = (p.images && p.images[0]) ? p.images[0] : '';
  var catInfo    = findCategory(p.category);
  return '<div class="product-card">'+
    '<a href="'+detailLink+'" class="product-card-img-link">'+
      (thumbSrc ? '<img src="'+thumbSrc+'" alt="'+escHtml(p.name)+'" class="product-img" loading="lazy">' : noImgBox('no-img--md'))+
      availBadge(p.available)+
    '</a>'+
    '<div class="product-content">'+
      (showCategory ? '<div class="product-search-cat">'+catInfo.name+'</div>' : '')+
      '<a href="'+detailLink+'"><h3 class="product-title">'+p.name+'</h3></a>'+
      '<p class="product-desc">'+p.desc.substring(0,75)+'\u2026</p>'+
      '<div class="product-footer">'+
        '<div class="product-price">'+p.price.toLocaleString('uk-UA')+' \u20b4</div>'+
        '<button class="btn btn-cta btn-sm btn-add-cart" aria-label="В кошик" data-id="'+p.id+'">'+
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'+
        '<span class="add-cart-text" style="margin-left:6px;">\u0412 \u043a\u043e\u0448\u0438\u043a</span></button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

// ============================================
//  GALLERY STATE
// ============================================
var galleryState = { images:[], idx:0 };

function renderGalleryMain() {
  var wrap = document.getElementById('galleryWrap');
  if (!wrap) return;
  var imgs = galleryState.images;
  var idx  = galleryState.idx;
  var src  = (imgs[idx] !== undefined) ? imgs[idx] : '';
  var inner = src
    ? '<img src="'+src+'" alt="\u0424\u043e\u0442\u043e" class="gallery-main-img fade-in" id="galleryMainImg">'
    : '<div class="no-img-gallery">'+NO_IMG_SVG+'<span>\u0424\u043e\u0442\u043e \u043d\u0435\u0432\u0434\u043e\u0432\u0437\u0456</span></div>';
  if (imgs.length > 1) {
    inner +=
      '<button class="gallery-arrow gallery-arrow--prev" id="gPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<button class="gallery-arrow gallery-arrow--next" id="gNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg></button>'+
      '<div class="gallery-counter">'+(idx+1)+' / '+imgs.length+'</div>';
  }
  wrap.innerHTML = inner;

  // Thumbs
  var thumbsWrap = document.getElementById('galleryThumbs');
  if (thumbsWrap && imgs.length > 1) {
    var th = '';
    for (var i=0;i<imgs.length;i++) {
      th += '<div class="gallery-thumb'+(i===idx?' active':'')+'" data-ti="'+i+'">';
      if (imgs[i]) th += '<img src="'+imgs[i]+'" alt="" class="fade-in">';
      else th += NO_IMG_SVG;
      th += '</div>';
    }
    thumbsWrap.innerHTML = th;
    thumbsWrap.style.display = 'flex';
    var tBtns = thumbsWrap.querySelectorAll('.gallery-thumb');
    for (var j=0;j<tBtns.length;j++) {
      (function(b){ b.addEventListener('click', function(){ galleryGoTo(parseInt(b.getAttribute('data-ti'))); }); })(tBtns[j]);
    }
  } else if (thumbsWrap) {
    thumbsWrap.style.display = 'none';
  }

  var gp = document.getElementById('gPrev');
  var gn = document.getElementById('gNext');
  if (gp) gp.addEventListener('click', function(e){ e.stopPropagation(); galleryGoTo(galleryState.idx-1); });
  if (gn) gn.addEventListener('click', function(e){ e.stopPropagation(); galleryGoTo(galleryState.idx+1); });
  wrap.onclick = function(e){ if (e.target.classList && e.target.classList.contains('gallery-arrow')) return; openLightbox(galleryState.idx); };
}

function galleryGoTo(idx) {
  var len = galleryState.images.length;
  galleryState.idx = (idx + len) % len;
  renderGalleryMain();
}

// ============================================
//  LIGHTBOX
// ============================================
var lightboxEl = null;
var lbTouchX = 0;

function injectLightbox() {
  if (document.getElementById('catalogLightbox')) { lightboxEl = document.getElementById('catalogLightbox'); return; }
  var el = document.createElement('div');
  el.id = 'catalogLightbox';
  el.className = 'lightbox';
  el.innerHTML =
    '<button class="lightbox-close" id="lbClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M18 6L6 18M6 6l12 12"/></svg></button>'+
    '<button class="lightbox-arrow lightbox-arrow--prev" id="lbPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><path d="M15 18l-6-6 6-6"/></svg></button>'+
    '<div class="lightbox-img-wrap" id="lbImgWrap"></div>'+
    '<button class="lightbox-arrow lightbox-arrow--next" id="lbNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><path d="M9 18l6-6-6-6"/></svg></button>'+
    '<div class="lightbox-counter" id="lbCounter"></div>';
  document.body.appendChild(el);
  lightboxEl = el;

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  el.addEventListener('click', function(e){ if (e.target === el) closeLightbox(); });
  document.getElementById('lbPrev').addEventListener('click', function(){ lbNav(-1); });
  document.getElementById('lbNext').addEventListener('click', function(){ lbNav(1); });
  document.addEventListener('keydown', function(e){
    if (!lightboxEl || !lightboxEl.classList.contains('active')) return;
    if (e.key==='ArrowLeft') lbNav(-1);
    if (e.key==='ArrowRight') lbNav(1);
    if (e.key==='Escape') closeLightbox();
  });
  el.addEventListener('touchstart', function(e){ lbTouchX=e.touches[0].clientX; }, { passive:true });
  el.addEventListener('touchend', function(e){ var d=lbTouchX-e.changedTouches[0].clientX; if (Math.abs(d)>50) lbNav(d>0?1:-1); });
}

function lbRenderImg() {
  var wrap = document.getElementById('lbImgWrap');
  var ctr  = document.getElementById('lbCounter');
  var imgs = galleryState.images;
  var idx  = galleryState.idx;
  var src  = imgs[idx] || '';
  wrap.innerHTML = src
    ? '<img src="'+src+'" alt="\u0424\u043e\u0442\u043e" class="lightbox-img fade-in">'
    : '<div class="lightbox-no-img">'+NO_IMG_SVG+'<span>\u0424\u043e\u0442\u043e \u043d\u0435\u0432\u0434\u043e\u0432\u0437\u0456</span></div>';
  if (ctr) ctr.textContent = imgs.length>1 ? (idx+1)+' / '+imgs.length : '';
  var pv = document.getElementById('lbPrev'), nx = document.getElementById('lbNext');
  if (pv) pv.style.display = imgs.length>1 ? 'flex' : 'none';
  if (nx) nx.style.display = imgs.length>1 ? 'flex' : 'none';
}
function openLightbox(idx) {
  if (!lightboxEl) injectLightbox();
  galleryState.idx = idx || 0;
  lbRenderImg();
  lightboxEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (lightboxEl) lightboxEl.classList.remove('active');
  document.body.style.overflow = '';
}
function lbNav(delta) {
  var len = galleryState.images.length;
  galleryState.idx = (galleryState.idx + delta + len) % len;
  lbRenderImg();
  renderGalleryMain();
}

// ============================================
//  APP STATE
// ============================================
var state = { category:null, product:null, subcategory:'all', sort:'default', search:'' };
var root  = document.getElementById('catalog-root');

// ============================================
//  INIT
// ============================================
function initCatalog() {
  if (!root) return;
  injectLightbox();
  var params = new URLSearchParams(window.location.search);
  state.category = params.get('category') || null;
  state.product  = params.get('product')  || null;

  if (state.product && state.category) {
    var p = findProduct(state.product);
    if (p) { renderProductPage(p); return; }
  }
  if (state.category && findCategory(state.category)) {
    renderCategoryPage();
  } else {
    state.category = null;
    renderMainCatalog();
  }
}

// ============================================
//  MAIN CATALOG PAGE (4 категорії)
// ============================================
function renderMainCatalog() {
  var html = '<div class="container">';
  html += '<div class="catalog-header"><h1 class="section-title">\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u0456\u0432</h1></div>';
  html += '<div id="searchGrid" class="category-grid">';
  for (var i=0;i<CATEGORIES.length;i++) {
    var c = CATEGORIES[i];
    html += '<a href="catalog.html?category='+c.id+'" class="category-card">';
    if (c.img) {
      html += '<img src="'+c.img+'" alt="'+c.name+'" loading="lazy" class="fade-in" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">';
      html += '<div style="display:none" class="no-img no-img--lg">'+NO_IMG_SVG+'</div>';
    } else {
      html += noImgBox('no-img--lg');
    }
    html += '<div class="category-card-title"><span class="category-card-name">'+c.name+'</span><span class="category-card-sub">'+c.desc+'</span></div></a>';
  }
  html += '</div>';
  html += '</div>';
  root.innerHTML = html;
}

// ============================================
//  CATEGORY PAGE
// ============================================
function renderCategoryPage() {
  var catInfo = findCategory(state.category);
  var subs = SUBCATEGORIES[state.category];
  var filtered = [];
  for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].category===state.category) filtered.push(PRODUCTS[i]);
  if (state.subcategory && state.subcategory!=='all') filtered = filtered.filter(function(p){ return p.subcategory===state.subcategory; });
  if (state.sort==='price-asc')  filtered.sort(function(a,b){ return a.price-b.price; });
  if (state.sort==='price-desc') filtered.sort(function(a,b){ return b.price-a.price; });

  var html = '<div class="container">';
  html += '<a href="catalog.html" class="back-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> \u0423\u0441\u0456 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457</a>';
  html += '<div class="catalog-header"><h1 class="section-title">'+catInfo.name+'</h1></div>';
  html += '<div class="catalog-controls">';
  
  html += '<div class="catalog-filters-wrap" style="display:flex; flex-wrap:wrap; align-items:center; gap:16px; flex:1;">';
  if (subs && subs.length>0) {
    html += '<div class="catalog-filters" style="margin:0;">';
    for (var s=0;s<subs.length;s++) html += '<button class="chip'+(state.subcategory===subs[s].id?' active':'')+'" data-sub="'+subs[s].id+'">'+subs[s].name+'</button>';
    html += '</div>';
  }
  html += '<div style="flex-grow:1; margin-bottom:0;" class="catalog-search-wrap-inline">' + searchBarHtml(state.search).replace('class="catalog-search-wrap"','class="catalog-search-wrap" style="margin-bottom:0; max-width:none;"') + '</div>';
  html += '</div>';

  html += '<select class="sort-select" id="sortSelect">'+
    '<option value="default"'+(state.sort==='default'?' selected':'')+'>За замовчуванням</option>'+
    '<option value="price-asc"'+(state.sort==='price-asc'?' selected':'')+'>Від найдешевших</option>'+
    '<option value="price-desc"'+(state.sort==='price-desc'?' selected':'')+'>Від найдорожчих</option>'+
  '</select></div>';
  html += '<div class="products-grid" id="productsGrid">';
  if (!filtered.length) {
    html += '<div class="product-empty">\u0422\u043e\u0432\u0430\u0440\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e</div>';
  } else {
    for (var k=0;k<filtered.length;k++) html += productCardHtml(filtered[k], false);
  }
  html += '</div></div>';
  root.innerHTML = html;
  bindSearchEvents();
  bindCategoryEvents(filtered);
  if (state.search) doSearch(state.search);
}

// ============================================
//  PRODUCT DETAIL PAGE
// ============================================
function renderProductPage(p) {
  var catInfo = findCategory(p.category);
  var catLink = 'catalog.html?category='+p.category;
  var images  = (p.images && p.images.length) ? p.images : [''];
  var specsHtml = '';
  if (p.specs && p.specs.length) {
    specsHtml = '<div class="product-detail-specs"><h3 class="product-specs-title">\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438</h3><table class="specs-table">';
    for (var i=0;i<p.specs.length;i++) specsHtml += '<tr><td>'+p.specs[i][0]+'</td><td>'+p.specs[i][1]+'</td></tr>';
    specsHtml += '</table></div>';
  }

  var html = '<div class="container">';
  // Breadcrumbs — all clickable
  html += '<nav class="breadcrumb">'+
    '<a href="catalog.html">\u041a\u0430\u0442\u0430\u043b\u043e\u0433</a>'+
    '<span class="bc-sep">›</span>'+
    '<a href="'+catLink+'">'+catInfo.name+'</a>'+
    '<span class="bc-sep">›</span>'+
    '<span>'+p.name+'</span>'+
  '</nav>';
  html += '<div class="product-detail-grid">';
  // Gallery
  html += '<div class="product-detail-img-wrap">';
  html += '<div class="gallery-main-wrap" id="galleryWrap"></div>';
  html += '<div class="gallery-thumbs" id="galleryThumbs" style="display:none"></div>';
  html += '</div>';
  // Info
  html += '<div class="product-detail-info">';
  html += '<div class="product-detail-cat">'+catInfo.name+'</div>';
  html += '<h1 class="product-detail-title">'+p.name+'</h1>';
  html += availBadge(p.available)+' ';
  html += '<div class="product-detail-price">'+p.price.toLocaleString('uk-UA')+' \u20b4</div>';
  html += '<p class="product-detail-desc">'+p.desc+'</p>';
  html += specsHtml;
  html += '<div class="product-detail-actions">';
  html += '<button class="btn btn-cta btn-lg btn-add-cart-detail" data-id="'+p.id+'">'+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:8px"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'+
    '\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a</button>';
  html += '<a href="tel:+380978973207" class="btn btn-outline btn-lg">'+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:6px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'+
    '\u0417\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0432\u0430\u0442\u0438</a>';
  html += '</div>';
  html += '<a href="'+catLink+'" class="product-back-link">'+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>'+
    ' \u041d\u0430\u0437\u0430\u0434 \u0434\u043e \xab'+catInfo.name+'\xbb</a>';
  html += '</div></div></div>';

  root.innerHTML = html;

  galleryState.images = images;
  galleryState.idx = 0;
  renderGalleryMain();

  var addBtn = document.querySelector('.btn-add-cart-detail');
  if (addBtn) addBtn.addEventListener('click', function(){ if (window.GAZDA_CART) window.GAZDA_CART.add(p); });
}

// ============================================
//  EVENT BINDERS
// ============================================
function bindCategoryEvents(filtered) {
  var chips = document.querySelectorAll('.chip');
  for (var i=0;i<chips.length;i++) {
    chips[i].addEventListener('click', function(e){ state.subcategory=e.currentTarget.getAttribute('data-sub'); state.search=''; renderCategoryPage(); });
  }
  var ss = document.getElementById('sortSelect');
  if (ss) ss.addEventListener('change', function(e){ state.sort=e.target.value; renderCategoryPage(); });
  bindCardEvents(filtered);
}

function bindCardEvents(products) {
  var addBtns = document.querySelectorAll('.btn-add-cart');
  for (var j=0;j<addBtns.length;j++) {
    (function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        var id = btn.getAttribute('data-id');
        if (!window.GAZDA_CART) return;
        for (var k=0;k<products.length;k++) { if (products[k].id===id) { window.GAZDA_CART.add(products[k]); break; } }
      });
    })(addBtns[j]);
  }
}

initCatalog();
