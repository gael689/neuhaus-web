"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/img/banner-produccion-integrada-neuhaus.webp";
import banner2 from "@/assets/img/banner-trayectoria-neuhaus.webp";
import banner3 from "@/assets/img/banner-calidad-certificada.webp";

type Slide = {
  eyebrow: string;
  title: string;
  /** Alt real de la foto — el eyebrow no describe la imagen. */
  imageAlt: string;
  image: StaticImageData;
  overlay: string;
  titleColor: string;
  eyebrowColor: string;
  btnClass: string;
  cta: string;
  link: string;
  scrollTo?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Producción",
    title: "Proceso de\nproducción integrado,\ndesde el archivo hasta\nel producto terminado.",
    cta: "Ver servicios",
    link: "/",
    scrollTo: "servicios",
    image: banner1,
    imageAlt: "Planta de producción gráfica de Neuhaus S.A. en Buenos Aires",
    overlay: "from-[#0f0f0f]/90 via-[#0f0f0f]/70 to-[#0f0f0f]/10",
    titleColor: "text-white",
    eyebrowColor: "text-white/70",
    btnClass: "bg-white text-black hover:bg-white/90",
  },
  {
    eyebrow: "Trayectoria",
    title: "NEUHAUS 3G,\ncontinuidad de\ntercera generación.",
    cta: "Conocé nuestra historia",
    link: "/nosotros",
    image: banner2,
    imageAlt: "Taller gráfico de Neuhaus S.A., empresa familiar de Boedo",
    overlay: "from-[#0a1628]/90 via-[#0a1628]/65 to-[#0a1628]/10",
    titleColor: "text-white",
    eyebrowColor: "text-white/70",
    btnClass: "bg-white text-[#0a1628] hover:bg-white/90",
  },
  {
    eyebrow: "Calidad y procesos",
    title: "Impresión bajo normas\ncertificadas ISO,\nBPM y FSC.",
    cta: "Conocé nuestro enfoque",
    link: "/calidad",
    image: banner3,
    imageAlt: "Control de calidad de impresión bajo normas ISO 9001, BPM y FSC",
    overlay: "from-[#061510]/92 via-[#061510]/70 to-[#061510]/10",
    titleColor: "text-white",
    eyebrowColor: "text-white/70",
    btnClass: "bg-white text-[#061510] hover:bg-white/90",
  },
];

const AUTOPLAY_MS = 6000;

const imgVariants = {
  enter: { opacity: 0, scale: 1.07 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.13 * i,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, y: -18, transition: { duration: 0.25 } },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  const handleCta = () => {
    if (slide.scrollTo) {
      if (pathname !== "/") {
        router.push(`/#${slide.scrollTo}`);
      } else {
        document.getElementById(slide.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(slide.link);
    }
  };

  return (
    <div
      className="w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrusel"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "80vh", minHeight: 520, maxHeight: 900 }}
      >
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-black/10 to-transparent z-[15] pointer-events-none" />

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-20">
          <motion.div
            key={current}
            className="h-full bg-white/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          />
        </div>

        <AnimatePresence mode="sync">
          <motion.div
            key={`img-${current}`}
            className="absolute inset-0"
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              // El primer banner es el LCP de la home: se precarga, el resto no.
              priority={current === 0}
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="sync">
          <motion.div
            key={`overlay-${current}`}
            className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 z-10 flex items-end justify-start overflow-hidden pt-28 pb-[105px] md:pb-[95px] lg:pb-20 px-6 md:px-14 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-5 max-w-2xl items-start text-left w-full"
            >
              <motion.div
                custom={0}
                variants={textVariants}
                className={`flex items-center gap-3 ${slide.eyebrowColor}`}
              >
                <span className="h-px w-8 bg-current opacity-40" />
                <span className="text-[10px] tracking-[0.32em] uppercase font-medium">
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/*
                mode="wait" garantiza que solo un <h1> esté montado a la vez.
                El HTML que renderiza el servidor lleva el título del slide 1.
              */}
              <motion.h1
                custom={1}
                variants={textVariants}
                className={`text-4xl sm:text-5xl md:text-[58px] lg:text-[66px] font-bold leading-[1.04] tracking-tight ${slide.titleColor}`}
                style={{ whiteSpace: "pre-line" }}
              >
                {slide.title}
              </motion.h1>

              <motion.div custom={2} variants={textVariants} className="mt-2">
                <button
                  onClick={handleCta}
                  className={`group inline-flex items-center gap-3 text-sm font-semibold px-7 py-3.5 rounded-[2px] transition-all duration-300 ${slide.btnClass}`}
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-[3.1rem] md:bottom-20 right-6 md:right-14 lg:right-20 z-20 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300 rounded-[2px] backdrop-blur-sm border-white/20 text-white/80 hover:bg-white/20 hover:text-white bg-black/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === current}
                className={`rounded-full transition-all duration-500 ${
                  i === current ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Slide siguiente"
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300 rounded-[2px] backdrop-blur-sm border-white/20 text-white/80 hover:bg-white/20 hover:text-white bg-black/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
