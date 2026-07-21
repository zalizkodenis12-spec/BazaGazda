// ============================================
//  CATALOG DATA (без зовнішніх фото-заглушок)
// ============================================
var CATEGORIES = [
  {
    id: 'technika',
    name: 'Техніка',
    desc: 'Велика та дрібна побутова',
    img: 'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232357.png'
  },
  {
    id: 'budmaterialy',
    name: '\u0411\u0443\u0434\u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438',
    desc: '\u0414\u043b\u044f \u0440\u0435\u043c\u043e\u043d\u0442\u0443 \u0442\u0430 \u0431\u0443\u0434\u0456\u0432\u043d\u0438\u0446\u0442\u0432\u0430',
    img: 'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232417.png'
  },
  {
    id: 'instrument',
    name: '\u0406\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442',
    desc: '\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0442\u0430 \u043d\u0430\u0431\u043e\u0440\u0438',
    img: 'assets/images/\u0437\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-14 132122.png'
  },
  {
    id: 'dlyadomu',
    name: '\u0414\u043b\u044f \u0434\u043e\u043c\u0443',
    desc: '\u041f\u043e\u0441\u0443\u0434 \u0442\u0430 \u043f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0445\u0456\u043c\u0456\u044f',
    img: 'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232644.png'
  }
];

var SUBCATEGORIES = {
  technika:     [{ id: 'all', name: '\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438' }, { id: 'dribna', name: '\u0414\u0440\u0456\u0431\u043d\u0430 \u0442\u0435\u0445\u043d\u0456\u043a\u0430' }, { id: 'velyka', name: '\u0412\u0435\u043b\u0438\u043a\u0430 \u0442\u0435\u0445\u043d\u0456\u043a\u0430' }],
  instrument:   [{ id: 'all', name: '\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438' }, { id: 'elektro', name: '\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442' }, { id: 'nabory', name: '\u041d\u0430\u0431\u043e\u0440\u0438 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432' }],
  dlyadomu:     [{ id: 'all', name: '\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438' }, { id: 'posud', name: '\u041f\u043e\u0441\u0443\u0434' }, { id: 'himiya', name: '\u041f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0445\u0456\u043c\u0456\u044f' }],
  budmaterialy: []
};

var PRODUCTS = [
  // ---- Техніка: Дрібна ----
  { id:'td1', category:'technika', subcategory:'dribna', name:'\u0411\u043b\u0435\u043d\u0434\u0435\u0440 Phillipa BL-200', price:1350, desc:'\u041f\u043e\u0442\u0443\u0436\u043d\u0438\u0439 \u0441\u0442\u0430\u0446\u0456\u043e\u043d\u0430\u0440\u043d\u0438\u0439 \u0431\u043b\u0435\u043d\u0434\u0435\u0440 800 \u0412\u0442 \u0437 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u0447\u0430\u0448 \u0434\u043b\u044f \u0449\u043e\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f. \u0406\u0434\u0435\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u043b\u044f \u0441\u043c\u0443\u0437\u0456, \u0441\u0443\u043f\u0456\u0432, \u0441\u043e\u0443\u0441\u0456\u0432 \u0442\u0430 \u0434\u0438\u0442\u044f\u0447\u043e\u0433\u043e \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f.', img:'', specs:[] },
  { id:'td2', category:'technika', subcategory:'dribna', name:'\u0422\u043e\u0441\u0442\u0435\u0440 TechHome T4', price:980, desc:'\u0422\u043e\u0441\u0442\u0435\u0440 \u043d\u0430 4 \u0441\u043b\u043e\u0442\u0438 \u0437 \u043f\u043b\u0430\u0432\u043d\u0438\u043c \u0440\u0435\u0433\u0443\u043b\u044e\u0432\u0430\u043d\u043d\u044f\u043c \u0441\u0442\u0443\u043f\u0435\u043d\u044f \u043f\u0456\u0434\u0441\u043c\u0430\u0436\u0443\u0432\u0430\u043d\u043d\u044f. \u0424\u0443\u043d\u043a\u0446\u0456\u0457 \u043f\u0456\u0434\u0456\u0433\u0440\u0456\u0432\u0443 \u0442\u0430 \u0440\u043e\u0437\u043c\u043e\u0440\u043e\u0436\u0443\u0432\u0430\u043d\u043d\u044f. \u0417\u043d\u0456\u043c\u043d\u0438\u0439 \u043f\u0456\u0434\u0434\u043e\u043d \u0434\u043b\u044f \u043a\u0440\u0438\u0445\u0442.', img:'', specs:[] },
  { id:'td3', category:'technika', subcategory:'dribna', name:'\u0427\u0430\u0439\u043d\u0438\u043a \u0435\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043d\u0438\u0439 2.5\u043b', price:1100, desc:'\u0428\u0432\u0438\u0434\u043a\u0435 \u043a\u0438\u043f\u0456\u043d\u043d\u044f \u0437\u0430 3-4 \u0445\u0432\u0438\u043b\u0438\u043d\u0438. \u041a\u043e\u0440\u043f\u0443\u0441 \u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u043e\u0457 \u0441\u0442\u0430\u043b\u0456, \u043f\u0456\u0434\u0441\u0432\u0456\u0442\u043a\u0430 \u0440\u0456\u0432\u043d\u044f \u0432\u043e\u0434\u0438, \u0430\u0432\u0442\u043e\u0432\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f \u043f\u0440\u0438 \u0437\u0430\u043a\u0438\u043f\u0430\u043d\u043d\u0456.', img:'', specs:[] },
  { id:'td4', category:'technika', subcategory:'dribna', name:'\u041c\u0456\u043a\u0440\u043e\u0445\u0432\u0438\u043b\u044c\u043e\u0432\u0430 \u043f\u0456\u0447 20\u043b', price:2850, desc:'\u041c\u0456\u043a\u0440\u043e\u0445\u0432\u0438\u043b\u044c\u043e\u0432\u0430 \u043f\u0456\u0447 \u0437 \u0444\u0443\u043d\u043a\u0446\u0456\u0454\u044e \u0433\u0440\u0438\u043b\u044f. 5 \u0440\u0456\u0432\u043d\u0456\u0432 \u043f\u043e\u0442\u0443\u0436\u043d\u043e\u0441\u0442\u0456, \u043c\u0435\u0445\u0430\u043d\u0456\u0447\u043d\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440 \u0434\u043e 30 \u0445\u0432\u0438\u043b\u0438\u043d, \u043e\u0431\u2019\u0454\u043c \u043a\u0430\u043c\u0435\u0440\u0438 20 \u043b\u0456\u0442\u0440\u0456\u0432.', img:'', specs:[] },
  { id:'td5', category:'technika', subcategory:'dribna', name:'\u0421\u043e\u043a\u043e\u0432\u0438\u0436\u0438\u043c\u0430\u043b\u043a\u0430 ProFresh S1', price:1600, desc:'\u0428\u043d\u0435\u043a\u043e\u0432\u0430 \u0441\u043e\u043a\u043e\u0432\u0438\u0436\u0438\u043c\u0430\u043b\u043a\u0430 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0436\u0438\u043c\u0443. \u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0456\u0432 \u0442\u0430 \u0444\u0435\u0440\u043c\u0435\u043d\u0442\u0456\u0432. \u0422\u0438\u0445\u0438\u0439 \u0434\u0432\u0438\u0433\u0443\u043d, \u043b\u0435\u0433\u043a\u0435 \u0447\u0438\u0449\u0435\u043d\u043d\u044f.', img:'', specs:[] },
  { id:'td6', category:'technika', subcategory:'dribna', name:'\u041a\u0430\u0432\u043e\u0432\u0430\u0440\u043a\u0430 EspressoPro E15', price:3200, desc:'\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0430 \u0440\u043e\u0436\u043a\u043e\u0432\u0430 \u043a\u0430\u0432\u043e\u0432\u0430\u0440\u043a\u0430 \u0437 \u043a\u0430\u043f\u0443\u0447\u0438\u043d\u0430\u0442\u043e\u0440\u043e\u043c. 15 \u0431\u0430\u0440 \u0442\u0438\u0441\u043a\u0443, \u043d\u0430\u0433\u0440\u0456\u0432 \u0437\u0430 30 \u0441\u0435\u043a\u0443\u043d\u0434, \u0437\u043d\u0456\u043c\u043d\u0438\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440 1.5 \u043b.', img:'', specs:[] },
  // ---- Техніка: Велика ----
  { id:'tv1', category:'technika', subcategory:'velyka', name:'\u0425\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a FrostMax 300', price:18000, desc:'\u0414\u0432\u043e\u043a\u0430\u043c\u0435\u0440\u043d\u0438\u0439 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a \u0437 No Frost. \u0420\u0456\u0432\u043d\u043e\u043c\u0456\u0440\u043d\u0435 \u043e\u0445\u043e\u043b\u043e\u0434\u0436\u0435\u043d\u043d\u044f, \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0441\u0442\u044c \u0456\u043d\u0435\u044e, \u0442\u0438\u0445\u0438\u0439 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u043e\u0440. \u041a\u043b\u0430\u0441 A++.', img:'', specs:[['Object', '300 \u043b'],['Class', 'A++'],['Height', '185 \u0441\u043c'],['Guarantee', '3 \u0440\u043e\u043a\u0438']] },
  { id:'tv2', category:'technika', subcategory:'velyka', name:'\u041f\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 ClearWash 7', price:15500, desc:'\u0424\u0440\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f 7 \u043a\u0433. 16 \u043f\u0440\u043e\u0433\u0440\u0430\u043c \u043f\u0440\u0430\u043d\u043d\u044f, \u0448\u0432\u0438\u0434\u043a\u0435 \u043f\u0440\u0430\u043d\u043d\u044f 15 \u0445\u0432, \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043f\u0440\u043e\u0442\u0456\u043a\u0430\u043d\u044c, \u043a\u043b\u0430\u0441 A+++.', img:'', specs:[['Load', '7 \u043a\u0433'],['RPM', '1200'],['Programs', '16'],['Guarantee', '2 \u0440\u043e\u043a\u0438']] },
  { id:'tv3', category:'technika', subcategory:'velyka', name:'\u041f\u043e\u0441\u0443\u0434\u043e\u043c\u0438\u0439\u043d\u0430 DishMate 12', price:14000, desc:'\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0430 \u043f\u043e\u0441\u0443\u0434\u043e\u043c\u0438\u0439\u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 \u043d\u0430 12 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0456\u0432. 5 \u043f\u0440\u043e\u0433\u0440\u0430\u043c, \u0437\u0430\u0442\u0440\u0438\u043c\u043a\u0430 \u0441\u0442\u0430\u0440\u0442\u0443, \u0442\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043c 44 \u0434\u0411.', img:'', specs:[['Sets', '12'],['Programs', '5'],['Noise', '44 \u0434\u0411'],['Guarantee', '2 \u0440\u043e\u043a\u0438']] },
  { id:'tv4', category:'technika', subcategory:'velyka', name:'\u041a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440 AirCool 12000', price:22000, desc:'\u0421\u043f\u043b\u0456\u0442-\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0437 \u0456\u043d\u0432\u0435\u0440\u0442\u043e\u0440\u043d\u0438\u043c \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u043e\u0440\u043e\u043c. \u041e\u0445\u043e\u043b\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0442\u0430 \u043e\u0431\u0456\u0433\u0440\u0456\u0432, \u0442\u0430\u0439\u043c\u0435\u0440, Wi-Fi \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f.', img:'', specs:[['BTU', '12000'],['Area', '\u0434\u043e 35 \u043c\xb2'],['Type', '\u0406\u043d\u0432\u0435\u0440\u0442\u043e\u0440'],['Guarantee', '3 \u0440\u043e\u043a\u0438']] },
  // ---- Будматеріали ----
  { id:'bm1', category:'budmaterialy', subcategory:null, name:'\u0426\u0435\u043c\u0435\u043d\u0442 \u041c500 (50 \u043a\u0433)', price:320, desc:'\u041f\u043e\u0440\u0442\u043b\u0430\u043d\u0434\u0446\u0435\u043c\u0435\u043d\u0442 \u041c500 \u0434\u043b\u044f \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u0456\u0432, \u0431\u0435\u0442\u043e\u043d\u0443, \u043c\u043e\u043d\u043e\u043b\u0456\u0442\u043d\u0438\u0445 \u0440\u043e\u0431\u0456\u0442. \u041c\u0456\u0448\u043e\u043a 50 \u043a\u0433.', img:'', specs:[['Grade', 'M500'],['Weight', '50 \u043a\u0433'],['Guarantee', '6 \u043c\u0456\u0441']] },
  { id:'bm2', category:'budmaterialy', subcategory:null, name:'\u0428\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043d\u0430 \u0441\u0443\u043c\u0456\u0448 (25 \u043a\u0433)', price:280, desc:'\u0413\u0456\u043f\u0441\u043e\u0432\u0430 \u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043d\u0430 \u0441\u0443\u043c\u0456\u0448 \u0434\u043b\u044f \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0445 \u0440\u043e\u0431\u0456\u0442. \u041b\u0435\u0433\u043a\u043e \u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f, \u0434\u0430\u0454 \u0440\u0456\u0432\u043d\u0438\u0439 \u0448\u0430\u0440 \u0431\u0435\u0437 \u0442\u0440\u0456\u0449\u0438\u043d.', img:'', specs:[['Consumption', '8-10 \u043a\u0433/\u043c\xb2'],['Layer', '5-50 \u043c\u043c'],['Type', '\u0413\u0456\u043f\u0441\u043e\u0432\u0430']] },
  { id:'bm3', category:'budmaterialy', subcategory:null, name:'\u041f\u043b\u0438\u0442\u043a\u0430 \u043a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0430 30\xd760', price:450, desc:'\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430 \u043a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0430 \u043f\u043b\u0438\u0442\u043a\u0430. \u0413\u043b\u044f\u043d\u0446\u0435\u0432\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f, \u0441\u0442\u0456\u0439\u043a\u0430 \u0434\u043e \u0432\u043e\u043b\u043e\u0433\u0438. \u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430 6 \u0448\u0442 / 1.08 \u043c\xb2.', img:'', specs:[['Size', '30\xd760 \u0441\u043c'],['Surface', '\u0413\u043b\u044f\u043d\u0435\u0446\u044c'],['Pack', '6 \u0448\u0442 / 1.08 \u043c\xb2']] },
  { id:'bm4', category:'budmaterialy', subcategory:null, name:'\u041f\u0456\u043d\u043e\u043f\u043b\u0430\u0441\u0442 50\u043c\u043c (\u043f\u043b\u0438\u0442\u0430)', price:190, desc:'\u0422\u0435\u043f\u043b\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u0439\u043d\u0456 \u043f\u043b\u0438\u0442\u0438 EPS \u0434\u043b\u044f \u0443\u0442\u0435\u043f\u043b\u0435\u043d\u043d\u044f \u0441\u0442\u0456\u043d, \u043f\u0456\u0434\u043b\u043e\u0433 \u0442\u0430 \u043f\u043e\u043a\u0440\u0456\u0432\u043b\u0456. \u041f\u0440\u043e\u0441\u0442\u0438\u0439 \u043c\u043e\u043d\u0442\u0430\u0436, \u043d\u0435\u0442\u043e\u043a\u0441\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b.', img:'', specs:[['Thickness', '50 \u043c\u043c'],['Density', '25 \u043a\u0433/\u043c\xb3'],['Size', '1000\xd7500 \u043c\u043c']] },
  { id:'bm5', category:'budmaterialy', subcategory:null, name:'\u0413\u0456\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d 2500\xd71200', price:360, desc:'\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u0433\u0456\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043e\u0440\u043e\u0434\u043e\u043a \u0442\u0430 \u043f\u0456\u0434\u0432\u0456\u0441\u043d\u0438\u0445 \u0441\u0442\u0435\u043b\u044c. \u041b\u0435\u0433\u043a\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0430, \u0440\u0456\u0432\u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f.', img:'', specs:[['Size', '2500\xd71200 \u043c\u043c'],['Thickness', '12.5 \u043c\u043c'],['Type', '\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439']] },
  { id:'bm6', category:'budmaterialy', subcategory:null, name:'\u0424\u0430\u0440\u0431\u0430 \u0456\u043d\u0442\u0435\u0440\u2019\u0454\u0440\u043d\u0430 \u0431\u0456\u043b\u0430 (10\u043b)', price:680, desc:'\u0410\u043a\u0440\u0438\u043b\u043e\u0432\u0430 \u0444\u0430\u0440\u0431\u0430 \u0434\u043b\u044f \u0441\u0442\u0456\u043d \u0442\u0430 \u0441\u0442\u0435\u043b\u044c. \u0411\u0435\u0437 \u0437\u0430\u043f\u0430\u0445\u0443, \u043b\u0435\u0433\u043a\u043e \u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0432\u0430\u043b\u0438\u043a\u043e\u043c, \u0441\u0442\u0456\u0439\u043a\u0430 \u0434\u043e \u0432\u043e\u043b\u043e\u0433\u043e\u0433\u043e \u043f\u0440\u0438\u0431\u0438\u0440\u0430\u043d\u043d\u044f.', img:'', specs:[['Volume', '10 \u043b'],['Consumption', '8-12 \u043c\xb2/\u043b'],['Coats', '2']] },
  { id:'bm7', category:'budmaterialy', subcategory:null, name:'\u041a\u043b\u0435\u0439 \u043f\u043b\u0438\u0442\u043e\u0447\u043d\u0438\u0439 (25 \u043a\u0433)', price:230, desc:'\u0426\u0435\u043c\u0435\u043d\u0442\u043d\u0438\u0439 \u043a\u043b\u0435\u0439 C1 \u0434\u043b\u044f \u0443\u043a\u043b\u0430\u0434\u0430\u043d\u043d\u044f \u043f\u043b\u0438\u0442\u043a\u0438 \u043d\u0430 \u043f\u0456\u0434\u043b\u043e\u0433\u0443 \u0442\u0430 \u0441\u0442\u0456\u043d\u0438. \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0439 \u0447\u0430\u0441 \u0440\u043e\u0431\u043e\u0442\u0438 20 \u0445\u0432\u0438\u043b\u0438\u043d.', img:'', specs:[['Weight', '25 \u043a\u0433'],['Class', 'C1'],['Open time', '20 \u0445\u0432']] },
  { id:'bm8', category:'budmaterialy', subcategory:null, name:'\u041f\u0440\u043e\u0444\u0456\u043b\u044c UD 3\u043c', price:95, desc:'\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0438\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c UD 28\xd727 \u043c\u043c \u0434\u043b\u044f \u043c\u043e\u043d\u0442\u0430\u0436\u0443 \u0433\u0456\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0433\u043e\u0440\u043e\u0434\u043e\u043a. \u041e\u0446\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u0430 \u0441\u0442\u0430\u043b\u044c 0.55 \u043c\u043c.', img:'', specs:[['Length', '3 \u043c'],['Section', '28\xd727 \u043c\u043c'],['Material', '\u041e\u0446\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u0430 \u0441\u0442\u0430\u043b\u044c']] },
  // ---- Інструмент: Електро ----
  { id:'ie1', category:'instrument', subcategory:'elektro', name:'\u0414\u0440\u0438\u043b\u044c-\u0448\u0443\u0440\u0443\u043f\u043e\u043a\u0440\u0443\u0442 18\u0412', price:3800, desc:'\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0443\u0440\u0443\u043f\u043e\u043a\u0440\u0443\u0442 18 \u0412 \u0437 \u0434\u0432\u043e\u043c\u0430 \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430\u043c\u0438 \u0443 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0456. 25+1 \u043f\u043e\u0437\u0438\u0446\u0456\u0439 \u043a\u0440\u0443\u0442\u043d\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0443, \u0440\u0435\u0432\u0435\u0440\u0441, \u043f\u0456\u0434\u0441\u0432\u0456\u0442\u043a\u0430 \u0440\u043e\u0431\u043e\u0447\u043e\u0457 \u0437\u043e\u043d\u0438.', img:'', specs:[] },
  { id:'ie2', category:'instrument', subcategory:'elektro', name:'\u0411\u043e\u043b\u0433\u0430\u0440\u043a\u0430 125\u043c\u043c 850\u0412\u0442', price:2900, desc:'\u041a\u0443\u0442\u043e\u0432\u0430 \u0448\u043b\u0456\u0444\u043c\u0430\u0448\u0438\u043d\u0430 850 \u0412\u0442. \u041f\u043b\u0430\u0432\u043d\u0438\u0439 \u043f\u0443\u0441\u043a, \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f, \u0444\u0456\u043a\u0441\u0430\u0442\u043e\u0440 \u0448\u043f\u0438\u043d\u0434\u0435\u043b\u044f.', img:'', specs:[] },
  { id:'ie3', category:'instrument', subcategory:'elektro', name:'\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0442\u043e\u0440 SDS+ 900\u0412\u0442', price:5500, desc:'\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0442\u043e\u0440 SDS+ 900 \u0412\u0442 \u0437 \u0442\u0440\u044c\u043e\u043c\u0430 \u0440\u0435\u0436\u0438\u043c\u0430\u043c\u0438. \u0421\u0438\u043b\u0430 \u0443\u0434\u0430\u0440\u0443 3 \u0414\u0436, \u0448\u0432\u0438\u0434\u043a\u0438\u0439 \u043f\u0430\u0442\u0440\u043e\u043d SDS+.', img:'', specs:[] },
  { id:'ie4', category:'instrument', subcategory:'elektro', name:'\u041b\u043e\u0431\u0437\u0438\u043a \u0435\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043d\u0438\u0439 650\u0412\u0442', price:2200, desc:'\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u043e\u0431\u0437\u0438\u043a 650 \u0412\u0442 \u0437 \u043c\u0430\u044f\u0442\u043d\u0438\u043a\u043e\u0432\u0438\u043c \u0445\u043e\u0434\u043e\u043c (4 \u0440\u0435\u0436\u0438\u043c\u0438). \u041f\u043b\u0430\u0432\u043d\u0435 \u0440\u0435\u0433\u0443\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u0448\u0432\u0438\u0434\u043a\u043e\u0441\u0442\u0456.', img:'', specs:[] },
  // ---- Інструмент: Набори ----
  { id:'in1', category:'instrument', subcategory:'nabory', name:'\u041d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 108 \u043f\u0440.', price:2400, desc:'\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 108 \u043e\u0434\u0438\u043d\u0438\u0446\u044c \u0443 \u043c\u0435\u0442\u0430\u043b\u0435\u0432\u043e\u043c\u0443 \u0432\u0430\u043b\u0456\u0437\u0446\u0456. \u041a\u043b\u044e\u0447\u0456, \u0432\u0456\u0434\u0432\u0435\u0440\u0442\u043a\u0438, \u043f\u0430\u0441\u0430\u0442\u0438\u0436\u0456, \u043c\u043e\u043b\u043e\u0442\u043e\u043a, \u0440\u0443\u043b\u0435\u0442\u043a\u0430. \u0421\u0442\u0430\u043b\u044c CRV.', img:'', specs:[] },
  { id:'in2', category:'instrument', subcategory:'nabory', name:'\u041d\u0430\u0431\u0456\u0440 \u0431\u0456\u0442 \u0442\u0430 \u0441\u0432\u0435\u0440\u0434\u0435\u043b 60 \u043f\u0440.', price:1200, desc:'\u041d\u0430\u0431\u0456\u0440 \u0437 60 \u043d\u0430\u0441\u0430\u0434\u043e\u043a: \u0431\u0456\u0442\u0438 PH, PZ, Torx, \u0448\u043b\u0456\u0446, \u0441\u0432\u0435\u0440\u0434\u043b\u0430 \u043f\u043e \u0434\u0435\u0440\u0435\u0432\u0443 \u0442\u0430 \u043c\u0435\u0442\u0430\u043b\u0443. \u041f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u0438\u0439 \u043a\u0435\u0439\u0441.', img:'', specs:[] },
  { id:'in3', category:'instrument', subcategory:'nabory', name:'\u041d\u0430\u0431\u0456\u0440 \u043a\u043b\u044e\u0447\u0456\u0432 12 \u043f\u0440.', price:890, desc:'\u0420\u0456\u0436\u043a\u043e\u0432\u043e-\u043d\u0430\u043a\u0438\u0434\u043d\u0456 \u043a\u043b\u044e\u0447\u0456 8-24 \u043c\u043c (12 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0456\u0432). \u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0445\u0440\u043e\u043c-\u0432\u0430\u043d\u0430\u0434\u0456\u0439, \u0442\u0435\u0440\u043c\u043e\u043e\u0431\u0440\u043e\u0431\u043a\u0430.', img:'', specs:[] },
  { id:'in4', category:'instrument', subcategory:'nabory', name:'\u041d\u0430\u0431\u0456\u0440 \u0432\u0438\u043a\u0440\u0443\u0442\u043e\u043a 8 \u043f\u0440.', price:450, desc:'\u0412\u0456\u0434\u0432\u0435\u0440\u0442\u043a\u0438 Philips \u0442\u0430 Torx (8 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0456\u0432). \u0415\u0440\u0433\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0456 \u0440\u0443\u043a\u043e\u044f\u0442\u043a\u0438, \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a\u0438 S2.', img:'', specs:[] },
  // ---- Для дому: Посуд ----
  { id:'dp1', category:'dlyadomu', subcategory:'posud', name:'\u041d\u0430\u0431\u0456\u0440 \u043a\u0430\u0441\u0442\u0440\u0443\u043b\u044c 6 \u043f\u0440.', price:3800, desc:'\u041d\u0430\u0431\u0456\u0440 \u0437 6 \u043a\u0430\u0441\u0442\u0440\u0443\u043b\u044c \u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u043e\u0457 \u0441\u0442\u0430\u043b\u0456 18/10. \u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u0434\u043d\u0430 5 \u043c\u043c, \u043a\u0440\u0438\u0448\u043a\u0438 \u0437\u0456 \u0441\u043a\u043b\u0430.', img:'', specs:[] },
  { id:'dp2', category:'dlyadomu', subcategory:'posud', name:'\u0421\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0430 Granite 28 \u0441\u043c', price:1200, desc:'\u0410\u043b\u044e\u043c\u0456\u043d\u0456\u0454\u0432\u0430 \u0441\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0430 \u0437 5-\u0448\u0430\u0440\u043e\u0432\u0438\u043c \u0433\u0440\u0430\u043d\u0456\u0442\u043d\u0438\u043c \u0430\u043d\u0442\u0438\u043f\u0440\u0438\u0433\u0430\u0440\u043d\u0438\u043c \u043f\u043e\u043a\u0440\u0438\u0442\u0442\u044f\u043c. \u041f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0456\u043d\u0434\u0443\u043a\u0446\u0456\u0457.', img:'', specs:[] },
  { id:'dp3', category:'dlyadomu', subcategory:'posud', name:'\u0421\u0442\u043e\u043b\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0437 18 \u043f\u0440.', price:2900, desc:'\u041f\u043e\u0440\u0446\u0435\u043b\u044f\u043d\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0437 \u043d\u0430 6 \u043f\u0435\u0440\u0441\u043e\u043d. 6 \u043e\u0431\u0456\u0434\u043d\u0456\u0445, 6 \u0434\u0435\u0441\u0435\u0440\u0442\u043d\u0438\u0445, 6 \u043c\u0438\u0441\u043e\u043a. \u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439 \u0431\u0456\u043b\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d.', img:'', specs:[] },
  { id:'dp4', category:'dlyadomu', subcategory:'posud', name:'\u0422\u0435\u0440\u043c\u043e\u0441 \u0445\u0430\u0440\u0447\u043e\u0432\u0438\u0439 1.5 \u043b', price:780, desc:'\u041d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u0430 \u0441\u0442\u0430\u043b\u044c, \u0448\u0438\u0440\u043e\u043a\u0435 \u0433\u043e\u0440\u043b\u043e. \u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0433\u0430\u0440\u044f\u0447\u043e\u0433\u043e 12 \u0433\u043e\u0434\u0438\u043d, \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e 24 \u0433\u043e\u0434\u0438\u043d\u0438.', img:'', specs:[] },
  // ---- Для дому: Хімія ----
  { id:'dh1', category:'dlyadomu', subcategory:'himiya', name:'\u0413\u0435\u043b\u044c \u0434\u043b\u044f \u043f\u0440\u0430\u043d\u043d\u044f 3 \u043b', price:380, desc:'\u041a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0433\u0435\u043b\u044c \u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u0442\u0438\u043f\u0456\u0432 \u0442\u043a\u0430\u043d\u0438\u043d 30\u201390 \xb0C. \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0441\u043a\u043b\u0430\u0434\u043d\u0456 \u043f\u043b\u044f\u043c\u0438, 60 \u043f\u0440\u0430\u043d\u044c.', img:'', specs:[] },
  { id:'dh2', category:'dlyadomu', subcategory:'himiya', name:'\u0417\u0430\u0441\u0456\u0431 \u0434\u043b\u044f \u043c\u0438\u0442\u0442\u044f \u043f\u043e\u0441\u0443\u0434\u0443 1\u043b', price:120, desc:'\u0410\u043d\u0442\u0438\u0431\u0430\u043a\u0442\u0435\u0440\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u0437\u0430\u0441\u0456\u0431 \u0434\u043b\u044f \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u0442\u0442\u044f. \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0436\u0438\u0440, \u043d\u0430\u0433\u0430\u0440, \u0437\u0430\u043b\u0438\u0448\u043a\u0438 \u0457\u0436\u0456 \u0431\u0435\u0437 \u0437\u0430\u043b\u0438\u0448\u043a\u0456\u0432.', img:'', specs:[] },
  { id:'dh3', category:'dlyadomu', subcategory:'himiya', name:'\u0421\u043f\u0440\u0435\u0439 \u0434\u043b\u044f \u0432\u0430\u043d\u043d\u043e\u0457 750\u043c\u043b', price:95, desc:'\u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0432\u0430\u043f\u043d\u044f\u043d\u0438\u0439 \u043d\u0430\u043b\u0456\u0442, \u0456\u0440\u0436\u0443 \u0442\u0430 \u043c\u0438\u043b\u044c\u043d\u0438\u0439 \u043e\u0441\u0430\u0434 \u0437 \u043a\u0435\u0440\u0430\u043c\u0456\u043a\u0438 \u0442\u0430 \u0445\u0440\u043e\u043c\u043e\u0432\u0430\u043d\u0438\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044c. \u0411\u0435\u0437 \u0445\u043b\u043e\u0440\u0443.', img:'', specs:[] },
  { id:'dh4', category:'dlyadomu', subcategory:'himiya', name:'\u041a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440 \u0434\u043b\u044f \u0431\u0456\u043b\u0438\u0437\u043d\u0438 2\u043b', price:290, desc:'\u041c\u0103\u043a\u0438\u0439 \u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440 \u043d\u0430\u0434\u0430\u0454 \u043d\u0435\u043f\u0435\u0440\u0435\u0432\u0435\u0440\u0448\u0435\u043d\u0443 \u043c\u2019\u044f\u043a\u0456\u0441\u0442\u044c \u0442\u0430 \u043a\u0432\u0456\u0442\u043a\u043e\u0432\u0438\u0439 \u0430\u0440\u043e\u043c\u0430\u0442. 50 \u043f\u0440\u0430\u043d\u044c.', img:'', specs:[] }
];

// ============================================
//  HELPERS
// ============================================
function findProduct(id) { for (var i=0;i<PRODUCTS.length;i++) { if (PRODUCTS[i].id===id) return PRODUCTS[i]; } return null; }
function findCategory(id) { for (var i=0;i<CATEGORIES.length;i++) { if (CATEGORIES[i].id===id) return CATEGORIES[i]; } return null; }

function noImgHtml(size) {
  var s = size || 'md';
  return '<div class="no-img no-img--'+s+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Фото невдовзі</span></div>';
}

// ============================================
//  APP STATE
// ============================================
var state = { category:null, product:null, subcategory:'all', sort:'default' };
var root  = document.getElementById('catalog-root');

// ============================================
//  INIT
// ============================================
function initCatalog() {
  if (!root) return;
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
//  MAIN CATALOG
// ============================================
function renderMainCatalog() {
  var html = '<div class="container"><div class="catalog-header"><h1 class="section-title">Каталог товарів</h1><p class="section-desc">Оберіть категорію для перегляду асортименту</p></div><div class="category-grid">';
  for (var i=0; i<CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    html += '<a href="catalog.html?category='+c.id+'" class="category-card">';
    if (c.img) {
      html += '<img src="'+c.img+'" alt="'+c.name+'" loading="lazy" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">';
      html += '<div style="display:none" class="no-img no-img--lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>';
    } else {
      html += noImgHtml('lg');
    }
    html += '<div class="category-card-title"><span class="category-card-name">'+c.name+'</span><span class="category-card-sub">'+c.desc+'</span></div></a>';
  }
  html += '</div></div>';
  root.innerHTML = html;
}

// ============================================
//  CATEGORY PAGE
// ============================================
function renderCategoryPage() {
  var catInfo = findCategory(state.category);
  var subs = SUBCATEGORIES[state.category];
  var filtered = [];
  for (var i=0;i<PRODUCTS.length;i++) { if (PRODUCTS[i].category===state.category) filtered.push(PRODUCTS[i]); }
  if (state.subcategory && state.subcategory!=='all') {
    filtered = filtered.filter(function(p){ return p.subcategory===state.subcategory; });
  }
  if (state.sort==='price-asc')  filtered.sort(function(a,b){ return a.price-b.price; });
  if (state.sort==='price-desc') filtered.sort(function(a,b){ return b.price-a.price; });

  var html = '<div class="container">';
  html += '<a href="catalog.html" class="back-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Усі категорії</a>';
  html += '<div class="catalog-header"><h1 class="section-title">'+catInfo.name+'</h1></div>';
  html += '<div class="catalog-controls">';
  if (subs && subs.length>0) {
    html += '<div class="catalog-filters">';
    for (var s=0;s<subs.length;s++) {
      html += '<button class="chip'+(state.subcategory===subs[s].id?' active':'')+'" data-sub="'+subs[s].id+'">'+subs[s].name+'</button>';
    }
    html += '</div>';
  } else { html += '<div></div>'; }
  html += '<select class="sort-select" id="sortSelect">';
  html += '<option value="default"'+(state.sort==='default'?' selected':'')+'>За замовчуванням</option>';
  html += '<option value="price-asc"'+(state.sort==='price-asc'?' selected':'')+'>Від найдешевших</option>';
  html += '<option value="price-desc"'+(state.sort==='price-desc'?' selected':'')+'>Від найдорожчих</option>';
  html += '</select></div>';
  html += '<div class="products-grid" id="productsGrid">';
  if (!filtered.length) {
    html += '<div class="product-empty">Товарів не знайдено</div>';
  } else {
    for (var k=0;k<filtered.length;k++) {
      var p = filtered[k];
      var detailLink = 'catalog.html?category='+p.category+'&product='+p.id;
      html += '<div class="product-card">';
      html += '<a href="'+detailLink+'" class="product-card-img-link">'+(p.img?'<img src="'+p.img+'" alt="'+p.name+'" class="product-img" loading="lazy">':noImgHtml('md'))+'</a>';
      html += '<div class="product-content">';
      html += '<a href="'+detailLink+'"><h3 class="product-title">'+p.name+'</h3></a>';
      html += '<p class="product-desc">'+p.desc.substring(0,75)+'…</p>';
      html += '<div class="product-footer">';
      html += '<div class="product-price">'+p.price.toLocaleString('uk-UA')+' ₴</div>';
      html += '<button class="btn btn-cta btn-sm btn-add-cart" data-id="'+p.id+'">В кошик</button>';
      html += '</div></div></div>';
    }
  }
  html += '</div></div>';
  root.innerHTML = html;
  bindEvents(filtered);
}

// ============================================
//  PRODUCT DETAIL PAGE
// ============================================
function renderProductPage(p) {
  var catInfo  = findCategory(p.category);
  var catLink  = 'catalog.html?category='+p.category;
  var imgHtml  = p.img ? '<img src="'+p.img+'" alt="'+p.name+'" class="product-detail-img">' : '<div class="no-img no-img--xl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Фото невдовзі</span></div>';

  var specsHtml = '';
  if (p.specs && p.specs.length>0) {
    specsHtml = '<div class="product-detail-specs"><h3 class="product-specs-title">Характеристики</h3><table class="specs-table">';
    for (var i=0;i<p.specs.length;i++) {
      specsHtml += '<tr><td>'+p.specs[i][0]+'</td><td>'+p.specs[i][1]+'</td></tr>';
    }
    specsHtml += '</table></div>';
  }

  var html = '<div class="container">';
  html += '<nav class="breadcrumb"><a href="catalog.html">Каталог</a><span class="bc-sep">›</span><a href="'+catLink+'">'+catInfo.name+'</a><span class="bc-sep">›</span><span>'+p.name+'</span></nav>';
  html += '<div class="product-detail-grid">';
  html += '<div class="product-detail-img-wrap">'+imgHtml+'</div>';
  html += '<div class="product-detail-info">';
  html += '<div class="product-detail-cat">'+catInfo.name+'</div>';
  html += '<h1 class="product-detail-title">'+p.name+'</h1>';
  html += '<div class="product-detail-price">'+p.price.toLocaleString('uk-UA')+' ₴</div>';
  html += '<p class="product-detail-desc">'+p.desc+'</p>';
  html += specsHtml;
  html += '<div class="product-detail-actions">';
  html += '<button class="btn btn-cta btn-lg btn-add-cart-detail" data-id="'+p.id+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:8px"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>Додати в кошик</button>';
  html += '<a href="tel:+380978973207" class="btn btn-outline btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:6px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Зателефонувати</a>';
  html += '</div>';
  html += '<a href="'+catLink+'" class="product-back-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Назад до «'+catInfo.name+'»</a>';
  html += '</div></div></div>';

  root.innerHTML = html;

  var addBtn = document.querySelector('.btn-add-cart-detail');
  if (addBtn) {
    addBtn.addEventListener('click', function(){
      if (window.GAZDA_CART) window.GAZDA_CART.add(p);
    });
  }
}

// ============================================
//  EVENTS (category page)
// ============================================
function bindEvents(filtered) {
  // Chips
  var chips = document.querySelectorAll('.chip');
  for (var i=0;i<chips.length;i++) {
    chips[i].addEventListener('click', function(e){
      state.subcategory = e.currentTarget.getAttribute('data-sub');
      renderCategoryPage();
    });
  }
  // Sort
  var ss = document.getElementById('sortSelect');
  if (ss) ss.addEventListener('change', function(e){ state.sort=e.target.value; renderCategoryPage(); });
  // Add to cart buttons
  var addBtns = document.querySelectorAll('.btn-add-cart');
  for (var j=0;j<addBtns.length;j++) {
    (function(btn){
      btn.addEventListener('click', function(){
        var id = btn.getAttribute('data-id');
        if (!window.GAZDA_CART) return;
        for (var k=0;k<filtered.length;k++) {
          if (filtered[k].id===id) { window.GAZDA_CART.add(filtered[k]); break; }
        }
      });
    })(addBtns[j]);
  }
}

initCatalog();
