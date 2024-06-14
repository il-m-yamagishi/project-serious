/**
 * @license Apache-2.0
 */

import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { GodCamera } from "@m-yamagishi/project-serious-core/src/inputs/godCamera/godCamera";
import type { GodCamera as GodCameraType } from "@m-yamagishi/project-serious-core/src/types/cameras/godCamera";
import type { DirectionalLight as DirectionalLightType } from "@m-yamagishi/project-serious-core/src/types/lights/directionalLight";
import type { Box as BoxType } from "@m-yamagishi/project-serious-core/src/types/meshes/box";
import type { Ground as GroundType } from "@m-yamagishi/project-serious-core/src/types/meshes/ground";
import { useCallback } from "react";
import { useEngineStore } from "../stores/engine";
import { useSceneStore } from "../stores/scene";

export function Buttons() {
  const addComponent = useSceneStore((state) => state.addComponent);
  const currentScene = useEngineStore((state) => state.currentScene);

  const addDirectionalLight = useCallback(() => {
    if (!currentScene) {
      return;
    }

    addComponent({
      _NAME: "DirectionalLight",
      name: "MainLight",
      direction: { x: 0, y: -1, z: 0 },
      id: crypto.randomUUID(),
    } as DirectionalLightType);

    const light = new DirectionalLight("MainLight", Vector3.Down(), currentScene);
  }, [addComponent, currentScene]);

  const addGodCamera = useCallback(() => {
    if (!currentScene) {
      return;
    }

    addComponent({
      _NAME: "GodCamera",
      name: "MainCamera",
      position: { x: 0, y: 1, z: 0 },
      target: { x: 0, y: 0, z: 0 },
      id: crypto.randomUUID(),
    } as GodCameraType);

    const camera = new GodCamera("MainCamera", Vector3.Up(), currentScene, true);
    camera.position = Vector3.Up();
    camera.setTarget(Vector3.Zero());
    camera.attachControl(true);
  }, [addComponent, currentScene]);

  const addGround = useCallback(() => {
    if (!currentScene) {
      return;
    }

    addComponent({
      _NAME: "Ground",
      name: "Ground",
      id: crypto.randomUUID(),
      initialOptions: {
      },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scaling: { x: 1, y: 1, z: 1 },
    } as GroundType);

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

    addComponent({
      _NAME: "Box",
      id,
      name: `Box_${id}`,
      position: { x, y, z },
      rotation: { x: 0, y: 0, z: 0 },
      scaling: { x: 1, y: 1, z: 1 },
      initialOptions: {},
    } as BoxType);

    const box = MeshBuilder.CreateBox(`Box_${id}`, {}, currentScene);
    box.position = new Vector3(x, y, z);
  }, [addComponent, currentScene]);

  return (
    <div>
      <button type="button" onClick={addGodCamera}>Add GodCamera</button>
      <button type="button" onClick={addDirectionalLight}>Add DirectionalLight</button>
      <button type="button" onClick={addGround}>Add Ground</button>
      <button type="button" onClick={addBox}>Add Box</button>
    </div>
  );
}
