(function () {
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('mobile-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    btn.textContent = isOpen ? 'Close' : 'Menu';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      btn.textContent = 'Menu';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}());
