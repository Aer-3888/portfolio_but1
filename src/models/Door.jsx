import React from 'react'
import doorScene from '../assets/3d/medieval_door.glb'
import { useGLTF } from '@react-three/drei'

const Door = () => {
    const {scene, animations} = useGLTF(doorScene)
  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default Door