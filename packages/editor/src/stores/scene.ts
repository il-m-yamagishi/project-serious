/**
 * @license Apache-2.0
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Scene } from "@m-yamagishi/project-serious-core/src/types/scene";

type State = {
  scene: Scene,
};

type Action = {
  addComponent: (component: Scene['components'][0]) => void,
};

export const useSceneStore = create<State & Action>()(
  immer((set) => ({
    scene: {
      components: [],
    },
    addComponent: (component) => { set((state) => { state.scene.components.push(component); }); },
  })),
);
