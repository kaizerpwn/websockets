const dotenv = require("dotenv");
const { Server: WebSocketServer } = require("ws");

dotenv.config();
const webSocketServer = new WebSocketServer({
  port: Number(process.env.SERVER_PORT),
});

function extractIPv4(address) {
  if (address.includes("::ffff:")) {
    return address.split("::ffff:")[1];
  }
  return address;
}

webSocketServer.on("listening", () => {
  console.log(`>> Websocket server running on port ${process.env.SERVER_PORT}`);
});

webSocketServer.on("connection", (ws) => {
  console.log(
    `New client (${extractIPv4(ws._socket.remoteAddress)}) connected!`
  );
  ws.on("close", () => console.log("Client has disconnected!"));
  ws.on("open", () =>
    console.log(
      `>> Websocket server running on port ${process.env.SERVER_PORT}`
    )
  );
});
