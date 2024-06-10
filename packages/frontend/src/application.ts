/**
 * @license Apache-2.0
 */

import { Scene } from "@babylonjs/core/scene";
import { createEngineAsync } from "./createEngineAsync";

export class Application {
  public constructor(private readonly canvas: HTMLCanvasElement) {
  }

  public async start() {
    const engine = await createEngineAsync(this.canvas);
    const scene = new Scene(engine);

    const render = () => {
      scene.render();
    };

    engine.runRenderLoop(render);
    window.addEventListener("beforeunload", () => {
      engine.stopRenderLoop(render);
      engine.dispose();
    }, { once: true });
  }
}
