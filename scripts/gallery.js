/**
 * Karuzela: ultra-płynne przewijanie (rAF) + pre-decode miniatur.
 * Lightbox: slide/fade z licznikiem.
 */

class SmoothCarousel {
  constructor({
    carouselEl,
    dotsContainer,
    prevBtn,
    nextBtn,
    itemsPerPageConfig = [
      { minWidth: 0,    perPage: 1 },
      { minWidth: 640,  perPage: 2 },
      { minWidth: 1024, perPage: 3 },
    ],
    autoScrollInterval = 5000,
  }) {
    this.carousel = carouselEl;
    this.dotsContainer = dotsContainer;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.itemsPerPageConfig = itemsPerPageConfig;
    this.autoMs = autoScrollInterval;

    this.images = Array.from(this.carousel.querySelectorAll('img'));
    this.itemsPerPage = this.getPerPage();
    this.totalPages = this.calcTotalPages();
    this.currentPage = 0;
    this.isHovering = false;
    this.autoTimer = null;
    this.scrollRaf = null;
    this._snapT = null;

    this.renderDots();
    this.updateDots();
    this.bindEvents();
    this.startAuto();
    this.preloadFirstN(3);
    this.observeMutations();
  }

  /* —— helpers —— */
  getPerPage() {
    const w = window.innerWidth;
    const match = this.itemsPerPageConfig.filter(r => w >= r.minWidth).sort((a,b)=>b.minWidth-a.minWidth)[0];
    return Math.max(1, match?.perPage || 1);
  }
  calcTotalPages() {
    this.images = Array.from(this.carousel.querySelectorAll('img'));
    const count = this.images.length;
    return Math.max(1, Math.ceil(count / this.itemsPerPage));
  }
  getMetrics() {
    const styles = getComputedStyle(this.carousel);
    const gap = parseFloat(styles.gap) || 0;

    let slideWidth = 0;
    if (this.images[0]) slideWidth = this.images[0].getBoundingClientRect().width;
    if (!slideWidth) {
      const contW = this.carousel.getBoundingClientRect().width || 0;
      slideWidth = (contW - gap * (this.itemsPerPage - 1)) / this.itemsPerPage;
    }
    return { totalSlideWidth: slideWidth + gap, gap, slideWidth };
  }

  /* —— preload/decoded —— */
  preloadFirstN(n = 3) {
    this.images.slice(0, n).forEach(img => { if (img.decode) img.decode().catch(()=>{}); });
  }
  decodeRange(startIdx, endIdx) {
    const imgs = this.images.slice(startIdx, Math.min(endIdx, this.images.length));
    return Promise.all(imgs.map(img => (img?.decode ? img.decode().catch(()=>{}) : Promise.resolve())));
  }

  /* —— easing + rAF —— */
  easeInOutCubic(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2; }
  rafScrollTo(targetLeft, duration = 420) {
    return new Promise(resolve => {
      const startLeft = this.carousel.scrollLeft;
      const dist = targetLeft - startLeft;
      if (Math.abs(dist) < 1) return resolve();

      const prevBehavior = this.carousel.style.scrollBehavior;
      this.carousel.style.scrollBehavior = 'auto';

      let startTime = null;
      const step = (ts) => {
        if (!startTime) startTime = ts;
        const t = Math.min(1, (ts - startTime) / duration);
        this.carousel.scrollLeft = startLeft + dist * this.easeInOutCubic(t);
        if (t < 1) requestAnimationFrame(step);
        else {
          this.carousel.style.scrollBehavior = prevBehavior || '';
          resolve();
        }
      };
      requestAnimationFrame(step);
    });
  }

  /* —— dots —— */
  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < this.totalPages; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'carousel-dot';
      b.setAttribute('aria-label', `Przejdź do strony ${i + 1}`);
      b.addEventListener('click', () => this.goToPage(i, true));
      this.dotsContainer.appendChild(b);
    }
  }
  updateDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === this.currentPage);
      d.setAttribute('aria-current', i === this.currentPage ? 'true' : 'false');
    });
  }

  /* —— navigation —— */
  nextPage() { this.goToPage((this.currentPage + 1) % this.totalPages); }
  prevPage() { this.goToPage((this.currentPage - 1 + this.totalPages) % this.totalPages); }

  async goToPage(page, userInitiated = false) {
    page = Math.max(0, Math.min(page, this.totalPages - 1));
    const { totalSlideWidth } = this.getMetrics();
    const target = page * totalSlideWidth * this.itemsPerPage;

    // PRE-DECODE: oblicz indeksy obrazów, które wejdą na ekran
    const startIdx = page * this.itemsPerPage;
    const endIdx   = startIdx + this.itemsPerPage + 1; // +1 bufor
    await this.decodeRange(startIdx, endIdx);

    // tryb „perf”: wyłącz ciężkie efekty na czas animacji
    this.carousel.classList.add('perf');

    // wyłącz snap na czas animacji (anti-stutter)
    this.carousel.classList.add('is-programmatic');
    clearTimeout(this._snapT);

    await this.rafScrollTo(target, 420);

    // krótka zwłoka -> przywróć snap i styl
    this._snapT = setTimeout(() => {
      this.carousel.classList.remove('is-programmatic');
      this.carousel.classList.remove('perf');
    }, 20);

    this.currentPage = page;
    this.updateDots();
    if (userInitiated) this.restartAuto();
  }

  /* —— auto scroll —— */
  startAuto() {
    this.stopAuto();
    if (this.autoMs > 0) {
      this.autoTimer = setInterval(() => {
        if (!this.isHovering && !document.hidden) this.nextPage();
      }, this.autoMs);
    }
  }
  stopAuto()  { if (this.autoTimer) { clearInterval(this.autoTimer); this.autoTimer = null; } }
  restartAuto(){ this.stopAuto(); this.startAuto(); }

  /* —— events —— */
  bindEvents() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevPage());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextPage());

    this.carousel.addEventListener('mouseenter', () => { this.isHovering = true; this.stopAuto(); });
    this.carousel.addEventListener('mouseleave', () => { this.isHovering = false; this.startAuto(); });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stopAuto(); else this.startAuto();
    });

    this.carousel.addEventListener('scroll', () => {
      if (this.scrollRaf) return;
      this.scrollRaf = requestAnimationFrame(() => {
        const { totalSlideWidth } = this.getMetrics();
        const pageFloat = this.carousel.scrollLeft / (totalSlideWidth * this.itemsPerPage);
        const newPage = Math.round(pageFloat);
        if (newPage !== this.currentPage) {
          this.currentPage = Math.max(0, Math.min(newPage, this.totalPages - 1));
          this.updateDots();
        }
        this.scrollRaf = null;
      });
    }, { passive: true });

    // responsywność
    let resizeT = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => {
        const oldPer = this.itemsPerPage;
        this.itemsPerPage = this.getPerPage();
        const oldTotal = this.totalPages;
        this.totalPages = this.calcTotalPages();
        if (oldPer !== this.itemsPerPage || oldTotal !== this.totalPages) {
          this.currentPage = Math.max(0, Math.min(this.currentPage, this.totalPages - 1));
          this.renderDots();
          this.updateDots();
          this.goToPage(this.currentPage);
        }
      }, 120);
    });
  }

  /* —— obserwacja zmian w DOM (jeśli dodasz/usuń obrazki dynamicznie) —— */
  observeMutations() {
    const mo = new MutationObserver(() => {
      const oldTotal = this.totalPages;
      this.itemsPerPage = this.getPerPage();
      this.totalPages = this.calcTotalPages();
      if (oldTotal !== this.totalPages) {
        this.currentPage = Math.max(0, Math.min(this.currentPage, this.totalPages - 1));
        this.renderDots();
        this.updateDots();
      }
      this.images = Array.from(this.carousel.querySelectorAll('img'));
    });
    mo.observe(this.carousel, { childList: true, subtree: false });
    this._mo = mo;
  }
}

/* ================================
   LIGHTBOX – slide/fade
   ================================ */
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function openLightbox(img) {
  const carousel = img.closest('.carousel');
  if (!carousel) return;
  currentLightboxImages = Array.from(carousel.querySelectorAll('img'));
  currentLightboxIndex = currentLightboxImages.indexOf(img);

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  updateLightbox();
  lightbox.style.display = 'flex';
  lightbox.style.zIndex = '999999';
  const closeBtn = lightbox.querySelector('.close');
  if (closeBtn) closeBtn.style.zIndex = '1000000';
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.style.display = 'none';
}
function updateLightbox(direction = null) {
  const container = document.getElementById('lightbox');
  const counter   = document.getElementById('lightbox-counter');
  if (!container || !currentLightboxImages[currentLightboxIndex]) return;

  let lightboxImg = container.querySelector('#lightbox-img');
  if (!lightboxImg) {
    lightboxImg = document.createElement('img');
    lightboxImg.id = 'lightbox-img';
    container.appendChild(lightboxImg);
  }

  lightboxImg.classList.remove('show-left','show-right','show-center');
  lightboxImg.style.opacity = 0;
  lightboxImg.src = currentLightboxImages[currentLightboxIndex].src;

  if (direction === 'left') lightboxImg.classList.add('show-left');
  else if (direction === 'right') lightboxImg.classList.add('show-right');
  else lightboxImg.classList.add('show-center');

  lightboxImg.addEventListener('transitionend', function handler() {
    lightboxImg.classList.remove('show-left','show-right');
    lightboxImg.classList.add('show-center');
    lightboxImg.removeEventListener('transitionend', handler);
  });

  requestAnimationFrame(() => { lightboxImg.style.opacity = 1; });

  if (counter) {
    counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
    counter.style.display = 'block';
  }
}
function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightbox('left');
}
function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightbox('right');
}

/* ================================
   INICJALIZACJA
   ================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach(container => {
    const carouselEl   = container.querySelector('.carousel');
    const dotsContainer= container.querySelector('.carousel-dots');
    const prevBtn      = container.querySelector('[data-carousel-prev]');
    const nextBtn      = container.querySelector('[data-carousel-next]');

    new SmoothCarousel({
      carouselEl,
      dotsContainer,
      prevBtn,
      nextBtn,
      itemsPerPageConfig: [
        { minWidth: 0,    perPage: 1 },
        { minWidth: 640,  perPage: 2 },
        { minWidth: 1024, perPage: 3 },
      ],
      autoScrollInterval: 6000, // nieco spokojniejsze tempo
    });
  });

  // Lightbox globalnie
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.prevImage = prevImage;
  window.nextImage = nextImage;
});
