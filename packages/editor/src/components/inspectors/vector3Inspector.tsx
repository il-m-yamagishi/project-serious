/**
 * @license Apache-2.0
 */

import type { Vector3 as Vector3Type } from "@m-yamagishi/project-serious-core/src/types/math";

interface Vector3InspectorProps {
  readonly component: Vector3Type,
}

export function Vector3Inspector({ component } : Vector3InspectorProps) {
  return (
    <div>
      <input type="number" value={component.x} />
      <input type="number" value={component.y} />
      <input type="number" value={component.z} />
    </div>
  );
}
