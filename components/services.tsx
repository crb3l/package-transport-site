import { Package, Truck, Home, Clock, Shield, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Package,
    title: "Transport Colete",
    description: "Transportăm colete de orice dimensiune, de la pachete mici până la colete voluminoase.",
  },
  {
    icon: Truck,
    title: "Door to Door",
    description: "Preluăm coletele de la adresa dumneavoastră și le livrăm direct la destinatar.",
  },
  {
    icon: Clock,
    title: "Plecări Săptămânale",
    description: "Curse regulate în fiecare săptămână pentru toate destinațiile noastre.",
  },
  {
    icon: Shield,
    title: "Colete Asigurate",
    description: "Toate coletele sunt asigurate pe durata transportului pentru siguranța dumneavoastră.",
  },
  {
    icon: MapPin,
    title: "Acoperire Largă",
    description: "Livrăm în Austria, Germania, Belgia, Olanda și Anglia, și retur către România.",
  },
  {
    icon: Home,
    title: "Preț Accesibil",
    description: "Tarife competitive și transparente, fără costuri ascunse. Solicită oferta!",
  },
]

export function Services() {
  return (
    <section id="servicii" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold mb-2">SERVICIILE NOASTRE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transport de colete rapid și sigur</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferim servicii complete de transport colete între România și principalele țări din Europa de Vest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow border-0 bg-background">
              <CardHeader>
                <div className="bg-accent w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
