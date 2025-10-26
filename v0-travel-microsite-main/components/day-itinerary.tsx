"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Copy, MapPin, Clock, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { dayData } from "@/lib/itinerary-data"

interface DayItineraryProps {
  language: "ar" | "en"
}

export function DayItinerary({ language }: DayItineraryProps) {
  const { toast } = useToast()

  const copyDay = (dayNumber: number) => {
    const day = dayData[dayNumber - 1]
    const text = language === "ar" ? day.ar.fullText : day.en.fullText
    navigator.clipboard.writeText(text)
    toast({
      title: language === "ar" ? "تم النسخ!" : "Copied!",
      description: language === "ar" ? "تم نسخ تفاصيل اليوم" : "Day details copied to clipboard",
    })
  }

  const content = {
    ar: {
      title: "الخطة اليومية",
      subtitle: "7 أيام من المغامرات والاستكشاف",
      mustSee: "أشياء ما تتفوت",
      copyDay: "انسخ اليوم",
      viewMap: "عرض الموقع",
    },
    en: {
      title: "Daily Itinerary",
      subtitle: "7 Days of Adventure and Exploration",
      mustSee: "Must-See",
      copyDay: "Copy this Day",
      viewMap: "View Location",
    },
  }

  const t = content[language]

  return (
    <section id="itinerary" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Days Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {dayData.map((day, index) => {
              const dayContent = language === "ar" ? day.ar : day.en
              return (
                <AccordionItem key={index} value={`day-${index + 1}`} className="border-none">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-black">{index + 1}</span>
                        </div>
                        <div className="flex-1 text-right">
                          <h3 className="text-xl md:text-2xl font-bold text-black text-balance">{dayContent.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{dayContent.area}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6 pt-4">
                        {/* Must-See Badge */}
                        {day.mustSee && (
                          <Badge className="bg-gold text-black hover:bg-gold/90 font-bold">{t.mustSee}</Badge>
                        )}

                        {/* Activities */}
                        <div className="space-y-6">
                          {dayContent.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="space-y-3">
                              {/* Time and Title */}
                              <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-black">{activity.time}</h4>
                                  <p className="text-base text-gray-700 mt-1">{activity.title}</p>
                                </div>
                              </div>

                              {/* Description */}
                              {activity.description && (
                                <p className="text-gray-600 leading-relaxed pr-8">{activity.description}</p>
                              )}

                              {/* Location Link */}
                              {activity.location && (
                                <a
                                  href={activity.location}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium transition-colors"
                                >
                                  <MapPin className="w-4 h-4" />
                                  <span>{t.viewMap}</span>
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Cost */}
                        {dayContent.cost && (
                          <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                            <DollarSign className="w-5 h-5 text-gold" />
                            <span className="font-bold text-black">{dayContent.cost}</span>
                          </div>
                        )}

                        {/* Copy Button */}
                        <Button
                          onClick={() => copyDay(index + 1)}
                          variant="outline"
                          className="w-full mt-4 font-bold border-gold text-gold hover:bg-gold hover:text-black"
                        >
                          <Copy className="w-4 h-4 ml-2" />
                          {t.copyDay}
                        </Button>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
