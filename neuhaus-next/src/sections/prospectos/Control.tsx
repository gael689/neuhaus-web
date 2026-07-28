import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import heroPrinting from "@/assets/img/verificacion-electronica-pliegos.webp";

const Control = () => (
  <ParallaxImage
    src={heroPrinting}
    alt="Verificación electrónica de pliegos en la línea de producción de Neuhaus"
    overlay
    overlayOpacity="bg-[#0a1628]/95"
    className="py-24 md:py-40"
  >
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Cada pliego, verificado.
        </h2>
        <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl leading-relaxed mb-10">
          Nuestro sistema Electronic Verification compara en tiempo real el pliego impreso contra
          el PDF aprobado por el cliente, detectando cualquier inconsistencia antes de que el
          trabajo avance.
        </p>
        <Link
          href="/calidad"
          className="inline-flex items-center gap-2 text-base font-semibold text-white/90 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
        >
          Conocé nuestro sistema de calidad →
        </Link>
      </AnimatedSection>
    </div>
  </ParallaxImage>
);

export default Control;
