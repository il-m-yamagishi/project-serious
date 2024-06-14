/**
 * @license Apache-2.0
 */

import { createRoot } from "react-dom/client";
import { App } from "./app";
import { StrictMode } from "react";

window.addEventListener("load", () => {
  const root = document.getElementById("root") as HTMLDivElement | null;
  if (!root) {
    throw new Error("Root element not found");
  }
  const reactRoot = createRoot(root);
  reactRoot.render(<StrictMode><App /></StrictMode>);
});
