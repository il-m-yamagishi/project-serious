/**
 * @license Apache-2.0
 */

import type { TransformNode as TransformNodeType } from "@m-yamagishi/project-serious-core/src/types/meshes/transformNode";
import { useSceneStore } from "../stores/scene";
import { TransformNode } from "./inspectors/transformNode";

export function ActiveComponent() {
  const activeComponent = useSceneStore((state) => state.activeComponent);

  if (!activeComponent) {
    return null;
  }

  const inspector = () => {
    switch (activeComponent._NAME) {
      case "TransformNode":
        return <TransformNode component={activeComponent as TransformNodeType} />;
      default:
        return <></>;
    }
  }

  return (
    <div>
      <h2>{activeComponent.name}</h2>
      {inspector()}
    </div>
  );
}
