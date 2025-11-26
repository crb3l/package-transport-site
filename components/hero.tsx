import { ArrowRight, Truck, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Transport colete România - Europa</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Transport Colete
              <span className="text-white/70"> România - Europa</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Servicii de curierat internațional de încredere. Livrăm coletele dumneavoastră săptămânal în Austria,
              Germania, Belgia, Olanda și Anglia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Solicită ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-primary-foreground bg-white/10 hover:bg-white/20"
              >
                Vezi programul
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-lg">Door to Door</p>
                  <p className="text-sm text-white/70">Livrare la ușă</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-lg">Săptămânal</p>
                  <p className="text-sm text-white/70">Curse regulate</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-lg">Asigurat</p>
                  <p className="text-sm text-white/70">100% siguranță</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <img src="/white-delivery-van-simple-clean-background.jpg" alt="Dubiță albă de transport" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold text-foreground">10+</p>
                <p className="text-muted-foreground">Ani de experiență</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-foreground text-white p-4 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm">Țări deservite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
