import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ComputersModel = ({isMobile}) => {
  const computer = useGLTF('/models/logo.glb');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : .75}
        position={isMobile ? [0, -3, -2.2] : [0, 0, 0]}
        rotation={[0, 5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const  [isMobile, setisMobile] = useState(false); 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); // listener for mobile devices

    setisMobile(mediaQuery.matches); // set initial state 

    const handleMediaQueryChange = (event) => { //callback for changes to media query
      setisMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange); //callback listener for changes to media query
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); //drops listener when component unmounts
    }
  })


  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ComputersModel  isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
