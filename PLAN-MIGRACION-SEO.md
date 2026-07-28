# Plan: cambios de contenido + migración a Next.js + SEO/GEO
**Neuhaus S.A. — Industria Gráfica** · Documento de planificación · 2026-07-28

---

## 0. Diagnóstico del estado actual

Antes de listar el trabajo, esto es lo que encontré auditando el código. Varios puntos no estaban en el pedido del cliente pero condicionan todo lo demás.

| # | Hallazgo | Severidad | Dónde |
|---|---|---|---|
| 1 | **Los formularios no envían nada.** `ContactForm` valida y muestra "¡Mensaje enviado!" sin ningún `fetch`/POST. Todo lead que se cargó desde que está online se perdió. | 🔴 Crítico | `src/components/ContactForm.tsx:37-40` |
| 2 | **Las 6 rutas comparten un solo `<title>` y una sola `<meta description>`** (los del `index.html`). Google indexa las 6 URLs con el mismo snippet. | 🔴 Crítico SEO | `index.html:6-11` |
| 3 | **SPA sin SSR:** el HTML que recibe el crawler es `<div id="root"></div>`. Googlebot renderiza JS, pero Bing, LinkedIn, WhatsApp y **los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot) no ejecutan JS**. Para ellos la página está vacía. | 🔴 Crítico GEO | `index.html:17` |
| 4 | **83 MB de imágenes** sin optimizar (`.JPG` de cámara, hasta 5,1 MB c/u). El hero de Home carga 3 banners ≈ 10 MB. LCP destruido en mobile. | 🔴 Crítico | `src/assets/fotos/` |
| 5 | Sin `sitemap.xml`, sin `canonical`, sin JSON-LD, sin imagen OG real, sin `og:url`, sin `twitter:card`. | 🟠 Alto | `public/` |
| 6 | `robots.txt` sin directiva `Sitemap:` y sin política para bots de IA. | 🟠 Alto | `public/robots.txt` |
| 7 | ~~Dirección inconsistente~~ **RESUELTO 2026-07-28:** la correcta es **Colombres 1065, C1238AAA, CABA** (Google Business Profile). El error está en el iframe de Maps, que dice "Colomb**e**s". El footer está bien. Falta agregar el CP completo `C1238AAA`. | 🟠 Alto (SEO local) | `Info.tsx:62` |
| 8 | ~~Teléfono inconsistente~~ **RESUELTO 2026-07-28:** el correcto es **011 4925-6364**. El sitio tiene un typo (`4925-6363`) en el texto visible y en el `href="tel:"`. Corregir en ambos lugares y mostrarlo con código de área. | 🔴 Crítico (SEO local + leads) | `Info.tsx:23`, `Footer.tsx:50` |
| 12 | ~~Dominio sin definir~~ **RESUELTO 2026-07-28:** canónico = **`imprentaneuhaus.com`**. `neuhaus.com.ar` se conecta con **301 permanente** hacia el canónico (no duplicado, no alias servido en paralelo). | 🔴 Crítico | transversal |
| 13 | El Business Profile tiene **4,7 ★ con 20 reseñas** — un activo real que el sitio no muestra en ningún lado. | 🟡 Oportunidad | — |
| 9 | Antigüedad contradictoria en el propio sitio: "45+" (Stats), "más de 45 años" (Footer), "más de 40 años" (Hero, Quote), "cuatro décadas" (History, Values), "Desde 1979". Cinco cifras distintas. | 🟡 Medio | varios |
| 10 | `CLAUDE.md` dice que los formularios usan React Hook Form + Zod; en realidad usan `useState` plano. Documentación desactualizada. | 🟡 Bajo | `CLAUDE.md` |
| 11 | `Systems.tsx` sin tipar (`useState(null)`, `toggle(i)` implícito `any`). | 🟡 Bajo | `CalidadPage/sections/Systems.tsx:35-37` |

> **Conclusión del diagnóstico:** el pedido de migrar a Next.js no es un capricho técnico — los puntos 2, 3 y 4 son irresolubles de raíz en el Vite SPA actual y son exactamente los que bloquean el posicionamiento. La migración es el habilitador del SEO/GEO, no un proyecto paralelo.

---

# BLOQUE A — Cambios solicitados en el Excel

Mapeo fila por fila del archivo `Modificaciones página WEB (1).xlsx` (Hoja1) contra el código real.

### A.1 — Cambios de texto directos

| # | Excel | Dice hoy | Debe decir | Archivo |
|---|---|---|---|---|
| A1 | B4 → C4/C5 | Hero slide 1: "Cada impresión, cada detalle, bajo el mismo techo." | **"Proceso de producción integrado, desde el archivo hasta el producto terminado."** | `HomePage/sections/Hero.tsx:25` |
| A2 | B7 → C7 | Hero slide 2: "Más de 40 años de experiencia en la industria gráfica." | **"NEUHAUS 3G — continuidad de tercera generación."** | `HomePage/sections/Hero.tsx:37` |
| A3 | B10 → C10 | H2: "Sectores que confían en nosotros" | **"NEUHAUS, una marca instalada desde hace 50 años."** ⚠️ ver A.4-Q2 | `HomePage/sections/Industries.tsx:41` |
| A4 | B24/B25 → C24/C25 | Card "Misión" + 2 párrafos | Título **"Objetivo"**; texto único: **"Nuestro objetivo: responder con velocidad y calidad."** | `NosotrosPage/sections/MisionVision.tsx:44-57` |
| A5 | B27/B28 → C27-C33 | Card "Visión" + 2 párrafos | Título **"Proyección"**; texto: *"Queremos seguir innovando en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia. Buscamos expandir nuestra presencia en el mercado, consolidándonos como proveedores preferidos, ofreciendo productos de alta calidad y cumpliendo con los más altos estándares de seguridad y calidad."* | `MisionVision.tsx:59-72` |
| A6 | B39 → C39-C44 | 5 valores **con descripción** | Solo los títulos: **Compromiso · Innovación · Responsabilidad · Trabajo en equipo · Mejora continua** (sin párrafos) | `MisionVision.tsx:5-11` y `:91-101` |
| A7 | B50 → C50-C53 | Hito "1979 — Fundación" + texto | **"1976"** + *"Empezamos como todas las pymes: un pequeño taller gráfico dedicado a impresiones comerciales, pero nuestra seriedad y calidad nos llevaron a trabajar para grandes compañías."* | `NosotrosPage/sections/History.tsx:5-9` |
| A8 | B55 → C55-C57 | Hito "1987 — Neuhaus S.A." + texto | *"El gran volumen de trabajo, más el acceso al crédito y modernas tecnologías, nos impulsaron a convertirnos en NEUHAUS S.A. Industria Gráfica."* | `History.tsx:10-14` |
| A9 | B59 → C59 | Hito "Hoy" | **Sin cambios** | `History.tsx:15-19` |

### A.2 — Secciones a eliminar

| # | Excel | Qué se elimina | Archivos |
|---|---|---|---|
| A10 | B14-B16 "Sacar texto" | Sección `Quote` de Nosotros completa ("Nuestros más de 40 años… se reflejan en cada trabajo") | borrar `NosotrosPage/sections/Quote.tsx` + import en `NosotrosPage/index.tsx:3,12` |
| A11 | B18 + B46-B47 (repetido) | Sección **"Lo que nos representa"** completa (4 cards) | borrar `NosotrosPage/sections/Values.tsx` + import en `index.tsx:5,15` |
| A12 | B20 | Sección **"Tecnología y control en cada etapa"** de Home ⚠️ ver A.4-Q1 | `HomePage/sections/WhyNeuhaus.tsx` + `HomePage/index.tsx` |
| A13 | B36-B37 | Bajada del hero de Calidad ("Cada trabajo que sale de nuestra planta pasó por un sistema…"). El H1 se mantiene igual. | `CalidadPage/sections/Hero.tsx:7` |

### A.3 — Correcciones transversales

**A14 · Laetus lee CÓDIGO DE BARRAS, no código QR** (B21-B22). Es un error técnico repetido en 6 lugares. Reemplazo de "QR" → "código de barras":

- `CalidadPage/sections/Systems.tsx:19,21,23` — "Sistema Laetus" / alt / detalle
- `CalidadPage/sections/IntegratedChain.tsx:14` — paso "Control de lectura Laetus a QR"
- `CalidadPage/sections/Philosophy.tsx:12` — "un QR que no funciona"
- `EtiquetasPage/sections/Control.tsx:10,12` — H2 "Código QR verificado en cada etiqueta" + párrafo
- `HomePage/sections/WhyNeuhaus.tsx:7` — card Laetus *(si se elimina la sección, cae solo)*
- Ícono `QrCode` de lucide → cambiar a `ScanBarcode` / `Barcode`

**A15 · Antigüedad unificada a 50 años / 1976** (B12 → C12). Hoy conviven 5 cifras distintas:

| Archivo | Línea | Dice | Debe decir |
|---|---|---|---|
| `HomePage/sections/Stats.tsx` | 7 | `value="45" suffix="+"` | `value="50"` |
| `components/Footer.tsx` | 20 | "Más de 45 años" | "50 años" |
| `NosotrosPage/sections/Hero.tsx` | 5 | "Desde 1979" | "Desde 1976" |
| `NosotrosPage/sections/History.tsx` | 31 | "Más de cuatro décadas" | "Cinco décadas" / "50 años" |
| `index.html` | 7 | "Más de 45 años" (meta) | "50 años" |
| `NosotrosPage/sections/Quote.tsx` | 10 | "más de 40 años" | *(sección eliminada — A10)* |
| `NosotrosPage/sections/Values.tsx` | 7 | "Más de cuatro décadas" | *(sección eliminada — A11)* |

> ✅ La matemática cierra: 1976 + 50 = 2026. Recomiendo derivar el número de una constante única (`FUNDACION = 1976`) para que no vuelva a desincronizarse el año que viene.

### A.4 — Ambigüedades que necesito confirmar con el cliente

> **Q1 — B20 "Sacar tecnología y control en cada etapa":** ¿se elimina la **sección entera** de Home (las 4 cards: Electronic Verification, Laetus, Cadena integrada, Escala flexible) o **solo el título**? Lo pregunto porque justo debajo (B21-B22) corrigen el texto de Laetus, que vive dentro de esa misma sección — si se borra, la corrección no aplicaría ahí. **Mi lectura:** se elimina la sección de Home (el contenido ya está desarrollado en /calidad, hoy está duplicado) y la corrección de Laetus aplica a /calidad y /etiquetas. **Impacto SEO si se elimina:** Home pierde ~200 palabras de contenido técnico único; recomiendo compensar con la sección FAQ del Bloque C.
>
> **Q2 — B10 "Sectores que confían en nosotros" → "NEUHAUS, una marca instalada desde hace 50 años":** el título nuevo es una afirmación de marca, no una etiqueta de sección; encabeza una grilla de 4 sectores (Laboratorios, Cosmética, Alimentos, PyMEs). Además "sectores / laboratorios / farmacéutica" son keywords fuertes que hoy están en ese H2. **Propuesta:** `H2 = "NEUHAUS, una marca instalada desde hace 50 años"` + bajada reescrita que nombre los sectores explícitamente ("Laboratorios farmacéuticos, cosmética, alimentos y pymes confían en nuestra producción"). Se respeta el pedido sin perder relevancia temática.
>
> **Q3 — "NEUHAUS 3G, continuidad de tercera generación":** ¿es una marca/claim oficial que se va a usar en toda la comunicación? Si sí, conviene registrarlo también en el JSON-LD (`alternateName`) y en la bajada del hero.
>
> **Q4 — 1976 vs 1979:** el cambio corrige la fecha de fundación. ¿Hay material impreso, facturas o el estatuto que confirmen 1976? Lo pregunto porque una vez publicado, Google/LLMs lo van a citar y corregirlo después cuesta.
>
> **Q5 — Dirección:** ✅ **RESUELTO.** `Colombres 1065, C1238AAA, Cdad. Autónoma de Buenos Aires` según Google Business Profile. Se corrige el iframe del mapa y se agrega el CP completo.
>
> **Q6 — Formularios:** ¿a qué casilla deben llegar las consultas? ¿Quieren copia a alguien más / CRM? *(Estado: pendiente de definición del cliente.)*
>
> **Q7 — Teléfono:** ✅ **RESUELTO.** El correcto es **011 4925-6364**. El `4925-6363` del sitio es un error de tipeo; corregir texto visible y `href="tel:+541149256364"` en `Info.tsx:23` y `Footer.tsx:50`.
>
> **Q8 — Dominio:** ✅ **RESUELTO.** Canónico: **`imprentaneuhaus.com`**. `neuhaus.com.ar` queda conectado por redirección. Ver C.0 para la implementación.

**Estos 6 puntos no bloquean el arranque:** Bloque A.1/A.2/A.3 sin Q1-Q2, y todo el Bloque B, se pueden ejecutar en paralelo mientras se responden.

---

# BLOQUE B — Migración a Next.js

## B.1 · Por qué (y qué gana el negocio)

| Problema hoy (Vite SPA) | Con Next.js App Router |
|---|---|
| 1 `<title>` para 6 rutas | `metadata` por ruta → 6 snippets únicos en Google |
| HTML vacío para crawlers sin JS | SSG/SSR → HTML completo para Bing, WhatsApp, LinkedIn y **bots de IA** |
| 83 MB de JPG crudos | `next/image` → AVIF/WebP, `srcset`, lazy, `priority` en el LCP |
| Fuentes desde Google Fonts (2 RTT + CLS) | `next/font` → self-host, `font-display: swap`, cero CLS |
| Sin sitemap ni robots dinámicos | `app/sitemap.ts` + `app/robots.ts` |
| Formularios que no envían | Server Actions + Resend/Nodemailer, sin backend aparte |
| Sin OG por página | `opengraph-image.tsx` por ruta (generación dinámica) |

**Ganancia estimada:** LCP mobile de ~8-12 s a <2,5 s; 6 páginas indexables con snippet propio en vez de 1; contenido legible por motores generativos.

## B.2 · Stack objetivo

- **Next.js 16** (App Router, React Server Components, Turbopack)
- React 19 · TypeScript 5.8 · Tailwind CSS 3.4 (misma config, migra tal cual)
- shadcn/ui — compatible, requiere `"use client"` en los componentes interactivos
- Framer Motion → **`motion`** (paquete nuevo), todos los componentes animados pasan a Client Components
- Formularios: **Server Actions + Zod + Resend** (o SMTP propio de neuhaus.com.ar)
- Deploy: **Vercel** (recomendado) — ver B.6

## B.3 · Mapa de rutas (URLs idénticas → cero pérdida de ranking)

| Ruta actual | Next.js App Router | Estrategia |
|---|---|---|
| `/` | `app/page.tsx` | SSG |
| `/nosotros` | `app/nosotros/page.tsx` | SSG |
| `/servicios/prospectos` | `app/servicios/prospectos/page.tsx` | SSG |
| `/servicios/etiquetas` | `app/servicios/etiquetas/page.tsx` | SSG |
| `/calidad` | `app/calidad/page.tsx` | SSG |
| `/contacto` | `app/contacto/page.tsx` | SSG + Server Action |
| `*` | `app/not-found.tsx` | — |
| — | `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` | nuevo |

> **Las URLs no cambian.** No hacen falta redirects 301 ni se pierde autoridad acumulada. Es la razón principal por la que conviene migrar ahora y no después de una reestructura de URLs.

## B.4 · Trabajo de conversión, por tipo de archivo

**1. Andamiaje (~2 h)**
`next.config.ts`, `tsconfig` con alias `@/*`, `app/layout.tsx` con `<html lang="es-AR">`, `next/font` para DM Serif Display + DM Sans, `tailwind.config.ts` y `index.css` → `app/globals.css` (migran sin cambios).

**2. Componentes → Server vs Client (~4 h)**
- **Client** (`"use client"`): `Header`, `Hero` (carrusel), `AnimatedSection`, `ParallaxImage`, `CounterNumber`, `ContactForm`, `Systems`, `Plant`, `ServicesSplit`
- **Server** (sin directiva, cero JS al cliente): `Footer`, `PageHero`, `Industries`, `Certifications`, `History`, `MisionVision`, `IntegratedChain`, `Info`, `Stats` (envoltorio)

**3. Router (~1 h)**
`react-router-dom` → `next/link` + `usePathname()`. Afecta `Header.tsx`, `NavLink.tsx`, `Footer.tsx`, `Layout.tsx`. El `useNavigate`/`useLocation` del hero de Home (`Hero.tsx:105-118`) pasa a `useRouter` de `next/navigation`. El scroll-to-top de `Layout` lo hace Next nativamente → se elimina.

**4. Imágenes (~4 h) — el mayor impacto en performance**
- `<img>` → `next/image` con `width`/`height` explícitos
- Reprocesar los 48 originales: redimensionar a máx. 2560 px y convertir a WebP/AVIF **antes** de commitear (83 MB → objetivo <8 MB en repo)
- `priority` solo en la primera slide del hero; `loading="lazy"` en el resto
- Renombrar archivos: `_1033737.JPG` → `impresion-offset-prospectos.webp` (el nombre de archivo es señal de SEO de imágenes)
- `alt` descriptivos y con keyword en las 48 imágenes (hoy varias tienen `alt=""` o alt genérico)

**5. Formularios (~3 h) — cierra el hallazgo #1**
Server Action + validación Zod en servidor + envío por Resend + honeypot anti-spam + estados reales de éxito/error. Los 3 formularios (`/contacto`, `/servicios/prospectos`, `/servicios/etiquetas`) comparten la misma action con distinto `tipo`.

**6. Metadata + SEO técnico (~3 h)** → detalle en Bloque C

**7. QA y deploy (~3 h)**
`npm run build` sin errores de hidratación, Lighthouse en las 6 rutas, test de los 3 formularios, verificación de que las 6 URLs devuelven HTML con contenido (`curl` sin JS), Search Console.

**Total estimado: ~20-24 h de desarrollo.**

## B.5 · Orden de ejecución recomendado

```
FASE 0  Cambios de contenido (Bloque A) sobre el Vite actual  → deploy rápido, el cliente ve sus cambios ya
FASE 1  Andamiaje Next.js + layout + fuentes
FASE 2  Migración página por página (Home → Nosotros → Calidad → Prospectos → Etiquetas → Contacto)
FASE 3  Optimización de imágenes + next/image
FASE 4  Formularios con Server Actions
FASE 5  Metadata, JSON-LD, sitemap, robots, OG (Bloque C)
FASE 6  GEO: llms.txt, FAQs, contenido citable (Bloque D)
FASE 7  SEO local + Google Business Profile (Bloque E)
FASE 8  QA, deploy, Search Console, medición
```

> Hago la **Fase 0 sobre el sitio actual** a propósito: el cliente pidió cambios de texto, no un rehacer. Ve el resultado en días, no en semanas, y la migración corre por detrás sin presión. Los mismos cambios se arrastran a la versión Next.js.

## B.6 · Hosting — decisión pendiente

El sitio hoy está en **Apache** (hay un `public/.htaccess` con rewrite a `index.html`), típico de cPanel/hosting compartido. Next.js con SSR/ISR **no corre ahí**. Opciones:

| Opción | Pros | Contras |
|---|---|---|
| **Vercel** (recomendado) | Creador de Next.js, deploy en minutos, CDN global, imágenes optimizadas, analytics, preview por commit. Free tier alcanza para este sitio | Hay que apuntar los DNS de neuhaus.com.ar |
| `output: 'export'` al hosting actual | No se toca el hosting, se sube el HTML estático | Se pierden Server Actions (formularios) y optimización de imágenes on-demand. Anula media migración |
| VPS con Node + Nginx | Control total | Hay que administrarlo, costo y mantenimiento |

**Recomiendo Vercel.** Si el cliente no quiere mover DNS, la alternativa es `output: 'export'` + un endpoint externo para los formularios (Formspree/Web3Forms), pero se pierde parte del beneficio.

---

# BLOQUE C — SEO

## C.0 · Dominio canónico (definido)

**Canónico: `https://imprentaneuhaus.com`** — es el que ya figura en Google Business Profile, así que la señal de marca más fuerte que existe hoy ya apunta ahí.

`neuhaus.com.ar` queda conectado, pero **como redirección 301 permanente**, no como alias sirviendo el mismo contenido en paralelo. La diferencia es toda: un 301 transfiere la autoridad acumulada al canónico; dos dominios sirviendo lo mismo la parten al medio y Google elige uno por su cuenta.

Reglas a implementar:
- `neuhaus.com.ar/*` → `301` → `imprentaneuhaus.com/*` **conservando la ruta** (`/calidad` → `/calidad`, no todo a la home)
- Definir y forzar una sola variante: con o sin `www`. Recomiendo **sin www** (`imprentaneuhaus.com`), y `www.` → 301 al desnudo
- `http` → `https` en ambos
- `metadataBase: new URL("https://imprentaneuhaus.com")` en el layout raíz → todos los canonical, OG y sitemap se derivan solos
- Verificar **ambos** dominios en Search Console: el canónico para medir, el viejo para confirmar que los 301 se procesan
- Los emails siguen siendo `@neuhaus.com.ar` sin problema — el dominio de mail y el del sitio son independientes y no afectan SEO

En Vercel esto se configura en el panel de Domains (un dominio como primario, el otro como redirect). En Apache serían reglas en el `.htaccess`.

## C.1 · Estrategia de keywords (Argentina, español)

| Ruta | Keyword principal | Secundarias / long-tail |
|---|---|---|
| `/` | imprenta industrial Buenos Aires | industria gráfica Argentina, imprenta para laboratorios, impresión offset y flexográfica |
| `/servicios/prospectos` | **prospectos medicinales impresión** | impresión de prospectos farmacéuticos, prospectos plegados laboratorio, impresión offset prospectos Argentina |
| `/servicios/etiquetas` | **etiquetas autoadhesivas Buenos Aires** | etiquetas en rollo flexográficas, etiquetas BOPP, etiquetas para cosmética/alimentos |
| `/calidad` | control de calidad impresión farmacéutica | Electronic Verification imprenta, sistema Laetus código de barras, BPM impresión, ISO 9001 gráfica |
| `/nosotros` | Neuhaus S.A. industria gráfica | imprenta familiar Buenos Aires, imprenta 50 años Boedo |
| `/contacto` | imprenta Boedo CABA | presupuesto impresión prospectos, cotizar etiquetas autoadhesivas |

> **Nicho, no volumen.** "Imprenta Buenos Aires" tiene miles de competidores y trae leads irrelevantes (tarjetas personales). "Impresión de prospectos medicinales con verificación electrónica" tiene 20 búsquedas/mes y **cada una es un laboratorio con presupuesto**. La estrategia apunta a intención comercial alta, no a tráfico.

## C.2 · Metadata por ruta (`export const metadata`)

Ejemplo para `/servicios/prospectos` — se replica el patrón en las 6:

```ts
export const metadata: Metadata = {
  title: "Impresión de prospectos medicinales | Neuhaus S.A.",
  description:
    "Producimos prospectos medicinales y cosméticos con verificación electrónica, lectura Laetus de código de barras y normas BPM e ISO 9001. Planta propia en Buenos Aires.",
  alternates: { canonical: "https://imprentaneuhaus.com/servicios/prospectos" },
  openGraph: { /* title, description, url, images, locale: "es_AR", type: "website" */ },
};
```

Reglas: `title` ≤ 60 caracteres · `description` 150-160 con keyword en los primeros 100 · canonical absoluto en todas · `metadataBase` en el layout raíz · `alternates.languages` no aplica (sitio monolingüe).

## C.3 · Datos estructurados (JSON-LD)

| Schema | Dónde | Para qué |
|---|---|---|
| `Organization` + `LocalBusiness` | layout raíz | Knowledge Panel, SEO local, NAP verificable |
| `WebSite` + `SearchAction` | layout raíz | sitelinks |
| `BreadcrumbList` | páginas de servicio | breadcrumbs en la SERP |
| `Service` / `Product` | `/prospectos`, `/etiquetas` | rich results de servicio |
| `FAQPage` | Home, servicios, calidad | **fuente principal de citas para IA** |
| `ContactPoint` | `/contacto` | teléfono/mail en el panel |

`LocalBusiness` a incluir: `name`, `alternateName: "NEUHAUS 3G"`, `foundingDate: "1976"`, `address` (calle confirmada, Boedo, C1238, CABA, AR), `geo`, `telephone: "+54 11 4925-6363"`, `email`, `sameAs` (LinkedIn/Facebook/Instagram), `openingHoursSpecification`, `areaServed: AR`, `knowsAbout`, `hasCredential` (ISO 9001, BPM, FSC).

## C.4 · SEO técnico

- `app/sitemap.ts` con las 6 URLs, `lastModified`, `changeFrequency`, `priority`
- `app/robots.ts` con `Sitemap:` y reglas por user-agent (ver Bloque D)
- Jerarquía de headings: **un solo H1 por página**. Corrección respecto de una versión anterior de este documento: el hero de Home **no** genera H1 múltiples — usa `AnimatePresence mode="wait"`, así que solo hay un `<h1>` montado a la vez. Lo que sí ocurre es que el H1 **cambia** al rotar el carrusel, y el que ve el crawler es el del primer slide. Verificado en el build de Next.js: las 6 rutas tienen exactamente 1 H1 ✅
- Enlazado interno: hoy Home → servicios está bien, pero falta cruce lateral (`/calidad` ↔ `/prospectos`, `/etiquetas` ↔ `/contacto`) con anchors ricos en keyword
- Core Web Vitals objetivo: LCP <2,5 s · INP <200 ms · CLS <0,1
- Accesibilidad (Google la pondera): contraste, `alt` en todas las imágenes, foco visible, `aria-label` en los controles del carrusel (ya están ✅)
- HTTPS + `www` canónico + redirect de la variante no canónica

## C.5 · Contenido nuevo recomendado

El sitio tiene ~2.500 palabras totales — poco para competir. Sin inventar secciones que el cliente no pidió, propongo:

1. **Bloque FAQ** en Home, `/prospectos`, `/etiquetas`, `/calidad` (5-7 preguntas c/u). Doble función: `FAQPage` schema + munición para IA. Compensa el contenido que se elimina en A12.
2. **Ficha técnica** en cada servicio: sustratos, gramajes, tamaños, tirajes mínimos/máximos, tiempos de entrega. Es lo que busca un jefe de compras y hoy no está.
3. *(Fase 2, opcional)* Blog `/recursos` con 4-6 artículos anuales sobre normativa ANMAT, requisitos de prospectos, tipos de sustrato. Es la vía real para ganar autoridad temática.

---

# BLOQUE D — GEO (Generative Engine Optimization)

> Posicionamiento en ChatGPT, Perplexity, Claude, Gemini y Google AI Overviews. Cuando un jefe de compras de un laboratorio pregunta *"¿qué imprentas en Argentina hacen prospectos medicinales con control de calidad?"*, el objetivo es que Neuhaus aparezca en la respuesta.

## D.1 · El bloqueo actual

**Los crawlers de IA no ejecutan JavaScript.** GPTBot, ClaudeBot, PerplexityBot y Google-Extended reciben hoy `<div id="root"></div>` — para ellos Neuhaus **no existe**. Ninguna otra táctica de GEO sirve mientras el sitio sea un SPA sin SSR. **La migración a Next.js es el prerequisito absoluto del GEO.**

## D.2 · Acceso para bots de IA (`app/robots.ts`)

Permitir explícitamente: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `Bingbot`, `Amazonbot`, `meta-externalagent`.

> **Decisión de negocio:** permitirlos significa que el contenido puede usarse para entrenar y citar. Para una empresa B2B que quiere ser encontrada, **el beneficio de aparecer supera ampliamente el costo**. Lo dejo señalado para que el cliente lo apruebe conscientemente.

## D.3 · `llms.txt`

Archivo en la raíz (`/llms.txt`) — convención emergente, equivalente a un `robots.txt` semántico. Resumen en Markdown de qué es Neuhaus, qué produce, certificaciones, sectores, datos de contacto y links a cada página. Barato de hacer, cada vez más leído.

## D.4 · Cómo escribir para que la IA cite

Los LLM citan **fragmentos autocontenidos, específicos y verificables**. Reglas para toda la redacción nueva:

| ❌ Evitar | ✅ Preferir |
|---|---|
| "Somos líderes en calidad" | "Cada pliego se compara contra el PDF aprobado mediante Electronic Verification antes de avanzar en la línea" |
| "Muchos años de experiencia" | "Fundada en 1976 en Boedo, CABA; tercera generación familiar" |
| "Las mejores certificaciones" | "Certificaciones ISO 9001, BPM y FSC" |
| Datos dispersos en 3 secciones | Un párrafo autocontenido que responda una pregunta completa |

Tácticas concretas:
- **Formato pregunta-respuesta** (FAQ): la estructura más citada por los motores generativos
- **Entidades explícitas y repetidas:** "Neuhaus S.A.", "Boedo, Buenos Aires", "1976", "ISO 9001", "BPM", "FSC", "Laetus", "Electronic Verification", "offset", "flexografía"
- **Cifras concretas:** tirajes, formatos, tiempos, cantidad de certificaciones
- **Tablas HTML reales** (`<table>`) para especificaciones — se parsean mucho mejor que un grid de divs
- **Semántica correcta:** `<article>`, `<section>`, `<dl>`, headings jerárquicos. Hoy todo es `<div>`

## D.5 · Autoridad fuera del sitio

Los LLM se apoyan fuertemente en fuentes de terceros. Recomendaciones para el cliente (fuera del alcance de desarrollo, pero determinantes):
- **Google Business Profile** completo y verificado (también alimenta a Gemini)
- **Wikidata**: crear la entidad Neuhaus S.A. — alta influencia en Knowledge Graph y en LLMs
- Directorios industriales argentinos (Cámara Argentina de la Industria Gráfica, guías de proveedores farmacéuticos)
- LinkedIn de empresa activo y coherente con el sitio
- Reseñas en Google (cada reseña es texto citable de terceros)

## D.6 · Medición

No hay Search Console para IA. Se mide con: consultas manuales mensuales en ChatGPT/Perplexity/Gemini con un set fijo de 10 preguntas del sector; referrals desde `chat.openai.com` / `perplexity.ai` en analytics; logs de servidor filtrando user-agents de IA (en Vercel, desde Analytics).

---

# BLOQUE E — SEO local

Neuhaus vende a laboratorios de AMBA. La búsqueda local es un canal directo y hoy está desatendido.

**NAP confirmado y definitivo (2026-07-28):**

```
Neuhaus S.A. — Industria Gráfica
Colombres 1065, Boedo, C1238AAA, Cdad. Autónoma de Buenos Aires, Argentina
+54 11 4925-6364
https://imprentaneuhaus.com
```
4,7 ★ · 20 reseñas en Google Business Profile.

1. ✅ Teléfono y dominio resueltos
2. **NAP idéntico**, carácter por carácter, en sitio, GBP, LinkedIn, Facebook, Instagram y directorios. Ese bloque de arriba es la fuente de verdad
3. **Corregir el teléfono en el sitio:** dice `4925-6363` (typo, un dígito). Cambiar texto visible a `+54 11 4925-6364` y el `href` a `tel:+541149256364` en `Info.tsx:23` y `Footer.tsx:50`
4. **Google Business Profile:** categoría "Imprenta" / "Servicio de impresión comercial", horarios, fotos de planta (ya hay 48 en el repo), descripción con keywords, productos/servicios cargados
5. **Schema `LocalBusiness`** con `geo` (lat/lng reales) + `aggregateRating` reflejando las 4,7 ★ / 20 reseñas
6. **Mapa:** reemplazar el iframe actual (embed genérico, coordenadas aproximadas y calle mal escrita) por el embed real del Business Profile
7. **Mostrar las reseñas en el sitio:** 4,7 ★ con 20 opiniones es prueba social que hoy no aparece en ninguna página. Va en Home y en `/contacto`
8. **Estrategia de reseñas:** pedirlas a clientes recurrentes — es el factor #1 del ranking en el pack local

---

# Estado de ejecución — 2026-07-28

La app Next.js está construida en **`neuhaus-next/`**, sin tocar el proyecto Vite
(que no está bajo git, así que se conserva intacto como respaldo). Ver `neuhaus-next/README.md`.

| Fase | Estado |
|---|---|
| 0 · Cambios del Excel | ⛔ **No aplicados a propósito.** Documentados y marcados en el código con comentarios `PENDIENTE Q1/Q2/Laetus/ANTIGÜEDAD` |
| 1 · Andamiaje Next.js 16 + `next/font` | ✅ |
| 2 · Migración de las 6 páginas (URLs idénticas) | ✅ |
| 3 · Optimización de imágenes + `next/image` | ✅ **69,7 MB → 5,7 MB (-91,8 %)** |
| 4 · Formularios con Server Actions | ✅ código; ⚠️ faltan credenciales (Q6) |
| 5 · Metadata, JSON-LD, sitemap, robots | ✅ |
| 6 · GEO: `llms.txt`, robots para bots de IA | ✅ (FAQs pendientes de redacción aprobada) |
| 7 · SEO local | ⚠️ NAP corregido en el código; falta la gestión del Business Profile |
| 8 · QA y deploy | ✅ build limpio y smoke test; ⛔ falta deploy |

**Verificado en el build de producción:** las 6 rutas se prerenderizan como HTML estático,
cada una con `<title>`, `<meta description>` y `<link rel=canonical>` propios, exactamente
un `<h1>`, y entre 162 y 706 palabras de texto real en el HTML del servidor. El banner
principal pasa de 3,24 MB (JPG) a 43 KB (AVIF vía `next/image`).

Lo que falta para publicar está listado en `neuhaus-next/README.md`.

---

# Roadmap consolidado

| Fase | Entregable | Estimado | Depende de |
|---|---|---|---|
| **0** | Cambios del Excel sobre el sitio actual (Bloque A) | 4-6 h | Q1, Q2 |
| **1** | Andamiaje Next.js + layout + fuentes | 2-3 h | decisión de hosting |
| **2** | Migración de las 6 páginas | 6-8 h | Fase 1 |
| **3** | Optimización de imágenes + `next/image` | 4 h | Fase 2 |
| **4** | Formularios con Server Actions | 3 h | Q6 |
| **5** | Metadata + JSON-LD + sitemap + robots + OG | 4 h | Q3, Q4, Q5 |
| **6** | GEO: `llms.txt`, FAQs, contenido citable | 4-5 h | Fase 5 |
| **7** | SEO local + Google Business Profile | 2 h + gestión del cliente | Q5 |
| **8** | QA, deploy, Search Console, medición | 3 h | todo |

**Total desarrollo: ~32-38 h.**

### Ruta rápida si hay urgencia
Fase 0 (cambios del cliente) → deploy → después el resto. El cliente ve sus cambios esta semana y la migración avanza sin bloquear.

### Prioridad por impacto en resultados
1. 🔴 **Formularios que funcionen** — se están perdiendo leads *hoy*
2. 🔴 **Migración a Next.js** — habilita todo el SEO/GEO
3. 🔴 **Imágenes** — 83 MB es la diferencia entre rebotar y convertir
4. 🟠 **Metadata + schema** — 6 páginas indexables en vez de 1
5. 🟠 **GEO + FAQs** — canal en crecimiento, competencia todavía ausente
6. 🟡 **SEO local** — alta relación resultado/esfuerzo, pero mayormente gestión del cliente

---

## Decisiones que necesito antes de empezar

| # | Pregunta | Estado | Bloquea |
|---|---|---|---|
| Q1 | ¿Se elimina la sección "Tecnología y control en cada etapa" de Home completa, o solo el título? | 🔴 Pendiente | Fase 0 |
| Q2 | ¿Confirmás el H2 "NEUHAUS, una marca instalada desde hace 50 años" con bajada que nombre los sectores? | 🔴 Pendiente | Fase 0 |
| Q3 | ¿"NEUHAUS 3G" es claim oficial permanente? | 🟠 Pendiente | Fase 5 |
| Q4 | ¿1976 está documentado como año de fundación? | 🟠 Pendiente | Fase 0 |
| Q5 | Dirección | ✅ `Colombres 1065, C1238AAA, CABA` | — |
| Q6 | ¿A qué casilla llegan los formularios? | 🟡 Pendiente (el cliente lo está definiendo) | Fase 4 |
| Q7 | Teléfono | ✅ `+54 11 4925-6364` (el del sitio era typo) | — |
| Q8 | Dominio | ✅ `imprentaneuhaus.com` canónico · `neuhaus.com.ar` → 301 | — |
| — | Hosting: ¿Vercel (recomendado) o Apache actual con export estático? | 🟠 Pendiente | Fase 1 |
| — | Bots de IA: ¿aprobado permitir GPTBot/ClaudeBot/PerplexityBot? | 🟡 Pendiente | Fase 6 |

**Aprobado y listo para ejecutar:** optimización de imágenes vía script (Fase 3, no depende de ninguna respuesta).
