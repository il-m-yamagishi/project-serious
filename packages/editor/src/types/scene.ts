/**
 * @license Apache-2.0
 */

import type { BaseTexture } from "./materials/textures/baseTexture";
import type { Color3, Color4 } from "./math";

export type SceneComponent = {
  name: string,
};

export type Scene = {
  name: string,
  clearColor?: Color4,
  ambientColor?: Color3,
  ambientTexture?: BaseTexture,
  useRightHandedSystem?: boolean,
  fogMode?: number,
  components: SceneComponent[],
};
