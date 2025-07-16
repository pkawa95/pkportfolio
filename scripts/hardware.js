document.addEventListener('scroll', () => {
  const hero = document.querySelector('.hardware-hero');
  if (window.innerWidth > 768) {
    const offset = window.scrollY;
    hero.style.backgroundPositionY = `${-300 + offset * 0.5}px`;
  } else {
    hero.style.backgroundPositionY = `center center`;
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

