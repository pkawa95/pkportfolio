// ================================
// 🖼️ Uniwersalna funkcja inicjalizacji karuzeli
// ================================
function initCarousel(carouselId, dotsContainerId, itemsPerPage = 3, autoScrollInterval = 5000) {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsContainerId);
  if (!carousel || !dotsContainer) return;

  const images = carousel.querySelectorAll('img');
  const totalPages = Math.ceil(images.length / itemsPerPage);
  let currentPage = 0;

  // Generowanie kropek
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToPage(i));
    dotsContainer.appendChild(dot);
  }
  updateDots();

  function scrollCarousel(direction) {
    currentPage += direction;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    goToPage(currentPage);
  }

  function goToPage(page) {
    const slide = carousel.querySelector('img');
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    const totalSlideWidth = slideWidth + gap;

    const scrollAmount = page * (totalSlideWidth * itemsPerPage);
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    currentPage = page;
    updateDots();
  }

  function updateDots() {
    dotsContainer.querySelectorAll('span').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }

  // Auto scroll
  let autoScroll = setInterval(() => {
    currentPage = (currentPage + 1) % totalPages;
    goToPage(currentPage);
  }, autoScrollInterval);

  // Pause on hover/touch
  carousel.addEventListener('mouseover', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseout', () => {
    autoScroll = setInterval(() => {
      currentPage = (currentPage + 1) % totalPages;
      goToPage(currentPage);
    }, autoScrollInterval);
  });

  return { scrollCarousel, carouselImages: images };
}

// ================================
// 🖼️ Lightbox z animacją slide fade
// ================================
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function openLightbox(img) {
  const carousel = img.closest('.carousel');
  if (!carousel) return;

  currentLightboxImages = Array.from(carousel.querySelectorAll('img'));
  currentLightboxIndex = currentLightboxImages.indexOf(img);
  updateLightbox();

  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  lightbox.style.display = "flex";
  lightbox.style.zIndex = "999999";

  const closeBtn = lightbox.querySelector('.close');
  if (closeBtn) closeBtn.style.zIndex = "1000000";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.style.display = "none";
}

function updateLightbox(direction = null) {
  const img = currentLightboxImages[currentLightboxIndex];
  const lightboxImg = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");

  if (!lightboxImg || !img) return;

  // Slide fade animacja
  const clone = lightboxImg.cloneNode();
  clone.src = img.src;
  clone.style.opacity = 0;
  lightboxImg.parentNode.insertBefore(clone, lightboxImg.nextSibling);

  if (direction === 'left') {
    clone.classList.add('slideInLeft');
    lightboxImg.classList.add('slideOutRight');
  } else if (direction === 'right') {
    clone.classList.add('slideInRight');
    lightboxImg.classList.add('slideOutLeft');
  }

  // Po animacji usuń stare zdjęcie i przypisz nowe
  setTimeout(() => {
    if (lightboxImg.parentNode) {
      lightboxImg.parentNode.removeChild(lightboxImg);
    }
    clone.style.opacity = 1;
    clone.classList.remove('slideInLeft', 'slideInRight');
    clone.id = "lightbox-img";
  }, 400);

  if (counter) {
    counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
    counter.style.display = "block";
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

// ================================
// ✅ Inicjalizacja karuzel po DOMContentLoaded
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const frontend = initCarousel('frontend-carousel', 'carousel-dots');
  const mobile = initCarousel('mobile-carousel', 'mobile-carousel-dots');

  window.scrollCarousel = frontend ? frontend.scrollCarousel : null;
  window.scrollCarouselMobile = mobile ? mobile.scrollCarousel : null;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.prevImage = prevImage;
  window.nextImage = nextImage;
});
