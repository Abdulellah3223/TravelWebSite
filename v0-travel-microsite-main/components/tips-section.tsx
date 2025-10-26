"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Home, Bus, Snowflake } from "lucide-react"

interface TipsSectionProps {
  language: "ar" | "en"
}

export function TipsSection({ language }: TipsSectionProps) {
  const content = {
    ar: {
      title: "نصائح مهمة",
      subtitle: "معلومات تساعدك في رحلتك",
      accommodation: {
        title: "السكن",
        icon: Home,
        tips: [
          "عندك خيارين: Airbnb و Booking",
          "أنا أخذت Airbnb شقة نظيفة وكانت قريبة من السنتر وكويسة",
          "حاول تدور من Airbnb إذا كان سعر الفندق غالي",
          "تأكد إذا فيها باركنق لو كان معاك سيارة",
          "ما أفضل سيارة في برشلونة خليها على آخر يومين إذا ناوي تطلع أندورا",
        ],
      },
      transportation: {
        title: "المواصلات",
        icon: Bus,
        tips: [
          "السيارة: داخل برشلونة ما أنصح فيها، الزحمة قوية والمواقف غالية. الموقف بالساعة تقريباً من 3 إلى 5 يورو",
          "الباص: من أفضل وسائل المواصلات، خصوصاً لو ناوي تلف على السنتر والمعالم السياحية",
          "التذكرة الواحدة بـ 2.55 يورو. الأفضل تاخذ كرت T-casual فيه 10 ركوبات بـ 12.15 يورو",
          "المترو: أسرع وسيلة في برشلونة، يوصلك لأي مكان تقريباً",
          "لو بتستخدم المواصلات كثير، خذ كرت Hola BCN! فيه ركوبات مفتوحة",
          "Bus Tour: من أحلى التجارب! باص دورين مفتوح من فوق، يلف على كل المعالم السياحية",
          "أوبر: يشتغل بس مو بكل المناطق. فضل تستخدمه للمشاویر اللیلیة",
          "المشي: برشلونة من أحلى المدن اللي تمشي فيها. الجو غالباً حلو، والشوارع آمنة",
        ],
      },
      andorra: {
        title: "أندورا ومنطقة التزلج",
        icon: Snowflake,
        tips: [
          "تبعد ساعتين ونص من برشلونة",
          "تعتبر غالية في السكن شوية إذا كنت جنب التلفريك او فوق عند الجبل",
          "لكن تحت في اندورا اسعارها متوسطة يعني الليلة حدود ٦٠٠ ر.س لـ 3 أشخاص",
          "التزلج ما يكلف كثير صراحة. يعني حدود ١٢٠ ر.س تأخذ هلميت و العصايات و السنو بورد لمدة يوم",
          "أفضل تقعد يومين وتدور شي مو غالي بعيد عن منطقة التزلج",
          "أو تكون day trip من برشلونة بس لازم تصحى بدري وتروح",
          "حاول ترجع قبل المغرب لأن غالبا الليل يكون ظلام",
        ],
      },
      activities: {
        title: "أهم الفعاليات والأماكن",
        icon: Lightbulb,
        tips: [
          "جولة الباص السياحي: أول فعالية لازم تبدأ فيها! تركب من ساحة كتالونيا والجو يفتح النفس",
          "ساغرادا فاميليا: ما تحتاج تكون تحب الهندسة عشان تعجبك، هالمكان يخليك تقول واو من أول نظرة",
          "شاطئ برشلونيتا: الجو هناك خرافي، بحر أزرق وممشى طويل، والناس رايقة جداً",
          "عرض الفلامنكو: يا زين الليالي الأندلسية. العرض عبارة عن رقص وغناء حي في قاعة صغيرة",
          "بارك جويل: تحفة غاودي الثانية، كلها ألوان وأشكال غريبة تحسها من عالم ديزني",
          "جبل مونتجويك: مكان رايق جداً للغروب. تقدر تطلع بالتلفريك وتشوف البحر والمدينة كلها تحتك",
          "متحف برشلونة: لـ عشاق الكورة. تدخل المتحف وتشوف تاريخ النادي، الكؤوس، صور ميسي وكل الأساطير",
          "تجربة السيارة الرياضية: تحب السرعة؟ تجربة فخمة تسوق فيها سيارة فيراري أو لامبورغيني",
          "التسوق في باسيو دي غراسيا: شارع راقي فيه كل الماركات اللي تخطر على بالك",
          "الاوتلت: La Roca Village منطقة تسوق خارج برشلونة. أسعارها أقل من المدينة بكثير",
        ],
      },
    },
    en: {
      title: "Important Tips",
      subtitle: "Information to help you on your trip",
      accommodation: {
        title: "Accommodation",
        icon: Home,
        tips: [
          "You have two options: Airbnb and Booking",
          "I took an Airbnb apartment, clean and close to the center",
          "Try to search on Airbnb if hotel prices are expensive",
          "Make sure it has parking if you have a car",
          "I don't recommend a car in Barcelona, keep it for the last two days if you're going to Andorra",
        ],
      },
      transportation: {
        title: "Transportation",
        icon: Bus,
        tips: [
          "Car: Inside Barcelona I don't recommend it, traffic is heavy and parking is expensive. Parking per hour is approximately 3 to 5 euros",
          "Bus: One of the best means of transportation, especially if you're planning to tour the center and tourist attractions",
          "Single ticket is 2.55 euros. Better to get T-casual card with 10 rides for 12.15 euros",
          "Metro: Fastest way in Barcelona, gets you almost anywhere",
          "If you'll use transportation a lot, get Hola BCN! card with unlimited rides",
          "Bus Tour: One of the best experiences! Double-decker open-top bus, tours all tourist attractions",
          "Uber: Works but not in all areas. Prefer to use it for night trips",
          "Walking: Barcelona is one of the best cities to walk in. Weather is usually nice, and streets are safe",
        ],
      },
      andorra: {
        title: "Andorra and Ski Area",
        icon: Snowflake,
        tips: [
          "2.5 hours from Barcelona",
          "Accommodation is a bit expensive if you're near the cable car or up at the mountain",
          "But down in Andorra prices are moderate, about 600 SAR per night for 3 people",
          "Skiing doesn't cost much honestly. About 120 SAR gets you helmet, poles, and snowboard for a day",
          "Better to stay two days and find something not expensive away from the ski area",
          "Or make it a day trip from Barcelona but you need to wake up early",
          "Try to return before sunset because it's usually dark at night",
        ],
      },
      activities: {
        title: "Top Activities and Places",
        icon: Lightbulb,
        tips: [
          "Tourist Bus Tour: First activity you must start with! Board from Catalunya square and enjoy the atmosphere",
          "Sagrada Familia: You don't need to love architecture to like it, this place makes you say wow at first sight",
          "Barceloneta Beach: The atmosphere there is amazing, blue sea and long promenade, people are very relaxed",
          "Flamenco Show: Beautiful Andalusian nights. The show is live dancing and singing in a small hall",
          "Park Güell: Gaudí's second masterpiece, all colors and strange shapes that feel like Disney world",
          "Montjuïc Hill: Very relaxing place for sunset. You can go up by cable car and see the sea and whole city below",
          "Barcelona Museum: For football fans. Enter the museum and see the club's history, trophies, Messi photos and all legends",
          "Supercar Experience: Love speed? Luxury experience driving a Ferrari or Lamborghini",
          "Shopping at Passeig de Gràcia: Upscale street with all the brands you can think of",
          "Outlet: La Roca Village shopping area outside Barcelona. Prices are much lower than the city",
        ],
      },
    },
  }

  const t = content[language]

  const sections = [
    { key: "accommodation", data: t.accommodation },
    { key: "transportation", data: t.transportation },
    { key: "andorra", data: t.andorra },
    { key: "activities", data: t.activities },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gold text-black hover:bg-gold/90 font-bold text-base px-4 py-2">
            <Lightbulb className="w-4 h-4 ml-2" />
            {t.subtitle}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t.title}</h2>
        </div>

        {/* Tips Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.data.icon
              return (
                <AccordionItem key={section.key} value={section.key} className="border-none">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-black" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-black">{section.data.title}</h3>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-3 pt-4">
                        {section.data.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex gap-3 items-start">
                            <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                            <span className="text-gray-700 leading-relaxed">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 rounded-2xl p-8">
            <p className="text-xl font-bold text-black mb-2">
              {language === "ar"
                ? "وبس وﷲ ان شاء لله تكون رحلة حلوة عليكم"
                : "That's it! Hope you have an amazing trip"}
            </p>
            <p className="text-gray-700">
              {language === "ar"
                ? "جربتوا أشياء كثير حلوة وأشياء مختلفة"
                : "Experience many wonderful and different things"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
