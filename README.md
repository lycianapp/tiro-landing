# Tiro Landing Page

Statik landing page. Plain HTML/CSS/JS — yapı klasörlere bölünmüş, sayfa eklemek
basit. Blog ileride buraya `blog/` altında düşer.

## Klasör yapısı

```
landing-page/
├── index.html              # ana sayfa (hero + ürün önizleme)
├── urun.html               # 7 modül + gizlilik akışı + donanım
├── hakkimizda.html         # Tiro portresi + manifesto
├── iletisim.html           # erken erişim formu
├── sss.html                # sık sorulan sorular (FAQ)
├── kvkk.html               # KVKK aydınlatma metni
├── kullanim-sartlari.html  # kullanım şartları
├── 404.html                # bulunamadı sayfası
├── sitemap.xml             # SEO
├── robots.txt              # SEO
├── blog/
│   ├── index.html          # tüm yazıların listesi
│   ├── merhaba.html        # örnek yazı (template referansı)
│   └── BLOG_CREATOR_PROMPT.md  # AI ile yeni yazı üretim prompt'u
├── css/
│   ├── base.css            # tasarım token'ları, reset, tipografi
│   ├── components.css      # btn, card, skip-link, reveal, focus
│   ├── layout.css          # site, topbar, footer, section, mobile nav
│   ├── responsive.css      # tüm @media (en son yüklenir)
│   └── pages/
│       ├── home.css        # hero-cinema + app-frame mockup
│       ├── product.css     # exhibits, chain, hw
│       ├── about.css       # about-shell + principles
│       ├── contact.css     # access copy + form
│       ├── blog.css        # blog list + post prose
│       └── faq.css         # SSS / details-summary stili
├── js/
│   ├── main.js             # reveal + magnetic + mobile nav (her sayfa)
│   ├── compatibility.js    # donanım algılama (urun.html)
│   └── contact.js          # form gönderimi (iletisim.html)
├── assets/
│   ├── bg-texture.jpg      # body arkaplan dokusu
│   ├── hero.jpg            # hero section bg
│   ├── tiro.jpg            # Tiro portresi (hakkimizda)
│   ├── og-image.jpg        # sosyal paylaşım kart görseli
│   ├── tiro_icon.svg       # marka simgesi
│   ├── tironian_et.svg     # tironian "et" işareti
│   └── favicon/            # tüm favicon variantları
└── DESIGN_SYSTEM.md
```

## Yeni sayfa ekleme

1. Mevcut bir sayfayı (`hakkimizda.html` en sade) kopyala.
2. `<title>`, `<meta description>`, `og:url`, `canonical` güncelle.
3. CSS yükleme sırası: `base → components → layout → pages/<sayfa>.css → responsive`.
4. Sayfa-spesifik stiller için `css/pages/<sayfa>.css` aç.
5. Header/footer kopyala (paylaşılmış değil — kasıtlı; SEO temiz, JS bağımlılığı yok).
6. Aktif nav linkine `aria-current="page"` ekle.

## Yeni blog yazısı

`blog/BLOG_CREATOR_PROMPT.md` içindeki prompt'u AI'a (Claude / ChatGPT) yapıştır,
en altta konunu yaz. AI iki çıktı verir: post HTML + index card snippet.

1. Post: `blog/<slug>.html` olarak kaydet
2. Card: `blog/index.html` içinde `<!-- BLOG_LIST_START -->` yorumunun hemen
   altına yapıştır (en yeni en üstte)

## Çalıştırma

Statik olduğu için doğrudan açılabilir:

```bash
python3 -m http.server 3000
```

Sonra `http://localhost:3000`.
