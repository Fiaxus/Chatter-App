# Chatter App 💬

Bu proje, WebSocket teknolojisi kullanılarak geliştirilmiş basit ve gerçek zamanlı bir web tabanlı sohbet uygulamasıdır. Kullanıcılar anonim olarak sohbet edebilir, anlık olarak mesajlaşabilir ve odadaki aktif kullanıcı sayısını görebilirler.

## ✨ Özellikler

- **Gerçek Zamanlı Mesajlaşma:** WebSocket sayesinde mesajlar anında tüm istemcilere iletilir.
- **Aktif Kullanıcı Sayısı:** Odaya birisi girdiğinde veya çıktığında, sağ üstteki sayaç anlık olarak güncellenir.
- **Sesli Bildirimler:** Yeni bir mesaj geldiğinde veya gönderildiğinde, kullanıcıyı uyaran bir ses efekti çalar.
- **Modern Arayüz:** Temiz, modern ve animasyonlu bir arayüz.

## 🛠️ Kullanılan Teknolojiler

- **Frontend (İstemci):**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend (Sunucu):**
  - Node.js
  - `ws` (WebSocket Kütüphanesi)

## 🚀 Kurulum ve Çalıştırma

Bu projenin çalışması için Node.js ve npm'in bilgisayarınızda kurulu olması gerekmektedir.

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/SENIN-KULLANICI-ADIN/SENIN-REPO-ADIN.git](https://github.com/SENIN-KULLANICI-ADIN/SENIN-REPO-ADIN.git)
    cd Chatter-App
    ```

2.  **Sunucu Bağımlılıklarını Yükleyin:**
    `chatter-socket` klasörüne girip `ws` bağımlılığını yüklemeniz gerekir.
    ```bash
    cd chatter-socket
    npm install
    ```

3.  **Sunucuyu Başlatın:**
    `chatter-socket` klasörünün içindeyken aşağıdaki komutla sunucuyu başlatın.
    ```bash
    npm run start
    ```
    Sunucu varsayılan olarak `localhost:8080` üzerinde çalışmaya başlayacaktır.

4.  **Uygulamayı Açın:**
    `chatter` klasörünün içindeki `index.html` dosyasını tarayıcınızda açın. Artık sohbet etmeye başlayabilirsiniz!