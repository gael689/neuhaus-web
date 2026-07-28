/**
 * Optimizador de imágenes — Neuhaus S.A.
 *
 * Lee los originales del sitio Vite (../src/assets), los redimensiona,
 * los convierte a WebP y los escribe en ./src/assets con nombres
 * descriptivos para SEO de imágenes.
 *
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --dry     (no escribe, solo reporta)
 *   node scripts/optimize-images.mjs --force   (reprocesa aunque ya exista)
 *
 * Los originales NUNCA se modifican ni se borran.
 */

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../../src/assets");
const OUT = path.resolve(__dirname, "../src/assets");

const DRY = process.argv.includes("--dry");
const FORCE = process.argv.includes("--force");

/** Ancho máximo. Ninguna imagen del sitio se muestra a más de esto ni en 2x. */
const MAX_WIDTH = 2400;
const WEBP_QUALITY = 80;

/**
 * Mapa de renombrado. La clave es la ruta original relativa a src/assets,
 * el valor es el nombre nuevo (sin extensión) derivado de DÓNDE se usa la
 * imagen en el sitio. El nombre de archivo es señal de SEO de imágenes.
 */
const RENAME = {
  // Home — banners del hero
  "fotos/_1033737.JPG": "banner-produccion-integrada-neuhaus",
  "fotos/banner2.JPG": "banner-trayectoria-neuhaus",
  "fotos/_1033735.JPG": "banner-calidad-certificada",
  // Home — servicios y sectores
  "fotos/_1033742.JPG": "impresion-prospectos-offset",
  "fotos/_1033764.JPG": "etiquetas-autoadhesivas-en-rollo",
  "fotos/DSCF1582.JPG": "prospectos-medicinales-laboratorios",
  "fotos/alimentos.png": "sector-alimentos-y-bebidas",
  "fotos/cosmetica.png": "sector-cosmetica-cuidado-personal",
  "fotos/pymes.png": "sector-pymes-emprendedores",
  "fotos/_1033774.JPG": "planta-impresion-certificada",
  // Nosotros
  "fotos/_1033721.JPG": "equipo-planta-neuhaus",
  "fotos/_1033717.JPG": "impresion-offset-planta-neuhaus",
  "fotos/DSCF1580.JPG": "planta-neuhaus-produccion",
  "fotos/Impresora MA.JPG": "impresora-offset-neuhaus",
  "fotos/IMG_4922.webp": "planta-neuhaus-maquinaria-1",
  "fotos/IMG_4926.webp": "planta-neuhaus-maquinaria-2",
  "fotos/IMG_4932.webp": "planta-neuhaus-maquinaria-3",
  "fotos/IMG_4936.webp": "planta-neuhaus-maquinaria-4",
  // Calidad
  "fotos/_1033768.JPG": "control-calidad-impresion-farmaceutica",
  "fotos/_1033747.JPG": "sistema-control-integrado-neuhaus",
  "fotos/_1033771.JPG": "linea-produccion-integrada",
  "fotos/_1033746.JPG": "departamento-calidad-neuhaus",
  "fotos/DSCF1570.JPG": "verificacion-electronica-pliegos",
  // Prospectos
  "fotos/IMG_4921.webp": "impresion-offset-prospectos-maquina",
  "fotos/impresion_digital.jpeg": "impresion-digital-tirajes-cortos",
  // Etiquetas
  "fotos/_1033356.JPG": "impresion-flexografica-etiquetas",
  "fotos/_1033363.JPG": "etiquetas-flexograficas-terminadas",
  "hero-printing.jpg": "control-codigo-de-barras-etiquetas",
  // Contacto
  "fotos/DSCF1842 (1).JPG": "planta-grafica-neuhaus-boedo",
};

/** Se copian tal cual: transparencia o vectores, no conviene convertirlos. */
const COPY_AS_IS = [
  "logo.png",
  "certificaciones/fsc.png",
  "certificaciones/iram-logo.png",
  "PDC-SI-01 POLITICA DE CALIDAD Y VALORES DE LA ORGANIZACIÓN.pdf",
];

const RASTER = /\.(jpe?g|png|webp|tiff?)$/i;

const mb = (bytes) => bytes / 1024 / 1024;

async function walk(dir, base = dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, base)));
    else out.push(path.relative(base, full).split(path.sep).join("/"));
  }
  return out;
}

async function ensureDir(file) {
  await fs.mkdir(path.dirname(file), { recursive: true });
}

async function main() {
  const all = await walk(SRC);
  const stats = { before: 0, after: 0, converted: 0, copied: 0, skipped: 0, unused: 0 };
  const report = [];

  for (const rel of all) {
    const from = path.join(SRC, rel);
    const size = (await fs.stat(from)).size;

    if (COPY_AS_IS.includes(rel)) {
      const to = path.join(OUT, rel);
      stats.before += size;
      if (!DRY) {
        await ensureDir(to);
        // El logo y los sellos son PNG chicos con transparencia: se recomprimen
        // sin cambiar de formato para no perder el canal alfa.
        if (/\.png$/i.test(rel)) {
          await sharp(from).png({ compressionLevel: 9, palette: true }).toFile(to);
        } else {
          await fs.copyFile(from, to);
        }
      }
      const after = DRY ? size : (await fs.stat(to).catch(() => ({ size }))).size;
      stats.after += after;
      stats.copied++;
      continue;
    }

    if (!RASTER.test(rel)) continue;

    const newName = RENAME[rel];
    if (!newName) {
      // Imagen que hoy no se usa en ninguna página: se archiva optimizada
      // en _sin-usar/ para no perderla, pero fuera del árbol de la app.
      stats.unused++;
      const to = path.join(OUT, "_sin-usar", path.basename(rel).toLowerCase().replace(/\s+/g, "-").replace(RASTER, ".webp"));
      if (!DRY) {
        await ensureDir(to);
        await sharp(from)
          .rotate()
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality: 72 })
          .toFile(to);
      }
      continue;
    }

    const to = path.join(OUT, "img", `${newName}.webp`);
    stats.before += size;

    if (!FORCE && !DRY) {
      const exists = await fs.stat(to).catch(() => null);
      if (exists) {
        stats.after += exists.size;
        stats.skipped++;
        continue;
      }
    }

    if (DRY) {
      report.push({ rel, newName, before: size, after: null });
      stats.after += size;
      continue;
    }

    await ensureDir(to);
    await sharp(from)
      .rotate() // respeta la orientación EXIF antes de descartar metadatos
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(to);

    const after = (await fs.stat(to)).size;
    stats.after += after;
    stats.converted++;
    report.push({ rel, newName, before: size, after });
  }

  console.log(`\n${DRY ? "SIMULACIÓN — no se escribió nada" : "Optimización completa"}\n`);
  for (const r of report.sort((a, b) => b.before - a.before)) {
    const saved = r.after == null ? "" : ` → ${mb(r.after).toFixed(2)} MB  (-${(100 - (r.after / r.before) * 100).toFixed(0)}%)`;
    console.log(`  ${mb(r.before).toFixed(2)} MB  ${r.rel}${saved}`);
    console.log(`           ${r.newName}.webp`);
  }

  console.log(`\n  convertidas: ${stats.converted}   copiadas: ${stats.copied}   ya existían: ${stats.skipped}   sin uso (archivadas): ${stats.unused}`);
  console.log(`  antes:  ${mb(stats.before).toFixed(1)} MB`);
  console.log(`  después:${mb(stats.after).toFixed(1)} MB`);
  if (stats.before > 0) {
    console.log(`  ahorro: ${(100 - (stats.after / stats.before) * 100).toFixed(1)}%\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
