import React, { Suspense, useState } from 'react';
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader';
import Island from '../models/island';
import Sky  from '../models/Sky';
import Character from '../models/Character';
import Balloon from '../models/Balloon';

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const adjustIslandForScreenSize = () => {
        let screenScale = null; 
        let screenPosition = [0,-6.5, -43];
        let rotation = [0.1,0.4,0]
        if(window.innerWidth < 768){
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation]
    }
    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition ;
        if(window.innerWidth < 768){
            screenScale = [0.1, 0.1, 0.1];
            screenPosition = [0, 0, 0]
        } else {
            screenScale = [0.22,0.22,0.22];
            screenPosition = [0,0,-3]
        }

        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    
    return (
    <section className='w-full h-screen relative'>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            lol
        </div> */}

        <Canvas className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near : 0.1, far: 1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[5,1,1]} intensity={2}/>
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor="#b1e1ff" groudColor="#000000" intensity={1}/>
                
                <Sky />
                <Island
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Character
                    position={[0,3,-4]}
                    scale={[0.1,0.1,0.1]}
                />
                <Balloon 
                    position={planePosition}
                    scale={planeScale}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home