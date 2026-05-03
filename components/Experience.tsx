"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Bug, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            {t.experience.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Back 9 */}
            <div className="relative pl-8 border-l-2 border-primary/20 pb-2">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-zinc-900 shadow-sm" />
              <div className="mb-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold">
                  {t.experience.back9.role}
                </h3>
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit text-center">
                  {t.experience.back9.date}
                </span>
              </div>
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                {t.experience.back9.company}
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {t.experience.back9.description}
              </p>
            </div>

            {/* Organytech Systems */}
            <div className="relative pl-8 border-l-2 border-primary/20 pb-2">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-zinc-900 shadow-sm" />
              <div className="mb-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold">
                  {t.experience.organytech.role}
                </h3>
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit text-center">
                  {t.experience.organytech.date}
                </span>
              </div>
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                {t.experience.organytech.company}
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {t.experience.organytech.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
