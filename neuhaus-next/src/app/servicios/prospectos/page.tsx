import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import ContactForm, { type Field } from "@/components/ContactForm";
import Service from "@/sections/prospectos/Service";
import Formats from "@/sections/prospectos/Formats";
import Technologies from "@/sections/prospectos/Technologies";
import Control from "@/sections/prospectos/Control";
import { pageSeo } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import prospectosImg from "@/assets/img/prospectos-medicinales-laboratorios.webp";

export const metadata: Metadata = pageSeo({
  title: "Impresión de prospectos medicinales",
  description:
    "Producimos prospectos medicinales y cosméticos con verificación electrónica pliego a pliego. Offset, flexo y digital. Entrega plana, doblada o en bobina. Planta propia en Buenos Aires.",
  path: "/servicios/prospectos",
});

const fields: Field[] = [
  { name: "nombre", label: "Nombre completo" },
  { name: "empresa", label: "Empresa" },
  { name: "email", label: "Email", type: "email" },
  { name: "telefono", label: "Teléfono", type: "tel" },
  { name: "cantidad", label: "Cantidad total" },
  { name: "tamano", label: "Tamaño (ej: 210 × 297 mm)" },
  { name: "colores", label: "Cantidad de colores" },
  {
    name: "terminacion",
    label: "Terminación",
    options: ["Plano", "Doblado simple", "Doblado múltiple"],
  },
  { name: "mensaje", label: "Mensaje adicional", type: "textarea", required: false },
];

export default function ProspectosPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          serviceSchema({
            name: "Impresión de prospectos medicinales y material impreso",
            description:
              "Impresión offset, flexográfica y digital de prospectos medicinales y cosméticos, folletería comercial, recetarios, revistas y anotadores, con verificación electrónica en cada pliego.",
            path: "/servicios/prospectos",
            serviceType: "Impresión de prospectos medicinales",
          }),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios/prospectos" },
            { name: "Prospectos & Impresos", path: "/servicios/prospectos" },
          ])
        )}
      />

      <PageHero
        title="En Neuhaus, atendemos toda necesidad de impresión."
        subtitle="Prospectos medicinales, folletería comercial, recetarios, revistas y anotadores. Tecnología offset, flexo y digital, múltiples formatos de entrega."
        bgImage={prospectosImg}
        bgAlt="Prospectos medicinales impresos para laboratorios farmacéuticos"
      />
      <Service />
      <Formats />
      <Technologies />
      <Control />

      <section className="py-24 md:py-36 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ContactForm
            title="¿Necesitás cotizar prospectos o material impreso?"
            fields={fields}
            buttonLabel="Solicitar cotización"
            origen="Cotización — Prospectos & Impresos"
          />
        </div>
      </section>
    </>
  );
}
