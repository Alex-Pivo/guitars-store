// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// export function ModelStrat(props) {
//   const meshRef = useRef(null);
//   useFrame(() => (meshRef.current.rotation.y += 0.005));

//   const { nodes, materials } = useGLTF("/3d/Strat/model.gltf");
//   return (
//     <group
//       ref={meshRef}
//       {...props}
//       dispose={null}
//     >
//       <group rotation={[0.01, 0, 0]} scale={0.881}>
//         <mesh
//           geometry={nodes.Object_2.geometry}
//           material={materials["metals_shad.002"]}
//         />
//         <mesh
//           geometry={nodes.Object_3.geometry}
//           material={materials["metals_shad.003"]}
//         />
//         <mesh
//           geometry={nodes.Object_4.geometry}
//           material={materials.stratLow}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/public/model.gltf");


import React, { useRef, useMemo, Suspense } from "react";
import { useGLTF, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

// Loading component for showing progress
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export function ModelStrat(props) {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/3d/Strat/model.gltf");

  // Memoize geometries and materials
  const stratMeshes = useMemo(() => [
    { geometry: nodes.Object_2.geometry, material: materials["metals_shad.002"] },
    { geometry: nodes.Object_3.geometry, material: materials["metals_shad.003"] },
    { geometry: nodes.Object_4.geometry, material: materials.stratLow }
  ], [nodes, materials]);

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group rotation={[0.01, 0, 0]} scale={0.881}>
        {stratMeshes.map((mesh, index) => (
          <mesh key={index} geometry={mesh.geometry} material={mesh.material} />
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/3d/Strat/model.gltf");