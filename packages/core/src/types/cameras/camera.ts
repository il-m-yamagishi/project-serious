/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Node } from "../scene";

export type Camera = Node & {
  readonly _NAME: "Camera" | string,
  position: Vector3,
  fov?: number,
  minZ?: number,
  maxZ?: number,
  inertia?: number,
  mode?: number,
};
