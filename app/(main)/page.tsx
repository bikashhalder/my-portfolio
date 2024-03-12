"use client";
import { Island } from "@/components/Island";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import { Euler, Vector3 } from "three";
import Sky from "@/components/sky";
import Bird from "@/components/Bird";
import Plane from "@/components/Plane";
import DragonFlying from "@/components/DragonFlying";
import HomeInfo from "@/components/HomeInfo";
import Hireme from "@/components/Hireme";

const MainPage = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
      } else {
        screenScale = [1, 1, 1];
      }
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          {/* directional light represent sun light */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* ambient light illumunate light all equally to all the objects without casting shadow */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight groundColor='#000000' intensity={1} />

          <Bird />
          <DragonFlying />
          <Sky isRotating={isRotating} />
          <Island
            //@ts-ignore
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition as unknown as Vector3 | undefined}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale as unknown as Vector3 | undefined}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale as unknown as Vector3 | undefined}
            rotation={[0, 20.1, 0] as unknown as Euler | undefined}
            position={planePosition as unknown as Vector3 | undefined}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-0 right-0'>
        <Hireme />
      </div>
    </section>
  );
};

export default MainPage;
