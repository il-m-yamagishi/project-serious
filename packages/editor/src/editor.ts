/**
 * @license Apache-2.0
 */

import { createEngineAsync } from "@m-yamagishi/project-serious-core/src/createEngineAsync";
import { EditorScene } from "./editor-scene";
import { GizmoManager } from "@babylonjs/core/Gizmos/gizmoManager";

export class Editor {
  constructor(private readonly canvas: HTMLCanvasElement) {
  }

  async start() {
    const engine = await createEngineAsync(this.canvas);
    const scene = new EditorScene(engine);

    const gizmoManager = new GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    // gizmoManager.rotationGizmoEnabled = true;
    // gizmoManager.scaleGizmoEnabled = true;
    gizmoManager.attachableMeshes = scene.meshes;

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
