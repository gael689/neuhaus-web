"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import offsetImg from "@/assets/img/impresion-offset-prospectos-maquina.webp";
import flexoImg from "@/assets/img/impresion-flexografica-etiquetas.webp";
import digitalImg from "@/assets/img/impresion-digital-tirajes-cortos.webp";

type Tech = {
  tag: string;
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  objectPosition?: string;
  formato: string;
  idealPara: string;
  /** true = imagen a la izquierda; false = a la derecha. */
  imageFirst: boolean;
};

const techs: Tech[] = [
  {
    tag: "Offset",
    title: "Impresión Offset",
    text: "Sistema de impresión en pliegos de alta resolución. Precisión de color y nitidez tipográfica para prospectos, folletería y papelería comercial.",
    image: offsetImg,
    imageAlt: "Máquina de impresión offset en la planta de Neuhaus S.A.",
    objectPosition: "center 65%",
    formato: "Pliego a pliego",
    idealPara: "Tirajes largos y medios",
    imageFirst: true,
  },
  {
    tag: "Flexo",
    title: "Impresión Flexo",
    text: "Para tirajes largos y medios que precisen terminación en bobina. Alta velocidad y reproducibilidad constante en tirajes extensos.",
    image: flexoImg,
    imageAlt: "Impresión flexográfica de etiquetas en Neuhaus S.A.",
    formato: "Terminación a bobina o pliego",
    idealPara: "Tirajes largos y medios",
    imageFirst: false,
  },
  {
    tag: "Digital",
    title: "Impresión Digital",
    text: "Para tirajes cortos. Sin planchas, sin mínimos elevados. Ideal para muestras, pruebas o materiales de bajo volumen.",
    image: digitalImg,
    imageAlt: "Impresión digital para tirajes cortos en Neuhaus S.A.",
    formato: "Terminación a bobina",
    idealPara: "Muestras y bajo volumen",
    imageFirst: true,
  },
];

const Technologies = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
            Maquinaria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Tecnologías</h2>
        </div>
      </AnimatedSection>

      {techs.map((tech, i) => (
        <AnimatedSection key={tech.tag} delay={i * 0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden mb-4 last:mb-0">
            <div
              className={`relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[340px] ${
                tech.imageFirst ? "" : "order-1 lg:order-2"
              }`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={tech.image}
                  alt={tech.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  className="object-cover"
                  style={tech.objectPosition ? { objectPosition: tech.objectPosition } : undefined}
                />
              </motion.div>
              <div className={`absolute bottom-5 ${tech.imageFirst ? "left-5" : "right-5"}`}>
                <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] tracking-[0.25em] uppercase font-medium">
                  {tech.tag}
                </span>
              </div>
            </div>

            <div
              className={`bg-background p-8 md:p-12 flex flex-col justify-center gap-5 ${
                tech.imageFirst ? "" : "order-2 lg:order-1"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{tech.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                {tech.text}
              </p>
              <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 mt-1">
                <div>
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
                    Formato
                  </dt>
                  <dd className="text-sm font-medium">{tech.formato}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
                    Ideal para
                  </dt>
                  <dd className="text-sm font-medium">{tech.idealPara}</dd>
                </div>
              </dl>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default Technologies;
