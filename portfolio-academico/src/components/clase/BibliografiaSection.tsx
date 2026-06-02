interface Props {
  contenidoHtml: string
}

export default function BibliografiaSection({ contenidoHtml }: Props) {
  return (
    <section
      className="border border-[var(--color-cream-200)] rounded-lg overflow-hidden"
      aria-label="Bibliografía"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-cream-100)] border-b border-[var(--color-cream-200)]">
        <div className="flex items-center gap-3">
          <span className="text-lg" role="img" aria-hidden>📚</span>
          <h2
            className="text-xl font-medium text-[var(--color-navy-800)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bibliografía
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white px-8 py-7">
        <div
          className="prose-academic [&_ol]:list-decimal [&_ul]:list-none [&_ul_li]:before:content-['→'] [&_ul_li]:before:text-[var(--color-gold-400)] [&_ul_li]:before:mr-2 [&_li]:py-1 [&_li]:border-b [&_li]:border-[var(--color-cream-100)] [&_li:last-child]:border-0"
          dangerouslySetInnerHTML={{ __html: contenidoHtml }}
        />
      </div>

      {/* Decorative footer */}
      <div className="px-6 py-3 bg-[var(--color-cream-50)] border-t border-[var(--color-cream-200)] flex items-center gap-2">
        <div className="h-px flex-1 bg-[var(--color-gold-400)] opacity-20" />
        <span
          className="text-xs text-[var(--color-gold-500)] opacity-50 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Referencias
        </span>
        <div className="h-px flex-1 bg-[var(--color-gold-400)] opacity-20" />
      </div>
    </section>
  )
}
