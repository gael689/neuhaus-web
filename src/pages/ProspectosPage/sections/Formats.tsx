import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const formats = [
  {
    title: "Planos",
    text: "Pliegos individuales sin doblar. Ideal para ciertos formatos de prospecto y material de marketing.",
  },
  {
    title: "Doblados",
    text: "Prospectos procesados y doblados dentro de nuestra planta, listos para su uso final.",
  },
  {
    title: "En bobina",
    text: "Prospectos en rollo continuo, compatible con líneas de envasado automatizadas.",
  },
];

const Formats = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4 md:px-8">

      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
              Versatilidad
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Formatos de entrega
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-light max-w-xs md:pb-1">
            Adaptamos el formato al proceso de envasado de cada cliente.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {formats.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-background border border-border border-t-2 border-t-primary p-8 md:p-10 h-full flex flex-col gap-4"
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{f.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{f.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default Formats;