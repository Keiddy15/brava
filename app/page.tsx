"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, MapPin, Instagram, Menu, X, Clock, Truck, Star } from "lucide-react"
import Image from "next/image"

const whatsappNumber = "573128025717"
const baseWhatsAppURL = `https://wa.me/${whatsappNumber}?text=`

const menuItems = {
  TACOS: [
    {
      name: "Tacos Bravos de Pollo",
      description: "3 tacos con tiras de pollo sazonados con pimientos frescos, cebolla y cilantro.",
      accompaniment: "Acompañamiento: Guacamole",
      price: "22K",
      isStarDish: true,
      isPromo: true,
      image: "/images/tacos-bravos.jpg",
    },
    {
      name: "Tacos Callejeros",
      description: "3 tacos con trozos de carne al estilo brava sazonado con verduras y toque de cilantro.",
      accompaniment: "Acompañamiento: Guacamole",
      price: "22K",
      image: "/images/tacos-callejeros.jpg",
    },
  ],
  PASTAS: [
    {
      name: "Fettuccine Brava di Camarón",
      description: "Pasta cremosa con camarones salteados en mantequilla y ajo.",
      accompaniment: "Acompañamiento: Baguette",
      price: "30K",
      isPromo: true,
      image: "/images/fettuccine-camaron.jpg",
    },
    {
      name: "Pollo Blanco",
      description: "Pasta en salsa blanco con cubos de pollo y toque de cilantro.",
      accompaniment: "Acompañamiento: Baguette",
      price: "25K",
      image: "/images/pollo-blanco.jpg",
    },
  ],
  "AL FUEGO": [
    {
      name: "Pollo al Queso Brava",
      description: "Cubos de pollo en salsa de tres quesos.",
      accompaniment: "Acompañamiento: Papas rústicas doradas",
      price: "25K",
      image: "/images/pollo-queso.jpg",
    },
    {
      name: "Ajillo Tropical",
      description: "Camarones al ajillo en salsa cremosa.",
      accompaniment: "Acompañamiento: Chips de plátano rústicos",
      price: "30K",
      isPromo: true,
      image: "/images/ajillo-tropical.jpg",
    },
  ],
}

const combos = [
  {
    name: "Combo Tacos + Bebida",
    description: "Cualquier taco + bebida refrescante",
    price: "25K",
    originalPrice: "27K",
    image: "/images/tacos-bravos.jpg",
    whatsappMessage: "Hola Brava, quiero el combo de tacos + bebida por 25K",
  },
  {
    name: "Dupla Brava - Camarones",
    description: "2 pastas de camarones para compartir",
    price: "50K",
    originalPrice: "60K",
    image: "/images/fettuccine-camaron.jpg",
    whatsappMessage: "Hola Brava, quiero la Dupla Brava de 2 pastas de camarones por 50K",
    isHighlighted: true,
  },
  {
    name: "Dupla Brava - Pollo",
    description: "2 pastas de pollo en salsa blanca",
    price: "40K",
    originalPrice: "50K",
    image: "/images/pollo-blanco.jpg",
    whatsappMessage: "Hola Brava, quiero la Dupla Brava de 2 pastas de pollo por 40K",
  },
  {
    name: "Dupla Ajillo Tropical",
    description: "2 camarones al ajillo con chips de plátano",
    price: "50K",
    originalPrice: "60K",
    image: "/images/ajillo-tropical.jpg",
    whatsappMessage: "Hola Brava, quiero la Dupla de 2 camarones al ajillo por 50K",
    isHighlighted: true,
  },
]

const generateWhatsAppMessage = (item: { name: string; description: string; accompaniment: string; price: string }) => {
  const message = `¡Hola BRAVA! 🌮

Me gustaría ordenar:

📋 *${item.name}* - $${item.price}
${item.description}
(${item.accompaniment})

¿Podrían confirmar disponibilidad y tiempo de entrega?

¡Gracias!`

  return baseWhatsAppURL + encodeURIComponent(message)
}

const trackWhatsAppClick = (source: string) => {
  // Track WhatsApp clicks with Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("trackCustom", "WhatsAppClick", {
      source: source,
      content_name: "BRAVA Order",
    })
  }
}

export default function BravaWebsite() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [activeCategory, setActiveCategory] = useState("TACOS")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState(false)

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppClick = (message: string, source: string) => {
    trackWhatsAppClick(source)
    window.open(baseWhatsAppURL + encodeURIComponent(message), "_blank")
  }

  const openImageModal = (imageSrc: string) => {
    setImageLoading(true)
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setImageLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#CBAF87]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm z-50 border-b border-[#CBAF87]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/brava-logo.jpg"
              alt="BRAVA Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "inicio" ? "text-[#EADCC4]" : ""}`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("combos")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "combos" ? "text-[#EADCC4]" : ""}`}
            >
              Combos
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`hover:text-[#EADCC4] transition-colors ${activeSection === "menu" ? "text-[#EADCC4]" : ""}`}
            >
              Menú
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
                onClick={() => scrollToSection("combos")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Combos
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="block w-full text-left hover:text-[#EADCC4] transition-colors"
              >
                Menú
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
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]/60 z-10"></div>
        <div className="absolute inset-0">
          <Image src="/images/brava-food.jpg" alt="BRAVA Food" fill className="object-cover opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 text-center z-20 relative">
          <div className="mb-8">
            <Image
              src="/images/brava-logo.jpg"
              alt="BRAVA Logo"
              width={250}
              height={250}
              className="mx-auto mb-8 rounded-lg shadow-lg border-2 border-[#CBAF87]/30"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-[#CBAF87]">BRAVA</h1>
          <p className="text-2xl md:text-3xl font-serif mb-8 text-[#EADCC4]">Sabores con carácter</p>

          {/* Hours and Coverage Info */}
          <div className="bg-[#CBAF87]/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Clock className="text-[#CBAF87] mb-2" size={24} />
                <p className="text-[#EADCC4] font-semibold">Viernes a Domingo</p>
                <p className="text-[#CBAF87] text-sm">11 AM - 10:30 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="text-[#CBAF87] mb-2" size={24} />
                <p className="text-[#EADCC4] font-semibold">Entregamos en</p>
                <p className="text-[#CBAF87] text-sm">Barranquilla y Soledad</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="text-[#CBAF87] mb-2" size={24} />
                <p className="text-[#EADCC4] font-semibold">Plato Estrella</p>
                <p className="text-[#CBAF87] text-sm">Tacos Bravos de Pollo</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => handleWhatsAppClick("Hola Brava, quiero hacer un pedido", "hero-button")}
              className="bg-[#CBAF87] text-[#1a1a1a] hover:bg-[#EADCC4] text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Hacer Pedido por WhatsApp
            </Button>

            <Button
              onClick={() => window.open("https://instagram.com/brava.bq", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Instagram size={20} />
              Síguenos en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section id="combos" className="py-20 bg-gradient-to-r from-[#CBAF87]/10 to-[#EADCC4]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-[#CBAF87]">
            🔥 Combos Activos
          </h2>
          <p className="text-center text-[#EADCC4] mb-16 text-lg">¡Ofertas especiales que no puedes perderte!</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {combos.map((combo, index) => (
              <Card
                key={index}
                className={`bg-[#1a1a1a] border-[#CBAF87]/30 hover:border-[#CBAF87] transition-all duration-300 overflow-hidden flex flex-col h-full ${
                  combo.isHighlighted ? "ring-2 ring-orange-500 shadow-lg shadow-orange-500/20" : ""
                }`}
              >
                <div className="relative h-64 cursor-pointer group" onClick={() => openImageModal(combo.image)}>
                  <Image
                    src={combo.image || "/placeholder.svg"}
                    alt={combo.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded">
                      Click para ver
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-500 text-white font-bold">OFERTA</Badge>
                  </div>
                  {combo.isHighlighted && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-orange-500 text-white font-bold animate-pulse">🦐 DESTACADO</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-semibold text-[#CBAF87] mb-2">{combo.name}</h3>
                  <p className="text-[#EADCC4] text-sm mb-4">{combo.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#CBAF87]">${combo.price}</span>
                    <span className="text-sm text-gray-400 line-through">${combo.originalPrice}</span>
                  </div>
                  <Button
                    onClick={() => handleWhatsAppClick(combo.whatsappMessage, `combo-${index}`)}
                    className={`w-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${
                      combo.isHighlighted
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-[#CBAF87] text-[#1a1a1a] hover:bg-[#EADCC4]"
                    }`}
                  >
                    <MessageCircle size={18} />
                    Ordenar Combo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card
                key={index}
                className={`bg-[#1a1a1a] border-[#CBAF87]/30 hover:border-[#CBAF87] transition-all duration-300 overflow-hidden flex flex-col h-full ${
                  item.isStarDish ? "ring-2 ring-[#CBAF87]/50" : ""
                } ${item.isPromo ? "ring-2 ring-orange-500 shadow-lg shadow-orange-500/20" : ""}`}
              >
                <div className="relative h-64 cursor-pointer group" onClick={() => openImageModal(item.image)}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded">
                      Click para ver
                    </div>
                  </div>
                  {item.isStarDish && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-[#CBAF87] text-[#1a1a1a] font-bold flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        ESTRELLA
                      </Badge>
                    </div>
                  )}
                  {item.isPromo && !item.isStarDish && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-orange-500 text-white font-bold animate-pulse">
                        {item.name.includes("Camarón") || item.name.includes("Ajillo") ? "🦐" : "🔥"} PROMO
                      </Badge>
                    </div>
                  )}
                  {item.isPromo && item.isStarDish && (
                    <div className="absolute top-14 left-2">
                      <Badge className="bg-orange-500 text-white font-bold animate-pulse">🔥 PROMO</Badge>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-[#CBAF87] text-[#1a1a1a] font-bold">${item.price}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-serif font-semibold text-[#CBAF87]">{item.name}</h3>
                    {item.isStarDish && <Star className="text-[#CBAF87]" size={20} fill="currentColor" />}
                  </div>
                  <p className="text-[#EADCC4] leading-relaxed mb-3">{item.description}</p>
                  <p className="text-[#CBAF87] text-sm mb-4 italic">({item.accompaniment})</p>
                  <Button
                    onClick={() => {
                      const url = generateWhatsAppMessage(item)
                      trackWhatsAppClick(`menu-${item.name}`)
                      window.open(url, "_blank")
                    }}
                    className={`w-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${
                      item.isPromo
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-[#CBAF87] text-[#1a1a1a] hover:bg-[#EADCC4]"
                    }`}
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

      {/* Instagram Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#CBAF87]/10 to-[#EADCC4]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#CBAF87]">¡Síguenos en Instagram!</h2>
            <p className="text-xl text-[#EADCC4] mb-8">
              Descubre nuestras creaciones diarias, promociones exclusivas y el detrás de cámaras de BRAVA
            </p>
            <div className="bg-[#1a1a1a] rounded-lg p-8 mb-8">
              <Instagram className="text-[#CBAF87] mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-serif font-bold text-[#CBAF87] mb-4">@brava.bq</h3>
              <p className="text-[#EADCC4] mb-6">
                📸 Fotos de nuestros platos
                <br />🔥 Promociones especiales
                <br />
                👨‍🍳 Proceso de preparación
                <br />💬 Interactúa con nosotros
              </p>
              <Button
                onClick={() => window.open("https://instagram.com/brava.bq", "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <Instagram size={24} />
                Seguir en Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-[#CBAF87]">Contacto</h2>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <MapPin className="text-[#CBAF87]" size={24} />
              <span className="text-xl text-[#EADCC4]">Barranquilla y Soledad, Colombia</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <MessageCircle className="text-[#CBAF87]" size={24} />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#EADCC4] hover:text-[#CBAF87] transition-colors"
              >
                +57 312 802 5717
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

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppClick("Hola Brava, quiero hacer un pedido", "floating-button")}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
        <div className="absolute -top-12 -left-20 bg-[#CBAF87] text-[#1a1a1a] px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
          ¡Haz tu pedido!
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-[#CBAF87] text-[#1a1a1a] p-2 rounded-full hover:bg-[#EADCC4] transition-colors"
            >
              <X size={24} />
            </button>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CBAF87]"></div>
              </div>
            )}
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Vista ampliada"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
