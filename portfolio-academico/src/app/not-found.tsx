import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream-50)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p
          className="text-[var(--color-gold-400)] text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Error 404
        </p>
        <h1
          className="text-5xl font-light text-[var(--color-navy-800)] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Página no encontrada
        </h1>
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px w-12 bg-[var(--color-gold-400)] opacity-40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold-400)]" />
          <div className="h-px w-12 bg-[var(--color-gold-400)] opacity-40" />
        </div>
        <p
          className="text-gray-500 mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          La clase o sección que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-navy-700)] text-[var(--color-navy-800)] hover:bg-[var(--color-navy-800)] hover:text-[var(--color-cream-100)] transition-all text-sm tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
