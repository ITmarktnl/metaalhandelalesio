(function () {
  var d = document;
  // menu (mobiel)
  var b = d.getElementById('burger'), n = d.getElementById('nav');
  if (b && n) b.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
    b.setAttribute('aria-label', o ? 'Menu sluiten' : 'Menu openen');
    d.body.classList.toggle('no-scroll', o);
  });
  // formulier naar WhatsApp
  var f = d.getElementById('hero-form');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    var naam = f.naam.value.trim(), tel = f.tel.value.trim(), bericht = f.bericht.value.trim(), er = f.querySelector('.err');
    if (!naam || !bericht) { er.hidden = false; return; }
    er.hidden = true;
    var m = 'Hallo Metaalhandel Alesio,\n\nOnderwerp: ' + f.onderwerp.value + '\n' + bericht + '\n\nNaam: ' + naam + (tel ? '\nTelefoon: ' + tel : '');
    window.open('https://wa.me/31644008756?text=' + encodeURIComponent(m), '_blank', 'noopener');
  });
  // melding 'e-mail niet beschikbaar'
  var ov = d.getElementById('mail-niet-beschikbaar'), last;
  function open(e) { e.preventDefault(); last = d.activeElement; ov.hidden = false; d.body.classList.add('no-scroll'); var x = ov.querySelector('.mn-x'); if (x) x.focus(); }
  function close() { ov.hidden = true; d.body.classList.remove('no-scroll'); if (last) last.focus(); }
  if (ov) {
    d.addEventListener('click', function (e) { var a = e.target.closest('a[href^="mailto:"],.mn-trigger'); if (a) open(e); });
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('.mn-x')) close(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !ov.hidden) close(); });
  }
})();
