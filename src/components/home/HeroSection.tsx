"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePersona } from "@/hooks/usePersona"
import AnimatedText from "@/components/ui/AnimatedText"

const EASE = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const persona = usePersona()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="min-h-[100dvh] flex relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className="animate-slow-spin"
          style={{ filter: "blur(120px)" }}
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="280" fill="#C8A96E" opacity="0.03" />
        </svg>
      </div>

      {/* Right column — portrait, desktop only */}
      <div className="hidden md:block absolute right-0 top-0 w-[45%] h-full">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
          }}
        />
        <div
          className="relative w-full h-full"
          style={{ filter: "grayscale(100%) brightness(0.45) contrast(1.1)" }}
        >
          <Image
            src="/ian-portrait.jpg"
            alt="Ian Otollo"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>
      </div>

      {/* Left column */}
      <div className="relative z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-[60%]">
      <div className="max-w-2xl">
        <AnimatedText
          lines={persona.heroHeadline}
          className="font-display text-[clamp(36px,4.5vw,72px)] text-text-primary leading-[1.05]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          className="text-[18px] text-text-secondary max-w-xl mt-6 leading-relaxed"
        >
          {persona.heroSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          className="flex gap-4 mt-10 flex-wrap items-center"
        >
          <Link
            href="/work"
            data-cursor="hover"
            className="border border-gold text-gold px-8 py-4 text-[14px] font-mono tracking-wide hover:bg-gold hover:text-base transition-all duration-300"
          >
            {persona.heroCTA.primary}
          </Link>
          <Link
            href={persona.id === 1 ? "/empire" : "/contact"}
            className="text-text-secondary hover:text-text-primary text-[14px] underline underline-offset-4"
          >
            {persona.heroCTA.secondary}
          </Link>
        </motion.div>
      </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
        style={{ opacity: scrolled ? 0 : 1 }}
      >
        <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-widest">
          Scroll
        </span>
        <span className="text-text-tertiary mt-2 animate-bounce-subtle">↓</span>
      </div>
    </section>
  )
}
