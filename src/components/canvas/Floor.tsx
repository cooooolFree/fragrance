import * as THREE from 'three'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'

const material = new THREE.MeshPhysicalMaterial({
  side: THREE.DoubleSide,
  shadowSide: THREE.FrontSide,
})

const geometry = new THREE.CircleGeometry(1, 64)

export function Floor(props) {
  const [radius, setRadius] = useState(1)
  useFrame((_, delta) => {
    const scaleFactor = radius + delta * 0.1 // 스케일 팩터를 정의합니다. delta를 사용하여 스케일을 늘립니다.
    setRadius(scaleFactor)
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        position={[0, -0.1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        geometry={geometry}
        material={material}
        receiveShadow
      />
    </group>
  )
}
