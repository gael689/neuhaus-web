import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const valores = [
  { title: "Compromiso con la calidad" },
  { title: "Innovación" },
  { title: "Responsabilidad" },
  { title: "Trabajo en equipo" },
  { title: "Mejora continua" },
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
        <Icon className="w-7 h-7 text-primary" />
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

        <Card icon={Target} title="Objetivo" delay={0}>
          <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Nuestro objetivo: responder con velocidad y calidad.
            </p>
            <p>
              Con procesos 100% integrados, tecnología de verificación propia y control en cada
              etapa, garantizamos una respuesta ágil para la industria farmacéutica, cosmética
              y alimenticia, sin resignar precisión.
            </p>
          </div>
        </Card>

        <Card icon={Eye} title="Proyección" delay={0.1}>
          <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Queremos seguir innovando en soluciones gráficas para la industria farmacéutica,
              cosmética y alimenticia.
            </p>
            <p>
              Buscamos expandir nuestra presencia en el mercado, consolidándonos como
              proveedores preferidos, ofreciendo productos de alta calidad y cumpliendo con
              los más altos estándares de seguridad y calidad.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-2">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-background border border-border transition-all duration-300 shadow-sm hover:shadow-lg p-8 md:p-11"
            >
              <div className="flex items-center gap-4 mb-7">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Gem className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Valores</h3>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                {valores.map((v, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-[0.66rem] bg-primary/5 border border-primary/25 rounded-full pl-[1.05rem] pr-[1.3rem] py-[0.79rem] text-[0.92rem] md:text-[1.05rem] font-bold text-foreground tracking-tight"
                  >
                    <span className="w-[0.53rem] h-[0.53rem] rounded-full bg-primary flex-shrink-0" />
                    {v.title}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  </section>
);

export default MisionVision;
