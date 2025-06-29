// 🖼️ Uniwersalna funkcja inicjalizacji karuzeli
function initCarousel(carouselId, dotsContainerId, itemsPerPage = 3, autoScrollInterval = 5000) {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsContainerId);
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

  // Publiczne zwracanie funkcji oraz obrazy tej karuzeli
  return { scrollCarousel, carouselImages: images };
}

// 🖼️ Lightbox
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function openLightbox(img) {
  const carousel = img.closest('.carousel'); // 🔥 znajdź karuzelę tego zdjęcia
  currentLightboxImages = Array.from(carousel.querySelectorAll('img')); // 🔥 tylko zdjęcia z tej karuzeli
  currentLightboxIndex = currentLightboxImages.indexOf(img);
  updateLightbox();
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";
  lightbox.style.zIndex = "999999";
  const closeBtn = lightbox.querySelector('.close');
  closeBtn.style.zIndex = "1000000";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function updateLightbox() {
  const img = currentLightboxImages[currentLightboxIndex];
  document.getElementById("lightbox-img").src = img.src;
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightbox();
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightbox();
}

// ✅ Inicjalizacja karuzel po DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const frontend = initCarousel('frontend-carousel', 'carousel-dots');
  const mobile = initCarousel('mobile-carousel', 'mobile-carousel-dots');

  // Przypisanie funkcji do globalnego scope dla onclick w HTML
  window.scrollCarousel = frontend.scrollCarousel;
  window.scrollCarouselMobile = mobile.scrollCarousel;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.prevImage = prevImage;
  window.nextImage = nextImage;
});
