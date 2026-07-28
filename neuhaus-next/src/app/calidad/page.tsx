import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import AnimatedSection from "@/components/AnimatedSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import Philosophy from "@/sections/calidad/Philosophy";
import Systems from "@/sections/calidad/Systems";
import IntegratedChain from "@/sections/calidad/IntegratedChain";
import { pageSeo } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import qualityControl from "@/assets/img/control-calidad-impresion-farmaceutica.webp";

export const metadata: Metadata = pageSeo({
  title: "Control de calidad en impresión farmacéutica",
  description:
    "Verificación electrónica pliego a pliego, lectura Laetus y departamento de calidad propio dentro de la planta. Certificaciones ISO 9001, BPM y FSC. Cadena de producción integrada, sin tercerizar.",
  path: "/calidad",
});

export default function CalidadPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Calidad", path: "/calidad" },
          ])
        )}
      />

      {/* PENDIENTE — el Excel indica sacar el subtítulo (fila B36-B37). Sin aplicar. */}
      <PageHero
        title="La calidad no es un resultado. Es un proceso."
        subtitle="Cada trabajo que sale de nuestra planta pasó por un sistema de control que pocos proveedores gráficos pueden ofrecer."
        bgImage={qualityControl}
        bgAlt="Control de calidad de impresión para la industria farmacéutica en Neuhaus"
      />
      <Philosophy />
      <Systems />
      <CertificationsGrid
        title="Certificados por los organismos más exigentes"
        variant="calidad"
        showPolicy
      />
      <IntegratedChain />

      <section className="bg-secondary py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-12 max-w-4xl mx-auto leading-tight">
              ¿Buscás una solución gráfica a medida? Hablemos de tu proyecto.
            </h2>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-deep transition-all duration-300 hover:shadow-xl rounded-[2px]"
            >
              <span className="uppercase tracking-widest">Hablemos</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
