# Registro de cambios — Neuhaus S.A. sitio web

Última actualización: 2026-07-31

> El sitio vigente es **`neuhaus-next/`** (Next.js). El proyecto Vite de la raíz quedó
> como respaldo de la migración: los cambios nuevos se aplican solo en `neuhaus-next/`.

---

# Ronda de cambios — 2026-07-31

## NOSOTROS — Banner parallax (última fila abierta del Excel)
`neuhaus-next/src/sections/nosotros/Quote.tsx`

El Excel (filas B14-B16) pedía sacar el texto; el cliente confirmó que la sección **queda**
y solo se corrige la antigüedad:

| Antes | Después |
|---|---|
| "Nuestros más de **40** años de experiencia en el rubro se reflejan en cada trabajo." | "Nuestros más de **50** años de experiencia en el rubro se reflejan en cada trabajo." |

También se sacó el comentario "PENDIENTE" del archivo, y se corrigió "cuatro décadas" →
"cinco décadas" en `sections/nosotros/Values.tsx` (sección oculta, para que no vuelva a
aparecer una cifra vieja si se reactiva).

**Con esto, todas las filas del Excel "Modificaciones página WEB" quedan aplicadas.**

---

# Ronda de cambios — 2026-07-30

Cambios solicitados por el cliente vía planilla de modificaciones ("Modificaciones página WEB"), aplicados sobre Home, Nosotros y Calidad.

## Corrección técnica

**El sistema Laetus lee código de barras, no código QR.** El sitio decía "QR" en 5 lugares — se corrigió en todos:

| Archivo | Sección |
|---|---|
| `src/pages/HomePage/sections/WhyNeuhaus.tsx` | Card "Sistema Laetus" |
| `src/pages/EtiquetasPage/sections/Control.tsx` | Título y bajada de la sección |
| `src/pages/CalidadPage/sections/Systems.tsx` | Card "Sistema Laetus" |
| `src/pages/CalidadPage/sections/IntegratedChain.tsx` | Paso "Control de lectura Laetus a QR" → "…a código de barras" |
| `src/pages/CalidadPage/sections/Philosophy.tsx` | Párrafo de introducción |

---

## INICIO (HomePage)

### Hero — banner principal
`src/pages/HomePage/sections/Hero.tsx`

| Slide | Antes | Después |
|---|---|---|
| 1 — Producción | "Cada impresión, cada detalle, bajo el mismo techo." | "Proceso de producción integrado, desde el archivo hasta el producto terminado." |
| 2 — Trayectoria | "Más de 40 años de experiencia en la industria gráfica." | "NEUHAUS 3G, continuidad de tercera generación." |

### Sectores que confían en nosotros
`src/pages/HomePage/sections/Industries.tsx`

| Elemento | Antes | Después |
|---|---|---|
| Título (H2) | "Sectores que confían en nosotros" | "NEUHAUS, una marca instalada desde hace 50 años." |

Subtítulo y las 4 tarjetas de industrias (Laboratorios, Cosmética, Alimentos, PyMEs) quedan sin cambios.

### Stats — franja de números
`src/pages/HomePage/sections/Stats.tsx`

"45+ Años de trayectoria" → "50+ Años de trayectoria".

### Tecnología y control en cada etapa — **oculta**
`src/pages/HomePage/sections/WhyNeuhaus.tsx` / `src/pages/HomePage/index.tsx`

El cliente pidió sacar esta sección. Se comentó su importación y su renderizado en `HomePage/index.tsx` (no se borró el archivo, por si se necesita reactivar).

---

## NOSOTROS

### Hero de página
`src/pages/NosotrosPage/sections/Hero.tsx`

"Desde 1979, imprimiendo para la industria nacional." → "Desde 1976, imprimiendo para la industria nacional."

### Nuestra historia
`src/pages/NosotrosPage/sections/History.tsx`

| Año | Antes | Después |
|---|---|---|
| 1979 → **1976** | "Nacemos como empresa familiar dedicada a la producción de folletería comercial, recetarios, revistas y anotadores para el mercado nacional." | "Empezamos como todas las pymes, como un pequeño taller gráfico dedicado a impresiones comerciales, pero nuestra seriedad y calidad nos llevaron a trabajar para grandes compañías." |
| 1987 | "Tomamos nuestro nombre definitivo y ampliamos nuestra especialización hacia prospectos medicinales y cosméticos, consolidando nuestra presencia en la industria farmacéutica." | "El gran volumen de trabajo, más el acceso al crédito y modernas tecnologías nos impulsaron a convertirnos en NEUHAUS SA Industria Gráfica." |
| Hoy | Sin cambios | Sin cambios |

Subtítulo: "Más de cuatro décadas…" → "Más de cinco décadas…" (consistente con la fundación en 1976).

**Color de fondo:** ahora comparte el gris (`bg-secondary`) con "Nuestra planta", a pedido del cliente para mantener la alternancia de colores entre secciones.

### Misión / Visión → Objetivo / Proyección
`src/pages/NosotrosPage/sections/MisionVision.tsx`

| Card | Antes | Después |
|---|---|---|
| "Misión" | Título "Misión" | Título **"Objetivo"**. Texto: "Nuestro objetivo: responder con velocidad y calidad." + un párrafo breve sobre procesos integrados, tecnología propia y control en cada etapa para farmacéutica, cosmética y alimenticia. |
| "Visión" | Título "Visión" | Título **"Proyección"**. Texto nuevo: seguir innovando en soluciones gráficas para farmacéutica/cosmética/alimenticia, expandir presencia en el mercado, consolidarse como proveedor preferido con altos estándares de calidad y seguridad. |

**Valores** (dentro de la misma sección): se dejaron **solo los 5 títulos** (Compromiso con la calidad, Innovación, Responsabilidad, Trabajo en equipo, Mejora continua), sin las descripciones. Rediseñados como chips/etiquetas compactas en una fila, en vez de la grilla con mucho espacio vacío que tenían antes.

### Lo que nos representa — **oculta**
`src/pages/NosotrosPage/sections/Values.tsx` / `src/pages/NosotrosPage/index.tsx`

El cliente marcó esta sección como repetida (se superponía con "Valores" de Misión/Visión: "Mejora continua" aparecía en ambas). Se comentó su importación y renderizado en `NosotrosPage/index.tsx`, sin borrar el archivo.

### Nuestra planta
`src/pages/NosotrosPage/sections/Plant.tsx`

Fondo cambiado a `bg-secondary` (el gris que tenía la sección oculta "Lo que nos representa"), para no perder la alternancia de colores entre secciones de la página.

### Certificaciones
`src/pages/NosotrosPage/sections/Certifications.tsx`

Fondo cambiado a `bg-background` (blanco) — quedaba con el mismo gris que "Nuestra planta" y rompía la alternancia.

---

## CALIDAD

### Hero de página
`src/pages/CalidadPage/sections/Hero.tsx`

Se sacó el subtítulo ("Cada trabajo que sale de nuestra planta pasó por un sistema de control que pocos proveedores gráficos pueden ofrecer."). Queda solo el título: "La calidad no es un resultado. Es un proceso."

---

## Footer
`src/components/Footer.tsx`

"Más de 45 años de experiencia…" → "Más de 50 años de experiencia…"

---

## INICIO (HomePage)

### Hero — banner principal
`src/pages/HomePage/sections/Hero.tsx`

**Slides:** reordenados y reescritos. El slide de Calidad pasa a ser el primero porque es el diferenciador más fuerte de Neuhaus.

| # | Eyebrow | Título | CTA | Link |
|---|---------|--------|-----|------|
| 1 | Control de Calidad | "Ningún error llega al producto final." | Conocé nuestro sistema | /calidad |
| 2 | Prospectos & Etiquetas | "Offset para impresos. / Flexo para etiquetas." | 2 botones separados | /servicios/prospectos y /servicios/etiquetas |
| 3 | Producción adaptable | "Para grandes industrias / y pequeños productores." | Conocé nuestra planta | /nosotros |

**Slide 2 — doble botón:** se reemplazó el único botón "Ver nuestros servicios" por dos botones de igual peso visual: uno navy ("Prospectos & Impresos") y uno blanco ("Etiquetas"), cada uno con su link propio.

**Layout:** ancho del bloque de texto ampliado de `max-w-xl` (512px) a `max-w-2xl` (672px) para que el texto no quede tan apretado. Se agregó `overflow-hidden` + `pt-28` al contenedor para que el contenido nunca se superponga con el header.

---

### Tecnología y control
`src/pages/HomePage/sections/WhyNeuhaus.tsx`

| Elemento | Antes | Después |
|----------|-------|---------|
| Subtítulo | "…garantizan consistencia y la intención de cero errores…" | "…influyen en la calidad del producto final, buscando constantemente optimizar procesos." |
| Card título | "Cadena 100% integrada" | "Cadena de producción 100% integrada" |
| Card descripción | "…grandes laboratorios como para emprendedores…" | "…industria masiva como para emprendedores…" |

---

### Sectores que confían en nosotros
`src/pages/HomePage/sections/Industries.tsx`

| Elemento | Antes | Después |
|----------|-------|---------|
| Párrafo intro | "Desde corporaciones internacionales hasta productores artesanales…" | "Desde multinacionales hasta pequeños productores locales, nuestra flexibilidad nos permite adaptarnos a la escala de nuestros clientes." |
| Laboratorios — descripción | "…para prospectos y estuchería…" | "…para prospectos." (eliminado "estuchería": no fabrican estuches) |
| PyMEs — descripción | "Tiradas cortas y medianas con flexibilidad productiva…" | "Tiradas medias y bajas para todo tipo de proyecto." |

Cosmética y Alimentos: sin cambios de texto.

---

## SERVICIOS / Prospectos & Impresos

### Hero de página
`src/pages/ProspectosPage/sections/Hero.tsx`

| Elemento | Antes | Después |
|----------|-------|---------|
| Título | "Todo lo que se imprime en papel, lo resolvemos." | "En Neuhaus, atendemos toda necesidad de impresión." |
| Subtítulo | "…material de marketing, anotadores y blocks. Tecnología offset y digital…" | "…recetarios, revistas y anotadores. Tecnología offset, flexo y digital…" |

---

### Producción en pliegos
`src/pages/ProspectosPage/sections/Service.tsx`

- Descripción: "desde preprensa hasta despacho" → "desde preprensa hasta **entrega**"
- Pills eliminados: "Material de marketing" y "Papelería comercial" — redundantes con "Folletería comercial"
- Pills finales: Prospectos medicinales · Prospectos cosméticos · Folletería comercial · Recetarios · Revistas y catálogos · Anotadores y blocks

---

### Tecnologías
`src/pages/ProspectosPage/sections/Technologies.tsx`

- **Offset:** sin cambios.
- **Flexo (nuevo bloque):** "Para tirajes largos y medios que precisen terminación en bobina." Stats: Formato → Terminación en bobina / Ideal para → Tirajes largos y medios.
- **Digital:** eliminada la frase "donde offset no es rentable" y el stat "Sin costos de plancha". Texto nuevo: "Para tirajes cortos. Sin planchas, sin mínimos elevados. Ideal para muestras, pruebas o materiales de bajo volumen."

---

### Formulario de cotización — Papel
`src/pages/ProspectosPage/sections/QuoteForm.tsx`

Campos anteriores: nombre, empresa, email, teléfono, tipo de trabajo (select), tiraje, mensaje.

Campos nuevos:

| Campo | Tipo |
|-------|------|
| Nombre completo | texto |
| Empresa | texto |
| Email | email |
| Teléfono | tel |
| Cantidad total | texto |
| Tamaño (ej: 210 × 297 mm) | texto |
| Cantidad de colores | texto |
| Terminación | select: Plano / Doblado simple / Doblado múltiple |
| Mensaje adicional | textarea (opcional) |

Botón: "Solicitar cotización" (antes "Enviar consulta").

---

## SERVICIOS / Etiquetas

### Formulario de cotización — Etiquetas
`src/pages/EtiquetasPage/sections/QuoteForm.tsx`

Campos anteriores: nombre, empresa, email, teléfono, tipo de etiqueta (select), tiraje, medidas, mensaje.

Campos nuevos:

| Campo | Tipo |
|-------|------|
| Nombre completo | texto |
| Empresa | texto |
| Email | email |
| Teléfono | tel |
| Cantidad total | texto |
| Tamaño de etiqueta (ej: 50 × 30 mm) | texto |
| Cantidad de colores | texto |
| Sustrato | select: BOPP blanco / BOPP transparente / BOPP metalizado / Ilustración / Martele / Otro |
| Mensaje adicional | textarea (opcional) |

Botón: "Solicitar cotización" (antes "Enviar consulta").

---

## CALIDAD

### Nuestra filosofía
`src/pages/CalidadPage/sections/Philosophy.tsx`

Texto reemplazado en su totalidad:
> "En Neuhaus entendemos que los errores cuestan caro: un prospecto manchado, un QR que no funciona o una etiqueta ilegible pueden tener consecuencias de impacto.
>
> Por eso construimos un sistema de control integrado en cada etapa del proceso, con tecnología específica para la detección de errores y un departamento de calidad propio dentro de la planta, para poder detectar y evitar hasta el más mínimo error."

---

### Cadena de producción integrada
`src/pages/CalidadPage/sections/IntegratedChain.tsx`

Pasos actualizados de 6 a 9. Se separaron los controles EV y Laetus en etapas propias para reflejar el proceso real:

| # | Paso |
|---|------|
| 1 | Recepción de diseño |
| 2 | Preprensa |
| 3 | Control EV al primer pliego impreso |
| 4 | Impresión |
| 5 | Control EV |
| 6 | Doblado / Terminación |
| 7 | Control de lectura Laetus a QR |
| 8 | Acondicionado en cajas |
| 9 | Entrega |

---

## NOSOTROS

### Hero de página
`src/pages/NosotrosPage/sections/Hero.tsx`

| Antes | Después |
|-------|---------|
| "Una empresa familiar que se convirtió en referente de la industria gráfica Argentina." | "Desde 1979, imprimiendo para la industria nacional." |

---

### Nuestra historia
`src/pages/NosotrosPage/sections/History.tsx`

**Diseño:** reemplazados los 4 cards numerados (01–04) por una **línea de tiempo vertical** con año grande a la izquierda, punto sobre la línea y texto a la derecha. Más legible y cronológico.

**Subtítulo:** "Más de cuatro décadas de perfeccionamiento continuo y adopción tecnológica en la industria gráfica." → "Más de cuatro décadas de experiencia en la industria gráfica argentina."

**Contenido de los hitos:**

| Año | Título | Texto |
|-----|--------|-------|
| 1979 | Fundación | Empresa familiar dedicada a folletería comercial, recetarios, revistas y anotadores. |
| 1987 | Neuhaus S.A. | Nuevo nombre y especialización en prospectos medicinales y cosméticos para la industria farmacéutica. |
| Hoy | Presente | Fabricación de etiquetas autoadhesivas y prospectos (planos y en rollo), con EV, ISO 9001, BPM y FSC. |

---

### Banner parallax
`src/pages/NosotrosPage/sections/Quote.tsx`

| Antes | Después |
|-------|---------|
| "Cada hoja que imprimimos lleva más de 45 años de experiencia, precisión y compromiso." (en cursiva, entre comillas) | "Nuestros más de 40 años de experiencia en el rubro se reflejan en cada trabajo." (sin cursiva ni comillas — es una declaración, no una cita) |

---

### Lo que nos representa
`src/pages/NosotrosPage/sections/Values.tsx`

**Título:** "Nuestros valores" → "Lo que nos representa"

| Antes | Estado | Después |
|-------|--------|---------|
| Precisión Absoluta | Eliminado | — |
| Integración Total | Eliminado | — |
| Confianza Sostenida | Mantenido | Confianza sostenida |
| Mejora Continua | Mantenido | Mejora continua |
| — | Nuevo | Calidad de producto |
| — | Nuevo | Atención personalizada |

---

## Pendientes / Por definir

- [ ] **ServicesSplit** (`src/pages/HomePage/sections/ServicesSplit.tsx`): mensaje cortado — confirmar cambio exacto en el título del panel "Prospectos & Impresos"
- [ ] **Fotos propias — Industrias** (HomePage): Laboratorios → foto prospectos, Cosmética → foto etiqueta, Alimentos → foto etiqueta
- [ ] **Fotos propias — Flexo** (Tecnologías en ProspectosPage): bloque Flexo usa imagen placeholder
- [ ] **Logos de certificaciones** (CalidadPage y NosotrosPage)
- [ ] **"Acabados premium"** en card Cosmética (Industries): confirmar si queda o se cambia por "barnizados" u otra opción
- [ ] **Misión, visión y valores formales** (NosotrosPage): el cliente enviará el texto para crear un bloque nuevo antes de "Lo que nos representa"
- [ ] **Galería de planta** (NosotrosPage): reemplazar fotos actuales por imágenes de mayor calidad
