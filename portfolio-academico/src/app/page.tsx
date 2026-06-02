import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllClasesMetadata } from '@/lib/clases'

export const metadata: Metadata = {
  title: 'Mecanismos de Integración Económica — Portafolio Académico',
}

export default function HomePage() {
  const clases = getAllClasesMetadata()

  return (
    <main className="min-h-screen">
      {/* ——— HERO ——— */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-navy-900)]">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,106,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,106,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,46,74,0.6) 0%, rgba(12,24,40,0.95) 70%)',
          }}
        />
        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[var(--color-gold-400)] opacity-60" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[var(--color-gold-400)] opacity-60" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[var(--color-gold-400)] opacity-60" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[var(--color-gold-400)] opacity-60" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-[var(--color-gold-300)] text-sm font-light tracking-[0.3em] uppercase mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.6s ease 0.2s forwards', fontFamily: 'var(--font-body)' }}
          >
            Portafolio Académico Universitario
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl font-light text-[var(--color-cream-100)] leading-tight mb-6 opacity-0"
            style={{
              animation: 'fadeUp 0.7s ease 0.4s forwards',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
            }}
          >
            Mecanismos de
            <br />
            <span className="italic font-normal text-[var(--color-gold-300)]">
              Integración Económica
            </span>
          </h1>

          {/* Ornament */}
          <div
            className="flex items-center justify-center gap-4 my-8 opacity-0"
            style={{ animation: 'fadeUp 0.6s ease 0.6s forwards' }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--color-gold-400)]" />
            <div className="w-2 h-2 rotate-45 bg-[var(--color-gold-400)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--color-gold-400)]" />
          </div>

          {/* Subtitle */}
          <p
            className="text-[var(--color-cream-200)] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 opacity-0"
            style={{
              animation: 'fadeUp 0.6s ease 0.8s forwards',
              fontFamily: 'var(--font-body)',
            }}
          >
            Exploración del pensamiento económico argentino y los procesos de integración
            regional e internacional a lo largo de la historia.
          </p>

          {/* CTA Button */}
          <div
            className="opacity-0"
            style={{ animation: 'fadeUp 0.6s ease 1s forwards' }}
          >
            <Link
              href="#clases"
              className="inline-flex items-center gap-3 px-10 py-4 border border-[var(--color-gold-400)] text-[var(--color-gold-300)] hover:bg-[var(--color-gold-400)] hover:text-[var(--color-navy-900)] transition-all duration-300 text-sm tracking-widest uppercase group"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span>Explorar Clases</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Class count */}
          <p
            className="mt-8 text-[var(--color-cream-200)] text-xs tracking-widest uppercase opacity-50 opacity-0"
            style={{ animation: 'fadeUp 0.5s ease 1.2s forwards', fontFamily: 'var(--font-body)' }}
          >
            {clases.length} clases disponibles
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: 'fadeIn 0.6s ease 1.5s forwards' }}
        >
          <span className="text-[var(--color-gold-400)] text-xs tracking-widest uppercase opacity-50" style={{ fontFamily: 'var(--font-body)' }}>Desplazar</span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--color-gold-400)] to-transparent opacity-50" />
        </div>
      </section>

      {/* ——— CLASES GRID ——— */}
      <section id="clases" className="py-24 px-6 bg-[var(--color-cream-50)]">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold-500)] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              Contenido del Curso
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--color-navy-800)]" style={{ fontFamily: 'var(--font-display)' }}>
              Clases y Trabajos
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-16 bg-[var(--color-gold-400)] opacity-50" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold-400)]" />
              <div className="h-px w-16 bg-[var(--color-gold-400)] opacity-50" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clases.map((clase, index) => (
              <Link
                key={clase.slug}
                href={`/clases/${clase.slug}`}
                className="group relative block"
              >
                <article
                  className="card-academic bg-white border border-[var(--color-cream-200)] rounded-lg overflow-hidden h-full"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  {/* Image area / placeholder */}
                  <div
                    className="relative h-44 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-700) 100%)` }}
                  >
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, rgba(212,175,106,0.3) 0px, rgba(212,175,106,0.3) 1px, transparent 0px, transparent 50%)`,
                        backgroundSize: '20px 20px',
                      }}
                    />
                    {/* Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-[8rem] font-light text-white opacity-10 select-none leading-none"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {clase.numero}
                      </span>
                    </div>
                    {/* Class number badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2 py-1 bg-[var(--color-gold-400)] text-[var(--color-navy-900)] text-xs font-medium tracking-widest uppercase"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Clase {clase.numero}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-medium text-[var(--color-navy-800)] mb-2 leading-tight group-hover:text-[var(--color-gold-500)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {clase.titulo}
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed line-clamp-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {clase.descripcion}
                    </p>

                    {/* Tags */}
                    {clase.tags && clase.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {clase.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[var(--color-cream-100)] text-[var(--color-navy-700)] text-xs rounded"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read more */}
                    <div className="flex items-center gap-1.5 mt-5 text-[var(--color-gold-500)] text-xs tracking-widest uppercase group-hover:gap-3 transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span>Leer clase</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="bg-[var(--color-navy-900)] text-[var(--color-cream-200)] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[var(--color-gold-400)] opacity-30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold-400)] opacity-50" />
            <div className="h-px w-16 bg-[var(--color-gold-400)] opacity-30" />
          </div>
          <h2
            className="text-2xl font-light text-[var(--color-cream-100)] mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Mecanismos de Integración Económica
          </h2>
          <p
            className="text-xs tracking-widest uppercase text-[var(--color-cream-200)] opacity-50"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Portafolio Académico Universitario
          </p>
        </div>
      </footer>
    </main>
  )
}
