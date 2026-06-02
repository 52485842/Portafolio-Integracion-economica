import { NextRequest, NextResponse } from 'next/server'
import { getAllClasesForSearch } from '@/lib/clases'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.trim().toLowerCase() || ''

  if (query.length < 2) {
    return NextResponse.json({ results: [] })
  }

  const clases = await getAllClasesForSearch()

  const results = clases
    .filter((clase) => {
      return (
        clase.titulo.toLowerCase().includes(query) ||
        clase.contenido.toLowerCase().includes(query)
      )
    })
    .map((clase) => {
      // Build excerpt with context
      const idx = clase.contenido.toLowerCase().indexOf(query)
      let excerpt = ''
      if (idx !== -1) {
        const start = Math.max(0, idx - 40)
        const end = Math.min(clase.contenido.length, idx + query.length + 80)
        const raw = clase.contenido.slice(start, end).replace(/[#*_`]/g, '')
        // Highlight the match
        const re = new RegExp(`(${query})`, 'gi')
        excerpt = `...${raw.replace(re, '<mark class="search-highlight">$1</mark>')}...`
      }
      return {
        slug: clase.slug,
        titulo: clase.titulo,
        numero: clase.numero,
        excerpt,
      }
    })
    .slice(0, 6)

  return NextResponse.json({ results })
}
