# SEO y GEO — trabajo realizado
**Neuhaus S.A. — imprentaneuhaus.com** · 2026-07-28

Descripción técnica de la capa de posicionamiento implementada en el sitio: qué se hizo
y cómo funciona. Las cifras están medidas sobre el build de producción.

---

## 1. Arquitectura de renderizado

Las seis rutas del sitio se **prerenderizan como HTML estático en tiempo de build**.
Cada URL se sirve como un documento completo: contenido, encabezados, metadata y datos
estructurados viajan en el HTML inicial, sin depender de la ejecución de JavaScript en
el cliente.

Es la decisión que condiciona todo lo demás, porque define qué agentes pueden leer el
sitio:

| Agente | Ejecuta JS | Qué recibe |
|---|:--:|---|
| Googlebot | sí | HTML completo, sin renderizado diferido |
| Bingbot | parcial | HTML completo |
| `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` | **no** | HTML completo |
| Unfurlers (WhatsApp, LinkedIn, Slack) | no | metadata correcta por URL |

Los crawlers de los motores generativos no ejecutan JavaScript. Frente a una aplicación
que arma el DOM en el navegador reciben un documento vacío, y el sitio queda fuera de
sus respuestas. Con prerenderizado reciben exactamente el mismo HTML que Googlebot.

Un efecto secundario relevante: Google indexa sin pasar por la cola de renderizado
diferido, que es donde una SPA pierde tiempo de indexación en cada cambio de contenido.

**Estructura de encabezados y volumen de texto, medidos sobre el HTML servido:**

| Ruta | `<h1>` | Palabras de texto |
|---|:--:|--:|
| `/` | 1 | 361 |
| `/servicios/prospectos` | 1 | 383 |
| `/servicios/etiquetas` | 1 | 276 |
| `/calidad` | 1 | 354 |
| `/nosotros` | 1 | 706 |
| `/contacto` | 1 | 162 |

Un solo `<h1>` por ruta, con jerarquía `h2`/`h3` descendente. El carrusel de la portada
monta un único `<h1>` a la vez —los slides se intercambian, no se apilan—, de modo que
el encabezado que recibe el crawler es el del primer slide.

---

## 2. Estrategia de keywords

El criterio de selección es **intención comercial, no volumen de búsqueda**.

"Imprenta Buenos Aires" tiene miles de competidores y atrae consultas irrelevantes para
esta empresa: tarjetas personales, folletos sueltos, impresión minorista. "Impresión de
prospectos medicinales con verificación electrónica" tiene un volumen bajo, y cada
consulta corresponde a un comprador industrial con presupuesto asignado. La segmentación
apunta al segundo caso.

| Ruta | Keyword principal | Secundarias |
|---|---|---|
| `/` | imprenta industrial Buenos Aires | industria gráfica Argentina, imprenta para laboratorios, impresión offset y flexográfica |
| `/servicios/prospectos` | prospectos medicinales impresión | impresión de prospectos farmacéuticos, prospectos plegados laboratorio, offset prospectos Argentina |
| `/servicios/etiquetas` | etiquetas autoadhesivas Buenos Aires | etiquetas en rollo flexográficas, etiquetas BOPP, etiquetas cosmética y alimentos |
| `/calidad` | control de calidad impresión farmacéutica | Electronic Verification imprenta, sistema Laetus, BPM impresión, ISO 9001 gráfica |
| `/nosotros` | Neuhaus S.A. industria gráfica | imprenta familiar Buenos Aires, imprenta Boedo |
| `/contacto` | imprenta Boedo CABA | presupuesto impresión prospectos, cotizar etiquetas autoadhesivas |

Cada término principal está reflejado en el `<title>`, en el `<h1>` y en el cuerpo de su
ruta, sin repetición forzada.

---

## 3. Metadata

Cada ruta declara título propio, descripción propia, `canonical` absoluto, Open Graph
completo con `locale: es_AR` y `twitter:card`. Títulos efectivamente emitidos:

| Ruta | `<title>` | Long. |
|---|---|--:|
| `/` | Neuhaus S.A. — Imprenta industrial en Buenos Aires | 50 |
| `/servicios/prospectos` | Impresión de prospectos medicinales \| Neuhaus S.A. | 50 |
| `/servicios/etiquetas` | Etiquetas autoadhesivas en rollo \| Neuhaus S.A. | 47 |
| `/calidad` | Control de calidad en impresión farmacéutica \| Neuhaus S.A. | 59 |
| `/nosotros` | Nosotros — Industria gráfica familiar en Boedo \| Neuhaus S.A. | 61 |
| `/contacto` | Contacto — Cotizá tu impresión \| Neuhaus S.A. | 45 |

Las URLs se derivan de una constante de dominio única (`metadataBase`) declarada en el
layout raíz. `canonical`, `og:url` y las entradas del sitemap se construyen absolutas a
partir de ella. Esto elimina la clase entera de errores por URL relativa y concentra un
eventual cambio de dominio en un solo punto.

La directiva `robots` habilita `max-image-preview: large` y `max-snippet: -1`, que
autorizan a Google a mostrar previsualización de imagen grande y snippet sin límite de
longitud.

Las descripciones miden entre 115 y 196 caracteres. Google trunca alrededor de 155-160,
de modo que las cuatro más largas se muestran cortadas en la SERP. No implica
penalización, pero corresponde recortarlas para controlar qué texto se ve.

---

## 4. Datos estructurados (JSON-LD)

Emitidos desde el servidor, dentro del HTML inicial. Están agrupados en un `@graph`
único con `@id` estables, de forma que `Service`, `ContactPage` y `BreadcrumbList`
referencian el nodo de organización en lugar de duplicarlo.

| Ruta | Nodos emitidos |
|---|---|
| `/` | `Organization` + `LocalBusiness` + `PrintingService`, `WebSite` |
| `/nosotros` | los anteriores + `BreadcrumbList` |
| `/calidad` | los anteriores + `BreadcrumbList` |
| `/servicios/prospectos` | los anteriores + `Service` + `BreadcrumbList` |
| `/servicios/etiquetas` | los anteriores + `Service` + `BreadcrumbList` |
| `/contacto` | los anteriores + `ContactPage` + `BreadcrumbList` |

El nodo de organización declara `foundingDate`, `address`, `geo`, `telephone`, `email`,
`aggregateRating`, `sameAs`, `openingHoursSpecification`, `areaServed`, `knowsAbout`,
`hasCredential` (ISO 9001, BPM, FSC) y `contactPoint`.

Cumple tres funciones: alimenta el Knowledge Panel, habilita resultados enriquecidos
—breadcrumbs y valoración en la SERP— y expone los hechos de la empresa en formato
parseable para los motores generativos, que es el punto de la sección 6.

Los nodos `Service` describen cada línea de producción con su `serviceType`, `provider`
enlazado a la organización, `areaServed` y `audience` de tipo `BusinessAudience`.

---

## 5. Indexación y dominio

**Sitemap.** `/sitemap.xml` se genera desde código, no como archivo estático: incluye
las seis URLs con `lastModified`, `changeFrequency` y `priority` diferenciada según
relevancia comercial —las dos rutas de servicio por encima de las institucionales—.

**robots.txt.** También generado desde código, con directivas `Sitemap:` y `Host:`.

Ambos derivan de la misma constante de dominio que la metadata, por lo que no pueden
quedar desincronizados respecto del canonical.

**Dominio canónico: `imprentaneuhaus.com`.** Es el declarado en el Google Business
Profile y, por lo tanto, el que ya concentra la señal de marca acumulada.

`neuhaus.com.ar` debe resolverse mediante **301 permanente conservando la ruta**
(`/calidad` → `/calidad`), no servirse en paralelo. Dos dominios entregando el mismo
contenido reparten la autoridad entre ambos y delegan la elección del canónico al
criterio del buscador. Es configuración de DNS y servidor, fuera del código.

---

## 6. GEO — Generative Engine Optimization

Objetivo: que la empresa aparezca en las respuestas de ChatGPT, Perplexity, Gemini,
Claude y AI Overviews cuando alguien busca un proveedor gráfico con estas capacidades.

**Legibilidad sin JavaScript.** Resuelta por la arquitectura de la sección 1. Es la
condición habilitante: sin ella ninguna de las medidas siguientes surte efecto, porque
el agente nunca llega a ver contenido.

**Acceso declarado para crawlers de IA.** `robots.txt` habilita explícitamente `GPTBot`,
`OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`,
`PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `Amazonbot`,
`meta-externalagent`, `Bytespider` y `CCBot`.

Es una decisión de negocio antes que técnica, y está señalada como tal. Permitirlos
implica que el contenido puede usarse para entrenamiento y para citación. Para una
empresa B2B que busca ser encontrada por compradores, el beneficio de aparecer supera al
costo — pero corresponde que lo apruebe la empresa. Revertirlo consiste en mover esos
user-agents a un bloque `disallow`.

**`llms.txt`.** Resumen estructurado en Markdown servido en `/llms.txt`: qué es la
empresa, qué produce, con qué tecnologías, cómo controla la calidad, a qué sectores
provee e índice de páginas. Es una convención emergente, no un estándar ratificado, y su
adopción por parte de los proveedores todavía es parcial; se incluye porque el costo
marginal es nulo.

**Hechos en formato parseable.** Los motores generativos citan datos concretos y
verificables antes que afirmaciones de marketing. El nodo `LocalBusiness` publica año de
fundación, certificaciones, valoración y ámbito de servicio sin ambigüedad, en lugar de
dejarlos dispersos en prosa donde el extractor tiene que inferirlos.

**Marcado semántico.** El HTML usa elementos con significado, que es lo que permite a un
extractor identificar qué representa cada bloque en lugar de recibir una sucesión de
contenedores genéricos:

- Cadena de producción e hitos históricos → `<ol>`
- Fichas técnicas de las tecnologías de impresión → `<dl>` / `<dt>` / `<dd>`
- Listados de productos y certificaciones → `<ul>` / `<li>`
- Contenido principal delimitado en `<main>`, con skip link

**Alcance fuera del sitio.** Los motores generativos ponderan fuertemente fuentes de
terceros. Google Business Profile completo, entidad en Wikidata, presencia en
directorios sectoriales y reseñas sostenidas influyen sobre la citación tanto o más que
el sitio propio. Dependen de la empresa y no forman parte de lo implementado.

---
