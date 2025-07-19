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

    console.log('Current page path:', currentPath);

    items.forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        // Tworzymy pełny URL absolutny na bazie href
        const absoluteHref = new URL(href, window.location.origin).pathname;

        console.log('Checking item link:', absoluteHref);

        if (currentPath === absoluteHref) {
          console.log('Removing carousel item with link:', absoluteHref);
          item.remove();
        }
      }
    });

    items = Array.from(track.children);
    if (items.length === 0) {
      console.log('No carousel items left — removing carousel');
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
      const itemWidth = items[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

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
      const containerWidth = carousel.getBoundingClientRect().width;
      items.forEach(item => item.style.minWidth = `${containerWidth}px`);
      updateCarousel();
    }

    setItemWidths();
    window.addEventListener('resize', setItemWidths);
  }
});
