import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Statue(props) {
  const { scene } = useGLTF('/models/statue.glb')

  useFrame((_, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} scale={[5, 5, 5]} {...props} />
}
