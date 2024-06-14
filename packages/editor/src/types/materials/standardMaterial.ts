/**
 * @license Apache-2.0
 */

import type { Color3 } from "../math";
import type { FresnelParameters } from "./fresnelParameters";
import type { ImageProcessingConfiguration } from "./imageProcessingConfiguration";
import type { Material } from "./material";
import type { BaseTexture } from "./textures/baseTexture";

export type StandardMaterial = Material & {
  diffuseTexture?: BaseTexture,
  ambienteTexture?: BaseTexture,
  opacityTexture?: BaseTexture,
  reflectionTexture?: BaseTexture,
  emissiveTexture?: BaseTexture,
  specularTexture?: BaseTexture,
  bumpTexture?: BaseTexture,
  lightmapTexture?: BaseTexture,
  refractionTexture?: BaseTexture,
  ambienteColor?: Color3,
  diffuseColor?: Color3,
  specularColor?: Color3,
  emissiveColor?: Color3,
  specularPower?: number,
  useAlphaFromDiffuseTexture?: boolean,
  useEmissiveAsIllumination?: boolean,
  linkEmissiveWithDiffuse?: boolean,
  useSpecularOverAlpha?: boolean,
  useReflectionOverAlpha?: boolean,
  disableLighting?: boolean,
  useObjectSpaceNormalMap?: boolean,
  useParallax?: boolean,
  useParallaxOcculusion?: boolean,
  parallaxScaleBias?: number,
  roughness?: number,
  indexOfRefraction?: number,
  invertRefractionY?: boolean,
  alphaCutOff?: number,
  useLightmapAsShadowmap?: boolean,
  diffuseFresnelParameters?: FresnelParameters,
  opacityFresnelParameters?: FresnelParameters,
  reflectionFresnelParameters?: FresnelParameters,
  refractionFresnelParameters?: FresnelParameters,
  emissiveFresnelParameters?: FresnelParameters,
  useReflectionFresnelFromSpecular?: boolean,
  useGlossinessFromSpecularMapAlpha?: boolean,
  maxSimultaneousLights?: number,
  invertNormalMapX?: boolean,
  invertNormalMapY?: boolean,
  twoSidedLighting?: boolean,
  applyDecalMapAfterDetailMap?: boolean,
  imageProcessingConfiguration?: ImageProcessingConfiguration,
};
