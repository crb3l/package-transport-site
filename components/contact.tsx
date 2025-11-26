"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon România",
    value: "+40 700 000 000",
    href: "tel:+40700000000",
  },
  {
    icon: Phone,
    label: "Telefon Europa",
    value: "+49 123 456 789",
    href: "tel:+49123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@eurocolet.ro",
    href: "mailto:contact@eurocolet.ro",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Sâmbătă: 08:00 - 20:00",
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold mb-2">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contactați-ne pentru detalii</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Suntem aici să vă ajutăm! Contactați-ne pentru oferte personalizate sau orice întrebare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informații de contact</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-muted">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-semibold hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-2">Aveți nevoie de ajutor urgent?</h4>
              <p className="text-white/80 mb-4">
                Sunați-ne direct pentru asistență imediată sau pentru a plasa o comandă.
              </p>
              <a
                href="tel:+40700000000"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Sună acum
              </a>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nume complet</label>
                    <Input
                      placeholder="Numele dumneavoastră"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon</label>
                      <Input
                        type="tel"
                        placeholder="+40 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="email@exemplu.ro"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mesaj</label>
                    <Textarea
                      placeholder="Descrieți detaliile coletului și destinația..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-5 w-5" />
                    Trimite mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
