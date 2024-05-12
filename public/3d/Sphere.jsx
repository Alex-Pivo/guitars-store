import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Sphere() {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.z += 0.003));

  return (
    <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}
