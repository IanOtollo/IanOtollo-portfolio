import Image from "next/image"
import PageWrapper from "@/components/ui/PageWrapper"
import SectionLabel from "@/components/ui/SectionLabel"
import PhilosophySection from "@/components/about/PhilosophySection"
import SkillsMatrix from "@/components/about/SkillsMatrix"

const BUILDING = [
  {
    name: "IOM Forms",
    status: "Building",
    blurb: "A premium form and data-collection SaaS for businesses that have outgrown Google Forms.",
  },
  {
    name: "IOM Medic",
    status: "In progress",
    blurb: "A health-companion PWA — migrated from React Native to Next.js with zero feature loss.",
  },
]

const TIMELINE = [
  { year: "2021", text: "First web project shipped" },
  { year: "2022", text: "Turned freelancing full-time" },
  { year: "2023", text: "Founded IOMTechs" },
  { year: "2024", text: "First government contract (Busia County)" },
  { year: "2024", text: "First international client (Nigeria)" },
  { year: "2025", text: "IOM Empire: 5 verticals in active planning or development" },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Section 1 — Portrait + Declaration */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Full-bleed portrait — right side, same as hero */}
        <div className="hidden md:block absolute right-0 top-0 w-[45%] h-full">
          {/* Blend gradient — left edge fades into background */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.4) 50%, transparent 100%)",
            }}
          />
          {/* Portrait image */}
          <div
            className="relative w-full h-full"
            style={{ filter: "grayscale(100%) brightness(0.45) contrast(1.1)" }}
          >
            <Image
              src="/AboutPic.jpeg"
              alt="Ian Otollo"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>

        {/* Text content — left side */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full md:w-[60%] py-32">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-display text-[clamp(40px,4.5vw,72px)] text-text-primary mt-4 leading-[1.1] max-w-2xl">
            A builder
            <br />
            from Busia.
          </h1>
          <p className="text-[16px] text-text-secondary mt-6 leading-[1.75] max-w-lg">
            I am a full-stack developer and founder. I build products that ship, systems that scale,
            and an empire that compounds. Every project is a proof of concept for what East Africa
            can produce at world standard.
          </p>
          <p className="text-[16px] text-text-secondary mt-4 leading-[1.75] max-w-lg">
            I run IOMTechs, a software development agency. Alongside client work, I am building the
            IOM Empire — five verticals designed to operate at multimillion-dollar scale.
          </p>
          {/* Caption — desktop only, bottom left */}
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-widest text-text-tertiary mt-12 border-t border-border pt-4 w-fit">
            Ian Otollo / Busia, Kenya
          </p>
        </div>
      </section>

      {/* Section 2 — Philosophy */}
      <PhilosophySection />

      {/* Section 3 — Currently Building */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <SectionLabel>Currently Building</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {BUILDING.map((b) => (
            <div key={b.name} className="bg-surface border border-border p-6 relative">
              <span className="absolute top-6 right-6 text-[11px] font-mono uppercase tracking-widest text-gold">
                {b.status}
              </span>
              <h3 className="font-display text-[28px] text-text-primary">{b.name}</h3>
              <p className="text-[14px] text-text-secondary mt-3 leading-relaxed max-w-sm">
                {b.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Skills Matrix */}
      <SkillsMatrix />

      {/* Section 5 — Timeline */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <SectionLabel>Journey</SectionLabel>
        <div className="mt-6">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="flex gap-8 items-baseline py-4 border-b border-border">
              <span className="font-mono text-[13px] text-gold w-16 flex-shrink-0">{entry.year}</span>
              <span className="text-[16px] text-text-primary">{entry.text}</span>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
