import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Impresión de prospectos medicinales — Neuhaus S.A.";
export { size, contentType };

export default function Image() {
  return ogImage({
    eyebrow: "Prospectos & Impresos",
    title: "Impresión de\nprospectos medicinales.",
  });
}
