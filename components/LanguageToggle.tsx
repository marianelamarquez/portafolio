"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="fixed top-6 right-6 md:right-24 z-50">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-1 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center">
        <button
          onClick={() => setLocale("en")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            locale === "en"
              ? "bg-primary text-white shadow-sm"
              : "text-zinc-500 hover:text-primary"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLocale("es")}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            locale === "es"
              ? "bg-primary text-white shadow-sm"
              : "text-zinc-500 hover:text-primary"
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
