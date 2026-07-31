"use client";

import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import foto1 from "@/assets/img/planta-neuhaus-maquinaria-2.webp";
import foto2 from "@/assets/img/planta-neuhaus-maquinaria-3.webp";
import foto3 from "@/assets/img/planta-neuhaus-produccion.webp";
import foto4 from "@/assets/img/planta-grafica-neuhaus-boedo.webp";
import foto5 from "@/assets/img/impresora-offset-neuhaus.webp";
import foto6 from "@/assets/img/planta-neuhaus-maquinaria-1.webp";
import foto7 from "@/assets/img/planta-neuhaus-maquinaria-4.webp";
import foto8 from "@/assets/img/equipo-planta-neuhaus.webp";
import foto9 from "@/assets/img/verificacion-electronica-pliegos.webp";
import foto10 from "@/assets/img/planta-impresion-certificada.webp";
import foto11 from "@/assets/img/departamento-calidad-neuhaus.webp";
import foto12 from "@/assets/img/control-calidad-impresion-farmaceutica.webp";

/** Cada foto con su alt propio — antes las 12 compartían "Planta Neuhaus". */
const images: { src: StaticImageData; alt: string }[] = [
  { src: foto1, alt: "Maquinaria de impresión en la planta de Neuhaus, Boedo" },
  { src: foto2, alt: "Sector de producción gráfica de Neuhaus S.A." },
  { src: foto3, alt: "Línea de producción de impresos en Neuhaus" },
  { src: foto4, alt: "Planta gráfica de Neuhaus S.A. en Boedo, Buenos Aires" },
  { src: foto5, alt: "Impresora offset de la planta de Neuhaus" },
  { src: foto6, alt: "Equipamiento de impresión de Neuhaus S.A." },
  { src: foto7, alt: "Sector de terminación y doblado de Neuhaus" },
  { src: foto8, alt: "Equipo de trabajo de Neuhaus S.A. en planta" },
  { src: foto9, alt: "Verificación electrónica de pliegos impresos" },
  { src: foto10, alt: "Planta de impresión certificada ISO 9001, BPM y FSC" },
  { src: foto11, alt: "Departamento de calidad interno de Neuhaus" },
  { src: foto12, alt: "Control de calidad de impresión para la industria farmacéutica" },
];

const Plant = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const max = images.length - visibleItems;
  const itemPct = 100 / images.length;
  const trackW = (images.length / visibleItems) * 100;

  const navigate = (dir: number) => setIndex((prev) => Math.max(0, Math.min(max, prev + dir)));

  useEffect(() => {
    if (index > max) setIndex(max);
  }, [max, index]);

  return (
    <section className="py-24 md:py-36 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Nuestra planta
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
              Nuestra planta en Boedo, Buenos Aires, cuenta con maquinaria de última generación y
              un equipo de profesionales comprometidos con la calidad en cada etapa de la
              producción.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative group">
          <div className="overflow-visible">
            <div
              className="flex"
              style={{
                width: `${trackW}%`,
                transform: `translateX(-${index * itemPct}%)`,
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {images.map((img, i) => (
                <div key={i} style={{ width: `${itemPct}%` }} className="px-2 md:px-3">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            disabled={index === 0}
            aria-label="Foto anterior"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-xl flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none hover:bg-primary hover:text-white z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            disabled={index >= max}
            aria-label="Foto siguiente"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-xl flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none hover:bg-primary hover:text-white z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-12 max-w-md mx-auto h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((index + visibleItems) / images.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Plant;
