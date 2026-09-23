function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('hidden');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.add('hidden');
}

// Animazioni di comparsa allo scroll (progressive enhancement:
// il contenuto resta visibile finché JS non attiva esplicitamente l'animazione)
if ('IntersectionObserver' in window) {
  var revealEls = document.querySelectorAll('[data-reveal]');
  revealEls.forEach(function(el) { el.classList.add('reveal-init'); });

  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function(el) { revealObserver.observe(el); });
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

// Form: apre WhatsApp con messaggio pre-compilato
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var nome     = document.getElementById('nome').value.trim();
    var cognome  = document.getElementById('cognome').value.trim();
    var email    = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var servizio = document.getElementById('servizio').value;
    var msg      = document.getElementById('messaggio').value.trim();

    var waMsg = 'Ciao Dott.ssa Reggio! 👋\n\n';
    waMsg += 'Mi chiamo *' + nome + ' ' + cognome + '*.\n';
    if (servizio) waMsg += '📋 Servizio: *' + servizio + '*\n';
    waMsg += '📧 Email: ' + email + '\n';
    if (telefono) waMsg += '📞 Telefono: ' + telefono + '\n';
    if (msg)      waMsg += '\n💬 ' + msg;

    window.open('https://wa.me/393385793214?text=' + encodeURIComponent(waMsg), '_blank');

    var btn = form.querySelector('.btn-form');
    btn.textContent = '✓ Apertura WhatsApp…';
    btn.style.background = '#A6612E';
    setTimeout(function() {
      btn.textContent = 'Invia messaggio →';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
