/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 fantastic_demo_level3_merged.glb -s -t -T
*/

import * as THREE from 'three'
import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTF} from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    P_MOD_Floor_01_E_straight_med: THREE.Mesh
    P_MOD_Floor_01_O_convex_med002: THREE.Mesh
    Plane_godray_dungeon006: THREE.Mesh
    ['P_MOD_Railing_01_convex_(1)']: THREE.Mesh
    P_MOD_Wall_01_E_straight_large_ArcCover: THREE.Mesh
    P_MOD_Column_01_large_2001: THREE.Mesh
    P_PROP_altar_dungeon_02: THREE.Mesh
    P_PROP_book_dungeon_06: THREE.Mesh
    P_PROP_bottle_dungeon_02: THREE.Mesh
    P_PROP_plate_dungeon_04: THREE.Mesh
    P_PROP_skeleton_bone_dungeon_02: THREE.Mesh
    P_PROP_weapon_sword_dungeon_03: THREE.Mesh
    P_PROP_chain_small_dungeon_01_1: THREE.Mesh
    P_PROP_chain_small_dungeon_01_2: THREE.Mesh
    P_PROP_chain_small_dungeon_01_3: THREE.Mesh
    P_PROP_chain_small_dungeon_01_4: THREE.Mesh
    P_PROP_debris_stones_dungeon_01: THREE.Mesh
    ['P_PROP_dirtpile_dungeon_01_(1)']: THREE.Mesh
    P_PROP_rug_dungeon_02: THREE.Mesh
    P_PROP_spiderweb_dungeon_01: THREE.Mesh
    ['P_PROP_vegetation_dungeon_01_(1)']: THREE.Mesh
  }
  materials: {
    ['M_MOD_Floor_01_v3.001']: THREE.MeshStandardMaterial
    M_FX_gradient_linear_dungeon: THREE.MeshStandardMaterial
    ['M_MOD_Trim_Stone_01_v3.002']: THREE.MeshStandardMaterial
    ['M_MOD_Wall_01_v3.003']: THREE.MeshStandardMaterial
    M_wood_planks_dungeon_04: THREE.MeshStandardMaterial
    M_PROP_stone_deco_dungeon: THREE.MeshStandardMaterial
    M_PROP_books_dungeon: THREE.MeshStandardMaterial
    M_PROP_bottle_dungeon: THREE.MeshStandardMaterial
    M_PROP_pot_dungeon: THREE.MeshStandardMaterial
    M_PROP_skeleton_dungeon: THREE.MeshStandardMaterial
    M_PROP_weapon_dungeon: THREE.MeshStandardMaterial
    M_PROP_chains_dungeon: THREE.MeshStandardMaterial
    M_PROP_candle_dungeon: THREE.MeshStandardMaterial
    M_wood_planks_dungeon_03: THREE.MeshStandardMaterial
    M_PROP_flags_dungeon: THREE.MeshStandardMaterial
    M_PROP_orevein_dungeon: THREE.MeshStandardMaterial
    M_PROP_dirtpile_dungeon: THREE.MeshStandardMaterial
    M_PROP_fabric_dungeon: THREE.MeshStandardMaterial
    M_PROP_spiderweb_dungeon: THREE.MeshStandardMaterial
    M_PROP_vegetation_dungeon: THREE.MeshStandardMaterial
  }
}

import path from "/models/fantastic_demo_level3_merged-transformed.glb?url";


export function Model(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF(path) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.P_MOD_Floor_01_E_straight_med.geometry}
            material={materials['M_MOD_Floor_01_v3.001']} position={[-20, 20.45, -28]}>
        {props.children}

      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.P_MOD_Floor_01_O_convex_med002.geometry}
            material={materials['M_MOD_Floor_01_v3.001']} position={[-20, 3, -14]} rotation={[0, -1.57, 0]}>

      </mesh>

      {
        /*
      <mesh castShadow receiveShadow geometry={nodes.Plane_godray_dungeon006.geometry} material={materials.M_FX_gradient_linear_dungeon} position={[-17.52, 5.33, 25.83]} rotation={[-1.57, -0.96, -0.08]} scale={[0.35, 1.72, 1.17]} />
         */
      }


      <mesh castShadow receiveShadow geometry={nodes['P_MOD_Railing_01_convex_(1)'].geometry}
            material={materials['M_MOD_Trim_Stone_01_v3.002']} position={[-20, 3, -14]} rotation={[0, -1.57, 0]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_MOD_Wall_01_E_straight_large_ArcCover.geometry}
            material={materials['M_MOD_Wall_01_v3.003']} position={[-20.25, 2.56, -12]} rotation={[0, 1.57, 0]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_MOD_Column_01_large_2001.geometry}
            material={materials.M_wood_planks_dungeon_04} position={[-9.5, 0, -22]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_altar_dungeon_02.geometry}
            material={materials.M_PROP_stone_deco_dungeon} position={[0, 1, 2]} rotation={[0, 1.57, 0]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_book_dungeon_06.geometry}
            material={materials.M_PROP_books_dungeon} position={[0.35, 1.77, 1.87]} rotation={[-3.12, -0.36, -3.14]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_bottle_dungeon_02.geometry}
            material={materials.M_PROP_bottle_dungeon} position={[-0.1, 1.76, 2.09]}
            rotation={[-Math.PI, 0.54, -Math.PI]} scale={0.98}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_plate_dungeon_04.geometry}
            material={materials.M_PROP_pot_dungeon} position={[-0.23, 1.74, 2.3]} rotation={[-3.08, -0.36, 3.13]}
            scale={1.33}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_skeleton_bone_dungeon_02.geometry}
            material={materials.M_PROP_skeleton_dungeon} position={[-0.53, 1.78, 2.22]}
            rotation={[-Math.PI, -0.43, 3.09]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_weapon_sword_dungeon_03.geometry}
            material={materials.M_PROP_weapon_dungeon} position={[0.12, 1.88, 1.87]} rotation={[-3.05, -1.03, -3.07]}/>
      <group position={[0, 16, -14]} rotation={[0, 0, 3.14]}>
        <mesh castShadow receiveShadow geometry={nodes.P_PROP_chain_small_dungeon_01_1.geometry}
              material={materials.M_PROP_chains_dungeon}/>
        <mesh castShadow receiveShadow geometry={nodes.P_PROP_chain_small_dungeon_01_2.geometry}
              material={materials.M_PROP_candle_dungeon}/>
        <mesh castShadow receiveShadow geometry={nodes.P_PROP_chain_small_dungeon_01_3.geometry}
              material={materials.M_wood_planks_dungeon_03}/>
        <mesh castShadow receiveShadow geometry={nodes.P_PROP_chain_small_dungeon_01_4.geometry}
              material={materials.M_PROP_flags_dungeon}/>
      </group>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_debris_stones_dungeon_01.geometry}
            material={materials.M_PROP_orevein_dungeon} position={[6.89, 0, -25.02]} rotation={[0, 1.31, 0]}
            scale={1.78}/>
      <mesh castShadow receiveShadow geometry={nodes['P_PROP_dirtpile_dungeon_01_(1)'].geometry}
            material={materials.M_PROP_dirtpile_dungeon} position={[-7.2, 0.4, -11.83]} rotation={[0, 0, -0.35]}
            scale={2.76}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_rug_dungeon_02.geometry}
            material={materials.M_PROP_fabric_dungeon} position={[0.17, -0.99, -17.31]} scale={[1.31, 1.31, 1.76]}/>
      <mesh castShadow receiveShadow geometry={nodes.P_PROP_spiderweb_dungeon_01.geometry}
            material={materials.M_PROP_spiderweb_dungeon} position={[-8.07, 0, -5.24]} rotation={[0, 1.07, 0]}/>
      <mesh castShadow receiveShadow geometry={nodes['P_PROP_vegetation_dungeon_01_(1)'].geometry}
            material={materials.M_PROP_vegetation_dungeon} position={[-9, 5.62, 10.02]} rotation={[0, 1.57, 0]}
            scale={2.26}/>
    </group>
  )
}

useGLTF.preload(path)
