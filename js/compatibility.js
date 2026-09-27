(function () {
  'use strict';

  var dugme = document.getElementById('uyumKontrol');
  var sonuc = document.getElementById('uyumSonuc');
  if (!dugme || !sonuc) return;

  var adlar = { hafif: 'Hafif', standart: 'Standart', guclu: 'Çok güçlü', maksimum: 'Maksimum' };

  function profil() {
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
      return { metin: 'Telefon veya tablet algılandı. tiro masaüstü uygulamasıdır; tabloyu bilgisayarınız için referans alın.' };
    }
    var ram = navigator.deviceMemory;
    var cekirdek = navigator.hardwareConcurrency || 0;
    if (!ram) {
      return { metin: 'Bu tarayıcı bellek bilgisini paylaşmıyor. Uygun profili tablodan seçebilirsiniz.' };
    }
    var p = 'hafif';
    if (ram >= 24 || cekirdek >= 12) p = 'maksimum';
    else if (ram >= 16 || cekirdek >= 10) p = 'guclu';
    else if (ram >= 8 || cekirdek >= 6) p = 'standart';
    return {
      profil: p,
      metin: 'Bilgisayarınız ' + adlar[p] + ' profiline uygun görünüyor. Tarayıcılar belleği yuvarlayarak bildirdiği için kesin kararı kurulum görüşmesinde veriyoruz.'
    };
  }

  dugme.addEventListener('click', function () {
    var s = profil();
    document.querySelectorAll('tr[data-profil]').forEach(function (tr) {
      tr.classList.toggle('secili', tr.dataset.profil === s.profil);
    });
    sonuc.textContent = s.metin;
  });
})();
