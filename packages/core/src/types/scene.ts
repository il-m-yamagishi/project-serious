/**
 * @license Apache-2.0
 */

import type { BaseTexture } from "./materials/textures/baseTexture";
import type { Color3, Color4, Vector3 } from "./math";

export type SceneComponent = {
  /**
   * Concrete type name
   */
  readonly _NAME: string,
  name: string,
};

export type Node = SceneComponent & {
  id: string,
  // biome-ignore lint/suspicious/noExplicitAny: Node can have any metadata
  metadata?: any,
};

export type Scene = {
  name?: string,
  useDelayedTextureLoading?: boolean,
  autoClear?: boolean,
  clearColor?: Color4,
  ambientColor?: Color3,
  ambientTexture?: BaseTexture,
  gravity?: Vector3,
  collisionsEnabled?: boolean,
  useRightHandedSystem?: boolean,
  fogMode?: number,
  fogColor?: Color4,
  fogStart?: number,
  fogEnd?: number,
  fogDensity?: number,
  physicsEnabled?: boolean,
  physicsGravity?: Vector3,
  physicsEngine?: string,
  // biome-ignore lint/suspicious/noExplicitAny: Scene can have any metadata
  metadata?: any,
  components: SceneComponent[],
};
