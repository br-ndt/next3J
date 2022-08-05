import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { OrbitControls, Preload, Stats } from "@react-three/drei";

function Controls() {
  const control = useRef(null);
  return <OrbitControls ref={control} />;
}

export default function CanvasWrapper({ children }) {
  return (
    <>
      <Canvas
        mode="concurrent"
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <Stats />
        <Controls />
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
