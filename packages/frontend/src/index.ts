/**
 * @license Apache-2.0
 */

import { Application } from "./application";

function main() {
  const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const app = new Application(canvas);

  app.start();
}

main();
