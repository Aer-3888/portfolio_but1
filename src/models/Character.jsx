import React, { useEffect, useRef, useState } from 'react';
import characterScene from '../assets/3d/skelleton_character.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Character = ({ isRotating, ...props }) => {
    const characterRef = useRef();
    const { scene, animations } = useGLTF(characterScene);
    const [time, setTime] = useState(0);
    const amplitude = 0.25; // Adjust this value to change the float height
    const speed = 0.01; // Adjust this value to change the float speed

    useFrame(() => {
        // Update time
        setTime((prev) => (prev + speed) % (Math.PI * 2));
        // Update position
        characterRef.current.position.y = Math.sin(time) * amplitude;
    });

    return (
        <mesh ref={characterRef} {...props}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Character;
