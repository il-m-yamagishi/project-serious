/**
 * @license Apache-2.0
 */

import type { PropertyDefinition } from "@m-yamagishi/project-serious-core/src/types/types";

interface InspectorProps {
  readonly component: { [key: string]: unknown},
  readonly propertyDefinitions: ReadonlyArray<PropertyDefinition>,
}

export function Inspector({ component, propertyDefinitions }: InspectorProps) {
  return (
    <ul>
      {propertyDefinitions.map((prop) => (
        <li key={prop.name}>
          <label htmlFor={`${component.id}-${prop.name}`}>{prop.name}</label>
          {prop.type === "string" && <input
            id={`${component.id}-${prop.name}`}
            type="string"
            value={component[prop.name] as string}
            readOnly={prop.name === "id"}
          />}
        </li>
      ))}
    </ul>
  );
}
