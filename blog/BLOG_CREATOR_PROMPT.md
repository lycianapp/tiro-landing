# Blog Creator Prompt — tiro.legal

Bu dosya yeni blog yazısı oluştururken AI asistana (Claude / ChatGPT / Codex / vb.)
verilecek prompt'u içerir. Aşağıdaki tüm metni kopyala, en sona kendi konunu
ekleyip gönder.

---

## PROMPT (kopyala-yapıştır)

Sen tiro.legal blogu için bir yazı hazırlıyorsun. tiro, **Türkiye'de ceza
avukatları için kapalı devre yapay zeka** geliştiren bir hukuk teknolojisi ürünü:
dosya buluta gitmiyor, kendi eğittiğimiz model kullanıcının bilgisayarında
çalışıyor, savunma dilekçesi yazımı için kuruldu.

### Sesin

- **Hedef okur:** Türk ceza avukatı. Pratik, somut, zamanı kısa.
- **Üslup:** Sade Türkçe. Hukuk diliyle teknoloji dilini doğal birleştir.
  AI hype yok, "devrim niteliğinde" yok, "siz değerli avukatlarımız" yok.
- **Cümle:** Kısa ve nokta vurgulu. Tane tane konuş.
- **Kişi:** "tiro" küçük harf, marka adı. "yapay zeka" Türkçe yaz.
- **AI hakkında konuşurken:** Dürüst sınır koy — "tiro asistandır, avukat
  değildir. Karar avukatındır."
- **Atıf:** CMK / TCK / PVSK gibi madde atıflarını "CMK m. 217/1" formatında ver.
- **Yasak:**
  - Emoji yok
  - "Sevgili dostlar / değerli okuyucular" yok
  - "Sonuç olarak / nihayetinde / şüphesiz" gibi şişirmeler yok
  - Açılış paragrafında "Günümüzde teknoloji..." gibi jenerik girişler yok

### İçerik kuralları

- **Uzunluk:** 400-900 kelime arası. Hedef "3-5 dk okuma".
- **Yapı:**
  1. Tek paragraf giriş — sorunu / hikayeyi koy. 3 cümle.
  2. 2-4 alt başlık (`<h2>`). Her alt başlık altında 1-3 kısa paragraf.
  3. En az 1 `<blockquote>` (kısa öz cümle, manifesto tonu).
  4. Sonuç tek paragraf — "tiro burada nasıl yardım ediyor" bağı.
- **Ürün referansı:** Yazıda en az 1 yer, en fazla 3 yer tiro'nun belirli bir
  modülüne bağlan. Modüller: savunma editörü, evrak akışı, olay zaman çizgisi,
  dava haritası, kişi dosyası, mevzuat tarama, kendi yapay zeka modeli.

### Çıktı formatı

İki şey üret:

**1. Dosya:** `blog/<slug>.html` — slug Türkçe karakter olmadan, küçük harf,
tire ile. Örn: `udf-icin-yerel-arama.html`.

İçerik **birebir** aşağıdaki şablona uy. Sadece şu yerleri doldur:
`{TITLE}`, `{DESCRIPTION}`, `{SLUG}`, `{DATE}` (ISO `YYYY-MM-DD`),
`{READ_TIME}` (örn `4 dk okuma`), `{SERIES_NUM}` (örn `02`),
`{LEAD}` (1 cümle, 25 kelimeden az), `{TAG_1}`, `{TAG_2}` (1-3 tag),
`{BODY}` (h2 / p / ul / blockquote / h3 yapısında).

```html
<!DOCTYPE html>
<html lang="tr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{TITLE} — tiro</title>
  <meta name="description" content="{DESCRIPTION}" />
  <meta name="theme-color" content="#1b1111" />
  <meta property="og:title" content="{TITLE}" />
  <meta property="og:description" content="{DESCRIPTION}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://tiro.legal/blog/{SLUG}.html" />
  <meta property="article:published_time" content="{DATE}" />
  <meta property="og:image" content="https://tiro.legal/assets/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="tiro — Söz aramızda kalır." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://tiro.legal/assets/og-image.jpg" />
  <link rel="canonical" href="https://tiro.legal/blog/{SLUG}.html" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cardo:wght@700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="icon" type="image/svg+xml" href="../assets/favicon/favicon.svg" />
  <link rel="icon" type="image/png" href="../assets/favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/x-icon" href="../assets/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/favicon/apple-touch-icon.png" />
  <link rel="manifest" href="../assets/favicon/site.webmanifest" />
  <link rel="stylesheet" href="../css/base.css?v=20260509a" />
  <link rel="stylesheet" href="../css/components.css?v=20260509a" />
  <link rel="stylesheet" href="../css/layout.css?v=20260509a" />
  <link rel="stylesheet" href="../css/pages/blog.css?v=20260509a" />
  <link rel="stylesheet" href="../css/responsive.css?v=20260509a" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{TITLE}",
    "datePublished": "{DATE}",
    "author": { "@type": "Organization", "name": "tiro" },
    "publisher": {
      "@type": "Organization",
      "name": "tiro",
      "logo": { "@type": "ImageObject", "url": "https://tiro.legal/assets/tiro_icon.svg" }
    },
    "mainEntityOfPage": "https://tiro.legal/blog/{SLUG}.html",
    "description": "{DESCRIPTION}",
    "inLanguage": "tr-TR"
  }
  </script>
</head>

<body>
  <a href="#main" class="skip-link">Ana içeriğe atla</a>

  <div class="site">
    <header class="topbar">
      <div class="container topbar-inner">
        <a href="../index.html" class="brand" aria-label="tiro ana sayfa">
          <img src="../assets/tiro_icon.svg" alt="" class="brand-logo" />
          <span class="brand-text">
            <strong class="brand-name">tiro</strong>
            <small>tiro.legal</small>
          </span>
        </a>

        <nav class="nav" aria-label="Ana gezinme">
          <a href="../urun.html">Ürün</a>
          <a href="../hakkimizda.html">Hakkımızda</a>
          <a href="../blog/" aria-current="page">Blog</a>
          <a href="../iletisim.html">İletişim</a>
        </nav>

        <button type="button" class="nav-toggle" aria-controls="mobileNav" aria-expanded="false" aria-label="Menüyü aç">
          <span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
        <a href="../iletisim.html" class="btn btn-primary btn-compact topbar-cta">Erişim Talep Et</a>
      </div>
    </header>

    <main id="main">
      <article class="container">
        <header class="post-hero reveal">
          <div class="post-meta">
            <span class="post-date">{DATE}</span>
            <span class="post-divider" aria-hidden="true"></span>
            <span>{READ_TIME}</span>
            <span class="post-divider" aria-hidden="true"></span>
            <span>Yazı serisi · {SERIES_NUM}</span>
          </div>
          <h1>{TITLE}</h1>
          <p class="post-lead">{LEAD}</p>
          <div class="post-tags">
            <span class="blog-tag">{TAG_1}</span>
            <span class="blog-tag">{TAG_2}</span>
          </div>
        </header>

        <div class="prose reveal">
{BODY}
        </div>

        <footer class="post-footer">
          <a href="index.html" class="post-back">Tüm yazılar</a>

          <div class="post-cta">
            <strong>tiro'yu kendi dosyanızda görmek ister misiniz?</strong>
            <p>
              Şu an kapalı beta. Kurulumu konuşarak yapıyoruz; nasıl çalıştığınızı anlamak için
              kısa bir not bırakın, dönüş yapalım.
            </p>
            <div class="post-cta-actions">
              <a href="https://calendly.com/lycianapp/30min" data-calendly target="_blank" rel="noopener" class="btn btn-primary btn-arrow">30 dk konuşalım</a>
              <a href="../urun.html" class="btn btn-ghost">Ürünü gör</a>
            </div>
          </div>
        </footer>
      </article>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <img src="../assets/tiro_icon.svg" alt="" class="brand-logo" />
            <small>ceza avukatları için · dosyanız sizinle kalsın diye</small>
            <a class="footer-email" href="mailto:mustafa_arinmis@outlook.com">mustafa_arinmis@outlook.com</a>
          </div>
          <nav class="footer-nav" aria-label="Alt gezinme">
            <a href="../urun.html">Ürün</a>
            <a href="../hakkimizda.html">Hakkımızda</a>
            <a href="../blog/" aria-current="page">Blog</a>
            <a href="../sss.html">Sık sorulanlar</a>
            <a href="../iletisim.html">İletişim</a>
          </nav>
          <div class="footer-legal" aria-label="Yasal">
            <a href="../kvkk.html">KVKK</a>
            <a href="../kullanim-sartlari.html">Kullanım şartları</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">© 2026 tiro.legal</span>
          <span class="footer-badge">Yerel · Türkiye</span>
        </div>
      </div>
    </footer>
  </div>

  <div id="mobileNav" class="mobile-nav" hidden>
    <div class="mobile-nav-inner">
      <a href="../urun.html">Ürün</a>
      <a href="../hakkimizda.html">Hakkımızda</a>
      <a href="../blog/" aria-current="page">Blog</a>
      <a href="../iletisim.html">İletişim</a>
      <a href="https://calendly.com/lycianapp/30min" data-calendly target="_blank" rel="noopener" class="btn btn-primary btn-arrow">30 dk konuşalım</a>
    </div>
  </div>

  <script src="../js/main.js?v=20260509a"></script>
</body>

</html>
```

**2. Index card snippet** — `blog/index.html` içinde `<!-- BLOG_LIST_START -->`
yorumundan **hemen sonra** eklenecek (en yeni yazı en üstte). Bu kart formatına
uy:

```html
<article class="blog-card">
  <div class="blog-card-meta">
    <span class="blog-card-date">{DATE}</span>
    <span class="blog-card-read">{READ_TIME}</span>
  </div>
  <div class="blog-card-body">
    <div class="blog-card-tags">
      <span class="blog-tag">{TAG_1}</span>
      <span class="blog-tag">{TAG_2}</span>
    </div>
    <h2><a href="{SLUG}.html">{TITLE}</a></h2>
    <p>{EXCERPT}</p>
  </div>
  <span class="blog-card-cta">Devamını oku</span>
</article>
```

`{EXCERPT}` = 2-3 cümle, yazının ne sunduğunu söylesin. Kanca cümle değil
özet cümle.

### `{BODY}` içinde kullanılabilir HTML

```html
<p>Düz paragraf.</p>

<h2>Alt başlık</h2>

<h3>Daha küçük alt başlık (gerekirse)</h3>

<p>Vurgu için <strong>kalın</strong>, düşük ton için <em>italik</em>.</p>

<blockquote>
  Manifesto tonunda kısa öz cümle.
</blockquote>

<ul>
  <li>Madde işaretli liste</li>
  <li>İkinci madde</li>
</ul>

<ol>
  <li>Numaralı liste</li>
  <li>Sıralı durumlar için</li>
</ol>

<p>Kod parçası inline: <code>CMK m. 217/1</code>.</p>

<a href="../urun.html">Ürün sayfasına</a> ya da
<a href="../iletisim.html">iletişime</a> bağlantı. Diğer yazıya
<a href="diger-yazi.html">aynı klasörden</a> bağ ver.

<figure>
  <img src="../assets/blog/{IMAGE}.png" alt="" />
  <figcaption>Açıklama küçük caps olarak görünür.</figcaption>
</figure>

<hr />
```

### Şu an benim yazmamı istediğim yazı

**Konu:** [BURAYA YAZ — başlık veya tek cümlelik konu]

**Bilmemi istediklerin (opsiyonel):** [BURAYA YAZ — varsa kaynak, açı, sınırlar]

---

## Kullanım — adım adım

1. Yukarıdaki PROMPT bölümünü AI'a yapıştır, en altta konunu ekle
2. AI iki çıktı verir: `.html` dosyası içeriği + `index.html` kart snippet'i
3. `blog/<slug>.html` olarak kaydet
4. `blog/index.html` aç, `<!-- BLOG_LIST_START -->` yorumunun hemen altına
   yeni kart snippet'ini yapıştır (en yeni en üstte)
5. Tarayıcıda aç, kontrol et:
   - Tipografi, başlık hiyerarşisi
   - Linkler çalışıyor mu (`../urun.html`, `index.html`)
   - `og:url` ve `canonical` doğru slug'ta mı
   - Tarih ISO formatta mı (`YYYY-MM-DD`)
6. Görseller varsa `assets/blog/` altına koy, dosya adı slug + sıra
   (örn `udf-icin-yerel-arama-1.png`)

## Tag havuzu (yeni yazı kaynaklı genişletilebilir)

Mevcut: `Yapı` · `Tiro` · `Yerel AI` · `UDF` · `UYAP` · `Mevzuat` ·
`İfade` · `Savunma` · `KVKK` · `İş akışı`

Yeni tag eklenirken `index.html` kartlarındaki ile yazılış aynı olmalı
(ileride filtreleme yaparsak slug eşleşsin).
