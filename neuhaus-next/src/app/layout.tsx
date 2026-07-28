import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

/**
 * next/font descarga y sirve las fuentes desde nuestro propio dominio.
 * El sitio anterior las traía de fonts.googleapis.com: dos conexiones extra
 * antes del primer texto pintado y salto de layout al llegar la tipografía.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  // Base para que todos los canonical y og:url se resuelvan absolutos.
  metadataBase: new URL(SITE.url),
  title: {
    default: "Neuhaus S.A. — Imprenta industrial en Buenos Aires",
    // Cada página define su propio título; este es el sufijo de marca.
    template: "%s | Neuhaus S.A.",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Industria gráfica",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.lang} className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <JsonLd data={jsonLdGraph(organizationSchema, websiteSchema)} />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:shadow-lg"
        >
          Saltar al contenido
        </a>

        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
