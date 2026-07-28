import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
  large?: boolean;
  bgImage?: string;
  bgPosition?: string;
}

const PageHero = ({ title, subtitle, large = false, bgImage, bgPosition = "center" }: Props) => (
  <section className={`relative ${large ? "pt-36 pb-28 md:pt-48 md:pb-40" : "pt-32 pb-20 md:pt-40 md:pb-28"} overflow-hidden`}>
    {bgImage ? (
      <>
        <motion.img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: bgPosition }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      </>
    ) : (
      <div className="absolute inset-0 bg-navy" />
    )}
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <AnimatedSection>
        <h1 className={`${large ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl lg:text-6xl"} font-bold text-white leading-[1.05] tracking-tight max-w-5xl`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </div>
  </section>
);

export default PageHero;
