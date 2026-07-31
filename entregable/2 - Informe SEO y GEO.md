# Neuhaus S.A. — Sitio web
## Informe de posicionamiento: Google y buscadores con IA

**Fecha:** 31 de julio de 2026
**Dominio:** imprentaneuhaus.com

Este documento explica el trabajo de posicionamiento hecho sobre el sitio: qué se implementó, por qué, y qué depende de Neuhaus para completarlo. Las cifras están medidas sobre la versión final del sitio, no estimadas.

Va acompañado del documento **"1 - Trabajo realizado"**, que cuenta el resto del proyecto.

---

## Antes de empezar: dos siglas

**SEO** es posicionarse en Google. Es lo conocido.

**GEO** es lo nuevo: posicionarse en **ChatGPT, Perplexity, Gemini, Claude y los resúmenes con IA que Google muestra arriba de todo**. Cada vez más gente busca proveedores preguntándole a un asistente en lugar de escribir en Google. Cuando un jefe de compras de un laboratorio pregunta *"¿qué imprentas en Argentina hacen prospectos medicinales con control de calidad?"*, el objetivo es que Neuhaus aparezca en esa respuesta.

Es un canal joven, y esa es justamente la oportunidad: **la competencia todavía no está ahí**.

---

# 1. El punto de partida

El sitio anterior tenía tres problemas que hacían inviable cualquier trabajo de posicionamiento.

**Las seis páginas compartían un solo título y una sola descripción.** Google mostraba el mismo texto para todas. Una persona que buscaba "etiquetas autoadhesivas" y otra que buscaba "prospectos medicinales" veían exactamente el mismo resultado, sin nada que les dijera que esa página respondía a lo suyo.

**El contenido no viajaba en la página.** El sitio se armaba dentro del navegador del visitante. Google es capaz de esperar a que eso ocurra, pero lo hace en una cola aparte que demora. Y hay un grupo entero que directamente no espera.

**Los buscadores con IA no ejecutan ese proceso.** GPTBot (ChatGPT), ClaudeBot, PerplexityBot y los demás piden la página, reciben un documento vacío y se van. Para ellos **Neuhaus no existía**. Lo mismo pasaba con WhatsApp y LinkedIn al compartir un link: sin título útil, sin descripción, sin imagen.

Esto último es lo que hace que la reconstrucción del sitio no haya sido una decisión técnica sino comercial: **era la condición para poder hacer todo lo demás.**

---

# 2. La base: páginas que se leen solas

Las seis páginas del sitio ahora se generan **completas y de antemano**. Quien las pida —una persona, Google, ChatGPT o WhatsApp— recibe el documento entero, con todo el texto, los títulos y los datos de la empresa adentro.

| Quién visita | Antes recibía | Ahora recibe |
|---|---|---|
| Google | Página vacía + espera en cola de renderizado | Página completa, indexa directo |
| Bing | Página vacía | Página completa |
| **ChatGPT, Claude, Perplexity** | **Nada** | **Página completa** |
| WhatsApp, LinkedIn, Slack | Vista previa rota | Título y descripción correctos por página |

Y esto es lo que hay hoy en cada página, medido sobre el sitio real:

| Página | Palabras de texto |
|---|---:|
| Inicio | 361 |
| Prospectos | 383 |
| Etiquetas | 276 |
| Calidad | 354 |
| Nosotros | 706 |
| Contacto | 162 |

Cada página tiene un único título principal y una jerarquía ordenada de subtítulos por debajo. Es la estructura que un buscador usa para entender de qué trata cada parte del contenido.

---

# 3. Por qué palabras se compite

Acá hay una decisión estratégica que conviene explicar, porque va en contra de la intuición.

**No se apunta a las búsquedas con más volumen. Se apunta a las que traen clientes.**

"Imprenta Buenos Aires" tiene miles de búsquedas por mes y miles de competidores. Pero la mayoría de esas búsquedas son de alguien que quiere cien tarjetas personales o un folleto suelto: consultas que ocupan tiempo de Neuhaus y no terminan en nada.

"Impresión de prospectos medicinales con verificación electrónica" tiene poquísimas búsquedas por mes. Pero **cada una es un laboratorio con presupuesto asignado buscando un proveedor**.

La segmentación apunta al segundo caso:

| Página | Búsqueda principal | Búsquedas secundarias |
|---|---|---|
| Inicio | imprenta industrial Buenos Aires | industria gráfica Argentina · imprenta para laboratorios · impresión offset y flexográfica |
| Prospectos | prospectos medicinales impresión | impresión de prospectos farmacéuticos · prospectos plegados laboratorio |
| Etiquetas | etiquetas autoadhesivas Buenos Aires | etiquetas en rollo flexográficas · etiquetas BOPP · etiquetas cosmética y alimentos |
| Calidad | control de calidad impresión farmacéutica | Electronic Verification imprenta · sistema Laetus · BPM impresión · ISO 9001 gráfica |
| Nosotros | Neuhaus S.A. industria gráfica | imprenta familiar Buenos Aires · imprenta Boedo |
| Contacto | imprenta Boedo CABA | presupuesto impresión prospectos · cotizar etiquetas autoadhesivas |

Cada término está reflejado en el título de la página, en su encabezado y en el cuerpo del texto, sin repetirlo forzadamente.

---

# 4. Lo que se ve en Google

Cada página declara ahora su propio título y su propia descripción. Estos son los títulos reales que emite el sitio:

| Página | Título en Google |
|---|---|
| Inicio | Neuhaus S.A. — Imprenta industrial en Buenos Aires |
| Prospectos | Impresión de prospectos medicinales \| Neuhaus S.A. |
| Etiquetas | Etiquetas autoadhesivas en rollo \| Neuhaus S.A. |
| Calidad | Control de calidad en impresión farmacéutica \| Neuhaus S.A. |
| Nosotros | Nosotros — Industria gráfica familiar en Boedo \| Neuhaus S.A. |
| Contacto | Contacto — Cotizá tu impresión \| Neuhaus S.A. |

Cada página declara además cuál es su dirección oficial —para que Google no dude entre versiones con y sin `www`, con y sin `https`— y se le autoriza explícitamente a mostrar imágenes grandes y descripciones largas en los resultados.

Todas esas direcciones se derivan de un único lugar en el código. Si algún día cambia el dominio, se cambia ahí y se actualiza todo: los enlaces oficiales, las vistas previas al compartir y el mapa del sitio. No hay forma de que queden desincronizados.

> **Un ajuste menor pendiente:** cuatro de las seis descripciones son más largas que lo que Google muestra (unos 155 caracteres) y se ven cortadas en el resultado. No es una penalización, pero conviene recortarlas para controlar exactamente qué texto se lee.

---

# 5. Los datos de la empresa, en formato que las máquinas entienden

Además del texto que lee una persona, el sitio publica ahora una ficha de datos estructurada que solo leen las máquinas. Es lo que alimenta el panel de empresa que Google muestra a la derecha de los resultados, y lo que permite que aparezcan las migas de navegación y la valoración con estrellas dentro del resultado.

Ahí están declarados, sin ambigüedad: razón social, año de fundación (1976), dirección completa con código postal, coordenadas, teléfono, mail, horarios, zona de servicio, las certificaciones **ISO 9001, BPM y FSC**, las **4,7 estrellas con 20 reseñas** del perfil de Google, y "NEUHAUS 3G" como nombre alternativo de la marca.

Las páginas de Prospectos y Etiquetas declaran además cada línea de producción como un servicio, con su tipo, su zona de cobertura y su público (empresas, no consumidor final).

Todo esto cumple una tercera función además de las dos obvias, y es la que conecta con la sección siguiente: **le da a los buscadores con IA los hechos de la empresa en un formato que pueden citar sin tener que deducirlos de un texto de marketing.**

---

# 6. Cómo encuentra Google todas las páginas

**El mapa del sitio** (`sitemap.xml`) se genera solo desde el código, con las seis direcciones, su fecha de última modificación y una prioridad diferenciada: las dos páginas de servicio están declaradas por encima de las institucionales, porque son las que tienen intención comercial.

**El archivo de instrucciones para buscadores** (`robots.txt`) también se genera solo, y apunta al mapa del sitio.

Los dos derivan del mismo dominio único que el resto de la metadata, así que no pueden quedar desalineados.

## El dominio: una decisión importante

**`imprentaneuhaus.com` es el dominio oficial.** Es el que figura en el perfil de Google Business de Neuhaus, así que es donde ya está acumulada toda la señal de marca que existe hoy.

**`neuhaus.com.ar` tiene que redirigir hacia él, con una redirección permanente y conservando la ruta** (`neuhaus.com.ar/calidad` tiene que ir a `imprentaneuhaus.com/calidad`, no a la portada).

La diferencia no es un detalle. Una redirección permanente **traspasa** al dominio oficial toda la autoridad acumulada por el viejo. En cambio, dos dominios sirviendo el mismo contenido en paralelo **parten esa autoridad al medio** y dejan que Google elija por su cuenta cuál mostrar. Es de las pocas cosas que pueden anular buena parte del trabajo si se configura mal.

Esto se resuelve al definir el hosting; es configuración de dominio, no de código. Los mails `@neuhaus.com.ar` siguen funcionando igual: el dominio del correo y el del sitio son independientes.

---

# 7. GEO: aparecer en ChatGPT, Perplexity y Gemini

## Lo primero es poder ser leído

Ya está resuelto, y es la condición de todo lo demás: los buscadores con IA no ejecutan el proceso que armaba el sitio anterior. Sin páginas completas de entrada, ninguna otra táctica de esta sección tendría efecto, porque el agente nunca llegaría a ver contenido.

## Permiso explícito para los bots de IA

El sitio autoriza por nombre a los rastreadores de OpenAI, Anthropic, Perplexity, Google, Apple, Amazon y Meta.

> ⚠️ **Esto es una decisión de negocio, no técnica, y conviene que Neuhaus la tome a conciencia.**
>
> Permitirlos significa que el contenido del sitio puede usarse tanto para **citar a Neuhaus en una respuesta** como para **entrenar** esos modelos. Para una empresa B2B cuyo objetivo es que la encuentren compradores industriales, el beneficio de aparecer supera claramente al costo: el contenido del sitio es material comercial público, no información sensible.
>
> Está habilitado por defecto porque es lo que conviene, pero es reversible en cualquier momento y en un minuto.

## Un resumen escrito para las máquinas

El sitio publica un archivo (`/llms.txt`) con un resumen ordenado de qué es Neuhaus, qué produce, con qué tecnologías, cómo controla la calidad, a qué sectores provee y un índice de páginas. Es una convención nueva, todavía no adoptada por todos los proveedores, que se incluyó porque no cuesta nada y cada vez se lee más.

## Escribir cosas que se puedan citar

Los modelos de IA citan **datos concretos y verificables**, no afirmaciones de marketing. La diferencia práctica:

| Lo que no se cita | Lo que sí se cita |
|---|---|
| "Somos líderes en calidad" | "Cada pliego se compara contra el PDF aprobado mediante verificación electrónica antes de avanzar en la línea" |
| "Muchos años de experiencia" | "Fundada en 1976 en Boedo, CABA; tercera generación familiar" |
| "Las mejores certificaciones" | "Certificaciones ISO 9001, BPM y FSC" |

Los textos del sitio siguen ese criterio, y la ficha de datos de la sección 5 publica esos hechos ya masticados.

## El HTML también dice qué es cada cosa

La cadena de producción y los hitos históricos están marcados como listas ordenadas de verdad. Las fichas técnicas de cada tecnología de impresión, como fichas de definición. Los listados de productos y certificaciones, como listas. Suena a detalle, pero es lo que permite que un extractor automático entienda "esto es una secuencia de nueve pasos de proceso" en lugar de recibir nueve cajas sin relación entre sí.

## Lo que queda por hacer acá

**Preguntas frecuentes.** El formato pregunta-respuesta es, con diferencia, el más citado por los buscadores con IA: cada respuesta es un fragmento autocontenido, listo para copiar en una respuesta. La parte técnica está lista; **falta redactar y aprobar 5 a 7 preguntas** para Inicio, Prospectos, Etiquetas y Calidad. Es el ítem de mayor impacto que queda pendiente en todo el informe.

Ideas del tipo: *¿Qué tirajes mínimos manejan? ¿Qué normativa cumplen los prospectos para ANMAT? ¿Cuánto demora una entrega? ¿Qué sustratos usan para etiquetas de cosmética? ¿Qué es la verificación electrónica y qué garantiza?*

**Fichas técnicas por servicio.** Sustratos, gramajes, tamaños, tirajes mínimos y máximos, tiempos de entrega. Es exactamente lo que busca un jefe de compras antes de pedir una cotización, y hoy no está en el sitio. Doble beneficio: filtra consultas que no encajan y le da a la IA datos duros para citar.

## Cómo se mide

No existe una consola de métricas para IA como la hay para Google. Se mide de tres formas: consultando manualmente cada mes en ChatGPT, Perplexity y Gemini con un set fijo de preguntas del sector; mirando en las analíticas cuántas visitas llegan derivadas desde esos sitios; y revisando en los registros del servidor la actividad de esos rastreadores.

---

# 8. Búsqueda local

Neuhaus le vende a laboratorios del AMBA. La búsqueda local es un canal directo y hoy está desatendido.

**Los datos oficiales, definitivos:**

> **Neuhaus S.A. — Industria Gráfica**
> Colombres 1065, Boedo, C1238AAA, Ciudad Autónoma de Buenos Aires, Argentina
> +54 11 4925-6364
> imprentaneuhaus.com

Ese bloque es la fuente de verdad. Tiene que aparecer **idéntico, carácter por carácter**, en el sitio, en Google Business, en LinkedIn, en Facebook, en Instagram y en cualquier directorio. Google cruza esos datos entre fuentes para confirmar que la empresa existe y está donde dice: cada variación resta confianza.

**Lo que se corrigió en el sitio:**
- El teléfono tenía un dígito mal (4925-63**63**). Corregido en el texto visible y en el link que marca desde el celular.
- Se agregó el código postal completo, que faltaba.
- El mapa apuntaba a "Colomb**e**s 1065", con la calle mal escrita.
- Se cargaron las 4,7 estrellas y las 20 reseñas en la ficha de datos de la empresa.

**Lo que depende de la gestión de Neuhaus:**

1. **Completar el perfil de Google Business**: categoría correcta ("Imprenta" / "Servicio de impresión comercial"), horarios, descripción con las palabras clave del punto 3, productos y servicios cargados, y fotos de planta (hay 48 disponibles del material que ya se procesó).
2. **Pedir reseñas a clientes recurrentes.** Es el factor número uno del ranking en el paquete local de Google, y además cada reseña es texto de un tercero que la IA puede citar. Hay 20; llegar a 50 cambia el panorama.
3. **Las reseñas ya se muestran en el sitio.** El sitio anterior no las mostraba en ningún lado; ahora las 4,7 estrellas con 20 opiniones aparecen en el pie de página —o sea, en las seis páginas— y en la página de Contacto, enlazadas al perfil de Google. Falta solamente sumarlas al cuerpo de la portada, que es donde más peso tienen.
4. **Crear la entidad de la empresa en Wikidata.** Es la base de datos pública de la que se alimentan tanto el panel de conocimiento de Google como los modelos de IA. Tiene una influencia desproporcionada respecto de lo que cuesta hacerlo.
5. **Directorios sectoriales**: Cámara Argentina de la Industria Gráfica, guías de proveedores farmacéuticos. Los buscadores con IA ponderan mucho las fuentes de terceros — a veces más que el sitio propio.

---

# 9. Resumen del estado

| | Estado |
|---|---|
| Páginas legibles por Google, Bing y buscadores con IA | ✅ Hecho |
| Título y descripción propios en las 6 páginas | ✅ Hecho |
| Direcciones oficiales, vistas previas al compartir | ✅ Hecho |
| Ficha de datos estructurada de la empresa | ✅ Hecho |
| Mapa del sitio e instrucciones para buscadores | ✅ Hecho |
| Resumen para buscadores con IA (`llms.txt`) | ✅ Hecho |
| Permiso a los bots de IA | ✅ Hecho — **falta la aprobación formal de Neuhaus** |
| Datos de contacto corregidos y unificados | ✅ Hecho |
| Velocidad de carga | ✅ Hecho — imágenes de 70 MB a 5,8 MB |
| Redirección de `neuhaus.com.ar` | ⛔ Al definir el hosting |
| Alta en Google Search Console y envío del mapa | ⛔ Al publicar |
| Imagen de vista previa al compartir | ⛔ Falta la pieza de diseño |
| Preguntas frecuentes | ⛔ **Falta redactar y aprobar** — mayor impacto pendiente |
| Fichas técnicas por servicio | ⛔ Faltan los datos de Neuhaus |
| Perfil de Google Business, reseñas, Wikidata, directorios | ⛔ Gestión de Neuhaus |

---

## Una aclaración honesta sobre plazos

El posicionamiento no es inmediato. Google tarda entre **cuatro y ocho semanas** en reindexar bien un sitio rehecho y empezar a mostrar los cambios en los resultados. Los buscadores con IA actualizan su información en ciclos propios que no son públicos.

Lo que sí es inmediato desde el día uno: **el sitio carga rápido, los formularios llegan, los datos de contacto son correctos y los links compartidos se ven bien**. Eso ya convierte visitas que hoy se pierden.

Y hay algo que conviene decir con todas las letras: por más trabajo técnico que se haga, **los tres factores de mayor peso para una empresa como Neuhaus dependen de la gestión, no del código**: las reseñas en Google, el perfil de Business completo y las fichas técnicas reales de lo que produce la planta. La base ya está construida para sostenerlos.
