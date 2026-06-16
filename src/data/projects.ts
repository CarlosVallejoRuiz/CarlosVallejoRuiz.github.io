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
    id: "prisma-stats",
    number: "01",
    name: "PrismaStats",
    context: "@personal",
    category: "Football Analytics SaaS",
    role: "Founder & Solo Dev · 2023 - present",
    description:
      "Analytics platform for football clubs. GPS/EPTS hardware integration, tactical board with AI suggestions, video analysis with YOLOv8 + BoT-SORT. Built to land a role at a professional club.",
    stack: ["Next.js", "Supabase", "Python", "Modal.com", "YOLOv8", "Claude API"],
    previewImage: "/images/prisma-preview.webp",
    status: "beta",
  },
  {
    id: "arc-intelligence",
    number: "02",
    name: "ArcIntelligence",
    context: "@personal",
    category: "Industrial Robotics",
    role: "Solo Build · 2025 - present",
    description:
      "Desktop Python app integrating RoboDK with Claude API to automate MIG/MAG robotic welding programs. Reduces manual programming time from hours to minutes.",
    stack: ["Python", "RoboDK SDK", "Claude API", "Tauri"],
    previewImage: "/images/arc-preview.webp",
    status: "wip",
  },
  {
    id: "debug-duck",
    number: "03",
    name: "DebugDuck",
    context: "@open-source",
    category: "Developer Tools",
    role: "Solo Build · 2024",
    description:
      "Tamagotchi-style rubber duck debugger for your desktop. Local AI via LM Studio, mood system, cruelty slider, 11 arcade mini-games. Because debugging alone is sad.",
    stack: ["Tauri v2", "React", "TypeScript", "Rust", "LM Studio"],
    github: "https://github.com/juankm/debugduck",
    previewImage: "/images/duck-preview.webp",
    status: "open-source",
  },
  {
    id: "slurp",
    number: "04",
    name: "slurp",
    context: "@open-source",
    category: "AI Dev Tools",
    role: "Solo Build · 2025",
    description:
      "CLI tool that reads codebase graphs and selects optimal subgraphs for LLM queries using PageRank + TF-IDF. Zero LLM calls. Ships an MCP server and HTML visualizer.",
    stack: ["Python", "PageRank", "TF-IDF", "MCP"],
    github: "https://github.com/juankm/slurp",
    previewImage: "/images/slurp-preview.webp",
    status: "open-source",
  },
];
