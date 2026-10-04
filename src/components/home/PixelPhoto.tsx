"use client"

import { useEffect, useRef } from "react"

const CELL = 7

interface Block {
  hx: number
  hy: number
  x: number
  y: number
  vx: number
  vy: number
  color: string
}

/**
 * A photo that un-pixelates when it scrolls into view. Once sharp, the cursor
 * pushes pixel blocks out of the image (they spring back), and a click bursts
 * the whole photo into pixels before it reforms.
 */
export function PixelPhoto({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim()
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let visible = false
    let startedAt = -1
    let photoAlpha = 1
    let blocks: Block[] = []
    let photo: HTMLCanvasElement | null = null
    let layer: HTMLCanvasElement | null = null
    const pointer = { x: 0, y: 0, inside: false }

    const img = new Image()
    img.src = src

    const setup = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)

      // Cover-fit, anchored to the top so the face stays in frame.
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      const dx = (w - dw) / 2

      const p = document.createElement("canvas")
      p.width = canvas.width
      p.height = canvas.height
      const pctx = p.getContext("2d", { willReadFrequently: true })
      if (!pctx) return
      pctx.imageSmoothingQuality = "high"
      pctx.drawImage(img, dx * dpr, 0, dw * dpr, dh * dpr)
      photo = p

      // One block per CELL x CELL patch, coloured from the photo.
      const cols = Math.ceil(w / CELL)
      const rows = Math.ceil(h / CELL)
      const small = document.createElement("canvas")
      small.width = cols
      small.height = rows
      const sctx = small.getContext("2d", { willReadFrequently: true })
      if (!sctx) return
      sctx.drawImage(p, 0, 0, cols, rows)
      const data = sctx.getImageData(0, 0, cols, rows).data
      const next: Block[] = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = (r * cols + c) * 4
          const hx = c * CELL + CELL / 2
          const hy = r * CELL + CELL / 2
          next.push({
            hx,
            hy,
            x: hx,
            y: hy,
            vx: 0,
            vy: 0,
            color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
          })
        }
      }
      blocks = next

      const l = document.createElement("canvas")
      l.width = canvas.width
      l.height = canvas.height
      layer = l
    }

    const drawPixelated = (px: number) => {
      if (!photo) return
      const tw = Math.max(1, Math.ceil(canvas.width / px))
      const th = Math.max(1, Math.ceil(canvas.height / px))
      const tiny = document.createElement("canvas")
      tiny.width = tw
      tiny.height = th
      tiny.getContext("2d")?.drawImage(photo, 0, 0, tw, th)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(tiny, 0, 0, canvas.width, canvas.height)
    }

    const frame = (time: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible || !photo || !layer) return
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (startedAt < 0) startedAt = time
      const p = reduce ? 1 : Math.min(1, (time - startedAt) / 1400)
      if (p < 1) {
        const px = Math.max(1, Math.round(56 * (1 - p) * (1 - p) * dpr))
        ctx.globalAlpha = Math.min(1, p * 3)
        drawPixelated(px)
        ctx.globalAlpha = 1
        return
      }

      const radius = Math.max(60, w * 0.18)

      // Physics: cursor pushes blocks away; springs pull them home.
      let energy = 0
      for (const b of blocks) {
        if (pointer.inside) {
          const dx = b.x - pointer.x
          const dy = b.y - pointer.y
          const d2 = dx * dx + dy * dy
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = (1 - d / radius) * 6
            b.vx += (dx / d) * f
            b.vy += (dy / d) * f
          }
        }
        b.vx += (b.hx - b.x) * 0.05
        b.vy += (b.hy - b.y) * 0.05
        b.vx *= 0.82
        b.vy *= 0.82
        b.x += b.vx
        b.y += b.vy
        energy += Math.abs(b.x - b.hx) + Math.abs(b.y - b.hy)
      }
      energy /= Math.max(1, blocks.length)

      // The sharp photo yields to the blocks while they are scattered.
      const settled = energy < 0.6
      photoAlpha += ((settled ? 1 : 0) - photoAlpha) * (settled ? 0.08 : 0.25)

      const lctx = layer.getContext("2d")
      if (!lctx) return
      lctx.setTransform(1, 0, 0, 1, 0, 0)
      lctx.globalCompositeOperation = "source-over"
      lctx.clearRect(0, 0, layer.width, layer.height)
      lctx.drawImage(photo, 0, 0)
      if (pointer.inside) {
        const gx = pointer.x * dpr
        const gy = pointer.y * dpr
        const gr = radius * dpr
        const grad = lctx.createRadialGradient(gx, gy, gr * 0.5, gx, gy, gr)
        grad.addColorStop(0, "rgba(0,0,0,1)")
        grad.addColorStop(1, "rgba(0,0,0,0)")
        lctx.globalCompositeOperation = "destination-out"
        lctx.fillStyle = grad
        lctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2)
      }
      ctx.globalAlpha = photoAlpha
      ctx.drawImage(layer, 0, 0)
      ctx.globalAlpha = 1

      // Blocks: only draw those that are displaced, near the cursor, or while
      // the photo is faded out. Settled blocks elsewhere are the photo itself.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const size = CELL + 0.6
      for (const b of blocks) {
        const moved = Math.abs(b.x - b.hx) + Math.abs(b.y - b.hy)
        let alpha = 0
        if (moved > 0.8) alpha = 1
        else if (photoAlpha < 0.95) alpha = 1 - photoAlpha
        if (pointer.inside) {
          const d = Math.hypot(b.hx - pointer.x, b.hy - pointer.y)
          if (d < radius) alpha = Math.max(alpha, Math.min(1, (radius - d) / (radius * 0.5)))
        }
        if (alpha <= 0.02) continue
        ctx.globalAlpha = alpha
        ctx.fillStyle = moved > 2 ? `hsl(${accent})` : b.color
        if (moved > 2 && moved < 14) ctx.fillStyle = b.color
        ctx.fillRect(b.x - size / 2, b.y - size / 2, size, size)
      }
      ctx.globalAlpha = 1

      if (pointer.inside) {
        ctx.beginPath()
        ctx.arc(pointer.x, pointer.y, radius * 0.55, 0, Math.PI * 2)
        ctx.strokeStyle = `hsl(${accent} / 0.4)`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      pointer.inside = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= r.width && pointer.y <= r.height
    }
    const onLeave = () => {
      pointer.inside = false
    }
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const px = e.clientX - r.left
      const py = e.clientY - r.top
      if (px < 0 || py < 0 || px > r.width || py > r.height) return
      for (const b of blocks) {
        const dx = b.x - px
        const dy = b.y - py
        const d = Math.hypot(dx, dy) || 1
        const force = Math.min(30, 4200 / (d + 40))
        b.vx += (dx / d) * force + (Math.random() - 0.5) * 8
        b.vy += (dy / d) * force + (Math.random() - 0.5) * 8
      }
      photoAlpha = Math.min(photoAlpha, 0.1)
    }

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting
      },
      { threshold: 0.35 },
    )
    io.observe(canvas)

    const start = () => {
      setup()
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(frame)
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

  return <canvas ref={ref} className={className} role="img" aria-label={alt} />
}
