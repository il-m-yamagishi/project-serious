/**
 * @license Apache-2.0
 */

import type { Vector3 } from "../math";
import type { Material } from "./material";

export type SkyMaterial = Material & {
  readonly _NAME: "SkyMaterial",
  luminance?: number,
  turbidity?: number,
  rayleigh?: number,
  mieCoefficient?: number,
  mieDirectionalG?: number,
  distance?: number,
  inclination?: number,
  azimuth?: number,
  sunPosition?: Vector3,
  useSunPosition?: boolean,
  cameraOffset?: Vector3,
  up?: Vector3,
  dithering?: boolean,
};
