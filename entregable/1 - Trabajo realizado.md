# Neuhaus S.A. — Sitio web
## Informe detallado del trabajo realizado

**Fecha:** 31 de julio de 2026
**Sitio:** imprentaneuhaus.com o neuhaus.com.ar (pendiente) — 6 páginas

Este documento recorre el sitio completo, página por página y sección por sección: qué hay en cada una, qué se incorporó en esta etapa y qué se mantuvo. Después explica el trabajo de base que no se ve pero sostiene todo lo demás.

El trabajo de posicionamiento en Google y en buscadores con IA va aparte, en el documento **"2 - Informe SEO y GEO"**.

---

## Cómo leer este documento

Cada sección del sitio está marcada según qué pasó con ella en esta etapa:

| Marca | Significado |
|---|---|
| ✏️ **Actualizado** | Se aplicaron los textos y ajustes definidos con Neuhaus |
| ✅ **Se mantiene** | Contenido y diseño quedaron como estaban |
| 🆕 **Nuevo** | Se incorporó en esta etapa |
| ➖ **Desactivado** | Se retiró de la vista a pedido de Neuhaus |

Vale una aclaración sobre "se mantiene": **el sitio se migró a una arquitectura nueva y se reescribió por completo.** Que una sección figure como "se mantiene" quiere decir que su contenido y su diseño quedaron iguales, no que no se haya trabajado sobre ella: todas se rehicieron, se optimizaron sus imágenes, se les cargaron descripciones propias y se definió qué parte corre en el servidor y qué parte en el navegador.

---

# Parte 1 — Resumen

El sitio se llevó a una base técnica nueva —**Next.js 16**— conservando las seis direcciones originales, de modo que ningún enlace deja de funcionar.

Sobre esa base se hicieron tres cosas:

**1. Se aplicaron los cambios de contenido de la planilla.** Todas las filas, incluida la última que había quedado abierta.

**2. Se sumó la capa de posicionamiento.** Metadata propia por página, datos estructurados de la empresa, mapa del sitio, resumen para buscadores con IA. Todo el detalle está en el documento 2.

**3. Se construyeron los formularios con procesamiento en el servidor.** Validación real y envío por correo de las tres consultas del sitio. *(Quedan pendientes las credenciales de envío — ver Parte 4.)*

En paralelo se unificaron los datos de la empresa en un único archivo del que se alimenta todo el sitio, y se optimizó el material fotográfico para web.

---

# Parte 2 — Elementos presentes en todas las páginas

### Encabezado (menú superior) — ✅ Se mantiene

Logo a la izquierda y navegación a la derecha: Inicio · Nosotros · Servicios (con desplegable: Prospectos & Impresos / Etiquetas Autoadhesivas) · Calidad · Contacto.

El menú es transparente sobre la foto del encabezado y se vuelve sólido al bajar. En celular se abre a pantalla completa. Marca en qué página estás.

### Pie de página — ✏️ Actualizado

Cuatro columnas: logo con descripción de la empresa, navegación, datos de contacto y redes sociales.

- El texto de presentación acompaña la antigüedad definida con Neuhaus: **"Más de 50 años de experiencia en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia."**
- Los datos de contacto —dirección completa con código postal, email y teléfono— salen del archivo único de datos de la empresa, verificados contra el perfil de Google Business.
- 🆕 Se incorporó el bloque de **4,7 estrellas · 20 opiniones en Google**, enlazado al perfil de la empresa.

Ese bloque de reseñas es prueba social que Neuhaus ya tiene ganada y que ahora aparece en las seis páginas.

---

# Parte 3 — Recorrido página por página

# 🏠 Inicio

## 1. Banner principal (carrusel) — ✏️ Actualizado

Tres pantallas que rotan solas cada 6 segundos, con barra de progreso arriba, flechas y puntos para navegar. Se pausa al pasar el mouse. Cada una tiene una foto de fondo, un rótulo, un título grande y un botón.

| | Rótulo | Título | Botón |
|---|---|---|---|
| 1 | Producción | **"Proceso de producción integrado, desde el archivo hasta el producto terminado."** | Ver servicios |
| 2 | Trayectoria | **"NEUHAUS 3G, continuidad de tercera generación."** | Conocé nuestra historia |
| 3 | Calidad y procesos | "Impresión bajo normas certificadas ISO, BPM y FSC." | Conocé nuestro enfoque |

Los dos primeros títulos son los definidos en la planilla. Se amplió el ancho del bloque de texto para que los títulos largos respiren mejor, y se ajustó el espaciado superior para que el contenido nunca se solape con el menú.

## 2. Franja de números — ✏️ Actualizado

Tres cifras que cuentan hacia arriba al aparecer en pantalla: **50+ Años de trayectoria** · **3 Certificaciones internacionales** · **100% Producción integrada**.

La antigüedad quedó en **50+**, según lo definido en la planilla.

## 3. Los dos servicios — ✅ Se mantiene

Dos paneles a pantalla partida, cada uno con su foto: **Prospectos & Impresos** y **Etiquetas**. Al pasar el mouse por uno, se agranda y el otro se achica; la foto hace un zoom lento y aparece el botón "Ver servicio". En celular quedan uno arriba del otro.

> 📌 **A definir.** En la planilla quedó un mensaje cortado sobre el título del panel "Prospectos & Impresos". Hace falta que Neuhaus confirme el texto exacto.

## 4. Tecnología y control en cada etapa — ➖ Desactivada

Eran cuatro tarjetas: Electronic Verification, Sistema Laetus, Cadena integrada y Escala flexible.

Se retiró de la vista tal como se indicó en la planilla. **La sección no se eliminó:** quedó guardada en el proyecto, así que reactivarla en el futuro es cuestión de minutos.

El criterio acompaña bien: ese contenido está desarrollado con mucho más detalle en la página de Calidad, y la portada gana foco sin él.

## 5. Sectores — ✏️ Actualizado

Una grilla de cuatro fotos en distintos tamaños. Cada una muestra el nombre del sector, y al pasar el mouse aparece la descripción.

**Título:** **"NEUHAUS, una marca instalada desde hace 50 años."**

**Bajada:** *"Desde multinacionales hasta pequeños productores locales, nuestra flexibilidad nos permite adaptarnos a la escala de nuestros clientes."*

**Los cuatro sectores:**

| Sector | Descripción |
|---|---|
| **Laboratorios & Farmacéuticas** | Calidad y precisión técnica para prospectos. Cumplimiento estricto de normas BPM e ISO 9001. |
| **Cosmética & Cuidado Personal** | Etiquetas de alta definición que destacan en góndola. Tintas UV, especiales y Stamping. |
| **Alimentos & Bebidas** | Materiales y adhesivos aptos para toda la cadena. Resistentes a humedad, fricción y frío. |
| **PyMEs y Emprendedores** | Tiradas medias y bajas para todo tipo de proyecto. |

Las descripciones de Laboratorios y PyMEs se ajustaron para que reflejen con precisión lo que produce la planta.

> 📌 **A definir.** En la tarjeta de Cosmética, confirmar si "acabados premium" queda así o se cambia por "barnizados" u otra opción.

## 6. Calidad certificada — ✅ Se mantiene

Una franja oscura sobre foto de planta, con los logos de **ISO 9001:2015**, **BPM** y **FSC® Cadena de Custodia** desplazándose en bucle continuo.

## 7. Cierre — ✅ Se mantiene

*"¿Tenés un proyecto en mente?"* con un botón grande hacia Contacto.

---

# 🏭 Nosotros

## 1. Encabezado — ✏️ Actualizado

Foto del equipo en planta a pantalla completa, con el título encima:

> **"Desde 1976, imprimiendo para la industria nacional."**

## 2. Nuestra historia — ✏️ Actualizado

**El diseño se rehízo como línea de tiempo.** En escritorio los tres hitos se despliegan horizontalmente, con el año en grande arriba, un punto sobre la línea y el texto abajo; en celular la línea baja en vertical. Se lee mucho mejor como cronología que como tarjetas sueltas.

**Bajada:** *"Más de cinco décadas de experiencia en la industria gráfica argentina."*

**Los hitos:**

**1976 — Fundación**
> "Empezamos como todas las pymes, como un pequeño taller gráfico dedicado a impresiones comerciales, pero nuestra seriedad y calidad nos llevaron a trabajar para grandes compañías."

**1987 — Neuhaus S.A.**
> "El gran volumen de trabajo, más el acceso al crédito y modernas tecnologías nos impulsaron a convertirnos en NEUHAUS SA Industria Gráfica."

**Hoy — Presente** ✅ *(sin cambios, como se indicó en la planilla)*
> "Fabricamos etiquetas autoadhesivas y prospectos —planos y en rollo— para diversas industrias. Respaldados por certificaciones ISO 9001, BPM y FSC, y tecnología de verificación electrónica en cada etapa del proceso."

## 3. Banner con la frase — ✏️ Actualizado

Franja a pantalla completa sobre una foto de impresión offset con efecto parallax: la foto se desplaza más lento que el texto al bajar.

**Este era el último punto abierto de la planilla.** Se confirmó que la sección queda, con la antigüedad actualizada:

> **"Nuestros más de 50 años de experiencia en el rubro se reflejan en cada trabajo."**

## 4. Objetivo, Proyección y Valores — ✏️ Actualizado

Dos tarjetas lado a lado y un bloque ancho debajo. **La sección se rehízo entera** con los textos definidos por Neuhaus.

**Objetivo**
> "Nuestro objetivo: responder con velocidad y calidad."
>
> "Con procesos 100% integrados, tecnología de verificación propia y control en cada etapa, garantizamos una respuesta ágil para la industria farmacéutica, cosmética y alimenticia, sin resignar precisión."

**Proyección**
> "Queremos seguir innovando en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia."
>
> "Buscamos expandir nuestra presencia en el mercado, consolidándonos como proveedores preferidos, ofreciendo productos de alta calidad y cumpliendo con los más altos estándares de seguridad y calidad."

**Valores:** quedaron **solo los cinco títulos**, como se indicó — Compromiso con la calidad · Innovación · Responsabilidad · Trabajo en equipo · Mejora continua.

Al ir sin descripciones, cinco títulos sueltos en una grilla amplia dejaban mucho espacio vacío. **Se rediseñaron como etiquetas compactas en una sola fila**, cada una con su punto. Se respeta el pedido y la sección queda visualmente resuelta.

## 5. Lo que nos representa — ➖ Desactivada

Eran cuatro tarjetas: Calidad de producto, Confianza sostenida, Atención personalizada y Mejora continua.

Se retiró de la vista según lo indicado en la planilla, que la marcaba como superpuesta con el bloque de Valores de la misma página. Igual que la otra, quedó guardada en el proyecto y no eliminada.

## 6. Nuestra planta — ✏️ Actualizado

Galería de **12 fotos de planta** en carrusel, con flechas a los costados y barra de progreso abajo. Muestra 3 fotos en escritorio, 2 en tablet y 1 en celular, con zoom al pasar el mouse.

El texto se mantiene. **Cada foto recibió su propia descripción** —"Impresora offset de la planta de Neuhaus", "Sector de terminación y doblado", "Departamento de calidad interno"—, lo que sirve tanto para lectores de pantalla como para que Google entienda qué muestra cada imagen.

También se ajustó el color de fondo, para sostener la alternancia visual de la página con las secciones desactivadas.

> 📌 **Material pendiente.** Neuhaus va a reemplazar estas fotos por otras de mayor calidad.

## 7. Certificaciones — ✏️ Actualizado

Tres tarjetas con el logo del organismo, el nombre y una explicación de qué garantiza cada certificación: **ISO 9001**, **BPM** y **FSC® Cadena de Custodia**.

Esta sección aparece tanto en Nosotros como en Calidad. **Se unificó en un único componente compartido** con una variante visual para cada página: cualquier corrección futura se hace una sola vez y se refleja en las dos, sin riesgo de que queden diciendo cosas distintas.

> 📌 **Material pendiente.** Faltan los logos de las certificaciones en alta calidad. Hoy BPM comparte el logo de IRAM con ISO 9001.

---

# 📄 Prospectos & Impresos

## 1. Encabezado — ✏️ Actualizado

> **"En Neuhaus, atendemos toda necesidad de impresión."**
> "Prospectos medicinales, folletería comercial, recetarios, revistas y anotadores. Tecnología offset, flexo y digital, múltiples formatos de entrega."

La bajada nombra ahora las tres tecnologías de la planta y los formatos de entrega, que son los dos ejes de decisión de un comprador.

## 2. Producción en pliegos — ✏️ Actualizado

Título grande, un párrafo al costado y una fila de etiquetas redondeadas con todo lo que se produce:

Prospectos medicinales · Prospectos cosméticos · Folletería comercial · Recetarios · Revistas y catálogos · Anotadores y blocks

Cierra con una etiqueta de borde punteado que dice **"¿Necesitás algo más?"** y lleva a Contacto.

El listado se depuró para que cada etiqueta represente una línea distinta, sin superposiciones, y el párrafo describe el alcance real del proceso: *"Todo el proceso dentro de nuestra planta, desde preprensa hasta entrega."*

## 3. Formatos de entrega — ✅ Se mantiene

Tres tarjetas: **Planos** (pliegos sin doblar), **Doblados** (procesados dentro de la planta) y **En bobina** (rollo continuo, compatible con líneas de envasado automatizadas).

Es una sección comercialmente fuerte: responde directo a cómo va a envasar el cliente.

## 4. Tecnologías — ✏️ Actualizado

Tres bloques grandes, alternando foto y texto de lado. Cada uno con su etiqueta de color, título, descripción y una ficha con dos datos: **Formato** e **Ideal para**.

| Tecnología | Formato | Ideal para | |
|---|---|---|---|
| **Offset** — alta resolución en pliegos, precisión de color y nitidez tipográfica | Pliego a pliego | Tirajes largos y medios | ✅ |
| **Flexo** — para tirajes que precisen terminación en bobina, alta velocidad y reproducibilidad constante | Terminación a bobina o pliego | Tirajes largos y medios | 🆕 **Nuevo** |
| **Digital** — sin planchas, sin mínimos elevados, para muestras y pruebas | Terminación a bobina | Muestras y bajo volumen | ✏️ |

**El bloque de Flexo se incorporó en esta etapa.** La flexografía es una de las capacidades centrales de la planta y ahora tiene su lugar propio junto a offset y digital.

El texto de Digital se reescribió para que describa el caso de uso en positivo —muestras, pruebas, bajo volumen— en lugar de definirse por contraste con offset.

> 📌 **Material pendiente.** El bloque de Flexo usa una foto genérica. Falta una foto real de la máquina.

## 5. Cada pliego, verificado — ✅ Se mantiene

Franja oscura con parallax sobre una foto de la línea de verificación:

> **"Cada pliego, verificado."**
> "Nuestro sistema Electronic Verification compara en tiempo real el pliego impreso contra el PDF aprobado por el cliente, detectando cualquier inconsistencia antes de que el trabajo avance."

Con un enlace a la página de Calidad. Es exactamente el tipo de afirmación concreta y verificable que buscan tanto un jefe de compras como los buscadores con IA.

## 6. Formulario de cotización — ✏️ Rediseñado

Los campos se replantearon para que una consulta llegue con todo lo necesario para cotizar sin una llamada previa:

| Campo | Tipo |
|---|---|
| Nombre completo | texto |
| Empresa | texto |
| Email | email |
| Teléfono | teléfono |
| Cantidad total | texto |
| Tamaño (ej: 210 × 297 mm) | texto |
| Cantidad de colores | texto |
| Terminación | Plano / Doblado simple / Doblado múltiple |
| Mensaje adicional | opcional |

Botón: **"Solicitar cotización"**.

---

# 🏷️ Etiquetas Autoadhesivas

## 1. Encabezado — ✅ Se mantiene

> **"Etiquetas para la Industria Farmacéutica, Cosmética, Alimenticia y demás."**
> "Impresión flexográfica UV de alta definición. Desde tirajes cortos a medios y largos: la solución perfecta para cualquier productor."

## 2. Impresión de bobina a bobina — ✅ Se mantiene

Título grande y una fila de etiquetas: Etiquetas en BOPP · Martelé · Ilustración · Industria Farmacéutica · Cosmética · Alimenticia · Vinícola, más el **"¿Necesitás algo más?"** hacia Contacto.

## 3. Para cualquier escala — ✅ Se mantiene

Dos tarjetas que muestran que la planta cubre los dos extremos:

- **Grandes volúmenes** — tiradas largas para consumo masivo, con control de color y trazabilidad *(farmacéutica, cosmética y alimenticia)*
- **Tirajes cortos** — pequeños volúmenes adaptados a la necesidad del cliente *(emprendedores, pymes y productores artesanales)*

## 4. Impresión flexográfica de alta definición — ✅ Se mantiene

Foto de etiquetas terminadas junto a un texto sobre tintas UV y resistencia al roce y la manipulación.

## 5. Formulario de cotización — ✏️ Rediseñado

Mismo criterio que en Prospectos, con los campos propios de etiquetas:

| Campo | Tipo |
|---|---|
| Nombre completo · Empresa · Email · Teléfono | — |
| Cantidad total | texto |
| Tamaño de etiqueta (ej: 50 × 30 mm) | texto |
| Cantidad de colores | texto |
| **Sustrato** | BOPP blanco / BOPP transparente / BOPP metalizado / Ilustración / Martelé / Otro |
| Mensaje adicional | opcional |

> 💡 **Oportunidad.** Esta página no tiene una sección dedicada al control de calidad, que es el diferenciador más fuerte de Neuhaus — Prospectos sí la tiene ("Cada pliego, verificado").
>
> Existe una sección ya escrita para esto, *"Código de barras verificado en cada etiqueta"*, sobre la verificación Laetus aplicada a cada unidad producida. Incorporarla es trabajo menor y le suma a la página el argumento técnico que hoy le falta. **Queda a definición de Neuhaus.**

---

# ✅ Calidad

## 1. Encabezado — ✏️ Actualizado

> **"La calidad no es un resultado. Es un proceso."**

Queda solo el título, sin bajada, como se indicó en la planilla. Gana contundencia.

## 2. Nuestro Sistema — ✏️ Actualizado

Texto a la izquierda, foto a la derecha:

> "En Neuhaus entendemos que los errores cuestan caro: un prospecto manchado, un código de barras que no funciona o una etiqueta ilegible pueden tener consecuencias de impacto.
>
> Por eso construimos un sistema de control integrado en cada etapa del proceso, con tecnología específica para la detección de errores y un departamento de calidad propio dentro de la planta, para poder detectar y evitar hasta el más mínimo error."

## 3. Sistemas de control — ✏️ Actualizado

Tres tarjetas desplegables. Cada una muestra una foto con el nombre encima y un botón "Quiero saber más" que abre la explicación.

**Electronic Verification**
> "Compara en tiempo real cada pliego impreso contra el PDF aprobado por el cliente. Cualquier diferencia —tipográfica, cromática o estructural— es detectada y separada antes de que el trabajo avance en la línea de producción."

**Sistema Laetus**
> "Lector integrado en las dobladoras que verifica la legibilidad del código de barras en cada pliego individual. Si el código no se lee correctamente, el pliego es detectado y separado automáticamente."

**Departamento de Calidad**
> "Equipo propio dentro de la planta que supervisa cada etapa del proceso. No tercerizamos el control. Desde preprensa hasta despacho, todo es auditado internamente."

Siguiendo la indicación de la planilla, la descripción del sistema Laetus se precisó en todo el sitio: **verifica códigos de barras**. Es un dato técnico que un comprador del sector reconoce, y ahora está expresado con exactitud en las cinco menciones que tiene el sitio.

## 4. Certificados por los organismos más exigentes — ✅ Se mantiene

Las mismas tres tarjetas de certificaciones de la página Nosotros —ahora compartidas desde un único componente—, más un bloque para **descargar la Política de Calidad en PDF**.

## 5. Cadena de producción integrada — ✏️ Actualizado

Franja oscura con parallax donde los pasos del proceso se encadenan con flechas: horizontal en escritorio, vertical en celular.

**La secuencia se detalló a nueve pasos**, separando los controles EV y Laetus en etapas propias para reflejar el proceso real de la planta:

> Recepción de diseño → Preprensa → **Control EV al primer pliego impreso** → Impresión → **Control EV** → Doblado / Terminación → **Control de lectura Laetus a código de barras** → Acondicionado en cajas → Entrega

Cierra con: *"Todo el proceso ocurre dentro de nuestra planta. Sin tercerizar. Sin puntos ciegos. Con trazabilidad completa en cada etapa de producción."*

Que **tres de los nueve pasos sean controles de calidad** es, en sí mismo, el argumento de venta de la página.

## 6. Cierre — ✅ Se mantiene

*"¿Buscás una solución gráfica a medida? Hablemos de tu proyecto."* con botón hacia Contacto.

---

# 📞 Contacto

## 1. Encabezado — ✅ Se mantiene

> **"Hablemos de tu proyecto."**
> "Completá el formulario o escribinos directamente. Te respondemos a la brevedad."

## 2. Formulario — ✏️ Rediseñado por dentro

Mismo formulario a la vista, con procesamiento en el servidor. El detalle está en la Parte 4.

## 3. Datos de contacto — ✏️ Actualizado

Dirección, email, teléfono, redes sociales, reseñas y mapa.

- **Dirección completa con código postal:** Colombres 1065, Boedo, C1238AAA, CABA
- **Teléfono en formato internacional** —+54 11 4925-6364— con enlace directo para llamar desde el celular
- **Mapa** apuntando a la ubicación exacta
- 🆕 **Bloque de reseñas:** **4,7 ★ · 20 opiniones en Google**, enlazado al perfil

Todos esos datos salen del archivo único de la empresa y están verificados contra el perfil de Google Business, que es la referencia que usan los buscadores para confirmar la identidad de una empresa.

**Se mantienen** los tres enlaces a redes: LinkedIn, Facebook e Instagram.

---

# Parte 4 — Los formularios

Los tres formularios del sitio —Contacto, cotización de Prospectos y cotización de Etiquetas— se construyeron sobre el mismo motor, procesado en el servidor.

**Cómo funcionan:**

- **La validación corre en el servidor**, no en el navegador, de modo que no puede saltearse ni falsificarse desde afuera.
- **El mensaje se envía por correo** a la casilla que se defina, identificando de qué formulario proviene: Contacto, Cotización de Prospectos o Cotización de Etiquetas.
- **El remitente queda configurado para responder**: al dar Responder, la respuesta va directo al mail de quien completó el formulario.
- **Hay una trampa anti-spam** invisible para el usuario, que evita tener que poner un captcha.
- **Si el envío no se concreta, el formulario lo informa** y muestra el teléfono y el mail de Neuhaus para que la persona pueda contactarse igual. Nunca se muestra una confirmación que no se corresponda con un envío real.

> ⚠️ **Pendiente para activarlos.** Falta crear la cuenta en el servicio de envío de correo (Resend, gratuito para este volumen) y definir a qué casilla llegan las consultas. Son unos quince minutos de trámite, sin trabajo de programación asociado.
>
> Hasta que esté configurado, los formularios muestran el mensaje con los datos de contacto directo en lugar de una confirmación de envío.

---

# Parte 5 — El trabajo de base

## La migración

El sitio se llevó a **Next.js 16**, el framework de referencia para sitios cuyo objetivo es posicionar. Es una reescritura completa del proyecto, manteniendo el diseño y sumando la capa que hace posible el trabajo de SEO y GEO.

La diferencia de fondo: las páginas se **generan completas de antemano**, no dentro del navegador de quien las visita. Quien las pide —una persona, Google o ChatGPT— recibe el documento entero de una, con todo el texto adentro. Es lo que permite que los buscadores con inteligencia artificial puedan leer el sitio, porque sus rastreadores no ejecutan JavaScript.

**Las seis direcciones se conservaron intactas.** `/nosotros` sigue siendo `/nosotros`. Fue una condición de la migración: mantener las direcciones significa conservar la autoridad que Google ya le reconoce a cada página y que ningún enlace externo se rompa. No hizo falta una sola redirección.

## Las imágenes

Las fotos de planta son archivos de cámara de alta resolución. Se procesaron todas para web: redimensionadas, convertidas a formatos modernos y renombradas con nombres descriptivos —`impresion-offset-prospectos.webp` en lugar de un código de cámara—, porque el nombre del archivo también es una señal que Google lee.

Cada foto se sirve además en el tamaño que corresponde a cada pantalla: un celular no descarga la versión de escritorio.

**El sitio completo quedó en 5,8 MB de imágenes, y el banner principal de la portada pesa 43 KB.** En celular, de donde llega la mayor parte del tráfico, es lo que separa una página que aparece de inmediato de una que se hace esperar.

## Un solo lugar para los datos de la empresa

Dirección, teléfono, email, año de fundación, certificaciones y valoración de Google viven en **un único archivo** del que se alimentan el pie de página, la página de Contacto, el mapa, los datos estructurados que lee Google y el resumen para buscadores con IA.

Se edita en un lugar y cambia en todo el sitio. Es lo que garantiza que ninguna página quede diciendo algo distinto de otra, algo que los buscadores verifican activamente al cruzar los datos de una empresa entre fuentes.

El mismo criterio se aplicó a la antigüedad: **1976** es el dato único del que se derivan todos los textos del sitio. La cuenta cierra —1976 + 50 = 2026— y no requiere mantenimiento manual el año que viene.

## Las vistas previas al compartir

Cuando alguien pasa un link del sitio por WhatsApp, LinkedIn o Slack, la vista previa muestra el título, la descripción y una **imagen de marca de 1200 × 630 px**.

Esas imágenes se **generan por código, una distinta por página**, con la identidad visual de Neuhaus: fondo azul de marca, nombre de la empresa, el título propio de esa página, las tres certificaciones y el dominio. El link de Calidad muestra *"La calidad no es un resultado. Es un proceso."*; el de Etiquetas, *"Etiquetas autoadhesivas en rollo."*

La ventaja de resolverlo así en vez de con una imagen fija: cada página comparte su propio mensaje, y no depende de producir una pieza de diseño aparte. Si más adelante Neuhaus quiere reemplazarlas por material propio, se sustituyen sin tocar nada más.

## Otros trabajos de base

**Las tipografías** se sirven desde el propio sitio en lugar de solicitarlas a un servidor externo en cada visita. Carga más rápida y sin desplazamiento del texto al terminar de cargar la fuente.

**Accesibilidad.** Todas las imágenes llevan descripción propia, los controles del carrusel se pueden operar sin mouse, hay un atajo para saltar directo al contenido y el HTML usa etiquetas con significado real —listas de verdad para la cadena de producción y los hitos históricos, fichas de definición para los datos técnicos de cada tecnología—. Sirve para personas que usan lectores de pantalla, y Google lo pondera como factor de calidad.

---

# Parte 6 — Qué falta

**El desarrollo está terminado.** Lo que sigue son definiciones, trámites y materiales.

## Para poder publicar

| Qué | Quién | Detalle |
|---|---|---|
| **Casilla de los formularios** | Neuhaus | ¿A qué mail llegan las consultas? ¿Copia a alguien más? |
| **Cuenta de envío de correo** | Neuhaus + nosotros | Crear la cuenta en Resend y verificar el dominio. Gratis para este volumen |
| **Hosting** | Neuhaus | Recomendación: Vercel — se publica en minutos y está pensado para esta tecnología |
| **Dominio oficial** | Neuhaus | **Recomendación: `neuhaus.com.ar`** — es el dominio de las casillas de correo de la empresa, y `.com.ar` suma señal geográfica de Argentina. `imprentaneuhaus.com` queda redirigiendo. Requiere actualizar la URL en el perfil de Google Business. Fundamentos en el documento 2 |

## Materiales de Neuhaus

- **Fotos propias para los sectores** de la portada: prospectos para Laboratorios, etiqueta para Cosmética, etiqueta para Alimentos
- **Foto de la máquina flexográfica** para el bloque nuevo de Tecnologías
- **Logos de las certificaciones** ISO 9001, BPM y FSC en alta calidad
- **Fotos de planta de mayor calidad** para la galería de Nosotros

## Definiciones de contenido

- **Título del panel "Prospectos & Impresos"** en la portada: quedó un mensaje cortado en la planilla
- **"Acabados premium"** en la tarjeta de Cosmética: ¿queda o se cambia por "barnizados"?
- **Sección de control de calidad en Etiquetas**: incorporar o no la sección ya escrita
- **"NEUHAUS 3G"**: confirmar si es un claim oficial y permanente. Ya está cargado como nombre alternativo de la empresa en los datos que lee Google
- **Preguntas frecuentes**: la estructura técnica está lista, faltan las preguntas. Es el formato que más citan los buscadores con IA *(ver documento 2)*
- **Fichas técnicas por servicio**: sustratos, gramajes, tamaños, tirajes mínimos y máximos, tiempos de entrega. Es lo primero que consulta un jefe de compras
- **Bots de inteligencia artificial**: el sitio les permite leer el contenido. Es una decisión de negocio y conviene tomarla a conciencia *(ver documento 2)*

---

## Cierre

El sitio está terminado del lado del desarrollo: los cambios de contenido definidos con Neuhaus están todos aplicados, la base técnica soporta el trabajo de posicionamiento descripto en el documento 2, el sitio carga rápido y es legible tanto para Google como para los buscadores con IA.

Lo que falta para publicarlo son cuatro definiciones, un conjunto de materiales fotográficos y algunas confirmaciones de contenido. Ninguna requiere volver a tocar el código.

**El detalle del trabajo de posicionamiento está en el documento "2 - Informe SEO y GEO".**
