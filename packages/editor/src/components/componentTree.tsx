/**
 * @license Apache-2.0
 */

import type { SceneComponent } from "@m-yamagishi/project-serious-core/src/types/scene";
import { useSceneStore } from "../stores/scene";

export function ComponentTree() {
  const components = useSceneStore((state) => state.scene.components);

  const componentFunc = (component: SceneComponent) => {
    switch (component._NAME) {
      case "DirectionalLight":
      case "GodCamera":
        return <li key={component.name}>{component.name}</li>;
      default:
        return <li key={component.name}>Unknown {component.name}</li>;
    }
  };

  return (
    <div>
      <h2>Components</h2>
      <ul>
        {components.map(componentFunc)}
      </ul>
    </div>
  );
}
