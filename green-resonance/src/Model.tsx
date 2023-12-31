/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: StrykerDoesAnimation (https://sketchfab.com/strykerdoesgames)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dancing-stormtrooper-12bd08d66fe04a84be446e583d6663ac
Title: DANCING STORMTROOPER
*/

import * as THREE from "three";
import { useRef, useEffect, useState, cloneElement } from "react";
import { useGLTF, useAnimations, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { DissolveMaterial } from "./DissolveMaterial";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    Stormtroopermat: THREE.MeshStandardMaterial;
  };
};

type ActionName = "mixamo.com";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

interface ModelProps {
  material: any;
}

export function Model({ material }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "/dancing_stormtrooper.glb"
  ) as GLTFResult;

  const { actions } = (useAnimations(animations, group) as any) as {
    actions: GLTFActions;
  };

  useEffect(() => {
    actions["mixamo.com"].setLoop(THREE.LoopRepeat, Infinity);
    actions["mixamo.com"].play();
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="f8ce42897676455090b6ff376356f84cfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    castShadow
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    // material={materials.Stormtroopermat}
                    skeleton={nodes.Object_7.skeleton}
                  >
                    {
                      // Add prop to material
                      cloneElement(material, {
                        baseMaterial: materials.Stormtroopermat
                      })
                    }
                  </skinnedMesh>
                  <group name="Object_6" />
                  <group name="Stormtrooper" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dancing_stormtrooper.glb");
