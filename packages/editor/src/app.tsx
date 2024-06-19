/**
 * @license Apache-2.0
 */

import { SceneView } from "./components/sceneView";
import { ComponentTree } from "./components/componentTree";
import { Buttons } from "./components/buttons";
import { ActiveComponent } from "./components/activeComponent";

export function App() {
  return (
    <>
      <SceneView />
      <ComponentTree />
      <ActiveComponent />
      <Buttons />
    </>
  );
}
