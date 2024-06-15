/**
 * @license Apache-2.0
 */

import { Vector3 } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines/engine";
import "@babylonjs/core/Materials/standardMaterial";
import { Scene } from "@babylonjs/core/scene";
import { GodCamera } from "@m-yamagishi/project-serious-core/src/inputs/godCamera";
import { useEffect, useRef } from "react";
import { useEngineStore } from "../stores/engine";

export function SceneView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setEngine = useEngineStore((state) => state.setEngine);
  const setCurrentScene = useEngineStore((state) => state.setCurrentScene);
  const setCamera = useEngineStore((state) => state.setCamera);

  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      return () => {};
    }

    const engine = new Engine(canvasRef.current, true, {}, true);
    const scene = new Scene(engine);
    const camera = new GodCamera("EditorCamera", new Vector3(0, 3, -10), scene, true);
    camera.attachControl(true);

    setEngine(engine);
    setCurrentScene(scene);
    setCamera(camera);

    const resize = () => {
      engine.resize();
    };
    const render = () => {
      scene.render();
    };

    // biome-ignore lint/suspicious/noExplicitAny: for Debug
    (window as any).currentScene = scene;

    window.addEventListener("resize", resize);
    engine.runRenderLoop(render);

    return () => {
      engine.stopRenderLoop(render);
      window.removeEventListener("resize", resize);
      scene.dispose();
      engine.dispose();
    };
  }, [setEngine, setCurrentScene, setCamera]);

  return <canvas ref={canvasRef} width={640} height={360} />;
}
