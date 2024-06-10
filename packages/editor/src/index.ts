/**
 * @license Apache-2.0
 */

import { Editor } from "./editor";

function main() {
  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const app = new Editor(canvas);

  app.start();
}

main();
