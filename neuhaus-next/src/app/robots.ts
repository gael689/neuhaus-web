import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Bots de motores generativos habilitados explícitamente.
 *
 * PENDIENTE DE APROBACIÓN DEL CLIENTE: permitirlos implica que el contenido
 * del sitio puede usarse para entrenar y para citar en ChatGPT, Perplexity,
 * Gemini y Claude. Para una empresa B2B que quiere ser encontrada, el
 * beneficio de aparecer supera al costo — pero es una decisión de negocio.
 * Si se decide bloquearlos, mover estos user-agents a un bloque con disallow.
 */
const BOTS_IA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: BOTS_IA, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
