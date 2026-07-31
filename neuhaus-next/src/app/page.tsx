import type { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import Stats from "@/sections/home/Stats";
import ServicesSplit from "@/sections/home/ServicesSplit";
// import WhyNeuhaus from "@/sections/home/WhyNeuhaus"; // Oculta a pedido del cliente (Excel, fila B20)
import Industries from "@/sections/home/Industries";
import Certifications from "@/sections/home/Certifications";
import FinalCTA from "@/sections/home/FinalCTA";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Neuhaus S.A. — Imprenta industrial en Buenos Aires",
  description:
    "Imprenta industrial en Boedo, CABA. Prospectos medicinales, etiquetas autoadhesivas e impresión offset, flexo y digital para laboratorios, cosmética y alimentos. ISO 9001, BPM y FSC.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSplit />
      {/* <WhyNeuhaus /> */}
      <Industries />
      <Certifications />
      <FinalCTA />
    </>
  );
}
