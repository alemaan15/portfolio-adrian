'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './Avatar'

export default function AvatarWrapper() {
  return (
    <div style={{ width: "300px", height: "400px" }}>
       <Canvas 
        shadows
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 4.5], fov: 30 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
      }}>
      <ambientLight intensity={1}/>∫
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls enableZoom={false} />
      <group position={[0, -1, 0]} scale={0.6}>
        <Avatar />
      </group>
    </Canvas>
    </div>
   
  )
}