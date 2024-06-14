/**
 * @license Apache-2.0
 */

import type { Color3 } from "../math";

export type FresnelParameters = {
  isEnabled: boolean,
  leftColor: Color3,
  rightColor: Color3,
  bias: number,
  power: number,
}
