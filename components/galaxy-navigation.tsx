"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Sphere, Html } from "@react-three/drei"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface PlanetProps {
  position: [number, number, number]
  size: number
  color: string
  label: string
  route: string
  rotationSpeed?: number
}

function Planet({ position, size, color, label, route, rotationSpeed = 0.01 }: PlanetProps) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  return (
    <group position={position}>
      <Sphere
        args={[size, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => router.push(route)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.5}
          metalness={0.5}
        />
      </Sphere>

      {hovered && (
        <Html center distanceFactor={10}>
          <div className="glass-card px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap pointer-events-none">
            {label}
          </div>
        </Html>
      )}

      <pointLight color={color} intensity={hovered ? 2 : 1} distance={5} />
    </group>
  )
}

function Sun() {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  return (
    <group position={[0, 0, 0]}>
      <Sphere
        args={[1.5, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => router.push("/")}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={hovered ? 1.5 : 1}
          roughness={0.3}
          metalness={0.2}
        />
      </Sphere>

      {hovered && (
        <Html center distanceFactor={10}>
          <div className="glass-card px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap pointer-events-none">
            Home
          </div>
        </Html>
      )}

      <pointLight color="#FDB813" intensity={3} distance={20} />
    </group>
  )
}

function Avatar() {
  return (
    <group position={[8, 2, 0]}>
      <Sphere args={[0.5, 16, 16]}>
        <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.5} />
      </Sphere>
      <pointLight color="#00D9FF" intensity={1} distance={3} />
    </group>
  )
}

export function GalaxyNavigation() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Sun />

        <Planet position={[3, 0, 0]} size={0.6} color="#4A90E2" label="About Me" route="/about" />

        <Planet position={[-4, 0.5, 2]} size={0.8} color="#E74C3C" label="Projects" route="/projects" />

        <Planet position={[0, -1, 5]} size={0.7} color="#F39C12" label="Hobbies" route="/hobbies" />

        <Planet position={[-3, 1, -4]} size={0.5} color="#9B59B6" label="Vlog" route="/vlog" />

        <Avatar />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
