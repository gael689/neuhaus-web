# Neuhaus S.A. — sitio web (Next.js)

Aplicación del sitio institucional de Neuhaus S.A. En producción en
**https://www.neuhaus.com.ar**, desplegada en Vercel desde este directorio
(el *Root Directory* del proyecto apunta acá, no a la raíz del repo).

## Comandos

```bash
npm run dev              # desarrollo en localhost:3000
npm run build            # build de producción
npm run start            # sirve el build
npm run lint             # ESLint
npm run optimize:images  # reprocesa las imágenes originales (ver más abajo)
```

## Stack

Next.js 16 (App Router, Server Components y Server Actions) · React 19 ·
TypeScript · Tailwind CSS 3 · Framer Motion · Zod · Resend · Vercel Analytics.

## Estructura

```
src/
  app/            rutas (App Router), sitemap, robots, OG por ruta, server actions
  components/     componentes compartidos
  sections/       secciones por página
  lib/            site.ts (NAP y config), seo.ts (metadata), schema.ts (JSON-LD)
  assets/img/     imágenes optimizadas en WebP
scripts/
  optimize-images.mjs
```

## Fuente de verdad de los datos

`src/lib/site.ts` concentra todo dato que se repite: NAP, dominio canónico, año de
fundación, redes, certificaciones. **No duplicar nada de eso en un componente.**

Al cambiar el dominio hay que tocar **dos** lugares: esa constante y
`public/llms.txt`, que lo tiene escrito a mano en 7 líneas (es un archivo estático,
no se deriva de `site.ts`).

## Variables de entorno

Cargar en Vercel (*Project Settings → Environment Variables*) y en `.env.local`
para desarrollo. Si difieren, el comportamiento local no representa al de producción.

```
RESEND_API_KEY=        # obligatorio — API key de https://resend.com
CONTACTO_EMAIL_FROM=   # obligatorio — remitente en un dominio verificado en Resend
CONTACTO_EMAIL_TO=     # opcional — si se deja vacío usa SITE.contact.email
```

Sin `RESEND_API_KEY` o `CONTACTO_EMAIL_FROM` el formulario **no finge éxito**:
muestra un error real con el teléfono y el mail de contacto.

## Dominio viejo (imprentaneuhaus.com)

`next.config.ts` redirige `imprentaneuhaus.com/*` al inicio con la marca
`?desde=imprentaneuhaus`, y `src/components/AvisoDominioViejo.tsx` la lee para
mostrar la franja de aviso una vez por sesión.

El redirect tiene que vivir en `next.config.ts` y **no** en el panel de Vercel: un
redirect de dominio configurado ahí corre antes que la app y llega sin ninguna
señal de origen. Requisito: `imprentaneuhaus.com` y `www.imprentaneuhaus.com`
asignados al proyecto **sin** redirect propio ("No Redirect").

## Imágenes

`npm run optimize:images` toma los originales full-res y genera las WebP de
`src/assets/img/`. Esos originales venían del proyecto Vite que vivía en la raíz
del repo y ya no están acá. Para reprocesar hay que recuperarlos de la historia de
git y apuntar el script con la variable `ORIGINALES`:

```bash
ORIGINALES=/ruta/a/los/originales npm run optimize:images
```

## Pendientes conocidos

- Las coordenadas de `site.ts` son aproximadas; afinar con las del Google Business Profile.
- `robots.ts` permite los bots de IA (GPTBot, ClaudeBot, PerplexityBot). Es una
  decisión de negocio: revertirla es mover esos user-agents a un bloque `disallow`.
- Confirmar si **"NEUHAUS 3G"** es un claim de marca permanente para sumarlo al
  `alternateName` del JSON-LD.
