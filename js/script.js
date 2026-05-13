function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('hidden');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.add('hidden');
}

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
