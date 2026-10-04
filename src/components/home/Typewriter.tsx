"use client"

import { useEffect, useState } from "react"

export interface Segment {
  text: string
  className?: string
}

const total = (segs: Segment[]) => segs.reduce((n, s) => n + s.text.length, 0)
const plain = (segs: Segment[]) => segs.map((s) => s.text).join("")

/**
 * Types `first`, then `second`, one character at a time. Returns how many
 * characters of each are visible. Replays on every page load.
 */
export function useTypewriter(first: Segment[], second: Segment[], startDelay: number) {
  const [counts, setCounts] = useState<[number, number]>([0, 0])
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const full: [number, number] = [total(first), total(second)]
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(full)
      setStarted(true)
      return
    }

    const texts = [plain(first), plain(second)]
    let line = 0
    let n = 0
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      n += 1
      setCounts(line === 0 ? [n, 0] : [full[0], n])
      const ch = texts[line][n - 1]
      if (n >= texts[line].length) {
        if (line === 1) return
        line = 1
        n = 0
        timer = setTimeout(tick, 220)
        return
      }
      const base = line === 0 ? 45 : 11
      const pause = ch === "," || ch === "." ? 140 : 0
      timer = setTimeout(tick, base + Math.random() * 22 + pause)
    }

    timer = setTimeout(() => {
      setStarted(true)
      tick()
    }, startDelay)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDelay])

  return { counts, started }
}

function Caret() {
  // Zero net width (negative margin) so it never shifts the text layout.
  return (
    <span
      aria-hidden="true"
      className="-mr-[3px] inline-block h-[0.95em] w-[3px] translate-y-[0.12em] animate-caret rounded-sm bg-primary"
    />
  )
}

/** Renders `segments` typed up to `count` characters, reserving full layout. */
export function Typed({
  segments,
  count,
  caret,
}: {
  segments: Segment[]
  count: number
  caret: boolean
}) {
  let remaining = count
  let caretPlaced = false

  return (
    <>
      <span className="sr-only">{plain(segments)}</span>
      <span aria-hidden="true">
        {segments.map((seg, i) => {
          const shown = seg.text.slice(0, Math.max(0, remaining))
          const hidden = seg.text.slice(shown.length)
          remaining -= seg.text.length
          const placeHere = caret && !caretPlaced && hidden.length > 0
          const placeAtEnd = caret && !caretPlaced && i === segments.length - 1 && hidden.length === 0
          if (placeHere || placeAtEnd) caretPlaced = true
          return (
            <span key={i} className={seg.className}>
              {shown}
              {(placeHere || placeAtEnd) && <Caret />}
              <span className="invisible">{hidden}</span>
            </span>
          )
        })}
      </span>
    </>
  )
}
