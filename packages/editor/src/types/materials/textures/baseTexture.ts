/**
 * @license Apache-2.0
 */

import type { FileReference } from "../../fileReference"

export type BaseTexture = FileReference | {
  wrapU?: number,
  wrapV?: number,
  wrapR?: number,
  anisotropicFilteringLevel?: number,
  name: string,
  // biome-ignore lint/suspicious/noExplicitAny: Metadata can be stored any type
  metadata?: any,
  hasAlpha?: boolean,
  getAlphaFromRGB?: boolean,
  level?: number,
  coordinatesIndex?: number,
  coordinatesMode?: number,
  gammaSpace?: number,
  isRGBD?: boolean,
  invertZ?: boolean,
};
