import React from 'react'
import characterScene from '../assets/3d/fox.glb'
import { useGLTF } from '@react-three/drei'
const Character = ({ isRotating, ...props }) => {
    const  {scene, animations} = useGLTF(characterScene)
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Character