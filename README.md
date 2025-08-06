# HTML CSS JS Projesi

Modern ve responsive bir web projesi. Bu proje HTML5, CSS3 ve JavaScript kullanılarak oluşturulmuştur.

## 🚀 Özellikler

- **Modern Tasarım**: Gradient arka planlar ve glassmorphism efektleri
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Smooth Scrolling**: Yumuşak sayfa geçişleri
- **Form Validasyonu**: Gelişmiş form kontrolü
- **Animasyonlar**: CSS ve JavaScript animasyonları
- **Bildirim Sistemi**: Kullanıcı dostu bildirimler
- **Intersection Observer**: Scroll tabanlı animasyonlar

## 📁 Dosya Yapısı

```
first-project/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript kodları
└── README.md           # Proje dokümantasyonu
```

## 🛠️ Kurulum

Bu proje **sadece frontend** teknolojileri kullanır ve herhangi bir backend gerektirmez:

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını web tarayıcınızda açın (en basit yöntem)
3. Veya bir local server kullanın (geliştirme için önerilen)

### Local Server ile Çalıştırma

#### Node.js ile:
```bash
# npx kullanarak
npx http-server

# veya global olarak
npm install -g http-server
http-server
```

#### Live Server (VS Code):
VS Code'da Live Server eklentisini kurun ve `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçeneğini seçin.

#### Python ile (Opsiyonel):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 🎨 Kullanılan Teknolojiler

Bu proje tamamen **frontend** teknolojileri kullanılarak geliştirilmiştir:

- **HTML5**: Semantik markup ve modern web standartları
- **CSS3**: 
  - Flexbox ve Grid layout sistemleri
  - CSS Variables (Custom Properties)
  - Animations ve Transitions
  - Media Queries (Responsive Design)
  - Backdrop Filter (Glassmorphism efektleri)
- **JavaScript (ES6+)**:
  - DOM Manipulation
  - Event Handling
  - Intersection Observer API
  - Form Validation
  - Modern ES6+ syntax

## 📱 Responsive Tasarım

Proje aşağıdaki breakpoint'leri destekler:
- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı

## 🎯 Özellikler Detayı

### Navigation
- Sticky header
- Smooth scrolling
- Responsive menü
- Scroll ile gizlenme/gösterilme

### Form İşlemleri
- Real-time validasyon
- Email format kontrolü
- Başarı/hata bildirimleri
- Form reset işlemi

### Animasyonlar
- Fade-in efektleri
- Hover animasyonları
- Button click efektleri
- Scroll tabanlı animasyonlar

### Bildirim Sistemi
- 4 farklı tip: success, error, info, warning
- Otomatik kapanma
- Klavye kısayolları (ESC)
- Responsive tasarım

## 🔧 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasında CSS variables kullanarak renkleri kolayca değiştirebilirsiniz:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f5f5f5;
}
```

### Yeni Bölüm Ekleme
1. `index.html` dosyasında yeni `<section>` ekleyin
2. `styles.css` dosyasında stil tanımlayın
3. `script.js` dosyasında gerekli JavaScript fonksiyonlarını ekleyin

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📞 İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen issue açın.

---

**Not**: Bu proje tamamen **frontend** odaklıdır ve modern web geliştirme tekniklerini göstermektedir. Backend veya veritabanı gerektirmez. 