/**
 * @license Apache-2.0
 */

import type { Color3 } from "../math";
import type { Node } from "../node";

export type Light = Node & {
  diffuse?: Color3,
  specular?: Color3,
  falloffType?: number,
  intensity?: number,
};
