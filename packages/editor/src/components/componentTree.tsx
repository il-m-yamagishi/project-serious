/**
 * @license Apache-2.0
 */

import type { SceneComponent } from "@m-yamagishi/project-serious-core/src/types/scene";
import { useSceneStore } from "../stores/scene";

export function ComponentTree() {
  const components = useSceneStore((state) => state.scene.components);
  const setActiveComponent = useSceneStore((state) => state.setActiveComponent);

  return (
    <div>
      <h2>Components</h2>
      <ul>
        {components.map((component: SceneComponent) => (
          <li key={component.name}>
            <button type="button" onClick={() => setActiveComponent(component)}>{component.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
