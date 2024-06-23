/**
 * @license Apache-2.0
 */

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  assets: {
    [key: string]: unknown,
  },
};

type Action = {
  setAsset: (key: string, value: unknown) => void,
  deleteAsset: (key: string) => void,
};

export const useAssetStore = create<State & Action>()(
  immer((set) => ({
    assets: {},
    setAsset: (key, value) => { set((state) => { state.assets[key] = value; }); },
    deleteAsset: (key) => { set((state) => { delete state.assets[key]; }); },
  })),
);
