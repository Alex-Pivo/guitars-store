import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Guitar(props) {
  // const meshRef = useRef(null);
  // useFrame(() => (meshRef.current.rotation.x += 0.005));

  const { nodes, materials } = useGLTF("./guitar.gltf");
  return (
    <group
      //  ref={meshRef}
      {...props}
      dispose={null}
    >
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0.geometry}
        material={materials.Wood_D}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_1.geometry}
        material={materials.Wood_L}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_2.geometry}
        material={materials.WhiteMetalM}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_3.geometry}
        material={materials.lambert2}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_4.geometry}
        material={materials.lambert74}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_5.geometry}
        material={materials.White_M}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_6.geometry}
        material={materials.MetalM}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_7.geometry}
        material={materials.lambert83}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_8.geometry}
        material={materials.lambert84}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_9.geometry}
        material={materials.lambert85}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_10.geometry}
        material={materials.lambert86}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_11.geometry}
        material={materials.lambert87}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_12.geometry}
        material={materials.lambert88}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_13.geometry}
        material={materials.lambert89}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_14.geometry}
        material={materials.lambert90}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_15.geometry}
        material={materials.lambert91}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_16.geometry}
        material={materials.lambert92}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_17.geometry}
        material={materials.lambert93}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_18.geometry}
        material={materials.White_M1}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_19.geometry}
        material={materials.BlackM}
      />
      <mesh
        // ref={meshRef}
        geometry={nodes.mesh_0_20.geometry}
        material={materials.Black_Metal_M}
      />
    </group>
  );
}

useGLTF.preload("/public/guitar.gltf");
