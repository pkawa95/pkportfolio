document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const img = document.querySelector('.parallax-img');
  if (img) {
    img.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.hidden-on-load');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      el.classList.add('show-on-scroll');
    }
  });
}

document.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);


document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.details-btn');
  const detailsContent = document.querySelector('.details-content');
  const specRows = document.querySelectorAll('.spec-row');
  const duration = 500;

  function updateButtonText() {
    if (!window.translations || !window.currentLang) return;
    const isExpanded = toggleBtn.classList.contains('expanded');
    toggleBtn.textContent = window.translations[window.currentLang][
      isExpanded ? 'read_less_button' : 'read_more_button'
    ];
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.classList.contains('expanded');

    if (!isExpanded) {
      toggleBtn.classList.add('expanded');
      detailsContent.classList.add('expanded');
      detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
      updateButtonText();

      specRows.forEach((row, index) => {
        const left = row.querySelector('.spec-left');
        const right = row.querySelector('.spec-right');
        left.classList.remove('show-left');
        right.classList.remove('show-right');
        void left.offsetWidth;
        void right.offsetWidth;
        setTimeout(() => {
          left.classList.add('show-left');
          right.classList.add('show-right');
        }, index * 150);
      });

    } else {
      detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
      void detailsContent.offsetHeight;
      detailsContent.style.maxHeight = '0px';
      toggleBtn.classList.remove('expanded');
      updateButtonText();

      setTimeout(() => {
        detailsContent.classList.remove('expanded');
        detailsContent.style.maxHeight = '';

        specRows.forEach((row) => {
          row.querySelector('.spec-left').classList.remove('show-left');
          row.querySelector('.spec-right').classList.remove('show-right');
        });
      }, duration);
    }
  });

  // Aktualizacja tekstu po zmianie języka
  document.addEventListener('languageChanged', updateButtonText);

  // Aktualizacja tekstu na start
  updateButtonText();

  // Dostosuj wysokość przy zmianie rozmiaru okna
  window.addEventListener('resize', () => {
    if (detailsContent.classList.contains('expanded')) {
      detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
    }
  });
});
