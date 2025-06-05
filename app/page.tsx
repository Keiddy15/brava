"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, MapPin, Instagram, Menu, X } from "lucide-react"
import Image from "next/image"

const menuItems = {
  TACOS: [
    {
      name: "Tacos Bravos de Pollo",
      description: "Tiras de pollo sazonados con pimientos frescos, cebolla y cilantro.",
      accompaniment: "Acompañamiento: Guacamole",
      price: "22K",
    },
    {
      name: "Tacos Callejeros",
      description: "Trozos de carne al estilo brava sazonado con verduras y toque de cilantro.",
      accompaniment: "Acompañamiento: Guacamole",
      price: "22K",
    },
  ],
  PASTAS: [
    {
      name: "Fettuccine Brava di Camarón",
      description: "Pasta cremosa con camarones salteados en mantequilla y ajo.",
      accompaniment: "Acompañamiento: Baguette",
      price: "30K",
    },
    {
      name: "Pollo Blanco",
      description: "Pasta en salsa blanco con cubos de pollo y toque de cilantro.",
      accompaniment: "Acompañamiento: Baguette",
      price: "25K",
    },
  ],
  "AL FUEGO": [
    {
      name: "Pollo al Queso Brava",
      description: "Cubos de pollo en salsa de tres quesos.",
      accompaniment: "Acompañamiento: Papas rústicas doradas",
      price: "25K",
    },
    {
      name: "Ajillo Tropical",
      description: "Camarones al ajillo en salsa cremosa.",
      accompaniment: "Acompañamiento: Chips de plátano rústicos",
      price: "30K",
    },
  ],
}

const generateWhatsAppMessage = (item: { name: string; description: string; accompaniment: string; price: string }) => {
  const message = `¡Hola BRAVA! 🌮

Me gustaría ordenar:

📋 *${item.name}* - $${item.price}
${item.description}
(${item.accompaniment})

¿Podrían confirmar disponibilidad y tiempo de entrega?

¡Gracias!`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/573043121836?text=${encodedMessage}`
}

export default function BravaWebsite() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [activeCategory, setActiveCategory] = useState("TACOS")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#CBAF87]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm z-50 border-b border-[#CBAF87]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">BRAVA</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "inicio" ? "text-[#EADCC4]" : ""}`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "menu" ? "text-[#EADCC4]" : ""}`}
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("promociones")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "promociones" ? "text-[#EADCC4]" : ""}`}
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "contacto" ? "text-[#EADCC4]" : ""}`}
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#CBAF87]/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("promociones")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Promociones
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]/60 z-10"></div>
        <div className="absolute inset-0">
          <Image src="/images/brava-food.jpg" alt="BRAVA Food" fill className="object-cover opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 text-center z-20 relative">
          <div className="mb-8">
            <Image
              src="/images/brava-logo.jpg"
              alt="BRAVA Logo"
              width={200}
              height={200}
              className="mx-auto mb-8 rounded-lg"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-[#CBAF87]">BRAVA</h1>
          <p className="text-2xl md:text-3xl font-serif mb-12 text-[#EADCC4]">Sabores con carácter</p>
          <Button
            onClick={() => scrollToSection("menu")}
            className="bg-[#CBAF87] text-[#1a1a1a] hover:bg-[#EADCC4] text-lg px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver menú
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-[#CBAF87]">Nuestro Menú</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.keys(menuItems).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-semibold transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? "bg-[#CBAF87] text-[#1a1a1a] border-[#CBAF87]"
                    : "bg-transparent text-[#CBAF87] border-[#CBAF87] hover:bg-[#CBAF87]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border-[#CBAF87]/30 hover:border-[#CBAF87] transition-all duration-300 max-w-md mx-auto h-[300px] flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold text-[#CBAF87]">{item.name}</h3>
                    <Badge className="bg-[#CBAF87] text-[#1a1a1a] font-bold">${item.price}</Badge>
                  </div>
                  <p className="text-[#EADCC4] leading-relaxed mb-2">{item.description}</p>
                  <p className="text-[#CBAF87] text-sm mb-4 italic">({item.accompaniment})</p>
                  <Button
                    onClick={() => window.open(generateWhatsAppMessage(item), "_blank")}
                    className="w-full bg-[#CBAF87] text-[#1a1a1a] hover:bg-[#EADCC4] font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                  >
                    <MessageCircle size={18} />
                    Ordenar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promociones" className="py-20 bg-gradient-to-r from-[#CBAF87]/10 to-[#EADCC4]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-[#CBAF87]">
            Promociones Especiales
          </h2>

          <Card className="max-w-4xl mx-auto bg-[#CBAF87] text-[#1a1a1a] border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">¡Gran lanzamiento este fin de semana!</h3>
              <p className="text-xl mb-4 font-semibold">Junio 6 - Junio 8</p>
              <div className="space-y-4 mb-8">
                <div className="text-2xl font-bold">🌮 Tacos a $20.000</div>
                <div className="text-xl">10% de descuento en el resto del menú</div>
              </div>
              <div className="flex justify-center">
                <Button
                  className="bg-[#1a1a1a] text-[#CBAF87] hover:bg-[#1a1a1a]/80 flex items-center gap-2"
                  onClick={() => window.open("https://wa.me/573043121836", "_blank")}
                >
                  <MessageCircle size={20} />
                  Ordenar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-[#CBAF87]">Contacto</h2>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <MapPin className="text-[#CBAF87]" size={24} />
              <span className="text-xl text-[#EADCC4]">Barranquilla, Colombia</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <MessageCircle className="text-[#CBAF87]" size={24} />
              <a
                href="https://wa.me/573043121836"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#EADCC4] hover:text-[#CBAF87] transition-colors"
              >
                +57 304 3121836
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Instagram className="text-[#CBAF87]" size={24} />
              <a
                href="https://instagram.com/brava.bq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#EADCC4] hover:text-[#CBAF87] transition-colors"
              >
                @brava.bq
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1a1a] border-t border-[#CBAF87]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#EADCC4] font-serif">© 2025 BRAVA - Sabores con carácter</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/573043121836", "_blank")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
