/**
 * @license Apache-2.0
 */

import { serialize } from "@babylonjs/core/Misc/decorators";

export class GodCameraMoveInputParameters {
  @serialize()
  public baseSpeedFactor = 3.0;

  @serialize()
  public forwardSpeed = 1.0;

  @serialize()
  public backwardSpeed = 1.0;

  @serialize()
  public leftRightSpeed = 1.0;

  @serialize()
  public rotationSpeed = 0.3;

  /**
   * {@inheritdoc}
   */
  public getClassName(): string {
    return "GodCameraMoveInputParameters";
  }
}
