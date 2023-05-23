import { useGLTF } from '@react-three/drei'

import * as THREE from 'three'
import Shader from '@/templates/Shader/Shader'
import type { GLTF } from 'three-stdlib'

const glassBackMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#0000ff'),
  metalness: 1,
  roughness: 0,

  side: THREE.BackSide,
  transparent: true,
  opacity: 0.3,
  envMapIntensity: 2,
  premultipliedAlpha: true,
  reflectivity: 1,
  shadowSide: THREE.FrontSide, // 그림자를
})

const glassFrontMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#0000ff'),
  metalness: 1,
  roughness: 0,
  side: THREE.FrontSide,

  transparent: true,
  opacity: 0.5,
  envMapIntensity: 8,
  premultipliedAlpha: true,
  reflectivity: 1,
  shadowSide: THREE.FrontSide, // 그림자를
})

type GLTFResult = GLTF & {
  nodes: {
    marble_bust_01: THREE.Mesh
  }
}

export function Statue(props) {
  const { nodes } = useGLTF('/models/statue.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.marble_bust_01.geometry}
        material={glassBackMaterial}
        scale={[3, 3, 3]}
        position={[0, 0, 0]}
        castShadow
      />
      <mesh
        geometry={nodes.marble_bust_01.geometry}
        material={glassFrontMaterial}
        scale={[3, 3, 3]}
        position={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/statue.glb')
