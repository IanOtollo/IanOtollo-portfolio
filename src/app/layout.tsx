import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import LenisProvider from "@/components/LenisProvider"
import CustomCursor from "@/components/ui/CustomCursor"

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
})

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Ian Otollo — Full-Stack Developer | Nairobi, Kenya",
  description:
    "Full-stack developer and founder of IOMTechs. Building web platforms, APIs, and the IOM Empire from Nairobi, Kenya.",
  openGraph: {
    title: "Ian Otollo — Full-Stack Developer",
    description:
      "Full-stack developer and founder of IOMTechs. Building from Nairobi for the world.",
    url: "https://ianotollo.vercel.app",
    siteName: "Ian Otollo",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Ian_Otollo",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
