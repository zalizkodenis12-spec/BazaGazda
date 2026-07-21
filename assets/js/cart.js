// ============================================
//  CART SYSTEM — База ҐАЗДА
// ============================================

var CART_KEY = 'gazda_cart_v1';

// ---- Storage ----
function gcGetCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e) { return []; }
}
function gcSaveCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function gcCount() { return gcGetCart().reduce(function(s,i){ return s+i.qty; },0); }
function gcTotal() { return gcGetCart().reduce(function(s,i){ return s+i.price*i.qty; },0); }

// ---- Mutations ----
function gcAdd(product) {
  var cart = gcGetCart();
  var found = false;
  for (var i=0; i<cart.length; i++) {
    if (cart[i].id === product.id) { cart[i].qty++; found=true; break; }
  }
  if (!found) cart.push({ id:product.id, name:product.name, price:product.price, img:product.img||'', qty:1 });
  gcSaveCart(cart);
  gcRefreshBadge();
  gcToast(product.name);
}
function gcRemove(id) {
  gcSaveCart(gcGetCart().filter(function(i){ return i.id!==id; }));
  gcRefreshBadge();
  gcRenderItems();
}
function gcSetQty(id, qty) {
  var cart = gcGetCart();
  for (var i=0; i<cart.length; i++) {
    if (cart[i].id===id) { cart[i].qty=Math.max(1,qty); break; }
  }
  gcSaveCart(cart);
  gcRefreshBadge();
  gcRenderItems();
}

// ---- Badge ----
function gcRefreshBadge() {
  var n = gcCount();
  var badges = document.querySelectorAll('.cart-badge');
  for (var i=0; i<badges.length; i++) {
    badges[i].textContent = n;
    badges[i].style.display = n>0 ? 'flex' : 'none';
  }
}

// ---- Toast ----
function gcToast(name) {
  var t = document.getElementById('gcToast');
  if (!t) return;
  t.textContent = '✓ Додано в кошик: ' + name;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(function(){ t.classList.remove('show'); }, 2800);
}

// ---- Inject HTML ----
function gcInjectHTML() {
  if (document.getElementById('gcDrawer')) return;

  // Toast
  var toast = document.createElement('div');
  toast.id = 'gcToast';
  toast.className = 'gc-toast';
  document.body.appendChild(toast);

  // Drawer + overlay
  var dHtml = document.createElement('div');
  dHtml.innerHTML =
    '<div id="gcOverlayBg" class="gc-overlay-bg"></div>' +
    '<aside id="gcDrawer" class="gc-drawer" aria-label="Кошик">' +
      '<div class="gc-drawer-head">' +
        '<h3>Кошик</h3>' +
        '<button id="gcDrawerClose" class="gc-close-btn" aria-label="Закрити">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
        '</button>' +
      '</div>' +
      '<div id="gcItems" class="gc-items"></div>' +
      '<div id="gcFooter" class="gc-footer" style="display:none">' +
        '<div class="gc-total-row"><span>Разом:</span><strong id="gcTotalAmt">0 ₴</strong></div>' +
        '<button id="gcCheckoutBtn" class="btn btn-cta btn-block">Оформити замовлення →</button>' +
      '</div>' +
    '</aside>';
  while (dHtml.firstChild) document.body.appendChild(dHtml.firstChild);

  // Checkout overlay
  var co = document.createElement('div');
  co.id = 'gcCheckout';
  co.className = 'gc-checkout';
  co.innerHTML =
    '<div class="gc-checkout-bg"></div>' +
    '<div class="gc-checkout-scroll">' +
      '<div class="gc-checkout-box">' +
        '<button id="gcCheckoutBack" class="gc-back-btn">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
          ' Назад до кошика' +
        '</button>' +
        '<h2 class="gc-checkout-title">Оформлення замовлення</h2>' +
        '<div class="gc-co-summary">' +
          '<p class="gc-co-summary-label">Ваше замовлення:</p>' +
          '<div id="gcCoItemsList"></div>' +
          '<div class="gc-co-total">Загальна сума: <strong id="gcCoTotal">0 ₴</strong></div>' +
        '</div>' +
        '<form id="gcCoForm" class="gc-co-form booking-form">' +
          '<div class="field-wrap">' +
            '<label for="gcName">Ваше ім\'я *</label>' +
            '<input type="text" id="gcName" name="gcName" required placeholder="Олександр">' +
            '<span class="field-error"></span>' +
          '</div>' +
          '<div class="field-wrap">' +
            '<label for="gcPhone">Телефон *</label>' +
            '<input type="tel" id="gcPhone" name="gcPhone" required placeholder="+380 97 000 0000">' +
            '<span class="field-error"></span>' +
          '</div>' +
          '<div class="field-wrap">' +
            '<label for="gcComment">Побажання (необов\'язково)</label>' +
            '<textarea id="gcComment" name="gcComment" rows="3" placeholder="Спосіб доставки, зручний час дзвінка…"></textarea>' +
          '</div>' +
          '<button type="submit" class="btn btn-cta btn-block gc-submit-btn">Відправити замовлення</button>' +
          '<div id="gcCoStatus" class="booking-status"></div>' +
        '</form>' +
      '</div>' +
    '</div>';
  document.body.appendChild(co);

  // Bind events
  document.getElementById('gcOverlayBg').addEventListener('click', gcCloseDrawer);
  document.getElementById('gcDrawerClose').addEventListener('click', gcCloseDrawer);
  document.getElementById('gcCheckoutBtn').addEventListener('click', gcOpenCheckout);
  document.getElementById('gcCheckoutBack').addEventListener('click', function(){
    gcCloseCheckout(); gcOpenDrawer();
  });
  document.getElementById('gcCoForm').addEventListener('submit', gcSubmit);
}

// ---- Drawer ----
function gcOpenDrawer() {
  gcRenderItems();
  document.getElementById('gcDrawer').classList.add('open');
  document.getElementById('gcOverlayBg').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function gcCloseDrawer() {
  document.getElementById('gcDrawer').classList.remove('open');
  document.getElementById('gcOverlayBg').classList.remove('open');
  document.body.style.overflow = '';
}

function gcRenderItems() {
  var wrap = document.getElementById('gcItems');
  var footer = document.getElementById('gcFooter');
  if (!wrap) return;
  var cart = gcGetCart();
  if (cart.length === 0) {
    wrap.innerHTML =
      '<div class="gc-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="52" height="52"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>' +
        '<p>Кошик порожній</p>' +
        '<a href="catalog.html" class="btn btn-cta" style="margin-top:14px;width:auto;padding:12px 28px">До каталогу</a>' +
      '</div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  var html = '';
  for (var i=0; i<cart.length; i++) {
    var it = cart[i];
    var imgHtml = it.img
      ? '<img src="'+it.img+'" alt="'+it.name+'">'
      : '<div class="gc-no-img"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>';
    html +=
      '<div class="gc-item">'+
        '<div class="gc-item-img">'+imgHtml+'</div>'+
        '<div class="gc-item-body">'+
          '<div class="gc-item-name">'+it.name+'</div>'+
          '<div class="gc-item-price">'+it.price.toLocaleString('uk-UA')+' ₴</div>'+
          '<div class="gc-item-row">'+
            '<div class="gc-qty">'+
              '<button class="gc-qty-btn" data-id="'+it.id+'" data-delta="-1">−</button>'+
              '<span class="gc-qty-num">'+it.qty+'</span>'+
              '<button class="gc-qty-btn" data-id="'+it.id+'" data-delta="1">+</button>'+
            '</div>'+
            '<span class="gc-item-sub">'+(it.price*it.qty).toLocaleString('uk-UA')+' ₴</span>'+
            '<button class="gc-remove-btn" data-id="'+it.id+'" aria-label="Видалити">'+
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/></svg>'+
            '</button>'+
          '</div>'+
        '</div>'+
      '</div>';
  }
  wrap.innerHTML = html;
  document.getElementById('gcTotalAmt').textContent = gcTotal().toLocaleString('uk-UA') + ' ₴';

  // Bind qty + remove
  var qBtns = wrap.querySelectorAll('.gc-qty-btn');
  for (var j=0; j<qBtns.length; j++) {
    (function(btn){
      btn.addEventListener('click', function(){
        var id = btn.getAttribute('data-id');
        var delta = parseInt(btn.getAttribute('data-delta'));
        var c = gcGetCart();
        for (var k=0; k<c.length; k++) {
          if (c[k].id===id) { gcSetQty(id, c[k].qty+delta); break; }
        }
      });
    })(qBtns[j]);
  }
  var rBtns = wrap.querySelectorAll('.gc-remove-btn');
  for (var m=0; m<rBtns.length; m++) {
    (function(btn){
      btn.addEventListener('click', function(){ gcRemove(btn.getAttribute('data-id')); });
    })(rBtns[m]);
  }
}

// ---- Checkout ----
function gcOpenCheckout() {
  gcCloseDrawer();
  var o = document.getElementById('gcCheckout');
  if (!o) return;
  gcRenderCoSummary();
  o.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function gcCloseCheckout() {
  var o = document.getElementById('gcCheckout');
  if (o) { o.classList.remove('active'); }
  document.body.style.overflow = '';
}
function gcRenderCoSummary() {
  var list = document.getElementById('gcCoItemsList');
  var totalEl = document.getElementById('gcCoTotal');
  if (!list) return;
  var cart = gcGetCart();
  var html = '';
  for (var i=0; i<cart.length; i++) {
    var it = cart[i];
    html +=
      '<div class="gc-co-item">'+
        '<span class="gc-co-iname">'+it.name+' <em>×'+it.qty+'</em></span>'+
        '<span class="gc-co-iprice">'+(it.price*it.qty).toLocaleString('uk-UA')+' ₴</span>'+
      '</div>';
  }
  list.innerHTML = html;
  if (totalEl) totalEl.textContent = gcTotal().toLocaleString('uk-UA') + ' ₴';
}

// ---- Submit ----
function gcSubmit(e) {
  e.preventDefault();
  var name    = document.getElementById('gcName').value.trim();
  var phone   = document.getElementById('gcPhone').value.trim();
  var comment = document.getElementById('gcComment').value.trim();
  var cart    = gcGetCart();
  if (!name || !phone || !cart.length) return;

  var btn = e.target.querySelector('.gc-submit-btn');
  var status = document.getElementById('gcCoStatus');
  btn.disabled = true;
  btn.textContent = 'Надсилаємо…';
  status.textContent = '';
  status.className = 'booking-status';

  var lines = ['🛒 Нова заявка — Будівельна База ҐАЗДА', ''];
  lines.push('📦 Товари:');
  for (var i=0; i<cart.length; i++) {
    var it = cart[i];
    lines.push('  • ' + it.name + ' × ' + it.qty + ' = ' + (it.price*it.qty).toLocaleString('uk-UA') + ' ₴');
  }
  lines.push('');
  lines.push('💰 Сума: ' + gcTotal().toLocaleString('uk-UA') + ' ₴');
  lines.push('');
  lines.push('👤 Ім\'я: ' + name);
  lines.push('📞 Телефон: ' + phone);
  if (comment) lines.push('💬 Побажання: ' + comment);
  var text = lines.join('\n');

  var cfg = window.SITE_CONFIG || {};
  var token = cfg.telegramBotToken || '';
  var chatId = cfg.telegramChatId || '';

  console.log('=== ЗАМОВЛЕННЯ ===\n' + text);

  if (!token || token.indexOf('PASTE_') !== -1) {
    gcHandleSuccess(btn, status, cart);
    return;
  }

  fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  }).then(function(res){
    if (!res.ok) throw new Error('bad');
    gcHandleSuccess(btn, status, cart);
  }).catch(function(){
    var cfg2 = window.SITE_CONFIG || {};
    status.innerHTML = 'Помилка. Зателефонуйте: <a href="tel:'+(cfg2.phone||'+380978973207')+'">'+(cfg2.phoneDisplay||'097 897 3207')+'</a>';
    status.className = 'booking-status error';
    btn.disabled = false;
    btn.textContent = 'Відправити замовлення';
  });
}

function gcHandleSuccess(btn, status, cart) {
  status.textContent = 'Замовлення прийнято! Зателефонуємо найближчим часом.';
  status.className = 'booking-status success';
  gcSaveCart([]);
  gcRefreshBadge();
  btn.disabled = false;
  btn.textContent = 'Відправити замовлення';
  setTimeout(function(){
    gcCloseCheckout();
    document.getElementById('gcCoForm').reset();
    status.textContent = '';
    status.className = 'booking-status';
  }, 3500);
}

// ---- Inject icon into header ----
function gcInjectIcon() {
  var actions = document.querySelector('.header-actions');
  if (!actions || document.getElementById('gcIconBtn')) return;
  var btn = document.createElement('button');
  btn.id = 'gcIconBtn';
  btn.className = 'gc-icon-btn';
  btn.setAttribute('aria-label', 'Кошик');
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'+
    '<span class="cart-badge" style="display:none">0</span>';
  btn.addEventListener('click', gcOpenDrawer);
  var cta = actions.querySelector('.btn-cta');
  if (cta) actions.insertBefore(btn, cta);
  else actions.appendChild(btn);
}

// ---- Global API ----
window.GAZDA_CART = { add: gcAdd, openDrawer: gcOpenDrawer };

// ---- Init ----
gcInjectHTML();
gcInjectIcon();
gcRefreshBadge();
