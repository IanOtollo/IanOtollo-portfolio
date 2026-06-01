"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { usePersona } from "@/hooks/usePersona"
import SectionLabel from "@/components/ui/SectionLabel"

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  projectType: z.enum(["product", "platform", "integration", "other"]),
  budget: z.enum(["under-1k", "1k-5k", "5k-15k", "15k-plus", "discuss"]),
  message: z.string().min(20, "Tell me a little more (20+ characters)"),
})

type FormValues = z.infer<typeof schema>

const SOCIALS = [
  { href: "https://github.com/IanOtollo", label: "GitHub" },
  { href: "https://linkedin.com/in/ian-otollo-07b86a348", label: "LinkedIn" },
  { href: "https://twitter.com/Ian_Otollo", label: "X" },
]

export default function ContactPage() {
  const persona = usePersona()
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: "product", budget: "discuss" },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    setSubmitted(true)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("ianotollo@gmail.com").then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div>
      {/* Section 1 — Opening */}
      <section className="pt-32 pb-16 max-w-4xl mx-auto px-8">
        <SectionLabel>Contact</SectionLabel>
        <h1
          className="font-display text-text-primary mt-4 leading-[1.1] max-w-3xl"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {persona.contactOpener}
        </h1>
        <p className="text-[18px] text-text-secondary mt-4">Let&apos;s build something.</p>
      </section>

      {/* Section 2 — Form */}
      <section className="max-w-2xl mx-auto px-8 mt-8">
        {submitted ? (
          <div className="border border-gold bg-surface p-8">
            <p className="text-gold font-mono text-[14px]">
              Received. I&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div>
              <label className="text-[12px] font-mono uppercase tracking-widest text-text-tertiary mb-2 block">
                Name
              </label>
              <input
                {...register("name")}
                className="w-full bg-surface border border-border text-text-primary text-[14px] font-sans p-3 outline-none focus:border-gold transition-colors"
              />
              {errors.name && (
                <p className="text-[12px] text-gold-dim mt-1 font-mono">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-[12px] font-mono uppercase tracking-widest text-text-tertiary mb-2 block">
                Company (optional)
              </label>
              <input
                {...register("company")}
                className="w-full bg-surface border border-border text-text-primary text-[14px] font-sans p-3 outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label className="text-[12px] font-mono uppercase tracking-widest text-text-tertiary mb-2 block">
                Project Type
              </label>
              <select
                {...register("projectType")}
                className="w-full bg-surface border border-border text-text-primary text-[14px] font-sans p-3 outline-none focus:border-gold transition-colors"
              >
                <option value="product">Product Development</option>
                <option value="platform">Platform Engineering</option>
                <option value="integration">Integration Work</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label className="text-[12px] font-mono uppercase tracking-widest text-text-tertiary mb-2 block">
                Budget
              </label>
              <select
                {...register("budget")}
                className="w-full bg-surface border border-border text-text-primary text-[14px] font-sans p-3 outline-none focus:border-gold transition-colors"
              >
                <option value="under-1k">Under $1k</option>
                <option value="1k-5k">$1k–$5k</option>
                <option value="5k-15k">$5k–$15k</option>
                <option value="15k-plus">$15k+</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>

            <div>
              <label className="text-[12px] font-mono uppercase tracking-widest text-text-tertiary mb-2 block">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full bg-surface border border-border text-text-primary text-[14px] font-sans p-3 outline-none focus:border-gold transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-[12px] text-gold-dim mt-1 font-mono">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-transparent border border-gold text-gold font-mono text-[13px] tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-base transition-all duration-300"
            >
              Send message →
            </button>
          </form>
        )}
      </section>

      {/* Section 3 — Direct Contact */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto px-8 mt-16">
        <button
          onClick={copyEmail}
          className="text-left bg-surface border border-border p-5 hover:border-gold transition-colors"
        >
          <p className="font-mono text-[11px] text-text-tertiary uppercase">
            {copied ? "Copied!" : "Email"}
          </p>
          <p className="text-[14px] text-text-primary mt-1">ianotollo@gmail.com</p>
        </button>

        <a
          href="https://wa.me/+254112993859"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface border border-border p-5 hover:border-gold transition-colors"
        >
          <p className="font-mono text-[11px] text-text-tertiary uppercase">WhatsApp</p>
          <p className="text-[14px] text-text-primary mt-1">Chat directly</p>
        </a>

        <a
          href="tel:+254112993859"
          className="bg-surface border border-border p-5 hover:border-gold transition-colors"
        >
          <p className="font-mono text-[11px] text-text-tertiary uppercase">Phone</p>
          <p className="text-[14px] text-text-primary mt-1">+254 112 993 859</p>
        </a>
      </section>

      {/* Section 4 — Social row */}
      <section className="flex gap-8 justify-center mt-12 mb-8 px-8">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-text-secondary hover:text-gold font-mono transition-colors"
          >
            {s.label}
          </a>
        ))}
      </section>
    </div>
  )
}
