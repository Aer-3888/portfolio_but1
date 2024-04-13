import React from 'react'
import characterScene from '../assets/3d/skelleton_character.glb'
import { useGLTF } from '@react-three/drei'
const character = () => {
    const {scene, _} = useGLTF(characterScene)
  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default character