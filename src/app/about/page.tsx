import type { Metadata } from "next"
import Image from "next/image"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "About",
  description:
    "Ian Otollo: web and software developer, founder of IOMTechs, building from Nairobi.",
}

const VERTICALS = [
  { name: "IOMTechs", status: "Active", body: "Software agency for platforms, APIs and digital products. Founded 2023." },
  { name: "IOM Forms", status: "Building", body: "Premium form and data-collection SaaS." },
  { name: "IOM Transit", status: "Building", body: "Logistics and fleet infrastructure." },
  { name: "IOM Properties", status: "Vision", body: "Digital-first real estate." },
]

const PRINCIPLES = [
  { title: "Proof over promises", body: "Live URLs, real transactions, real logs. I show it working." },
  { title: "Secure by design", body: "Verify on the server, store the minimum, enforce rules at the data layer." },
  { title: "Built for the place it runs", body: "M-Pesa, WhatsApp, patchy networks, two languages. Context decides the design." },
]

export default function AboutPage() {
  return (
    <>
      <section className="section" data-inspect="About hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tighter md:text-6xl">
              I build software for organisations that can&rsquo;t afford
              for it to fail.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I&rsquo;m Ian, based in Nairobi and Busia, Kenya. I founded IOMTechs in
              2023 and have shipped systems for schools, county government,
              businesses and creators, handling design, architecture and
              deployment end to end. I have 65 repositories on GitHub and
              counting.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/AboutPic.jpeg"
                alt="Portrait of Ian Otollo"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Principles</p>
          </Reveal>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <li key={p.title}>
                <Reveal className="h-full rounded-2xl border border-border/50 bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">The IOM ecosystem</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
              One product, one client, one system at a time.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <li key={v.name}>
                <Reveal className="h-full rounded-2xl border border-border/50 bg-card p-6">
                  <span className="eyebrow text-primary">{v.status}</span>
                  <h3 className="mt-2 text-2xl font-semibold">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
