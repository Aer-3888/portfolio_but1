import { useEffect, useRef, useState } from 'react';
import balloonScene from '../assets/3d/hot_air_balloon_-_low_poly.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Balloon = ({ isRotating, ...props }) => {
    const balloonRef = useRef();
    const { scene, _ } = useGLTF(balloonScene);
    const [time, setTime] = useState(0);
    const amplitude = 0.25; // Adjust this value to change the float height
    const speed = 0.01; // Adjust this value to change the float speed

    useFrame(() => {
        // Update time
        setTime((prev) => (prev + speed) % (Math.PI * 2));
        // Update position
        balloonRef.current.position.y = Math.sin(time) * amplitude;
    });

    return (
        <mesh ref={balloonRef} {...props}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Balloon;
