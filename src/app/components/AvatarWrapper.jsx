'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { Avatar2 } from './Avatar2'
export default function AvatarWrapper() {

  const { animation } = useControls({
    animation:{
      value: "Look Around",
      options: [ "Look Around", "Falling Idle" ]
    }
    
  })
  return (
       <Canvas 
        shadows
        gl={{ alpha: true }}
        camera={{ position: [0, -0.5, 3], fov: 30 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
      }}>
      <ambientLight intensity={0.6}/>∫
      <directionalLight position={[1, 2, 3]} />
      <Environment preset="sunset" background={false} />
      <OrbitControls enableZoom={false}/>
      <group position={[0.7, -0.5, 0]} scale={0.5}>
        <Avatar2 animation={animation}/>
      </group>
    </Canvas>
  )
}