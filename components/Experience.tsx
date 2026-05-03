"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Bug, ShieldCheck } from "lucide-react";

const Experience = () => {
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
            Experiencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Back 9 */}
                <div className="relative pl-8 border-l-2 border-primary/20 pb-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-zinc-900 shadow-sm" />
                  <div className="mb-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">
                      QA & Frontend Developer
                    </h3>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                      Agosto 2025 - Actualidad
                    </span>
                  </div>
                  <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Back 9
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Lideré la arquitectura de la aplicación iOS/Android en React
                    Native y Expo Go, asegurando la sincronización en tiempo
                    real con el motor de reservas. Rediseñé la UX de El
                    GoodTrip, logrando un incremento en ventas de 1 boleto cada
                    3 días a 3 boletos diarios en el segundo mes. Implementé
                    herramientas como Cursor y Lovable para acelerar el
                    desarrollo del MVP mobile y un Dashboard administrativo,
                    integrando 4 APIs clave (disponibilidad, pagos y
                    autenticación). Además, ejecuté pruebas QA en las apps de
                    Avior y Rutaca, corrigiendo errores críticos de lógica en
                    reservas y estandarizando validaciones bajo normativas GDS.
                  </p>
                </div>

                {/* Organytech Systems */}
                <div className="relative pl-8 border-l-2 border-primary/20 pb-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-zinc-900 shadow-sm" />
                  <div className="mb-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">
                      Quality Assurance (QA)
                    </h3>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                      Junio 2025 - Agosto 2025
                    </span>
                  </div>
                  <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Organytech Systems, C.A
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Aseguré la máxima calidad del software identificando y
                    documentando de manera proactiva más de 50 defectos y
                    errores críticos en el sistema mediante la gestión de
                    tickets. Mis pruebas exhaustivas garantizaron que cada nueva
                    característica operara exactamente como se esperaba,
                    mejorando la estabilidad general del sistema antes de cada
                    pase a producción.
                  </p>
                </div>
              </div>
            </motion.div>
      </div>
    </section>
  );
};

export default Experience;
