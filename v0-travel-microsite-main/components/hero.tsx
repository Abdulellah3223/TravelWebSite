"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  language: "ar" | "en"
}

export function Hero({ language }: HeroProps) {
  const content = {
    ar: {
      title: "رحلة برشلونة وأندورا",
      subtitle: "خطة سفر كاملة لمدة 7 أيام",
      description: "استكشف برشلونة الساحرة وجبال أندورا الثلجية مع دليل شامل يتضمن المطاعم والفعاليات والتكاليف",
      startButton: "ابدأ الخطة",
      costButton: "احسب التكلفة",
    },
    en: {
      title: "Barcelona & Andorra Journey",
      subtitle: "Complete 7-Day Travel Plan",
      description:
        "Explore magical Barcelona and snowy Andorra mountains with a comprehensive guide including restaurants, activities, and costs",
      startButton: "Start Trip",
      costButton: "View Costs",
    },
  }

  const t = content[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/barcelona-sagrada-familia-skyline-sunset.jpg"
          alt="Barcelona skyline"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Gold badge */}
          <div className="inline-flex items-center gap-2 bg-gold text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            <span className="text-xl">✈️</span>
            <span>{t.subtitle}</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">{t.title}</h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 font-bold text-lg px-8 py-6 rounded-xl shadow-xl"
              onClick={() => scrollToSection("itinerary")}
            >
              {t.startButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 font-bold text-lg px-8 py-6 rounded-xl"
              onClick={() => scrollToSection("cost-calculator")}
            >
              {t.costButton}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
