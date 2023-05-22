'use client'

import React, { forwardRef, Suspense, useImperativeHandle, useRef, FC } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

type TCommon = {
  color?: string
}

interface IView {
  children: React.ReactNode
  className: string
  orbit?: boolean
}

export const Common: FC<TCommon> = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    {/* @ts-ignore */}
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

const View: FC<IView> = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
