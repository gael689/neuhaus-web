import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import iramLogo from "@/assets/certificaciones/iram-logo.png";
import fscLogo from "@/assets/certificaciones/fsc.png";
// @ts-ignore
import policyPdf from "@/assets/PDC-SI-01 POLITICA DE CALIDAD Y VALORES DE LA ORGANIZACIÓN.pdf";

const certs = [
  { 
    title: "ISO 9001", 
    text: "Sistema de gestión de calidad reconocido internacionalmente. Garantiza que nuestros procesos cumplen estándares rigurosos de planificación, control y mejora continua.",
    logo: iramLogo
  },
  { 
    title: "BPM — Buenas Prácticas de Manufactura", 
    text: "Certificación clave para operar como proveedor del sector farmacéutico. Asegura condiciones de producción seguras, trazables y documentadas.",
    logo: iramLogo
  },
  { 
    title: "FSC® Cadena de Custodia", 
    text: "Certificación de manejo responsable de materiales forestales. Refleja nuestro compromiso con la producción sustentable.",
    logo: fscLogo
  },
];

const Certifications = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Certificados por los organismos más exigentes</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certs.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div whileHover={{ y: -6 }} className="bg-secondary/30 p-10 border border-border h-full transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col">
              <div className="h-16 mb-8 flex items-start">
                <img 
                  src={c.logo} 
                  alt={c.title} 
                  className={`h-full w-auto object-contain object-left transition-all duration-500 ${c.title.includes("FSC") ? "brightness-0 opacity-60 hover:opacity-100" : "grayscale hover:grayscale-0"}`} 
                />

              </div>
              <h3 className="text-xl font-bold tracking-tight mb-4">{c.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">{c.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-6 border border-border bg-secondary/20 px-8 md:px-12 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight">Políticas de calidad</h3>
              <p className="text-sm text-muted-foreground font-light mt-0.5">Política de calidad y valores de la organización</p>
            </div>
          </div>
          <a
            href={policyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
          >
            Ver documento
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </AnimatedSection>

    </div>
  </section>
);

export default Certifications;

