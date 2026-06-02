'use client'
import { useState } from 'react'

interface Props {
  titulo: string
  icon: string
  accentColor: 'navy' | 'gold' | 'cream'
  contenidoHtml: string
}

const accentStyles = {
  navy: {
    border: 'border-[var(--color-navy-700)]',
    header: 'bg-[var(--color-navy-800)] text-[var(--color-cream-100)]',
    iconBg: 'bg-[var(--color-navy-700)]',
    badge: 'text-[var(--color-gold-300)]',
  },
  gold: {
    border: 'border-[var(--color-gold-400)]',
    header: 'bg-[var(--color-gold-400)] text-[var(--color-navy-900)]',
    iconBg: 'bg-[rgba(196,154,69,0.2)]',
    badge: 'text-[var(--color-navy-800)]',
  },
  cream: {
    border: 'border-[var(--color-cream-300)]',
    header: 'bg-[var(--color-cream-100)] text-[var(--color-navy-800)]',
    iconBg: 'bg-[var(--color-cream-200)]',
    badge: 'text-[var(--color-navy-700)]',
  },
}

export default function SeccionCard({ titulo, icon, accentColor, contenidoHtml }: Props) {
  const [isOpen, setIsOpen] = useState(true)
  const styles = accentStyles[accentColor]

  return (
    <section
      className={`reveal visible border ${styles.border} rounded-lg overflow-hidden`}
      aria-label={titulo}
    >
      {/* Section header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-3 px-6 py-4 ${styles.header} transition-opacity hover:opacity-90`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg" role="img" aria-hidden>
            {icon}
          </span>
          <h2
            className="text-xl font-medium tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {titulo}
          </h2>
        </div>
        <svg
          className={`w-4 h-4 opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="bg-white px-8 py-7">
          <div
            className="prose-academic"
            dangerouslySetInnerHTML={{ __html: contenidoHtml }}
          />
        </div>
      )}
    </section>
  )
}
