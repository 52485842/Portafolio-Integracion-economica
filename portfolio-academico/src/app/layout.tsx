import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mecanismos de Integración Económica — Portafolio Académico',
    template: '%s | Mecanismos de Integración Económica',
  },
  description:
    'Portafolio académico universitario desarrollado para la materia Mecanismos de Integración Económica. Incluye clases, análisis y reflexiones sobre historia económica argentina e integración regional.',
  keywords: [
    'integración económica',
    'economía argentina',
    'peronismo',
    'MERCOSUR',
    'comercio exterior',
    'organismos internacionales',
    'portafolio académico',
  ],
  openGraph: {
    title: 'Mecanismos de Integración Económica — Portafolio Académico',
    description:
      'Portafolio académico universitario sobre Mecanismos de Integración Económica.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-cream-50)] text-[var(--color-navy-800)]">
        {children}
      </body>
    </html>
  )
}
