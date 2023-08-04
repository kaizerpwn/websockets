import * as dotenv from "dotenv";
import { Server as WebSocketServer } from "ws";

dotenv.config();
const webSocketServer = new WebSocketServer({
  port: Number(process.env.SERVER_PORT),
});

webSocketServer.on("listening", () => {
  console.log(`>> Websocket server running on port ${process.env.SERVER_PORT}`);
});

webSocketServer.on("connection", (ws) => {
  console.log("New client connected!");
  ws.on("close", () => console.log("Client has disconnected!"));
  ws.on("open", () =>
    console.log(
      `>> Websocket server running on port ${process.env.SERVER_PORT}`
    )
  );
});
