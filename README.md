# Neuhaus S.A. — sitio web

Sitio institucional de **Neuhaus S.A. Industria Gráfica** (Colombres 1065, Boedo,
CABA): prospectos medicinales, etiquetas autoadhesivas, calidad y contacto.

En producción: **https://www.neuhaus.com.ar**

## Dónde está el código

La aplicación vive en **`neuhaus-next/`**, no en la raíz del repo.

Vercel tiene el *Root Directory* del proyecto apuntado a `neuhaus-next`, así que de
ahí sale todo build. **Si alguna vez se mueve la app a la raíz, hay que cambiar ese
setting en el panel de Vercel en el mismo movimiento**, o el siguiente deploy falla
buscando un directorio que ya no existe.

```bash
cd neuhaus-next
npm install
cp .env.example .env.local   # completar con la clave de Resend
npm run dev                  # localhost:3000
```

El stack, la estructura y la configuración están en
[`neuhaus-next/README.md`](neuhaus-next/README.md).

## Deploy

Cada push a `main` dispara un deploy de producción automático vía la integración de
GitHub con Vercel. No hay pipeline propio ni pasos manuales.

## Historial

Este repo arrancó con un sitio en Vite/React que después se migró a Next.js. Ese
proyecto original se quitó de la raíz una vez que la migración quedó en producción;
sigue disponible en la historia de git para cualquier consulta, junto con las
imágenes full-res de la planta de las que salieron las WebP optimizadas.
