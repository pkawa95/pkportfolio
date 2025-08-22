/* ==== runtime (autoplay + dots) ==== */
(function(){
  const track = document.querySelector('.igx-track');
  const dotsWrap = document.querySelector('.igx-dots');
  const prevBtn = document.querySelector('.igx-prev');
  const nextBtn = document.querySelector('.igx-next');
  if (!track) return;
  const cards = [...track.children];

  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'igx-dot' + (i===0?' is-active':'');
    d.addEventListener('click', () => cards[i].scrollIntoView({behavior:'smooth', inline:'start'}));
    dotsWrap.appendChild(d);
  });
  function updateDots(){
    const cardW = cards[0].clientWidth + parseInt(getComputedStyle(track).gap);
    const idx = Math.round(track.scrollLeft / cardW);
    [...dotsWrap.children].forEach((el,i)=>el.classList.toggle('is-active', i===idx));
  }
  track.addEventListener('scroll', () => requestAnimationFrame(updateDots));
  function move(dir){ const cardW = cards[0].clientWidth + parseInt(getComputedStyle(track).gap); track.scrollBy({ left: dir * cardW, behavior:'smooth' }); }
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move( 1));
  let timer = setInterval(() => move(1), 3500);
  track.addEventListener('pointerdown', () => clearInterval(timer));
})();
