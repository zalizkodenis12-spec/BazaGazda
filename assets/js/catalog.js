// ============================================
//  CATALOG DATA
// ============================================
var CATEGORIES = [
  { id:'technika',     name:'\u0422\u0435\u0445\u043d\u0456\u043a\u0430',        desc:'\u0412\u0435\u043b\u0438\u043a\u0430 \u0442\u0430 \u0434\u0440\u0456\u0431\u043d\u0430 \u043f\u043e\u0431\u0443\u0442\u043e\u0432\u0430', img:'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232357.png' },
  { id:'budmaterialy', name:'\u0411\u0443\u0434\u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438',   desc:'\u0414\u043b\u044f \u0440\u0435\u043c\u043e\u043d\u0442\u0443 \u0442\u0430 \u0431\u0443\u0434\u0456\u0432\u043d\u0438\u0446\u0442\u0432\u0430', img:'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232417.png' },
  { id:'instrument',   name:'\u0406\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442',      desc:'\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0442\u0430 \u043d\u0430\u0431\u043e\u0440\u0438', img:'assets/images/\u0437\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-14 132122.png' },
  { id:'dlyadomu',     name:'\u0414\u043b\u044f \u0434\u043e\u043c\u0443',      desc:'\u041f\u043e\u0441\u0443\u0434 \u0442\u0430 \u043f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0445\u0456\u043c\u0456\u044f', img:'assets/images/\u0417\u043d\u0456\u043c\u043e\u043a \u0435\u043a\u0440\u0430\u043d\u0430 2026-07-20 232644.png' }
];

var SUBCATEGORIES = {
  technika:     [{ id:'all', name:'\u0412\u0441\u0456' }, { id:'dribna', name:'\u0414\u0440\u0456\u0431\u043d\u0430' }, { id:'velyka', name:'\u0412\u0435\u043b\u0438\u043a\u0430' }],
  instrument:   [{ id:'all', name:'\u0412\u0441\u0456' }, { id:'elektro', name:'\u0415\u043b\u0435\u043a\u0442\u0440\u043e' }, { id:'nabory', name:'\u041d\u0430\u0431\u043e\u0440\u0438' }],
  dlyadomu:     [{ id:'all', name:'\u0412\u0441\u0456' }, { id:'posud', name:'\u041f\u043e\u0441\u0443\u0434' }, { id:'himiya', name:'\u0425\u0456\u043c\u0456\u044f' }],
  budmaterialy: []
};

// available: true = В наявності, false = Під замовлення
var PRODUCTS = [
  // --- Техніка: Дрібна ---
  { id:'td1', category:'technika', subcategory:'dribna', available:true,  name:'\u0411\u043b\u0435\u043d\u0434\u0435\u0440 Phillipa BL-200',    price:1350,  desc:'\u041f\u043e\u0442\u0443\u0436\u043d\u0438\u0439 \u0441\u0442\u0430\u0446\u0456\u043e\u043d\u0430\u0440\u043d\u0438\u0439 \u0431\u043b\u0435\u043d\u0434\u0435\u0440 800 \u0412\u0442 \u0437 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u0447\u0430\u0448 \u0434\u043b\u044f \u0449\u043e\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f. \u0406\u0434\u0435\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u043b\u044f \u0441\u043c\u0443\u0437\u0456, \u0441\u0443\u043f\u0456\u0432, \u0441\u043e\u0443\u0441\u0456\u0432 \u0442\u0430 \u0434\u0438\u0442\u044f\u0447\u043e\u0433\u043e \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f.', images:['','',''], specs:[] },
  { id:'td2', category:'technika', subcategory:'dribna', available:true,  name:'\u0422\u043e\u0441\u0442\u0435\u0440 TechHome T4',                price:980,   desc:'\u0422\u043e\u0441\u0442\u0435\u0440 \u043d\u0430 4 \u0441\u043b\u043e\u0442\u0438 \u0437 \u043f\u043b\u0430\u0432\u043d\u0438\u043c \u0440\u0435\u0433\u0443\u043b\u044e\u0432\u0430\u043d\u043d\u044f\u043c \u0441\u0442\u0443\u043f\u0435\u043d\u044f \u043f\u0456\u0434\u0441\u043c\u0430\u0436\u0443\u0432\u0430\u043d\u043d\u044f. \u0424\u0443\u043d\u043a\u0446\u0456\u0457 \u043f\u0456\u0434\u0456\u0433\u0440\u0456\u0432\u0443 \u0442\u0430 \u0440\u043e\u0437\u043c\u043e\u0440\u043e\u0436\u0443\u0432\u0430\u043d\u043d\u044f. \u0417\u043d\u0456\u043c\u043d\u0438\u0439 \u043f\u0456\u0434\u0434\u043e\u043d.', images:['',''], specs:[] },
  { id:'td3', category:'technika', subcategory:'dribna', available:true,  name:'\u0427\u0430\u0439\u043d\u0438\u043a \u0435\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043d\u0438\u0439 2.5\u043b',        price:1100,  desc:'\u0428\u0432\u0438\u0434\u043a\u0435 \u043a\u0438\u043f\u0456\u043d\u043d\u044f \u0437\u0430 3-4 \u0445\u0432. \u041a\u043e\u0440\u043f\u0443\u0441 \u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u043e\u0457 \u0441\u0442\u0430\u043b\u0456, \u043f\u0456\u0434\u0441\u0432\u0456\u0442\u043a\u0430 \u0440\u0456\u0432\u043d\u044f \u0432\u043e\u0434\u0438, \u0430\u0432\u0442\u043e\u0432\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f.', images:['',''], specs:[] },
  { id:'td4', category:'technika', subcategory:'dribna', available:true,  name:'\u041c\u0456\u043a\u0440\u043e\u0445\u0432\u0438\u043b\u044c\u043e\u0432\u0430 \u043f\u0456\u0447 20\u043b',         price:2850,  desc:'\u041c\u0456\u043a\u0440\u043e\u0445\u0432\u0438\u043b\u044c\u043e\u0432\u0430 \u043f\u0456\u0447 \u0437 \u0444\u0443\u043d\u043a\u0446\u0456\u0454\u044e \u0433\u0440\u0438\u043b\u044f. 5 \u0440\u0456\u0432\u043d\u0456\u0432 \u043f\u043e\u0442\u0443\u0436\u043d\u043e\u0441\u0442\u0456, \u0442\u0430\u0439\u043c\u0435\u0440 \u0434\u043e 30 \u0445\u0432, 20 \u043b.', images:['',''], specs:[] },
  { id:'td5', category:'technika', subcategory:'dribna', available:false, name:'\u0421\u043e\u043a\u043e\u0432\u0438\u0436\u0438\u043c\u0430\u043b\u043a\u0430 ProFresh S1',       price:1600,  desc:'\u0428\u043d\u0435\u043a\u043e\u0432\u0430 \u0441\u043e\u043a\u043e\u0432\u0438\u0436\u0438\u043c\u0430\u043b\u043a\u0430 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0436\u0438\u043c\u0443. \u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0456\u0432. \u0421\u043e\u043a\u043e\u0432\u0438\u0442\u0456\u0441\u0442\u044c \u0434\u043e 90%.', images:['',''], specs:[] },
  { id:'td6', category:'technika', subcategory:'dribna', available:false, name:'\u041a\u0430\u0432\u043e\u0432\u0430\u0440\u043a\u0430 EspressoPro E15',      price:3200,  desc:'\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0430 \u0440\u043e\u0436\u043a\u043e\u0432\u0430 \u043a\u0430\u0432\u043e\u0432\u0430\u0440\u043a\u0430 \u0437 \u043a\u0430\u043f\u0443\u0447\u0438\u043d\u0430\u0442\u043e\u0440\u043e\u043c. 15 \u0431\u0430\u0440, \u043d\u0430\u0433\u0440\u0456\u0432 \u0437\u0430 30 \u0441.', images:['','',''], specs:[] },
  // --- Техніка: Велика ---
  { id:'tv1', category:'technika', subcategory:'velyka',  available:true,  name:'\u0425\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a FrostMax 300',     price:18000, desc:'\u0414\u0432\u043e\u043a\u0430\u043c\u0435\u0440\u043d\u0438\u0439 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a No Frost. \u0420\u0456\u0432\u043d\u043e\u043c\u0456\u0440\u043d\u0435 \u043e\u0445\u043e\u043b\u043e\u0434\u0436\u0435\u043d\u043d\u044f, \u0442\u0438\u0445\u0438\u0439 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u043e\u0440. \u041a\u043b\u0430\u0441 A++.', images:['','',''], specs:[['Object','300 \u043b'],['Class','A++'],['Height','185 \u0441\u043c'],['Guarantee','3 \u0440\u043e\u043a\u0438']] },
  { id:'tv2', category:'technika', subcategory:'velyka',  available:true,  name:'\u041f\u0440\u0430\u043b\u044c\u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0430 ClearWash 7',  price:15500, desc:'\u0424\u0440\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f 7 \u043a\u0433. 16 \u043f\u0440\u043e\u0433\u0440\u0430\u043c, \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043f\u0440\u043e\u0442\u0456\u043a\u0430\u043d\u044c. \u041a\u043b\u0430\u0441 A+++.', images:['',''], specs:[['Load','7 \u043a\u0433'],['RPM','1200'],['Guarantee','2 \u0440\u043e\u043a\u0438']] },
  { id:'tv3', category:'technika', subcategory:'velyka',  available:true,  name:'\u041f\u043e\u0441\u0443\u0434\u043e\u043c\u0438\u0439\u043d\u0430 DishMate 12',    price:14000, desc:'\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0430 \u043f\u043e\u0441\u0443\u0434\u043e\u043c\u0438\u0439\u043d\u0430 \u043d\u0430 12 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0456\u0432. 5 \u043f\u0440\u043e\u0433\u0440\u0430\u043c, \u0442\u0438\u0445\u0438\u0439 \u0440\u0435\u0436\u0438\u043c 44 \u0434\u0411.', images:['',''], specs:[['Sets','12'],['Noise','44 \u0434\u0411'],['Guarantee','2 \u0440\u043e\u043a\u0438']] },
  { id:'tv4', category:'technika', subcategory:'velyka',  available:false, name:'\u041a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440 AirCool 12000',  price:22000, desc:'\u0421\u043f\u043b\u0456\u0442-\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0437 \u0456\u043d\u0432\u0435\u0440\u0442\u043e\u0440\u043d\u0438\u043c \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u043e\u0440\u043e\u043c. Wi-Fi, \u043e\u0431\u0456\u0433\u0440\u0456\u0432/\u043e\u0445\u043e\u043b\u043e\u0434\u0436\u0435\u043d\u043d\u044f.', images:['','',''], specs:[['BTU','12000'],['Area','\u0434\u043e 35 \u043c\xb2'],['Guarantee','3 \u0440\u043e\u043a\u0438']] },
  // --- Будматеріали ---
  { id:'bm1', category:'budmaterialy', subcategory:null, available:true,  name:'\u0426\u0435\u043c\u0435\u043d\u0442 \u041c500 (50 \u043a\u0433)',        price:320,   desc:'\u041f\u043e\u0440\u0442\u043b\u0430\u043d\u0434\u0446\u0435\u043c\u0435\u043d\u0442 \u041c500 \u0434\u043b\u044f \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u0456\u0432, \u0431\u0435\u0442\u043e\u043d\u0443, \u043c\u043e\u043d\u043e\u043b\u0456\u0442\u043d\u0438\u0445 \u0440\u043e\u0431\u0456\u0442. \u041c\u0456\u0448\u043e\u043a 50 \u043a\u0433.', images:['',''], specs:[['Grade','M500'],['Weight','50 \u043a\u0433']] },
  { id:'bm2', category:'budmaterialy', subcategory:null, available:true,  name:'\u0428\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043d\u0430 \u0441\u0443\u043c\u0456\u0448 (25 \u043a\u0433)',   price:280,   desc:'\u0413\u0456\u043f\u0441\u043e\u0432\u0430 \u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043d\u0430 \u0441\u0443\u043c\u0456\u0448 \u0434\u043b\u044f \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0445 \u0440\u043e\u0431\u0456\u0442. \u0420\u0456\u0432\u043d\u0438\u0439 \u0448\u0430\u0440 \u0431\u0435\u0437 \u0442\u0440\u0456\u0449\u0438\u043d.', images:['',''], specs:[['Consumption','8-10 \u043a\u0433/\u043c\xb2']] },
  { id:'bm3', category:'budmaterialy', subcategory:null, available:true,  name:'\u041f\u043b\u0438\u0442\u043a\u0430 \u043a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0430 30\xd760',     price:450,   desc:'\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430 \u043a\u0435\u0440\u0430\u043c\u0456\u0447\u043d\u0430 \u043f\u043b\u0438\u0442\u043a\u0430. \u0413\u043b\u044f\u043d\u0446\u0435\u0432\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f, \u0441\u0442\u0456\u0439\u043a\u0430 \u0434\u043e \u0432\u043e\u043b\u043e\u0433\u0438. 6 \u0448\u0442/1.08\u043c\xb2.', images:['','',''], specs:[['Size','30\xd760 \u0441\u043c'],['Surface','\u0413\u043b\u044f\u043d\u0446\u044c']] },
  { id:'bm4', category:'budmaterialy', subcategory:null, available:true,  name:'\u041f\u0456\u043d\u043e\u043f\u043b\u0430\u0441\u0442 50\u043c\u043c (\u043f\u043b\u0438\u0442\u0430)',     price:190,   desc:'\u0422\u0435\u043f\u043b\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u0439\u043d\u0456 \u043f\u043b\u0438\u0442\u0438 EPS \u0434\u043b\u044f \u0443\u0442\u0435\u043f\u043b\u0435\u043d\u043d\u044f \u0441\u0442\u0456\u043d, \u043f\u0456\u0434\u043b\u043e\u0433 \u0442\u0430 \u043f\u043e\u043a\u0440\u0456\u0432\u043b\u0456.', images:['',''], specs:[['Thickness','50 \u043c\u043c']] },
  { id:'bm5', category:'budmaterialy', subcategory:null, available:true,  name:'\u0413\u0456\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d 2500\xd71200',       price:360,   desc:'\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u0433\u0456\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043e\u0440\u043e\u0434\u043e\u043a \u0442\u0430 \u0441\u0442\u0435\u043b\u044c. \u0420\u0456\u0432\u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f.', images:['',''], specs:[['Size','2500\xd71200 \u043c\u043c'],['Thickness','12.5 \u043c\u043c']] },
  { id:'bm6', category:'budmaterialy', subcategory:null, available:true,  name:'\u0424\u0430\u0440\u0431\u0430 \u0456\u043d\u0442\u0435\u0440\'\u0454\u0440\u043d\u0430 (10\u043b)',       price:680,   desc:'\u0410\u043a\u0440\u0438\u043b\u043e\u0432\u0430 \u0444\u0430\u0440\u0431\u0430 \u0434\u043b\u044f \u0441\u0442\u0456\u043d. \u0411\u0435\u0437 \u0437\u0430\u043f\u0430\u0445\u0443, \u043b\u0435\u0433\u043a\u043e \u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0432\u0430\u043b\u0438\u043a\u043e\u043c.', images:['',''], specs:[['Volume','10 \u043b'],['Coats','2']] },
  { id:'bm7', category:'budmaterialy', subcategory:null, available:false, name:'\u041a\u043b\u0435\u0439 \u043f\u043b\u0438\u0442\u043e\u0447\u043d\u0438\u0439 (25 \u043a\u0433)',      price:230,   desc:'\u0426\u0435\u043c\u0435\u043d\u0442\u043d\u0438\u0439 \u043a\u043b\u0435\u0439 C1 \u0434\u043b\u044f \u0443\u043a\u043b\u0430\u0434\u0430\u043d\u043d\u044f \u043f\u043b\u0438\u0442\u043a\u0438. \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0439 \u0447\u0430\u0441 20 \u0445\u0432.', images:['',''], specs:[['Weight','25 \u043a\u0433'],['Class','C1']] },
  { id:'bm8', category:'budmaterialy', subcategory:null, available:false, name:'\u041f\u0440\u043e\u0444\u0456\u043b\u044c UD 3\u043c',               price:95,    desc:'\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0438\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c UD 28\xd727 \u043c\u043c. \u041e\u0446\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u0430 \u0441\u0442\u0430\u043b\u044c 0.55 \u043c\u043c.', images:['',''], specs:[['Length','3 \u043c'],['Section','28\xd727 \u043c\u043c']] },
  // --- Інструмент: Електро ---
  { id:'ie1', category:'instrument', subcategory:'elektro', available:true,  name:'\u0414\u0440\u0438\u043b\u044c-\u0448\u0443\u0440\u0443\u043f\u043e\u043a\u0440\u0443\u0442 18\u0412',       price:3800,  desc:'\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0443\u0440\u0443\u043f\u043e\u043a\u0440\u0443\u0442 18 \u0412 \u0437 \u0434\u0432\u043e\u043c\u0430 \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430\u043c\u0438. 25+1 \u043f\u043e\u0437\u0438\u0446\u0456\u0439, \u0440\u0435\u0432\u0435\u0440\u0441, \u043f\u0456\u0434\u0441\u0432\u0456\u0442\u043a\u0430.', images:['','',''], specs:[] },
  { id:'ie2', category:'instrument', subcategory:'elektro', available:true,  name:'\u0411\u043e\u043b\u0433\u0430\u0440\u043a\u0430 125\u043c\u043c 850\u0412\u0442',       price:2900,  desc:'\u041a\u0443\u0442\u043e\u0432\u0430 \u0448\u043b\u0456\u0444\u043c\u0430\u0448\u0438\u043d\u0430 850 \u0412\u0442. \u041f\u043b\u0430\u0432\u043d\u0438\u0439 \u043f\u0443\u0441\u043a, \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f.', images:['',''], specs:[] },
  { id:'ie3', category:'instrument', subcategory:'elektro', available:true,  name:'\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0442\u043e\u0440 SDS+ 900\u0412\u0442',      price:5500,  desc:'\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0442\u043e\u0440 SDS+ 900 \u0412\u0442. 3 \u0440\u0435\u0436\u0438\u043c\u0438, \u0441\u0438\u043b\u0430 \u0443\u0434\u0430\u0440\u0443 3 \u0414\u0436.', images:['',''], specs:[] },
  { id:'ie4', category:'instrument', subcategory:'elektro', available:false, name:'\u041b\u043e\u0431\u0437\u0438\u043a \u0435\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043d\u0438\u0439 650\u0412\u0442',    price:2200,  desc:'\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u043e\u0431\u0437\u0438\u043a 650 \u0412\u0442 \u0437 \u043c\u0430\u044f\u0442\u043d\u0438\u043a\u043e\u0432\u0438\u043c \u0445\u043e\u0434\u043e\u043c (4 \u0440\u0435\u0436\u0438\u043c\u0438).', images:['',''], specs:[] },
  // --- Інструмент: Набори ---
  { id:'in1', category:'instrument', subcategory:'nabory',  available:true,  name:'\u041d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 108 \u043f\u0440.',   price:2400,  desc:'\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 108 \u043e\u0434\u0438\u043d\u0438\u0446\u044c \u0443 \u043c\u0435\u0442\u0430\u043b\u0435\u0432\u043e\u043c\u0443 \u0432\u0430\u043b\u0456\u0437\u0446\u0456. \u0421\u0442\u0430\u043b\u044c CRV.', images:['','',''], specs:[] },
  { id:'in2', category:'instrument', subcategory:'nabory',  available:true,  name:'\u041d\u0430\u0431\u0456\u0440 \u0431\u0456\u0442 \u0442\u0430 \u0441\u0432\u0435\u0440\u0434\u0435\u043b 60 \u043f\u0440.',   price:1200,  desc:'60 \u043d\u0430\u0441\u0430\u0434\u043e\u043a: \u0431\u0456\u0442\u0438 PH, PZ, Torx, \u0448\u043b\u0456\u0446, \u0441\u0432\u0435\u0440\u0434\u043b\u0430 \u043f\u043e \u0434\u0435\u0440\u0435\u0432\u0443/\u043c\u0435\u0442\u0430\u043b\u0443.', images:['',''], specs:[] },
  { id:'in3', category:'instrument', subcategory:'nabory',  available:true,  name:'\u041d\u0430\u0431\u0456\u0440 \u043a\u043b\u044e\u0447\u0456\u0432 12 \u043f\u0440.',          price:890,   desc:'\u0420\u0456\u0436\u043a\u043e\u0432\u043e-\u043d\u0430\u043a\u0438\u0434\u043d\u0456 \u043a\u043b\u044e\u0447\u0456 8-24 \u043c\u043c. \u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0445\u0440\u043e\u043c-\u0432\u0430\u043d\u0430\u0434\u0456\u0439.', images:['',''], specs:[] },
  { id:'in4', category:'instrument', subcategory:'nabory',  available:false, name:'\u041d\u0430\u0431\u0456\u0440 \u0432\u0438\u043a\u0440\u0443\u0442\u043e\u043a 8 \u043f\u0440.',          price:450,   desc:'\u0412\u0456\u0434\u0432\u0435\u0440\u0442\u043a\u0438 Philips \u0442\u0430 Torx. \u0415\u0440\u0433\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0456 \u0440\u0443\u043a\u043e\u044f\u0442\u043a\u0438, S2.', images:['',''], specs:[] },
  // --- Для дому: Посуд ---
  { id:'dp1', category:'dlyadomu', subcategory:'posud', available:true,  name:'\u041d\u0430\u0431\u0456\u0440 \u043a\u0430\u0441\u0442\u0440\u0443\u043b\u044c 6 \u043f\u0440.',      price:3800,  desc:'\u041d\u0430\u0431\u0456\u0440 \u0437 6 \u043a\u0430\u0441\u0442\u0440\u0443\u043b\u044c \u0437 \u043d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u043e\u0457 \u0441\u0442\u0430\u043b\u0456. \u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u0434\u043d\u0430 5 \u043c\u043c.', images:['','',''], specs:[] },
  { id:'dp2', category:'dlyadomu', subcategory:'posud', available:true,  name:'\u0421\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0430 Granite 28 \u0441\u043c',    price:1200,  desc:'\u0410\u043b\u044e\u043c\u0456\u043d\u0456\u0454\u0432\u0430 \u0441\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0430. 5-\u0448\u0430\u0440\u043e\u0432\u0435 \u0433\u0440\u0430\u043d\u0456\u0442\u043d\u0435 \u043f\u043e\u043a\u0440\u0438\u0442\u0442\u044f. \u0406\u043d\u0434\u0443\u043a\u0446\u0456\u044f.', images:['',''], specs:[] },
  { id:'dp3', category:'dlyadomu', subcategory:'posud', available:false, name:'\u0421\u0442\u043e\u043b\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0437 18 \u043f\u0440.',     price:2900,  desc:'\u041f\u043e\u0440\u0446\u0435\u043b\u044f\u043d\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0437 \u043d\u0430 6 \u043f\u0435\u0440\u0441\u043e\u043d. \u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439 \u0431\u0456\u043b\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d.', images:['',''], specs:[] },
  { id:'dp4', category:'dlyadomu', subcategory:'posud', available:true,  name:'\u0422\u0435\u0440\u043c\u043e\u0441 \u0445\u0430\u0440\u0447\u043e\u0432\u0438\u0439 1.5 \u043b',       price:780,   desc:'\u041d\u0435\u0440\u0436\u0430\u0432\u0456\u044e\u0447\u0430 \u0441\u0442\u0430\u043b\u044c. \u0413\u0430\u0440\u044f\u0447\u0435 12 \u0433\u043e\u0434, \u0445\u043e\u043b\u043e\u0434\u043d\u0435 24 \u0433\u043e\u0434\u0438\u043d\u0438.', images:['',''], specs:[] },
  // --- Для дому: Хімія ---
  { id:'dh1', category:'dlyadomu', subcategory:'himiya', available:true,  name:'\u0413\u0435\u043b\u044c \u0434\u043b\u044f \u043f\u0440\u0430\u043d\u043d\u044f 3 \u043b',          price:380,   desc:'\u041a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0433\u0435\u043b\u044c. \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0441\u043a\u043b\u0430\u0434\u043d\u0456 \u043f\u043b\u044f\u043c\u0438. 60 \u043f\u0440\u0430\u043d\u044c.', images:['',''], specs:[] },
  { id:'dh2', category:'dlyadomu', subcategory:'himiya', available:true,  name:'\u0417\u0430\u0441\u0456\u0431 \u0434\u043b\u044f \u043f\u043e\u0441\u0443\u0434\u0443 1\u043b',         price:120,   desc:'\u0410\u043d\u0442\u0438\u0431\u0430\u043a\u0442\u0435\u0440\u0456\u0430\u043b\u044c\u043d\u0438\u0439. \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0436\u0438\u0440, \u043d\u0430\u0433\u0430\u0440.', images:['',''], specs:[] },
  { id:'dh3', category:'dlyadomu', subcategory:'himiya', available:true,  name:'\u0421\u043f\u0440\u0435\u0439 \u0434\u043b\u044f \u0432\u0430\u043d\u043d\u043e\u0457 750\u043c\u043b',       price:95,    desc:'\u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u0432\u0430\u043f\u043d\u044f\u043d\u0438\u0439 \u043d\u0430\u043b\u0456\u0442, \u0456\u0440\u0436\u0443. \u0411\u0435\u0437 \u0445\u043b\u043e\u0440\u0443.', images:['',''], specs:[] },
  { id:'dh4', category:'dlyadomu', subcategory:'himiya', available:false, name:'\u041a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440 \u0434\u043b\u044f \u0431\u0456\u043b\u0438\u0437\u043d\u0438 2\u043b',  price:290,   desc:'\u041c\u2019\u044f\u043a\u0438\u0439 \u043a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440. \u041a\u0432\u0456\u0442\u043a\u043e\u0432\u0438\u0439 \u0430\u0440\u043e\u043c\u0430\u0442. 50 \u043f\u0440\u0430\u043d\u044c.', images:['',''], specs:[] }
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
        '<button class="btn btn-cta btn-sm btn-add-cart" data-id="'+p.id+'">\u0412 \u043a\u043e\u0448\u0438\u043a</button>'+
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
  html += '<div style="flex-grow:1; max-width:300px; margin-bottom:0;" class="catalog-search-wrap-inline">' + searchBarHtml(state.search).replace('class="catalog-search-wrap"','class="catalog-search-wrap" style="margin-bottom:0;"') + '</div>';
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
