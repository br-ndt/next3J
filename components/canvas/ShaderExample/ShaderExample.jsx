import * as THREE from "three";
import { useFrame, extend, MeshProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./shaders/shader.vert";
import fragment from "./shaders/shader.frag";

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.2, 0.025),
  },
  vertex,
  fragment
);

ColorShiftMaterial.key = THREE.MathUtils.generateUUID();

extend({ ColorShiftMaterial });

export default function ShaderExample(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    }
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2);
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
    </mesh>
  );
}
