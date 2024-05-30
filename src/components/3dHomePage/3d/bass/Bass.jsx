// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// export function Bass(props) {
//   const meshRef = useRef(null);
//   useFrame(() => (meshRef.current.rotation.y += 0.005));

//   const { nodes, materials } = useGLTF("/3d/bass/model.gltf");
//   return (
//     <group ref={meshRef} {...props} dispose={null}>
//       <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <mesh
//             geometry={nodes.defaultMaterial.geometry}
//             material={materials.M_string}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_1.geometry}
//             material={materials.M_Metal}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_2.geometry}
//             material={materials.M_Body}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/bass/model.gltf");



import React, { useRef, useMemo, Suspense } from "react";
import { useGLTF, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

// Loading component for showing progress
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export function Bass(props) {
  const meshRef = useRef(null);
  useFrame(() => (meshRef.current.rotation.y += 0.005));

  const { nodes, materials } = useGLTF("/3d/bass/model.gltf");

  // Memoize geometries and materials
  const bassMeshes = useMemo(() => [
    { geometry: nodes.defaultMaterial.geometry, material: materials.M_string },
    { geometry: nodes.defaultMaterial_1.geometry, material: materials.M_Metal },
    { geometry: nodes.defaultMaterial_2.geometry, material: materials.M_Body }
  ], [nodes, materials]);

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {bassMeshes.map((mesh, index) => (
            <mesh key={index} geometry={mesh.geometry} material={mesh.material} />
          ))}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/3d/bass/model.gltf");