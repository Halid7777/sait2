/* ═══════════════════════════════════════════
   TECHZONE — script.js
   Electronics Store Logic
═══════════════════════════════════════════ */

'use strict';

/* ─── Product Data ─── */
const PRODUCTS = [
  // Smartphones
  { id: 1, cat: 'smartphones', name: 'iPhone 16 Pro Max 512GB', brand: 'Apple', price: 649000, oldPrice: 720000, rating: 4.9, reviews: 312, discount: 10 },
  { id: 2, cat: 'smartphones', name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', price: 589000, oldPrice: null, rating: 4.8, reviews: 198, discount: null },
  { id: 3, cat: 'smartphones', name: 'Xiaomi 15 Pro 256GB', brand: 'Xiaomi', price: 289000, oldPrice: 340000, rating: 4.6, reviews: 87, discount: 15 },
  { id: 4, cat: 'smartphones', name: 'Google Pixel 9 Pro 128GB', brand: 'Google', price: 379000, oldPrice: 420000, rating: 4.7, reviews: 45, discount: 10 },
  { id: 5, cat: 'smartphones', name: 'OnePlus 13 512GB', brand: 'OnePlus', price: 249000, oldPrice: null, rating: 4.5, reviews: 62, discount: null },
  { id: 6, cat: 'smartphones', name: 'Huawei Pura 70 Pro', brand: 'Huawei', price: 319000, oldPrice: 360000, rating: 4.4, reviews: 33, discount: 11 },
  // Laptops
  { id: 7, cat: 'laptops', name: 'MacBook Pro 14" M4 Pro 512GB', brand: 'Apple', price: 1100000, oldPrice: 1200000, rating: 4.9, reviews: 211, discount: 8 },
  { id: 8, cat: 'laptops', name: 'ASUS ROG Zephyrus G16 RTX 4080', brand: 'ASUS', price: 890000, oldPrice: null, rating: 4.8, reviews: 94, discount: null },
  { id: 9, cat: 'laptops', name: 'Lenovo ThinkPad X1 Carbon Gen 12', brand: 'Lenovo', price: 750000, oldPrice: 820000, rating: 4.7, reviews: 73, discount: 9 },
  { id: 10, cat: 'laptops', name: 'HP Spectre x360 14 2-in-1', brand: 'HP', price: 640000, oldPrice: null, rating: 4.5, reviews: 58, discount: null },
  // Audio
  { id: 11, cat: 'audio', name: 'Sony WH-1000XM6 Wireless', brand: 'Sony', price: 149000, oldPrice: 175000, rating: 4.9, reviews: 488, discount: 15 },
  { id: 12, cat: 'audio', name: 'Apple AirPods Pro 3', brand: 'Apple', price: 119000, oldPrice: null, rating: 4.8, reviews: 320, discount: null },
  { id: 13, cat: 'audio', name: 'Samsung Galaxy Buds3 Pro', brand: 'Samsung', price: 69000, oldPrice: 84000, rating: 4.5, reviews: 129, discount: 18 },
  { id: 14, cat: 'audio', name: 'Bose QuietComfort Ultra', brand: 'Bose', price: 162000, oldPrice: 185000, rating: 4.8, reviews: 201, discount: 12 },
  // TV
  { id: 15, cat: 'tv', name: 'Samsung Neo QLED 8K 65"', brand: 'Samsung', price: 980000, oldPrice: 1150000, rating: 4.8, reviews: 67, discount: 15 },
  { id: 16, cat: 'tv', name: 'LG OLED evo G4 55"', brand: 'LG', price: 720000, oldPrice: null, rating: 4.9, reviews: 94, discount: null },
  { id: 17, cat: 'tv', name: 'Sony BRAVIA 9 XR 65"', brand: 'Sony', price: 890000, oldPrice: 950000, rating: 4.7, reviews: 43, discount: 6 },
  // Smart Home
  { id: 18, cat: 'smart', name: 'Apple HomePod mini 2', brand: 'Apple', price: 45000, oldPrice: null, rating: 4.5, reviews: 156, discount: null },
  { id: 19, cat: 'smart', name: 'Xiaomi Mi Robot Vacuum X20 Pro', brand: 'Xiaomi', price: 189000, oldPrice: 220000, rating: 4.7, reviews: 98, discount: 14 },
  { id: 20, cat: 'smart', name: 'Dyson V15 Detect Absolute', brand: 'Dyson', price: 315000, oldPrice: null, rating: 4.9, reviews: 211, discount: null },
  // Accessories
  { id: 21, cat: 'accessories', name: 'Apple Watch Ultra 2 49mm', brand: 'Apple', price: 320000, oldPrice: 365000, rating: 4.8, reviews: 178, discount: 12 },
  { id: 22, cat: 'accessories', name: 'Samsung Galaxy Watch 7 Pro', brand: 'Samsung', price: 149000, oldPrice: null, rating: 4.6, reviews: 87, discount: null },
  { id: 23, cat: 'accessories', name: 'Anker MagSafe 3-in-1 Charger', brand: 'Anker', price: 29000, oldPrice: 35000, rating: 4.4, reviews: 312, discount: 17 },
  { id: 24, cat: 'accessories', name: 'Logitech MX Master 3S', brand: 'Logitech', price: 54000, oldPrice: null, rating: 4.8, reviews: 445, discount: null },
];

/* ─── SVG Icons per category ─── */
const ICONS = {
  smartphones: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <rect x="22" y="8" width="56" height="84" rx="10" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="2"/>
    <rect x="28" y="16" width="44" height="68" rx="6" fill="#141420"/>
    <rect x="38" y="10" width="24" height="4" rx="2" fill="#0f0f18"/>
    <circle cx="50" cy="84" r="4" fill="#2a2a3a"/>
  </svg>`,
  laptops: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <rect x="12" y="22" width="76" height="50" rx="5" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="2"/>
    <rect x="18" y="28" width="64" height="38" rx="3" fill="#141420"/>
    <rect x="5" y="72" width="90" height="8" rx="4" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="1.5"/>
    <rect x="38" y="74" width="24" height="4" rx="2" fill="#0f0f18"/>
  </svg>`,
  audio: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <path d="M50 20 C28 20 18 36 18 50 L18 68 C18 72 21 75 25 75 L30 75 C34 75 37 72 37 68 L37 55 C37 51 34 48 30 48 L24 48 C24 35 34 26 50 26 C66 26 76 35 76 48 L70 48 C66 48 63 51 63 55 L63 68 C63 72 66 75 70 75 L75 75 C79 75 82 72 82 68 L82 50 C82 36 72 20 50 20Z" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="1.5"/>
  </svg>`,
  tv: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <rect x="8" y="18" width="84" height="56" rx="6" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="2"/>
    <rect x="14" y="24" width="72" height="44" rx="3" fill="#141420"/>
    <rect x="38" y="76" width="24" height="8" rx="2" fill="#1a1a2e"/>
    <rect x="28" y="84" width="44" height="4" rx="2" fill="#1a1a2e"/>
  </svg>`,
  smart: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="28" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="2"/>
    <circle cx="50" cy="50" r="16" fill="#141420"/>
    <circle cx="50" cy="50" r="5" fill="#3b82f6"/>
    <line x1="50" y1="18" x2="50" y2="10" stroke="#2a2a3a" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="90" x2="50" y2="82" stroke="#2a2a3a" stroke-width="2" stroke-linecap="round"/>
    <line x1="18" y1="50" x2="10" y2="50" stroke="#2a2a3a" stroke-width="2" stroke-linecap="round"/>
    <line x1="90" y1="50" x2="82" y2="50" stroke="#2a2a3a" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  accessories: `<svg class="product-card__svg" viewBox="0 0 100 100" fill="none">
    <rect x="22" y="30" width="56" height="40" rx="20" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="2"/>
    <circle cx="38" cy="50" r="7" fill="#141420" stroke="#2a2a3a" stroke-width="1.5"/>
    <circle cx="62" cy="50" r="7" fill="#141420" stroke="#2a2a3a" stroke-width="1.5"/>
    <rect x="45" y="47" width="10" height="6" rx="2" fill="#2a2a3a"/>
    <rect x="22" y="28" width="8" height="6" rx="2" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="1.5"/>
    <rect x="70" y="28" width="8" height="6" rx="2" fill="#1a1a2e" stroke="#2a2a3a" stroke-width="1.5"/>
  </svg>`,
};

/* ─── State ─── */
const state = {
  cart: JSON.parse(localStorage.getItem('tz_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('tz_wish') || '[]'),
  filter: 'all',
  sort: 'default',
  search: '',
  city: localStorage.getItem('tz_city') || '',
  visibleCount: 8,
};

/* ─── Helpers ─── */
const fmt = (n) => n.toLocaleString('ru-KZ') + ' ₸';

const saveCart = () => localStorage.setItem('tz_cart', JSON.stringify(state.cart));
const saveWish = () => localStorage.setItem('tz_wish', JSON.stringify(state.wishlist));

function showToast(msg, color = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderColor = color || 'var(--border2)';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

function makeStars(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= Math.round(rating) ? 'on' : ''}">★</span>`;
  }
  html += '</div>';
  return html;
}

/* ─── CART ─── */
function getCartItem(id) { return state.cart.find(x => x.id === id); }

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = getCartItem(id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ id: p.id, name: p.name, cat: p.cat, price: p.price, qty: 1 });
  }
  saveCart();
  renderCart();
  updateCartBadge();
  showToast(`✓ ${p.name.slice(0, 30)}… добавлен`, 'var(--green)');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
  updateCartBadge();
  renderProducts();
}

function changeQty(id, delta) {
  const item = getCartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  renderCart();
}

function updateCartBadge() {
  const total = state.cart.reduce((s, x) => s + x.qty, 0);
  ['cartBadge', 'cartBadgeMobile'].forEach(id => {
    const badge = document.getElementById(id);
    if (!badge) return;
    badge.textContent = total;
    badge.style.transform = 'scale(1.4)';
    setTimeout(() => badge.style.transform = '', 200);
  });
}

function renderCart() {
  const list = document.getElementById('cartList');
  const empty = document.getElementById('cartEmpty');
  const foot = document.getElementById('cartFoot');
  const totalEl = document.getElementById('cartTotal');

  list.innerHTML = '';

  if (state.cart.length === 0) {
    empty.style.display = 'flex';
    foot.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  foot.style.display = 'flex';

  let total = 0;
  state.cart.forEach(item => {
    total += item.price * item.qty;
    const icon = ICONS[item.cat] || ICONS.accessories;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="cart-item__img">${icon}</div>
      <div>
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price">${fmt(item.price)}</p>
        <div class="cart-item__qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart(${item.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = fmt(total);
}

/* ─── WISHLIST ─── */
function toggleWish(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast('♡ Добавлено в избранное', 'var(--red)');
  } else {
    state.wishlist.splice(idx, 1);
    showToast('Удалено из избранного');
  }
  saveWish();
  updateWishBadge();
  renderProducts();
}

/* ─── PRODUCTS RENDER ─── */
function getFilteredSorted() {
  let list = [...PRODUCTS];

  if (state.filter !== 'all') list = list.filter(p => p.cat === state.filter);

  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  }

  switch (state.sort) {
    case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
    case 'name':       list.sort((a, b) => a.name.localeCompare(b.name, 'ru')); break;
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  const loadBtn = document.getElementById('loadMoreBtn');

  const list = getFilteredSorted();
  const slice = list.slice(0, state.visibleCount);

  count.textContent = `${list.length} товаров`;
  loadBtn.style.display = list.length > state.visibleCount ? 'inline-flex' : 'none';

  grid.innerHTML = slice.map((p, i) => {
    const inCart = !!getCartItem(p.id);
    const inWish = state.wishlist.includes(p.id);
    const icon = ICONS[p.cat] || ICONS.smartphones;

    return `
    <div class="product-card" style="animation-delay:${(i % 8) * 40}ms">
      <div class="product-card__img-wrap">
        ${p.discount ? `<span class="product-card__discount">−${p.discount}%</span>` : ''}
        ${icon}
        <button class="product-card__wish ${inWish ? 'active' : ''}" onclick="toggleWish(${p.id})" aria-label="В избранное">
          <svg viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-card__body">
        <p class="product-card__cat">${catLabel(p.cat)}</p>
        <p class="product-card__name">${p.name}</p>
        <div class="product-card__rating">
          ${makeStars(p.rating)}
          <span class="product-card__reviews">(${p.reviews})</span>
        </div>
        <div class="product-card__price-row">
          <span class="product-card__price">${fmt(p.price)}</span>
          ${p.oldPrice ? `<span class="product-card__old-price">${fmt(p.oldPrice)}</span>` : ''}
        </div>
      </div>
      <div class="product-card__footer">
        <button class="product-card__add ${inCart ? 'added' : ''}" onclick="handleAddToCart(${p.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          ${inCart ? 'В корзине' : 'В корзину'}
        </button>
      </div>
    </div>`;
  }).join('');
}

function catLabel(cat) {
  return { smartphones: 'Смартфон', laptops: 'Ноутбук', audio: 'Аудио', tv: 'Телевизор', smart: 'Умный дом', accessories: 'Аксессуары' }[cat] || cat;
}

function handleAddToCart(id) {
  addToCart(id);
  renderProducts();
  // On mobile (bottom nav visible), don't auto-open cart — badge is enough
  if (window.innerWidth > 600) {
    openCart();
  }
}

/* ─── WISHLIST DRAWER ─── */
function openWish() {
  renderWishlist();
  document.getElementById('wishDrawer').classList.add('open');
  document.getElementById('wishOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWish() {
  document.getElementById('wishDrawer').classList.remove('open');
  document.getElementById('wishOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderWishlist() {
  const list = document.getElementById('wishList');
  const empty = document.getElementById('wishEmpty');
  list.innerHTML = '';

  if (state.wishlist.length === 0) {
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  state.wishlist.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const icon = ICONS[p.cat] || ICONS.accessories;
    const inCart = !!getCartItem(p.id);
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="cart-item__img">${icon}</div>
      <div>
        <p class="cart-item__name">${p.name}</p>
        <p class="cart-item__price">${fmt(p.price)}</p>
        <button class="btn btn--primary btn--sm" style="margin-top:8px" onclick="addToCart(${p.id});renderWishlist()">
          ${inCart ? '✓ В корзине' : '+ В корзину'}
        </button>
      </div>
      <button class="cart-item__remove" onclick="toggleWish(${p.id});renderWishlist()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    `;
    list.appendChild(li);
  });
}

function updateWishBadge() {
  const count = state.wishlist.length;
  ['wishBadge', 'wishBadgeMobile'].forEach(id => {
    const badge = document.getElementById(id);
    if (!badge) return;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ─── CART DRAWER ─── */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── GEO ─── */
function openGeo() {
  document.getElementById('geoOverlay').style.display = 'flex';
  if (state.city) {
    document.getElementById('geoResult').textContent = `Ваш город: ${state.city}`;
    highlightCity(state.city);
  } else {
    document.getElementById('geoResult').textContent = 'Определяем местоположение…';
    requestGeo();
  }
}

function closeGeo() {
  document.getElementById('geoOverlay').style.display = 'none';
}

function highlightCity(name) {
  document.querySelectorAll('.city-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.city === name);
  });
}

function setCity(name) {
  state.city = name;
  localStorage.setItem('tz_city', name);
  document.getElementById('geoText').textContent = name;
  document.getElementById('geoResult').textContent = `Выбран: ${name}`;
  highlightCity(name);
}

function requestGeo() {
  if (!navigator.geolocation) {
    document.getElementById('geoResult').textContent = 'Геолокация недоступна. Выберите город.';
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=ru`);
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.village || 'Неизвестно';
        document.getElementById('geoResult').textContent = `Определён: ${city}`;
        // Try to match
        const btn = [...document.querySelectorAll('.city-btn')].find(b => b.dataset.city === city);
        if (btn) setCity(city);
        else {
          state.city = city;
          localStorage.setItem('tz_city', city);
          document.getElementById('geoText').textContent = city;
        }
      } catch {
        document.getElementById('geoResult').textContent = 'Не удалось определить. Выберите вручную.';
      }
    },
    () => {
      document.getElementById('geoResult').textContent = 'Нет разрешения. Выберите город вручную.';
    },
    { timeout: 6000 }
  );
}

/* ─── SEARCH ─── */
function handleSearch() {
  state.search = document.getElementById('searchInput').value;
  state.filter = 'all';
  state.visibleCount = 8;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
  renderProducts();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

/* ─── INIT ─── */
function init() {
  // Initial renders
  renderProducts();
  renderCart();
  updateCartBadge();
  updateWishBadge();

  // Set geo text
  if (state.city) document.getElementById('geoText').textContent = state.city;

  /* ── Cart drawer ── */
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('goShop')?.addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const total = state.cart.reduce((s, x) => s + x.price * x.qty, 0);
    document.getElementById('checkoutSummary').textContent = `Итого: ${fmt(total)}`;
    document.getElementById('checkoutOverlay').style.display = 'flex';
    closeCart();
  });

  /* ── Geo ── */
  document.getElementById('geoBtn').addEventListener('click', openGeo);
  document.getElementById('geoClose').addEventListener('click', closeGeo);
  document.getElementById('geoOverlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeGeo(); });
  document.querySelectorAll('.city-btn').forEach(btn => {
    btn.addEventListener('click', () => setCity(btn.dataset.city));
  });
  document.getElementById('confirmGeo').addEventListener('click', () => {
    if (state.city) showToast(`📍 Город: ${state.city}`);
    closeGeo();
  });

  /* ── Filters ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      state.visibleCount = 8;
      state.search = '';
      document.getElementById('searchInput').value = '';
      renderProducts();
    });
  });

  /* ── Nav category links ── */
  document.querySelectorAll('.nav-link[data-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      state.filter = link.dataset.cat;
      state.search = '';
      state.visibleCount = 8;
      document.getElementById('searchInput').value = '';
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === state.filter));
      renderProducts();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── Sort ── */
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  /* ── Search ── */
  document.getElementById('searchBtn').addEventListener('click', handleSearch);
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  /* ── Load more ── */
  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    state.visibleCount += 8;
    renderProducts();
  });

  /* ── Contact form ── */
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    note.style.color = 'var(--green)';
    note.textContent = '✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.';
    e.target.reset();
    setTimeout(() => note.textContent = '', 5000);
  });

  /* ── Active nav on scroll ── */
  const sections = ['home','promotions','catalog','brands','contacts','license'];
  const navLinks = document.querySelectorAll('.header__subnav a, .header__nav .nav-link:not([data-cat])');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-60px 0px 0px 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* ── Scroll animation (Intersection Observer) ── */
  const animObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        animObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.promo-card, .brand-card, .contact-item, .license-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    animObs.observe(el);
  });

  /* ── Keyboard: Escape closes cart / modal ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeGeo();
      closeWish();
      document.getElementById('checkoutOverlay').style.display = 'none';
      document.getElementById('mobileSearchOverlay').classList.remove('open');
    }
  });

  /* ── Wishlist drawer ── */
  document.getElementById('wishToggle').addEventListener('click', openWish);
  document.getElementById('wishClose').addEventListener('click', closeWish);
  document.getElementById('wishOverlay').addEventListener('click', closeWish);
  document.getElementById('goShopWish')?.addEventListener('click', closeWish);

  /* ── Checkout modal ── */
  document.getElementById('checkoutClose').addEventListener('click', () => {
    document.getElementById('checkoutOverlay').style.display = 'none';
  });
  document.getElementById('checkoutOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) document.getElementById('checkoutOverlay').style.display = 'none';
  });
  document.getElementById('confirmCheckout').addEventListener('click', () => {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    if (!name) { showToast('⚠️ Введите ваше имя', 'var(--red)'); return; }
    if (!phone) { showToast('⚠️ Введите номер телефона', 'var(--red)'); return; }
    if (!address) { showToast('⚠️ Введите адрес доставки', 'var(--red)'); return; }
    document.getElementById('checkoutOverlay').style.display = 'none';
    showToast('🎉 Заказ оформлен! Спасибо за покупку.', 'var(--green)');
    state.cart = [];
    saveCart();
    renderCart();
    updateCartBadge();
    renderProducts();
    document.getElementById('checkoutName').value = '';
    document.getElementById('checkoutPhone').value = '';
    document.getElementById('checkoutAddress').value = '';
    document.getElementById('checkoutComment').value = '';
  });

  /* ── Mobile search overlay ── */
  const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  document.getElementById('searchToggleMobile').addEventListener('click', () => {
    mobileSearchOverlay.classList.add('open');
    setTimeout(() => mobileSearchInput.focus(), 100);
  });
  document.getElementById('mobileSearchCancel').addEventListener('click', () => {
    mobileSearchOverlay.classList.remove('open');
    mobileSearchInput.value = '';
  });
  document.getElementById('mobileSearchClear').addEventListener('click', () => {
    mobileSearchInput.value = '';
    mobileSearchInput.focus();
  });
  mobileSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      state.search = mobileSearchInput.value;
      document.getElementById('searchInput').value = mobileSearchInput.value;
      mobileSearchOverlay.classList.remove('open');
      handleSearch();
    }
  });

  /* ── Bottom nav ── */
  const bottomCartBtn = document.getElementById('bottomCartBtn');
  const bottomWishBtn = document.getElementById('bottomWishBtn');
  if (bottomCartBtn) bottomCartBtn.addEventListener('click', openCart);
  if (bottomWishBtn) bottomWishBtn.addEventListener('click', openWish);

  // Bottom nav active state on scroll
  const bottomNavItems = document.querySelectorAll('.bottom-nav__item[data-section]');
  const sectionEls = ['home','promotions','catalog','brands','contacts','license']
    .map(id => document.getElementById(id)).filter(Boolean);

  const bottomNavObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bottomNavItems.forEach(item => {
          item.classList.toggle('active', item.dataset.section === entry.target.id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });

  sectionEls.forEach(el => bottomNavObs.observe(el));
}

document.addEventListener('DOMContentLoaded', init);
