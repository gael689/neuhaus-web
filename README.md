# Neuhaus S.A. — sitio web

Sitio institucional de **Neuhaus S.A. Industria Gráfica** (Colombres 1065, Boedo,
CABA): prospectos medicinales, etiquetas autoadhesivas, calidad y contacto.

En producción: **https://www.neuhaus.com.ar**

---

## Dónde está el código

La aplicación vive en **`neuhaus-next/`**, no en la raíz del repo.

Vercel tiene el *Root Directory* del proyecto apuntado a `neuhaus-next`, así que de
ahí sale todo build.

> ⚠️ **Si alguna vez se mueve la app a la raíz, hay que cambiar ese setting en el
> panel de Vercel en el mismo movimiento**, o el siguiente deploy falla buscando un
> directorio que ya no existe. No es un detalle de prolijidad: es la única razón por
> la que la app está anidada.

## Arranque

```bash
git clone https://github.com/gael689/neuhaus-web.git
cd neuhaus-web/neuhaus-next
npm install
cp .env.example .env.local   # completar (ver "Variables de entorno")
npm run dev                  # localhost:3000
```

El stack, la estructura del código y las convenciones están en
[`neuhaus-next/README.md`](neuhaus-next/README.md). Leerlo antes de tocar nada.

---

## Cómo se despliega

El repo está conectado a Vercel por la integración de GitHub. **No hay pipeline
propio, ni GitHub Actions, ni paso manual.**

**Un push a `main` sale a producción**, automático e inmediato. El proyecto no
genera deploys de preview: lo que entra a `main` es lo que ven los visitantes, sin
escala intermedia.

Esto vale para **cualquiera con permiso de push al repo**, tenga o no cuenta en el
Vercel donde vive el proyecto. Acceso al repo = poder deployar a producción.

**Por eso conviene verificar antes de pushear**, que es la única instancia previa
que hay:

```bash
cd neuhaus-next
npm run dev     # revisar el cambio en localhost:3000
npm run build   # que compile limpio; si falla acá, falla en Vercel
```

### Si un deploy falla

Un build fallido **no tira abajo el sitio**: Vercel sigue sirviendo el último
deployment bueno. Hay tiempo para arreglar y volver a pushear.

---

## Variables de entorno

**No están en el repo y no se commitean.** Viven en Vercel (*Project Settings →
Environment Variables*) y, para desarrollo, en un `.env.local` local que está
gitignoreado.

Las que necesita el proyecto están documentadas en
[`neuhaus-next/.env.example`](neuhaus-next/.env.example). Sin `RESEND_API_KEY` y
`CONTACTO_EMAIL_FROM` los formularios no envían nada — y lo dicen con un error real,
no fingen éxito.

Si trabajás en local sin esas variables, los formularios van a fallar a propósito.
Es el comportamiento correcto, no un bug.

---

## Convenciones que no se negocian

- **`neuhaus-next/src/lib/site.ts` es la única fuente de verdad** de los datos de la
  empresa: dirección, teléfono, mail, dominio, año de fundación, redes,
  certificaciones. No duplicar ninguno de esos datos dentro de un componente. La
  versión anterior del sitio tenía el teléfono en dos archivos y la antigüedad en
  cinco, con cinco cifras distintas.
- **Al cambiar el dominio hay que tocar dos lugares**: la constante `SITE.url` y
  `neuhaus-next/public/llms.txt`, que lo tiene escrito a mano en 7 líneas. Es un
  archivo estático, no se deriva de `site.ts`.
- **El teléfono correcto es +54 11 4925-6364.** El `4925-6363` que aparece en
  material viejo es un error de tipeo.
- **Los redirects de dominio van en `next.config.ts`, no en el panel de Vercel.** Un
  redirect configurado en Vercel corre antes que la app y llega sin ninguna señal de
  origen, lo que rompe el aviso del dominio viejo. El motivo está comentado en el
  archivo.

---

## Historial

Este repo arrancó con un sitio en Vite/React que después se migró a Next.js. Ese
proyecto original se quitó de la raíz una vez que la migración quedó en producción;
sigue disponible en la historia de git para cualquier consulta, junto con las
imágenes full-res de la planta de las que salieron las WebP optimizadas
(ver la sección *Imágenes* del README de la app).
