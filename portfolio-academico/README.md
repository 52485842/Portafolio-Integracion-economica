# Mecanismos de Integración Económica — Portafolio Académico

Portafolio académico universitario desarrollado en Next.js 14, TypeScript y Tailwind CSS.
El contenido de las clases se gestiona mediante archivos Markdown sin necesidad de base de datos.

---

## Estructura del proyecto

```
/
├── content/
│   └── clases/               ← ✏️ AQUÍ se editan/agregan las clases
│       ├── clase-1.md
│       ├── clase-2.md
│       └── ...
├── public/
│   └── images/
│       └── clases/           ← 🖼️ AQUÍ van las imágenes
│           ├── clase-1.jpg
│           └── ...
├── src/
│   ├── app/                  ← Páginas Next.js (App Router)
│   ├── components/           ← Componentes React
│   ├── lib/                  ← Utilidades (parser de Markdown)
│   └── styles/               ← CSS global
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Ejecutar localmente

### Requisitos previos
- Node.js 18 o superior (descargar desde https://nodejs.org)
- npm (viene con Node.js)

### Pasos

```bash
# 1. Descomprimir el proyecto y entrar a la carpeta
cd mecanismos-integracion-economica

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

---

## 🖼️ Cómo agregar imágenes

### Paso 1: Preparar la imagen
- Formato recomendado: `.jpg` o `.webp`
- Tamaño sugerido: 1200×600 píxeles (ratio 2:1)
- Peso máximo recomendado: 500KB

### Paso 2: Ubicar la imagen
Colocar el archivo en:
```
public/images/clases/clase-N.jpg
```
Donde `N` es el número de la clase (1, 2, 3...).

### Paso 3: Referenciarla en el Markdown
En el frontmatter del archivo `.md`:
```yaml
imagenPrincipal: "/images/clases/clase-1.jpg"
imagenAlt: "Descripción breve de la imagen para accesibilidad"
```

### Ejemplos de nombres de archivo
| Clase | Archivo |
|-------|---------|
| Clase 1 | `/public/images/clases/clase-1.jpg` |
| Clase 2 | `/public/images/clases/clase-2.jpg` |
| Clase 7 | `/public/images/clases/clase-7.jpg` |

---

## ✏️ Cómo modificar el contenido de una clase

### Abrir el archivo Markdown
Navegar a `content/clases/` y abrir el archivo correspondiente:
- `clase-1.md` para la Clase 1
- `clase-2.md` para la Clase 2
- etc.

Se puede editar con cualquier editor de texto (Bloc de Notas, VS Code, etc.).

### Estructura del archivo Markdown

Cada archivo tiene dos partes:

**1. Frontmatter** (metadatos entre `---`):
```yaml
---
numero: 1
titulo: "Ideologías y Políticas de Estado"
descripcion: "Descripción breve que aparece en la tarjeta y el encabezado."
imagenPrincipal: "/images/clases/clase-1.jpg"
imagenAlt: "Texto alternativo para accesibilidad"
fecha: "2024"
tags: ["Ideología", "Estado", "Liberalismo"]
---
```

**2. Contenido** (en Markdown):
```markdown
# Resumen de Clase

Aquí va el resumen de la clase...

# Aporte Externo

Aquí va el aporte externo...

# Opinión Personal

Aquí va la opinión personal...

# Bibliografía

- Autor, A. (año). *Título*. Editorial.
```

### Elementos de formato disponibles

```markdown
## Subtítulo

Párrafo normal con **negrita** y *cursiva*.

> Cita destacada

- Elemento de lista
- Otro elemento

| Columna 1 | Columna 2 |
|-----------|-----------|
| Celda     | Celda     |
```

---

## ➕ Cómo agregar una nueva clase

### Paso 1: Crear el archivo Markdown
En la carpeta `content/clases/`, crear un nuevo archivo:
```
clase-10.md
```

### Paso 2: Completar el contenido

Copiar esta plantilla y completarla:

```markdown
---
numero: 10
titulo: "Título de la nueva clase"
descripcion: "Descripción breve de la clase."
imagenPrincipal: "/images/clases/clase-10.jpg"
imagenAlt: "Descripción de la imagen"
fecha: "2024"
tags: ["Tag1", "Tag2"]
---

# Resumen de Clase

Contenido del resumen...

# Aporte Externo

Contenido del aporte externo...

# Opinión Personal

Contenido de la opinión personal...

# Bibliografía

- Autor, A. (año). *Título*. Editorial.
```

### Paso 3: Agregar la imagen (opcional)
Colocar `/public/images/clases/clase-10.jpg`.

### Paso 4: La clase aparece automáticamente
La nueva clase aparecerá automáticamente en el menú de navegación y en la grilla de inicio, ordenada por número.

**No se requiere modificar ningún archivo de código.**

---

## 🌐 Publicar gratuitamente en Vercel

Vercel es la plataforma oficial de Next.js y ofrece hosting gratuito para proyectos personales.

### Paso 1: Subir el proyecto a GitHub

1. Crear una cuenta en https://github.com (si no tiene una)
2. Crear un nuevo repositorio (botón verde "New")
   - Nombre: `portafolio-integracion-economica`
   - Privado o público (según preferencia)
3. Instalar GitHub Desktop desde https://desktop.github.com
4. En GitHub Desktop: "Add existing repository" → seleccionar la carpeta del proyecto
5. "Publish repository" para subir a GitHub

### Paso 2: Conectar Vercel

1. Ir a https://vercel.com
2. "Sign up" → "Continue with GitHub"
3. Autorizar el acceso a GitHub
4. "Add New..." → "Project"
5. "Import" junto al repositorio creado
6. En la pantalla de configuración:
   - Framework Preset: **Next.js** (se detecta automáticamente)
   - Root Directory: `/` (dejar por defecto)
   - Build Command: `npm run build` (por defecto)
   - Output Directory: `.next` (por defecto)
7. "Deploy"

### Paso 3: Obtener la URL pública

Vercel genera automáticamente una URL del tipo:
```
https://portafolio-integracion-economica.vercel.app
```

Esta URL es pública y puede compartirse con el profesor.

### Actualizar el contenido después de publicar

Cada vez que se modifique un archivo Markdown o se agregue una clase:

1. En GitHub Desktop: los cambios aparecen en la columna izquierda
2. Escribir un mensaje en "Summary" (ej: "Actualizo clase 3")
3. "Commit to main"
4. "Push origin"

Vercel detectará los cambios automáticamente y actualizará el sitio en 1-2 minutos.

---

## 🔧 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Construir para producción (verificar antes de publicar)
npm run build

# Iniciar servidor de producción local
npm run start
```

---

## Tecnologías utilizadas

- **Next.js 14** — Framework React con App Router
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Estilos utilitarios
- **gray-matter** — Parseo de frontmatter YAML
- **remark** — Conversión de Markdown a HTML
- **Google Fonts** — Cormorant Garamond, Jost, Playfair Display

---

*Portafolio académico desarrollado para la materia Mecanismos de Integración Económica.*
