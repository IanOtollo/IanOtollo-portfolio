import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Experience } from "@/components/home/Experience"
import { Software } from "@/components/home/Software"
import { Ventures } from "@/components/home/Ventures"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Software />
      <Ventures />
    </>
  )
}
