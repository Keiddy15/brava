import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRAVA - Tacos a Domicilio Barranquilla | Delivery de Comida Gourmet",
  description:
    "Los mejores tacos a domicilio en Barranquilla y Soledad. Pasta cremosa, tacos bravos de pollo y delivery de comida gourmet. Pedidos por WhatsApp. Abiertos viernes a domingo.",
  keywords:
    "tacos a domicilio Barranquilla, pasta cremosa, delivery de comida gourmet en Soledad, tacos bravos, comida a domicilio Barranquilla, pasta de camarones, ajillo tropical",
  openGraph: {
    title: "BRAVA - Tacos a Domicilio Barranquilla",
    description: "Sabores con carácter. Los mejores tacos y pasta cremosa a domicilio en Barranquilla y Soledad.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/brava-logo.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/brava-logo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/brava-logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/brava-logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4119937588285845');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4119937588285845&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
