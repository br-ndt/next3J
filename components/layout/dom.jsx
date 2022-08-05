import useStore from "../../modules/zustand/store";
import { useEffect, useRef } from "react";

export default function Dom({ children }) {
  const ref = useRef(null);

  return (
    <div
      className="dom"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden",
        width: "100%"
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}
