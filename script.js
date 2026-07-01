/**
 * ABI Rice Shop — script.js
 * Premium Natural Farming Brand · Walajabad, Tamil Nadu
 * Features: Nav, Hamburger, Smooth Scroll, Reveal, Language, Products, Form
 */

/* ============================================================
   1. PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  // ── Premium & Aromatic ──────────────────────────────────
  {
    name: 'Basmati Rice',
    name_ta: 'பாஸ்மதி அரிசி',
    category: 'premium',
    badge: 'Premium',
    badgeClass: 'badge-gold',
    desc: 'Long-grain, aromatic rice with delicate floral notes. Perfect for biryanis and pulaos.',
    desc_ta: 'நீண்ட தானிய, வாசனையுள்ள அரிசி. பிரியாணி மற்றும் புலாவுக்கு ஏற்றது.',
    price: '₹145',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    /* Replace src with your own image — same size 600×400 recommended */
    img: 'https://img.magnific.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?semt=ais_hybrid&w=740&q=80',
    imgAlt: 'Basmati rice grains close-up'
  },
  {
    name: 'Jeerakasala Rice',
    name_ta: 'ஜீரகசால அரிசி',
    category: 'premium',
    badge: 'Premium',
    badgeClass: 'badge-gold',
    desc: 'Kerala\'s prized small-grain rice with a mild, earthy aroma. Beloved for biryanis.',
    desc_ta: 'கேரளாவின் சிறிய தானிய அரிசி. இலேசான மண் வாசனையுடன்.',
    price: '₹180',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://spiritoftheearth.in/cdn/shop/files/Jeerakasala_-_Organic_Polished_Everyday_Table_Rice_Price_175_-_KG_1024x1024.jpg?v=1753082058',
    imgAlt: 'Aromatic Jeerakasala rice grains'
  },
  {
    name: 'Gobindobhog Rice',
    name_ta: 'கோவிந்தபோக் அரிசி',
    category: 'premium',
    badge: 'Aromatic',
    badgeClass: 'badge-gold',
    desc: 'Bengali heirloom variety with rich, buttery aroma. Ideal for khichdi and sweets.',
    desc_ta: 'பெங்காலி பாரம்பரிய வகை. வெண்ணெய் வாசனையுடன் கூடியது.',
    price: '₹220',
    per: '/kg',
    sizes: ['1kg', '5kg'],
    img: 'https://thestateplate.com/cdn/shop/products/GobindobhogRice1.png?v=1680931470',
    imgAlt: 'Gobindobhog aromatic rice in a bowl'
  },

  // ── South Indian ─────────────────────────────────────────
  {
    name: 'Ponni Rice',
    name_ta: 'பொன்னி அரிசி',
    category: 'south-indian',
    badge: 'South Indian',
    badgeClass: 'badge-green',
    desc: 'Tamil Nadu\'s most loved everyday rice. Soft, fluffy texture with a mild sweet taste.',
    desc_ta: 'தமிழ்நாட்டின் மிகவும் விரும்பப்படும் அன்றாட அரிசி.',
    price: '₹62',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://cpimg.tistatic.com/06219303/b/4/Ponni-Rice.jpg',
    imgAlt: 'Cooked fluffy Ponni rice on a plate'
  },
  {
    name: 'Sona Masoori Rice',
    name_ta: 'சோனா மசூரி அரிசி',
    category: 'south-indian',
    badge: 'South Indian',
    badgeClass: 'badge-green',
    desc: 'Medium-grain, lightweight rice. Low starch, ideal for daily cooking and weight management.',
    desc_ta: 'குறைந்த மாவுச்சத்துள்ள, அன்றாட சமையலுக்கு ஏற்ற அரிசி.',
    price: '₹75',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://udupifresh.com/cdn/shop/products/SonaMasooriRawRice_2_1200x1200.jpg?v=1629397620',
    imgAlt: 'Sona Masoori rice grains in a wooden bowl'
  },
  {
    name: 'Seeraga Samba',
    name_ta: 'சீரகசம்பா அரிசி',
    category: 'south-indian',
    badge: 'South Indian',
    badgeClass: 'badge-green',
    desc: 'Tiny, aromatic grains with a cumin-like scent. The authentic choice for Chettinad biryani.',
    desc_ta: 'சீரக வாசனையுள்ள சிறிய தானியங்கள். செட்டிநாடு பிரியாணிக்கு ஏற்றது.',
    price: '₹130',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://www.greendna.in/cdn/shop/products/seerega_500x.jpg?v=1640278955',
    imgAlt: 'Seeraga Samba biryani rice close-up'
  },
  {
    name: 'Idli Rice',
    name_ta: 'இட்லி அரிசி',
    category: 'south-indian',
    badge: 'South Indian',
    badgeClass: 'badge-green',
    desc: 'Specially processed short-grain rice for perfectly soft, fluffy idlis and dosas.',
    desc_ta: 'மிருதுவான இட்லி மற்றும் தோசைக்காக சிறப்பாக பதப்படுத்தப்பட்ட அரிசி.',
    price: '₹55',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://rukminim2.flixcart.com/image/480/480/kjuby4w0/rice/d/z/1/5-white-idli-rice-idli-rice-bag-omsom-original-imafzbn95wrzykqq.jpeg?q=90',
    imgAlt: 'Soft idlis made from Idli rice'
  },

  // ── Healthy ───────────────────────────────────────────────
  {
    name: 'Brown Rice',
    name_ta: 'பழுப்பு அரிசி',
    category: 'healthy',
    badge: 'Healthy',
    badgeClass: 'badge-earth',
    desc: 'Whole grain goodness with bran intact. High fibre, vitamins B1 & B3, magnesium-rich.',
    desc_ta: 'முழு தானியத்துடன் கூடிய ஆரோக்கியமான பழுப்பு அரிசி.',
    price: '₹95',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://img.magnific.com/free-photo/close-up-rice-texture_23-2148129939.jpg?semt=ais_hybrid&w=740&q=80',
    imgAlt: 'Brown rice grains in a rustic bowl'
  },
  {
    name: 'Red Rice',
    name_ta: 'சிவப்பு அரிசி',
    category: 'healthy',
    badge: 'Healthy',
    badgeClass: 'badge-earth',
    desc: 'Antioxidant-rich heritage rice. Naturally red bran loaded with anthocyanins and zinc.',
    desc_ta: 'ஆன்டிஆக்ஸிடன்ட் நிறைந்த பாரம்பரிய சிவப்பு அரிசி.',
    price: '₹110',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://media.istockphoto.com/id/512362503/photo/red-rice.jpg?s=612x612&w=0&k=20&c=8vtId-n4PMWJHg5x9D1cMrwtf625V5uZCXwY8cYW3GE=',
    imgAlt: 'Red rice grains spread on surface'
  },
  {
    name: 'Black Rice',
    name_ta: 'கருப்பு அரிசி',
    category: 'healthy',
    badge: 'Super Food',
    badgeClass: 'badge-dark',
    desc: 'Rare "forbidden rice" packed with anthocyanins. Nutty flavour, deep purple colour when cooked.',
    desc_ta: 'அரிதான கருப்பு அரிசி. சமைக்கும்போது ஊதா நிறம் மாறும்.',
    price: '₹180',
    per: '/kg',
    sizes: ['1kg', '5kg'],
    img: 'https://dhanasfoods.com/cdn/shop/files/karuppu-kavuni-rice-165043929616x9.webp?v=1760354250',
    imgAlt: 'Black forbidden rice grains'
  },

  // ── Daily Cooking ─────────────────────────────────────────
  {
    name: 'White Rice',
    name_ta: 'வெள்ளை அரிசி',
    category: 'daily',
    badge: 'Daily',
    badgeClass: 'badge-blue',
    desc: 'Pure, polished white rice for everyday cooking. Soft, fluffy and easy to digest.',
    desc_ta: 'அன்றாட சமையலுக்கான தூய வெள்ளை அரிசி.',
    price: '₹48',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://t3.ftcdn.net/jpg/08/59/83/06/360_F_859830624_0ewjhPDQT0qIxsyxRk9gP6DCkjnbq9zb.jpg',
    imgAlt: 'Perfectly cooked white rice in a bowl'
  },
  {
    name: 'Raw Rice',
    name_ta: 'பச்சை அரிசி',
    category: 'daily',
    badge: 'Daily',
    badgeClass: 'badge-blue',
    desc: 'Unboiled raw rice for light dishes and traditional recipes. Fresh-milled quality.',
    desc_ta: 'இலகுவான உணவுகளுக்கான பச்சை அரிசி. புதியதாக அரைக்கப்பட்ட தரம்.',
    price: '₹52',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://img.magnific.com/premium-photo/raw-jasmine-rice-grain-with-ear-paddy-agricultural-products-food-asian-thai-rice-white-bowl-sack-background_73523-3077.jpg?semt=ais_hybrid&w=740&q=80',
    imgAlt: 'Raw uncooked rice grains pile'
  },
  {
    name: 'Parboiled Rice',
    name_ta: 'புழுங்கல் அரிசி',
    category: 'daily',
    badge: 'Daily',
    badgeClass: 'badge-blue',
    desc: 'Partially boiled in husk to retain nutrients. Non-sticky, firm and long-lasting.',
    desc_ta: 'ஊட்டச்சத்துக்களை தக்கவைக்க தவிடுடன் ஓரளவு வேகவைக்கப்பட்ட அரிசி.',
    price: '₹50',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg', '25kg'],
    img: 'https://cpimg.tistatic.com/09118326/b/4/White-Parboiled-Rice.jpg',
    imgAlt: 'Parboiled golden rice grains'
  },

  // ── Traditional Special ────────────────────────────────────
  {
    name: 'Kattuyanam Rice',
    name_ta: 'கட்டுயானம் அரிசி',
    category: 'traditional',
    badge: 'Traditional',
    badgeClass: 'badge-brown',
    desc: 'Ancient Tamil Nadu variety with proven medicinal properties. Aids digestion and diabetes management.',
    desc_ta: 'நிருவத்தப்பட்ட மருத்துவ குணங்களுள்ள பண்டைய தமிழ்நாடு வகை.',
    price: '₹160',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://www.bhuvatifarms.com/images/detailed/9/Kaattu_Yaanam_Rice_2_imresizer.jpg',
    imgAlt: 'Traditional Kattuyanam rice grains'
  },
  {
    name: 'Mapillai Samba',
    name_ta: 'மாப்பிளை சம்பா',
    category: 'traditional',
    badge: 'Heritage',
    badgeClass: 'badge-brown',
    desc: 'Warrior\'s rice — high iron, energising and traditionally eaten to boost strength.',
    desc_ta: 'போர்வீரர்களின் அரிசி — அதிக இரும்புச்சத்து, வலிமையை அதிகரிக்கும்.',
    price: '₹155',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://images.unsplash.com/photo-1620921568790-c1cf8983b74d?w=600&h=400&fit=crop&auto=format',
    imgAlt: 'Mapillai Samba heritage rice variety'
  },
  {
    name: 'Kichili Samba',
    name_ta: 'கிச்சலி சம்பா',
    category: 'traditional',
    badge: 'Heritage',
    badgeClass: 'badge-brown',
    desc: 'Fine-grain traditional rice celebrated for its unique aroma and delicate sweet taste.',
    desc_ta: 'தனித்துவமான வாசனை மற்றும் இனிமையான சுவையுள்ள பாரம்பரிய அரிசி.',
    price: '₹140',
    per: '/kg',
    sizes: ['1kg', '5kg', '10kg'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKFwznIv7n4UtMaVkqrbb01uKFx26cAp5IDT-3E2K0iVOJu8_BStLEfq4&s=10',
    imgAlt: 'Kichili Samba fine grain rice'
  },
  {
    name: 'Karuppu Kavuni',
    name_ta: 'கருப்பு கவுனி',
    category: 'traditional',
    badge: 'Rare',
    badgeClass: 'badge-dark',
    desc: 'Black glutinous rice from Tamil tradition — antioxidant powerhouse, used in payasam and halwa.',
    desc_ta: 'தமிழ் பாரம்பரியத்தில் இருந்து கருப்பு ஒட்டு அரிசி. பாயசம் மற்றும் ஹல்வாவிற்கு பயன்படுத்தப்படுகிறது.',
    price: '₹210',
    per: '/kg',
    sizes: ['1kg', '5kg'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IEk4g_aoQFunJd1g5WufkIsAfH8T9jLAxHkr6kYYjAwVq7xogm3RJrQt&s=10',
    imgAlt: 'Karuppu Kavuni black glutinous rice'
  }
];

/* ============================================================
   /* ============================================================
   2. LANGUAGE DATA
   ============================================================ */
let currentLang = 'en';
 
function applyLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('lang-ta', lang === 'ta');
 
  const langLabel = document.getElementById('lang-label');
  const langOther = document.getElementById('lang-other');
  if (langLabel) langLabel.textContent = lang === 'en' ? 'EN' : 'த';
  if (langOther) langOther.textContent = lang === 'en' ? 'த' : 'EN';
 
  // Update all elements with data-en / data-ta attributes
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
 
  // Update product grid
  renderProducts(currentCategory);
}
 
/* ============================================================
   3. PRODUCTS RENDERING
   ============================================================ */
let currentCategory = 'all';
 
function createProductCard(product) {
  const name   = currentLang === 'ta' ? product.name_ta : product.name;
  const desc   = currentLang === 'ta' ? product.desc_ta : product.desc;
  const sizeTags = product.sizes.map(s => `<span class="size-tag">${s}</span>`).join('');
 
  /* WhatsApp order message */
  const waMsg  = encodeURIComponent(`Hi! I'd like to order ${product.name} from ABI Rice Shop. Please share availability and pricing.`);
  const waLink = `https://wa.me/919876543210?text=${waMsg}`;
 
  return `
    <div class="product-card" data-category="${product.category}">
      <!-- Image wrapper with shimmer placeholder -->
      <div class="product-img-wrap">
        <div class="product-img-shimmer" aria-hidden="true"></div>
        <img
          class="product-img"
          src="${product.img}"
          alt="${product.imgAlt}"
          loading="lazy"
          decoding="async"
          onload="this.classList.add('loaded');this.previousElementSibling.style.display='none';"
          onerror="this.src='https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&auto=format';this.classList.add('loaded');"
        />
        <span class="product-badge ${product.badgeClass}">${product.badge}</span>
      </div>
 
      <!-- Card body -->
      <div class="product-body">
        <h3 class="product-name">${name}</h3>
        <p class="product-desc">${desc}</p>
 
        <div class="product-sizes">${sizeTags}</div>
 
        <div class="product-footer">
          <div class="product-price">
            ${product.price}
            <span class="product-per">${product.per}</span>
          </div>
          <a href="${waLink}" target="_blank" rel="noopener" class="product-order-btn" aria-label="Order ${name} on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order
          </a>
        </div>
      </div>
    </div>
  `;
}
 
function renderProducts(category) {
  currentCategory = category;
  const grid = document.getElementById('products-grid');
  if (!grid) return;
 
  const filtered = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);
 
  grid.innerHTML = filtered.map(createProductCard).join('');
 
  // Stagger animation
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.07}s`;
  });
}
 
/* ============================================================
   4. STICKY NAV + ACTIVE LINK
   ============================================================ */
function initNav() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
 
  // Scroll handler
  function onScroll() {
    const scrollY = window.scrollY;
 
    // Scrolled class
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
 
    // Active link highlight
    let current = '';
    sections.forEach(section => {
      const sTop = section.offsetTop - 100;
      if (scrollY >= sTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }
 
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
}
 
/* ============================================================
   5. HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  if (!btn || !nav) return;
 
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
 
  // Close on link click
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
 
  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}
 
/* ============================================================
   6. SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
 
  items.forEach(item => observer.observe(item));
}
 
/* ============================================================
   7. SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
 
/* ============================================================
   8. PRODUCT TABS
   ============================================================ */
function initProductTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.category);
    });
  });
}
 
/* ============================================================
   9. LANGUAGE TOGGLE
   ============================================================ */
function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ta' : 'en');
  });
}
 
/* ============================================================
   10. CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;
 
  form.addEventListener('submit', e => {
    e.preventDefault();
 
    // Simple client-side validation
    const name    = form.querySelector('#f-name').value.trim();
    const email   = form.querySelector('#f-email').value.trim();
    const message = form.querySelector('#f-message').value.trim();
 
    if (!name || !email || !message) {
      alert(currentLang === 'ta'
        ? 'தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்.'
        : 'Please fill in all required fields.');
      return;
    }
 
    // Simulate submission (replace with real endpoint if needed)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = currentLang === 'ta' ? 'அனுப்புகிறது...' : 'Sending...';
    submitBtn.disabled = true;
 
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = currentLang === 'ta' ? 'செய்தி அனுப்பு' : 'Send Message';
      submitBtn.disabled = false;
      if (success) {
        success.hidden = false;
        success.textContent = currentLang === 'ta'
          ? 'நன்றி! நாங்கள் விரைவில் தொடர்பு கொள்வோம். 🙏'
          : 'Thank you! We\'ll contact you soon. 🙏';
        setTimeout(() => { success.hidden = true; }, 5000);
      }
    }, 1200);
  });
}
 
/* ============================================================
   11. HERO PARALLAX (subtle)
   ============================================================ */
function initParallax() {
  const heroIllustration = document.querySelector('.hero-illustration');
  if (!heroIllustration) return;
 
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroIllustration.style.transform = `translateY(${scrolled * 0.25}px)`;
    }
  }, { passive: true });
}
 
/* ============================================================
   12. COUNTER ANIMATION (hero stats)
   ============================================================ */
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
 
function initCounters() {
  const counters = [
    { selector: '.hero-stats .stat:nth-child(1) .stat-num', target: 6, suffix: '+' },
    { selector: '.hero-stats .stat:nth-child(3) .stat-num', target: 20, suffix: '+' },
    { selector: '.hero-stats .stat:nth-child(5) .stat-num', target: 5000, suffix: '+' },
  ];
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(({ selector, target, suffix }) => {
          const el = document.querySelector(selector);
          if (el) animateCounter(el, target, suffix);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
 
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) observer.observe(statsEl);
}
 
/* ============================================================
   13. GALLERY — Filter + Lightbox + Stats Counter
   ============================================================ */
 
/* ── 13a. Gallery stat counters (animate when scrolled into view) ── */
function initGalleryStats() {
  const cards = document.querySelectorAll('.gstat-num');
  if (!cards.length) return;
 
  const runCounters = () => {
    cards.forEach(el => {
      const target  = parseInt(el.dataset.target, 10);
      const suffix  = el.dataset.suffix || '';
      const duration = 1600;
      let start = null;
 
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };
 
  // Trigger when first stat card enters viewport
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      runCounters();
      observer.disconnect();
    }
  }, { threshold: 0.3 });
 
  const statsWrap = document.querySelector('.gallery-stats');
  if (statsWrap) observer.observe(statsWrap);
}
 
/* ── 13b. Gallery image filter ── */
function initGalleryFilter() {
  const filterBtns    = document.querySelectorAll('.gfilter-btn');
  const masonry       = document.querySelector('.gallery-masonry');
  const farmTimeline  = document.getElementById('farming-timeline');
  /* All real masonry items EXCEPT the invisible farming placeholder divs */
  const masonryItems  = document.querySelectorAll(
    '.gallery-masonry .gitem:not(.gitem-farming-placeholder)'
  );
 
  if (!filterBtns.length) return;
 
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      /* ── Update active button + aria ── */
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
 
      const filter = btn.dataset.filter;
 
      /* ── Farming filter → show dedicated timeline, hide masonry ── */
      if (filter === 'farming') {
        if (masonry)      masonry.style.display      = 'none';
        if (farmTimeline) farmTimeline.hidden         = false;
        return;
      }
 
      /* ── Any other filter → hide timeline, show masonry ── */
      if (farmTimeline) farmTimeline.hidden = true;
      if (masonry)      masonry.style.display = '';
 
      /* Filter masonry items by category */
      masonryItems.forEach((item, i) => {
        const cat  = item.dataset.category;
        const show = filter === 'all' || cat === filter;
 
        if (show) {
          item.classList.remove('g-hidden');
          item.style.animationDelay = `${i * 0.06}s`;
          item.classList.add('g-fade-in');
          item.addEventListener('animationend', () => {
            item.classList.remove('g-fade-in');
            item.style.animationDelay = '';
          }, { once: true });
        } else {
          item.classList.add('g-hidden');
        }
      });
    });
  });
}
 
/* ── 13c. Lightbox ── */
function initGalleryLightbox() {
  const lb          = document.getElementById('glightbox');
  const lbImg       = document.getElementById('glightbox-img');
  const lbTitle     = document.getElementById('glightbox-title');
  const lbDesc      = document.getElementById('glightbox-desc');
  const lbIcon      = document.getElementById('glightbox-icon');
  const lbCounter   = document.getElementById('glightbox-counter');
  const lbBackdrop  = document.getElementById('glightbox-backdrop');
  const lbClose     = document.getElementById('glightbox-close');
  const lbPrev      = document.getElementById('glightbox-prev');
  const lbNext      = document.getElementById('glightbox-next');
  const lbShimmer   = document.getElementById('glightbox-shimmer');
 
  if (!lb) return;
 
  let items   = [];   // current filterable items (not hidden)
  let current = 0;    // index into items[]
 
  /* Collect visible items each time lightbox opens */
  function getVisibleItems() {
    return Array.from(
      document.querySelectorAll('.gallery-masonry .gitem:not(.g-hidden)')
    );
  }
 
  /* Load image into lightbox — works for both .gitem and .ft-card elements */
  function loadLightbox(idx) {
    const item = items[idx];
    if (!item) return;
 
    /* Support both gallery masonry cards and farming timeline cards */
    const isFtCard = item.classList.contains('ft-card');
 
    const img   = item.querySelector(isFtCard ? '.ft-img'          : '.gitem-img');
    const title = item.querySelector(isFtCard ? '.ft-stage-title'  : '.gitem-caption h4');
    const desc  = item.querySelector(isFtCard ? '.ft-stage-desc'   : '.gitem-caption p');
    const icon  = item.querySelector(isFtCard ? '.ft-stage-label'  : '.gitem-grain-icon');
 
    // Show shimmer
    if (lbShimmer) lbShimmer.style.display = '';
    lbImg.classList.remove('loaded');
 
    lbImg.onload = () => {
      lbImg.classList.add('loaded');
      if (lbShimmer) lbShimmer.style.display = 'none';
    };
    lbImg.src = img   ? img.src          : '';
    lbImg.alt = img   ? img.alt          : '';
 
    lbTitle.textContent   = title ? title.textContent : '';
    lbDesc.textContent    = desc  ? desc.textContent  : '';
    lbIcon.textContent    = isFtCard ? '🌾'           : (icon ? icon.textContent : '🌾');
    lbCounter.textContent = `${idx + 1} / ${items.length}`;
    current = idx;
  }
 
  /* Open */
  function openLightbox(idx) {
    items = getVisibleItems();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    loadLightbox(idx);
    lbImg.focus();
  }
 
  /* Close */
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }
 
  /* Navigate */
  function showPrev() {
    const idx = (current - 1 + items.length) % items.length;
    loadLightbox(idx);
  }
  function showNext() {
    const idx = (current + 1) % items.length;
    loadLightbox(idx);
  }
 
  /* Click on each MASONRY gallery item */
  document.querySelectorAll('.gallery-masonry .gitem:not(.gitem-farming-placeholder)').forEach((item) => {
    item.addEventListener('click', () => {
      items = getVisibleItems();
      const visIdx = items.indexOf(item);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });
  });
 
  /* Click on each FARMING TIMELINE card — builds its own items array */
  document.querySelectorAll('.ft-card').forEach((card) => {
    card.addEventListener('click', () => {
      const ftCards = Array.from(document.querySelectorAll('.ft-card'));
      items = ftCards; // treat timeline cards as the lightbox set
      const idx = ftCards.indexOf(card);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });
 
  /* Controls */
  if (lbClose)    lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev)     lbPrev.addEventListener('click', showPrev);
  if (lbNext)     lbNext.addEventListener('click', showNext);
 
  /* Keyboard navigation */
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
 
  /* Touch / swipe support */
  let touchStartX = 0;
  lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? showNext() : showPrev();
  });
}
 
/* ============================================================
   14. KEYBOARD NAVIGATION
   ============================================================ */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const nav = document.getElementById('nav-links');
      const btn = document.getElementById('hamburger');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        btn.focus();
      }
    }
  });
}
 
/* ============================================================
   INIT — Run everything on DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render products first (before reveal so cards are in DOM)
  renderProducts('all');
 
  // Init all modules
  initNav();
  initHamburger();
  initReveal();
  initSmoothScroll();
  initProductTabs();
  initLanguageToggle();
  initContactForm();
  initParallax();
  initCounters();
  initGalleryStats();
  initGalleryFilter();
  initGalleryLightbox();
  initKeyboard();
 
  // Re-run reveal for dynamically injected product cards
  // (product grid uses CSS animation, not IntersectionObserver)
  console.log('%cABI Rice Shop 🌾 — Website loaded successfully!', 'color:#1B5E20; font-weight:bold; font-size:14px;');
});
 