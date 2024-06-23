/**
 * @license Apache-2.0
 */

import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import type { SkyMaterial as SkyMaterialType } from "@m-yamagishi/project-serious-core/src/types/materials/skyMaterial";
import type { Box as BoxType } from "@m-yamagishi/project-serious-core/src/types/meshes/box";
import type { Ground as GroundType } from "@m-yamagishi/project-serious-core/src/types/meshes/ground";
import { useCallback } from "react";
import { useEditSceneStore } from "../stores/editScene";
import { useEngineStore } from "../stores/engine";
import { useSceneStore } from "../stores/scene";
import { SkyMaterial } from "@babylonjs/materials/sky";

export function Buttons() {
  const setComponent = useEditSceneStore((state) => state.setComponent);
  const addComponent = useSceneStore((state) => state.addComponent);
  const currentScene = useEngineStore((state) => state.currentScene);

  const addDirectionalLight = useCallback(() => {
    if (!currentScene) {
      return;
    }

    const id = crypto.randomUUID();
    const component = {
      id,
      className: "DirectionalLight",
      name: `DirectionalLight_${id}`,
      position: [0, 1, 0],
      direction: [0, -1, 0],
    }

    setComponent(id, component);

    const light = new DirectionalLight(`DirectionalLight_${id}`, Vector3.Down(), currentScene);
    light.id = id;
    light.position = Vector3.FromArray(component.position);
    light.direction = Vector3.FromArray(component.direction);
  }, [setComponent, currentScene]);

  const addGround = useCallback(() => {
    if (!currentScene) {
      return;
    }

    addComponent<GroundType>({
      _NAME: "Ground",
      name: "Ground",
      id: crypto.randomUUID(),
      initialOptions: {
      },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scaling: { x: 1, y: 1, z: 1 },
    });

    MeshBuilder.CreateGround("MainGround", {}, currentScene);
  }, [addComponent, currentScene]);

  const addBox = useCallback(() => {
    if (!currentScene) {
      return;
    }

    const id = crypto.randomUUID();
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;

    addComponent<BoxType>({
      _NAME: "Box",
      id,
      name: `Box_${id}`,
      position: { x, y, z },
      rotation: { x: 0, y: 0, z: 0 },
      scaling: { x: 1, y: 1, z: 1 },
      initialOptions: {},
    });

    const box = MeshBuilder.CreateBox(`Box_${id}`, {}, currentScene);
    box.position = new Vector3(x, y, z);
  }, [addComponent, currentScene]);

  const addSky = useCallback(() => {
    if (!currentScene) {
      return;
    }

    const id = crypto.randomUUID();

    addComponent<BoxType>({
      _NAME: "Box",
      id,
      name: `SkyBox_${id}`,
      initialOptions: {},
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scaling: { x: 1000, y: 1000, z: 1000 },
      infiniteDistance: true,
      material: {
        _NAME: "SkyMaterial",
        id: crypto.randomUUID(),
        name: `SkyMat_${id}`,
        azimuth: 0.1,
        inclination: 0.25,
        luminance: 0.87,
        mieCoefficient: 0.015,
        rayleigh: 7.0,
        turbidity: 10,
      } as SkyMaterialType,
    });

    const box = MeshBuilder.CreateBox(`SkyBox_${id}`, {}, currentScene);
    box.scaling = new Vector3(1000, 1000, 1000);
    box.infiniteDistance = true;
    const boxMat = new SkyMaterial(`SkyMat_${id}`, currentScene);
    boxMat.azimuth = 0.1;
    boxMat.inclination = 0.25;
    boxMat.luminance = 0.87;
    boxMat.mieCoefficient = 0.015;
    boxMat.rayleigh = 7.0;
    boxMat.turbidity = 10;
    boxMat.backFaceCulling = false;
    box.material = boxMat;
  }, [addComponent, currentScene]);

  return (
    <ul>
      <li><button type="button" onClick={addDirectionalLight}>Add DirectionalLight</button></li>
      <li><button type="button" onClick={addGround}>Add Ground</button></li>
      <li><button type="button" onClick={addBox}>Add Box</button></li>
      <li><button type="button" onClick={addSky}>Add Sky</button></li>
    </ul>
  );
}
