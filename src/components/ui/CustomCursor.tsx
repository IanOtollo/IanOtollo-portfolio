"use client"
import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`
      }
    }

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.12
      ring.y += (mouse.y - ring.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "52px"
        ringRef.current.style.height = "52px"
        ringRef.current.style.borderColor = "#C8A96E"
        ringRef.current.style.backgroundColor = "rgba(200,169,110,0.08)"
      }
      if (dotRef.current) {
        dotRef.current.style.width = "4px"
        dotRef.current.style.height = "4px"
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px"
        ringRef.current.style.height = "32px"
        ringRef.current.style.borderColor = "#888884"
        ringRef.current.style.backgroundColor = "transparent"
      }
      if (dotRef.current) {
        dotRef.current.style.width = "8px"
        dotRef.current.style.height = "8px"
      }
    }

    const bind = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        '[data-cursor="hover"], a, button'
      )
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
      return targets
    }

    window.addEventListener("mousemove", onMove)
    let targets = bind()

    // Re-bind on DOM mutations (route changes inject new links/buttons)
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
      targets = bind()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      observer.disconnect()
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-text-primary pointer-events-none"
        style={{ transition: "width 200ms ease, height 200ms ease" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-text-secondary pointer-events-none"
        style={{
          transition:
            "width 200ms ease, height 200ms ease, border-color 200ms ease, background-color 200ms ease",
        }}
      />
    </div>
  )
}
