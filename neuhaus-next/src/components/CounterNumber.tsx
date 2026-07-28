"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: string;
  label?: string;
  suffix?: string;
  delay?: number;
  className?: string;
}

const CounterNumber = ({ value, label = "", suffix = "", delay = 0, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toString());
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      {/*
        El valor final va en el DOM desde el render inicial vía aria-label:
        el contador anima para el usuario, pero el crawler y el lector de
        pantalla ven el número real, no el "0" del primer frame.
      */}
      <div
        className={className || "text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-2"}
        aria-label={`${value}${suffix}`}
      >
        <span aria-hidden="true">
          {displayValue}
          {suffix}
        </span>
      </div>
      {label && (
        <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
          {label}
        </div>
      )}
    </motion.div>
  );
};

export default CounterNumber;
