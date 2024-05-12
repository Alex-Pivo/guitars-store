import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelStrat(props) {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/3d/Strat/model.gltf");
  return (
    <group
      ref={meshRef}
      {...props}
      dispose={null}
    >
      <group rotation={[0.01, 0, 0]} scale={0.881}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["metals_shad.002"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["metals_shad.003"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.stratLow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/model.gltf");
