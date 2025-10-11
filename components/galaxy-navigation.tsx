"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Sphere, Html, Ring } from "@react-three/drei"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import * as THREE from "three"

interface PlanetProps {
  position: [number, number, number]
  size: number
  color: string
  label: string
  route: string
  rotationSpeed?: number
  hasRings?: boolean
  surfaceDetail?: boolean
  atmosphereColor?: string
}

function Atmosphere({ size, color }: { size: number; color: string }) {
  return (
    <Sphere args={[size * 1.15, 32, 32]}>
      <meshBasicMaterial color={color} transparent opacity={0.08} side={THREE.BackSide} />
    </Sphere>
  )
}

function OrbitPath({ radius }: { radius: number }) {
  const points = []
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
    </line>
  )
}

function Planet({
  position,
  size,
  color,
  label,
  route,
  rotationSpeed = 0.01,
  hasRings = false,
  surfaceDetail = false,
  atmosphereColor,
}: PlanetProps) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
      meshRef.current.rotation.x += rotationSpeed * 0.1
    }
    if (groupRef.current) {
      const orbitSpeed = 0.1 / Math.sqrt(position[0] ** 2 + position[2] ** 2)
      groupRef.current.rotation.y += orbitSpeed * 0.01
    }
  })

  const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2)

  return (
    <>
      <OrbitPath radius={radius} />
      <group ref={groupRef}>
        <group position={position}>
          <Sphere
            ref={meshRef}
            args={[size, 128, 128]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => router.push(route)}
            scale={hovered ? 1.15 : 1}
          >
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={hovered ? 0.5 : 0.15}
              roughness={surfaceDetail ? 0.95 : 0.7}
              metalness={surfaceDetail ? 0.05 : 0.2}
              bumpScale={surfaceDetail ? 0.08 : 0}
            />
          </Sphere>

          {atmosphereColor && <Atmosphere size={size} color={atmosphereColor} />}

          {hasRings && (
            <>
              <Ring args={[size * 1.6, size * 2.2, 128]} rotation={[Math.PI / 2.3, 0, 0]}>
                <meshStandardMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} roughness={0.9} />
              </Ring>
              <Ring args={[size * 2.3, size * 2.6, 128]} rotation={[Math.PI / 2.3, 0, 0]}>
                <meshStandardMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} roughness={0.9} />
              </Ring>
            </>
          )}

          {hovered && (
            <Html center distanceFactor={10}>
              <div className="glass-card px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap pointer-events-none">
                {label}
              </div>
            </Html>
          )}

          <pointLight color={color} intensity={hovered ? 2 : 0.8} distance={10} decay={2} />
        </group>
      </group>
    </>
  )
}

function Sun() {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)
  const coronaRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.002
      const pulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.05 + 1
      coronaRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <Sphere
        ref={meshRef}
        args={[1.8, 128, 128]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => router.push("/")}
        scale={hovered ? 1.08 : 1}
      >
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FF8C00"
          emissiveIntensity={hovered ? 2.5 : 2}
          roughness={0.2}
          metalness={0}
        />
      </Sphere>

      <Sphere args={[2.1, 64, 64]}>
        <meshBasicMaterial color="#FFB347" transparent opacity={0.25} side={THREE.BackSide} />
      </Sphere>

      <Sphere ref={coronaRef} args={[2.5, 64, 64]}>
        <meshBasicMaterial color="#FFA500" transparent opacity={0.12} side={THREE.BackSide} />
      </Sphere>

      <Sphere args={[3, 32, 32]}>
        <meshBasicMaterial color="#FF6B00" transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>

      {hovered && (
        <Html center distanceFactor={10}>
          <div className="glass-card px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap pointer-events-none">
            Home
          </div>
        </Html>
      )}

      <pointLight color="#FFA500" intensity={8} distance={40} decay={1.2} />
    </group>
  )
}

function Avatar() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3
      meshRef.current.rotation.y += 0.02
    }
    if (glowRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
      glowRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group position={[8, 2, 0]}>
      <Sphere ref={meshRef} args={[0.5, 64, 64]}>
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>
      <Sphere ref={glowRef} args={[0.65, 32, 32]}>
        <meshBasicMaterial color="#00D9FF" transparent opacity={0.15} />
      </Sphere>
      <pointLight color="#00D9FF" intensity={2} distance={5} decay={2} />
    </group>
  )
}

function SpaceDust() {
  const count = 2000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100

    const color = new THREE.Color()
    color.setHSL(Math.random() * 0.3 + 0.5, 0.5, 0.5)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export function GalaxyNavigation() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 8, 18], fov: 55 }} shadows>
        <color attach="background" args={["#000000"]} />

        <ambientLight intensity={0.08} />
        <directionalLight position={[0, 0, 5]} intensity={0.2} />

        <Stars radius={200} depth={100} count={12000} factor={7} saturation={0} fade speed={0.3} />
        <SpaceDust />

        <Sun />

        <Planet
          position={[4, 0, 0]}
          size={0.7}
          color="#4A90E2"
          label="About Me"
          route="/about"
          rotationSpeed={0.015}
          surfaceDetail={true}
          atmosphereColor="#6BB6FF"
        />

        <Planet
          position={[-5, 0.5, 2]}
          size={0.9}
          color="#E74C3C"
          label="Projects"
          route="/projects"
          rotationSpeed={0.012}
          surfaceDetail={true}
          atmosphereColor="#FF6B5B"
        />

        <Planet
          position={[0, -1, 6]}
          size={0.75}
          color="#F39C12"
          label="Hobbies"
          route="/hobbies"
          rotationSpeed={0.018}
          hasRings={true}
          atmosphereColor="#FFB84D"
        />

        <Planet
          position={[-4, 1, -5]}
          size={0.6}
          color="#9B59B6"
          label="Vlog"
          route="/vlog"
          rotationSpeed={0.02}
          surfaceDetail={true}
          atmosphereColor="#B57EDC"
        />

        <Avatar />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={12}
          maxDistance={35}
          autoRotate
          autoRotateSpeed={0.2}
          dampingFactor={0.03}
          enableDamping
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
