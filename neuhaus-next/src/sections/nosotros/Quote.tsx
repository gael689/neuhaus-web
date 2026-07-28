import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import heroPrinting from "@/assets/img/impresion-offset-planta-neuhaus.webp";

/*
 * PENDIENTE — el Excel indica sacar esta sección completa (fila B14-B16).
 * Se migra tal cual; cuando se confirme, basta con quitar el import y el
 * <Quote /> de app/nosotros/page.tsx y borrar este archivo.
 */
const Quote = () => (
  <ParallaxImage
    src={heroPrinting}
    alt="Impresión offset en la planta de Neuhaus S.A."
    overlay
    overlayOpacity="bg-navy/80"
    className="py-28 md:py-40"
  >
    <div className="container mx-auto px-4 md:px-6 text-center">
      <AnimatedSection>
        <p className="text-3xl md:text-5xl lg:text-[3.5rem] text-primary-foreground font-light max-w-5xl mx-auto leading-tight tracking-tight">
          Nuestros más de 40 años de experiencia en el rubro se reflejan en cada trabajo.
        </p>
      </AnimatedSection>
    </div>
  </ParallaxImage>
);

export default Quote;
