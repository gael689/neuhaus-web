"use client";

import { motion } from "framer-motion";
import { Cpu, ScanBarcode, Factory, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/*
 * Sección oculta a pedido del cliente (Excel de modificaciones, fila B20:
 * "sacar tecnología y control en cada etapa"). No se borra el archivo por si
 * se necesita reactivar — ver import comentado en app/page.tsx.
 */
const cards = [
  {
    icon: Cpu,
    title: "Electronic Verification",
    text: "Comparación en tiempo real del pliego impreso contra el PDF aprobado. Detección automática de errores mínimos.",
  },
  {
    icon: ScanBarcode,
    title: "Sistema Laetus",
    text: "Lectura y verificación del código de barras en cada pliego dentro de las dobladoras.",
  },
  {
    icon: Factory,
    title: "Cadena de producción 100% integrada",
    text: "Todo el proceso ocurre dentro de nuestra planta, desde la recepción del diseño hasta la entrega final.",
  },
  {
    icon: ArrowUpRight,
    title: "Escala flexible",
    text: "Producimos tanto para industria masiva como para emprendedores y pymes que necesitan tirajes cortos.",
  },
];

const WhyNeuhaus = () => (
  <section className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Tecnología y control en cada etapa
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl font-light">
          Invertimos continuamente en sistemas automatizados que influyen en la calidad del
          producto final, buscando constantemente optimizar procesos.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(26,58,92,0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-background p-8 md:p-12 border border-border h-full cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6"
              >
                <card.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{card.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                {card.text}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyNeuhaus;
