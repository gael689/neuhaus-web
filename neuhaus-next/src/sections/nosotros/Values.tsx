"use client";

import { motion } from "framer-motion";
import { Award, Handshake, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/*
 * Sección oculta a pedido del cliente (Excel, filas B18 y B46-B47: se repetía
 * con "Valores" de MisionVision.tsx). No se borra el archivo por si se
 * necesita reactivar — ver import comentado en app/nosotros/page.tsx.
 */
const items = [
  {
    icon: Award,
    title: "Calidad de producto",
    text: "Cada trabajo pasa por controles estrictos antes de salir de nuestra planta. La calidad no es un paso final, es parte de cada etapa.",
  },
  {
    icon: Handshake,
    title: "Confianza sostenida",
    text: "Más de cinco décadas acompañando a laboratorios y empresas en sus necesidades gráficas. La confianza se construye trabajo a trabajo.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    text: "Trabajamos cerca de cada cliente para entender sus necesidades reales y ofrecer soluciones a medida, sin intermediarios.",
  },
  {
    icon: TrendingUp,
    title: "Mejora continua",
    text: "Incorporamos tecnología y procesos para mantenernos a la vanguardia del sector gráfico nacional.",
  },
];

const Values = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 md:mb-16">
          Lo que nos representa
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-background p-5 md:p-7 border border-border h-full transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mb-4"
              >
                <v.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold tracking-tight mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{v.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
