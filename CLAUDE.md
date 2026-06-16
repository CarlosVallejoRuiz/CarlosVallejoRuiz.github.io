# CLAUDE.md — juank.dev Portfolio

## Visión general

Portfolio personal de Juan Carlos Vallejo Ruiz (juank), Full-Stack Developer & AI Entrepreneur
basado en Terrassa, Barcelona. Inspirado estéticamente en tsu.ar pero con identidad propia:
más técnico, más frío, orientado a football analytics + robótica industrial + open source.

**Stack:** Astro 5 + TypeScript + CSS custom properties (sin Tailwind)
**Deploy target:** Vercel o Netlify (estático)
**Dominio previsto:** juank.dev (o similar)

---

## Diseño y estética

### Paleta de color
```
--color-bg:        #E8E4DC  /* parchment frío */
--color-ink:       #1A1A18  /* negro casi puro */
--color-accent:    #2D5A8E  /* azul datos / pitch lines */
--color-muted:     #8B8B83  /* labels, meta, secundario */
--color-border:    #C4C0B8  /* divisores, bordes de tarjetas */
--color-surface:   #F0EDE7  /* fondo de tarjetas / hover */
```

### Tipografía
- **Display:** Playfair Display (Google Fonts) — serif con carácter para el nombre hero
- **Mono:** IBM Plex Mono — body, descripciones, tags técnicos
- **UI:** Inter — labels, navegación, metadata compacta

### Escala tipográfica
```
--text-xs:   0.65rem   /* versión, build number */
--text-sm:   0.8rem    /* tags, labels */
--text-base: 1rem      /* body */
--text-lg:   1.25rem   /* subtítulos */
--text-xl:   2rem      /* títulos de sección */
--text-hero: clamp(5rem, 12vw, 10rem)  /* nombre hero */
```

### Signature element
El nombre `juank` en el hero se renderiza con efecto "typing cursor" al cargar
(CSS animation, no JS — respeta `prefers-reduced-motion`).

---

## Estructura del proyecto

```
juank-dev/
├── CLAUDE.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── prisma-preview.webp    (screenshot PrismaStats)
│       ├── arc-preview.webp       (screenshot ArcIntelligence)
│       ├── duck-preview.webp      (screenshot DebugDuck)
│       └── slurp-preview.webp     (screenshot slurp CLI)
├── src/
│   ├── layouts/
│   │   └── Base.astro             (html shell, fonts, meta, ticker)
│   ├── components/
│   │   ├── Hero.astro             (nombre + bio + links)
│   │   ├── ProjectCard.astro      (tarjeta individual con hover preview)
│   │   ├── ProjectGrid.astro      (tabs + grid de proyectos)
│   │   ├── Ticker.astro           (marquee footer)
│   │   └── ThemeToggle.astro      (ON/OFF light/dark si se decide añadir)
│   ├── data/
│   │   └── projects.ts            (array de proyectos tipado)
│   ├── styles/
│   │   ├── global.css             (reset, custom properties, base)
│   │   └── animations.css         (typing cursor, hover, ticker)
│   └── pages/
│       └── index.astro            (página principal — todo en una sola página)
```

---

## Datos de contenido (projects.ts)

Cada proyecto tiene esta forma:

```typescript
interface Project {
  id: string
  number: string          // "01", "02", etc.
  name: string
  context: string         // "@personal", "@freelance", etc.
  category: string        // "Football Analytics", "Robotics", etc.
  role: string            // "Founder & Solo Dev · 2023 - present"
  description: string     // 2-3 frases
  stack: string[]         // ["Next.js", "Supabase", "Python", ...]
  url?: string            // URL externa si existe
  github?: string         // repo público si existe
  previewImage: string    // ruta a /public/images/
  status: "live" | "beta" | "wip" | "open-source"
}
```

### Los 4 proyectos

**01 — PrismaStats** `@personal`
- Category: Football Analytics SaaS
- Role: Founder & Solo Dev · 2023 - present
- Description: Analytics platform for football clubs. GPS/EPTS hardware integration, tactical board with AI suggestions, video analysis with YOLOv8 + BoT-SORT. Built to land a role at a professional club.
- Stack: Next.js, Supabase, Python, Modal.com, YOLOv8, Claude API
- Status: beta

**02 — ArcIntelligence** `@personal`
- Category: Industrial Robotics
- Role: Solo Build · 2025 - present
- Description: Desktop Python app integrating RoboDK with Claude API to automate MIG/MAG robotic welding programs. Reduces manual programming time from hours to minutes.
- Stack: Python, RoboDK SDK, Claude API, Tauri
- Status: wip

**03 — DebugDuck** `@open-source`
- Category: Developer Tools
- Role: Solo Build · 2024
- Description: Tamagotchi-style rubber duck debugger for your desktop. Local AI via LM Studio, mood system, cruelty slider, 11 arcade mini-games. Because debugging alone is sad.
- Stack: Tauri v2, React, TypeScript, Rust, LM Studio
- Status: open-source
- GitHub: https://github.com/juankm/debugduck (ajustar URL real)

**04 — slurp** `@open-source`
- Category: AI Dev Tools
- Role: Solo Build · 2025
- Description: CLI tool that reads codebase graphs and selects optimal subgraphs for LLM queries using PageRank + TF-IDF. Zero LLM calls. Ships an MCP server and HTML visualizer.
- Stack: Python, PageRank, TF-IDF, MCP
- Status: open-source
- GitHub: https://github.com/juankm/slurp (ajustar URL real)

---

## Layout — index.astro

```
┌─────────────────────────────────────────────────────┐
│ HEADER: juank.dev | [nav links]          v01.2026   │
├──────────────────────┬──────────────────────────────┤
│                      │  Selected works               │
│  juank               │  ┌──┬──┬──┬──┐              │
│  ca (outline)        │  │01│02│03│04│  ← tabs      │
│                      │  └──┴──┴──┴──┘              │
│  Juan Carlos Vallejo │  ┌────────────────────────┐  │
│  Full-Stack Dev &    │  │ PROJECT CARD ACTIVO    │  │
│  AI Entrepreneur     │  │ nombre · contexto      │  │
│                      │  │ descripción            │  │
│  Shipping football   │  │ preview on hover       │  │
│  intelligence and    │  │ [tags] [OPEN ↗]        │  │
│  robot programs      │  └────────────────────────┘  │
│  since 2023.         │                              │
│                      │                              │
│  📍 Terrassa, BCN    │                              │
│  → juank@...         │                              │
├──────────────────────┴──────────────────────────────┤
│ TICKER: juank.dev · Terrassa, BCN · football ◇ ... │
└─────────────────────────────────────────────────────┘
```

---

## Comportamiento y animaciones

- **Typing cursor en hero:** El nombre aparece con cursor parpadeante al cargar
- **Hover en project tabs:** Subrayado deslizante con color accent
- **Hover en ProjectCard:** Imagen preview aparece con opacity 0→1 + ligero scale
- **Ticker:** CSS `animation: ticker linear infinite` — pausa en hover
- **Scroll:** Sin parallax pesado. Solo `opacity` fade-in en secciones (IntersectionObserver)
- **Reduced motion:** Todas las animaciones desactivadas si `prefers-reduced-motion: reduce`

---

## Reglas de código

1. **Sin Tailwind** — CSS custom properties puras en `global.css`
2. **TypeScript estricto** — `strict: true` en tsconfig.json
3. **Sin JS innecesario** — El máximo posible en CSS puro
4. **Componentes Astro** — Un componente por responsabilidad
5. **Imágenes:** `<Image />` de Astro para optimización automática
6. **Accesibilidad:** `prefers-reduced-motion`, focus visible, alt texts
7. **Mobile-first:** El layout en móvil es columna única, en desktop el split 40/60
8. **Sin dependencias extra** salvo las de Astro core

---

## Meta y SEO

```html
title: juank — Juan Carlos Vallejo Ruiz
description: Full-Stack Developer & AI Entrepreneur. Building football analytics tools and AI-powered robotics from Terrassa, Barcelona.
og:image: /images/og-image.webp (1200x630)
theme-color: #E8E4DC
```

---

## Estado del proyecto

- [x] Setup inicial Astro
- [x] global.css + design tokens
- [x] Layout Base.astro
- [x] Hero.astro con typing animation
- [x] projects.ts data
- [x] ProjectCard.astro
- [x] ProjectGrid.astro con tabs
- [x] Ticker.astro
- [x] index.astro ensamblado
- [ ] Screenshots de proyectos en /public/images/
- [x] Meta / SEO
- [x] Deploy config (vercel.json o netlify.toml)
- [ ] Dominio

---

## Notas para Claude Code

- Cuando generes CSS, agrupa siempre por componente en bloques comentados
- Antes de crear un componente nuevo, revisa si ya existe uno similar
- Las imágenes de preview son placeholder hasta que el usuario las sustituya — usa divs con `background: var(--color-surface)` y un label centrado con el nombre del proyecto
- El ticker text completo: `juank.dev · Terrassa, Barcelona · football analytics · robotics · open source · build → break → learn → repeat ↺ · shipping at the speed of curiosity ·`
- El build number en header: `v01.2026` hardcodeado por ahora
- **Tema oscuro persistido en dev:** si el navegador carga en dark mode inesperadamente, ejecutar en la consola del navegador: `localStorage.removeItem('juank-theme')` y recargar. El default es siempre light; dark solo se activa si el usuario lo seleccionó explícitamente.