"use client"

import { useState } from "react"
import { Phone, MessageCircle, X } from "lucide-react"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-4 fade-in duration-200">
          <a
            href="tel:+40700000000"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Sună acum</span>
          </a>
          <a
            href="https://wa.me/40700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          isOpen ? "bg-muted-foreground" : "bg-secondary"
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Phone className="h-6 w-6 text-secondary-foreground" />}
      </button>
    </div>
  )
}
