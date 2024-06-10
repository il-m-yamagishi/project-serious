/**
 * @license Apache-2.0
 */

import { TargetCamera } from "@babylonjs/core/Cameras/targetCamera";
import type { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Scene } from "@babylonjs/core/scene";
import { GodCameraInputsManager } from "./godCameraInputsManager";

/**
 * New camera type that allows for more advanced camera controls.
 */
export class GodCamera extends TargetCamera {
  /**
   * {@inheritdoc}
   */
  public constructor(name: string, position: Vector3, scene?: Scene, setActiveOnSceneIfNoneActive?: boolean) {
    super(name, position, scene, setActiveOnSceneIfNoneActive);
    const inputs = new GodCameraInputsManager(this);
    inputs.addKeyboard();
    this.inputs = inputs;
  }

  /**
   * Attached controls to the current camera.
   * @param ignored defines an ignored parameter kept for backward compatibility.
   * @param noPreventDefault Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
   */
  public override attachControl(noPreventDefault?: boolean): void {
    this.inputs.attachElement(noPreventDefault);
  }

  /**
   * Detach the current controls from the specified dom element.
   */
  public override detachControl(): void {
    this.inputs.detachElement();
  }

  /** @internal */
  public override _checkInputs(): void {
    this.inputs.checkInputs();

    super._checkInputs();
  }
}
