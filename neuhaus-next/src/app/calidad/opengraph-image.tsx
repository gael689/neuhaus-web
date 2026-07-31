import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Control de calidad en impresión farmacéutica — Neuhaus S.A.";
export { size, contentType };

export default function Image() {
  return ogImage({
    eyebrow: "Calidad",
    title: "La calidad no es\nun resultado.\nEs un proceso.",
  });
}
