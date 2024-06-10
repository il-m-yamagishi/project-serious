/**
 * @license Apache-2.0
 */

import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { CascadedShadowGenerator } from "@babylonjs/core/Lights/Shadows/cascadedShadowGenerator";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import "@babylonjs/core/Rendering/depthRendererSceneComponent";
import { Scene } from "@babylonjs/core/scene";
import { SkyMaterial } from "@babylonjs/materials/sky/skyMaterial";
import { GodCamera } from "@m-yamagishi/project-serious-core/src/inputs/godCamera/godCamera";

export class EditorScene extends Scene {
  constructor(engine: AbstractEngine) {
    super(engine);

    const light = new DirectionalLight("MainLight", new Vector3(0.1, -0.7, 0.2), this);
    const camera = new GodCamera("MainCamera", new Vector3(0, 5, -10), this);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(true);

    const shadowGenerator = new CascadedShadowGenerator(1024, light, true, camera);
    shadowGenerator.autoCalcDepthBounds = true;
    shadowGenerator.shadowMaxZ = 500;

    const box = MeshBuilder.CreateBox("box", {}, this);
    box.material = new StandardMaterial("boxMat", this);
    box.position.y = 2;
    shadowGenerator.addShadowCaster(box);

    const ground = MeshBuilder.CreateGround("ground", { width: 100, height: 100 }, this);
    ground.receiveShadows = true;

    const skyMaterial = new SkyMaterial("SkyMat", this);
    skyMaterial.azimuth = 0.1;
    skyMaterial.inclination = 0.25;
    skyMaterial.luminance = 0.87;
    skyMaterial.mieCoefficient = 0.015;
    skyMaterial.rayleigh = 7.0;
    skyMaterial.turbidity = 10;
    skyMaterial.backFaceCulling = false;

    const skybox = MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, this);
    skybox.infiniteDistance = true;
    skybox.material = skyMaterial;
  }
}
