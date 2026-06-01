import fs from "node:fs/promises"
import path from "node:path"
import { notFound } from "next/navigation"
import Link from "next/link"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { PROJECTS } from "@/data/projects"
import PageWrapper from "@/components/ui/PageWrapper"
import SectionLabel from "@/components/ui/SectionLabel"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-[28px] text-text-primary mt-16 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[16px] text-text-secondary leading-[1.8] mb-6" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-[13px] bg-surface px-2 py-0.5 rounded text-gold" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-text-primary" {...props} />
  ),
}

async function getMdxSource(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "src", "content", "work", `${slug}.mdx`)
    return await fs.readFile(filePath, "utf-8")
  } catch {
    return null
  }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const raw = await getMdxSource(params.slug)
  if (!raw) notFound()
  const { content } = matter(raw)

  return (
    <PageWrapper>
      <article className="max-w-3xl mx-auto px-8 py-24">
        <Link
          href="/work"
          className="font-mono text-[13px] text-text-tertiary hover:text-text-primary mb-16 block"
        >
          ← All work
        </Link>

        <SectionLabel>{project.category}</SectionLabel>
        <h1
          className="font-display text-text-primary mt-4 leading-[1.1]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          {project.title}
        </h1>
        <p className="font-mono text-[13px] text-text-tertiary mt-4">
          {project.client} · {project.year}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border border-border text-[12px] font-mono text-text-secondary px-3 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        <hr className="border-border my-12" />

        <div>
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold px-6 py-3 font-mono text-[13px] hover:bg-gold hover:text-base mt-12 inline-block transition-all"
          >
            View live project →
          </a>
        )}
      </article>
    </PageWrapper>
  )
}
