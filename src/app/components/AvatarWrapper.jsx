'use client'

import { ContactShadows, Environment, OrbitControls, Sky } from '@react-three/drei'
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
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0.5, 3], fov: 30 }}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 0,
      }}>
      <ambientLight intensity={0.4}/>∫
      <Sky/>
      <directionalLight position={[0, 5, 0]} castShadow intensity={2}/>
      <Environment preset="sunset" background={false} />
      <OrbitControls enableZoom={false}/>
      <group position={[0.7, -0.5, 0]} scale={0.5}>
        <ContactShadows opacity={2} scale={10} blur={0.7} far={10} resolution={256} color="#000000" />
        <Avatar2 animation={animation}/>
        <mesh scale={5} rotation-x={-Math.PI / 2} position-y={-0.01} receiveShadow>
          <planeGeometry/>
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </Canvas>
  )
}