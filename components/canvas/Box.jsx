import { useStore } from "../../modules/zustand/store";
import { A11y } from "@react-three/a11y";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls } from "leva";

export default function BoxComponent({ route }) {
  const { router } = useStore();
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const { scale } = useControls({ scale: 1 });

  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  );

  return (
    <>
      <A11y
        role="button"
        description={`Navigate to the next route ${route}`}
        activationMsg="Loading next route"
        actionCall={() => router.push(route)}
      >
        <mesh
          ref={mesh}
          onClick={() => router.push(route)}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          scale={hovered ? scale + scale * 0.1 : scale}
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color={route === "/" ? "orange" : "hotpink"} />
        </mesh>
      </A11y>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  );
}
