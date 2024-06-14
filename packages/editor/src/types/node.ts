/**
 * @license Apache-2.0
 */

import type { SceneComponent } from "./scene";

export type Node = SceneComponent & {
  id: string,
  // biome-ignore lint/suspicious/noExplicitAny: any data can be stored
  metadata?: any,
};
