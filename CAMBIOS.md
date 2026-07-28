# Registro de cambios — Neuhaus S.A. sitio web

Última actualización: 2026-04-22

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
