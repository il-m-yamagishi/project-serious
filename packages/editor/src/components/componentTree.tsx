/**
 * @license Apache-2.0
 */

import { useEditSceneStore } from "../stores/editScene";

export function ComponentTree() {
  const componentTree = useEditSceneStore((state) => state.components);
  const setActiveComponentKey = useEditSceneStore((state) => state.setActiveComponentKey);

  return (
    <div>
      <h2>Components</h2>
      <ul>
        {Object.keys(componentTree).map((key) => (
          <li key={key}>
            <button type="button" onClick={() => setActiveComponentKey(key)}>{key}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
