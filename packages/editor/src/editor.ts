/**
 * @license Apache-2.0
 */

import { createEngineAsync } from "@m-yamagishi/project-serious-core/src/createEngineAsync";
import { EditorScene } from "./editor-scene";

export class Editor {
  constructor(private readonly canvas: HTMLCanvasElement) {
  }

  async start() {
    const engine = await createEngineAsync(this.canvas);
    const scene = new EditorScene(engine);

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
