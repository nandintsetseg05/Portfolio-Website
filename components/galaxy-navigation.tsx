"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function GalaxyNavigation() {
  const lilyRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const outerGlow = useRef<HTMLDivElement>(null)

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

        /* ── Bloom: starts tiny, grows to full size, then slightly larger ──
           0%   scroll -> scale 0.18  (closed bud feel)
           40%  scroll -> scale 1.0   (fully open)
           100% scroll -> scale 1.15  (slightly larger at bottom)
        */
        const scale =
          progress < 0.40
            ? 0.18 + progress * (1.0 - 0.18) / 0.40
            : 1.0 + (progress - 0.40) * (0.15 / 0.60)

        /* ── Slow rotation: 0 -> 45deg over full scroll ── */
        const rotate = progress * 45

        /* ── Left/right sinusoidal drift based on scroll progress ──
           Creates a gentle swaying motion as you scroll through sections
           Amplitude of ~120px, completing ~2 full waves over the page
        */
        const horizontalOffset = Math.sin(progress * Math.PI * 4) * 120 * Math.min(progress / 0.15, 1)

        /* ── Vertical drift: lily slowly moves up as you scroll ── */
        const verticalOffset = progress * -80

        /* ── Brightness: dim at start, brightens as it blooms ── */
        const brightness = 0.4 + progress * 0.8 // 0.4 -> 1.2

        /* ── Opacity: fades in quickly, stays fully visible ── */
        const opacity = Math.min(progress / 0.25, 1)

        if (lilyRef.current) {
          lilyRef.current.style.transform =
            `translate(calc(-50% + ${horizontalOffset}px), calc(-50% + ${verticalOffset}px)) scale(${scale}) rotate(${rotate}deg)`
          lilyRef.current.style.opacity = String(opacity)
          lilyRef.current.style.filter =
            `brightness(${brightness}) drop-shadow(0 0 ${Math.round(progress * 60)}px rgba(74,127,167,${(progress * 0.7).toFixed(2)}))`
        }

        /* Glow follows the lily and grows with it */
        if (glowRef.current) {
          glowRef.current.style.opacity = String(opacity * 0.9)
          glowRef.current.style.transform =
            `translate(calc(-50% + ${horizontalOffset}px), calc(-50% + ${verticalOffset}px)) scale(${0.3 + scale * 0.7})`
        }

        if (outerGlow.current) {
          outerGlow.current.style.opacity =
            String(Math.min(progress / 0.4, 1) * 0.5)
          outerGlow.current.style.transform =
            `translate(calc(-50% + ${horizontalOffset * 0.5}px), calc(-50% + ${verticalOffset * 0.5}px))`
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // set initial state
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">

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

      {/* ── Wide outer atmospheric glow ── */}
      <div
        ref={outerGlow}
        className="absolute"
        style={{
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center,
            rgba(74,127,167,0.20) 0%,
            rgba(26,61,99,0.12)   40%,
            transparent           70%
          )`,
          filter: "blur(60px)",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s ease, transform 0.15s ease-out",
        }}
      />

      {/* ── Close-up glow ring ── */}
      <div
        ref={glowRef}
        className="absolute"
        style={{
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.3)",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center,
            rgba(179,207,229,0.18) 0%,
            rgba(74,127,167,0.14)  35%,
            transparent            65%
          )`,
          filter: "blur(30px)",
          opacity: 0,
          pointerEvents: "none",
          animation: "lilyGlowPulse 5s ease-in-out infinite",
        }}
      />

      {/* ── Lily image ── */}
      {/* mix-blend-mode: screen makes the black bg invisible */}
      <div
        ref={lilyRef}
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.18) rotate(0deg)",
          transformOrigin: "center center",
          width: "700px",
          height: "700px",
          opacity: 0,
          mixBlendMode: "screen",
          pointerEvents: "none",
          willChange: "transform, opacity, filter",
          transition: "transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.12s ease, filter 0.12s ease",
        }}
      >
        <Image
          src="/images/lily.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <style>{`
        @keyframes lilyGlowPulse {
          0%, 100% { opacity: var(--glow-opacity, 0); filter: blur(30px); }
          50%       { opacity: calc(var(--glow-opacity, 0) * 1.15); filter: blur(36px); }
        }
      `}</style>
    </div>
  )
}
