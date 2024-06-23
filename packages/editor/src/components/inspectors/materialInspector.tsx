/**
 * @license Apache-2.0
 */

import type { Material as MaterialType } from "@m-yamagishi/project-serious-core/src/types/materials/material";

interface MaterialInspectorProps {
  readonly material?: MaterialType,
  readonly onChangeNumber: (name: string, newValue: number) => void,
  readonly onChangeBoolean: (name: string, newValue: boolean) => void,
}

export function MaterialInspector({ material, onChangeNumber, onChangeBoolean } : MaterialInspectorProps) {
  if (!material) {
    return <div>No material</div>;
  }

  return (
    <dl>
      <dt>ID</dt>
      <dd>{material.id}</dd>
      <dt>Name</dt>
      <dd>{material.name}</dd>
      <dt>Alpha</dt>
      <dd><input type="number" value={material.alpha ?? 1.0} onChange={(e) => onChangeNumber("alpha", Number.parseFloat(e.target.value))} /></dd>
      <dt>Back Face Culling</dt>
      <dd><input type="checkbox" checked={material.backFaceCulling ?? true} onChange={(e) => onChangeBoolean("backFaceCulling", e.target.checked)} /></dd>
      <dt>Cull Back Faces</dt>
      <dd><input type="checkbox" checked={material.cullBackFaces ?? true} onChange={(e) => onChangeBoolean("cullBackFaces", e.target.checked)} /></dd>
      <dt>Alpha Mode</dt>
      <dd>
        <select value={material.alphaMode ?? 0} onChange={(e) => onChangeNumber("alphaMode", Number.parseInt(e.target.value))}>
          <option value={0} title="Defines that alpha blending is disabled">DISABLE</option>
          <option value={1} title="Defines that alpha blending is SRC ALPHA * SRC + DEST">ADD</option>
          <option value={2} title="Defines that alpha blending is SRC ALPHA * SRC + (1 - SRC ALPHA) * DEST">COMBINE</option>
          <option value={3} title="Defines that alpha blending is DEST - SRC * DEST">SUBTRACT</option>
          <option value={4} title="Defines that alpha blending is SRC * DEST">MULTIPLY</option>
          <option value={5} title="Defines that alpha blending is SRC ALPHA * SRC + (1 - SRC) * DEST">MAXIMIZED</option>
          <option value={6} title="Defines that alpha blending is SRC + DEST">ONEONE</option>
          <option value={7} title="Defines that alpha blending is SRC + (1 - SRC ALPHA) * DEST">PREMULTIPLIED</option>
          <option value={8} title="Defines that alpha blending is SRC + (1 - SRC ALPHA) * DEST">PREMULTIPLIED_PORTERDUFF</option>
          <option value={9} title="Defines that alpha blending is CST * SRC + (1 - CST) * DEST">INTERPOLATE</option>
          <option value={10} title="Defines that alpha blending is SRC + (1 - SRC) * DEST">SCREENMODE</option>
          <option value={11} title="Defines that alpha blending is SRC + DST">ONEONE_ONEONE</option>
          <option value={12} title="Defines that alpha blending is SRC * DST ALPHA + DST">ALPHATOCOLOR</option>
          <option value={13} title="Defines that alpha blending is SRC * (1 - DST) + DST * (1 - SRC)">REVERSEONEMINUS</option>
          <option value={14} title="Defines that alpha blending is SRC + DST * (1 - SRC ALPHA)">DSTONEMINUSSRCALPHA</option>
          <option value={15} title="Defines that alpha blending is SRC + DST">ONEONE_ONEZERO</option>
          <option value={16} title="Defines that alpha blending is SRC * (1 - DST) + DST * (1 - SRC)">EXCLUSION</option>
          <option value={17} title="Defines that alpha blending is SRC * SRC ALPHA + DST * (1 - SRC ALPHA)">LAYER_ACCUMULATE</option>
        </select>
      </dd>
      <dt>Need Depth Pre Pass</dt>
      <dd><input type="checkbox" checked={material.needDepthPrePass ?? false} onChange={(e) => onChangeBoolean("needDepthPrePass", e.target.checked)} /></dd>
      <dt>Disable Depth Write</dt>
      <dd><input type="checkbox" checked={material.disableDepthWrite ?? false} onChange={(e) => onChangeBoolean("disableDepthWrite", e.target.checked)} /></dd>
      <dt>Disable Color Write</dt>
      <dd><input type="checkbox" checked={material.disableColorWrite ?? false} onChange={(e) => onChangeBoolean("disableColorWrite", e.target.checked)} /></dd>
      <dt>Force Depth Write</dt>
      <dd><input type="checkbox" checked={material.forceDepthWrite ?? false} onChange={(e) => onChangeBoolean("forceDepthWrite", e.target.checked)} /></dd>
      <dt>Fog Enabled</dt>
      <dd><input type="checkbox" checked={material.fogEnabled ?? true} onChange={(e) => onChangeBoolean("fogEnabled", e.target.checked)} /></dd>
      <dt>Point Size</dt>
      <dd><input type="number" value={material.pointSize ?? 1.0} onChange={(e) => onChangeNumber("pointSize", Number.parseFloat(e.target.value))} /></dd>
      <dt>Wireframe</dt>
      <dd><input type="checkbox" checked={material.wireframe ?? false} onChange={(e) => onChangeBoolean("wireframe", e.target.checked)} /></dd>
      <dt>Points Cloud</dt>
      <dd><input type="checkbox" checked={material.pointsCloud ?? false} onChange={(e) => onChangeBoolean("pointsCloud", e.target.checked)} /></dd>
      <dt>Fill Mode</dt>
      <dd>
        <select value={material.fillMode ?? 0} onChange={(e) => onChangeNumber("fillMode", Number.parseInt(e.target.value))}>
          <option value={0} title="Returns the triangle fill mode">TriangleFillMode</option>
          <option value={1} title="Returns the wireframe mode">WireFrameFillMode</option>
          <option value={2} title="Returns the point fill mode">PointFillMode</option>
          <option value={3} title="Returns the point list draw mode">PointListDrawMode</option>
          <option value={4} title="Returns the line list draw mode">LineListDrawMode</option>
          <option value={5} title="Returns the line loop draw mode">LineLoopDrawMode</option>
          <option value={6} title="Returns the line strip draw mode">LineStripDrawMode</option>
          <option value={7} title="Returns the triangle strip draw mode">TriangleStripDrawMode</option>
          <option value={8} title="Returns the triangle fan draw mode">TriangleFanDrawMode</option>
        </select>
      </dd>
      <dt>Use Logarithmic Depth</dt>
      <dd><input type="checkbox" checked={material.useLogarithmicDepth ?? false} onChange={(e) => onChangeBoolean("useLogarithmicDepth", e.target.checked)} /></dd>
    </dl>
  );
}
