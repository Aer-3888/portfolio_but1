import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
  const sky = useGLTF(skyScene)
  return (
    <mesh position={[1,1,1]} scale={[1,1,1]}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky