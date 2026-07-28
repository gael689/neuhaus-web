/**
 * Fuente única de verdad del sitio.
 *
 * Todo dato que se repita en más de un lugar (NAP, dominio, año de fundación)
 * vive acá. El sitio anterior tenía el teléfono en dos archivos, la dirección
 * en tres y la antigüedad en cinco — con cinco cifras distintas.
 */

/**
 * Año de fundación — valor ACTUAL del sitio publicado.
 *
 * PENDIENTE: el Excel de modificaciones lo cambia a 1976 y unifica la
 * antigüedad en "50 años". Ese cambio NO está aplicado todavía: espera
 * confirmación documental (Q4 de PLAN-MIGRACION-SEO.md). Cuando se confirme,
 * cambiar acá y en los textos marcados con "ANTIGÜEDAD PENDIENTE".
 */
export const FUNDACION = 1979;

/**
 * Años de trayectoria calculados.
 *
 * OJO: hoy el sitio publicado muestra cifras distintas y contradictorias
 * (45+, "más de 45", "más de 40", "cuatro décadas"). Esta función existe para
 * que, una vez resuelto Q4, haya un solo número derivado de un solo dato.
 * Hasta entonces las secciones conservan su texto original tal cual.
 */
export const anosTrayectoria = () => new Date().getFullYear() - FUNDACION;

export const SITE = {
  name: "Neuhaus S.A.",
  legalName: "Neuhaus S.A. Industria Gráfica",
  alternateName: "Imprenta Neuhaus",
  /**
   * Dominio canónico definido con el cliente (2026-07-28).
   * neuhaus.com.ar apunta acá por redirect 301 permanente, no como alias.
   */
  url: "https://imprentaneuhaus.com",
  description:
    "Imprenta industrial en Buenos Aires especializada en prospectos medicinales y etiquetas autoadhesivas para la industria farmacéutica, cosmética y alimenticia. Certificaciones ISO 9001, BPM y FSC.",
  locale: "es_AR",
  lang: "es-AR",

  contact: {
    /** NAP confirmado contra Google Business Profile. No modificar sin actualizar el perfil. */
    street: "Colombres 1065",
    neighborhood: "Boedo",
    city: "Ciudad Autónoma de Buenos Aires",
    region: "CABA",
    postalCode: "C1238AAA",
    country: "AR",
    countryName: "Argentina",
    /** El sitio anterior mostraba 4925-6363: era un error de tipeo. */
    phone: "+54 11 4925-6364",
    phoneHref: "tel:+541149256364",
    email: "info@neuhaus.com.ar",
    /** Coordenadas aproximadas de Colombres 1065, Boedo. Afinar con las del perfil de Google. */
    geo: { lat: -34.6244, lng: -58.4163 },
  },

  /** Reseñas del Google Business Profile. Actualizar periódicamente. */
  rating: {
    value: 4.7,
    count: 20,
    url: "https://maps.app.goo.gl/2PqtTxpod9dDaEut5",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/neuhaus-s-a/",
    facebook:
      "https://www.facebook.com/people/Neuhaus-Industria-Gr%C3%A1fica/100063511693266/",
    instagram: "https://www.instagram.com/neuhausimprenta",
  },

  certifications: ["ISO 9001", "BPM (Buenas Prácticas de Manufactura)", "FSC"],
} as const;

/** Dirección en una línea, formato único para todo el sitio y los directorios. */
export const direccionCompleta = `${SITE.contact.street}, ${SITE.contact.neighborhood}, ${SITE.contact.postalCode}, ${SITE.contact.city}, ${SITE.contact.countryName}`;

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Prospectos & Impresos", href: "/servicios/prospectos" },
  { label: "Etiquetas Autoadhesivas", href: "/servicios/etiquetas" },
  { label: "Calidad", href: "/calidad" },
  { label: "Contacto", href: "/contacto" },
] as const;
