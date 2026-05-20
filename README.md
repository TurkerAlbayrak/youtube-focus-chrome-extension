# YouTube Focus - Chrome Extension

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Chrome Web Store](https://img.shields.io/badge/Chrome%20Extension-v3-blue.svg?style=for-the-badge&logo=google-chrome&logoColor=white)

<img width="1902" height="998" alt="image" src="https://github.com/user-attachments/assets/ecbf88e0-670f-4cab-9813-a6c2daad2e2d" />
<img width="1907" height="1022" alt="image" src="https://github.com/user-attachments/assets/b7dc078c-8329-464e-af9e-7797d9818144" />
<img width="1571" height="58" alt="image" src="https://github.com/user-attachments/assets/81743a73-615c-472b-865d-536a9081ca81" />


**YouTube Focus**, YouTube izleme deneyiminizi tamamen optimize etmek, dikkatinizi dağıtan unsurları ortadan kaldırmak ve platformu verimli bir öğrenme alanına dönüştürmek için tasarlanmış modern bir Google Chrome uzantısıdır. 

Shorts videoları, sonsuz yorum satırları ve algoritma tabanlı video önerileri arasında kaybolmadan, yalnızca izlemek istediğiniz içeriğe odaklanmanızı sağlar. Ayrıca dahili gelişmiş not defteri sayesinde videoları saniyelik zaman damgaları (timestamp) ile analiz edip notlar alabilir ve bu notları tek tıkla cihazınıza indirebilirsiniz.

---

## 🚀 Öne Çıkan Özellikler

- **🚫 Dikkat Dağıtıcı Unsurları Engelleme:**
  - YouTube Shorts videolarını tamamen gizler.
  - Video altındaki yorum alanlarını kaldırarak odaklanmanızı kolaylaştırır.
  - Yan paneldeki veya video sonundaki önerilen videolar algoritmasını deaktif eder.

- **📝 Entegre Zaman Damgalı Not Defteri:**
  - Videoyu izlerken popup arayüzündeki dahili not defterini kullanabilirsiniz.
  - **Zaman Damgası Desteği:** Alınan notun yanına videonun o anki oynatma süresini (`02:45` gibi) otomatik veya manuel ekleyerek nokta atışı referanslar oluşturur.
  - **Notları Dışa Aktarma:** Aldığınız tüm notları tek bir tıklama ile yapılandırılmış bir `.txt` dosyası olarak bilgisayarınıza indirebilirsiniz.

---

## 📂 Proje Yapısı

Proje, gereksiz karmaşıklıktan uzak, performans odaklı ve Chrome Extension Manifest V3 standartlarına tam uyumlu bir mimariye sahiptir:

```text
youtube-focus-chrome-extension/
├── manifest.json     # Uzantı ayarları, izinleri ve meta verileri
├── background.js     # Arka plan görevleri ve servis işçisi (Service Worker)
├── content.js        # YouTube DOM elementlerini manipüle eden ve gizleyen script
├── popup.html        # Uzantı simgesine tıklandığında açılan arayüz penceresi
├── popup.js          # Not defteri, zaman damgası ve dışa aktarma mantığını yöneten script
└── style.css         # Popup arayüzünün modern ve temiz tasarım stilleri
```
🛠️ Kurulum Talimatları (Yerel Geliştirme)
Uzantıyı bilgisayarınızda yerel olarak çalıştırıp test etmek için aşağıdaki adımları sırasıyla takip edin:

Projeyi Bilgisayarınıza İndirin:
Öncelikle depoyu bilgisayarınıza klonlayın veya ZIP olarak indirip bir klasöre çıkartın:

Bash
```
git clone https://github.com/TurkerAlbayrak/youtube-focus-chrome-extension.git
```
Chrome Uzantılar Sayfasını Açın:
Google Chrome tarayıcınızı açın ve adres çubuğuna şu adresi yazıp Enter tuşuna basın:

Plaintext
```
chrome://extensions/
```
Geliştirici Modunu Aktif Edin:
Açılan sayfanın sağ üst köşesinde bulunan "Geliştirici modu" (Developer mode) anahtarını açık konuma getirin.

Projeyi Yükleyin:
Sol üst köşede beliren "Paketlenmemiş uzantı yükle" (Load unpacked) butonuna tıklayın ve projenin (içinde manifest.json dosyasının bulunduğu) klasörünü seçerek yükleme işlemini tamamlayın.

Uzantıyı Sabitleyin:
Chrome sağ üst menüsündeki yapboz (Uzantılar) simgesine tıklayarak YouTube Focus uzantısını hızlı erişim için tarayıcı barınıza sabitleyebilirsiniz.

💡 Nasıl Kullanılır?
Odaklanmış Mod: Uzantı yüklendikten sonra herhangi bir YouTube videosunu açtığınızda Shorts, yorumlar ve önerilen videolar otomatik olarak filtrelenecek ve gizlenecektir.

Not Alma: 
Video oynatılırken tarayıcı barındaki uzantı ikonuna tıklayın. Açılan mini penceredeki metin alanını kullanarak notlarınızı yazın.

Zaman Damgası: 
O anki video süresini kaydetmek için ilgili butonu kullanın; böylece daha sonra notlarınızı incelerken videonun tam olarak neresinden bahsettiğinizi kolayca bulabilirsiniz.

Kaydetme/Dışa Aktarma: 
Çalışmanız bittiğinde "Notları İndir" butonuna basarak aldığınız tüm notları temiz bir metin belgesi (.txt) olarak indirebilirsiniz.

🤝 Katkıda Bulunma
Projeyi daha iyi hale getirmek için her türlü katkıya açığım! Geliştirme önerileri, hata bildirimleri veya yeni özellik fikirleri için:

Bu depoyu çatallayın (Fork).

Yeni bir özellik dalı (Feature Branch) oluşturun: git checkout -b feature/yeniOzellik

Değişikliklerinizi kaydedin: git commit -m 'Yeni bir özellik eklendi'

Dalınızı gönderin: git push origin feature/yeniOzellik

Bir Pull Request (Çekme İsteği) açın.
