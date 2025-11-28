"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, MapPin, Calendar, Weight, Hash, RotateCcw, Send, Ruler } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const countries = [
  "România",
  "Germania",
  "Belgia",
  "Olanda",
  "Anglia",
  "Luxemburg",
  "Franța",
  "Italia",
  "Spania",
  "Portugalia",
  "Austria",
  "Elveția",
]

export function ShippingCalculator() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fromCountry: "",
    fromAddress: "",
    toCountry: "",
    toAddress: "",
    shipDate: "",
    numPackages: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    email: "",
  })
  const [calculatedRate, setCalculatedRate] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCalculate = async () => {
    // Validate form
    if (
      !formData.fromCountry ||
      !formData.fromAddress ||
      !formData.toCountry ||
      !formData.toAddress ||
      !formData.shipDate ||
      !formData.numPackages ||
      !formData.weight ||
      !formData.length ||
      !formData.width ||
      !formData.height
    ) {
      toast({
        title: "Câmpuri incomplete",
        description: "Vă rugăm să completați toate câmpurile pentru a calcula tariful.",
        variant: "destructive",
      })
      return
    }

    setIsCalculating(true)

    // Simulate calculation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const baseRate = 2.5
    const weight = Number.parseFloat(formData.weight)
    const packages = Number.parseInt(formData.numPackages)
    const countryFactor = formData.toCountry === "România" ? 1 : 1.5

    // Calculate volumetric weight (L x W x H / 5000)
    const length = Number.parseFloat(formData.length)
    const width = Number.parseFloat(formData.width)
    const height = Number.parseFloat(formData.height)
    const volumetricWeight = (length * width * height) / 5000

    // Use the greater of actual weight or volumetric weight
    const chargeableWeight = Math.max(weight, volumetricWeight)
    const rate = baseRate * chargeableWeight * packages * countryFactor

    setCalculatedRate(Math.round(rate * 100) / 100)
    setIsCalculating(false)

    toast({
      title: "Tarif calculat!",
      description: `Costul estimat al transportului este €${Math.round(rate * 100) / 100}`,
    })
  }

  const handleReset = () => {
    setFormData({
      fromCountry: "",
      fromAddress: "",
      toCountry: "",
      toAddress: "",
      shipDate: "",
      numPackages: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      email: "",
    })
    setCalculatedRate(null)
  }

  const handleSendOrder = async () => {
    if (!formData.email) {
      toast({
        title: "Email necesar",
        description: "Vă rugăm să introduceți adresa de email pentru confirmare.",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)

    // Simulate sending to backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSending(false)
    toast({
      title: "Comandă trimisă cu succes!",
      description: "Veți primi un email de confirmare în curând. Echipa noastră va reveni cu oferta finală.",
    })

    // Reset form after successful send
    setTimeout(() => {
      handleReset()
    }, 2000)
  }

  return (
    <section id="calculator">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-3">
              {/* <Package className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">EmaTrans</h1> */}
            </div>
          </div>
          <p className="text-xl text-muted-foreground">Calculator Tarife Transport</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Obțineți un cost estimat instant pentru transportul dumneavoastră
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-primary" />
                Detalii Transport
              </CardTitle>
              <CardDescription>Completați formularul pentru a calcula tariful de transport</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Location Section */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-country" className="flex items-center gap-2 text-base font-semibold">
                      <MapPin className="h-4 w-4 text-primary" />
                      Țara de origine
                    </Label>
                    <Select
                      value={formData.fromCountry}
                      onValueChange={(value) => handleInputChange("fromCountry", value)}
                    >
                      <SelectTrigger id="from-country" className="h-11">
                        <SelectValue placeholder="Selectați țara de origine" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from-address" className="text-base font-semibold">
                      Adresa de origine
                    </Label>
                    <Input
                      id="from-address"
                      type="text"
                      placeholder="Strada, Nr., Oraș, Cod Poștal"
                      className="h-11"
                      value={formData.fromAddress}
                      onChange={(e) => handleInputChange("fromAddress", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="to-country" className="flex items-center gap-2 text-base font-semibold">
                      <MapPin className="h-4 w-4 text-primary" />
                      Țara de destinație
                    </Label>
                    <Select value={formData.toCountry} onValueChange={(value) => handleInputChange("toCountry", value)}>
                      <SelectTrigger id="to-country" className="h-11">
                        <SelectValue placeholder="Selectați țara de destinație" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-address" className="text-base font-semibold">
                      Adresa de destinație
                    </Label>
                    <Input
                      id="to-address"
                      type="text"
                      placeholder="Strada, Nr., Oraș, Cod Poștal"
                      className="h-11"
                      value={formData.toAddress}
                      onChange={(e) => handleInputChange("toAddress", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Date - Changed label from "Data transportului" to "Data expedierii" */}
              <div className="space-y-2">
                <Label htmlFor="ship-date" className="flex items-center gap-2 text-base font-semibold">
                  <Calendar className="h-4 w-4 text-primary" />
                  Data expedierii
                </Label>
                <Input
                  id="ship-date"
                  type="date"
                  className="h-11"
                  value={formData.shipDate}
                  onChange={(e) => handleInputChange("shipDate", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {/* Package Details Section */}
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Package className="h-5 w-5 text-primary" />
                  Detalii Colete
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="num-packages" className="flex items-center gap-2 text-base font-semibold">
                      <Hash className="h-4 w-4 text-primary" />
                      Număr de colete
                    </Label>
                    <Input
                      id="num-packages"
                      type="number"
                      min="1"
                      placeholder="Ex: 2"
                      className="h-11"
                      value={formData.numPackages}
                      onChange={(e) => handleInputChange("numPackages", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight" className="flex items-center gap-2 text-base font-semibold">
                      <Weight className="h-4 w-4 text-primary" />
                      Greutate totală (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      min="0.1"
                      step="0.1"
                      placeholder="Ex: 15.5"
                      className="h-11"
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label className="mb-3 flex items-center gap-2 text-base font-semibold">
                    <Ruler className="h-4 w-4 text-primary" />
                    Dimensiuni colet (cm)
                  </Label>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="length" className="text-sm">
                        Lungime (L)
                      </Label>
                      <Input
                        id="length"
                        type="number"
                        min="1"
                        step="0.1"
                        placeholder="Ex: 50"
                        className="h-11"
                        value={formData.length}
                        onChange={(e) => handleInputChange("length", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width" className="text-sm">
                        Lățime (W)
                      </Label>
                      <Input
                        id="width"
                        type="number"
                        min="1"
                        step="0.1"
                        placeholder="Ex: 40"
                        className="h-11"
                        value={formData.width}
                        onChange={(e) => handleInputChange("width", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-sm">
                        Înălțime (H)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        min="1"
                        step="0.1"
                        placeholder="Ex: 30"
                        className="h-11"
                        value={formData.height}
                        onChange={(e) => handleInputChange("height", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculated Rate Display */}
              {calculatedRate !== null && (
                <div className="rounded-lg border-2 border-primary bg-primary/10 p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Tarif estimat</p>
                    <p className="mt-2 text-4xl font-bold text-primary">€{calculatedRate}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      *Acesta este un tarif estimat. Veți primi oferta finală de la echipa noastră.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="h-12 flex-1 text-base font-semibold"
                  size="lg"
                >
                  {isCalculating ? <>Calculare...</> : <>Calculează Tariful</>}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="h-12 border-2 text-base font-semibold bg-transparent"
                  size="lg"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Resetare
                </Button>
              </div>

              {/* Send Order Section */}
              {calculatedRate !== null && (
                <div className="space-y-4 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                  <h3 className="text-lg font-semibold">Trimite comanda către echipa noastră</h3>
                  <p className="text-sm text-muted-foreground">
                    Introduceți email-ul pentru a primi confirmarea și oferta detaliată
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Adresa de email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplu@email.com"
                      className="h-11"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={handleSendOrder}
                    disabled={isSending}
                    className="h-12 w-full text-base font-semibold"
                    size="lg"
                  >
                    {isSending ? (
                      <>Trimitere...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Trimite Comanda
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Footer */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Pentru informații suplimentare, contactați-ne la{" "}
              <span className="font-semibold text-primary">+40 748 419 428</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
