function toggleMenu() {
  document.getElementById('nav-mobile').classList.toggle('hidden');
}

function closeMenu() {
  document.getElementById('nav-mobile').classList.add('hidden');
}

// Scroll fluido per tutti i link interni
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form: WhatsApp + Email
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

    // --- 1. WHATSAPP ---
    var waMsg = 'Ciao Dott.ssa Reggio! 👋\n\n';
    waMsg += 'Mi chiamo *' + nome + ' ' + cognome + '*.\n';
    if (servizio) waMsg += '📋 Servizio richiesto: *' + servizio + '*\n';
    waMsg += '📧 Email: ' + email + '\n';
    if (telefono) waMsg += '📞 Telefono: ' + telefono + '\n';
    if (msg)      waMsg += '\n💬 ' + msg;

    window.open('https://wa.me/393385793214?text=' + encodeURIComponent(waMsg), '_blank');

    // --- 2. EMAIL via Web3Forms ---
    var data = {
      access_key: 'INSERISCI_QUI_LA_ACCESS_KEY_DI_WEB3FORMS',
      subject: 'Nuova richiesta dal sito – ' + nome + ' ' + cognome,
      from_name: 'Sito Marta Reggio',
      nome: nome + ' ' + cognome,
      email: email,
      telefono: telefono || '—',
      servizio: servizio || '—',
      messaggio: msg || '—'
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
      var btn = form.querySelector('.btn-form');
      if (result.success) {
        btn.textContent = '✓ Messaggio inviato!';
        btn.style.background = '#3D6050';
        form.reset();
        setTimeout(function() {
          btn.textContent = 'Invia messaggio →';
          btn.style.background = '';
        }, 4000);
      }
    })
    .catch(function() {
      // WhatsApp è già aperto — il contatto è avvenuto
    });
  });
}
