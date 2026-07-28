# Neuhaus S.A. — sitio web (Next.js)

Migración del sitio Vite/React a **Next.js 16 (App Router)**. El proyecto Vite original
sigue intacto un nivel más arriba y funciona como respaldo hasta que esta versión se apruebe.

## Comandos

```bash
npm run dev              # desarrollo en localhost:3000
npm run build            # build de producción
npm run start            # sirve el build
npm run optimize:images  # reprocesa las imágenes desde el proyecto Vite
```

## Estado

| Área | Estado |
|---|---|
| 6 rutas migradas, mismas URLs | ✅ |
| Metadata única por ruta (title, description, canonical, OG, Twitter) | ✅ |
| JSON-LD: Organization + LocalBusiness + WebSite + Breadcrumb + Service | ✅ |
| `sitemap.xml` y `robots.txt` dinámicos | ✅ |
| `llms.txt` para motores generativos | ✅ |
| Imágenes optimizadas (69,7 MB → 5,7 MB) + `next/image` | ✅ |
| Fuentes self-hosted con `next/font` | ✅ |
| Formularios con Server Actions | ⚠️ código listo, faltan credenciales (ver abajo) |
| Cambios de contenido del Excel | ⛔ NO aplicados a propósito — ver más abajo |

## Configuración pendiente

Copiar `.env.example` a `.env.local` y completar:

```
RESEND_API_KEY=        # cuenta de Resend
CONTACTO_EMAIL_TO=     # PENDIENTE: casilla destino a confirmar con el cliente
CONTACTO_EMAIL_FROM=   # remitente en dominio verificado
```

Sin estas variables el formulario **no finge éxito**: muestra un error con el teléfono
y el mail de contacto. El sitio Vite anterior mostraba "¡Mensaje enviado!" sin enviar nada.

## Cambios del Excel: documentados, no aplicados

Los cambios de contenido pedidos por el cliente **no están aplicados**. El código conserva
los textos del sitio publicado y marca cada punto afectado con un comentario:

- `PENDIENTE Q1` — sección "Tecnología y control en cada etapa" (`sections/home/WhyNeuhaus.tsx`)
- `PENDIENTE Q2` — título de sectores (`sections/home/Industries.tsx`)
- `PENDIENTE Laetus` — "código QR" → "código de barras" (`sections/calidad/*`)
- `ANTIGÜEDAD PENDIENTE` — 45/40 años y 1979 → 50 años y 1976 (`lib/site.ts`, `sections/home/Stats.tsx`, `components/Footer.tsx`, `sections/nosotros/History.tsx`, `app/nosotros/page.tsx`)
- Secciones que el Excel manda eliminar: `sections/nosotros/Quote.tsx` y `sections/nosotros/Values.tsx`

El detalle completo, fila por fila, está en `../PLAN-MIGRACION-SEO.md`.

## Datos confirmados con el cliente (2026-07-28)

- Dominio canónico: **imprentaneuhaus.com** — `neuhaus.com.ar` va por 301
- Teléfono: **+54 11 4925-6364** (el `4925-6363` del sitio viejo era un typo)
- Dirección: Colombres 1065, Boedo, C1238AAA, CABA

Todo eso vive en `src/lib/site.ts`, que es la única fuente de verdad.

## Estructura

```
src/
  app/            rutas (App Router) + sitemap, robots, server actions
  components/     componentes compartidos
  sections/       secciones por página, espejando la estructura del sitio Vite
  lib/            site.ts (NAP y config), seo.ts (metadata), schema.ts (JSON-LD)
  assets/img/     imágenes optimizadas en WebP con nombres descriptivos
scripts/
  optimize-images.mjs
```

## Antes de publicar

1. Completar las variables de entorno y probar los 3 formularios
2. Configurar el 301 de `neuhaus.com.ar` → `imprentaneuhaus.com` (conservando la ruta)
3. Verificar ambos dominios en Google Search Console y enviar el sitemap
4. Confirmar las coordenadas exactas en `lib/site.ts` (hoy son aproximadas)
5. Aplicar los cambios del Excel una vez respondidas Q1 y Q2
