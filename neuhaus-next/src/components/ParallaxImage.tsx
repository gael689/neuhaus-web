"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef, type ReactNode } from "react";

interface Props {
  src: StaticImageData;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: ReactNode;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  overlay = false,
  overlayOpacity = "bg-navy/60",
  children,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 scale-[1.35]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
        />
      </motion.div>
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default ParallaxImage;
