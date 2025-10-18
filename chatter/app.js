const socket = new WebSocket("ws://localhost:8080");

const chatAppMain = document.getElementById("chat_container");
const activeUsersElement = document.getElementById("activeUsers");
const messageInput = document.getElementById("message_input");

const notificationSound = new Audio('pop.mp3');

const createReceivedMessageTemplate = (message) => {
  return `<div class="message-received">
          <p>${message}</p>
        </div>`;
};

const createSentMessageTemplate = (message) => {
  return `<div class="message-sent">
          <p>${message}</p>
        </div>`;
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === "user_count") {
    activeUsersElement.textContent = data.count + " Kişi Aktif";
  } else if (data.type === "chat") {
    chatAppMain.innerHTML += createReceivedMessageTemplate(data.message);
    notificationSound.play();
  }
};

const sendMessage = () => {
  const message = messageInput.value;
  if (message.trim() === "") return;

  socket.send(JSON.stringify({
    type: "chat",
    message: message
  }));

  chatAppMain.innerHTML += createSentMessageTemplate(message);
  messageInput.value = "";
  notificationSound.play();
};

document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    sendMessage();
  }
});