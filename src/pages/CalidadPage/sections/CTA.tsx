import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTA = () => (
  <section className="bg-secondary py-24 md:py-36">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground mb-12 max-w-4xl mx-auto leading-tight">
          ¿Buscás una solución gráfica a medida? Hablemos de tu proyecto.
        </h2>
        <Link
          to="/contacto"
          className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-deep transition-all duration-300 hover:shadow-xl rounded-[2px]"
        >
          <span className="uppercase tracking-widest">Hablemos</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default CTA;

