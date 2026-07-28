import { SITE, FUNDACION, direccionCompleta } from "./site";

/**
 * Datos estructurados (JSON-LD). Alimentan el Knowledge Panel de Google, los
 * rich results de la SERP y — cada vez más — lo que los motores generativos
 * (ChatGPT, Perplexity, Gemini) toman como hechos verificables de la empresa.
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness", "PrintingService"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: [SITE.alternateName, "NEUHAUS 3G"],
  url: SITE.url,
  description: SITE.description,
  foundingDate: String(FUNDACION),
  email: SITE.contact.email,
  telephone: SITE.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.contact.street,
    addressLocality: SITE.contact.city,
    addressRegion: SITE.contact.region,
    postalCode: SITE.contact.postalCode,
    addressCountry: SITE.contact.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.contact.geo.lat,
    longitude: SITE.contact.geo.lng,
  },
  areaServed: { "@type": "Country", name: "Argentina" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: 5,
  },
  sameAs: [SITE.social.linkedin, SITE.social.facebook, SITE.social.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  knowsAbout: [
    "Impresión de prospectos medicinales",
    "Etiquetas autoadhesivas",
    "Impresión offset",
    "Impresión flexográfica",
    "Verificación electrónica de pliegos",
    "Buenas Prácticas de Manufactura",
  ],
  hasCredential: SITE.certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: c,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    areaServed: "AR",
    availableLanguage: "Spanish",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: SITE.lang,
  publisher: { "@id": ORG_ID },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${SITE.url}${input.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Argentina" },
    audience: {
      "@type": "BusinessAudience",
      name: "Laboratorios farmacéuticos, empresas cosméticas y alimenticias",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Envuelve varios nodos en un solo @graph — evita múltiples <script> sueltos. */
export function jsonLdGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export { direccionCompleta };
