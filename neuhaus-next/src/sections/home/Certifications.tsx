"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import heroPrinting from "@/assets/img/planta-impresion-certificada.webp";
import iramLogo from "@/assets/certificaciones/iram-logo.png";
import fscLogo from "@/assets/certificaciones/fsc.png";

const certs = [
  { name: "ISO 9001:2015", logo: iramLogo, logoAlt: "IRAM — certificación ISO 9001:2015" },
  { name: "BPM", logo: iramLogo, logoAlt: "IRAM — Buenas Prácticas de Manufactura" },
  { name: "FSC® Cadena de Custodia", logo: fscLogo, logoAlt: "FSC — Cadena de Custodia" },
];

const repeated = [...certs, ...certs, ...certs, ...certs];

const Certifications = () => (
  <ParallaxImage
    src={heroPrinting}
    alt="Planta de impresión certificada de Neuhaus S.A."
    overlay
    overlayOpacity="bg-navy/75"
    className="py-16 md:py-20 flex flex-col justify-center overflow-hidden"
  >
    <div className="container mx-auto px-4 md:px-6 w-full">
      <AnimatedSection>
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Calidad Certificada
          </h2>
        </div>
      </AnimatedSection>
    </div>

    <div className="w-full overflow-hidden relative mt-4">
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

      <motion.ul
        className="flex items-center list-none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{ width: "max-content" }}
      >
        {repeated.map((cert, i) => (
          <li
            key={i}
            className="flex items-center gap-4 px-8 md:px-12 flex-shrink-0"
            // Solo el primer set aporta contenido; el resto es relleno visual.
            aria-hidden={i >= certs.length}
          >
            <Image
              src={cert.logo}
              alt={cert.logoAlt}
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-lg md:text-2xl font-bold text-white tracking-widest uppercase opacity-90">
              {cert.name}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  </ParallaxImage>
);

export default Certifications;
