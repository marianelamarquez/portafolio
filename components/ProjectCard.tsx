import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

interface ProjectLink {
  label: string;
  url: string;
  icon: 'appstore' | 'playstore' | 'web' | 'github';
}

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  achievement?: string;
  links: ProjectLink[];
}

const ProjectCard = ({ title, description, stack, imageUrl, achievement, links }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'appstore': return <Smartphone className="w-4 h-4" />;
      case 'playstore': return <Smartphone className="w-4 h-4" />;
      case 'web': return <Globe className="w-4 h-4" />;
      case 'github': return <Code className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {stack.slice(0, 3).map((item) => (
            <span key={item} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white">
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
            className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>
            
            {achievement && (
              <div className="mb-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm font-semibold text-primary">✨ Logro:</p>
                <p className="text-sm italic">{achievement}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {stack.map((item) => (
                <span key={item} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
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
