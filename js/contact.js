(function () {
  'use strict';

  var form = document.getElementById('iletisimFormu');
  var durum = document.getElementById('formDurum');
  if (!form || !durum) return;

  var EPOSTA = 'mustafa_arinmis@outlook.com';

  function hata(ad, mesaj) {
    var alan = form.elements[ad];
    form.querySelector('[data-hata="' + ad + '"]').textContent = mesaj;
    alan.classList.toggle('hatali', Boolean(mesaj));
  }

  function durumYaz(tur, metin) {
    durum.dataset.durum = tur;
    durum.textContent = metin;
  }

  form.addEventListener('submit', function (olay) {
    olay.preventDefault();

    var ad = form.elements.name.value.trim();
    var eposta = form.elements.email.value.trim();
    var mesaj = form.elements.message.value.trim();

    hata('name', ad.length < 3 ? 'En az 3 karakter girin.' : '');
    hata('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta) ? '' : 'Geçerli bir e-posta adresi girin.');
    hata('message', mesaj.length < 16 ? 'Birkaç cümlelik kısa bir not ekleyin.' : '');
    if (form.querySelector('.hatali')) {
      durumYaz('hata', 'İşaretli alanları kontrol edin.');
      return;
    }

    var veri = new FormData(form);
    veri.set('replyto', eposta);
    durumYaz('', 'Gönderiliyor…');

    fetch('https://api.web3forms.com/submit', { method: 'POST', body: veri })
      .then(function (yanit) {
        return yanit.json().then(function (json) {
          if (!yanit.ok || !json.success) throw new Error('gönderilemedi');
        });
      })
      .then(function () {
        form.reset();
        durumYaz('basarili', 'Notunuz ulaştı, en kısa sürede dönüş yapacağız.');
      })
      .catch(function () {
        durumYaz('hata', 'Gönderilemedi. Tekrar deneyin ya da ' + EPOSTA + ' adresine yazın.');
      });
  });
})();
