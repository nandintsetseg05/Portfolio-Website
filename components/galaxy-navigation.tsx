"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef, useMemo, useState, useEffect } from "react"
import * as THREE from "three"

function NeuralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const { camera } = useThree()

  const particleCount = 800

  // Mouse tracking
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  useEffect(() => {
    const handleMouse = (e: PointerEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener("pointermove", handleMouse)
    return () => window.removeEventListener("pointermove", handleMouse)
  }, [])

  // Scroll tracking
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create a round gradient texture for particles
  const particleTexture = useMemo(() => {
    const size = 64
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    )
    gradient.addColorStop(0, "rgba(255,255,255,1)")
    gradient.addColorStop(0.2, "rgba(173,216,230,0.8)") // light blue
    gradient.addColorStop(0.4, "rgba(100,170,255,0.5)")
    gradient.addColorStop(1, "rgba(0,0,0,0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  // Generate particles and lines
  const { positions, colors, linePositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const points: THREE.Vector3[] = []

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const radius = Math.random() * 40
      const angle = Math.random() * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = (Math.random() - 0.5) * 10
      const z = Math.sin(angle) * radius

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z

      points.push(new THREE.Vector3(x, y, z))

      const color = new THREE.Color()
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6)

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    const lineArray: number[] = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].distanceTo(points[j])
        if (dist < 6) {
          lineArray.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z
          )
        }
      }
    }

    return { positions, colors, linePositions: new Float32Array(lineArray) }
  }, [])

  // Smooth rotation target
  const targetRotation = useRef({ x: 0, y: 0 })
  const currentRotation = useRef({ x: 0, y: 0 })

  useFrame(() => {
    // Mouse-follow rotation
    targetRotation.current.x = -(mousePos.y - 0.5) * Math.PI
    targetRotation.current.y = (mousePos.x - 0.5) * Math.PI

    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.15
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.15

    if (pointsRef.current) {
      pointsRef.current.rotation.x = currentRotation.current.x
      pointsRef.current.rotation.y = currentRotation.current.y

      // Scroll zoom
      camera.position.z = 60 - scrollY * 0.05
    }

    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.copy(pointsRef.current.rotation)
    }
  })

  return (
    <>
      {/* Round flowing particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={particleCount}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.4} // slightly bigger for glow
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={particleTexture} // round gradient texture
        />
      </points>

      {/* Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#6aa6ff"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </>
  )
}

export function GalaxyNavigation() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 60], fov: 70 }}>
        <color attach="background" args={["#000000"]} />

        <Stars
          radius={300}
          depth={100}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <NeuralGalaxy />
      </Canvas>
    </div>
  )
}