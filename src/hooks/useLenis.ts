"use client"
import { useEffect } from "react"
import type Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    let lenis: Lenis | undefined
    let frame = 0

    const initLenis = async () => {
      const LenisCtor = (await import("lenis")).default
      lenis = new LenisCtor({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis?.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    }

    void initLenis()

    return () => {
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])
}
