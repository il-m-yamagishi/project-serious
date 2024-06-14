/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Light } from "./light";

export type ShadowLight = Light & {
  readonly _NAME: "ShadowLight" | string,
  direction: Vector3,
  position: Vector3,
};
