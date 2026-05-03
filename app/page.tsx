"use client";

import React from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import HabilidadesTecnicas from "@/components/HabilidadesTecnicas";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  title: string;
  role: string;
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

export default function Home() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "El Good Trip (App Mobile)",
      role: t.projects.app_mobile.role,
      description: t.projects.app_mobile.description,
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
      role: t.projects.web_platform.role,
      description: t.projects.web_platform.description,
      stack: ["Next.js", "React", "TypeScript", "Material UI"],
      imageUrl: "/web1.png",
      achievement: t.projects.achievement === "Logro:" ? "Mejora de UX que incrementó las ventas de 1 boleto cada 3 días a 3 boletos diarios." : "UX improvement that increased sales from 1 ticket every 3 days to 3 daily tickets.",
      links: [
        { label: t.projects.visit_web, url: "https://elgoodtrip.com", icon: "web" },
      ],
    },
    {
      title: "Sistema de Gestión Médica",
      role: t.projects.medical_system.role,
      description: t.projects.medical_system.description,
      stack: ["Python", "Django", "PostgreSQL", "JavaScript"],
      imageUrl: "/cemar.png",
      achievement: t.projects.achievement === "Logro:" ? "Automatización del 100% de los procesos administrativos." : "100% automation of administrative processes.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/marianelamarquez",
          icon: "github",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen selection:bg-primary/30">
      <LanguageToggle />
      
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t.projects.title}
              </h2>
              <p className="text-xl text-muted-foreground text-justify">
                {t.projects.subtitle}
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
            {t.footer.rights.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </footer>
    </main>
  );
}
