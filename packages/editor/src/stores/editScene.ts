/**
 * @license Apache-2.0
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Identity } from "@m-yamagishi/project-serious-core/src/types/types";

type ComponentKey = string;
type Component = {
  id: Identity,
  name: string,
  className: string,
  [key: string]: unknown,
};

type State = {
  sceneProperties: {
    [key: string]: unknown,
  },
  components: {
    [key: ComponentKey]: Component,
  },
  activeComponentKey: Identity | null,
};

type Action = {
  setComponent: (key: ComponentKey, component: Component) => void,
  removeComponent: (key: ComponentKey) => void,
  setActiveComponentKey: (activeComponentKey: State['activeComponentKey']) => void,
};

export const useEditSceneStore = create<State & Action>()(
  immer((set) => ({
    sceneProperties: {},
    components: {},
    activeComponentKey: null,
    setComponent: (key, component) => { set((state) => { state.components[key] = component; }); },
    removeComponent: (key) => { set((state) => { delete state.components[key]; state.activeComponentKey = null; }); },
    setActiveComponentKey: (activeComponentKey) => { set(() => ({ activeComponentKey })); },
  })),
);
