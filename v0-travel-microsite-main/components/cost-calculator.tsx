"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Calculator, Bus, Car, DollarSign } from "lucide-react"

interface CostCalculatorProps {
  language: "ar" | "en"
}

export function CostCalculator({ language }: CostCalculatorProps) {
  const [transport, setTransport] = useState<"metro" | "uber">("metro")
  const [andorraTransport, setAndorraTransport] = useState<"bus" | "car">("bus")

  const content = {
    ar: {
      title: "حاسبة التكلفة",
      subtitle: "احسب تكلفة رحلتك",
      barcelonaTitle: "المواصلات في برشلونة",
      metro: "مترو + باص",
      uber: "أوبر",
      andorraTitle: "المواصلات إلى أندورا",
      bus: "باص",
      car: "سيارة إيجار",
      totalTitle: "التكلفة الإجمالية لـ 7 أيام",
      note: "* التكلفة لا تشمل السكن",
      breakdown: "تفصيل التكاليف:",
      day1: "اليوم 1: ≈ 405 ر.س",
      day2: "اليوم 2: ≈ 400 ر.س",
      day3: "اليوم 3: ≈ 520 ر.س",
      day4: "اليوم 4: ≈ 480 ر.س",
      day5: "اليوم 5: حسب المواصلات",
      day6: "اليوم 6: ≈ 120 ر.س (تزلج)",
      day7: "اليوم 7: ≈ 310 ر.س",
    },
    en: {
      title: "Cost Calculator",
      subtitle: "Calculate Your Trip Cost",
      barcelonaTitle: "Transportation in Barcelona",
      metro: "Metro + Bus",
      uber: "Uber",
      andorraTitle: "Transportation to Andorra",
      bus: "Bus",
      car: "Car Rental",
      totalTitle: "Total Cost for 7 Days",
      note: "* Cost does not include accommodation",
      breakdown: "Cost Breakdown:",
      day1: "Day 1: ≈ 405 SAR",
      day2: "Day 2: ≈ 400 SAR",
      day3: "Day 3: ≈ 520 SAR",
      day4: "Day 4: ≈ 480 SAR",
      day5: "Day 5: Depends on transport",
      day6: "Day 6: ≈ 120 SAR (skiing)",
      day7: "Day 7: ≈ 310 SAR",
    },
  }

  const t = content[language]

  // Calculate costs
  const barcelonaDays = 2235 // Days 1-4 + Day 7
  const transportDiff = transport === "uber" ? 80 : 0 // Extra for Uber
  const andorraCost = andorraTransport === "bus" ? 130 : 780 // Bus vs Car rental + gas
  const skiCost = 120

  const totalCost = barcelonaDays + transportDiff + andorraCost + skiCost

  return (
    <section id="cost-calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gold text-black hover:bg-gold/90 font-bold text-base px-4 py-2">
            <Calculator className="w-4 h-4 ml-2" />
            {t.subtitle}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Barcelona Transport */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Bus className="w-6 h-6 text-gold" />
                {t.barcelonaTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={transport} onValueChange={(value) => setTransport(value as "metro" | "uber")}>
                <div className="flex items-center space-x-3 space-x-reverse p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="metro" id="metro" />
                  <Label htmlFor="metro" className="flex-1 cursor-pointer font-medium">
                    {t.metro}
                  </Label>
                  <span className="text-gold font-bold">+0 ر.س</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="uber" id="uber" />
                  <Label htmlFor="uber" className="flex-1 cursor-pointer font-medium">
                    {t.uber}
                  </Label>
                  <span className="text-gold font-bold">+80 ر.س</span>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Andorra Transport */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Car className="w-6 h-6 text-gold" />
                {t.andorraTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={andorraTransport}
                onValueChange={(value) => setAndorraTransport(value as "bus" | "car")}
              >
                <div className="flex items-center space-x-3 space-x-reverse p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="bus" id="bus" />
                  <Label htmlFor="bus" className="flex-1 cursor-pointer font-medium">
                    {t.bus}
                  </Label>
                  <span className="text-gold font-bold">+130 ر.س</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="car" id="car" />
                  <Label htmlFor="car" className="flex-1 cursor-pointer font-medium">
                    {t.car}
                  </Label>
                  <span className="text-gold font-bold">+780 ر.س</span>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Total Cost */}
          <Card className="shadow-2xl border-2 border-gold">
            <CardHeader className="bg-gradient-to-r from-gold/20 to-gold/10">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <DollarSign className="w-7 h-7 text-gold" />
                {t.totalTitle}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">{t.note}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gold mb-2">{totalCost.toLocaleString()} ر.س</div>
                <div className="text-gray-600">
                  ≈ ${Math.round(totalCost / 3.75)} USD / €{Math.round(totalCost / 4)}
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4">{t.breakdown}</h4>
                <div className="space-y-2 text-gray-700">
                  <p>{t.day1}</p>
                  <p>{t.day2}</p>
                  <p>{t.day3}</p>
                  <p>{t.day4}</p>
                  <p>
                    {t.day5}: {andorraTransport === "bus" ? "130 ر.س" : "780 ر.س"}
                  </p>
                  <p>{t.day6}</p>
                  <p>{t.day7}</p>
                  {transport === "uber" && <p className="text-gold font-medium">+ 80 ر.س (أوبر في برشلونة)</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
