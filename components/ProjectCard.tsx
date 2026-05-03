import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Smartphone, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectLink {
  label: string;
  url: string;
  icon: "appstore" | "playstore" | "web" | "github";
}

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  stack: string[];
  imageUrl: string;
  achievement?: string;
  links: ProjectLink[];
}

const ProjectCard = ({
  title,
  role,
  description,
  stack,
  imageUrl,
  achievement,
  links,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case "appstore":
        return <Smartphone className="w-4 h-4" />;
      case "playstore":
        return <Smartphone className="w-4 h-4" />;
      case "web":
        return <Globe className="w-4 h-4" />;
      case "github":
        return <Code className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Default Content (Bottom) */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"} bg-linear-to-t from-black/90 via-black/60 to-transparent`}
      >
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-primary-foreground/90 text-sm font-bold mb-4 uppercase tracking-wider">
          {role}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm p-6 flex flex-col overflow-y-auto scrollbar-hide"
          >
            <h3 className="text-xl font-bold  text-primary">{title}</h3>
            <p className="text-[10px] font-bold text-primary/60 mb-4 uppercase tracking-widest leading-none">
              {role}
            </p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-justify">
              {description}
            </p>

            {achievement && (
              <div className="mb-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-xs font-semibold text-primary">✨ Logro:</p>
                <p className="text-xs italic text-justify">{achievement}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 bg-secondary rounded-md text-[10px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto pt-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors"
                >
                  {getIcon(link.icon)}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
