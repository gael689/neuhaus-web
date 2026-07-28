"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/*
 * PENDIENTE — el Excel renombra "Misión" → "Objetivo" y "Visión" → "Proyección",
 * reescribe ambos textos y deja los valores solo con título (sin descripción).
 * Sin aplicar. Ver PLAN-MIGRACION-SEO.md, filas A4, A5 y A6.
 */
const valores = [
  {
    title: "Compromiso con la calidad",
    text: "Queremos garantizar productos de la más alta calidad, manteniendo una rigurosa supervisión en todos nuestros procesos de producción.",
  },
  {
    title: "Innovación",
    text: "Buscamos constantemente nuevas soluciones tecnológicas y creativas para satisfacer las necesidades de nuestros clientes y mejorar nuestros procesos.",
  },
  {
    title: "Responsabilidad",
    text: "Actuamos de manera ética y responsable, con un firme compromiso hacia la sostenibilidad y el cumplimiento de las normativas vigentes.",
  },
  {
    title: "Trabajo en equipo",
    text: "Fomentamos un ambiente de colaboración y respeto mutuo, donde cada miembro del equipo contribuye al éxito común.",
  },
  {
    title: "Mejora continua",
    text: "Adoptamos una filosofía de mejora constante en todos nuestros procesos, buscando siempre optimizar nuestra producción y elevar nuestros estándares.",
  },
];

interface CardProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  children: React.ReactNode;
}

const Card = ({ icon: Icon, title, delay, children }: CardProps) => (
  <AnimatedSection delay={delay}>
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-background p-8 md:p-11 border border-border h-full transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6"
      >
        <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
      </motion.div>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{title}</h3>
      <div className="w-12 h-[3px] bg-primary/35 mt-2 mb-6" />
      {children}
    </motion.div>
  </AnimatedSection>
);

const MisionVision = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <Card icon={Target} title="Misión" delay={0}>
          <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Nuestra misión en Neuhaus S.A. es proporcionar soluciones gráficas de alta calidad,
              especializándonos en la producción de prospectos medicinales, cosméticos y
              etiquetas, para satisfacer las necesidades de nuestros clientes en la industria
              farmacéutica y cosmética.
            </p>
            <p>
              Nos comprometemos a mantener los más altos estándares de calidad mediante procesos
              innovadores, tecnología avanzada y un estricto control de calidad, trabajando
              estrechamente con nuestros clientes para ofrecer productos que cumplan con sus
              expectativas y normativas internacionales.
            </p>
          </div>
        </Card>

        <Card icon={Eye} title="Visión" delay={0.1}>
          <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Ser una empresa líder en soluciones gráficas para la industria farmacéutica y
              cosmética, reconocida por nuestra excelencia en la producción de prospectos,
              etiquetas y materiales gráficos, con un enfoque en la innovación constante y la
              sostenibilidad.
            </p>
            <p>
              Buscamos expandir nuestra presencia local, consolidándonos como el socio estratégico
              preferido por laboratorios y empresas cosméticas, ofreciendo productos de la más alta
              calidad y cumpliendo con los más exigentes estándares de seguridad y calidad.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-2">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-background border border-border transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div className="p-8 md:p-11 pb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                >
                  <Gem className="w-7 h-7 text-primary" aria-hidden="true" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Valores</h3>
                <div className="w-12 h-[3px] bg-primary/35 mt-2" />
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border-t border-border">
                {valores.map((v) => (
                  <li key={v.title} className="bg-background px-6 py-7 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <h4 className="text-base font-bold text-foreground leading-snug">{v.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed pl-5">
                      {v.text}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default MisionVision;
