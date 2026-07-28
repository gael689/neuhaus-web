import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const items = [
  "Prospectos medicinales",
  "Prospectos cosméticos",
  "Folletería comercial",
  "Recetarios",
  "Revistas y catálogos",
  "Anotadores y blocks",
];

const Service = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">

      {/* ── Header ── */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4 block">
              Prospectos & Impresos
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              Producción en<br className="hidden md:block" /> pliegos.
            </h2>
          </div>
          <p className="text-base font-light text-muted-foreground leading-relaxed max-w-sm md:pb-2">
            Prospectos medicinales y cosméticos, folletería comercial. Todo el proceso dentro de nuestra planta, desde preprensa hasta entrega.
          </p>
        </div>
      </AnimatedSection>

      {/* ── Pills ── */}
      <AnimatedSection>
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ borderColor: "hsl(var(--foreground))", color: "hsl(var(--foreground))" }}
              className="px-5 py-2.5 border border-border text-sm md:text-base font-medium text-muted-foreground rounded-full cursor-default transition-colors duration-200"
            >
              {item}
            </motion.span>
          ))}

          {/* Open-ended pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: items.length * 0.05 }}
          >
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-dashed border-border text-sm md:text-base font-medium text-muted-foreground rounded-full hover:border-foreground hover:text-foreground transition-all duration-200"
            >
              ¿Necesitás algo más?
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

    </div>
  </section>
);

export default Service;