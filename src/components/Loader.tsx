"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ease } from "@/lib/motion"

const KEY = "io-loader-seen"

export function Loader() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(KEY) === "1"
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (seen || reduce) return

    setShow(true)
    document.body.style.overflow = "hidden"
    const start = performance.now()
    const duration = 1400
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setCount(Math.round(t * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else {
        try {
          sessionStorage.setItem(KEY, "1")
        } catch {}
        setTimeout(() => {
          setShow(false)
          document.body.style.overflow = ""
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-primary-foreground"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease }}
          aria-hidden="true"
        >
          <motion.span
            className="font-display text-7xl font-semibold tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            IO
          </motion.span>
          <span className="absolute bottom-8 left-8 text-xs font-medium uppercase tracking-widest">
            Ian Otollo — Portfolio
          </span>
          <span className="absolute bottom-8 right-8 font-display text-5xl tabular-nums">
            {count}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
