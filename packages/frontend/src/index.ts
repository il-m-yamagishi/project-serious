/**
 * @license Apache-2.0
 */

import { Engine } from "@babylonjs/core/Engines/engine";
import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine";
import { Scene } from "@babylonjs/core/scene";

window.addEventListener("load", async () => {
  async function createEngineAsync(canvas: HTMLCanvasElement) {
    if (await WebGPUEngine.IsSupportedAsync) {
      return new WebGPUEngine(canvas);
    }
    return new Engine(canvas, true, {}, true);
  }

  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const engine = await createEngineAsync(canvas);
  const scene = new Scene(engine);

  const socket = new WebSocket("http://localhost:3000");

  socket.onopen = () => {
    console.log("Connected to server", socket);
  };

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
});
