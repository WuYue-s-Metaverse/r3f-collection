/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 roomV239.glb -T -p 6
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBake } from "../hooks/useBake";

export function RoomV239(props) {
  const { nodes, materials } = useGLTF("/models/roomV239.glb");

  const floorRef = useRef();
  const baseboardRef = useRef();
  const wallRef = useRef();
  const ceilingRef = useRef();
  const windowRef = useRef();

  const floorMaterial = useBake("floor", { envMapIntensity: 0, lightMapIntensity: 1 });
  const baseboardMaterial = useBake("baseboard", { envMapIntensity: 0, lightMapIntensity: 1 });
  const wallsMaterial = useBake("walls", { envMapIntensity: 0, lightMapIntensity: 1.7 });
  const ceilingMaterial = useBake("ceiling", { envMapIntensity: 0, lightMapIntensity: 1.7 });
  const windowMaterial = useBake("window", {
    envMapIntensity: 0,
    lightMapIntensity: 1.1,
    aoMapIntensity: 0.5,
  });

  useLayoutEffect(() => {
    floorRef.current.geometry.attributes.uv2 = floorRef.current.geometry.attributes.uv;
    baseboardRef.current.geometry.attributes.uv2 = baseboardRef.current.geometry.attributes.uv;
    wallRef.current.geometry.attributes.uv2 = wallRef.current.geometry.attributes.uv;
    ceilingRef.current.geometry.attributes.uv2 = ceilingRef.current.geometry.attributes.uv;
    windowRef.current.geometry.attributes.uv2 = windowRef.current.geometry.attributes.uv;
  }, []);

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        ref={wallRef}
        geometry={nodes.Room.geometry}
        material={wallsMaterial}
      >
        <mesh
          ref={baseboardRef}
          geometry={nodes.Baseboard.geometry}
          material={baseboardMaterial}
        />
        <mesh
          ref={ceilingRef}
          geometry={nodes.Ceiling.geometry}
          material={ceilingMaterial}
          scale={1.01}
          position={[-0.01, -0.05, 0.01]}
        />
        <mesh
          ref={floorRef}
          geometry={nodes.Floor.geometry}
          material={floorMaterial}
        />

        <mesh
          ref={windowRef}
          geometry={nodes.WindowFrame.geometry}
          material={windowMaterial}
          position={[-0.300243, 0.464845, -1.002121]}
          rotation={[0, 1.570535, 0]}
        >
          <mesh
            geometry={nodes.WindowR001.geometry}
            material={materials.Material}
            position={[0.74, 0.025, 0.0625]}
          />
        </mesh>
      </mesh>
    </group>
  );
}
