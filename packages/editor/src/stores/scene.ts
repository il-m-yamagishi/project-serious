/**
 * @license Apache-2.0
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Scene, SceneComponent } from "@m-yamagishi/project-serious-core/src/types/scene";

type State = {
  scene: Scene,
};

type Action = {
  addComponent: <T extends SceneComponent>(component: T) => void,
};

export const useSceneStore = create<State & Action>()(
  immer((set) => ({
    scene: {
      components: [],
    },
    addComponent: (component) => { set((state) => { state.scene.components.push(component); }); },
  })),
);
