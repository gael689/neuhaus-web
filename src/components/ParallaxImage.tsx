import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: React.ReactNode;
}

const ParallaxImage = ({ src, alt, className = "", overlay = false, overlayOpacity = "bg-navy/60", children }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 w-full h-full object-cover scale-[1.35]"
        loading="lazy"
      />
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default ParallaxImage;
