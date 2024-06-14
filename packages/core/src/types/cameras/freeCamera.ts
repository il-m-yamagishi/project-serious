/**
 * @license Apache-2.0
 */

import type { TargetCamera } from "./targetCamera";

export type FreeCamera = TargetCamera & {
  readonly _NAME: "FreeCamera" | string,
};
