"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const events = [
  {
    year: "1976",
    label: "Fundación",
    text: "Empezamos como todas las pymes, como un pequeño taller gráfico dedicado a impresiones comerciales, pero nuestra seriedad y calidad nos llevaron a trabajar para grandes compañías.",
  },
  {
    year: "1987",
    label: "Neuhaus S.A.",
    text: "El gran volumen de trabajo, más el acceso al crédito y modernas tecnologías nos impulsaron a convertirnos en NEUHAUS SA Industria Gráfica.",
  },
  {
    year: "Hoy",
    label: "Presente",
    text: "Fabricamos etiquetas autoadhesivas y prospectos —planos y en rollo— para diversas industrias. Respaldados por certificaciones ISO 9001, BPM y FSC, y tecnología de verificación electrónica en cada etapa del proceso.",
  },
];

const History = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <div className="mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Nuestra historia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            Más de cinco décadas de experiencia en la industria gráfica argentina.
          </p>
        </div>
      </AnimatedSection>

      {/* Desktop: horizontal */}
      <ol className="hidden md:block list-none">
        <div className="grid grid-cols-3">
          {events.map((e, i) => (
            <AnimatedSection key={e.year} delay={i * 0.15}>
              <div className="flex justify-center px-4">
                <span className="text-7xl lg:text-8xl font-black text-foreground/60 leading-none tracking-tighter">
                  {e.year}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="relative my-5">
          <div className="absolute top-1/2 -translate-y-1/2 left-[16.66%] right-[16.66%] h-px bg-border" />
          <div className="grid grid-cols-3">
            {events.map((e, i) => (
              <div key={e.year} className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1, type: "spring", stiffness: 260, damping: 20 }}
                  className="w-4 h-4 rounded-full bg-primary ring-8 ring-background relative z-10"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3">
          {events.map((e, i) => (
            <AnimatedSection key={e.year} delay={i * 0.15 + 0.2}>
              <li className="text-center px-6 list-none">
                <h3 className="text-lg font-bold mb-2">{e.label}</h3>
                <p className="text-base text-muted-foreground leading-relaxed font-light">{e.text}</p>
              </li>
            </AnimatedSection>
          ))}
        </div>
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden relative list-none">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        {events.map((e, i) => (
          <AnimatedSection key={e.year} delay={i * 0.15}>
            <li className="relative pl-8 mb-10 last:mb-0 list-none">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1, type: "spring", stiffness: 260 }}
                className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10"
              />
              <span className="text-5xl font-black text-foreground/60 leading-none tracking-tighter block mb-1">
                {e.year}
              </span>
              <h3 className="text-lg font-bold mb-1">{e.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{e.text}</p>
            </li>
          </AnimatedSection>
        ))}
      </ol>
    </div>
  </section>
);

export default History;
