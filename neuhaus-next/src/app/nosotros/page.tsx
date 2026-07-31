import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import CertificationsGrid from "@/components/CertificationsGrid";
import History from "@/sections/nosotros/History";
import Quote from "@/sections/nosotros/Quote";
import MisionVision from "@/sections/nosotros/MisionVision";
// import Values from "@/sections/nosotros/Values"; // Oculta: se repite con "Valores" de MisionVision (Excel, fila B18/B46-B47)
import Plant from "@/sections/nosotros/Plant";
import { pageSeo } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import teamPlant from "@/assets/img/equipo-planta-neuhaus.webp";

export const metadata: Metadata = pageSeo({
  title: "Nosotros — Industria gráfica familiar en Boedo",
  description:
    "Neuhaus S.A. es una imprenta familiar de Boedo, Buenos Aires, especializada en prospectos medicinales y etiquetas autoadhesivas. Conocé nuestra historia, nuestra planta y nuestras certificaciones.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Nosotros", path: "/nosotros" },
          ])
        )}
      />

      <PageHero
        title="Desde 1976, imprimiendo para la industria nacional."
        bgImage={teamPlant}
        bgAlt="Equipo de Neuhaus S.A. en la planta de Boedo, Buenos Aires"
      />
      <History />
      <Quote />
      <MisionVision />
      {/* <Values /> */}
      <Plant />
      <CertificationsGrid title="Certificaciones" variant="nosotros" />
    </>
  );
}
