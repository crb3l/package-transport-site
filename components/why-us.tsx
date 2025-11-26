import { Clock, Users, Award, Headphones, Euro } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Experiență de peste 10 ani",
    description: "Cunoaștem fiecare rută și oferim servicii de calitate de ani de zile.",
  },
  {
    icon: Users,
    title: "Mii de clienți mulțumiți",
    description: "Comunitatea noastră de clienți crește constant prin recomandări.",
  },
  {
    icon: Euro,
    title: "Prețuri competitive",
    description: "Tarife transparente și accesibile pentru toate tipurile de colete.",
  },
  {
    icon: Headphones,
    title: "Suport dedicat",
    description: "Echipa noastră vă stă la dispoziție pentru orice întrebare sau nelămurire.",
  },
]

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/delivery-courier-handing-package-to-customer-smili.jpg" alt="Livrare colete" className="rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="h-10 w-10 text-secondary" />
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-white/80">Satisfacție garantată</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-primary font-semibold mb-2">DE CE SĂ NE ALEGEȚI</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Partenerul dumneavoastră de încredere pentru transport internațional
            </h2>
            <p className="text-muted-foreground mb-8">
              De peste un deceniu, oferim servicii de transport colete între România și Europa de Vest. Experiența
              noastră și dedicarea față de clienți ne recomandă.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
