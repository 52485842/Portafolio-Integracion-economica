import Image from 'next/image'

interface Props {
  numero: number
  titulo: string
  descripcion: string
  imagenPrincipal: string
  imagenAlt: string
  tags?: string[]
  fecha?: string
}

export default function ClaseHeader({
  numero,
  titulo,
  descripcion,
  imagenPrincipal,
  imagenAlt,
  tags,
  fecha,
}: Props) {
  return (
    <header className="animate-fade-up">
      {/* Class number label */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="px-3 py-1 bg-[var(--color-navy-800)] text-[var(--color-gold-300)] text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Clase {numero}
        </span>
        {fecha && (
          <span
            className="text-xs text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {fecha}
          </span>
        )}
      </div>

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-light text-[var(--color-navy-900)] leading-tight mb-4"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
      >
        {titulo}
      </h1>

      {/* Ornament */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-12 bg-[var(--color-gold-400)]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-gold-400)]" />
      </div>

      {/* Description */}
      <p
        className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {descripcion}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-7">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[var(--color-cream-100)] border border-[var(--color-cream-300)] text-[var(--color-navy-700)] text-xs rounded-full"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hero image */}
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-[var(--color-navy-800)]">
        {/* Decorative pattern (always shown) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(212,175,106,0.08) 0px, rgba(212,175,106,0.08) 1px, transparent 0px, transparent 40%)
            `,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,46,74,0.9) 0%, rgba(18,32,56,0.7) 100%)',
          }}
        />
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <span
            className="text-[var(--color-gold-300)] text-xs tracking-widest uppercase mb-3 opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            📌 Para agregar imagen: /public/images/clases/{`clase-${numero}.jpg`}
          </span>
          <p
            className="text-[var(--color-cream-100)] text-2xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {titulo}
          </p>
        </div>
      </div>
      {/* Image guide note */}
      <p
        className="mt-2 text-xs text-gray-400 italic"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        * Reemplazar con imagen real: ver sección &quot;Imágenes&quot; en el README.
      </p>
    </header>
  )
}
