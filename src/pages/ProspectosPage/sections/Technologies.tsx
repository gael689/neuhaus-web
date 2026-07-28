import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

import offsetImg from "@/assets/fotos/IMG_4921.webp";
import flexoImg from "@/assets/fotos/_1033356.JPG";
import digitalImg from "@/assets/fotos/impresion_digital.jpeg";

const Technologies = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">

      <AnimatedSection>
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
            Maquinaria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Tecnologías
          </h2>
        </div>
      </AnimatedSection>

      {/* ── Offset: image left, text right ── */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden mb-4">
          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
            <motion.img
              src={offsetImg}
              alt="Máquina de impresión offset Neuhaus"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 65%" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
              width={800}
              height={500}
            />
            <div className="absolute bottom-5 left-5">
              <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] tracking-[0.25em] uppercase font-medium">
                Offset
              </span>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 flex flex-col justify-center gap-5">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Impresión Offset
            </h3>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Sistema de impresión en pliegos de alta resolución. Precisión de color y nitidez tipográfica para prospectos, folletería y papelería comercial.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 mt-1">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Formato</p>
                <p className="text-sm font-medium">Pliego a pliego</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Ideal para</p>
                <p className="text-sm font-medium">Tirajes largos y medios</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Flexo: text left, image right ── */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden mb-4">
          <div className="bg-background p-8 md:p-12 flex flex-col justify-center gap-5 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Impresión Flexo
            </h3>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Para tirajes largos y medios que precisen terminación en bobina. Alta velocidad y reproducibilidad constante en tirajes extensos.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 mt-1">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Formato</p>
                <p className="text-sm font-medium">Terminación a bobina o pliego</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Ideal para</p>
                <p className="text-sm font-medium">Tirajes largos y medios</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[340px] order-1 lg:order-2">
            <motion.img
              src={flexoImg}
              alt="Impresión flexo Neuhaus"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
              width={800}
              height={500}
            />
            <div className="absolute bottom-5 right-5">
              <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] tracking-[0.25em] uppercase font-medium">
                Flexo
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Digital: image left, text right ── */}
      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden">
          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
            <motion.img
              src={digitalImg}
              alt="Impresión digital Neuhaus"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              loading="lazy"
              width={800}
              height={500}
            />
            <div className="absolute bottom-5 left-5">
              <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] tracking-[0.25em] uppercase font-medium">
                Digital
              </span>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 flex flex-col justify-center gap-5">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Impresión Digital
            </h3>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Para tirajes cortos. Sin planchas, sin mínimos elevados. Ideal para muestras, pruebas o materiales de bajo volumen.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 mt-1">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Formato</p>
                <p className="text-sm font-medium">Terminación a bobina</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">Ideal para</p>
                <p className="text-sm font-medium">Muestras y bajo volumen</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  </section>
);

export default Technologies;