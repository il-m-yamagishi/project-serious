/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Node } from "../node";

export type Camera = Node & {
  position: Vector3,
  fov?: number,
  minZ?: number,
  maxZ?: number,
  inertia?: number,
  mode?: number,
};
