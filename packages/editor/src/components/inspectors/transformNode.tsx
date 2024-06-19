/**
 * @license Apache-2.0
 */

import type { TransformNode as TransformNodeType } from "@m-yamagishi/project-serious-core/src/types/meshes/transformNode"

interface TransformNodeProps {
  readonly component: TransformNodeType,
}

export function TransformNode({ component }: TransformNodeProps) {
  return (
    <div>
      <h3>TransformNode</h3>
      <div>{component.position.x} / {component.position.y} / {component.position.z}</div>
      <div>{component.rotation.x} / {component.rotation.y} / {component.rotation.z}</div>
      <div>{component.scaling.x} / {component.scaling.y} / {component.scaling.z}</div>
    </div>
  )
}
