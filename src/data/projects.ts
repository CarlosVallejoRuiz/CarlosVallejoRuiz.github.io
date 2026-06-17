export type ProjectStatus = "live" | "beta" | "wip" | "open-source";

export interface Project {
  id: string
  number: string
  name: string
  context: string
  category: { en: string; es: string }
  role:     { en: string; es: string }
  description: { en: string; es: string }
  stack: string[]
  url?: string
  github?: string
  previewImage: string
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    id: "slurp",
    number: "01",
    name: "slurp",
    context: "@open-source",
    category: {
      en: "AI Dev Tools",
      es: "Herramientas de Desarrollo IA",
    },
    role: {
      en: "Solo Build · 2026",
      es: "Proyecto Personal · 2026",
    },
    description: {
      en: "CLI tool that reads codebase graphs and selects optimal subgraphs for LLM queries using PageRank + TF-IDF. Zero LLM calls. Ships an MCP server and HTML visualizer.",
      es: "Herramienta CLI que lee grafos de código y selecciona subgrafos óptimos para consultas a LLMs usando PageRank + TF-IDF. Sin llamadas a LLMs. Incluye servidor MCP y visualizador HTML.",
    },
    stack: ["Python", "PageRank", "TF-IDF", "MCP"],
    url: "https://imjuank.dev/slurp-web/",
    github: "https://github.com/CarlosVallejoRuiz/slurp",
    previewImage: "/images/slurp-preview.gif",
    status: "open-source",
  },
  {
    id: "debug-duck",
    number: "02",
    name: "DebugDuck",
    context: "@open-source",
    category: {
      en: "Developer Tools",
      es: "Herramientas para Desarrolladores",
    },
    role: {
      en: "Solo Build · 2026",
      es: "Proyecto Personal · 2026",
    },
    description: {
      en: "Tamagotchi-style rubber duck debugger for your desktop. Local AI via LM Studio, mood system, cruelty slider, 11 arcade mini-games. Because debugging alone is sad.",
      es: "Depurador estilo Tamagotchi para tu escritorio. IA local con LM Studio, sistema de humor, control de crueldad, 11 minijuegos arcade. Porque depurar solo es triste.",
    },
    stack: ["Tauri v2", "React", "TypeScript", "Rust", "LM Studio"],
    url: "https://imjuank.dev/DebugDuck-web/",
    github: "https://github.com/CarlosVallejoRuiz/debugduck",
    previewImage: "/images/duck-preview.gif",
    status: "open-source",
  },
  {
    id: "prisma-stats",
    number: "03",
    name: "PrismaStats",
    context: "@personal",
    category: {
      en: "Football Analytics SaaS",
      es: "SaaS de Análisis de Fútbol",
    },
    role: {
      en: "Founder & Solo Dev · 2026",
      es: "Fundador & Desarrollador Solo · 2026",
    },
    description: {
      en: "Analytics platform for football clubs. GPS/EPTS hardware integration, tactical board with AI suggestions, video analysis with YOLOv8 + BoT-SORT. Built to land a role at a professional club.",
      es: "Plataforma de análisis para clubes de fútbol. Integración con hardware GPS/EPTS, pizarra táctica con sugerencias IA, análisis de vídeo con YOLOv8 + BoT-SORT. Construida para trabajar en un club profesional.",
    },
    stack: ["Next.js", "Supabase", "Python", "Modal.com", "YOLOv8", "Claude API"],
    url: "https://www.prismastats.es/",
    previewImage: "/images/prisma-preview.jpeg",
    status: "beta",
  },
  {
    id: "arc-intelligence",
    number: "04",
    name: "ArcIntelligence",
    context: "@personal",
    category: {
      en: "Industrial Robotics",
      es: "Robótica Industrial",
    },
    role: {
      en: "Solo Build · 2026",
      es: "Proyecto Personal · 2026",
    },
    description: {
      en: "Desktop Python app integrating RoboDK with Claude API to automate MIG/MAG robotic welding programs. Reduces manual programming time from hours to minutes.",
      es: "App de escritorio en Python que integra RoboDK con la API de Claude para automatizar programas de soldadura robótica MIG/MAG. Reduce el tiempo de programación manual de horas a minutos.",
    },
    stack: ["Python", "RoboDK SDK", "Claude API", "Tauri"],
    previewImage: "/images/arc-preview.png",
    status: "wip",
  },
];
