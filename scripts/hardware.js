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

