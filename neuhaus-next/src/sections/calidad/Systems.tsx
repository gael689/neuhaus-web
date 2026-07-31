"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import evImg from "@/assets/img/verificacion-electronica-pliegos.webp";
import laetusImg from "@/assets/img/impresion-offset-planta-neuhaus.webp";
import calidadImg from "@/assets/img/departamento-calidad-neuhaus.webp";

type System = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  detail: string;
};

const systems: System[] = [
  {
    title: "Electronic Verification",
    image: evImg,
    imageAlt: "Sistema de verificación electrónica de pliegos de Neuhaus",
    detail:
      "Compara en tiempo real cada pliego impreso contra el PDF aprobado por el cliente. Cualquier diferencia — tipográfica, cromática o estructural — es detectada y separada antes de que el trabajo avance en la línea de producción.",
  },
  {
    title: "Sistema Laetus",
    image: laetusImg,
    imageAlt: "Lector Laetus verificando códigos en la dobladora",
    detail:
      "Lector integrado en las dobladoras que verifica la legibilidad del código de barras en cada pliego individual. Si el código no se lee correctamente, el pliego es detectado y separado automáticamente.",
  },
  {
    title: "Departamento de Calidad",
    image: calidadImg,
    imageAlt: "Departamento de calidad interno de Neuhaus S.A.",
    detail:
      "Equipo propio dentro de la planta que supervisa cada etapa del proceso. No tercerizamos el control. Desde preprensa hasta despacho, todo es auditado internamente.",
  },
];

const Systems = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => setExpanded(expanded === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
              Infraestructura tecnológica
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Sistemas de control
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systems.map((s, i) => {
            const isOpen = expanded === i;
            const panelId = `sistema-${i}`;

            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <motion.div
                  layout
                  className="bg-background border border-border overflow-hidden flex flex-col"
                >
                  <motion.div
                    layout="position"
                    className="relative overflow-hidden"
                    style={{ height: isOpen ? 160 : 220 }}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </motion.div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          id={panelId}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="text-sm text-muted-foreground font-light leading-relaxed overflow-hidden"
                        >
                          {s.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex items-center gap-2 text-sm font-medium text-foreground self-start transition-colors duration-200"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs group-hover:border-foreground transition-colors duration-200"
                      >
                        +
                      </motion.span>
                      {isOpen ? "Cerrar" : "Quiero saber más"}
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Systems;
