import { motion } from 'framer-motion';
import Button from './Button';
import { MessageCircle, FileDown } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89C18.8 3.8 18.9 3 18.5 3c0 0-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C4.9 2.6 3.7 3 3.7 3c-.4.8-.3 1.8-.1 2.11A5.5 5.5 0 0 0 2 9c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 bg-white/50 backdrop-blur-md border border-white rounded-full shadow-sm"
        >
          <span className="text-sm font-semibold text-primary">Disponible para nuevos proyectos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Marianela Márquez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-4"
        >
          Systems Engineer | <span className="text-primary">Frontend & Mobile Developer</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
        >
          Apasionada por la optimización de productos y la creación de experiencias de usuario excepcionales. 
          Especializada en transformar ideas en interfaces fluidas y escalables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="primary" size="lg" className="gap-2">
            <FileDown className="w-5 h-5" />
            Descargar CV
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://wa.me/584248914101', '_blank')}>
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
          <Button variant="primary" size="lg" className="gap-2" onClick={() => window.open('https://www.linkedin.com/in/marianela-marquez-623ba52a7/', '_blank')}>
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://github.com/marianelamarquez', '_blank')}>
            <GithubIcon className="w-5 h-5" />
            GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
