import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "./site";

/**
 * Imagen de vista previa (Open Graph) generada en el build, una por ruta.
 *
 * Se genera por código en vez de usar un PNG fijo para que cada página
 * comparta su propio título: al pasar el link de /calidad por WhatsApp o
 * LinkedIn, la miniatura dice "Control de calidad en impresión farmacéutica",
 * no un genérico de marca.
 *
 * La tipografía se lee del repo (src/assets/fonts) y no de la red, para que
 * el build sea determinista y funcione sin conexión.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONTS_DIR = join(process.cwd(), "src/assets/fonts");
const dmSansRegular = readFileSync(join(FONTS_DIR, "DMSans-Regular.ttf"));
const dmSansBold = readFileSync(join(FONTS_DIR, "DMSans-Bold.ttf"));

const NAVY = "#0a1628";

type OgInput = {
  /** Rótulo chico sobre el título. Ej: "Prospectos & Impresos". */
  eyebrow: string;
  /** Título de la pieza. Los saltos de línea se respetan. */
  title: string;
};

export function ogImage({ eyebrow, title }: OgInput) {
  const dominio = SITE.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY,
          padding: "68px 76px",
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        {/* Halo suave arriba a la derecha, para que no quede un plano liso */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -180,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />

        {/* Cabecera: marca */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: 6,
            }}
          >
            NEUHAUS S.A.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: 4,
              marginTop: 8,
            }}
          >
            INDUSTRIA GRÁFICA
          </div>
        </div>

        {/* Cuerpo: rótulo + título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 26 }}>
            <div
              style={{
                display: "flex",
                width: 46,
                height: 2,
                background: "rgba(255,255,255,0.45)",
                marginRight: 18,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 19,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: -1.5,
              whiteSpace: "pre-line",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>

        {/* Pie: certificaciones y dominio */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 26,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 21,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: 2,
            }}
          >
            ISO 9001 · BPM · FSC
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 21,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: 1,
            }}
          >
            {dominio}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "DM Sans", data: dmSansRegular, weight: 400, style: "normal" },
        { name: "DM Sans", data: dmSansBold, weight: 700, style: "normal" },
      ],
    }
  );
}
