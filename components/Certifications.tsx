'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: 'Platzi' | 'Código Facilito';
  imageUrl?: string;
  pdfUrl?: string;
}

const certificates: Certificate[] = [
  { title: 'Frontend Developer', issuer: 'Platzi', pdfUrl: '/certifications/diploma-frontend-developer.pdf' },
  { title: 'Básico de JavaScript', issuer: 'Platzi', pdfUrl: '/certifications/diploma-basico-javascript.pdf' },
  { title: 'Comunicación Asertiva', issuer: 'Platzi', pdfUrl: '/certifications/diploma-comunicacion-asertiva-2021.pdf' },
  { title: 'Profesional de TypeScript', issuer: 'Código Facilito', pdfUrl: '/certifications/Curso Profesional de typescript.pdf' },
  { title: 'Profesional de JavaScript', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso profesional de JavaScript.pdf' },
  { title: 'GitHub', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso a fondo de GitHub.pdf' },
  { title: 'Herramientas Frontend', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso de Herramientas y conceptos Frontend.pdf' },
  { title: 'CSS', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso de CSS.pdf' },
  { title: 'Python Profesional', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso de Python Profesional.pdf' },
  { title: 'Power BI', issuer: 'Código Facilito', pdfUrl: '/certifications/Curso de Power BI.pdf' },
  { title: 'Vue 3', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Curso Profesional de Vue 3.pdf' },
  { title: 'Bootcamp Bases de Datos Azure', issuer: 'Código Facilito', pdfUrl: '/certifications/Certificado - Bootcamp de Bases de Datos en la nube con Azure.pdf' },
];

import { useLanguage } from "@/context/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.education.title}</h2>
          <p className="text-muted-foreground">{t.education.subtitle}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 text-justify md:text-left">{t.education.degree}</h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 text-justify md:text-left">{t.education.university}</p>
            <span className="inline-block mt-3 text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full text-center">
              {t.education.graduated}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title + index}
              href={cert.pdfUrl || "#"}
              target={cert.pdfUrl ? "_blank" : undefined}
              rel={cert.pdfUrl ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700 hover:border-primary/30 transition-all hover:shadow-lg flex flex-col ${!cert.pdfUrl && 'opacity-70 grayscale'}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1 leading-tight">{cert.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-primary transition-colors">
                <span>{cert.pdfUrl ? t.education.view_cert : t.education.pending}</span>
                {cert.pdfUrl && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
