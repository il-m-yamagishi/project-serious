/**
 * @license Apache-2.0
 */

import type { AbstractMesh as AbstractMeshType } from "@m-yamagishi/project-serious-core/src/types/meshes/abstractMesh";
import { Vector3Inspector } from "./vector3Inspector";
import { MaterialInspector } from "./materialInspector";

interface AbstractMeshInspectorProps {
  readonly component: AbstractMeshType,
}

export function AbstractMeshInspector({ component }: AbstractMeshInspectorProps) {
  function onChangeReceiveShadows(newValue: boolean) {
    // TODO
  }

  function onChangeNumberMaterial(name: string, newValue: number) {
    // TODO
  }

  function onChangeBooleanMaterial(name: string, newValue: boolean) {
    // TODO
  }

  return (
    <div>
      <h3>AbstractMesh</h3>
      <dl>
        <dt>Position</dt>
        <dd>
          <Vector3Inspector component={component.position} />
        </dd>
        <dt>Rotation</dt>
        <dd>
          <Vector3Inspector component={component.rotation} />
        </dd>
        <dt>Scaling</dt>
        <dd>
          <Vector3Inspector component={component.scaling} />
        </dd>
        <dt>Receive Shadows</dt>
        <dd><input type="checkbox" checked={component.receiveShadows ?? false} onChange={(e) => onChangeReceiveShadows(e.target.checked)} /></dd>
        <dt>Material</dt>
        <dd>
          <MaterialInspector material={component.material} onChangeNumber={onChangeNumberMaterial} onChangeBoolean={onChangeBooleanMaterial} />
        </dd>
      </dl>
    </div>
  );
}
