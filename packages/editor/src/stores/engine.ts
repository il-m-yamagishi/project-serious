/**
 * @license Apache-2.0
 */

import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import type { Scene } from "@babylonjs/core/scene";
import type { GodCamera } from "@m-yamagishi/project-serious-core/src/inputs/godCamera";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  engine: AbstractEngine | null,
  currentScene: Scene | null,
  camera: GodCamera | null,
};

type Action = {
  setEngine: (engine: State['engine']) => void,
  setCurrentScene: (currentScene: State['currentScene']) => void,
  setCamera: (camera: State['camera']) => void,
};

export const useEngineStore = create<State & Action>()(
  immer((set) => ({
    engine: null,
    currentScene: null,
    camera: null,
    setEngine: (engine) => set(() => ({ engine })),
    setCurrentScene: (currentScene) => set(() => ({ currentScene })),
    setCamera: (camera) => set(() => ({ camera })),
  })),
);
