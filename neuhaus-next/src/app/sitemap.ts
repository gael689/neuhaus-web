import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Se sirve en /sitemap.xml y se declara en robots.txt. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const rutas: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/servicios/prospectos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/etiquetas", priority: 0.9, changeFrequency: "monthly" },
    { path: "/calidad", priority: 0.8, changeFrequency: "yearly" },
    { path: "/nosotros", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" },
  ];

  return rutas.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
