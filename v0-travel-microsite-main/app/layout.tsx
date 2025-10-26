import type React from "react"
import type { Metadata } from "next"
import { Cairo_Play, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairoPlay = Cairo_Play({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Barcelona & Andorra Travel Guide | دليل السفر إلى برشلونة وأندورا",
  description:
    "Complete 7-day Barcelona and Andorra itinerary with skiing | خطة سفر كاملة لمدة 7 أيام في برشلونة وأندورا مع التزلج",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairoPlay.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
