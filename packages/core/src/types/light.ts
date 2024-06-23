/**
 * @license Apache-2.0
 */

import { SceneComponentProperties } from "./scene";
import type { PropertyDefinition } from "./types";

export const LightProperties: ReadonlyArray<PropertyDefinition> = [
  ...SceneComponentProperties,
  ...[
    {
      name: "diffuse",
      type: "color3",
      label: "Diffuse",
    },
    {
      name: "specular",
      type: "color3",
      label: "Specular",
    },
    {
      name: "falloffType",
      type: "integer",
      label: "Falloff Type",
    },
    {
      name: "intensity",
      type: "float",
      label: "Intensity",
    }
  ] as ReadonlyArray<PropertyDefinition>,
];

export const ShadowLightProperties: ReadonlyArray<PropertyDefinition> = [
  ...LightProperties,
  ...[
    {
      name: "direction",
      type: "vector3",
      label: "Direction",
    },
    {
      name: "position",
      type: "vector3",
      label: "Position",
    },
  ] as ReadonlyArray<PropertyDefinition>,
];

export const DirectionalLightProperties: ReadonlyArray<PropertyDefinition> = [
  ...ShadowLightProperties,
  ...[
    {
      name: "autoCalcShadowZBounds",
      type: "boolean",
      label: "Auto Calculate Shadow Z Bounds",
      default: true,
    },
  ] as ReadonlyArray<PropertyDefinition>,
];
