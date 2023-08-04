const { client: WebSocketClient } = require("websocket");

const client = new WebSocketClient();

client.on("connect", function (connection) {
  console.log(connection);
  console.log(
    `>> Connection established to server (${connection.remoteAddress}).`
  );

  connection.on("error", function (error) {
    console.log(">> Connection error: " + error.toString());
  });
});

client.connect("ws://localhost:8080/");
