/**
 * @license Apache-2.0
 */

export type BaseTexture = {
  wrapU?: number,
  wrapV?: number,
  wrapR?: number,
  anisotropicFilteringLevel?: number,
  name: string,
  hasAlpha?: boolean,
  getAlphaFromRGB?: boolean,
  level?: number,
  coordinatesIndex?: number,
  coordinatesMode?: number,
  gammaSpace?: number,
  isRGBD?: boolean,
  invertZ?: boolean,
};
