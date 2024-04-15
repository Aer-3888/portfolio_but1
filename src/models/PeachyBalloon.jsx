import React, { useEffect, useRef } from 'react'
import balloonScene from '../assets/3d/peachy_balloon_gift.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const PeachyBalloon = () => {
    const balloonRef = useRef()
    const {scene, animations } = useGLTF(balloonScene)
    const { actions } = useAnimations(animations, balloonRef)
    useEffect(() => {
        actions['Scene'].play();
    })
    
    return (
        <mesh ref={balloonRef} scale={[0.0007,0.0007,0.0007]} rotation={[0,0,0]}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default PeachyBalloon