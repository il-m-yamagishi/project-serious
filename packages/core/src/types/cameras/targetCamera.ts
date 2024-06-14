/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Camera } from "./camera";

export type TargetCamera = Camera & {
  readonly _NAME: "TargetCamera" | string,
  target: Vector3,
  speed?: number,
};
