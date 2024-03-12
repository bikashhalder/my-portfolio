import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
  };
};

interface contactProps {
  currentAnimation: string;
}

type ActionName = "hit" | "idle" | "walk" | "walk.left";

export function Fox(props: JSX.IntrinsicElements["group"] & contactProps) {
  const { currentAnimation } = props;
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF("/fox.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation]?.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name='Object_7'
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
          userData={{ name: "Object_7" }}
        />
        <skinnedMesh
          name='Object_8'
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
          userData={{ name: "Object_8" }}
        />
        <skinnedMesh
          name='Object_9'
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
          userData={{ name: "Object_9" }}
        />
        <skinnedMesh
          name='Object_10'
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
          userData={{ name: "Object_10" }}
        />
        <skinnedMesh
          name='Object_11'
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
          userData={{ name: "Object_11" }}
        />
      </group>
    </group>
  );
}
