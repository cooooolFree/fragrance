import React, { Suspense, FC } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera, Environment } from '@react-three/drei'

interface ICommon {
  color?: string
}

export const Common: FC<ICommon> = ({ color = 'blue' }) => (
  <Suspense fallback={null}>
    <Environment files='/img/studio_small_09_1k.hdr' />
    {color && <color attach='background' args={[color]} />}
    <directionalLight
      position={[1, 10, 0]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-near={0.5}
      shadow-camera-far={50}
      shadow-camera-right={100}
      shadow-camera-top={100}
      shadow-camera-bottom={-100}
      shadow-radius={32}
      shadow-mapType={THREE.PCFSoftShadowMap}
      shadow-bias={-0.001} // 그림자가 객체에 붙어서 생기는 현상을 줄이기 위한 bias 설정
    />
    {/* @ts-ignore */}
    <PerspectiveCamera makeDefault fov={40} position={[0, 3, 5]} />
  </Suspense>
)
