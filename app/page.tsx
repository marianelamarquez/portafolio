"use client";

import React from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import HabilidadesTecnicas from "@/components/HabilidadesTecnicas";

interface Project {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  achievement?: string;
  links: {
    label: string;
    url: string;
    icon: "appstore" | "playstore" | "web" | "github";
  }[];
}

const projects: Project[] = [
  {
    title: "El Good Trip (App Mobile)",
    description:
      "Liderazgo de arquitectura en una aplicación móvil de alto rendimiento. Enfoque en escalabilidad y rendimiento.",
    stack: ["React Native", "Expo Go", "TypeScript"],
    imageUrl: "/app1.png",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/el-good-trip/id6759070036",
        icon: "appstore",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.elgoodtrip.app&pcampaignid=web_share",
        icon: "playstore",
      },
    ],
  },
  {
    title: "El Good Trip (Web Platform)",
    description:
      "Plataforma de reservas completa con Dashboard administrativo, gestión de inventario y análisis de datos.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/web1.png",
    achievement:
      "Mejora de UX que incrementó las ventas de 1 boleto cada 3 días a 3 boletos diarios.",
    links: [
      { label: "Visitar Web", url: "https://elgoodtrip.com", icon: "web" },
      {
        label: "GitHub",
        url: "https://github.com/marianelamarquez",
        icon: "github",
      },
    ],
  },
  {
    title: "Sistema de Gestión Médica",
    description:
      "Tesis de grado. Automatización integral de procesos administrativos y clínicos para centros de salud.",
    stack: ["Python", "Django", "PostgreSQL", "JavaScript"],
    imageUrl: "/cemar.png",
    achievement: "Automatización del 100% de los procesos administrativos.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/marianelamarquez",
        icon: "github",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Proyectos Destacados
              </h2>
              <p className="text-xl text-muted-foreground">
                Una selección de trabajos donde la arquitectura técnica se une
                con una experiencia de usuario optimizada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Habilities Section */}
      <HabilidadesTecnicas />
      {/* Certifications Section */}
      <Certifications />

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Marianela Márquez
          </p>
        </div>
      </footer>
    </main>
  );
}
