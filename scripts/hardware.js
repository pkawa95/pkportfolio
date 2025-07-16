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

function initDetailsButton() {
  const btn = document.querySelector('.details-btn');
  const content = document.querySelector('.details-content');

  if (!btn || !content || !window.translations || !window.currentLang) return;

  function updateButtonText() {
    const isExpanded = btn.classList.contains('expanded');
    btn.textContent = window.translations[window.currentLang][
      isExpanded ? 'read_less_button' : 'read_more_button'
    ];
  }

  if (!btn.hasAttribute('data-listener-added')) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('expanded');
      content.style.display = btn.classList.contains('expanded') ? 'block' : 'none';
      updateButtonText();
    });

    btn.setAttribute('data-listener-added', 'true');
  }

  // ✅ Aktualizacja tekstu na każdą zmianę języka
  document.addEventListener('languageChanged', updateButtonText);

  updateButtonText();  // Ustaw na start
}

// ✅ Odpal inicjalizację
const interval = setInterval(() => {
  if (window.translations && window.currentLang && document.querySelector('.details-btn') && document.querySelector('.details-content')) {
    initDetailsButton();
    clearInterval(interval);
  }
}, 100);


