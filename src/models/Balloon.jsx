import React from 'react'
import balloonScene from '../assets/3d/hot_air_balloon_-_low_poly.glb'
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