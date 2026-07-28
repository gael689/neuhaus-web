import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import prospectosImg from "@/assets/fotos/_1033742.JPG";
import labelsImg from "@/assets/fotos/_1033764.JPG";

const panels = [
  { key: "papel" as const, num: "01", label: "Papel", title: "Prospectos & Impresos", img: prospectosImg, to: "/servicios/prospectos" },
  { key: "etiquetas" as const, num: "02", label: "Autoadhesivos", title: "Etiquetas", img: labelsImg, to: "/servicios/etiquetas" },
];

const ServicesSplit = () => {
  const [hovered, setHovered] = useState<"papel" | "etiquetas" | null>(null);

  return (
    <section id="servicios" className="relative">
      <div
        className="flex flex-col lg:flex-row min-h-[55vh] lg:h-[65vh]"
        onMouseLeave={() => setHovered(null)}
      >
        {panels.map((panel) => (
          <motion.div
            key={panel.key}
            onMouseEnter={() => setHovered(panel.key)}
            animate={{ flex: hovered === null ? 1 : hovered === panel.key ? 1.6 : 0.4 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative overflow-hidden cursor-pointer min-h-[38vh] lg:min-h-0"
          >
            <Link to={panel.to} className="block w-full h-full group">
              <motion.img
                src={panel.img}
                alt={panel.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hovered === panel.key ? 1.08 : 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-navy-deep"
                animate={{ opacity: hovered === panel.key ? 0.35 : 0.7 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                animate={{ opacity: hovered === panel.key ? 0.18 : 0.08 }}
                transition={{ duration: 0.6 }}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-primary-foreground font-serif text-[10rem] md:text-[16rem] leading-none pointer-events-none select-none"
              >
                {panel.num}
              </motion.span>

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/60 mb-3">
                  {panel.label}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                  {panel.title}
                </h3>

                {/* Visible permanently on mobile, hover-revealed on large screens */}
                <div className="mt-auto md:mt-2 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div
                    className="inline-flex items-center gap-4 text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase border border-white/30 hover:border-white px-6 py-4 transition-colors"
                  >
                    Ver servicio
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSplit;
