import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foto4 from "@/assets/fotos/IMG_4926.webp";
import foto5 from "@/assets/fotos/IMG_4932.webp";
import foto6 from "@/assets/fotos/DSCF1580.JPG";
import foto8 from "@/assets/fotos/DSCF1842 (1).JPG";
import foto10 from "@/assets/fotos/Impresora MA.JPG";
import foto12 from "@/assets/fotos/IMG_4922.webp";
import foto13 from "@/assets/fotos/IMG_4936.webp";
import foto14 from "@/assets/fotos/_1033721.JPG";
import foto15 from "@/assets/fotos/DSCF1570.JPG";
import foto16 from "@/assets/fotos/_1033774.JPG";
import foto17 from "@/assets/fotos/_1033746.JPG";
import foto18 from "@/assets/fotos/_1033768.JPG";

const images = [
  { src: foto4, alt: "Planta Neuhaus" },
  { src: foto5, alt: "Planta Neuhaus" },
  { src: foto6, alt: "Planta Neuhaus" },
  { src: foto8, alt: "Planta Neuhaus" },
  { src: foto10, alt: "Planta Neuhaus" },
  { src: foto12, alt: "Planta Neuhaus" },
  { src: foto13, alt: "Planta Neuhaus" },
  { src: foto14, alt: "Planta Neuhaus" },
  { src: foto15, alt: "Planta Neuhaus" },
  { src: foto16, alt: "Planta Neuhaus" },
  { src: foto17, alt: "Planta Neuhaus" },
  { src: foto18, alt: "Planta Neuhaus" },
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

  const navigate = (dir: number) =>
    setIndex((prev) => Math.max(0, Math.min(max, prev + dir)));

  // Ensure index doesn't exceed max when resizing
  useEffect(() => {
    if (index > max) setIndex(max);
  }, [max, index]);

  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Nuestra planta
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
              Nuestra planta en Boedo, Buenos Aires, cuenta con maquinaria de última generación y un equipo de profesionales comprometidos con la calidad en cada etapa de la producción.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative group">
          {/* Track */}
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
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => navigate(-1)}
            disabled={index === 0}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-xl flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none hover:bg-primary hover:text-white z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate(1)}
            disabled={index >= max}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-xl flex items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none hover:bg-primary hover:text-white z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar instead of dots for many items */}
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
