"use client";

import React from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

const HabilidadesTecnicas = () => {
  const { t } = useLanguage();

  const skills = [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "React Native",
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "PHP",
    "MUI"
  ];

  const languages = [
    t.skills.spanish,
    t.skills.english
  ];

  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t.skills.title}
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-zinc-600 dark:text-zinc-400">
              {t.skills.languages}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm cursor-default"
                >
                  <span className="font-medium text-primary">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-zinc-600 dark:text-zinc-400">
              {t.skills.idioms}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full shadow-sm cursor-default"
                >
                  <span className="font-medium text-primary">{language}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HabilidadesTecnicas;