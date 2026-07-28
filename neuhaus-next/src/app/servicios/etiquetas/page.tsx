import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import ContactForm, { type Field } from "@/components/ContactForm";
import Service from "@/sections/etiquetas/Service";
import Scale from "@/sections/etiquetas/Scale";
import Flexo from "@/sections/etiquetas/Flexo";
import { pageSeo } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import labelsFlexo from "@/assets/img/impresion-flexografica-etiquetas.webp";

export const metadata: Metadata = pageSeo({
  title: "Etiquetas autoadhesivas en rollo",
  description:
    "Etiquetas autoadhesivas con impresión flexográfica UV de alta definición para farmacéutica, cosmética, alimentos y vinos. BOPP, Martelé e ilustración. Tirajes cortos, medios y largos.",
  path: "/servicios/etiquetas",
});

const fields: Field[] = [
  { name: "nombre", label: "Nombre completo" },
  { name: "empresa", label: "Empresa" },
  { name: "email", label: "Email", type: "email" },
  { name: "telefono", label: "Teléfono", type: "tel" },
  { name: "cantidad", label: "Cantidad total" },
  { name: "tamano", label: "Tamaño de etiqueta (ej: 50 × 30 mm)" },
  { name: "colores", label: "Cantidad de colores" },
  {
    name: "sustrato",
    label: "Sustrato",
    options: [
      "BOPP blanco",
      "BOPP transparente",
      "BOPP metalizado",
      "Ilustración",
      "Martele",
      "Otro",
    ],
  },
  { name: "mensaje", label: "Mensaje adicional", type: "textarea", required: false },
];

export default function EtiquetasPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          serviceSchema({
            name: "Impresión de etiquetas autoadhesivas",
            description:
              "Etiquetas autoadhesivas en rollo con impresión flexográfica UV de alta definición, en BOPP blanco, transparente y metalizado, Martelé e ilustración, para la industria farmacéutica, cosmética, alimenticia y vinícola.",
            path: "/servicios/etiquetas",
            serviceType: "Impresión de etiquetas autoadhesivas",
          }),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios/etiquetas" },
            { name: "Etiquetas Autoadhesivas", path: "/servicios/etiquetas" },
          ])
        )}
      />

      <PageHero
        title="Etiquetas para la Industria Farmacéutica, Cosmética, Alimenticia y demás."
        subtitle="Impresión flexográfica UV de alta definición. Desde tirajes cortos a medios y largos: la solución perfecta para cualquier productor."
        bgImage={labelsFlexo}
        bgAlt="Impresión flexográfica de etiquetas autoadhesivas en Neuhaus S.A."
      />
      <Service />
      <Scale />
      <Flexo />

      <section className="py-24 md:py-36 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ContactForm
            title="¿Necesitás cotizar etiquetas?"
            fields={fields}
            buttonLabel="Solicitar cotización"
            origen="Cotización — Etiquetas Autoadhesivas"
          />
        </div>
      </section>
    </>
  );
}
