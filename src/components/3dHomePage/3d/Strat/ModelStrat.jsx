import React, { useRef, useState, useCallback } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelStrat(props) {
  const meshRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const rotateMesh = useCallback(() => {
    if (meshRef.current) {
      if (direction === 1) {
        if (meshRef.current.rotation.y < 1) {
          meshRef.current.rotation.y += 0.005;
        } else {
          setDirection(-1);
        }
      } else {
        if (meshRef.current.rotation.y > -1) {
          meshRef.current.rotation.y -= 0.005;
        } else {
          setDirection(1);
        }
      }
    }
  }, [direction]);

  useFrame(rotateMesh);

  const { nodes, materials } = useGLTF("/3d/Strat/model.gltf");
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group rotation={[0.01, 0, 0]} scale={0.881}>
        <mesh geometry={nodes.Object_2.geometry} material={materials["metals_shad.002"]} />
        <mesh geometry={nodes.Object_3.geometry} material={materials["metals_shad.003"]} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.stratLow} />
      </group>
    </group>
  );
}

useGLTF.preload("/Strat/model.gltf");
