import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Popescu",
    location: "București → München",
    rating: 5,
    text: "Servicii excelente! Coletul a ajuns în Germania în doar 3 zile. Comunicare foarte bună și prețuri corecte. Recomand cu încredere!",
    date: "Octombrie 2024",
  },
  {
    name: "Andrei Ionescu",
    location: "Cluj-Napoca → Londra",
    rating: 5,
    text: "Am trimis pachete de mai multe ori în Anglia și de fiecare dată totul a fost perfect. Preluare de la ușă și livrare la destinație fără probleme.",
    date: "Noiembrie 2024",
  },
  {
    name: "Elena Dumitrescu",
    location: "Viena → Timișoara",
    rating: 5,
    text: "Foarte mulțumită de serviciile lor. Am trimis cadouri familiei din România și au ajuns în condiții perfecte. Prețuri accesibile!",
    date: "Septembrie 2024",
  },
  {
    name: "Cristian Marin",
    location: "Bruxelles → Iași",
    rating: 5,
    text: "Profesionalism de nota 10. Cursa săptămânală e foarte convenabilă, iar coletele ajung mereu la timp. Sunt client fidel de 2 ani.",
    date: "Octombrie 2024",
  },
  {
    name: "Ana Gheorghe",
    location: "Rotterdam → Constanța",
    rating: 5,
    text: "Excelent! Am comparat cu alte firme și aceștia au cele mai bune prețuri și cel mai bun serviciu. Recomand tuturor românilor din Olanda!",
    date: "Noiembrie 2024",
  },
  {
    name: "Mihai Stoica",
    location: "Frankfurt → București",
    rating: 5,
    text: "Rapid, sigur și la prețuri foarte bune. Echipa este mereu amabilă și răspunde la telefon. Nu am avut niciodată probleme.",
    date: "Octombrie 2024",
  },
]

export function Testimonials() {
  return (
    <section id="testimoniale" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ce Spun Clienții Noștri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peste 10.000 de clienți mulțumiți ne-au acordat încrederea lor. Iată ce spun despre serviciile noastre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">10.000+</p>
            <p className="text-sm">Clienți Mulțumiți</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">50.000+</p>
            <p className="text-sm">Colete Livrate</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">99.8%</p>
            <p className="text-sm">Livrări la Timp</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">4.9/5</p>
            <p className="text-sm">Rating Mediu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
