/**
 * @license Apache-2.0
 */

import type { AbstractMesh } from "./abstractMesh";

export type Ground = AbstractMesh & {
  readonly _NAME: "Ground",
  initialOptions: {
    width?: number,
    height?: number,
    subdivisions?: number,
    subdivisionsX?: number,
    subdivisionsY?: number,
    updatable?: boolean,
  },
};
