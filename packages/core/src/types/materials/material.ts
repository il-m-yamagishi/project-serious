/**
 * @license Apache-2.0
 */

export type Material = {
  id: string,
  name: string,
  alpha?: number,
  backFaceCulling?: boolean,
  cullBackFaces?: boolean,
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
