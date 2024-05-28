import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bass(props) {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/3d/bass/model.gltf");
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.M_string}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.M_Metal}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.M_Body}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bass/model.gltf");
