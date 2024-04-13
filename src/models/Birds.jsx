import birdScene from '../assets/3d/birds.glb'
import { useGLTF } from '@react-three/drei'
const Birds = () => {
    const {scene, _ } = useGLTF(birdScene);
    
    return (
        <mesh position={[-2,1,-3]} rotation={[0,-1.3,0]}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Birds