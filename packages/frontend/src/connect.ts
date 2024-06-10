/**
 * @license Apache-2.0
 */

import { WebSocket } from "ws";
import { Observable } from "@babylonjs/core/Misc/observable";

export class WebSocketListener {
  public readonly onConnectObservable = new Observable<null>();
  public readonly onErrorObservable = new Observable<Error>();
  public readonly onMessageObservable = new Observable<string>();
  public readonly onCloseObservable = new Observable<null>();

  public constructor(ws: UserWebSocket) {
    ws.on("open", () => {
      this.onConnectObservable.notifyObservers(null);
    });
    ws.on("error", (error) => {
      this.onErrorObservable.notifyObservers(error);
    });
    ws.on("message", (data) => {
      this.onMessageObservable.notifyObservers(data.toString());
    });
    ws.on("close", () => {
      this.onCloseObservable.notifyObservers(null);
    });
  }
}

class UserWebSocket extends WebSocket {
  protected pingTimeout?: number;

  public heartbeat() {
    window.clearTimeout(this.pingTimeout);

    this.pingTimeout = window.setTimeout(() => {
      this.terminate();
    }, 30_000 + 1_000);
  }

  public clearHeartbeat() {
    window.clearTimeout(this.pingTimeout);
    this.pingTimeout = undefined;
  }
}

export async function connect(url: string) {
  const socket = new UserWebSocket(url);

  return new Promise((resolve, reject) => {
    socket.on("open", () => {
      // heartbeat
      socket.on("open", socket.heartbeat);
      socket.on("close", socket.clearHeartbeat);
      socket.on("ping", socket.heartbeat);
      window.addEventListener("beforeunload", () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(1, "beforeunload");
        }
      }, { once: true });

      resolve(new WebSocketListener(socket));
    });
    socket.on("error", (error) => {
      reject(error);
    });
  });
}
