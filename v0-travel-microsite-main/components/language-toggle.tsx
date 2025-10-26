"use client"

import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  language: "ar" | "en"
  setLanguage: (lang: "ar" | "en") => void
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white rounded-xl shadow-lg p-2">
      <Button
        variant={language === "ar" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ar")}
        className="font-bold"
      >
        🇸🇦 AR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-bold"
      >
        🌍 EN
      </Button>
    </div>
  )
}
