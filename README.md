<!-- Dil Seçimi Linkleri -->
[Türkçe](#türkçe) | [English](#english)

---

## Türkçe

# Chatter App 💬

Bu proje, WebSocket teknolojisi kullanılarak geliştirilmiş basit ve gerçek zamanlı bir web tabanlı sohbet uygulamasıdır. Kullanıcılar anonim olarak sohbet edebilir, anlık olarak mesajlaşabilir ve odadaki aktif kullanıcı sayısını görebilirler.

### ✨ Özellikler

- **Gerçek Zamanlı Mesajlaşma:** WebSocket sayesinde mesajlar anında tüm istemcilere iletilir.
- **Aktif Kullanıcı Sayısı:** Odaya birisi girdiğinde veya çıktığında, sağ üstteki sayaç anlık olarak güncellenir.
- **Sesli Bildirimler:** Yeni bir mesaj geldiğinde veya gönderildiğinde, kullanıcıyı uyaran bir ses efekti çalar.
- **Modern Arayüz:** Temiz, modern ve animasyonlu bir arayüz.

### 🛠️ Kullanılan Teknolojiler

- **Frontend (İstemci):**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend (Sunucu):**
  - Node.js
  - `ws` (WebSocket Kütüphanesi)

### 🚀 Kurulum ve Çalıştırma

Bu projenin çalışması için Node.js ve npm'in bilgisayarınızda kurulu olması gerekmektedir.

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/SENIN-KULLANICI-ADIN/Chatter-App.git](https://github.com/SENIN-KULLANICI-ADIN/Chatter-App.git)
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

---

## English

# Chatter App 💬

This project is a simple, real-time web-based chat application developed using WebSocket technology. Users can chat anonymously, send instant messages, and see the number of active users in the room.

### ✨ Features

- **Real-Time Messaging:** Messages are instantly delivered to all clients thanks to WebSockets.
- **Active User Count:** When a user enters or leaves the room, the counter in the top-right corner is updated in real-time.
- **Sound Notifications:** A sound effect plays to notify the user when a new message is received or sent.
- **Modern UI:** A clean, modern, and animated user interface.

### 🛠️ Technologies Used

- **Frontend (Client):**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend (Server):**
  - Node.js
  - `ws` (WebSocket Library)

### 🚀 Setup and Run

You need to have Node.js and npm installed on your computer to run this project.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YOUR-USERNAME/Chatter-App.git](https://github.com/YOUR-USERNAME/Chatter-App.git)
    cd Chatter-App
    ```

2.  **Install Server Dependencies:**
    You need to navigate into the `chatter-socket` folder and install its dependencies.
    ```bash
    cd chatter-socket
    npm install
    ```

3.  **Start the Server:**
    While inside the `chatter-socket` folder, start the server with the following command.
    ```bash
    npm run start
    ```
    The server will start running on `localhost:8080` by default.

4.  **Open the Application:**
    Open the `index.html` file located in the `chatter` folder in your web browser. You can now start chatting!
