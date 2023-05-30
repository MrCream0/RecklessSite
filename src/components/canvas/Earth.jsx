import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

import * as THREE from "three";


const Earth = () => {
  const gltf = useGLTF("./models/Discord.glb");

  useMemo(() => {
    const whiteMaterial = new THREE.MeshBasicMaterial({ color: "#7289da" });

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = whiteMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} scale={0.05} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;