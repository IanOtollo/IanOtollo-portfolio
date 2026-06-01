"use client"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  lines: string[]
  className?: string
  delay?: number
}

const EASE = [0.22, 1, 0.36, 1] as const
const NBSP = " "

export default function AnimatedText({ lines, className, delay = 0 }: AnimatedTextProps) {
  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden">
          <span className="inline-block">
            {Array.from(line).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: lineIndex * 0.15 + charIndex * 0.03 + delay,
                }}
              >
                {char === " " ? NBSP : char}
              </motion.span>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}
