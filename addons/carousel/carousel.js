document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('carousel-placeholder');
  if (!placeholder) return;

  fetch('../../addons/carousel/carousel.html')
    .then(res => res.text())
    .then(html => {
      placeholder.innerHTML = html;
      initializeCarousel();
    });

  function initializeCarousel() {
    const carousel = document.querySelector('.my-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    let items = Array.from(track.children);
    const prevButton = carousel.querySelector('.carousel-btn.prev');
    const nextButton = carousel.querySelector('.carousel-btn.next');

    const currentPath = window.location.pathname;

    items.forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        const absoluteHref = new URL(href, window.location.origin).pathname;
        if (currentPath === absoluteHref) {
          item.remove();
        }
      }
    });

    items = Array.from(track.children);
    if (items.length === 0) {
      carousel.remove();
      return;
    }

    const navDots = document.createElement('div');
    navDots.classList.add('carousel-dots');
    carousel.appendChild(navDots);

    let currentIndex = 0;
    let autoplayInterval = setInterval(nextSlide, 5000);

    items.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      navDots.appendChild(dot);

      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        resetAutoplay();
      });
    });

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  navDots.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    }

    nextButton.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    prevButton.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(nextSlide, 5000);
    }

function setItemWidths() {
  updateCarousel(); // tylko odświeżenie pozycji
}

    setItemWidths();
    window.addEventListener('resize', setItemWidths);

    // ✅ ANIMATION OBSERVER — wstawiamy tutaj:
    const heading = document.querySelector('.carousel-heading');
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (heading) observer.observe(heading);
    observer.observe(carousel);
  }
});
