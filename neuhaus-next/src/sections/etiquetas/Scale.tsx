"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const scales = [
  {
    tag: "Industria farmacéutica, cosmética y alimenticia",
    title: "Grandes volúmenes.",
    text: "Tiradas largas para consumo masivo, con control de color y trazabilidad.",
  },
  {
    tag: "Emprendedores, pymes y productores artesanales",
    title: "Tirajes cortos.",
    text: "Pequeños volúmenes de etiquetas, adaptado a la necesidad del cliente.",
  },
];

const Scale = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <div className="mb-10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
            Flexibilidad operativa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Para cualquier escala.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scales.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-background border border-border border-t-2 border-t-primary p-8 md:p-12 flex flex-col gap-4 h-full"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                {s.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{s.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Scale;
