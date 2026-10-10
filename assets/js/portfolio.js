(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const controls = group.querySelector('.filters');
    const items = Array.from(group.querySelectorAll('[data-category]'));
    const status = group.querySelector('[data-filter-status]');
    const gallery = group.querySelector('[data-gallery]');
    if (!controls || !items.length) return;
    controls.hidden = false;
    controls.querySelectorAll('[data-filter]').forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        controls.querySelectorAll('[data-filter]').forEach(control => {
          control.setAttribute('aria-pressed', String(control === button));
        });
        items.forEach(item => {
          item.hidden = category !== 'all' && item.dataset.category !== category;
          item.classList.remove('is-surprised');
        });
        if (gallery) {
          gallery.hidden = !Array.from(gallery.querySelectorAll('[data-category]')).some(item => !item.hidden);
        }
        const visible = items.filter(item => !item.hidden).length;
        const noun = gallery ? (visible === 1 ? 'memory' : 'memories') : (visible === 1 ? 'milestone' : 'milestones');
        if (status) status.textContent = `${visible} ${noun} shown. ${button.textContent.trim()} selected.`;
      });
    });
    const surprise = group.querySelector('[data-surprise]');
    if (surprise) {
      let previous;
      let highlightTimer;
      surprise.hidden = false;
      surprise.addEventListener('click', () => {
        const visible = Array.from(group.querySelectorAll('[data-memory]')).filter(item => !item.hidden);
        const choices = visible.length > 1 ? visible.filter(item => item !== previous) : visible;
        if (!choices.length) return;
        const chosen = choices[Math.floor(Math.random() * choices.length)];
        group.querySelectorAll('.is-surprised').forEach(item => item.classList.remove('is-surprised'));
        const story = chosen.querySelector('details');
        if (story) story.open = true;
        chosen.classList.add('is-surprised');
        chosen.focus({ preventScroll: true });
        chosen.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
        previous = chosen;
        if (status) status.textContent = `A memory for you: ${chosen.querySelector('h2, h3').textContent}`;
        window.clearTimeout(highlightTimer);
        highlightTimer = window.setTimeout(() => chosen.classList.remove('is-surprised'), 4000);
      });
    }
  });
})();
