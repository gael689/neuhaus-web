"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import systemImg from "@/assets/img/sistema-control-integrado-neuhaus.webp";

const Philosophy = () => (
  <section className="py-24 md:py-36">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Nuestro Sistema
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-6">
            En Neuhaus entendemos que los errores cuestan caro: un prospecto manchado, un código de
            barras que no funciona o una etiqueta ilegible pueden tener consecuencias de impacto.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Por eso construimos un sistema de control integrado en cada etapa del proceso, con
            tecnología específica para la detección de errores y un departamento de calidad propio
            dentro de la planta, para poder detectar y evitar hasta el más mínimo error.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} direction="right">
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative overflow-hidden aspect-square md:aspect-[16/9] group shadow-lg"
          >
            <Image
              src={systemImg}
              alt="Sistema de control de calidad integrado de Neuhaus S.A."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Philosophy;
