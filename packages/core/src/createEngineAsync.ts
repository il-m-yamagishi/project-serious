/**
 * @license Apache-2.0
 */

import { NullEngine } from "@babylonjs/core/Engines/nullEngine";
import { Engine } from "@babylonjs/core/Engines/engine";
// import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine";

/**
 * Create a Babylon.js engine asynchronously
 * @param canvas Target canvas
 * @returns engine
 */
export async function createEngineAsync(canvas?: HTMLCanvasElement) {
  if (!canvas) {
    // NullEngine for server or local headless server
    return new NullEngine({
      deterministicLockstep: true,
      lockstepMaxSteps: 4,
      renderHeight: 256,
      renderWidth: 256,
      textureSize: 512,
      timeStep: 1 / 30,
      useHighPrecisionMatrix: false,
    });
  }

  // WebGPUEngine is currently not support CascadedShadowMap
  // let engine: Engine | WebGPUEngine;
  // if (await WebGPUEngine.IsSupportedAsync) {
  //   engine = new WebGPUEngine(canvas);
  //   await engine.initAsync();
  // } else {
  //   engine = new Engine(canvas, true, {}, true);
  // }
  const engine = new Engine(canvas, true, {}, true);

  const resize = () => {
    engine.resize();
  };

  window.addEventListener("resize", resize);
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("resize", resize);
  }, { once: true });

  return engine;
}
