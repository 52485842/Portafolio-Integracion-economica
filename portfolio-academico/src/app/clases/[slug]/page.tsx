import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllClasesMetadata, getClaseData } from '@/lib/clases'
import SeccionCard from '@/components/clase/SeccionCard'
import BibliografiaSection from '@/components/clase/BibliografiaSection'
import ClaseHeader from '@/components/clase/ClaseHeader'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const clases = getAllClasesMetadata()
  return clases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const clase = await getClaseData(params.slug)
    return {
      title: `Clase ${clase.numero}: ${clase.titulo}`,
      description: clase.descripcion,
    }
  } catch {
    return { title: 'Clase no encontrada' }
  }
}

export default async function ClasePage({ params }: Props) {
  let clase
  try {
    clase = await getClaseData(params.slug)
  } catch {
    notFound()
  }

  const todasLasClases = getAllClasesMetadata()
  const currentIndex = todasLasClases.findIndex((c) => c.slug === params.slug)
  const prevClase = currentIndex > 0 ? todasLasClases[currentIndex - 1] : null
  const nextClase = currentIndex < todasLasClases.length - 1 ? todasLasClases[currentIndex + 1] : null

  return (
    <article>
      {/* Header */}
      <ClaseHeader
        numero={clase.numero}
        titulo={clase.titulo}
        descripcion={clase.descripcion}
        imagenPrincipal={clase.imagenPrincipal}
        imagenAlt={clase.imagenAlt}
        tags={clase.tags}
        fecha={clase.fecha}
      />

      {/* Sections */}
      <div className="mt-10 space-y-8">
        {clase.resumenHtml && (
          <SeccionCard
            titulo="Resumen de Clase"
            icon="📖"
            accentColor="navy"
            contenidoHtml={clase.resumenHtml}
          />
        )}

        {clase.aporteExternoHtml && (
          <SeccionCard
            titulo="Aporte Externo"
            icon="🌐"
            accentColor="gold"
            contenidoHtml={clase.aporteExternoHtml}
          />
        )}

        {clase.opinionPersonalHtml && (
          <SeccionCard
            titulo="Opinión Personal"
            icon="💬"
            accentColor="cream"
            contenidoHtml={clase.opinionPersonalHtml}
          />
        )}

        {clase.bibliografiaHtml && (
          <BibliografiaSection contenidoHtml={clase.bibliografiaHtml} />
        )}
      </div>

      {/* Navigation between clases */}
      <nav
        className="mt-14 pt-8 border-t border-[var(--color-cream-200)] flex items-center justify-between gap-4"
        aria-label="Navegación entre clases"
      >
        {prevClase ? (
          <Link
            href={`/clases/${prevClase.slug}`}
            className="group flex items-center gap-3 text-left flex-1"
          >
            <span className="text-[var(--color-gold-400)] group-hover:text-[var(--color-gold-500)] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <div>
              <p className="text-xs text-[var(--color-gold-500)] tracking-widest uppercase mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Anterior</p>
              <p className="text-sm text-[var(--color-navy-800)] group-hover:text-[var(--color-gold-500)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Clase {prevClase.numero}: {prevClase.titulo}
              </p>
            </div>
          </Link>
        ) : <div className="flex-1" />}

        {nextClase ? (
          <Link
            href={`/clases/${nextClase.slug}`}
            className="group flex items-center gap-3 text-right flex-1 justify-end"
          >
            <div>
              <p className="text-xs text-[var(--color-gold-500)] tracking-widest uppercase mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Siguiente</p>
              <p className="text-sm text-[var(--color-navy-800)] group-hover:text-[var(--color-gold-500)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Clase {nextClase.numero}: {nextClase.titulo}
              </p>
            </div>
            <span className="text-[var(--color-gold-400)] group-hover:text-[var(--color-gold-500)] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        ) : <div className="flex-1" />}
      </nav>
    </article>
  )
}
