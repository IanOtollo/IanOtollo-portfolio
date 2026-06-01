import PageWrapper from "@/components/ui/PageWrapper"
import SectionLabel from "@/components/ui/SectionLabel"
import WorkGrid from "@/components/work/WorkGrid"

export default function WorkPage() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-24">
        <SectionLabel>Work</SectionLabel>
        <h1
          className="font-display text-text-primary leading-[1.1]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Every project is a proof of something.
        </h1>
        <p className="text-[18px] text-text-secondary mt-4">
          Products shipped. Systems architected. Problems solved.
        </p>

        <WorkGrid />
      </section>
    </PageWrapper>
  )
}
