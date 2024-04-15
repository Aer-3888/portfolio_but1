import { useEffect, useRef } from 'react';
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
const Birds = () => {
    const birdRef = useRef()
    const {scene, animations } = useGLTF(birdScene);
    const { actions} = useAnimations(animations,birdRef)
    useEffect(() => {
        actions['Take 001'].play();
    })
    return (
        <mesh ref={birdRef} scale={[0.01,0.01,0.01]} position={[-3,1,-3]} rotation={[0,1,0]}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Birds