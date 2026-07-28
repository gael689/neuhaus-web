import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // El proyecto Vite original vive un nivel más arriba y tiene su propio
  // lockfile; sin esto Turbopack infiere mal la raíz del workspace.
  turbopack: { root: path.resolve(__dirname) },

  images: {
    // AVIF primero: pesa ~20% menos que WebP en fotos de planta.
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
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
