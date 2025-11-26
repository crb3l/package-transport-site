"use client"

import { useState } from "react"
import { Package, Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Acasă", href: "#" },
    { label: "Servicii", href: "#servicii" },
    { label: "Destinații", href: "#destinatii" },
    { label: "Program", href: "#program" },
    { label: "Tarife", href: "#tarife" },
    { label: "Testimoniale", href: "#testimoniale" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-xl text-primary">EURO</span>
              <span className="font-bold text-xl text-secondary">COLET</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+40700000000"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0700 000 000</span>
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+40700000000"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold w-fit"
              >
                <Phone className="h-4 w-4" />
                <span>0700 000 000</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
