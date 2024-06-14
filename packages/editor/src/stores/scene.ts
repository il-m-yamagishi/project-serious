/**
 * @license Apache-2.0
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Scene } from "../types/scene";

export const useSceneStore = create<Scene>()(
  immer((set) => ({
    name: "Main Scene",
    components: [],
  })),
);
