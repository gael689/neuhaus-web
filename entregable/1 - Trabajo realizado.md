# Neuhaus S.A. — Sitio web
## Informe detallado del trabajo realizado

**Fecha:** 31 de julio de 2026
**Sitio:** imprentaneuhaus.com o neuhaus.com.ar (pendiente) — 6 páginas

Este documento recorre el sitio completo, página por página y sección por sección: qué hay en cada una y qué dice.

Donde algo cambió respecto de la versión anterior, está mostrado como **Antes → Ahora**, con los textos exactos. Donde algo se incorporó o se retiró, está dicho explícitamente. Las secciones que no cambiaron también están señaladas como tales.

El trabajo de posicionamiento en Google y en buscadores con IA va aparte, en el documento **"2 - Informe SEO y GEO"**.

---

# Parte 1 — La base: Next.js 16

El sitio se reconstruyó sobre **Next.js 16**, el framework de referencia para sitios cuyo objetivo es ser encontrados.

La diferencia clave es que **las páginas se generan completas de antemano**: quien las pide —una persona, Google o ChatGPT— recibe el documento entero, con todo el texto adentro. Es lo que hace posible el resto:

| Qué permite | Para qué sirve |
|---|---|
| Páginas legibles sin ejecutar nada | Aparecer en respuestas de ChatGPT, Perplexity y Gemini, cuyos rastreadores no ejecutan JavaScript |
| Título y descripción propios por página | Seis resultados distintos en Google |
| Datos de la empresa en formato estructurado | Panel de empresa con certificaciones y reseñas |
| Optimización automática de imágenes | El sitio pasó de 83 MB a 5,8 MB de fotos |
| Formularios procesados en el servidor | Validación real, imposible de saltear |
| Vista previa generada por página | Los links compartidos muestran una pieza de marca |

Importa comercialmente porque el comprador de Neuhaus —un jefe de compras de laboratorio— hoy busca proveedor de dos maneras: escribiendo en Google y preguntándole a un asistente de IA. El detalle de cómo se aprovecha está en el documento 2.

**Las direcciones no cambiaron.** `/nosotros` sigue siendo `/nosotros`. Así se conserva la autoridad que Google ya le reconoce a cada página y ningún enlace externo se rompe: no hizo falta una sola redirección.

---

# Parte 2 — Resumen del trabajo

Sobre esa base se hicieron cuatro cosas:

**1. Se aplicaron los cambios de contenido de la planilla.** Todas las filas, incluida la última que había quedado abierta.

**2. Se sumó la capa de posicionamiento.** Metadata propia por página, datos estructurados de la empresa, mapa del sitio, imágenes de vista previa y resumen para buscadores con IA. Todo el detalle está en el documento 2.

**3. Se construyeron los formularios con procesamiento en el servidor.** Validación real y envío por correo de las tres consultas del sitio.

**4. Se unificaron los datos de la empresa** en un único archivo del que se alimenta todo el sitio, y se optimizó el material fotográfico para web.

---

# Parte 3 — Elementos presentes en todas las páginas

## Encabezado (menú superior)

Logo a la izquierda y navegación a la derecha: Inicio · Nosotros · Servicios (con desplegable: Prospectos & Impresos / Etiquetas Autoadhesivas) · Calidad · Contacto.

El menú es transparente sobre la foto del encabezado y se vuelve sólido al bajar. En celular se abre a pantalla completa. Marca en qué página estás.

**Sin cambios en esta etapa.**

## Pie de página

Cuatro columnas: logo con descripción de la empresa, navegación, datos de contacto y redes sociales.

**Texto de presentación**

> **Antes:** "Imprimí lo que necesites. Más de **45 años** de experiencia en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia."
>
> **Ahora:** "Imprimí lo que necesites. Más de **50 años** de experiencia en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia."

**Teléfono**

> **Antes:** 4925-6363
>
> **Ahora:** +54 11 4925-6364 — con código de área, en formato internacional y enlazado para llamar desde el celular. Verificado contra el perfil de Google Business.

**Dirección**

> **Antes:** sin código postal.
>
> **Ahora:** Colombres 1065, Boedo, Ciudad Autónoma de Buenos Aires — **C1238AAA** — Argentina.

**Se incorporó:** bloque de **4,7 estrellas · 20 opiniones en Google**, enlazado al perfil de la empresa. No existía en la versión anterior. Es prueba social que Neuhaus ya tiene ganada y que ahora aparece en las seis páginas.

---

# Parte 4 — Recorrido página por página

# 🏠 Inicio

## 1. Banner principal (carrusel)

Tres pantallas que rotan solas cada 6 segundos, con barra de progreso arriba, flechas y puntos para navegar. Se pausa al pasar el mouse. Cada una tiene una foto de fondo, un rótulo, un título grande y un botón.

**Pantalla 1 — Producción**

> **Antes:** "Cada impresión, cada detalle, bajo el mismo techo."
>
> **Ahora:** "Proceso de producción integrado, desde el archivo hasta el producto terminado."

**Pantalla 2 — Trayectoria**

> **Antes:** "Más de 40 años de experiencia en la industria gráfica."
>
> **Ahora:** "NEUHAUS 3G, continuidad de tercera generación."

**Pantalla 3 — Calidad y procesos:** "Impresión bajo normas certificadas ISO, BPM y FSC." Sin cambios de texto.

**Además:** se amplió el ancho del bloque de texto para que los títulos largos respiren mejor, y se ajustó el espaciado superior para que el contenido nunca se solape con el menú.

## 2. Franja de números

Tres cifras que cuentan hacia arriba al aparecer en pantalla.

> **Antes:** **45+** Años de trayectoria · 3 Certificaciones internacionales · 100% Producción integrada
>
> **Ahora:** **50+** Años de trayectoria · 3 Certificaciones internacionales · 100% Producción integrada

## 3. Los dos servicios

Dos paneles a pantalla partida, cada uno con su foto: **Prospectos & Impresos** y **Etiquetas**. Al pasar el mouse por uno, se agranda y el otro se achica; la foto hace un zoom lento y aparece el botón "Ver servicio". En celular quedan uno arriba del otro.

**Sin cambios en esta etapa.**

## 4. Tecnología y control en cada etapa

### ⛔ Esta sección ya no está.

Eran cuatro tarjetas: Electronic Verification, Sistema Laetus, Cadena integrada y Escala flexible.

Se retiró de la vista tal como se indicó en la planilla. **La sección no se eliminó del proyecto:** quedó guardada, así que reactivarla en el futuro es cuestión de minutos.

El criterio acompaña bien: ese contenido está desarrollado con mucho más detalle en la página de Calidad, y la portada gana foco sin él.

## 5. Sectores

Una grilla de cuatro fotos en distintos tamaños. Cada una muestra el nombre del sector, y al pasar el mouse aparece la descripción.

**Título de la sección**

> **Antes:** "Sectores que confían en nosotros"
>
> **Ahora:** "NEUHAUS, una marca instalada desde hace 50 años."

**Bajada**

> **Antes:** "Desde corporaciones internacionales hasta productores artesanales…"
>
> **Ahora:** "Desde multinacionales hasta pequeños productores locales, nuestra flexibilidad nos permite adaptarnos a la escala de nuestros clientes."

**Los cuatro sectores**

| Sector | Antes | Ahora |
|---|---|---|
| **Laboratorios & Farmacéuticas** | "…para prospectos **y estuchería**. Cumplimiento estricto de normas BPM e ISO 9001." | "Calidad y precisión técnica **para prospectos**. Cumplimiento estricto de normas BPM e ISO 9001." |
| **Cosmética & Cuidado Personal** | — | Sin cambios: "Etiquetas de alta definición que destacan en góndola. Tintas UV, especiales y Stamping." |
| **Alimentos & Bebidas** | — | Sin cambios: "Materiales y adhesivos aptos para toda la cadena. Resistentes a humedad, fricción y frío." |
| **PyMEs y Emprendedores** | "Tiradas cortas y medianas con flexibilidad productiva…" | "Tiradas medias y bajas para todo tipo de proyecto." |

Se sacó "estuchería" porque Neuhaus no fabrica estuches.

## 6. Calidad certificada

Una franja oscura sobre foto de planta, con los logos de **ISO 9001:2015**, **BPM** y **FSC® Cadena de Custodia** desplazándose en bucle continuo.

**Sin cambios en esta etapa.**

## 7. Cierre

*"¿Tenés un proyecto en mente?"* con un botón grande hacia Contacto.

**Sin cambios en esta etapa.**

---

# 🏭 Nosotros

## 1. Encabezado

Foto del equipo en planta a pantalla completa, con el título encima.

> **Antes:** "Desde **1979**, imprimiendo para la industria nacional."
>
> **Ahora:** "Desde **1976**, imprimiendo para la industria nacional."

## 2. Nuestra historia

**El diseño cambió por completo.**

> **Antes:** cuatro tarjetas numeradas (01, 02, 03, 04), una al lado de la otra.
>
> **Ahora:** una línea de tiempo. En escritorio los tres hitos se despliegan horizontalmente, con el año en grande arriba, un punto sobre la línea y el texto abajo; en celular la línea baja en vertical. Se lee como cronología, que es lo que es.

**Bajada**

> **Antes:** "Más de **cuatro décadas** de experiencia en la industria gráfica argentina."
>
> **Ahora:** "Más de **cinco décadas** de experiencia en la industria gráfica argentina."

**Primer hito**

> **Antes — 1979 · Fundación:** "Nacemos como empresa familiar dedicada a la producción de folletería comercial, recetarios, revistas y anotadores para el mercado nacional."
>
> **Ahora — 1976 · Fundación:** "Empezamos como todas las pymes, como un pequeño taller gráfico dedicado a impresiones comerciales, pero nuestra seriedad y calidad nos llevaron a trabajar para grandes compañías."

**Segundo hito**

> **Antes — 1987 · Neuhaus S.A.:** "Tomamos nuestro nombre definitivo y ampliamos nuestra especialización hacia prospectos medicinales y cosméticos, consolidando nuestra presencia en la industria farmacéutica."
>
> **Ahora — 1987 · Neuhaus S.A.:** "El gran volumen de trabajo, más el acceso al crédito y modernas tecnologías nos impulsaron a convertirnos en NEUHAUS SA Industria Gráfica."

**Tercer hito — Hoy · Presente:** sin cambios, como se indicó en la planilla.

> "Fabricamos etiquetas autoadhesivas y prospectos —planos y en rollo— para diversas industrias. Respaldados por certificaciones ISO 9001, BPM y FSC, y tecnología de verificación electrónica en cada etapa del proceso."

**Además:** cambió el color de fondo de la sección, para sostener la alternancia visual a lo largo de la página.

## 3. Banner con la frase

Franja a pantalla completa sobre una foto de impresión offset con efecto parallax: la foto se desplaza más lento que el texto al bajar.

**Este era el último punto abierto de la planilla.** Se confirmó que la sección queda, con la antigüedad actualizada.

> **Antes:** "Nuestros más de **40 años** de experiencia en el rubro se reflejan en cada trabajo."
>
> **Ahora:** "Nuestros más de **50 años** de experiencia en el rubro se reflejan en cada trabajo."

## 4. Objetivo, Proyección y Valores

Dos tarjetas lado a lado y un bloque ancho debajo. **La sección se rehízo entera.**

**Primera tarjeta**

> **Antes — "Misión":** dos párrafos.
>
> **Ahora — "Objetivo":**
> "Nuestro objetivo: responder con velocidad y calidad."
> "Con procesos 100% integrados, tecnología de verificación propia y control en cada etapa, garantizamos una respuesta ágil para la industria farmacéutica, cosmética y alimenticia, sin resignar precisión."

**Segunda tarjeta**

> **Antes — "Visión":** dos párrafos.
>
> **Ahora — "Proyección":**
> "Queremos seguir innovando en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia."
> "Buscamos expandir nuestra presencia en el mercado, consolidándonos como proveedores preferidos, ofreciendo productos de alta calidad y cumpliendo con los más altos estándares de seguridad y calidad."

**Valores**

> **Antes:** cinco valores, cada uno con su título **y su párrafo de descripción**, en una grilla.
>
> **Ahora:** **solo los cinco títulos**, sin descripciones — Compromiso con la calidad · Innovación · Responsabilidad · Trabajo en equipo · Mejora continua.

Al quedar sin descripciones, cinco títulos sueltos en una grilla amplia dejaban mucho espacio vacío. Se rediseñaron como **etiquetas compactas en una sola fila**, cada una con su punto. Se respeta el pedido y la sección queda visualmente resuelta.

## 5. Lo que nos representa

### ⛔ Esta sección ya no está.

Eran cuatro tarjetas: Calidad de producto, Confianza sostenida, Atención personalizada y Mejora continua.

Se retiró de la vista según lo indicado en la planilla, que la marcaba como superpuesta con el bloque de Valores de la misma página — "Mejora continua" aparecía en las dos. Igual que la otra, quedó guardada en el proyecto y no eliminada.

## 6. Nuestra planta

Galería de **12 fotos de planta** en carrusel, con flechas a los costados y barra de progreso abajo. Muestra 3 fotos en escritorio, 2 en tablet y 1 en celular, con zoom al pasar el mouse. Acompaña el texto sobre la planta de Boedo, su maquinaria y su equipo.

**El texto no cambió.** Sí cambiaron dos cosas:

**Descripción de las imágenes** *(no se ve en pantalla; la leen Google y los lectores de pantalla)*

> **Antes:** las 12 fotos compartían la misma descripción genérica, "Planta Neuhaus".
>
> **Ahora:** cada foto tiene la suya — "Impresora offset de la planta de Neuhaus", "Sector de terminación y doblado", "Departamento de calidad interno", y así con las 12.

**Color de fondo:** se ajustó para sostener la alternancia visual entre secciones a lo largo de la página.

## 7. Certificaciones

Tres tarjetas con el logo del organismo, el nombre y una explicación de qué garantiza cada certificación: **ISO 9001**, **BPM** y **FSC® Cadena de Custodia**.

**El contenido no cambió.** Cambió cómo está construida:

> **Antes:** esta sección estaba escrita **dos veces**, una para Nosotros y otra para Calidad, casi idénticas pero por separado. Cada corrección había que hacerla dos veces.
>
> **Ahora:** es **una sola sección compartida** por las dos páginas, con una variante visual para cada una. Cualquier cambio futuro se hace una vez y se refleja en las dos.

**Además:** cambió el color de fondo, que era el mismo que el de "Nuestra planta" y hacía que las dos secciones se leyeran como un solo bloque.

---

# 📄 Prospectos & Impresos

## 1. Encabezado

**Título**

> **Antes:** "Todo lo que se imprime en papel, lo resolvemos."
>
> **Ahora:** "En Neuhaus, atendemos toda necesidad de impresión."

**Bajada**

> **Antes:** "…material de marketing, anotadores y blocks. Tecnología **offset y digital**…"
>
> **Ahora:** "Prospectos medicinales, folletería comercial, recetarios, revistas y anotadores. Tecnología **offset, flexo y digital**, múltiples formatos de entrega."

La bajada nombra ahora las tres tecnologías de la planta y los formatos de entrega, que son los dos ejes de decisión de un comprador.

## 2. Producción en pliegos

Título grande, un párrafo al costado y una fila de etiquetas redondeadas con todo lo que se produce. Cierra con una etiqueta de borde punteado que dice **"¿Necesitás algo más?"** y lleva a Contacto.

**Las etiquetas**

> **Antes:** Prospectos medicinales · Prospectos cosméticos · Folletería comercial · **Material de marketing** · **Papelería comercial** · Recetarios · Revistas y catálogos · Anotadores y blocks
>
> **Ahora:** Prospectos medicinales · Prospectos cosméticos · Folletería comercial · Recetarios · Revistas y catálogos · Anotadores y blocks

Se sacaron "Material de marketing" y "Papelería comercial" porque repetían lo que ya cubre "Folletería comercial".

**El párrafo**

> **Antes:** "Todo el proceso dentro de nuestra planta, desde preprensa hasta **despacho**."
>
> **Ahora:** "Todo el proceso dentro de nuestra planta, desde preprensa hasta **entrega**."

## 3. Formatos de entrega

Tres tarjetas: **Planos** (pliegos sin doblar), **Doblados** (procesados dentro de la planta) y **En bobina** (rollo continuo, compatible con líneas de envasado automatizadas).

**Sin cambios en esta etapa.** Es una sección comercialmente fuerte: responde directo a cómo va a envasar el cliente.

## 4. Tecnologías

Tres bloques grandes, alternando foto y texto de lado. Cada uno con su etiqueta de color, título, descripción y una ficha con dos datos: **Formato** e **Ideal para**.

> **Antes:** dos bloques — Offset y Digital.
>
> **Ahora:** tres bloques — Offset, **Flexo** y Digital.

| Tecnología | Formato | Ideal para |
|---|---|---|
| **Offset** — alta resolución en pliegos, precisión de color y nitidez tipográfica | Pliego a pliego | Tirajes largos y medios |
| **Flexo** — para tirajes que precisen terminación en bobina, alta velocidad y reproducibilidad constante | Terminación a bobina o pliego | Tirajes largos y medios |
| **Digital** — sin planchas, sin mínimos elevados, para muestras y pruebas | Terminación a bobina | Muestras y bajo volumen |

**Se incorporó el bloque de Flexo.** La flexografía es una de las capacidades centrales de la planta y no figuraba en esta página; ahora tiene su lugar propio junto a offset y digital.

**Offset:** sin cambios.

**Digital**

> **Antes:** el texto incluía la frase "donde offset no es rentable", y entre los datos figuraba "Sin costos de plancha".
>
> **Ahora:** "Para tirajes cortos. Sin planchas, sin mínimos elevados. Ideal para muestras, pruebas o materiales de bajo volumen."

Se sacó la frase porque argumentaba en contra del propio servicio: describe el caso de uso en positivo en vez de definirlo por contraste con offset.

## 5. Cada pliego, verificado

Franja oscura con parallax sobre una foto de la línea de verificación:

> **"Cada pliego, verificado."**
> "Nuestro sistema Electronic Verification compara en tiempo real el pliego impreso contra el PDF aprobado por el cliente, detectando cualquier inconsistencia antes de que el trabajo avance."

Con un enlace a la página de Calidad.

**Sin cambios en esta etapa.** Es exactamente el tipo de afirmación concreta y verificable que buscan tanto un jefe de compras como los buscadores con IA.

## 6. Formulario de cotización

**Los campos se replantearon por completo**, para que una consulta llegue con todo lo necesario para cotizar sin una llamada previa.

> **Antes:** Nombre · Empresa · Email · Teléfono · **Tipo de trabajo** (desplegable) · **Tiraje** · Mensaje
>
> **Ahora:** Nombre completo · Empresa · Email · Teléfono · **Cantidad total** · **Tamaño** (ej: 210 × 297 mm) · **Cantidad de colores** · **Terminación** (Plano / Doblado simple / Doblado múltiple) · Mensaje adicional

**El botón**

> **Antes:** "Enviar consulta"
>
> **Ahora:** "Solicitar cotización"

---

# 🏷️ Etiquetas Autoadhesivas

## 1. Encabezado

> **"Etiquetas para la Industria Farmacéutica, Cosmética, Alimenticia y demás."**
> "Impresión flexográfica UV de alta definición. Desde tirajes cortos a medios y largos: la solución perfecta para cualquier productor."

**Sin cambios en esta etapa.**

## 2. Impresión de bobina a bobina

Título grande y una fila de etiquetas: Etiquetas en BOPP · Martelé · Ilustración · Industria Farmacéutica · Cosmética · Alimenticia · Vinícola, más el **"¿Necesitás algo más?"** hacia Contacto.

**Sin cambios en esta etapa.**

## 3. Para cualquier escala

Dos tarjetas que muestran que la planta cubre los dos extremos:

- **Grandes volúmenes** — tiradas largas para consumo masivo, con control de color y trazabilidad *(farmacéutica, cosmética y alimenticia)*
- **Tirajes cortos** — pequeños volúmenes adaptados a la necesidad del cliente *(emprendedores, pymes y productores artesanales)*

**Sin cambios en esta etapa.**

## 4. Impresión flexográfica de alta definición

Foto de etiquetas terminadas junto a un texto sobre tintas UV y resistencia al roce y la manipulación.

**Sin cambios en esta etapa.**

## 5. Formulario de cotización

**Los campos se replantearon por completo**, con el mismo criterio que en Prospectos.

> **Antes:** Nombre · Empresa · Email · Teléfono · **Tipo de etiqueta** (desplegable) · **Tiraje** · **Medidas** · Mensaje
>
> **Ahora:** Nombre completo · Empresa · Email · Teléfono · **Cantidad total** · **Tamaño de etiqueta** (ej: 50 × 30 mm) · **Cantidad de colores** · **Sustrato** (BOPP blanco / BOPP transparente / BOPP metalizado / Ilustración / Martelé / Otro) · Mensaje adicional

**El botón**

> **Antes:** "Enviar consulta"
>
> **Ahora:** "Solicitar cotización"

---

# ✅ Calidad

## 1. Encabezado

**Se sacó la bajada.** Queda solo el título, y gana contundencia.

> **Antes:**
> "La calidad no es un resultado. Es un proceso."
> *"Cada trabajo que sale de nuestra planta pasó por un sistema de control que pocos proveedores gráficos pueden ofrecer."*
>
> **Ahora:**
> "La calidad no es un resultado. Es un proceso."

## 2. Nuestro Sistema

Texto a la izquierda, foto a la derecha. **El texto se reemplazó en su totalidad.**

> **Ahora:** "En Neuhaus entendemos que los errores cuestan caro: un prospecto manchado, un **código de barras** que no funciona o una etiqueta ilegible pueden tener consecuencias de impacto.
>
> Por eso construimos un sistema de control integrado en cada etapa del proceso, con tecnología específica para la detección de errores y un departamento de calidad propio dentro de la planta, para poder detectar y evitar hasta el más mínimo error."

En este párrafo, donde decía "un **QR** que no funciona" ahora dice "un **código de barras** que no funciona".

## 3. Sistemas de control

Tres tarjetas desplegables. Cada una muestra una foto con el nombre encima y un botón "Quiero saber más" que abre la explicación.

**Electronic Verification** — sin cambios
> "Compara en tiempo real cada pliego impreso contra el PDF aprobado por el cliente. Cualquier diferencia —tipográfica, cromática o estructural— es detectada y separada antes de que el trabajo avance en la línea de producción."

**Sistema Laetus**
> **Antes:** "…verifica la legibilidad del **código QR** en cada pliego individual."
>
> **Ahora:** "Lector integrado en las dobladoras que verifica la legibilidad del **código de barras** en cada pliego individual. Si el código no se lee correctamente, el pliego es detectado y separado automáticamente."

**Departamento de Calidad** — sin cambios
> "Equipo propio dentro de la planta que supervisa cada etapa del proceso. No tercerizamos el control. Desde preprensa hasta despacho, todo es auditado internamente."

### La corrección de Laetus, en todo el sitio

Siguiendo la indicación de la planilla, la descripción del sistema Laetus se precisó en **las cinco menciones** que tiene el sitio: decía **código QR** y ahora dice **código de barras**. Están en Inicio, Calidad (tres lugares) y Etiquetas. También se cambió el ícono, que dibujaba un QR.

Es un dato técnico que un comprador del sector reconoce de inmediato.

## 4. Certificados por los organismos más exigentes

Las mismas tres tarjetas de certificaciones de la página Nosotros —compartidas desde un único componente—, más un bloque para **descargar la Política de Calidad en PDF**.

**Sin cambios de contenido en esta etapa.**

## 5. Cadena de producción integrada

Franja oscura con parallax donde los pasos del proceso se encadenan con flechas: horizontal en escritorio, vertical en celular.

**La secuencia pasó de 6 pasos a 9**, separando los controles EV y Laetus en etapas propias para reflejar el proceso real de la planta.

> **Antes (6 pasos):** Recepción de diseño → Preprensa → Impresión → Doblado / Terminación → Acondicionado en cajas → Entrega
>
> **Ahora (9 pasos):** Recepción de diseño → Preprensa → **Control EV al primer pliego impreso** → Impresión → **Control EV** → Doblado / Terminación → **Control de lectura Laetus a código de barras** → Acondicionado en cajas → Entrega

Cierra con: *"Todo el proceso ocurre dentro de nuestra planta. Sin tercerizar. Sin puntos ciegos. Con trazabilidad completa en cada etapa de producción."*

Que **tres de los nueve pasos sean controles de calidad** es, en sí mismo, el argumento de venta de la página.

## 6. Cierre

*"¿Buscás una solución gráfica a medida? Hablemos de tu proyecto."* con botón hacia Contacto.

**Sin cambios en esta etapa.**

---

# 📞 Contacto

## 1. Encabezado

> **"Hablemos de tu proyecto."**
> "Completá el formulario o escribinos directamente. Te respondemos a la brevedad."

**Sin cambios en esta etapa.**

## 2. Formulario

El formulario de consulta general. A la vista es el mismo; **por dentro cambió por completo**. El detalle está en la Parte 5.

## 3. Datos de contacto

Dirección, email, teléfono, redes sociales, reseñas y mapa.

**Teléfono**

> **Antes:** 4925-6363, tanto en el texto visible como en el enlace para llamar.
>
> **Ahora:** +54 11 4925-6364, en ambos lugares. Verificado contra el perfil de Google Business.

**Dirección**

> **Antes:** sin código postal.
>
> **Ahora:** Colombres 1065, Boedo, C1238AAA, CABA.

**Mapa**

> **Antes:** apuntaba a "Colomb**e**s 1065".
>
> **Ahora:** apunta a "Colomb**r**es 1065", la ubicación real.

**Se incorporó:** bloque de reseñas — **4,7 ★ · 20 opiniones en Google**, enlazado al perfil. No existía antes.

**Sin cambios:** los enlaces a LinkedIn, Facebook e Instagram.

Todos estos datos salen ahora del archivo único de la empresa, que es la referencia que usan los buscadores para confirmar la identidad de un negocio.

---

# Parte 5 — Los formularios

Los tres formularios del sitio —Contacto, cotización de Prospectos y cotización de Etiquetas— se construyeron sobre el mismo motor, procesado en el servidor.

**Cómo funcionan:**

- **La validación corre en el servidor**, no en el navegador, de modo que no puede saltearse ni falsificarse desde afuera.
- **El mensaje se envía por correo** a la casilla que se defina, identificando de qué formulario proviene: Contacto, Cotización de Prospectos o Cotización de Etiquetas.
- **El remitente queda configurado para responder**: al dar Responder, la respuesta va directo al mail de quien completó el formulario.
- **Hay una trampa anti-spam** invisible para el usuario, que evita tener que poner un captcha.
- **Si el envío no se concreta, el formulario lo informa** y muestra el teléfono y el mail de Neuhaus para que la persona pueda contactarse igual. Nunca se muestra una confirmación que no se corresponda con un envío real.

> **Para activarlos** falta crear la cuenta en el servicio de envío de correo (Resend, gratuito para este volumen) y definir a qué casilla llegan las consultas. Es un trámite de unos quince minutos, sin trabajo de programación asociado.

---

# Parte 6 — El trabajo de base

Lo que no se ve en pantalla, pero sostiene el resto. El porqué de la migración está en la Parte 1; acá va lo que se hizo sobre esa base.

## Las imágenes

Las fotos de planta son archivos de cámara de alta resolución. Se procesaron todas para web: redimensionadas, convertidas a formatos modernos y renombradas con nombres descriptivos —`impresion-offset-prospectos.webp` en lugar de un código de cámara—, porque el nombre del archivo también es una señal que Google lee.

Cada foto se sirve además en el tamaño que corresponde a cada pantalla: un celular no descarga la versión de escritorio.

> **Antes:** el material fotográfico del sitio pesaba **83 MB**. Solo el banner de la portada, **3,24 MB**.
>
> **Ahora:** **5,8 MB** en total. El banner de la portada, **43 KB**.

En celular, de donde llega la mayor parte del tráfico, es lo que separa una página que aparece de inmediato de una que se hace esperar.

## Un solo lugar para los datos de la empresa

> **Antes:** la dirección estaba escrita a mano en tres archivos distintos y el teléfono en dos.
>
> **Ahora:** dirección, teléfono, email, año de fundación, certificaciones y valoración de Google viven en **un único archivo**, del que se alimentan el pie de página, la página de Contacto, el mapa, los datos estructurados que lee Google y el resumen para buscadores con IA.

Se edita en un lugar y cambia en todo el sitio. Es lo que garantiza que ninguna página quede diciendo algo distinto de otra, algo que los buscadores verifican activamente al cruzar los datos de una empresa entre fuentes.

Lo mismo con la antigüedad de la empresa:

> **Antes:** el sitio daba **cinco cifras distintas** según la página — "45+", "más de 45 años", "más de 40 años", "cuatro décadas" y "desde 1979".
>
> **Ahora:** **1976** es el dato único del que se derivan todos los textos. La cuenta cierra —1976 + 50 = 2026— y no requiere mantenimiento manual el año que viene.

## Las vistas previas al compartir

> **Antes:** al compartir un link por WhatsApp o LinkedIn no aparecía ninguna imagen.
>
> **Ahora:** cada página muestra su título, su descripción y una **imagen de marca de 1200 × 630 px**.

Esas imágenes se **generan por código, una distinta por página**, con la identidad visual de Neuhaus: fondo azul de marca, nombre de la empresa, el título propio de esa página, las tres certificaciones y el dominio. El link de Calidad muestra *"La calidad no es un resultado. Es un proceso."*; el de Etiquetas, *"Etiquetas autoadhesivas en rollo."*

La ventaja de resolverlo así en vez de con una imagen fija: cada página comparte su propio mensaje, y no depende de producir una pieza de diseño aparte.

## Otros trabajos de base

**Las tipografías**

> **Antes:** se pedían a un servidor de Google en cada visita.
>
> **Ahora:** se sirven desde el propio sitio. Carga más rápida y sin desplazamiento del texto al terminar de cargar la fuente.

**Accesibilidad.** Todas las imágenes llevan descripción propia, los controles del carrusel se pueden operar sin mouse, hay un atajo para saltar directo al contenido y el HTML usa etiquetas con significado real —listas de verdad para la cadena de producción y los hitos históricos, fichas de definición para los datos técnicos de cada tecnología—. Sirve para personas que usan lectores de pantalla, y Google lo pondera como factor de calidad.

---

# Parte 7 — Para completar la puesta en marcha

El desarrollo está terminado y el sitio está publicado. Quedan dos definiciones, ninguna de las cuales requiere volver a tocar el código.

**1 · Activar los formularios.** Crear la cuenta en Resend, verificar el dominio de envío y definir a qué casilla llegan las consultas. Es lo único que separa a los formularios de estar operativos.

**2 · Definir el dominio oficial.** La recomendación es **`neuhaus.com.ar`**: es el dominio de las casillas de correo de la empresa, con lo cual el sitio queda alineado con la identidad que Neuhaus ya usa en toda su comunicación, y el `.com.ar` suma señal geográfica de Argentina para las búsquedas locales. `imprentaneuhaus.com` queda conectado por redirección. Requiere actualizar la URL en el perfil de Google Business. Los fundamentos están en el documento 2.

---

## Cierre

El sitio está terminado del lado del desarrollo: los cambios de contenido definidos con Neuhaus están todos aplicados, la base técnica soporta el trabajo de posicionamiento descripto en el documento 2, el sitio carga rápido y es legible tanto para Google como para los buscadores con IA.

**El detalle del trabajo de posicionamiento está en el documento "2 - Informe SEO y GEO".**
