import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Neuhaus S.A. — Imprenta industrial en Buenos Aires";
export { size, contentType };

export default function Image() {
  return ogImage({
    // Ojo: el rótulo no debe repetir "Industria gráfica" del wordmark.
    eyebrow: "Prospectos & Etiquetas",
    title: "Imprenta industrial\nen Buenos Aires.",
  });
}
