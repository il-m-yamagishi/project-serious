/**
 * @license Apache-2.0
 */

import type { BaseTexture } from "./materials/textures/baseTexture";
import type { Color3, Color4, Vector3 } from "./math";
import type { PropertyDefinition } from "./types";

export type SceneComponent = {
  /**
   * Concrete type name
   */
  readonly _NAME: string,
  name: string,
};

export type Node = SceneComponent & {
  id: string,
};

export type Scene = {
  name?: string,
  useDelayedTextureLoading?: boolean,
  autoClear?: boolean,
  clearColor?: Color4,
  ambientColor?: Color3,
  ambientTexture?: BaseTexture,
  gravity?: Vector3,
  collisionsEnabled?: boolean,
  useRightHandedSystem?: boolean,
  fogMode?: number,
  fogColor?: Color4,
  fogStart?: number,
  fogEnd?: number,
  fogDensity?: number,
  physicsEnabled?: boolean,
  physicsGravity?: Vector3,
  physicsEngine?: string,
  components: SceneComponent[],
};

export const SceneProperties: ReadonlyArray<PropertyDefinition> = [
  {
    name: "name",
    type: "string",
    label: "Name",
    default: "Scene",
  },
  {
    name: "useDelayedTextureLoading",
    type: "boolean",
    label: "Use Delayed Texture Loading",
    default: false,
  },
  {
    name: "autoClear",
    type: "boolean",
    label: "Auto Clear",
    default: true,
  },
  {
    name: "clearColor",
    type: "color4",
    label: "Clear Color",
    default: [0.2, 0.2, 0.3, 1],
  },
  {
    name: "ambientColor",
    type: "color3",
    label: "Ambient Color",
    default: [0, 0, 0],
  },
  {
    name: "ambientTexture",
    type: "texture",
    label: "Ambient Texture",
    default: null,
  },
  {
    name: "gravity",
    type: "vector3",
    label: "Gravity",
    default: [0, -9.807, 0],
  },
  {
    name: "collisionsEnabled",
    type: "boolean",
    label: "Collisions Enabled",
    default: false,
  },
  {
    name: "useRightHandedSystem",
    type: "boolean",
    label: "Use Right Handed System",
    default: false,
  },
  {
    name: "fogMode",
    type: "enum",
    label: "Fog Mode",
    default: 0,
    enumValues: [
      {
        label: "None",
        value: 0,
        description: "The fog is deactivated",
      },
      {
        label: "Exp",
        value: 1,
        description: "The fog density is following an exponential function",
      },
      {
        label: "Exp2",
        value: 2,
        description: "The fog density is following an exponential function faster than FOGMODE_EXP",
      },
      {
        label: "Linear",
        value: 3,
        description: "The fog density is following a linear function.",
      },
    ],
  },
  {
    name: "fogColor",
    type: "color4",
    label: "Fog Color",
    default: [0.2, 0.2, 0.3, 1],
  },
  {
    name: "fogStart",
    type: "float",
    label: "Fog Start",
    default: 0.0,
  },
  {
    name: "fogEnd",
    type: "float",
    label: "Fog End",
    default: 1000.0,
  },
  {
    name: "fogDensity",
    type: "float",
    label: "Fog Density",
    default: 0.1,
  },
  {
    name: "physicsEnabled",
    type: "boolean",
    label: "Physics Enabled",
    default: false,
  },
];

export const SceneComponentProperties: ReadonlyArray<PropertyDefinition> = [
  {
    name: "id",
    type: "string",
    label: "ID",
  },
  {
    name: "name",
    type: "string",
    label: "Name",
  },
  {
    name: "className",
    type: "string",
    label: "Class Name",
  },
];
