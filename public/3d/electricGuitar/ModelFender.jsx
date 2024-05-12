import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelFender(props) {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/public/model.gltf");
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials["null"]} />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.BodyMaterial}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.MetalPartsMaterial}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.StringMaterial}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.StringMaterial}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.StringMaterial}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.NeckMaterial}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.NeckMaterial}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.NeckMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/model.gltf");
