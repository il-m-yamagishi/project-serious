/**
 * @license Apache-2.0
 */

import type { Color4 } from "../math";
import type { ColorCurves } from "./colorCurves";
import type { BaseTexture } from "./textures/baseTexture";

export type ImageProcessingConfiguration = {
  colorCurvesEnabled?: boolean,
  colorCurves?: ColorCurves,
  colorGradingEnabled?: boolean,
  colorGradingTexture?: BaseTexture,
  colorGradingWithGreenDepth?: boolean,
  colorGradingBGR?: boolean,
  exposure?: number,
  toneMappingEnabled?: boolean,
  toneMappingtype?: number,
  contrast?: number,
  vignetteStretch?: number,
  vignetteCenterX?: number,
  vignetteCenterY?: number,
  vignetteWeight?: number,
  vignetteColor?: Color4,
  vignetteCameraFov?: number,
  vignetteBlendMode?: number,
  vignetteEnabled?: boolean,
  ditheringEnabled?: boolean,
  ditheringIntensity?: number,
  skipFinalColorClamp?: boolean,
  applyByPostProcess?: boolean,
  isEnabled?: boolean,
};
