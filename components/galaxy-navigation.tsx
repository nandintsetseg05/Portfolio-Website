"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

/*
 * Each flower has a fixed position on screen, a scroll threshold at which
 * it starts blooming, a max size, and a rotation direction.
 * Flowers bloom sequentially as the user scrolls down the page.
 */
interface FlowerConfig {
  id: number
  /** CSS position (%) */
  x: number
  y: number
  /** Scroll progress [0-1] at which the bloom begins */
  bloomStart: number
  /** How much scroll range the bloom takes to complete */
  bloomRange: number
  /** Maximum scale when fully open */
  maxScale: number
  /** Size of the flower container in px */
  size: number
  /** Rotation in degrees at full bloom */
  rotation: number
  /** Slight horizontal sway amplitude in px */
  swayAmp: number
  /** Sway frequency multiplier */
  swayFreq: number
  /** Glow size in px */
  glowSize: number
}

const FLOWERS: FlowerConfig[] = [
  // ── Centre hero flower (largest, blooms first) ──
  { id: 0, x: 50, y: 42, bloomStart: 0.0,  bloomRange: 0.35, maxScale: 1.0,  size: 600, rotation: 15,  swayAmp: 0,   swayFreq: 0,   glowSize: 500 },
  // ── Left cluster ──
  { id: 1, x: 15, y: 30, bloomStart: 0.10, bloomRange: 0.30, maxScale: 0.55, size: 400, rotation: -20, swayAmp: 30,  swayFreq: 3,   glowSize: 280 },
  { id: 2, x: 8,  y: 65, bloomStart: 0.25, bloomRange: 0.30, maxScale: 0.45, size: 340, rotation: 25,  swayAmp: 20,  swayFreq: 2.5, glowSize: 220 },
  // ── Right cluster ──
  { id: 3, x: 85, y: 35, bloomStart: 0.15, bloomRange: 0.30, maxScale: 0.50, size: 380, rotation: 30,  swayAmp: 25,  swayFreq: 2.8, glowSize: 260 },
  { id: 4, x: 90, y: 70, bloomStart: 0.30, bloomRange: 0.30, maxScale: 0.40, size: 320, rotation: -15, swayAmp: 20,  swayFreq: 3.2, glowSize: 200 },
  // ── Scattered accent flowers (smaller, bloom later) ──
  { id: 5, x: 30, y: 75, bloomStart: 0.35, bloomRange: 0.30, maxScale: 0.35, size: 280, rotation: 40,  swayAmp: 15,  swayFreq: 2,   glowSize: 180 },
  { id: 6, x: 70, y: 20, bloomStart: 0.20, bloomRange: 0.30, maxScale: 0.38, size: 300, rotation: -35, swayAmp: 18,  swayFreq: 2.6, glowSize: 200 },
  { id: 7, x: 55, y: 80, bloomStart: 0.40, bloomRange: 0.30, maxScale: 0.30, size: 260, rotation: 20,  swayAmp: 12,  swayFreq: 3.5, glowSize: 160 },
]

export function GalaxyNavigation() {
  const containerRef = useRef<HTMLDivElement>(null)

  /* Build refs array for each flower + its glow */
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

          /* How far into THIS flower's bloom are we? 0 = hasn't started, 1 = fully open */
          const localP = Math.max(0, Math.min((progress - f.bloomStart) / f.bloomRange, 1))

          /* ── Scale: tiny bud -> full bloom with ease-out curve ── */
          const easedP = 1 - Math.pow(1 - localP, 3) // cubic ease-out
          const scale  = 0.08 + easedP * (f.maxScale - 0.08)

          /* ── Rotation: gradual twist as it blooms ── */
          const rotate = easedP * f.rotation

          /* ── Horizontal sway (sinusoidal) ── */
          const sway = f.swayAmp > 0
            ? Math.sin(progress * Math.PI * f.swayFreq) * f.swayAmp * easedP
            : 0

          /* ── Opacity: quick fade-in at bloom start ── */
          const opacity = Math.min(localP / 0.15, 1)

          /* ── Brightness: dim when closed, bright when open ── */
          const brightness = 0.3 + easedP * 0.9

          /* ── Drop shadow intensity grows with bloom ── */
          const shadowSize  = Math.round(easedP * 50)
          const shadowAlpha = (easedP * 0.6).toFixed(2)

          el.style.transform =
            `translate(${sway}px, 0) scale(${scale}) rotate(${rotate}deg)`
          el.style.opacity = String(opacity)
          el.style.filter  =
            `brightness(${brightness}) drop-shadow(0 0 ${shadowSize}px rgba(74,127,220,${shadowAlpha}))`

          if (glow) {
            glow.style.opacity   = String(opacity * 0.7)
            glow.style.transform = `scale(${0.4 + easedP * 0.6})`
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
                rgba(74,127,220,0.18) 0%,
                rgba(40,80,160,0.10) 40%,
                transparent 70%
              )`,
              filter: "blur(25px)",
              opacity: 0,
              pointerEvents: "none",
            }}
          />

          {/* Flower image */}
          <div
            ref={(el) => { flowerRefs.current[i] = el }}
            style={{
              width:  `${f.size}px`,
              height: `${f.size}px`,
              transform: "scale(0.08) rotate(0deg)",
              transformOrigin: "center center",
              opacity: 0,
              mixBlendMode: "screen",
              pointerEvents: "none",
              willChange: "transform, opacity, filter",
              transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.15s ease, filter 0.15s ease",
            }}
          >
            <Image
              src="/images/lily.png"
              alt=""
              fill
              sizes={`${f.size}px`}
              style={{ objectFit: "contain" }}
              priority={i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
