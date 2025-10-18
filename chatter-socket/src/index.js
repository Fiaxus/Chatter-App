import { WebSocketServer } from "ws";

const socket = new WebSocketServer({
  port: 8080,
});

const clients = [];

// Herkese güncel kullanıcı sayısını gönderir
const broadcastUserCount = () => {
  const count = clients.length;
  const message = JSON.stringify({
    type: "user_count",
    count: count,
  });

  clients.forEach((client) => {
    client.send(message);
  });
};

socket.on("connection", (ws) => {
  clients.push(ws);
  console.log("New connection. Total clients:", clients.length);

  broadcastUserCount();

  ws.on("message", (message) => {
    // Client'tan gelen mesajı JSON olarak kabul ediyoruz
    const data = JSON.parse(message.toString());

    if (data.type === "chat") {
      publisMessage(data.message, ws);
    }
  });

  ws.on("close", () => {
    console.log("Connection was closed");
    
    const index = clients.indexOf(ws);
    if (index > -1) {
      clients.splice(index, 1);
    }

    broadcastUserCount();
  });
});

// Chat mesajlarını JSON formatında gönderiyor
const publisMessage = (chatMessage, ignoredClient) => {
  const message = JSON.stringify({
    type: "chat",
    message: chatMessage,
  });

  clients
    .filter((client) => client !== ignoredClient)
    .forEach((client) => {
      client.send(message);
    });
};