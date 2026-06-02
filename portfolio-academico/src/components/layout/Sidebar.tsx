'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ClaseMeta {
  slug: string
  numero: number
  titulo: string
}

interface SidebarProps {
  clases: ClaseMeta[]
}

export default function Sidebar({ clases }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{ slug: string; titulo: string; numero: number; excerpt: string }[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([])
        return
      }
      setIsSearching(true)
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await res.json()
      setSearchResults(data.results || [])
      setIsSearching(false)
    }
    const timeout = setTimeout(handleSearch, 300)
    return () => clearTimeout(timeout)
  }, [searchQuery])

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[var(--color-navy-800)] text-[var(--color-cream-100)] p-2.5 rounded shadow-lg"
        aria-label="Abrir menú de navegación"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar-nav fixed top-0 left-0 h-full z-40 flex flex-col bg-[var(--color-navy-900)] border-r border-[rgba(212,175,106,0.15)]
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ width: '280px' }}
      >
        {/* Logo / Header */}
        <div className="p-6 border-b border-[rgba(212,175,106,0.15)]">
          <Link href="/" className="block group">
            <p
              className="text-[var(--color-gold-400)] text-xs tracking-widest uppercase mb-1 opacity-70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Portafolio Académico
            </p>
            <h1
              className="text-[var(--color-cream-100)] text-xl font-light leading-tight group-hover:text-[var(--color-gold-300)] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mecanismos de Integración Económica
            </h1>
          </Link>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-[rgba(212,175,106,0.15)]">
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar en clases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,106,0.2)] text-[var(--color-cream-200)] placeholder-[rgba(232,217,168,0.4)] text-sm px-3 py-2 pr-8 rounded focus:outline-none focus:border-[var(--color-gold-400)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <svg
              className="absolute right-2.5 top-2.5 w-4 h-4 text-[var(--color-gold-400)] opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Search results */}
          {(searchResults.length > 0 || isSearching) && (
            <div className="mt-2 bg-[var(--color-navy-800)] border border-[rgba(212,175,106,0.15)] rounded overflow-hidden">
              {isSearching ? (
                <p className="p-3 text-xs text-[var(--color-cream-200)] opacity-50" style={{ fontFamily: 'var(--font-body)' }}>Buscando...</p>
              ) : (
                searchResults.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/clases/${r.slug}`}
                    onClick={() => setSearchQuery('')}
                    className="block px-3 py-2.5 hover:bg-[rgba(212,175,106,0.1)] border-b border-[rgba(212,175,106,0.08)] last:border-0 transition-colors"
                  >
                    <p className="text-xs text-[var(--color-gold-400)] mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Clase {r.numero}
                    </p>
                    <p className="text-sm text-[var(--color-cream-200)] truncate" style={{ fontFamily: 'var(--font-display)' }}>
                      {r.titulo}
                    </p>
                    {r.excerpt && (
                      <p
                        className="text-xs text-[var(--color-cream-200)] opacity-50 mt-0.5 line-clamp-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                        dangerouslySetInnerHTML={{ __html: r.excerpt }}
                      />
                    )}
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label="Clases">
          <p
            className="px-5 py-2 text-xs text-[var(--color-gold-400)] tracking-widest uppercase opacity-50 mb-1"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Clases
          </p>
          <ul>
            {clases.map((clase) => {
              const isActive = pathname === `/clases/${clase.slug}`
              return (
                <li key={clase.slug}>
                  <Link
                    href={`/clases/${clase.slug}`}
                    className={`flex items-start gap-3 px-5 py-3 text-sm transition-all border-l-[3px] ${
                      isActive
                        ? 'nav-active text-[var(--color-cream-100)] border-[var(--color-gold-400)] bg-[rgba(212,175,106,0.08)]'
                        : 'text-[var(--color-cream-200)] border-transparent hover:text-[var(--color-cream-100)] hover:bg-[rgba(255,255,255,0.04)]'
                    }`}
                  >
                    <span
                      className={`shrink-0 text-xs mt-0.5 ${isActive ? 'text-[var(--color-gold-400)]' : 'text-[var(--color-gold-400)] opacity-40'}`}
                      style={{ fontFamily: 'var(--font-body)', minWidth: '20px' }}
                    >
                      {clase.numero.toString().padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', lineHeight: '1.3' }}>
                      {clase.titulo}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Back to home */}
        <div className="p-4 border-t border-[rgba(212,175,106,0.15)]">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-[var(--color-cream-200)] opacity-50 hover:opacity-100 transition-opacity"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="tracking-widest uppercase">Inicio</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
