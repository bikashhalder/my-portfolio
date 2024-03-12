import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface SkyProps {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const ref = useRef<any>();
  const sky = useGLTF("/sky.glb");

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
