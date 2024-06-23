/**
 * @license Apache-2.0
 */

import { DirectionalLightProperties } from "./light";
import { SceneProperties } from "./scene";
import type { PropertyDefinition } from "./types";

export function getPropertyDefinitions(className: string): ReadonlyArray<PropertyDefinition> {
  const definitions = {
    Scene: SceneProperties,
    DirectionaLight: DirectionalLightProperties,
  } as { [key: string]: ReadonlyArray<PropertyDefinition> };

  if (definitions[className]) {
    return definitions[className];
  }

  return [];
}
