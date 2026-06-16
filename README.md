# juank.dev

Personal portfolio of Juan Carlos Vallejo Ruiz — Full-Stack Developer & AI Entrepreneur based in Terrassa, Barcelona. Built with Astro 5, TypeScript, and pure CSS custom properties.

## Local development

```bash
npm install
npm run dev        # → http://localhost:4321
```

## Deploy to Vercel

Connect the repo to Vercel. The `vercel.json` at the root configures the build automatically:

```
Build command:     npm run build
Output directory:  dist
Framework:         Astro
```

Or via CLI:

```bash
npx vercel deploy
```

## Project structure

```
src/
├── layouts/
│   └── Base.astro          HTML shell, meta tags, fixed header
├── components/
│   ├── Hero.astro           Name, bio, contact — left column
│   ├── ProjectGrid.astro    Tab navigation + active card — right column
│   ├── ProjectCard.astro    Individual project card with preview
│   └── Ticker.astro         Scrolling footer + live clock
├── data/
│   └── projects.ts          Single source of truth for all projects
├── styles/
│   ├── global.css           Reset, design tokens, base styles
│   └── animations.css       Typing cursor, ticker, fade-in, tab underline
└── pages/
    └── index.astro          Assembles the 40/60 split layout
public/
├── favicon.svg
└── images/                  Drop project screenshots here (*.webp)
```

## Adding a new project

Edit `src/data/projects.ts` — add an entry to the `projects` array:

```ts
{
  id:           "my-project",
  number:       "05",
  name:         "My Project",
  context:      "@personal",
  category:     "Category",
  role:         "Solo Build · 2025",
  description:  "What it does and why it matters.",
  stack:        ["TypeScript", "Python"],
  github:       "https://github.com/you/repo",   // optional
  url:          "https://myproject.com",          // optional
  previewImage: "/images/my-project-preview.webp",
  status:       "wip",                            // live | beta | wip | open-source
}
```

Drop the screenshot at `public/images/my-project-preview.webp` (1280×720 or 16:9 ratio recommended). The card renders a placeholder until the image exists.

## Tech stack

- **Framework:** Astro 5 (static output)
- **Language:** TypeScript (strict)
- **Styling:** CSS custom properties — no Tailwind
- **Fonts:** Playfair Display · IBM Plex Mono · Inter (Google Fonts)
- **Deploy:** Vercel / Netlify (static)
