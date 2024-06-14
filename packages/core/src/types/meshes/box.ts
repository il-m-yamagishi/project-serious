/**
 * @license Apache-2.0
 */

import type { Color4, Vector4 } from "../math";
import type { AbstractMesh } from "./abstractMesh";

export type Box = AbstractMesh & {
  readonly _NAME: "Box",
  initialOptions: {
    size?: number,
    width?: number,
    height?: number,
    depth?: number,
    faceUV?: Vector4[],
    faceColors?: Color4[],
    sideOrientation?: number,
    frontUVs?: Vector4,
    backUVs?: Vector4,
    wrap?: boolean,
    topBaseAt?: number,
    bottomBaseAt?: number,
    updatable?: boolean,
  },
};
