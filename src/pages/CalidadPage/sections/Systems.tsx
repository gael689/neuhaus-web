import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

// Swap with real images when available
import evImg       from "@/assets/fotos/DSCF1570.JPG";
import laetusImg   from "@/assets/fotos/_1033717.JPG";
import calidadImg  from "@/assets/fotos/_1033746.JPG";

const systems = [
  {
    title: "Electronic Verification",
    image: evImg,
    imageAlt: "Sistema de verificación electrónica Neuhaus",
    detail:
      "Compara en tiempo real cada pliego impreso contra el PDF aprobado por el cliente. Cualquier diferencia — tipográfica, cromática o estructural — es detectada y separada antes de que el trabajo avance en la línea de producción.",
  },
  {
    title: "Sistema Laetus",
    image: laetusImg,
    imageAlt: "Lector Laetus verificando código de barras",
    detail:
      "Lector integrado en las dobladoras que verifica la legibilidad del código de barras en cada pliego individual. Si el código no se lee correctamente, el pliego es detectado y separado automáticamente.",
  },
  {
    title: "Departamento de Calidad",
    image: calidadImg,
    imageAlt: "Departamento de calidad interno Neuhaus",
    detail:
      "Equipo propio dentro de la planta que supervisa cada etapa del proceso. No tercerizamos el control. Desde preprensa hasta despacho, todo es auditado internamente.",
  },
];

const Systems = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

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

            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <motion.div
                  layout
                  className="bg-background border border-border overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <motion.div
                    layout="position"
                    className="relative overflow-hidden"
                    style={{ height: isOpen ? 160 : 220 }}
                  >
                    <motion.img
                      src={s.image}
                      alt={s.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                    {/* Title over image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Bottom area */}
                  <div className="p-6 flex flex-col gap-4 flex-1">

                    {/* Revealed text */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
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

                    {/* Button */}
                    <button
                      onClick={() => toggle(i)}
                      className="group flex items-center gap-2 text-sm font-medium text-foreground self-start transition-colors duration-200"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
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