"use client"
import { useState, useEffect } from "react"
import { PERSONAS, type Persona } from "@/data/personas"

export function usePersona(): Persona {
  const [persona, setPersona] = useState<Persona>(PERSONAS[0])

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("portfolio-persona")
      if (stored) {
        setPersona(JSON.parse(stored) as Persona)
      } else {
        const selected = PERSONAS[Math.floor(Math.random() * PERSONAS.length)]
        sessionStorage.setItem("portfolio-persona", JSON.stringify(selected))
        setPersona(selected)
      }
    } catch {
      setPersona(PERSONAS[0])
    }
  }, [])

  return persona
}
