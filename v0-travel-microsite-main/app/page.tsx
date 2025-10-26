"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { DayItinerary } from "@/components/day-itinerary"
import { AndorraSection } from "@/components/andorra-section"
import { CostCalculator } from "@/components/cost-calculator"
import { TipsSection } from "@/components/tips-section"
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  return (
    <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <DayItinerary language={language} />
      <AndorraSection language={language} />
      <CostCalculator language={language} />
      <TipsSection language={language} />
    </div>
  )
}
