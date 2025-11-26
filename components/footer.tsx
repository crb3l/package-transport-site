import { Package, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-xl text-primary">EURO</span>
                <span className="font-bold text-xl text-secondary">COLET</span>
              </div>
            </Link>
            <p className="text-white/70 mb-4">
              Transport de colete între România și Europa de Vest. Servicii de încredere de peste 10 ani.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Link-uri rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="#servicii" className="text-white/70 hover:text-secondary transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="#destinatii" className="text-white/70 hover:text-secondary transition-colors">
                  Destinații
                </Link>
              </li>
              <li>
                <Link href="#program" className="text-white/70 hover:text-secondary transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Destinații</h4>
            <ul className="space-y-2">
              <li className="text-white/70">🇦🇹 Austria</li>
              <li className="text-white/70">🇩🇪 Germania</li>
              <li className="text-white/70">🇧🇪 Belgia</li>
              <li className="text-white/70">🇳🇱 Olanda</li>
              <li className="text-white/70">🇬🇧 Anglia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+40 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-secondary" />
                <span>contact@eurocolet.ro</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>București, România</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} EuroColet. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
