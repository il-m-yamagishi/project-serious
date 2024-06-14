/**
 * @license Apache-2.0
 */

import type { FreeCamera } from "./freeCamera";

export type GodCamera = FreeCamera & {
  readonly _NAME: "GodCamera" | string,
};
