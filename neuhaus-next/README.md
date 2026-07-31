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
| Cambios de contenido del Excel | ✅ **Todos aplicados** (última fila pendiente cerrada el 2026-07-31) — ver `../CAMBIOS.md` |
| Build de producción (`npm run build`) | ✅ Sin errores |
| Formularios con Server Actions — código | ✅ Validación server-side real, nunca finge éxito si falta configuración |
| Formularios con Server Actions — credenciales | ⛔ Falta crear cuenta en Resend y completar `.env.local` (ver abajo) |
| Deploy | ⛔ No hecho a propósito — el proyecto no está linkeado a Vercel todavía |

**Todo lo que es código está resuelto.** Lo único que falta para poder deployar son
acciones externas (cuenta de Resend, decisión de hosting/dominio) — ninguna requiere
volver a tocar el repo, solo completar `.env.local` y correr `vercel --prod` (o
conectar el repo desde el dashboard de Vercel).

## Contenido: sin pendientes

La última fila abierta del Excel (B14-B16, `sections/nosotros/Quote.tsx`) se resolvió el
**2026-07-31**: el cliente confirmó que la sección **queda**, solo se actualiza el número
a *"Nuestros más de 50 años de experiencia en el rubro se reflejan en cada trabajo."*

## Configuración pendiente (acción externa, no de código)

Copiar `.env.example` a `.env.local` y completar:

```
RESEND_API_KEY=        # crear cuenta en https://resend.com y generar una API key
CONTACTO_EMAIL_TO=     # opcional — si se deja vacío, usa SITE.contact.email (info@neuhaus.com.ar)
CONTACTO_EMAIL_FROM=   # obligatorio — remitente en un dominio verificado en Resend (p. ej. web@imprentaneuhaus.com)
```

Sin `RESEND_API_KEY` y `CONTACTO_EMAIL_FROM` el formulario **no finge éxito**: muestra
un error real con el teléfono y el mail de contacto, en vez del "¡Mensaje enviado!"
falso que mostraba el sitio Vite anterior sin enviar nada.

## Decisiones de negocio pendientes (no bloquean el código, sí el deploy final)

- **Hosting:** confirmar Vercel (recomendado) vs. mantener el Apache actual con export estático.
- **Dominio:** `imprentaneuhaus.com` ya es el canónico definido — falta configurar el
  301 permanente de `neuhaus.com.ar` a nivel DNS/registrar cuando se decida el hosting.
- **Bots de IA:** `robots.ts` ya los permite por defecto (GPTBot, ClaudeBot, PerplexityBot,
  etc. — ver comentario en el archivo). Es una decisión de negocio que el cliente debería
  confirmar conscientemente antes de publicar; revertirla es mover esos user-agents a un
  bloque `disallow`.
- **"NEUHAUS 3G":** confirmar si es un claim de marca oficial y permanente, para
  registrarlo también en el JSON-LD (`alternateName`).

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

1. Crear cuenta en Resend, generar API key y verificar el dominio de envío; completar `.env.local` y probar los 3 formularios
2. Confirmar hosting (Vercel recomendado) y hacer `vercel link` + deploy
3. Configurar el 301 de `neuhaus.com.ar` → `imprentaneuhaus.com` (conservando la ruta)
4. Verificar ambos dominios en Google Search Console y enviar el sitemap
5. Confirmar las coordenadas exactas en `lib/site.ts` (hoy son aproximadas)
6. Sign-off consciente del cliente sobre permitir bots de IA (ya está habilitado por defecto en `robots.ts`)
