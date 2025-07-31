  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      // Ukryj wszystkie inne tooltipy
      document.querySelectorAll('.tooltip-bubble').forEach(tip => {
        tip.classList.remove('visible');
      });

      // Pokaż tooltip dla klikniętego
      const bubble = item.querySelector('.tooltip-bubble');
      bubble.classList.add('visible');
    });
  });

  // Kliknięcie poza tooltipem — schowanie
  document.addEventListener('click', e => {
    if (!e.target.closest('.timeline-item')) {
      document.querySelectorAll('.tooltip-bubble').forEach(tip => {
        tip.classList.remove('visible');
      });
    }
  });

  const GAP = 10; // odległość między kropką a tooltipem

  document.querySelectorAll('.timeline-item').forEach(item => {
    const tooltip = item.querySelector('.tooltip-bubble');

    item.addEventListener('mouseenter', () => {
      // reset klas
      tooltip.classList.remove('tooltip-top', 'tooltip-bottom');

      // zmierz pozycję kropki
      const rect = item.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      // załóżmy wysokość tooltipa ~70px
      const tooltipHeight = 70;

      if (spaceAbove > tooltipHeight + GAP) {
        tooltip.classList.add('tooltip-top');
      } else {
        tooltip.classList.add('tooltip-bottom');
      }
    });
  });

  