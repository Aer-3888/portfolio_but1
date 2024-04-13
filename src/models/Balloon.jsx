import React from 'react'
import balloonScene from '../assets/3d/balloon.glb'
import { useGLTF } from '@react-three/drei'
const Balloon = ({ isRotating, ...props }) => {
    const  {scene, animations} = useGLTF(balloonScene);
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Balloon