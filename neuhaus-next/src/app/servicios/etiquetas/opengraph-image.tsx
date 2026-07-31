import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Etiquetas autoadhesivas en rollo — Neuhaus S.A.";
export { size, contentType };

export default function Image() {
  return ogImage({
    eyebrow: "Etiquetas Autoadhesivas",
    title: "Etiquetas\nautoadhesivas\nen rollo.",
  });
}
