/**
 * @license Apache-2.0
 */

export type Material = {
  readonly _NAME: "Material" | string,
  id: string,
  name: string,
  alpha?: number,
  backFaceCulling?: boolean,
  cullBackFaces?: boolean,
  sideOrientation?: number,
  alphaMode?: number,
  needDepthPrePass?: boolean,
  disableDepthWrite?: boolean,
  disableColorWrite?: boolean,
  forceDepthWrite?: boolean,
  fogEnabled?: boolean,
  pointSize?: number,
  wireframe?: boolean,
  pointsCloud?: boolean,
  fillMode?: number,
  useLogarithmicDepth?: boolean,
};
