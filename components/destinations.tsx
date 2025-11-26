import { ArrowRight } from "lucide-react"

const destinations = [
  {
    country: "Austria",
    cities: "Viena, Graz, Linz, Salzburg",
    image: "/vienna-austria-cityscape-architecture.jpg",
    flag: "🇦🇹",
  },
  {
    country: "Germania",
    cities: "Berlin, München, Frankfurt, Stuttgart",
    image: "/berlin-germany-brandenburg-gate.jpg",
    flag: "🇩🇪",
  },
  {
    country: "Belgia",
    cities: "Bruxelles, Antwerp, Gent, Bruges",
    image: "/brussels-belgium-grand-place.jpg",
    flag: "🇧🇪",
  },
  {
    country: "Olanda",
    cities: "Amsterdam, Rotterdam, Haga, Utrecht",
    image: "/amsterdam-netherlands-canals-houses.jpg",
    flag: "🇳🇱",
  },
  {
    country: "Anglia",
    cities: "Londra, Manchester, Birmingham, Leeds",
    image: "/london-england-big-ben-tower.jpg",
    flag: "🇬🇧",
  },
  {
    country: "România",
    cities: "București, Cluj, Timișoara, Iași",
    image: "/bucharest-romania-palace-parliament.jpg",
    flag: "🇷🇴",
  },
]

export function Destinations() {
  return (
    <section id="destinatii" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold mb-2">DESTINAȚII</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Țările în care livrăm</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transport săptămânal de colete din România către principalele destinații europene și retur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.country}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <h3 className="text-2xl font-bold">{dest.country}</h3>
                </div>
                <p className="text-white/80 mb-3">{dest.cities}</p>
                <div className="flex items-center gap-2 text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Detalii</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
