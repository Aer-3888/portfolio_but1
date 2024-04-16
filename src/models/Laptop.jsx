import React from 'react'
import laptopScene from '../assets/3d/laptop.glb'
import { useGLTF } from '@react-three/drei'
const Laptop = () => {
    const {scene, animations} = useGLTF(laptopScene)
  return (
    <mesh scale={[0.05, 0.05, 0.05]} rotation={[1,0,0]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Laptop