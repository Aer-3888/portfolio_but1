
import { useEffect, useRef } from 'react';
import balloonScene from '../assets/3d/hot_air_balloon_-_low_poly.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Balloon = ({ isRotating, ...props }) => {
    const balloonRef = useRef()
    const  {scene, _} = useGLTF(balloonScene);
    
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Balloon