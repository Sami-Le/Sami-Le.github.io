document.addEventListener('DOMContentLoaded', function() {

  // === Menu centralisé : modifiez uniquement cette liste pour changer l'ordre ou ajouter une page ===
  const navLinks = [
    { href: "portfolio-ministere-interieur.html", label: "Ministère de l'Intérieur" },
    { href: "portfolio-espace93.html", label: "Espace 93" },
    { href: "portfolio-licence-pro.html", label: "BTS ERPC et Licence Pro" }
  ];

  const navList = document.querySelector('.portfolio-nav-list');
  if (navList) {
    navList.innerHTML = navLinks
      .map(link => `<a href="${link.href}" class="portfolio-nav-item">${link.label}</a>`)
      .join('');
  }

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('portfolioNav');
  const overlay = document.getElementById('mobileOverlay');

  function toggleMenu() {
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('mobile-open');
    overlay.classList.toggle('visible');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.portfolio-nav-item').forEach(item => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
    item.addEventListener('click', function() {
      if (nav.classList.contains('mobile-open')) toggleMenu();
    });
  });
});

(function () {
  const nav = document.getElementById('portfolioNav');
  if (!nav) return;

  function syncNavGrid() {
    const y = -window.scrollY;
    nav.style.backgroundPosition =
      `0px ${y}px, 0px ${y}px, 0px ${y}px, 0px ${y}px, 0px ${y}px`;
  }

  window.addEventListener('scroll', syncNavGrid, { passive: true });
  syncNavGrid();
})();
