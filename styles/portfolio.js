 /* ── Accordion compétences ── */
  function toggleComp(header) {
    const card = header.closest('.comp-card');
    const isOpen = card.classList.contains('open');
    // close all
    document.querySelectorAll('.comp-card').forEach(c => c.classList.remove('open'));
    if (!isOpen) {
      card.classList.add('open');
      // animate progress bar
      const fill = card.querySelector('.prog-fill');
      if (fill && !fill.dataset.animated) {
        fill.dataset.animated = '1';
        setTimeout(() => { fill.style.width = fill.dataset.w; }, 50);
      }
    }
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); } });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));