import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Form from "@/sections/contacto/Form";
import Info from "@/sections/contacto/Info";
import { pageSeo } from "@/lib/seo";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import { SITE } from "@/lib/site";
import contactBg from "@/assets/img/planta-grafica-neuhaus-boedo.webp";

export const metadata: Metadata = pageSeo({
  title: "Contacto — Cotizá tu impresión",
  description: `Pedí tu cotización de prospectos o etiquetas autoadhesivas. ${SITE.contact.street}, ${SITE.contact.neighborhood}, CABA. Teléfono ${SITE.contact.phone}.`,
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          {
            "@type": "ContactPage",
            name: "Contacto — Neuhaus S.A.",
            url: `${SITE.url}/contacto`,
          },
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contacto" },
          ])
        )}
      />

      <PageHero
        title="Hablemos de tu proyecto."
        subtitle="Completá el formulario o escribinos directamente. Te respondemos a la brevedad."
        bgImage={contactBg}
        bgAlt="Planta gráfica de Neuhaus S.A. en Boedo, Buenos Aires"
        bgPosition="center 25%"
        large
      />

      <section className="py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Form />
            <Info />
          </div>
        </div>
      </section>
    </>
  );
}
