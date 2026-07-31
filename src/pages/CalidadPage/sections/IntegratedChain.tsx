import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import heroPrinting from "@/assets/fotos/_1033771.JPG";

const steps = [
  "Recepción de diseño",
  "Preprensa",
  "Control EV al primer pliego impreso",
  "Impresión",
  "Control EV",
  "Doblado / Terminación",
  "Control de lectura Laetus a código de barras",
  "Acondicionado en cajas",
  "Entrega",
];

const IntegratedChain = () => (
  <ParallaxImage src={heroPrinting} alt="Línea de producción Neuhaus" overlay overlayOpacity="bg-[#0a1628]/75" className="py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-10 text-center">Cadena de producción integrada</h2>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-4 mb-10 md:mb-12 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-4 w-full md:w-auto"
            >
              <div className="flex-1 md:flex-none w-full md:w-auto px-6 py-4 border border-white/20 text-white text-base font-semibold text-center backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg md:rounded-none">
                {step}
              </div>
              {i < steps.length - 1 && (
                <>
                  {/* Arrow for mobile (down) */}
                  <div className="md:hidden">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6 text-white rotate-90" />
                    </motion.div>
                  </div>
                  {/* Arrow for desktop (right) */}
                  <ArrowRight className="w-5 h-5 text-white/60 hidden md:block" />

                </>
              )}
            </motion.div>
          ))}
        </div>


        <p className="text-lg md:text-2xl font-light text-white/70 text-center max-w-3xl mx-auto leading-relaxed">
          Todo el proceso ocurre dentro de nuestra planta. Sin tercerizar. Sin puntos ciegos. Con trazabilidad completa en cada etapa de producción.
        </p>
      </AnimatedSection>
    </div>
  </ParallaxImage>
);

export default IntegratedChain;
