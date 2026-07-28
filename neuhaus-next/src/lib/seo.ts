import type { Metadata } from "next";
import { SITE } from "./site";

type PageSeoInput = {
  title: string;
  description: string;
  /** Ruta con barra inicial, ej: "/servicios/prospectos". */
  path: string;
  /** Imagen OG específica de la página; si no, usa la global. */
  image?: string;
};

/**
 * Construye la metadata de una página con canonical absoluto y Open Graph
 * completo. Se usa en las 6 rutas — el sitio Vite tenía un solo <title>
 * compartido por todas, así que Google indexaba las 6 URLs con el mismo snippet.
 */
export function pageSeo({ title, description, path, image }: PageSeoInput): Metadata {
  const url = `${SITE.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
