import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const clasesDirectory = path.join(process.cwd(), 'content/clases')

export interface ClaseMetadata {
  slug: string
  numero: number
  titulo: string
  descripcion: string
  imagenPrincipal: string
  imagenAlt: string
  fecha?: string
  tags?: string[]
}

export interface ClaseData extends ClaseMetadata {
  resumenHtml: string
  aporteExternoHtml: string
  opinionPersonalHtml: string
  bibliografiaHtml: string
  contenidoCompleto: string
}

export function getAllClasesMetadata(): ClaseMetadata[] {
  const fileNames = fs.readdirSync(clasesDirectory)
  const allClasesData = fileNames
    .filter((fn) => fn.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(clasesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug,
        numero: data.numero || 0,
        titulo: data.titulo || '',
        descripcion: data.descripcion || '',
        imagenPrincipal: data.imagenPrincipal || '/images/clases/placeholder.jpg',
        imagenAlt: data.imagenAlt || data.titulo || '',
        fecha: data.fecha || '',
        tags: data.tags || [],
      } as ClaseMetadata
    })
  return allClasesData.sort((a, b) => a.numero - b.numero)
}

async function markdownToHtml(markdownContent: string): Promise<string> {
  if (!markdownContent) return ''
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdownContent)
  return result.toString()
}

function extractSection(content: string, sectionTitle: string): string {
  const lines = content.split('\n')
  let capturing = false
  let result: string[] = []
  const headingRegex = /^#{1,3}\s+/

  for (const line of lines) {
    if (headingRegex.test(line)) {
      const cleanLine = line.replace(headingRegex, '').trim().toLowerCase()
      const cleanTarget = sectionTitle.toLowerCase()
      if (cleanLine === cleanTarget) {
        capturing = true
        continue
      } else if (capturing) {
        break
      }
    }
    if (capturing) {
      result.push(line)
    }
  }
  return result.join('\n').trim()
}

export async function getClaseData(slug: string): Promise<ClaseData> {
  const fullPath = path.join(clasesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const resumenMd = extractSection(content, 'Resumen de Clase')
  const aporteMd = extractSection(content, 'Aporte Externo')
  const opinionMd = extractSection(content, 'Opinión Personal')
  const bibliografiaMd = extractSection(content, 'Bibliografía')

  const [resumenHtml, aporteExternoHtml, opinionPersonalHtml, bibliografiaHtml] =
    await Promise.all([
      markdownToHtml(resumenMd),
      markdownToHtml(aporteMd),
      markdownToHtml(opinionMd),
      markdownToHtml(bibliografiaMd),
    ])

  return {
    slug,
    numero: data.numero || 0,
    titulo: data.titulo || '',
    descripcion: data.descripcion || '',
    imagenPrincipal: data.imagenPrincipal || '/images/clases/placeholder.jpg',
    imagenAlt: data.imagenAlt || data.titulo || '',
    fecha: data.fecha || '',
    tags: data.tags || [],
    resumenHtml,
    aporteExternoHtml,
    opinionPersonalHtml,
    bibliografiaHtml,
    contenidoCompleto: content,
  }
}

export async function getAllClasesForSearch(): Promise<
  { slug: string; titulo: string; contenido: string; numero: number }[]
> {
  const fileNames = fs.readdirSync(clasesDirectory).filter((fn) => fn.endsWith('.md'))
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(clasesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      titulo: data.titulo || '',
      numero: data.numero || 0,
      contenido: content,
    }
  })
}
