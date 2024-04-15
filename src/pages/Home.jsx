import React, { Suspense, useState } from 'react';
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader';
import Island2 from '../models/Island2';
import { Sky } from '@react-three/drei';
import Character from '../models/Character';
import Balloon from '../models/Balloon';
import HomeInfo from '../components/HomeInfo';
 

const Home = () => {
    const [currentStage, setCurrentStage] = useState(5);
    const [isRotating, setIsRotating] = useState(false);
    const adjustIslandForScreenSize = () => {
        let screenScale = null; 
        let screenPosition = [0,-6.5, -43];
        let rotation = [0.2,0.5,0]
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
            screenScale = [0.2, 0.2, 0.2];
            screenPosition = [0, 0, 0]
        } else {
            screenScale = [0.22,0.22,0.22];
            screenPosition = [0,0,0]
        }

        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();
    
    return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

        <Canvas className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near : 0.1, far: 1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[5,1,1]} intensity={2}/>
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor="#b1e1ff" groudColor="#000000" intensity={1}/>
                
                <Sky />
                <Island2
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Character
                    position={planePosition}
                    scale={[0.13,0.13,0.13]}

                />
                <Balloon
                    isRotating={isRotating}
                    position={planePosition}
                    scale={planeScale}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home