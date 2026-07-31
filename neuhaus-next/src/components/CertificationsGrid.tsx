"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import iramLogo from "@/assets/certificaciones/iram-logo.png";
import fscLogo from "@/assets/certificaciones/fsc.png";

/**
 * Grilla de certificaciones compartida por /nosotros y /calidad.
 * En el sitio anterior eran dos archivos casi idénticos que había que
 * mantener en paralelo.
 */
const certs = [
  {
    title: "ISO 9001",
    text: "Sistema de gestión de calidad reconocido internacionalmente. Garantiza que nuestros procesos cumplen estándares rigurosos de planificación, control y mejora continua.",
    logo: iramLogo,
    logoAlt: "IRAM — organismo certificador de la norma ISO 9001",
  },
  {
    title: "BPM — Buenas Prácticas de Manufactura",
    text: "Certificación clave para operar como proveedor del sector farmacéutico. Asegura condiciones de producción seguras, trazables y documentadas.",
    logo: iramLogo,
    logoAlt: "IRAM — certificación de Buenas Prácticas de Manufactura",
  },
  {
    title: "FSC® Cadena de Custodia",
    text: "Certificación de manejo responsable de materiales forestales. Refleja nuestro compromiso con la producción sustentable.",
    logo: fscLogo,
    logoAlt: "FSC — certificación de Cadena de Custodia",
  },
];

interface Props {
  title: string;
  variant?: "nosotros" | "calidad";
  /** Muestra el bloque de descarga de la política de calidad. */
  showPolicy?: boolean;
}

const CertificationsGrid = ({ title, variant = "nosotros", showPolicy = false }: Props) => {
  const isCalidad = variant === "calidad";

  return (
    <section className={`bg-background ${isCalidad ? "py-24 md:py-32" : "py-24 md:py-36"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2
            className={`font-bold tracking-tight ${
              isCalidad
                ? "text-3xl md:text-5xl mb-16"
                : "text-4xl md:text-5xl lg:text-6xl mb-16 md:mb-24"
            }`}
          >
            {title}
          </h2>
        </AnimatedSection>

        <div className={`grid grid-cols-1 md:grid-cols-3 ${isCalidad ? "gap-8" : "gap-6 md:gap-8"}`}>
          {certs.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`border border-border h-full transition-all duration-300 shadow-sm flex flex-col ${
                  isCalidad
                    ? "bg-secondary/30 p-10 hover:shadow-lg"
                    : "bg-background p-10 md:p-14 hover:shadow-xl"
                }`}
              >
                <div className={`${isCalidad ? "h-16" : "h-20"} mb-8 flex items-start`}>
                  <Image
                    src={c.logo}
                    alt={c.logoAlt}
                    className={`h-full w-auto object-contain object-left transition-all duration-500 ${
                      c.title.includes("FSC")
                        ? "brightness-0 opacity-60 hover:opacity-100"
                        : "grayscale hover:grayscale-0"
                    }`}
                  />
                </div>
                <h3
                  className={`font-bold tracking-tight mb-4 ${
                    isCalidad ? "text-xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`text-muted-foreground leading-relaxed font-light ${
                    isCalidad ? "text-base" : "text-base md:text-lg"
                  }`}
                >
                  {c.text}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {showPolicy && (
          <AnimatedSection delay={0.3}>
            <div className="mt-6 border border-border bg-secondary/20 px-8 md:px-12 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">
                    Políticas de calidad
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mt-0.5">
                    Política de calidad y valores de la organización
                  </p>
                </div>
              </div>
              <a
                href="/politica-de-calidad-neuhaus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
              >
                Ver documento
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default CertificationsGrid;
