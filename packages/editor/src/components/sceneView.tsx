import { useEffect, useRef } from "react";
import { useEngineStore } from "../stores/engine";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import "@babylonjs/core/Materials/standardMaterial";

export function SceneView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setEngine = useEngineStore((state) => state.setEngine);
  const setCurrentScene = useEngineStore((state) => state.setCurrentScene);

  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      return () => {};
    }

    const engine = new Engine(canvasRef.current, true, {}, true);
    const scene = new Scene(engine);

    setEngine(engine);
    setCurrentScene(scene);

    const resize = () => {
      engine.resize();
    };
    const render = () => {
      if (scene.activeCamera) {
        scene.render();
      }
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
  }, [setEngine, setCurrentScene]);

  return <canvas ref={canvasRef} />;
}
