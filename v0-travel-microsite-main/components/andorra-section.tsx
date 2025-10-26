"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Snowflake, Cable, MapPin } from "lucide-react"
import Image from "next/image"

interface AndorraSectionProps {
  language: "ar" | "en"
}

export function AndorraSection({ language }: AndorraSectionProps) {
  const content = {
    ar: {
      title: "تجربة التزلج في أندورا",
      subtitle: "مغامرة الثلج والجبال",
      howToGetThere: "كيف نطلع للجبل؟",
      step1Title: "1. تتوجهون لقرية Soldeu",
      step2Title: "2. تركبون التلفريك (Gondola)",
      step2Desc:
        "هذا اللي يطلعك فوق الجبل مباشرة. التذاكر تكون غالباً ضمن الباكج (إيجار × دخول × رفع تلفريك). ما تحتاج تمشي كثير، مجرد تركب التلفريك وتوصل فوق على طول في منطقة التزلج.",
      rentalTitle: "إذا تبغى تأجر المعدات فوق الجبل بدل تحت؟",
      rentalAnswer: "نعم ممكن",
      rentalDesc:
        "في كل محطة فوق الجبل فيه: Ski Rental Shop. المیزة: لو حسيت المقاس مو مناسب → تغير على طول، أقرب للمنطقة. العيب: غالباً أغلى بـ 10–20% من التأجير تحت الجبل، وقت الانتظار أحياناً أطول.",
      recommendation: "إذا أول مرة → الأفضل تأجر تحت (هوا أرتب وأسهل).",
      scheduleTitle: "التفاصيل",
      schedule: [
        { time: "9:00", activity: "ركوب التلفريك", desc: "الصورة اللي تطلع راسك فوق السحاب" },
        { time: "10:00", activity: "تدريب أساسي", desc: "كيف توقف، تتحكم، تلف" },
        { time: "1:00", activity: "غداء فوق الجبل", desc: "Grau Roig Terrace" },
        { time: "2:00", activity: "التزلج الحر", desc: 'احلى تجربةةة"' },
        { time: "5:00", activity: "الغروب فوق الجبل", desc: "الثلج يصير ذهبي.. لقطة العمر" },
      ],
      returnNote: "ارجع برشلونة اليوم الثاني الصباح و استمتع في الطريق ممتع جدا",
    },
    en: {
      title: "Skiing Experience in Andorra",
      subtitle: "Snow and Mountain Adventure",
      howToGetThere: "How to get to the mountain?",
      step1Title: "1. Head to Soldeu village",
      step2Title: "2. Ride the Cable Car (Gondola)",
      step2Desc:
        "This takes you directly up the mountain. Tickets are usually included in the package (rental × entry × cable car lift). You don't need to walk much, just ride the cable car and you'll arrive at the ski area.",
      rentalTitle: "If you want to rent equipment on the mountain instead of below?",
      rentalAnswer: "Yes, possible",
      rentalDesc:
        "At every station on the mountain there is: Ski Rental Shop. Advantage: If you feel the size isn't right → change immediately, closer to the area. Disadvantage: Usually 10–20% more expensive than renting below the mountain, waiting time sometimes longer.",
      recommendation: "If it's your first time → Better to rent below (it's more organized and easier).",
      scheduleTitle: "Details",
      schedule: [
        { time: "9:00", activity: "Cable Car Ride", desc: "The photo where your head is above the clouds" },
        { time: "10:00", activity: "Basic Training", desc: "How to stop, control, turn" },
        { time: "1:00", activity: "Lunch on the Mountain", desc: "Grau Roig Terrace" },
        { time: "2:00", activity: "Free Skiing", desc: "Best experience ever" },
        { time: "5:00", activity: "Sunset on the Mountain", desc: "The snow turns golden.. shot of a lifetime" },
      ],
      returnNote: "Return to Barcelona the next morning and enjoy the journey, it's very enjoyable",
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gold text-black hover:bg-gold/90 font-bold text-base px-4 py-2">
            <Snowflake className="w-4 h-4 ml-2" />
            {t.subtitle}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t.title}</h2>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/andorra-grandvalira-ski-resort-mountains.jpg"
            alt="Andorra Ski Resort"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* How to Get There */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mountain className="w-6 h-6 text-gold" />
                {t.howToGetThere}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1 */}
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-black">{t.step1Title}</h4>
                <a
                  href="https://maps.app.goo.gl/GwMZqsmhfGS7CdXL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Soldeu Village</span>
                </a>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-black flex items-center gap-2">
                  <Cable className="w-5 h-5 text-gold" />
                  {t.step2Title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{t.step2Desc}</p>
              </div>
            </CardContent>
          </Card>

          {/* Equipment Rental */}
          <Card className="shadow-lg border-gold/30">
            <CardHeader>
              <CardTitle className="text-xl">{t.rentalTitle}</CardTitle>
              <CardDescription className="text-lg font-bold text-gold">{t.rentalAnswer}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{t.rentalDesc}</p>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                <p className="font-bold text-black">{t.recommendation}</p>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{t.scheduleTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {t.schedule.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-lg flex items-center justify-center">
                      <span className="font-bold text-black">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg text-black">{item.activity}</h5>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Return Note */}
          <div className="bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-xl p-6 text-center">
            <p className="text-lg font-medium text-black">{t.returnNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
