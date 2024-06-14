/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Node } from "../node";

export type TransformNode = Node & {
  position: Vector3,
  rotation: Vector3,
  scaling: Vector3,
  billboardMode?: number,
  infiniteDistance?: boolean,
};
