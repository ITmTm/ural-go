document.addEventListener('DOMContentLoaded', () => {

  // --- Header scroll ---
  const header = document.getElementById('header');
  const floatingCta = document.getElementById('floatingCta');

  const onScroll = () => {
    const scrolled = window.scrollY > 80;
    header.classList.toggle('scrolled', scrolled);
    if (floatingCta) {
      floatingCta.classList.toggle('visible', window.scrollY > 600);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Infinite ticker ---


}

