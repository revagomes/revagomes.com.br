(function () {
  var T = window.SITE_I18N || {};

  function getLang() {
    var p = new URLSearchParams(window.location.search);
    var u = p.get('lang');
    if (u && T[u]) { localStorage.setItem('revagomes_lang', u); return u; }
    var s = localStorage.getItem('revagomes_lang');
    if (s && T[s]) return s;
    return 'en';
  }

  function apply(lang) {
    var t = T[lang] || T['en'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] != null) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (t[k] != null) el.setAttribute('placeholder', t[k]);
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    var url = new URL(window.location.href);
    if (lang === 'pt') { url.searchParams.set('lang', 'pt'); }
    else { url.searchParams.delete('lang'); }
    window.history.replaceState({}, '', url.toString());
    document.querySelectorAll('.lang-btn').forEach(function (el) {
      el.classList.toggle('lang-btn--active', el.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = getLang();
    apply(lang);
    document.querySelectorAll('.lang-btn').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var l = el.dataset.lang;
        localStorage.setItem('revagomes_lang', l);
        apply(l);
      });
    });
  });
})();
