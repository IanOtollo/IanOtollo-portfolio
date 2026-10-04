"use client"

import { useEffect, useRef } from "react"

interface Particle {
  hx: number
  hy: number
  x: number
  y: number
  vx: number
  vy: number
  shade: number
  seed: number
}

const STEP = 2
const clamp01 = (v: number) => Math.max(0, Math.min(1, v))

export function ParticlePortrait({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const root = getComputedStyle(document.documentElement)
    const accent = root.getPropertyValue("--primary").trim()
    const fg = root.getPropertyValue("--foreground").trim()
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let particles: Particle[] = []
    let w = 0
    let h = 0
    let dpr = 1
    let dot = 2
    let raf = 0
    let visible = true
    let photoAlpha = reduce ? 1 : 0
    let cutout: HTMLCanvasElement | null = null
    let layer: HTMLCanvasElement | null = null
    let frame = { x: 0, y: 0, w: 0, h: 0 }
    const pointer = { x: -9999, y: -9999, active: false }

    const img = new Image()
    img.src = src

    const setup = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const off = document.createElement("canvas")
      off.width = iw
      off.height = ih
      const octx = off.getContext("2d", { willReadFrequently: true })
      if (!octx) return
      octx.drawImage(img, 0, 0)
      const image = octx.getImageData(0, 0, iw, ih)
      const data = image.data

      const scale = Math.min(w / iw, h / ih)
      dot = Math.max(1.6, scale * STEP * 0.85)
      const ox = (w - iw * scale) / 2
      const oy = (h - ih * scale) / 2
      frame = { x: ox, y: oy, w: iw * scale, h: ih * scale }
      const next: Particle[] = []

      // Build a clean cutout: soft alpha from the blue backdrop, with the
      // blue spill removed from edge pixels (hair, shoulders).
      for (let y = 0; y < ih; y++) {
        for (let x = 0; x < iw; x++) {
          const i = (y * iw + x) * 4
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const spill = b - Math.max(r, g)
          const alpha = clamp01(1 - (spill - 25) / 35)
          if (spill > 10) data[i + 2] = Math.min(b, Math.max(r, g) + 10)
          data[i + 3] = Math.round(alpha * 255)

          if (y % STEP === 0 && x % STEP === 0 && alpha > 0.5) {
            const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            const hx = ox + x * scale
            const hy = oy + y * scale
            next.push({
              hx,
              hy,
              x: reduce ? hx : Math.random() * w,
              y: reduce ? hy : Math.random() * h,
              vx: 0,
              vy: 0,
              shade: lum,
              seed: Math.random() * Math.PI * 2,
            })
          }
        }
      }
      octx.putImageData(image, 0, 0)

      // Pre-scale the cutout to display size for crisp, cheap per-frame draws.
      const c = document.createElement("canvas")
      c.width = Math.ceil(frame.w * dpr)
      c.height = Math.ceil(frame.h * dpr)
      const cctx = c.getContext("2d")
      if (cctx) {
        cctx.imageSmoothingEnabled = true
        cctx.imageSmoothingQuality = "high"
        cctx.filter = "contrast(1.08) saturate(1.05)"
        cctx.drawImage(off, 0, 0, c.width, c.height)
      }
      cutout = c

      const l = document.createElement("canvas")
      l.width = canvas.width
      l.height = canvas.height
      layer = l
      particles = next
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      pointer.active = true
    }
    const onLeave = () => {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }
    // Click or tap on the portrait: burst outward, then reform.
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const px = e.clientX - r.left
      const py = e.clientY - r.top
      if (px < 0 || py < 0 || px > r.width || py > r.height) return
      for (const p of particles) {
        const dx = p.x - px
        const dy = p.y - py
        const d = Math.hypot(dx, dy) || 1
        const force = Math.min(36, 5200 / (d + 40))
        p.vx += (dx / d) * force + (Math.random() - 0.5) * 6
        p.vy += (dy / d) * force + (Math.random() - 0.5) * 6
      }
      photoAlpha = Math.min(photoAlpha, 0.1)
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(canvas)

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw)
      if (!visible) return
      ctx.clearRect(0, 0, w, h)
      const t = time / 1000
      const radius = Math.max(80, w * 0.2)

      // 1. Particles: physics and energy measurement.
      let energy = 0
      for (const p of particles) {
        const bx = reduce ? 0 : Math.sin(t * 1.2 + p.seed) * 0.6
        const by = reduce ? 0 : Math.cos(t * 1.1 + p.seed) * 0.6

        if (pointer.active) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          const d2 = dx * dx + dy * dy
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = (1 - d / radius) * 7
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        p.vx += (p.hx + bx - p.x) * 0.035
        p.vy += (p.hy + by - p.y) * 0.035
        p.vx *= 0.84
        p.vy *= 0.84
        p.x += p.vx
        p.y += p.vy
        energy += Math.abs(p.vx) + Math.abs(p.vy)
      }
      energy /= Math.max(1, particles.length)

      const settled = energy < 0.35
      photoAlpha += ((settled ? 1 : 0) - photoAlpha) * (settled ? 0.06 : 0.2)

      if (cutout && layer && photoAlpha > 0.01) {
        const lctx = layer.getContext("2d")
        if (lctx) {
          lctx.setTransform(1, 0, 0, 1, 0, 0)
          lctx.globalCompositeOperation = "source-over"
          lctx.clearRect(0, 0, layer.width, layer.height)
          lctx.drawImage(cutout, frame.x * dpr, frame.y * dpr)
          // Dissolve the photo around the cursor so particles show through.
          if (pointer.active) {
            const gx = pointer.x * dpr
            const gy = pointer.y * dpr
            const gr = radius * dpr
            const grad = lctx.createRadialGradient(gx, gy, gr * 0.15, gx, gy, gr)
            grad.addColorStop(0, "rgba(0,0,0,1)")
            grad.addColorStop(1, "rgba(0,0,0,0)")
            lctx.globalCompositeOperation = "destination-out"
            lctx.fillStyle = grad
            lctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2)
          }
          ctx.save()
          ctx.setTransform(1, 0, 0, 1, 0, 0)
          ctx.globalAlpha = photoAlpha
          ctx.drawImage(layer, 0, 0)
          ctx.restore()
        }
      }

      // 3. Particles on top, dimmed behind the photo except near the cursor.
      const dim = 1 - 0.9 * photoAlpha
      for (const p of particles) {
        const speed = Math.abs(p.vx) + Math.abs(p.vy)
        let k = dim
        if (pointer.active) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          if (dx * dx + dy * dy < radius * radius) k = 1
        }
        ctx.fillStyle =
          speed > 0.8
            ? `hsl(${accent})`
            : `hsl(${fg} / ${(0.4 + p.shade * 0.6) * k})`
        ctx.fillRect(p.x, p.y, dot, dot)
      }

      if (pointer.active && pointer.x > -radius && pointer.x < w + radius) {
        ctx.beginPath()
        ctx.arc(pointer.x, pointer.y, radius * 0.5, 0, Math.PI * 2)
        ctx.strokeStyle = `hsl(${accent} / 0.35)`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const start = () => {
      setup()
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(draw)
    }

    if (img.complete) start()
    else img.onload = start

    window.addEventListener("resize", setup)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerdown", onDown)
    document.documentElement.addEventListener("pointerleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", setup)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onDown)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [src])

  return (
    <canvas
      ref={ref}
      className={className}
      role="img"
      aria-label="Portrait of Ian Otollo. It assembles from particles into a clear photo; move the cursor over it to dissolve it, click to burst it."
    />
  )
}
