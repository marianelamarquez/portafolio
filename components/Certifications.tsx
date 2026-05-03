'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: 'Platzi' | 'Código Facilito';
  imageUrl?: string;
}

const certificates: Certificate[] = [
  { title: 'Frontend Developer', issuer: 'Platzi' },
  { title: 'Básico de JavaScript', issuer: 'Platzi' },
  { title: 'Comunicación Asertiva', issuer: 'Platzi' },
  { title: 'Profesional de TypeScript', issuer: 'Código Facilito' },
  { title: 'Profesional de JavaScript', issuer: 'Código Facilito' },
  { title: 'GitHub', issuer: 'Código Facilito' },
  { title: 'Herramientas Frontend', issuer: 'Código Facilito' },
  { title: 'CSS', issuer: 'Código Facilito' },
  { title: 'Python Profesional', issuer: 'Código Facilito' },
  { title: 'Power BI', issuer: 'Código Facilito' },
  { title: 'Vue 3', issuer: 'Código Facilito' },
  { title: 'Bootcamp Bases de Datos Azure', issuer: 'Código Facilito' },
];

const Certifications = () => {
  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educación y Certificaciones</h2>
          <p className="text-muted-foreground">Formación continua y especializaciones técnicas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title + index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-1 leading-tight">{cert.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-primary transition-colors">
                <span>Ver Comprobante</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
