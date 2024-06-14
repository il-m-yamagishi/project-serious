/**
 * @license Apache-2.0
 */

import type { Color3 } from "../math";
import type { Node } from "../scene";

export type Light = Node & {
  readonly _NAME: "Light" | string,
  diffuse?: Color3,
  specular?: Color3,
  falloffType?: number,
  intensity?: number,
};
