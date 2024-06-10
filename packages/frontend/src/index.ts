/**
 * @license Apache-2.0
 */

import { Scene } from "@babylonjs/core/scene";
import { createEngineAsync } from "./createEngineAsync";

window.addEventListener("load", async () => {
  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const engine = await createEngineAsync(canvas);
  const scene = new Scene(engine);

  // const listener = await connect(import.meta.env.VITE_WEBSOCKET_URL);

  const render = () => {
    scene.render();
  };

  engine.runRenderLoop(render);
  window.addEventListener("beforeunload", () => {
    engine.stopRenderLoop(render);
    engine.dispose();
  }, { once: true });
}, { once: true });
