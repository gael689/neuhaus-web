import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Contacto — Cotizá tu impresión con Neuhaus S.A.";
export { size, contentType };

export default function Image() {
  return ogImage({
    eyebrow: "Contacto",
    title: "Hablemos de\ntu proyecto.",
  });
}
