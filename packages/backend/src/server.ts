/**
 * @license Apache-2.0
 */

import { createServer } from "node:http";
import { WebSocketServer, WebSocket } from "ws";
import winston from "winston";

class UserWebSocket extends WebSocket {
  public isAlive = true;
}

const server = createServer();
const wss = new WebSocketServer<typeof UserWebSocket>({ server });
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
});

wss.on("connection", (socket) => {
  logger.info("A user connected");

  socket.on("error", (error) => {
    logger.error("An error occurred", error);
  });
  socket.on("close", () => {
    logger.info("A user disconnected");
  });
  socket.on("pong", () => {
    socket.isAlive = true;
  });
  socket.on("message", (data, isBinary) => {
    if (isBinary) {
      logger.info("Received binary data");
    } else {
      logger.info("Received text data", data);
    }
  });
});

const interval = setInterval(() => {
  for (const socket of wss.clients) {
    if (socket.isAlive === false) {
      socket.terminate();
      return;
    }

    socket.isAlive = false;
    socket.ping();
  }
}, 30_000);

wss.once("close", () => {
  clearInterval(interval);
});

server.listen(3000, () => {
  logger.info("Server is running on port 3000");
});
