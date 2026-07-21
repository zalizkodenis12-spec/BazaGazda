window.CATALOG_DATA = {
  categories: [
    { id: 'tehnika', name: 'Техніка', image: 'https://placehold.co/400x300/e53935/ffffff?text=Техніка' },
    { id: 'budmaterialy', name: 'Будматеріали', image: 'https://placehold.co/400x300/e53935/ffffff?text=Будматеріали' },
    { id: 'instrument', name: 'Інструмент', image: 'https://placehold.co/400x300/e53935/ffffff?text=Інструмент' },
    { id: 'dim', name: 'Для дому', image: 'https://placehold.co/400x300/e53935/ffffff?text=Для+дому' }
  ],
  subcategories: {
    'tehnika': [
      { id: 'small', name: 'Дрібна техніка' },
      { id: 'large', name: 'Велика техніка' }
    ],
    'instrument': [
      { id: 'electro', name: 'Електроінструмент' },
      { id: 'sets', name: 'Набори інструментів' }
    ],
    'dim': [
      { id: 'posud', name: 'Посуд' },
      { id: 'chemistry', name: 'Побутова хімія' }
    ]
  },
  products: [
    { id: 't1', category: 'tehnika', subcategory: 'small', name: 'Міксер кухонний Bosh', price: 1200, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Міксер', desc: 'Потужний кухонний міксер 500Вт' },
    { id: 't2', category: 'tehnika', subcategory: 'small', name: 'Чайник електричний', price: 650, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Чайник', desc: 'Чайник на 1.7л з підсвіткою' },
    { id: 't3', category: 'tehnika', subcategory: 'small', name: 'Блендер занурювальний', price: 950, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Блендер', desc: 'Набір з вінчиком та подрібнювачем' },
    { id: 't4', category: 'tehnika', subcategory: 'large', name: 'Холодильник LG', price: 15400, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Холодильник', desc: 'Двокамерний холодильник', specs: { 'Розмір': '190x60x65 см', 'Гарантія': '2 роки' } },
    { id: 't5', category: 'tehnika', subcategory: 'large', name: 'Пральна машина Samsung', price: 12800, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Пральна+машина', desc: 'Завантаження 7кг, 1200 об/хв', specs: { 'Потужність': '2000Вт', 'Гарантія': '1 рік' } },
    { id: 't6', category: 'tehnika', subcategory: 'large', name: 'Газова плита Greta', price: 6200, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Плита', desc: '4 конфорки, духовка 50л', specs: { 'Розмір': '50x50x85 см', 'Гарантія': '1 рік' } },
    
    { id: 'b1', category: 'budmaterialy', name: 'Цемент М400 ПЦ II/Б-Ш-400', price: 185, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Цемент', desc: 'Портландцемент для будівельних робіт', specs: { 'Вага': '25 кг' } },
    { id: 'b2', category: 'budmaterialy', name: 'Пісок митий в мішках', price: 45, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Пісок', desc: 'Річковий митий пісок фасований', specs: { 'Вага': '50 кг' } },
    { id: 'b3', category: 'budmaterialy', name: 'Щебінь фракція 5-20', price: 65, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Щебінь', desc: 'Щебінь гранітний фасований', specs: { 'Вага': '50 кг' } },
    { id: 'b4', category: 'budmaterialy', name: 'Шпаклівка Knauf Fugen', price: 290, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Шпаклівка', desc: 'Гіпсова шпаклівка універсальна', specs: { 'Вага': '25 кг' } },
    { id: 'b5', category: 'budmaterialy', name: 'Бетонозмішувач Форте 150Л', price: 7800, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Бетонозмішувач', desc: 'Професійний бетонозмішувач', specs: { 'Потужність': '550 Вт', 'Об\'єм': '150 л' } },
    { id: 'b6', category: 'budmaterialy', name: 'Драбина алюмінієва 3х9', price: 2400, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Драбина', desc: 'Універсальна розкладна драбина', specs: { 'Висота': '5.9 м' } },

    { id: 'i1', category: 'instrument', subcategory: 'electro', name: 'Дриль-шуруповерт Makita', price: 3400, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Шуруповерт', desc: 'Акумуляторний шуруповерт 18V' },
    { id: 'i2', category: 'instrument', subcategory: 'electro', name: 'Перфоратор Bosch', price: 4500, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Перфоратор', desc: 'Надійний перфоратор SDS-plus 800Вт' },
    { id: 'i3', category: 'instrument', subcategory: 'electro', name: 'Болгарка (КШМ) DeWalt', price: 2800, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Болгарка', desc: 'Кутова шліфмашина 125мм 900Вт' },
    { id: 'i4', category: 'instrument', subcategory: 'sets', name: 'Набір головок YATO 108 шт', price: 2100, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Набір+інструментів', desc: 'Професійний набір торцевих головок' },
    { id: 'i5', category: 'instrument', subcategory: 'sets', name: 'Набір викруток 12 шт', price: 450, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Викрутки', desc: 'Ударні та звичайні викрутки' },
    { id: 'i6', category: 'instrument', subcategory: 'sets', name: 'Набір свердел по металу', price: 350, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Свердла', desc: 'Свердла HSS 1-13мм' },

    { id: 'd1', category: 'dim', subcategory: 'posud', name: 'Набір каструль нержавійка', price: 1600, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Каструлі', desc: 'Набір з 6 предметів, скляні кришки' },
    { id: 'd2', category: 'dim', subcategory: 'posud', name: 'Сковорода з антипригарним', price: 750, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Сковорода', desc: 'Сковорода 28см для індукції' },
    { id: 'd3', category: 'dim', subcategory: 'posud', name: 'Набір ножів', price: 850, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Ножі', desc: '5 ножів на дерев\'яній підставці' },
    { id: 'd4', category: 'dim', subcategory: 'chemistry', name: 'Пральний порошок Ariel 5кг', price: 420, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Порошок', desc: 'Для автоматичного прання' },
    { id: 'd5', category: 'dim', subcategory: 'chemistry', name: 'Засіб для миття посуду Fairy', price: 85, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Fairy', desc: 'Об\'єм 1л' },
    { id: 'd6', category: 'dim', subcategory: 'chemistry', name: 'Засіб для миття скла', price: 65, image: 'https://placehold.co/300x300/1a1a1a/fff?text=Миючий+засіб', desc: 'Спрей 500мл' }
  ]
};
