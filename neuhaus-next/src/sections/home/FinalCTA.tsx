import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FinalCTA = () => (
  <section className="bg-secondary py-24 md:py-36">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
          Contanos qué necesitás. Nuestro equipo técnico te asesorará sobre los mejores
          materiales y procesos para tu producto.
        </p>
        <Link
          href="/contacto"
          className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-deep transition-all duration-300 hover:shadow-xl rounded-[2px]"
        >
          <span className="uppercase tracking-widest">Solicitar cotización</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
