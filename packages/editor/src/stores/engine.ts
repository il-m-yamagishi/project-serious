/**
 * @license Apache-2.0
 */

import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import type { Scene } from "@babylonjs/core/scene";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  engine: AbstractEngine | null,
  currentScene: Scene | null,
};

type Action = {
  setEngine: (engine: State['engine']) => void,
  setCurrentScene: (currentScene: State['currentScene']) => void,
};

export const useEngineStore = create<State & Action>()(
  immer((set) => ({
    engine: null,
    currentScene: null,
    setEngine: (engine) => set(() => ({ engine })),
    setCurrentScene: (currentScene) => set(() => ({ currentScene })),
  })),
);
