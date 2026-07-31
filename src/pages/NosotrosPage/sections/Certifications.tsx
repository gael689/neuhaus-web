import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import iramLogo from "@/assets/certificaciones/iram-logo.png";
import fscLogo from "@/assets/certificaciones/fsc.png";

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
  <section className="py-24 md:py-36 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 md:mb-24">Certificaciones</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {certs.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div whileHover={{ y: -6 }} className="bg-background p-10 md:p-14 border border-border h-full transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
              <div className="h-20 mb-8 flex items-start">
                <img 
                  src={c.logo} 
                  alt={c.title} 
                  className={`h-full w-auto object-contain object-left transition-all duration-500 ${c.title.includes("FSC") ? "brightness-0 opacity-60 hover:opacity-100" : "grayscale hover:grayscale-0"}`} 
                />

              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">{c.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">{c.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;

