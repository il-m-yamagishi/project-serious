/**
 * @license Apache-2.0
 */

import { Engine } from "@babylonjs/core/Engines/engine";
import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine";
import { Scene } from "@babylonjs/core/scene";
import { WebSocket } from "ws";

window.addEventListener("load", async () => {
  async function createEngineAsync(canvas: HTMLCanvasElement) {
    if (await WebGPUEngine.IsSupportedAsync) {
      return new WebGPUEngine(canvas);
    }
    return new Engine(canvas, true, {}, true);
  }

  class UserWebSocket extends WebSocket {
    public pingTimeout?: number;

    public heartbeat() {
      window.clearTimeout(this.pingTimeout);

      this.pingTimeout = window.setTimeout(() => {
        this.terminate();
      }, 30_000 + 1_000);
    }
  }

  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const engine = await createEngineAsync(canvas);
  const scene = new Scene(engine);

  const socket = new UserWebSocket("http://localhost:3000");

  socket.on("open", socket.heartbeat);
  socket.on("ping", socket.heartbeat);
  socket.on("error", (error) => {
    console.error(error);
  });
  socket.on("close", () => {
    window.clearTimeout(socket.pingTimeout);
  });

  const render = () => {
    scene.render();
  };
  const resize = () => {
    engine.resize();
  };

  engine.runRenderLoop(render);
  window.addEventListener("resize", resize);

  window.addEventListener("beforeunload", () => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.close(1, "beforeunload");
    }
    window.removeEventListener("resize", resize);
    engine.stopRenderLoop(render);
    engine.dispose();
  }, { once: true });
}, { once: true });
