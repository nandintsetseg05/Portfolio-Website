"use client"

import { useEffect, useRef } from "react"

/* ────────────────────────────────────────────────────────────────────────────
 * SVG Lily Flower — pure code, no images.
 *
 * Draws a 6-petal lily with curved petals, stamens, and a stem.
 * Each instance gets a unique gradient ID so multiple flowers on the
 * same page don't clash.
 * ──────────────────────────────────────────────────────────────────────────── */
function SvgLily({ id }: { id: number }) {
  const gid = `lily-${id}`

  /* Six petals evenly spaced at 60° intervals.
     Each petal is a cubic Bezier path that fans out from the centre. */
  const petals: string[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 90) * (Math.PI / 180)
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    /* Petal tip distance from center */
    const tipLen = 160
    /* Control-point spread */
    const cpLen = 130
    const cpSpread = 55

    const tx = 200 + cos * tipLen
    const ty = 220 + sin * tipLen

    /* Two control points on either side of the petal centre line */
    const perpCos = -sin
    const perpSin = cos
    const cp1x = 200 + cos * cpLen + perpCos * cpSpread
    const cp1y = 220 + sin * cpLen + perpSin * cpSpread
    const cp2x = 200 + cos * cpLen - perpCos * cpSpread
    const cp2y = 220 + sin * cpLen - perpSin * cpSpread

    petals.push(
      `M 200 220 Q ${cp1x} ${cp1y} ${tx} ${ty} Q ${cp2x} ${cp2y} 200 220 Z`
    )
  }

  /* Three inner/accent petals rotated 30° from the main ones (smaller) */
  const innerPetals: string[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 60) * (Math.PI / 180)
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const tipLen = 100
    const cpLen = 80
    const cpSpread = 30
    const perpCos = -sin
    const perpSin = cos
    const tx = 200 + cos * tipLen
    const ty = 220 + sin * tipLen
    const cp1x = 200 + cos * cpLen + perpCos * cpSpread
    const cp1y = 220 + sin * cpLen + perpSin * cpSpread
    const cp2x = 200 + cos * cpLen - perpCos * cpSpread
    const cp2y = 220 + sin * cpLen - perpSin * cpSpread
    innerPetals.push(
      `M 200 220 Q ${cp1x} ${cp1y} ${tx} ${ty} Q ${cp2x} ${cp2y} 200 220 Z`
    )
  }

  /* Stamens — thin lines radiating from the centre with small circles at tips */
  const stamens: Array<{ x1: number; y1: number; x2: number; y2: number; cx: number; cy: number }> = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 90 + 30) * (Math.PI / 180)
    const len = 70
    const x2 = 200 + Math.cos(angle) * len
    const y2 = 220 + Math.sin(angle) * len
    stamens.push({ x1: 200, y1: 220, x2, y2, cx: x2 + Math.cos(angle) * 6, cy: y2 + Math.sin(angle) * 6 })
  }

  return (
    <svg
      viewBox="0 0 400 440"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        {/* Main petal gradient: deep blue → electric blue → cyan at tip */}
        <radialGradient id={`${gid}-petal`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#a0d8ff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#4da6ff" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#2563eb" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.7" />
        </radialGradient>

        {/* Inner petal gradient: lighter, more cyan */}
        <radialGradient id={`${gid}-inner`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </radialGradient>

        {/* Centre glow */}
        <radialGradient id={`${gid}-center`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#bfdbfe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>

        {/* Stem gradient */}
        <linearGradient id={`${gid}-stem`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#0d3321" />
        </linearGradient>

        {/* Petal vein filter — subtle inner lines */}
        <filter id={`${gid}-glow`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Stem */}
      <path
        d="M 200 220 Q 195 310 190 400 Q 188 420 192 440"
        fill="none"
        stroke={`url(#${gid}-stem)`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Leaves on stem */}
      <path
        d="M 195 310 Q 160 290 140 310 Q 165 305 195 310"
        fill="#15803d"
        opacity="0.7"
      />
      <path
        d="M 192 350 Q 230 335 250 350 Q 225 340 192 350"
        fill="#15803d"
        opacity="0.6"
      />

      {/* Outer petals */}
      <g filter={`url(#${gid}-glow)`}>
        {petals.map((d, i) => (
          <path
            key={`outer-${i}`}
            d={d}
            fill={`url(#${gid}-petal)`}
            stroke="rgba(125,211,252,0.3)"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Petal vein lines (decorative curves on each petal) */}
      {petals.map((_, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180)
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const mx = 200 + cos * 80
        const my = 220 + sin * 80
        const ex = 200 + cos * 145
        const ey = 220 + sin * 145
        return (
          <line
            key={`vein-${i}`}
            x1={200 + cos * 20}
            y1={220 + sin * 20}
            x2={ex}
            y2={ey}
            stroke="rgba(191,219,254,0.25)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        )
      })}

      {/* Inner accent petals */}
      {innerPetals.map((d, i) => (
        <path
          key={`inner-${i}`}
          d={d}
          fill={`url(#${gid}-inner)`}
          opacity="0.7"
        />
      ))}

      {/* Stamens */}
      {stamens.map((s, i) => (
        <g key={`stamen-${i}`}>
          <line
            x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
            stroke="#bfdbfe"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <circle
            cx={s.cx} cy={s.cy} r="3"
            fill="#fbbf24"
            opacity="0.8"
          />
        </g>
      ))}

      {/* Centre glow circle */}
      <circle
        cx="200" cy="220" r="22"
        fill={`url(#${gid}-center)`}
      />
    </svg>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * Flower configuration — position, bloom timing, size, rotation, sway
 * ──────────────────────────────────────────────────────────────────────────── */
interface FlowerConfig {
  id: number
  x: number
  y: number
  bloomStart: number
  bloomRange: number
  maxScale: number
  size: number
  rotation: number
  swayAmp: number
  swayFreq: number
  glowSize: number
}

const FLOWERS: FlowerConfig[] = [
  { id: 0, x: 50, y: 42, bloomStart: 0.0,  bloomRange: 0.35, maxScale: 1.0,  size: 500, rotation: 15,  swayAmp: 0,   swayFreq: 0,   glowSize: 420 },
  { id: 1, x: 15, y: 30, bloomStart: 0.10, bloomRange: 0.30, maxScale: 0.55, size: 340, rotation: -20, swayAmp: 30,  swayFreq: 3,   glowSize: 240 },
  { id: 2, x: 8,  y: 65, bloomStart: 0.25, bloomRange: 0.30, maxScale: 0.45, size: 280, rotation: 25,  swayAmp: 20,  swayFreq: 2.5, glowSize: 200 },
  { id: 3, x: 85, y: 35, bloomStart: 0.15, bloomRange: 0.30, maxScale: 0.50, size: 320, rotation: 30,  swayAmp: 25,  swayFreq: 2.8, glowSize: 230 },
  { id: 4, x: 90, y: 70, bloomStart: 0.30, bloomRange: 0.30, maxScale: 0.40, size: 260, rotation: -15, swayAmp: 20,  swayFreq: 3.2, glowSize: 180 },
  { id: 5, x: 30, y: 75, bloomStart: 0.35, bloomRange: 0.30, maxScale: 0.35, size: 240, rotation: 40,  swayAmp: 15,  swayFreq: 2,   glowSize: 160 },
  { id: 6, x: 70, y: 20, bloomStart: 0.20, bloomRange: 0.30, maxScale: 0.38, size: 260, rotation: -35, swayAmp: 18,  swayFreq: 2.6, glowSize: 180 },
  { id: 7, x: 55, y: 80, bloomStart: 0.40, bloomRange: 0.30, maxScale: 0.30, size: 220, rotation: 20,  swayAmp: 12,  swayFreq: 3.5, glowSize: 150 },
]

/* ────────────────────────────────────────────────────────────────────────────
 * Main component
 * ──────────────────────────────────────────────────────────────────────────── */
export function GalaxyNavigation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const flowerRefs = useRef<(HTMLDivElement | null)[]>([])
  const glowRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = -1

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const scrollY = window.scrollY
        if (scrollY === lastScrollY) return
        lastScrollY = scrollY

        const maxScroll = document.body.scrollHeight - window.innerHeight
        const progress = Math.min(scrollY / Math.max(maxScroll, 1), 1)

        FLOWERS.forEach((f, i) => {
          const el   = flowerRefs.current[i]
          const glow = glowRefs.current[i]
          if (!el) return

          const localP = Math.max(0, Math.min((progress - f.bloomStart) / f.bloomRange, 1))
          const easedP = 1 - Math.pow(1 - localP, 3)
          const scale  = 0.08 + easedP * (f.maxScale - 0.08)
          const rotate = easedP * f.rotation

          const sway = f.swayAmp > 0
            ? Math.sin(progress * Math.PI * f.swayFreq) * f.swayAmp * easedP
            : 0

          const opacity    = Math.min(localP / 0.15, 1)
          const brightness = 0.3 + easedP * 0.9
          const shadowSize  = Math.round(easedP * 50)
          const shadowAlpha = (easedP * 0.6).toFixed(2)

          el.style.transform =
            `translate(${sway}px, 0) scale(${scale}) rotate(${rotate}deg)`
          el.style.opacity = String(opacity)
          el.style.filter  =
            `brightness(${brightness}) drop-shadow(0 0 ${shadowSize}px rgba(74,127,220,${shadowAlpha}))`

          if (glow) {
            glow.style.opacity   = String(opacity * 0.7)
            glow.style.transform = `translate(-50%, -50%) scale(${0.4 + easedP * 0.6})`
          }
        })
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">

      {/* ── Base navy gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 60% 0%,   oklch(0.30 0.09 235) 0%, transparent 55%),
            radial-gradient(ellipse at 0%   80%,  oklch(0.24 0.07 248) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, oklch(0.22 0.06 230) 0%, transparent 45%),
            oklch(0.20 0.05 240)
          `,
        }}
      />

      {/* ── Render each flower with its glow ── */}
      {FLOWERS.map((f, i) => (
        <div
          key={f.id}
          className="absolute"
          style={{
            left: `${f.x}%`,
            top:  `${f.y}%`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          {/* Glow behind flower */}
          <div
            ref={(el) => { glowRefs.current[i] = el }}
            style={{
              position: "absolute",
              top:  "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.4)",
              width:  `${f.glowSize}px`,
              height: `${f.glowSize}px`,
              borderRadius: "50%",
              background: `radial-gradient(ellipse at center,
                rgba(74,127,220,0.22) 0%,
                rgba(40,80,180,0.12) 40%,
                transparent 70%
              )`,
              filter: "blur(25px)",
              opacity: 0,
              pointerEvents: "none",
            }}
          />

          {/* SVG Lily flower */}
          <div
            ref={(el) => { flowerRefs.current[i] = el }}
            style={{
              width:  `${f.size}px`,
              height: `${f.size}px`,
              transform: "scale(0.08) rotate(0deg)",
              transformOrigin: "center center",
              opacity: 0,
              pointerEvents: "none",
              willChange: "transform, opacity, filter",
              transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.15s ease, filter 0.15s ease",
            }}
          >
            <SvgLily id={f.id} />
          </div>
        </div>
      ))}
    </div>
  )
}
