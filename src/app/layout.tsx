import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { InspectProvider } from "@/components/Inspect"
import { Loader } from "@/components/Loader"
import { BackToTop, ScrollProgress } from "@/components/ScrollUI"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ianotollo.vercel.app"),
  title: {
    default: "Ian Otollo — Web & Software Developer",
    template: "%s — Ian Otollo",
  },
  description:
    "Web and software developer in Nairobi. Face-recognition access control, hiring platforms, and civic software shipped for real organisations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ianotollo.vercel.app",
    siteName: "Ian Otollo",
    title: "Ian Otollo — Web & Software Developer",
    description:
      "Web and software developer in Nairobi. Face-recognition access control, hiring platforms, and civic software shipped for real organisations.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ian_Otollo",
    title: "Ian Otollo — Web & Software Developer",
    description:
      "Web and software developer in Nairobi.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ianotollo.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ian Otollo",
    url: "https://ianotollo.vercel.app",
    jobTitle: "Web & Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "IOMTechs",
      url: "https://iomtechs.vercel.app",
    },
    sameAs: [
      "https://github.com/IanOtollo",
      "https://x.com/Ian_Otollo",
      "https://www.linkedin.com/in/ian-otollo-07b86a348",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[110] -translate-y-24 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Loader />
        <ScrollProgress />
        <InspectProvider>
          <Nav />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </InspectProvider>
      </body>
    </html>
  )
}
