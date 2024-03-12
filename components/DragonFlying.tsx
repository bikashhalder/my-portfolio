import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const DragonFlying = () => {
  const birdRef = useRef<any>();
  const { scene, animations } = useGLTF("/dragonFlying.glb");
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, []);

  useFrame(() => {
    // move the bird like a sin wave
    birdRef.current.position.x -= 0.01;
  });

  return (
    <mesh
      position={[6, 4, -1]}
      scale={[0.5, 0.5, 0.5]}
      ref={birdRef}
      rotation={[4, 5, 3.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default DragonFlying;
