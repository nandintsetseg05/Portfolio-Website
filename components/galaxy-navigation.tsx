"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function AnimatedGalaxy() {
  const particlesRef = useRef<THREE.Points>(null)
  const particles2Ref = useRef<THREE.Points>(null)

  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext("2d")!

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)")
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.4)")
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)

    return new THREE.CanvasTexture(canvas)
  }, [])

  // Create galaxy particles
  const particleCount = 3000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    // Create spiral galaxy shape
    const radius = Math.random() * 50 + 10
    const angle = Math.random() * Math.PI * 2
    const arm = Math.floor(Math.random() * 3) // 3 spiral arms

    positions[i3] = Math.cos(angle + arm * Math.PI * 0.66) * radius + (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 5
    positions[i3 + 2] = Math.sin(angle + arm * Math.PI * 0.66) * radius + (Math.random() - 0.5) * 10

    // Purple/blue gradient colors
    const color = new THREE.Color()
    color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3)
    colors[i3] = color.r
    colors[i3 + 1] = color.g
    colors[i3 + 2] = color.b
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
    if (particles2Ref.current) {
      particles2Ref.current.rotation.y = -state.clock.elapsedTime * 0.03
      particles2Ref.current.rotation.z = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <>
      {/* Main galaxy */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.5}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={starTexture}
        />
      </points>

      {/* Secondary rotating galaxy for depth */}
      <points ref={particles2Ref} position={[0, 0, -20]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.3}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={starTexture}
        />
      </points>
    </>
  )
}

export function GalaxyNavigation() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={["#000000"]} />

        {/* Background stars that drift slowly */}
        <Stars radius={300} depth={200} count={8000} factor={6} saturation={0.1} fade speed={1} />

        <AnimatedGalaxy />
      </Canvas>
    </div>
  )
}
