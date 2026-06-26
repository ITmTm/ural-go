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
  const tickerItems = document.getElementById('tickerItems');
  const tickerTrack = document.getElementById('tickerTrack');
  if (tickerItems && tickerTrack) {
    // Клонируем 3 раза чтобы точно хватило на любой экран
    tickerTrack.appendChild(tickerItems.cloneNode(true));
    tickerTrack.appendChild(tickerItems.cloneNode(true));
    tickerTrack.appendChild(tickerItems.cloneNode(true));

    let pos = 0;
    const speed = 0.5;
    const itemWidth = tickerItems.scrollWidth;

    function tickerLoop() {
      pos -= speed;
      if (Math.abs(pos) >= itemWidth) {



    });

