/**
 * @license Apache-2.0
 */

import { SceneView } from "./components/sceneView";
import { ComponentTree } from "./components/componentTree";
import { Buttons } from "./components/buttons";

export function App() {
  return (
    <div>
      <h1>React BabylonJS Editor</h1>
      <SceneView />
      <ComponentTree />
      <Buttons />
    </div>
  );
}
