import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Euler, Vector3 } from "three";

interface PlaneProps {
  isRotating: boolean;
  scale?: Vector3 | undefined;
  position?: Vector3 | undefined;
  rotation?: Euler | undefined;
}

const Plane = ({ isRotating, scale, position, rotation }: PlaneProps) => {
  const ref = useRef<any>();
  const { scene, animations } = useGLTF("/plane.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh scale={scale} rotation={rotation} position={position} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
