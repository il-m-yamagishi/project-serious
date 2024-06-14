/**
 * @license Apache-2.0
 */

import type { Material } from "../materials/material";
import type { TransformNode } from "./transformNode";

export type AbstractMesh = TransformNode & {
  readonly _NAME: "AbstractMesh" | string,
  material?: Material,
  receiveShadows?: boolean,
};
