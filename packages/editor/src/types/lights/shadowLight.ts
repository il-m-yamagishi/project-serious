/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Light } from "./light";

export type ShadowLight = Light & {
  direction: Vector3,
  position: Vector3,
};
