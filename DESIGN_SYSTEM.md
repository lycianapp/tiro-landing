# Tiro Design System

## Marka yönü
- Ton: ağırbaşlı, net, güven veren
- Hedef his: editoryal minimalizm, premium hukuk bürosu sükuneti
- Kullanım bağlamı: Türk ceza avukatları için yerel çalışan ürün vitrini

## Temel token'lar

### Renkler
- Arka plan: `#f8f6f2` (sıcak kağıt)
- Yüzey: `#fdfcfa`, koyu şerit: `#f1ede6`
- Metin: `#26221e` (kömür)
- İkincil metin: `#565048`
- Vurgu: `#a96a5b` (kiremit/terracotta)
- Vurgu hover tonu: `#8c5142`
- Çizgi: `#e7e2d8` — 1px ince ayraçlar her yerde

### Tipografi
- Başlık serif: `Cardo` 400 — büyük, zarif, editoryal
- Gövde: `Inter`
- Monospace (eyebrow, etiket, teknik alan): `JetBrains Mono`
- Eyebrow deseni: mono, uppercase, geniş tracking, terracotta

### Radius
- Küçük: `4px`
- Orta: `6px`
- Büyük: `8px`
- Dev pill/radius yok; yüzeyler düz ve keskin

### Motion
- Geçiş eğrisi: `cubic-bezier(0.2, 0.65, 0.2, 1)`
- Varsayılan süre: `260ms`
- Giriş animasyonları: tek seferlik, hafif, translate + opacity
- Reduced motion desteği: aktif

## Bileşen kuralları

### Button
- Birincil CTA: düz terracotta dolgu, küçük radius, cümle düzeni yazı (uppercase yok)
- İkincil CTA: saydam yüzey, ince kenar çizgisi
- Aktif durumda hafif fiziksel basış hissi var

### Panel / Card
- Düz açık yüzey + 1px kenar + çok hafif dışa gölge
- Glassmorphism, iç parlama, degrade yok

### Form
- Etiket üstte
- Yardımcı metin alan altında
- Hata metni en altta
- Alanlar açık yüzey üzerinde ince kenarlı

### Tablo
- Teknik alanlar `JetBrains Mono`
- Aktif satır soft terracotta arka plan ile vurgulanıyor

## Sayfa mimarisi
1. Hero — asimetrik bölünmüş: solda editoryal kopya, sağda browser çerçeveli uygulama mockup'ı
2. Güven şeridi — 4 ilke, ince ayraçlı yatay bant, çizgi ikonlar
3. Hakkımızda (Tiro/Cicero)
4. Modül vitrini
5. Gizlilik ve veri akışı
6. Donanım uyumluluğu
7. Yaklaşım / ilkeler
8. İletişim / CTA

## Bilinçli kaçınılanlar
- Koyu tema, neon parlamalar, glassmorphism
- Mor/mavi AI paleti ve degradeler
- Merkezlenmiş generic hero
- 3 eşit kartlı features düzeni
- Büyük fotoğraf blokları; mockup ve tipografi taşır
- Fiyat, teknik stack veya şişirilmiş vaat dili
