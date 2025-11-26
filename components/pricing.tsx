import { Check } from "lucide-react"

const pricingData = [
  {
    destination: "Austria",
    cities: "Viena, Linz, Graz, Salzburg",
    pricePerKg: "3.50",
    minPrice: "25",
    deliveryTime: "2-3 zile",
  },
  {
    destination: "Germania",
    cities: "München, Frankfurt, Berlin, Stuttgart",
    pricePerKg: "4.00",
    minPrice: "30",
    deliveryTime: "3-4 zile",
  },
  {
    destination: "Belgia",
    cities: "Bruxelles, Antwerp, Gent, Liège",
    pricePerKg: "4.50",
    minPrice: "35",
    deliveryTime: "4-5 zile",
  },
  {
    destination: "Olanda",
    cities: "Amsterdam, Rotterdam, Utrecht, Haga",
    pricePerKg: "4.50",
    minPrice: "35",
    deliveryTime: "4-5 zile",
  },
  {
    destination: "Anglia",
    cities: "Londra, Manchester, Birmingham, Leeds",
    pricePerKg: "5.00",
    minPrice: "40",
    deliveryTime: "5-6 zile",
  },
]

const includedServices = [
  "Preluare de la adresă",
  "Livrare la domiciliu",
  "Asigurare de bază inclusă",
  "Urmărire colet în timp real",
  "Confirmare livrare SMS",
]

export function Pricing() {
  return (
    <section id="tarife" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tarife Transport</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prețuri competitive și transparente pentru toate destinațiile. Fără costuri ascunse.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-semibold">Destinație</th>
                <th className="px-6 py-4 text-left font-semibold">Orașe principale</th>
                <th className="px-6 py-4 text-center font-semibold">Preț/kg</th>
                <th className="px-6 py-4 text-center font-semibold">Comandă minimă</th>
                <th className="px-6 py-4 text-center font-semibold">Timp livrare</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr
                  key={item.destination}
                  className={`border-b border-border last:border-0 ${
                    index % 2 === 0 ? "bg-card" : "bg-muted/20"
                  } hover:bg-accent/50 transition-colors`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{item.destination}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{item.cities}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-primary text-lg">{item.pricePerKg} €</span>
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{item.minPrice} €</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{item.deliveryTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (visible on small screens) */}
        <div className="md:hidden space-y-4 mb-12">
          {pricingData.map((item) => (
            <div key={item.destination} className="bg-card rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-foreground text-lg">{item.destination}</h3>
                <span className="font-bold text-primary text-xl">{item.pricePerKg} €/kg</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.cities}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Min: {item.minPrice} €</span>
                <span>{item.deliveryTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Included Services */}
        <div className="bg-card rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Toate tarifele includ:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedServices.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prețurile pot varia în funcție de dimensiuni și greutate. Contactați-ne pentru o ofertă personalizată.
        </p>
      </div>
    </section>
  )
}
