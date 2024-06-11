/**
 * @license Apache-2.0
 */

import { createEngineAsync } from "@m-yamagishi/project-serious-core/src/createEngineAsync";
import { EditorScene } from "./editor-scene";
import { GizmoManager } from "@babylonjs/core/Gizmos/gizmoManager";
import { KeyboardEventTypes } from "@babylonjs/core/Events/keyboardEvents";

export class Editor {
  constructor(private readonly canvas: HTMLCanvasElement) {
  }

  async start() {
    const engine = await createEngineAsync(this.canvas);
    const scene = new EditorScene(engine);

    const gizmoManager = new GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.attachableMeshes = scene.meshes;

    scene.onKeyboardObservable.add((kbInfo) => {
      if (kbInfo.type === KeyboardEventTypes.KEYDOWN) {
        if (kbInfo.event.key === "z") {
          gizmoManager.positionGizmoEnabled = true;
          gizmoManager.rotationGizmoEnabled = false;
          gizmoManager.scaleGizmoEnabled = false;
        }
        if (kbInfo.event.key === "x") {
          gizmoManager.positionGizmoEnabled = false;
          gizmoManager.rotationGizmoEnabled = true;
          gizmoManager.scaleGizmoEnabled = false;
        }
        if (kbInfo.event.key === "c") {
          gizmoManager.positionGizmoEnabled = false;
          gizmoManager.rotationGizmoEnabled = false;
          gizmoManager.scaleGizmoEnabled = true;
        }
      }
    });

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
