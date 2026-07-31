"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import prospectosImg from "@/assets/img/impresion-prospectos-offset.webp";
import labelsImg from "@/assets/img/etiquetas-autoadhesivas-en-rollo.webp";

/**
 * El corte de línea del título va explícito (\n) y no librado al ancho
 * disponible: los paneles cambian de ancho al hacer hover, y si el texto
 * se re-acomoda a mitad de la animación se ve como un salto.
 */
const panels = [
  {
    key: "papel" as const,
    num: "01",
    label: "Papel",
    title: "Prospectos &\nImpresos",
    img: prospectosImg,
    imgAlt: "Impresión offset de prospectos medicinales en la planta de Neuhaus",
    href: "/servicios/prospectos",
  },
  {
    key: "etiquetas" as const,
    num: "02",
    label: "Autoadhesivos",
    title: "Etiquetas",
    img: labelsImg,
    imgAlt: "Etiquetas autoadhesivas en rollo producidas por Neuhaus",
    href: "/servicios/etiquetas",
  },
];

const ServicesSplit = () => {
  const [hovered, setHovered] = useState<"papel" | "etiquetas" | null>(null);

  return (
    <section id="servicios" className="relative scroll-mt-20">
      <h2 className="sr-only">Nuestros servicios de impresión</h2>
      <div
        className="flex flex-col lg:flex-row min-h-[55vh] lg:h-[65vh]"
        onMouseLeave={() => setHovered(null)}
      >
        {panels.map((panel) => (
          <motion.div
            key={panel.key}
            onMouseEnter={() => setHovered(panel.key)}
            animate={{ flex: hovered === null ? 1 : hovered === panel.key ? 1.6 : 0.4 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            /*
             * lg:min-w-[414px] es el piso que impide que el panel comprimido
             * aplaste el título. Sale de medir la línea más larga en DM Sans
             * Bold: "Prospectos &" = 318px a 48px, más 96px de padding lateral.
             * Sin este piso, el 0.4 de flex deja ~256px en una pantalla de
             * 1280 y el texto queda cortado por el overflow-hidden.
             */
            className="relative overflow-hidden cursor-pointer min-h-[38vh] lg:min-h-0 lg:min-w-[414px]"
          >
            <Link href={panel.href} className="block w-full h-full group">
              <motion.div
                className="absolute inset-0"
                animate={{ scale: hovered === panel.key ? 1.08 : 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src={panel.img}
                  alt={panel.imgAlt}
                  fill
                  /* El panel expandido llega a ~71vw, no a 50vw. */
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-navy-deep"
                animate={{ opacity: hovered === panel.key ? 0.35 : 0.7 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                animate={{ opacity: hovered === panel.key ? 0.18 : 0.08 }}
                transition={{ duration: 0.6 }}
                aria-hidden="true"
                className="absolute top-6 right-6 md:top-10 md:right-10 text-primary-foreground font-serif text-[10rem] md:text-[16rem] leading-none pointer-events-none select-none"
              >
                {panel.num}
              </motion.span>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/60 mb-3">
                  {panel.label}
                </span>
                <h3
                  className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {panel.title}
                </h3>

                <div className="mt-auto md:mt-2 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="inline-flex items-center gap-4 text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase border border-white/30 hover:border-white px-6 py-4 transition-colors">
                    Ver servicio
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSplit;
