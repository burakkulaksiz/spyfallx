// types
export interface GameLocation {
    name: string;
    category: string;
  }
  
  // tamamen Türkçe 48 lokasyon + kategori
  export const LOCATIONS: GameLocation[] = [
    /* ——— Günlük Hayatın Ötesi ——— */
    { name: "İstanbul Metrosu Gece Bakım Tüneli", category: "Günlük Hayatın Ötesi" },
    { name: "Kapalıçarşı Altın Saflaştırma Atölyesi", category: "Günlük Hayatın Ötesi" },
    { name: "Ankara YHT Kontrol Merkezi", category: "Günlük Hayatın Ötesi" },
    { name: "Konya Akıllı Tarla Drone Pisti", category: "Günlük Hayatın Ötesi" },
    { name: "Antalya Güneş Enerji Çiftliği", category: "Günlük Hayatın Ötesi" },
    { name: "2035 İstanbul Hava Taksi Apronu", category: "Günlük Hayatın Ötesi" },
  
    /* ——— Tarih & Mitoloji ——— */
    { name: "Göbeklitepe Kazı Alanı", category: "Tarih & Mitoloji" },
    { name: "Troya Odeon Sahnesi", category: "Tarih & Mitoloji" },
    { name: "Hattuşaş Kral Kapısı", category: "Tarih & Mitoloji" },
    { name: "Nemrut Dağı Heykel Terası", category: "Tarih & Mitoloji" },
    { name: "Ani Harabeleri Kuzey Surları", category: "Tarih & Mitoloji" },
    { name: "Çatalhöyük Çamur Evleri", category: "Tarih & Mitoloji" },
  
    /* ——— Bilim-Kurgu / Gelecek ——— */
    { name: "Gebze Bilim Vadisi Kuantum Merkezi", category: "Bilim-Kurgu / Gelecek" },
    { name: "Erzurum Doğu Anadolu Uzay Gözlemevi", category: "Bilim-Kurgu / Gelecek" },
    { name: "İzmir Yüzen Rüzgâr Türbini Platformu", category: "Bilim-Kurgu / Gelecek" },
    { name: "Ankara Yapay Zekâ Senato Salonu", category: "Bilim-Kurgu / Gelecek" },
    { name: "İstanbul Biyohibrit Metro İstasyonu", category: "Bilim-Kurgu / Gelecek" },
    { name: "Bursa Otonom Tramvay Deposu", category: "Bilim-Kurgu / Gelecek" },
  
    /* ——— Pop Kültür & Eğlence ——— */
    { name: "İstanbul Espor Şampiyona Arenası", category: "Pop Kültür & Eğlence" },
    { name: "Eskişehir AnimeFest Sahnesi", category: "Pop Kültür & Eğlence" },
    { name: "Bursa Retro Oyun Müzesi", category: "Pop Kültür & Eğlence" },
    { name: "Antalya Film Stüdyosu Backlot’u", category: "Pop Kültür & Eğlence" },
    { name: "Kocaeli Steampunk Fuarı Pavyonu", category: "Pop Kültür & Eğlence" },
    { name: "İzmir Rock Konser Backstage", category: "Pop Kültür & Eğlence" },
  
    /* ——— Doğa & Macera ——— */
    { name: "Kapadokya Balon Kalkış Alanı", category: "Doğa & Macera" },
    { name: "Kaçkar Zirve Kampı", category: "Doğa & Macera" },
    { name: "Mersin Cennet-Cehennem Obruğu", category: "Doğa & Macera" },
    { name: "Antalya Suluin Mağarası Dalış İskelesi", category: "Doğa & Macera" },
    { name: "Van Akdamar Adası İskelesi", category: "Doğa & Macera" },
    { name: "Sultaniye Kaplıca Çamur Havuzu", category: "Doğa & Macera" },
  
    /* ——— Yüksek Risk / Yasak ——— */
    { name: "Tuz Gölü Askerî Test Sahası", category: "Yüksek Risk / Yasak" },
    { name: "Zonguldak Terk Edilmiş Maden Ocağı", category: "Yüksek Risk / Yasak" },
    { name: "İstanbul Sazlıdere Karantina Merkezi", category: "Yüksek Risk / Yasak" },
    { name: "Edirne Sınır Kaçakçı Tüneli", category: "Yüksek Risk / Yasak" },
    { name: "Balıkesir Cephanelik Deposu", category: "Yüksek Risk / Yasak" },
    { name: "Giresun Fırtına Radar Üssü", category: "Yüksek Risk / Yasak" },
  
    /* ——— Fantastik / Absürt ——— */
    { name: "Rize Çaycılar Birliği Genel Merkezi", category: "Fantastik / Absürt" },
    { name: "Konya Uçan Halı Test Pistleri", category: "Fantastik / Absürt" },
    { name: "Ankara Devasa Döner Laboratuvarı", category: "Fantastik / Absürt" },
    { name: "İstanbul Uçan Martı Limanı", category: "Fantastik / Absürt" },
    { name: "Kaplumbağa Terzihanesi (Dalyan)", category: "Fantastik / Absürt" },
    { name: "Pamukkale Pamuk Şelalesi Bulut Salonu", category: "Fantastik / Absürt" },
  
    /* ——— Spor & Rekabet ——— */
    { name: "İstanbul Boğazı Yüzme Yarışı Startı", category: "Spor & Rekabet" },
    { name: "Erciyes Kar Voleybol Kortu", category: "Spor & Rekabet" },
    { name: "Antalya Wingsuit Falez Atlayışı", category: "Spor & Rekabet" },
    { name: "İznik Ultra Maraton Kontrol Noktası", category: "Spor & Rekabet" },
    { name: "Sakarya Drone Yarış Parkuru", category: "Spor & Rekabet" },
    { name: "Çorum Yağlı Güreş Arenası", category: "Spor & Rekabet" },
  ];
  