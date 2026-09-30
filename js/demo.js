(function () {
  'use strict';

  var kok = document.querySelector('[data-demo]');
  var BELGELER = window.TIRO_BELGELER;
  if (!kok || !BELGELER) return;

  var yavas = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var IKON = {
    belge: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    izgara: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    kalem: '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
    ayar: '<circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>',
    secici: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
    ara: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    arti: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    yukle: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
    kapat: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    goz: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    gonder: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    buyut: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/>',
    kucult: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/>',
    tamekran: '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
    indir: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    geri: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    dis: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    yukari: '<path d="m18 15-6-6-6 6"/>',
    asagi: '<path d="m6 9 6 6 6-6"/>'
  };

  function ikon(ad, boy) {
    return '<svg viewBox="0 0 24 24" width="' + (boy || 16) + '" height="' + (boy || 16) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IKON[ad] + '</svg>';
  }

  function rozet(ad) {
    var udf = /\.udf$/.test(ad);
    var renk = udf ? '#7c3aed' : '#c84e54';
    return '<svg class="d-rozet" viewBox="0 0 14 14" width="14" height="14" aria-hidden="true"><rect x=".5" y="2" width="13" height="10" rx="2" fill="' + renk + '" fill-opacity=".16"/><text x="7" y="9.4" text-anchor="middle" font-size="' + (udf ? 5.5 : 6) + '" font-weight="700" fill="' + renk + '">' + (udf ? 'UDF' : 'PDF') + '</text></svg>';
  }

  var SIRA = [
    '07-mufettis-raporu.pdf',
    '06-ifade-hulya-hatun.pdf',
    '05-ifade-meryem-demirci.pdf',
    '04-ifade-mehmet-yildiz.pdf',
    '03-otopsi-raporu.pdf',
    '02-olay-yeri-tutanagi.pdf',
    '01-iddianame.pdf',
    '09-emanet-teslim-tutanagi-tarama.pdf',
    '08-tutuklama-karari.udf'
  ];

  var MADDE = {
    '81/1': {
      baslik: 'TCK m. 81 · Kasten öldürme',
      metin: '<p>(1) Bir insanı kasten öldüren kişi, müebbet hapis cezası ile cezalandırılır.</p>'
    },
    '37/1': {
      baslik: 'TCK m. 37 · Faillik',
      metin: '<p>(1) Suçun kanuni tanımında yer alan fiili birlikte gerçekleştiren kişilerden her biri, fail olarak sorumlu olur.</p><p>(2) Suçun işlenmesinde bir başkasını araç olarak kullanan kişi de fail olarak sorumlu tutulur. Kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişinin cezası, üçte birden yarısına kadar artırılır.</p>'
    },
    '82/1-a': {
      baslik: 'TCK m. 82 · Nitelikli haller',
      metin: '<p>(1) Kasten öldürme suçunun;</p><p>a) Tasarlayarak,</p><p>b) Canavarca hisle veya eziyet çektirerek,</p><p>…</p><p>İşlenmesi halinde, kişi ağırlaştırılmış müebbet hapis cezası ile cezalandırılır.</p>'
    }
  };

  function atif(belge, vurgu) {
    return '<button type="button" class="d-atif" data-belge="' + belge + '" data-vurgu="' + vurgu.join('|') + '" title="' + belge + ' — tıklayarak aç">' + ikon('dis', 10) + '<span>' + belge + '</span></button>';
  }

  function madde(no) {
    return '<button type="button" class="d-atif d-madde" data-madde="' + no + '">TCK ' + no + '</button>';
  }

  var SORULAR = [
    {
      soru: 'Olay yerinde hangi deliller ele geçirildi?',
      tarih: '27 Eyl',
      ozet: 'Olay yeri inceleme tutanağına göre 1 numaralı kompartımanda altı maddi delil…',
      bekle: ['Soru okunuyor…', 'Dosyada ilgili bilgiler aranıyor…', 'Yanıt hazırlanıyor…'],
      cevap: [
        '<p>Olay yeri inceleme tutanağına göre 1 numaralı kompartımanda altı maddi delil ele geçirilmiş. ' + atif('02-olay-yeri-tutanagi.pdf', ['Kompartıman kapısının yanında', 'Maktulün yastığı altında', 'Yatak altında bulunmuştur', 'Lavabodaki külde', 'Yatak başucunda', 'Yastığın altından']) + '</p>',
        '<ol><li><b>Bıçak:</b> kapının yanında halıya saplanmış, ahşap saplı, yaklaşık 18 cm namlulu mutfak bıçağı; üzerinde silinmiş kan izi var.</li><li><b>Kadın mendili:</b> yastığın altında, beyaz keten, sağ alt köşesinde “H” nakışlı; kan lekesi ve parfüm kokusu kayda alınmış.</li><li><b>Pipo temizleyici:</b> yatağın altında, üstünde yanmış tütün artığı var.</li><li><b>Yanmış kâğıt parçası:</b> lavabodaki külde, “…ARMSTR…” harfleri okunuyor; laboratuvara gönderilmiş.</li><li><b>Erkek kol saati:</b> başucunda, 01:15’te durmuş, camı çatlak.</li><li><b>Ucu kırılmış kibrit:</b> yastığın altından çıkarılmış; marka eşleşmesi henüz yapılmamış.</li></ol>',
        '<p>Altı delil 13/01/2026’da mühürlü poşetlerle adli emanete teslim edilmiş; 4 numaralı delil ayrıca kriminal laboratuvara gönderilmek üzere kayda alınmış. ' + atif('09-emanet-teslim-tutanagi-tarama.pdf', []) + '</p>'
      ],
      kaynak: [['02-olay-yeri-tutanagi.pdf', 'Tutanak', 's.1'], ['09-emanet-teslim-tutanagi-tarama.pdf', 'Tutanak', 's.1']]
    },
    {
      soru: 'Otopsi raporuna göre ölüm zamanı ve nedeni nedir?',
      tarih: '26 Eyl',
      ozet: 'Otopsi raporu ölüm zamanını 12/01/2026 saat 00:30 — 02:00 aralığı olarak…',
      bekle: ['Soru okunuyor…', 'Dosyada ilgili bilgiler aranıyor…', 'Yanıt hazırlanıyor…'],
      cevap: [
        '<p>Otopsi raporu ölüm zamanını <b>12/01/2026 saat 00:30 — 02:00 aralığı</b> olarak veriyor; tespit karaciğer ısısı, otoliz ve livor mortis bulgularına dayanıyor. ' + atif('03-otopsi-raporu.pdf', ['Karaciğer ısısı']) + '</p>',
        '<p>Ölümün kesin nedeni <b>kesici-delici aletle çoklu yaralanma sonucu hemoraji ve kardiyak tamponad</b>. Raporda 3 numaralı yaranın doğrudan sol ventriküle ulaştığı ve tek başına kısa sürede ölümcül olduğu yazıyor. ' + atif('03-otopsi-raporu.pdf', ['Kalp: 3 numaralı', 'Ölümün kesin nedeni']) + '</p>',
        '<p>İddianame de suç zamanını aynı aralıkla, 12 Ocak 2026 saat 00:30 — 02:00 olarak gösteriyor. ' + atif('01-iddianame.pdf', ['saat 00:30 — 02:00 arası']) + '</p>'
      ],
      kaynak: [['03-otopsi-raporu.pdf', 'Rapor', 's.1'], ['01-iddianame.pdf', 'İddianame', 's.1']]
    },
    {
      soru: 'Şüphelilere hangi maddelerden suç isnat ediliyor?',
      tarih: '25 Eyl',
      ozet: 'İddianamenin sevk maddesi bölümünde eylemin iki madde kapsamında…',
      bekle: ['Soru okunuyor…', 'Dosyada ilgili bilgiler aranıyor…', 'İlgili kanun maddeleri aranıyor…', 'Yanıt hazırlanıyor…'],
      cevap: [
        '<p>İddianamenin sevk maddesi bölümünde eylemin iki madde kapsamında değerlendirilmesi isteniyor: ' + atif('01-iddianame.pdf', ['Şüphelilerin eyleminin']) + '</p>',
        '<ul><li>' + madde('81/1') + ' kasten öldürme</li><li>' + madde('37/1') + ' müşterek faillik</li></ul>',
        '<p>Tasarlama unsurunun bulunduğu kanaatiyle ' + madde('82/1-a') + ' yedek olarak ileri sürülmüş.</p>',
        '<p>Sulh ceza hakimliğinin 13/01/2026 tarihli kararında suç “Kasten öldürme (TCK 81/1, 37/1)” olarak yazılı; üç şüpheli hakkında tutuklama, dokuz şüpheli hakkında adli kontrol kararı verilmiş. ' + atif('08-tutuklama-karari.udf', ['SUÇ ', 'TUTUKLANMALARINA', 'ADLİ KONTROL tedbiri']) + '</p>'
      ],
      kaynak: [['01-iddianame.pdf', 'İddianame', 's.2'], ['08-tutuklama-karari.udf', 'Karar', 's.1'], ['TCK m. 81', 'KANUN'], ['TCK m. 37', 'KANUN']]
    }
  ];

  var ANALIZ = {
    'Kişiler': [
      ['Cevdet KASAPOĞLU', 'Maktul. İddianameye göre gerçek kimliği Salim BERK.', ['01-iddianame.pdf', ['CEVDET KASAPOĞLU', 'SALİM BERK']]],
      ['Mehmet Hakan AKAY', 'Şüpheli, 32, maktulün özel sekreteri. 2 numaralı kompartıman.', ['01-iddianame.pdf', ['MEHMET HAKAN AKAY']]],
      ['Ekrem MERT', 'Şüpheli, 40, maktulün valesi. 12 numaralı kompartıman.', ['01-iddianame.pdf', ['EKREM MERT']]],
      ['Mehmet YILDIZ', 'Şüpheli, 45, vagon kondüktörü.', ['04-ifade-mehmet-yildiz.pdf', ['MEHMET YILDIZ']]],
      ['Düriye DEMİR', 'Şüpheli, 75, emekli.', ['01-iddianame.pdf', ['DÜRİYE DEMİR']]],
      ['Hilal ŞİMDİ', 'Şüpheli, 50, Düriye Demir’in hizmetçisi.', ['01-iddianame.pdf', ['HİLAL ŞİMDİ']]],
      ['Helena Nida AKSOY', 'Şüpheli, 28.', ['01-iddianame.pdf', ['HELENA NİDA AKSOY']]],
      ['Yusuf AKSOY', 'Şüpheli, 45, Helena Aksoy’un eşi.', ['01-iddianame.pdf', ['YUSUF AKSOY']]],
      ['Arif BİLGİN', 'Şüpheli, 55, emekli albay.', ['01-iddianame.pdf', ['ARİF BİLGİN']]],
      ['Meryem DEMİRCİ', 'Şüpheli, 29, İngilizce öğretmeni.', ['05-ifade-meryem-demirci.pdf', ['MERYEM DEMİRCİ']]],
      ['Hülya YILMAZ', 'Şüpheli, “Hülya Hatun” adını kullanıyor; Türkiye’ye Linda Akman pasaportuyla girmiş.', ['06-ifade-hulya-hatun.pdf', ['Linda AKMAN olarak']]],
      ['Gerda ÖNAL', 'Şüpheli, 40, hemşire.', ['01-iddianame.pdf', ['GERDA ÖNAL']]],
      ['Cengiz HARMAN', 'Şüpheli, 50, özel dedektif.', ['01-iddianame.pdf', ['CENGİZ HARMAN']]]
    ],
    'Deliller': [
      ['Bıçak', 'Ahşap saplı, yaklaşık 18 cm namlulu mutfak bıçağı; kapının yanında halıya saplanmış.', ['02-olay-yeri-tutanagi.pdf', ['Kompartıman kapısının yanında']]],
      ['“H” nakışlı mendil', 'Beyaz keten kadın mendili; maktulün yastığı altında.', ['02-olay-yeri-tutanagi.pdf', ['Maktulün yastığı altında']]],
      ['Pipo temizleyici', 'Yatağın altında, üstünde yanmış tütün artığı.', ['02-olay-yeri-tutanagi.pdf', ['Yatak altında bulunmuştur']]],
      ['Yanmış kâğıt parçası', 'Lavabodaki külde, “…ARMSTR…” okunuyor.', ['02-olay-yeri-tutanagi.pdf', ['Lavabodaki külde']]],
      ['Erkek kol saati', '01:15’te durmuş, camı çatlak.', ['02-olay-yeri-tutanagi.pdf', ['Yatak başucunda']]],
      ['Ucu kırılmış kibrit', 'Yastığın altından çıkarılmış, 2 numaralı kibrit çubuğu.', ['02-olay-yeri-tutanagi.pdf', ['Yastığın altından']]]
    ],
    'Yerler': [
      ['7. vagon, 1 numaralı kompartıman', 'Maktulün bulunduğu yataklı kompartıman.', ['02-olay-yeri-tutanagi.pdf', ['7. vagon, 1 numaralı']]],
      ['Sansa Boğazı', 'Trenin kar nedeniyle durduğu yer.', ['02-olay-yeri-tutanagi.pdf', ['Sansa Boğazı']]],
      ['Kondüktör nöbet bölmesi', 'Mehmet YILDIZ’ın bulunduğu bölme.', ['02-olay-yeri-tutanagi.pdf', ['Kondüktör nöbet bölmesi']]]
    ],
    'Olaylar': [
      ['11/01/2026 23:50', 'Tren Sansa Boğazı civarında kar nedeniyle durur.', ['02-olay-yeri-tutanagi.pdf', ['23:50']]],
      ['12/01/2026 00:30–02:00', 'Otopsiye göre ölüm zamanı.', ['03-otopsi-raporu.pdf', ['Karaciğer ısısı']]],
      ['12/01/2026 03:50', 'Kondüktör, maktulün çağrıya cevap vermediğini bildirir.', ['02-olay-yeri-tutanagi.pdf', ['03:50']]],
      ['12/01/2026 04:15', 'Olay yeri incelemesi.', ['02-olay-yeri-tutanagi.pdf', ['04:15']]],
      ['13/01/2026', 'Tutuklama ve adli kontrol kararı.', ['08-tutuklama-karari.udf', ['KARAR TARİHİ']]],
      ['28/01/2026', 'İddianame düzenlenir.', ['01-iddianame.pdf', ['Esas No']]]
    ]
  };

  var durum = {
    gorunum: 'belgeler',
    sekme: 'Kişiler',
    sag: { tur: 'belge', ad: '02-olay-yeri-tutanagi.pdf', vurgu: [] },
    sohbet: null,
    yakinlik: 100,
    mesgul: false
  };

  kok.innerHTML =
    '<div class="d-app">' +
      '<nav class="d-ray" aria-label="Uygulama menüsü">' +
        '<img src="/assets/tiro_icon.svg" alt="" width="24" height="24">' +
        '<button type="button" class="d-ray-dugme" data-git="belgeler" title="Belgeler" aria-label="Belgeler">' + ikon('belge', 18) + '</button>' +
        '<button type="button" class="d-ray-dugme" data-git="analiz" title="Dava Analizi" aria-label="Dava Analizi">' + ikon('izgara', 18) + '</button>' +
        '<button type="button" class="d-ray-dugme" data-git="savunma" title="Savunma" aria-label="Savunma">' + ikon('kalem', 18) + '</button>' +
        '<button type="button" class="d-ray-dugme d-alt" data-kapali title="Ayarlar" aria-label="Ayarlar">' + ikon('ayar', 18) + '</button>' +
      '</nav>' +
      '<div class="d-kabuk">' +
        '<header class="d-ust">' +
          '<button type="button" class="d-dava" data-kapali><span>Doğu Ekspresi Cinayeti</span>' + ikon('secici', 14) + '</button>' +
          '<div class="d-ust-sag">' +
            '<button type="button" class="d-ust-dugme" data-kapali>' + ikon('ara', 15) + 'Ara</button>' +
            '<button type="button" class="d-ust-dugme d-dolu" data-kapali>' + ikon('arti', 15) + 'Yeni Dava</button>' +
          '</div>' +
        '</header>' +
        '<div class="d-ana">' +
          '<aside class="d-dosyalar"></aside>' +
          '<section class="d-sohbet"></section>' +
          '<aside class="d-sag"></aside>' +
        '</div>' +
      '</div>' +
    '</div>';

  var $dosyalar = kok.querySelector('.d-dosyalar');
  var $sohbet = kok.querySelector('.d-sohbet');
  var $sag = kok.querySelector('.d-sag');
  function kacis(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  // ---------- sol panel ----------

  function solCiz() {
    kok.querySelectorAll('.d-ray-dugme[data-git]').forEach(function (d) {
      var g = d.getAttribute('data-git');
      var etkin = g === 'savunma' ? durum.sag && durum.sag.tur === 'savunma' : g === durum.gorunum;
      d.classList.toggle('etkin', etkin);
      d.setAttribute('aria-pressed', String(etkin));
    });

    if (durum.gorunum === 'belgeler') {
      var secili = durum.sag && durum.sag.tur === 'belge' ? durum.sag.ad : null;
      $dosyalar.innerHTML =
        '<div class="d-panel-bas"><span>Belgeler</span><button type="button" class="d-kutu-dugme" data-kapali title="Belge Yükle" aria-label="Belge Yükle">' + ikon('yukle', 14) + '</button></div>' +
        '<ul class="d-liste">' + SIRA.map(function (ad) {
          return '<li><button type="button" class="d-dosya' + (ad === secili ? ' secili' : '') + '" data-ac="' + ad + '">' + rozet(ad) + '<span>' + ad + '</span>' + (ad === secili ? '<i class="d-dosya-goz">' + ikon('goz', 13) + '</i>' : '') + '</button></li>';
        }).join('') + '</ul>';
    } else {
      var sekmeler = Object.keys(ANALIZ);
      $dosyalar.innerHTML =
        '<div class="d-panel-bas"><span>Dava Analizi</span></div>' +
        '<div class="d-sekmeler" role="tablist">' + sekmeler.map(function (s) {
          return '<button type="button" role="tab" aria-selected="' + (s === durum.sekme) + '" class="d-sekme' + (s === durum.sekme ? ' secili' : '') + '" data-sekme="' + s + '">' + s + ' <b>' + ANALIZ[s].length + '</b></button>';
        }).join('') + '</div>' +
        '<ul class="d-liste">' + ANALIZ[durum.sekme].map(function (o, i) {
          var secili = durum.sag && durum.sag.tur === 'oge' && durum.sag.sekme === durum.sekme && durum.sag.i === i;
          return '<li><button type="button" class="d-oge' + (secili ? ' secili' : '') + '" data-oge="' + i + '"><strong>' + o[0] + '</strong><span>' + o[1] + '</span></button></li>';
        }).join('') + '</ul>';
    }
  }

  // ---------- sohbet ----------

  var SURUM = '<p class="d-surum">tiro hata yapabilir <code>v0.4.0</code></p>';

  function girdi(yer) {
    return '<form class="d-girdi" data-girdi><label class="d-gizli" for="d-soru-' + yer + '">Soru</label><textarea id="d-soru-' + yer + '" rows="1" placeholder="Soru sorun..."' + (durum.mesgul ? ' disabled' : '') + '></textarea><button type="submit" aria-label="Gönder"' + (durum.mesgul ? ' disabled' : '') + '>' + ikon('gonder', 17) + '</button></form>';
  }

  function sohbetCiz() {
    if (!durum.sohbet) {
      $sohbet.innerHTML =
        '<div class="d-karsilama">' +
          '<h3>Doğu Ekspresi Cinayeti</h3>' +
          '<p class="d-soluk">Mesajınızı yazın. İlk gönderimde yeni sohbet açılır.</p>' +
          girdi('ilk') +
          '<div class="d-gecmis"><span>Geçmiş Sohbetler</span>' + SORULAR.map(function (s, i) {
            return '<button type="button" data-gecmis="' + i + '"><strong>' + s.soru + '</strong><time>' + s.tarih + '</time><em>' + s.ozet + '</em></button>';
          }).join('') + '</div>' +
        '</div>' + SURUM;
      return;
    }
    $sohbet.innerHTML =
      '<div class="d-sohbet-bas"><button type="button" class="d-kutu-dugme" data-geri aria-label="Sohbetler listesine dön">' + ikon('geri', 14) + '</button><span>Doğu Ekspresi Cinayeti / ' + kacis(durum.sohbet.baslik) + '</span></div>' +
      '<div class="d-mesajlar"></div>' +
      '<div class="d-sohbet-alt">' + girdi('devam') + SURUM + '</div>';
    var $m = $sohbet.querySelector('.d-mesajlar');
    durum.sohbet.mesajlar.forEach(function (m) { $m.appendChild(mesajOgesi(m)); });
    $m.scrollTop = $m.scrollHeight;
  }

  function mesajOgesi(m) {
    var el = document.createElement('div');
    if (m.kim === 'ben') {
      el.className = 'd-ben';
      el.textContent = m.metin;
      return el;
    }
    el.className = 'd-cevap';
    if (m.bekliyor) {
      el.innerHTML = '<p class="d-bekle"><span class="d-tiro" aria-hidden="true">⁊</span>' + m.bekliyor + '</p>';
      return el;
    }
    el.innerHTML = m.bloklar.slice(0, m.gorunen).join('');
    if (m.gorunen >= m.bloklar.length && m.kaynak) {
      el.innerHTML += '<details class="d-kaynaklar"><summary>Kaynaklar (' + m.kaynak.length + ')</summary><ul>' + m.kaynak.map(function (k, i) {
        return '<li><b>Kaynak ' + (i + 1) + '</b> ' + k[0] + ' ' + k.slice(1).map(function (e) { return '<i>' + e + '</i>'; }).join('') + '</li>';
      }).join('') + '</ul></details>';
    }
    return el;
  }

  function bekle(ms) {
    return new Promise(function (r) { setTimeout(r, yavas ? ms : 0); });
  }

  function sor(metin, s) {
    if (durum.mesgul) return;
    durum.mesgul = true;
    durum.sohbet = { baslik: metin, mesajlar: [{ kim: 'ben', metin: metin }] };
    var cevap = { kim: 'tiro', bekliyor: 'Soru okunuyor…' };
    durum.sohbet.mesajlar.push(cevap);
    sohbetCiz();

    var adimlar = s ? s.bekle : ['Soru okunuyor…'];
    var zincir = Promise.resolve();
    adimlar.forEach(function (a) {
      zincir = zincir.then(function () { cevap.bekliyor = a; sohbetCiz(); return bekle(750); });
    });
    zincir.then(function () {
      delete cevap.bekliyor;
      cevap.bloklar = s ? s.cevap : ['<p class="d-not">Bu tanıtım yalnızca örnek soruları cevaplıyor. Uygulamada soru dosyadaki belgelerin tamamında aranır ve cevap dayandığı belgeyi belirtir.</p>'];
      cevap.kaynak = s && s.kaynak;
      cevap.gorunen = 0;
      var akis = Promise.resolve();
      cevap.bloklar.forEach(function () {
        akis = akis.then(function () { cevap.gorunen++; sohbetCiz(); return bekle(260); });
      });
      return akis;
    }).then(function () {
      durum.mesgul = false;
      sohbetCiz();
    });
  }

  function gecmisAc(i) {
    var s = SORULAR[i];
    durum.sohbet = {
      baslik: s.soru,
      mesajlar: [{ kim: 'ben', metin: s.soru }, { kim: 'tiro', bloklar: s.cevap, kaynak: s.kaynak, gorunen: s.cevap.length }]
    };
    sohbetCiz();
  }

  // ---------- sağ panel ----------

  function belgeHtml(ad) {
    var b = BELGELER[ad];
    if (b.tur === 'tarama') {
      return '<div class="d-kagit d-tarama"><img src="/assets/urun/09-emanet-tarama.webp" width="910" height="1286" alt="Taranmış adli emanete teslim tutanağı: bıçak, H nakışlı mendil, pipo temizleyici, yanmış kâğıt, kol saati ve kibrit çubuğu poşet numaralarıyla listelenmiş."></div>';
    }
    var html = b.html.replace(/TCK (81\/1)/g, '<button type="button" class="d-kanun" data-kanun="$1">TCK $1</button>');
    return '<div class="d-kagit' + (b.tur === 'udf' ? ' d-udf' : '') + '">' + html + '</div>';
  }

  function sagCiz() {
    var s = durum.sag;
    kok.classList.toggle('sag-acik', !!s);
    if (!s) { $sag.innerHTML = ''; return; }

    if (s.tur === 'belge') {
      var tarama = BELGELER[s.ad].tur === 'tarama';
      $sag.innerHTML =
        '<div class="d-sag-bas"><strong>' + s.ad + '</strong><div class="d-araclar">' +
          '<span class="d-eslesme" hidden><span></span><button type="button" data-eslesme="-1" aria-label="Önceki">' + ikon('yukari', 13) + '</button><button type="button" data-eslesme="1" aria-label="Sonraki">' + ikon('asagi', 13) + '</button></span>' +
          (tarama || BELGELER[s.ad].tur === 'udf' ? '' : '<button type="button" class="d-arac" data-yakin="-10" aria-label="Küçült">' + ikon('kucult', 14) + '</button><span class="d-yuzde">' + durum.yakinlik + '%</span><button type="button" class="d-arac" data-yakin="10" aria-label="Büyüt">' + ikon('buyut', 14) + '</button><span class="d-ayrac"></span>') +
          '<button type="button" class="d-arac" data-kapali aria-label="Tam Ekran">' + ikon('tamekran', 14) + '</button>' +
          '<button type="button" class="d-arac" data-kapali aria-label="İndir">' + ikon('indir', 14) + '</button>' +
          '<button type="button" class="d-arac" data-sag-kapat aria-label="Kapat">' + ikon('kapat', 14) + '</button>' +
        '</div></div>' +
        '<div class="d-sag-govde">' + belgeHtml(s.ad) + '</div>';
      var $kagit = $sag.querySelector('.d-kagit');
      if (!tarama) $kagit.style.zoom = durum.yakinlik / 100;
      vurgula(s.vurgu);
      return;
    }

    if (s.tur === 'madde') {
      var m = MADDE[s.no];
      $sag.innerHTML =
        '<div class="d-sag-bas"><strong>' + m.baslik + '</strong><div class="d-araclar"><button type="button" class="d-arac" data-sag-kapat aria-label="Kapat">' + ikon('kapat', 14) + '</button></div></div>' +
        '<div class="d-sag-govde"><div class="d-madde-metin"><p class="d-soluk">5237 sayılı Türk Ceza Kanunu</p>' + m.metin + '</div></div>';
      return;
    }

    if (s.tur === 'oge') {
      var o = ANALIZ[s.sekme][s.i];
      $sag.innerHTML =
        '<div class="d-sag-bas"><strong>' + o[0] + '</strong><div class="d-araclar"><button type="button" class="d-arac" data-sag-kapat aria-label="Kapat">' + ikon('kapat', 14) + '</button></div></div>' +
        '<div class="d-sag-govde"><div class="d-madde-metin"><p class="d-soluk">' + s.sekme + '</p><p>' + o[1] + '</p><p class="d-soluk">Geçtiği belge</p><p>' + atif(o[2][0], o[2][1]) + '</p></div></div>';
      return;
    }

    if (s.tur === 'savunma') {
      var arac = ['B', 'I', 'U', 'S', 'H1', 'H2', '•', '1.', '❝'];
      $sag.innerHTML =
        '<div class="d-sag-bas"><strong>Savunma</strong><div class="d-araclar"><button type="button" class="d-arac d-metin-dugme" data-kapali>.udf</button><button type="button" class="d-arac d-metin-dugme" data-kapali>.pdf</button><button type="button" class="d-arac" data-sag-kapat aria-label="Kapat">' + ikon('kapat', 14) + '</button></div></div>' +
        '<div class="d-editor-arac">' + arac.map(function (a) { return '<button type="button" data-kapali>' + a + '</button>'; }).join('') + '</div>' +
        '<div class="d-sag-govde d-editor-govde"><div class="d-editor" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Savunma metni" data-yer="Savunmanı yazmaya başla…"></div></div>';
    }
  }

  var eslesmeler = [];
  var eslesmeSira = 0;

  function vurgula(parcalar) {
    eslesmeler = [];
    eslesmeSira = 0;
    var $govde = $sag.querySelector('.d-sag-govde');
    if (parcalar.length) {
      $govde.querySelectorAll('.d-kagit p, .d-kagit td').forEach(function (el) {
        var metin = el.textContent;
        if (parcalar.some(function (p) { return metin.indexOf(p) !== -1; })) {
          el.classList.add('d-vurgu');
          eslesmeler.push(el.tagName === 'TD' ? el.parentNode : el);
        }
      });
    }
    var $e = $sag.querySelector('.d-eslesme');
    if (eslesmeler.length) {
      $e.hidden = false;
      eslesmeGit(0);
    } else {
      $govde.scrollTop = 0;
    }
  }

  function eslesmeGit(yon) {
    eslesmeSira = (eslesmeSira + yon + eslesmeler.length) % eslesmeler.length;
    eslesmeler.forEach(function (el, i) { el.classList.toggle('d-etkin', i === eslesmeSira); });
    $sag.querySelector('.d-eslesme > span').textContent = (eslesmeSira + 1) + ' / ' + eslesmeler.length;
    var $govde = $sag.querySelector('.d-sag-govde');
    var el = eslesmeler[eslesmeSira];
    var hedef = el.getBoundingClientRect().top - $govde.getBoundingClientRect().top + $govde.scrollTop - $govde.clientHeight / 3;
    $govde.scrollTo({ top: hedef, behavior: yavas ? 'smooth' : 'auto' });
  }

  function belgeAc(ad, vurgu) {
    durum.sag = { tur: 'belge', ad: ad, vurgu: vurgu || [] };
    sagCiz();
    solCiz();
  }

  // ---------- olaylar ----------

  kok.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || !kok.contains(t)) return;

    if (t.hasAttribute('data-kapali')) return;

    var git = t.getAttribute('data-git');
    if (git === 'savunma') {
      durum.sag = durum.sag && durum.sag.tur === 'savunma' ? null : { tur: 'savunma' };
      sagCiz(); solCiz();
      return;
    }
    if (git) { durum.gorunum = git; solCiz(); return; }

    if (t.hasAttribute('data-ac')) { belgeAc(t.getAttribute('data-ac')); return; }
    if (t.hasAttribute('data-sekme')) { durum.sekme = t.getAttribute('data-sekme'); solCiz(); return; }
    if (t.hasAttribute('data-oge')) {
      durum.sag = { tur: 'oge', sekme: durum.sekme, i: Number(t.getAttribute('data-oge')) };
      sagCiz(); solCiz();
      return;
    }
    if (t.hasAttribute('data-belge')) {
      var v = t.getAttribute('data-vurgu');
      belgeAc(t.getAttribute('data-belge'), v ? v.split('|') : []);
      return;
    }
    if (t.hasAttribute('data-madde')) { durum.sag = { tur: 'madde', no: t.getAttribute('data-madde') }; sagCiz(); solCiz(); return; }
    if (t.hasAttribute('data-kanun')) { durum.sag = { tur: 'madde', no: t.getAttribute('data-kanun') }; sagCiz(); solCiz(); return; }
    if (t.hasAttribute('data-sag-kapat')) { durum.sag = null; sagCiz(); solCiz(); return; }
    if (t.hasAttribute('data-eslesme')) { eslesmeGit(Number(t.getAttribute('data-eslesme'))); return; }
    if (t.hasAttribute('data-yakin')) {
      durum.yakinlik = Math.min(150, Math.max(60, durum.yakinlik + Number(t.getAttribute('data-yakin'))));
      $sag.querySelector('.d-kagit').style.zoom = durum.yakinlik / 100;
      $sag.querySelector('.d-yuzde').textContent = durum.yakinlik + '%';
      return;
    }
    if (t.hasAttribute('data-gecmis')) { gecmisAc(Number(t.getAttribute('data-gecmis'))); return; }
    if (t.hasAttribute('data-geri')) { if (!durum.mesgul) { durum.sohbet = null; sohbetCiz(); } }
  });

  kok.addEventListener('submit', function (e) {
    e.preventDefault();
    var alan = e.target.querySelector('textarea');
    var metin = alan.value.trim();
    if (!metin) return;
    var eslesen = SORULAR.filter(function (s) { return s.soru.toLocaleLowerCase('tr') === metin.toLocaleLowerCase('tr'); })[0];
    sor(metin, eslesen);
  });

  kok.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && e.target.tagName === 'TEXTAREA') {
      e.preventDefault();
      e.target.form.requestSubmit();
    }
  });

  solCiz();
  sohbetCiz();
  sagCiz();
  kok.classList.add('hazir');
})();
