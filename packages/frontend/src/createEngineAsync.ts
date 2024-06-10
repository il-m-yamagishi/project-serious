/**
 * @license Apache-2.0
 */

import { Engine } from "@babylonjs/core/Engines/engine";
import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine";

export async function createEngineAsync(canvas: HTMLCanvasElement) {
  let engine: Engine | WebGPUEngine;
  if (await WebGPUEngine.IsSupportedAsync) {
    engine = new WebGPUEngine(canvas);
    await engine.initAsync();
  } else {
    engine = new Engine(canvas, true, {}, true);
  }

  const resize = () => {
    engine.resize();
  };

  window.addEventListener("resize", resize);
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("resize", resize);
  }, { once: true });

  return engine;
}
