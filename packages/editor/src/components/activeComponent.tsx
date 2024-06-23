/**
 * @license Apache-2.0
 */

import { getPropertyDefinitions } from "@m-yamagishi/project-serious-core/src/types/getPropertyDefinitions";
import { useEditSceneStore } from "../stores/editScene";
import { Inspector } from "./inspectors/inspector";

export function ActiveComponent() {
  const activeComponentKey = useEditSceneStore((state) => state.activeComponentKey);
  const componentTree = useEditSceneStore((state) => state.components);
  if (!activeComponentKey) {
    return null;
  }

  return (
    <div style={{overflowY: "auto"}}>
      <h2>{activeComponentKey}</h2>
      <Inspector
        component={componentTree[activeComponentKey]}
        propertyDefinitions={getPropertyDefinitions(componentTree[activeComponentKey].className)}
      />
    </div>
  );
}
