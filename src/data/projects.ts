export type ProjectStatus = "live" | "beta" | "wip" | "open-source";

export interface Project {
  id: string
  number: string
  name: string
  context: string
  category: string
  role: string
  description: string
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
    category: "AI Dev Tools",
    role: "Solo Build · 2025",
    description:
      "CLI tool that reads codebase graphs and selects optimal subgraphs for LLM queries using PageRank + TF-IDF. Zero LLM calls. Ships an MCP server and HTML visualizer.",
    stack: ["Python", "PageRank", "TF-IDF", "MCP"],
    url: "https://CarlosVallejoRuiz.github.io/slurp",
    github: "https://github.com/CarlosVallejoRuiz/slurp",
    previewImage: "/images/slurp-preview.gif",
    status: "open-source",
  },
  {
    id: "debug-duck",
    number: "02",
    name: "DebugDuck",
    context: "@open-source",
    category: "Developer Tools",
    role: "Solo Build · 2024",
    description:
      "Tamagotchi-style rubber duck debugger for your desktop. Local AI via LM Studio, mood system, cruelty slider, 11 arcade mini-games. Because debugging alone is sad.",
    stack: ["Tauri v2", "React", "TypeScript", "Rust", "LM Studio"],
    url: "https://CarlosVallejoRuiz.github.io/debugduck",
    github: "https://github.com/CarlosVallejoRuiz/debugduck",
    previewImage: "/images/duck-preview.gif",
    status: "open-source",
  },
  {
    id: "prisma-stats",
    number: "03",
    name: "PrismaStats",
    context: "@personal",
    category: "Football Analytics SaaS",
    role: "Founder & Solo Dev · 2023 - present",
    description:
      "Analytics platform for football clubs. GPS/EPTS hardware integration, tactical board with AI suggestions, video analysis with YOLOv8 + BoT-SORT. Built to land a role at a professional club.",
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
    category: "Industrial Robotics",
    role: "Solo Build · 2025 - present",
    description:
      "Desktop Python app integrating RoboDK with Claude API to automate MIG/MAG robotic welding programs. Reduces manual programming time from hours to minutes.",
    stack: ["Python", "RoboDK SDK", "Claude API", "Tauri"],
    previewImage: "/images/arc-preview.png",
    status: "wip",
  },
];
