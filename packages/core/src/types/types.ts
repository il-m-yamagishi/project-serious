/**
 * @license Apache-2.0
 */

/**
 * Identity of a component
 */
export type Identity = string;

/**
 * type of a property
 */
export type PropertyType =
  | "string"
  | "boolean"
  | "integer"
  | "bigint"
  | "float"
  | "color3"
  | "color4"
  | "vector2"
  | "vector3"
  | "vector4"
  | "enum"
  | "texture";

/**
 * Property definition
 */
export type PropertyDefinition = {
  /**
   * The name of the property
   */
  readonly name: string,
  /**
   * The type of the property
   */
  readonly type: PropertyType,
  /**
   * The label for this property
   */
  readonly label: string,
  /**
   * The description for this property
   */
  readonly description?: string,
  readonly minimum?: number,
  readonly maximum?: number,
  readonly step?: number,
  /**
   * The default value for this property
   */
  readonly default?: unknown,
  readonly enumValues?: ReadonlyArray<{
    readonly label: string,
    readonly value: number,
    readonly description?: string,
  }>,
};
