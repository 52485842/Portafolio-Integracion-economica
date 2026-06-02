import { getAllClasesMetadata } from '@/lib/clases'
import Sidebar from '@/components/layout/Sidebar'

export default function ClasesLayout({ children }: { children: React.ReactNode }) {
  const clases = getAllClasesMetadata()
  const clasesNav = clases.map((c) => ({
    slug: c.slug,
    numero: c.numero,
    titulo: c.titulo,
  }))

  return (
    <div className="flex min-h-screen">
      <Sidebar clases={clasesNav} />
      <div
        className="flex-1 min-h-screen bg-[var(--color-cream-50)]"
        style={{ marginLeft: '280px' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-14">
          {children}
        </div>
      </div>
    </div>
  )
}
