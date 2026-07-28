import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";
import heroPrinting from "@/assets/fotos/_1033774.JPG";
import iramLogo from "@/assets/certificaciones/iram-logo.png";
import fscLogo from "@/assets/certificaciones/fsc.png"
const certs = [
  {
    name: "ISO 9001:2015",
    logo: iramLogo,
    logoAlt: "IRAM",
  },
  {
    name: "BPM",
    logo: iramLogo,
    logoAlt: "IRAM",
  },
  {
    name: "FSC® Cadena de Custodia",
    logo: fscLogo,
    logoAlt: "FSC",
  },
];

// Duplicate items to ensure smooth infinite scrolling
const repeated = [...certs, ...certs, ...certs, ...certs];

const Certifications = () => (
  <ParallaxImage
    src={heroPrinting}
    alt="Planta Neuhaus"
    overlay
    overlayOpacity="bg-navy/75"
    className="py-16 md:py-20 flex flex-col justify-center overflow-hidden"
  >
    <div className="container mx-auto px-4 md:px-6 w-full">
      <AnimatedSection>
        {/* Left aligned title, no extra text */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Calidad Certificada
          </h2>
        </div>
      </AnimatedSection>
    </div>

    {/* Infinite Marquee */}
    <div className="w-full overflow-hidden relative mt-4">
      {/* Subtle fade on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {repeated.map((cert, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 md:px-12 flex-shrink-0"
          >
            <img
              src={cert.logo}
              alt={cert.logoAlt}
              className="h-10 md:h-12 w-auto object-contain "
            />
            <span className="text-lg md:text-2xl font-bold text-white tracking-widest uppercase opacity-90">
              {cert.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </ParallaxImage>
);

export default Certifications;