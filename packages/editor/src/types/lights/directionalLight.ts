/**
 * @license Apache-2.0
 */

import type { ShadowLight } from "./shadowLight";

export type DirectionalLight = ShadowLight & {
  autoCalcShadowZBounds?: boolean,
};
