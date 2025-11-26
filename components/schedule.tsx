import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const schedule = [
  {
    direction: "România → Europa",
    icon: ArrowRight,
    departures: [
      { day: "Luni", route: "București - Viena - München - Amsterdam" },
      { day: "Miercuri", route: "București - Bruxelles - Londra" },
      { day: "Vineri", route: "București - Germania - Olanda - Belgia" },
    ],
  },
  {
    direction: "Europa → România",
    icon: ArrowLeft,
    departures: [
      { day: "Marți", route: "Londra - Bruxelles - București" },
      { day: "Joi", route: "Amsterdam - München - Viena - București" },
      { day: "Sâmbătă", route: "Germania - Austria - București" },
    ],
  },
]

export function Schedule() {
  return (
    <section id="program" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-secondary font-semibold mb-2">
            <Calendar className="h-5 w-5" />
            PROGRAM PLECĂRI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Plecări săptămânale regulate</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Curse regulate în fiecare săptămână pentru toate destinațiile. Contactați-ne pentru detalii și rezervări.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {schedule.map((item, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary p-2 rounded-lg">
                    <item.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{item.direction}</h3>
                </div>
                <div className="space-y-4">
                  {item.departures.map((dep, depIndex) => (
                    <div
                      key={depIndex}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold min-w-[80px] text-center">
                        {dep.day}
                      </div>
                      <p className="text-white/80">{dep.route}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            * Programul poate suferi modificări. Vă rugăm să confirmați înainte de expediere.
          </p>
          <a
            href="tel:+40700000000"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
          >
            Sună pentru confirmare
          </a>
        </div>
      </div>
    </section>
  )
}
