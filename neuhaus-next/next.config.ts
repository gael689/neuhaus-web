import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // La app vive en un subdirectorio del repo (Vercel la buildea con el Root
  // Directory apuntado acá); sin esto Turbopack infiere mal la raíz del workspace.
  turbopack: { root: path.resolve(__dirname) },

  images: {
    // AVIF primero: pesa ~20% menos que WebP en fotos de planta.
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      /**
       * Dominio viejo (el sitio de Wix) → sitio nuevo, con una marca en la URL.
       *
       * El redirect tiene que hacerse ACÁ y no desde el panel de Vercel. Un
       * redirect de dominio configurado en Vercel corre antes que la app y solo
       * permite elegir el host de destino: la visita llega a www.neuhaus.com.ar
       * sin ningún rastro de dónde venía. Y por el redirect tampoco llega el
       * `Referer` — cuando alguien escribe el dominio viejo en la barra, el
       * navegador no manda ninguno. La marca `?desde=` es la única señal.
       *
       * Todo cae en el inicio, sin conservar el path: las URLs del sitio de Wix
       * no existen acá, así que conservarlo manda cada link viejo indexado
       * derecho a un 404. El inicio es el único destino que siempre resuelve.
       *
       * Requisito en Vercel: imprentaneuhaus.com y www.imprentaneuhaus.com
       * tienen que estar asignados al proyecto SIN redirect ("No Redirect"),
       * o esta regla nunca corre.
       *
       * La lee src/components/AvisoDominioViejo.tsx.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:www\\.)?imprentaneuhaus\\.com" }],
        destination: "https://www.neuhaus.com.ar/?desde=imprentaneuhaus",
        permanent: true,
      },

      /**
       * Atajo al portal interno de empleados: neuhaus.com.ar/login → portal.
       *
       * `permanent: false` es deliberado. Un redirect permanente (308) lo cachea
       * el navegador de cada empleado: si mañana cambia la dirección del portal,
       * cada máquina sigue yendo sola a la vieja hasta que alguien le limpie el
       * caché a mano. Con el temporal (307) el navegador vuelve a consultar
       * siempre. Se evalúa pasarlo a permanente cuando la dirección esté firme.
       *
       * No interfiere con la regla de arriba: esa solo se dispara cuando el host
       * es imprentaneuhaus.com, por su condición `has`.
       */
      { source: "/login", destination: "https://portal.neuhaus.com.ar", permanent: false },

      // Las rutas del sitio Vite se mantienen idénticas, así que no hacen
      // falta redirects de contenido. Estos son solo por prolijidad de URLs.
      { source: "/servicios", destination: "/servicios/prospectos", permanent: true },
      { source: "/inicio", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
