import { ogImage, size, contentType } from "@/lib/og";

export const alt = "Nosotros — Industria gráfica familiar en Boedo";
export { size, contentType };

export default function Image() {
  return ogImage({
    eyebrow: "Nosotros",
    title: "Desde 1976,\nimprimiendo para\nla industria nacional.",
  });
}
