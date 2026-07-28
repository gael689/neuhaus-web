"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import labelsFlexo from "@/assets/img/etiquetas-flexograficas-terminadas.webp";

const Flexo = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <AnimatedSection direction="left" delay={0.12}>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden aspect-[4/3] rounded-[2px] order-2 lg:order-1"
          >
            <Image
              src={labelsFlexo}
              alt="Etiquetas flexográficas terminadas en la planta de Neuhaus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-deep/30" />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="order-1 lg:order-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
            Tecnología UV
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] mb-6">
            Impresión flexográfica de alta definición.
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            Tintas UV, sustratos y materiales de la mejor calidad, garantizando tanto la
            resistencia al roce y la manipulación, como la gran definición de la etiqueta.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Flexo;
