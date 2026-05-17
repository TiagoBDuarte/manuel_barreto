(function () {
  var btn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
})();
