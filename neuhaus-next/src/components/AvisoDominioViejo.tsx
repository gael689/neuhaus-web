"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";

/**
 * Franja para quien llega desde imprentaneuhaus.com, el dominio del sitio viejo.
 *
 * La detección NO puede usar el referrer: cuando alguien escribe el dominio
 * viejo en la barra y hay un 308 de por medio, el navegador llega acá sin
 * `Referer`. La única señal es la marca que agrega el propio redirect
 * (`?desde=imprentaneuhaus`, la regla vive en next.config.ts).
 *
 * Va abajo y no bloquea a propósito: un cartel modal sobre el inicio corre el
 * riesgo de que alguien cierre la pestaña en vez del cartel.
 */

/** Marca que pone el redirect. Cambiarla acá obliga a cambiarla en next.config.ts. */
const PARAM = "desde";
const MARCA = "imprentaneuhaus";

/** Una vez por sesión: recargar o volver atrás no la muestra de nuevo. */
const CLAVE_SESION = "aviso-imprentaneuhaus";

const AvisoDominioViejo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get(PARAM) !== MARCA) return;

    // La marca ya cumplió su función. Se saca de la barra para que nadie
    // comparta ni guarde en favoritos una URL con el parámetro pegado.
    url.searchParams.delete(PARAM);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);

    // sessionStorage puede tirar si el navegador bloquea el almacenamiento
    // (modo privado de Safari viejo, cookies de terceros deshabilitadas).
    // Que falle no puede impedir que se muestre el aviso.
    try {
      if (sessionStorage.getItem(CLAVE_SESION)) return;
      sessionStorage.setItem(CLAVE_SESION, "1");
    } catch {
      /* sin persistencia: se muestra igual, a lo sumo se repite */
    }

    setVisible(true);
    // Para saber cuánta gente sigue entrando por el dominio viejo.
    track("visita-desde-imprentaneuhaus");
  }, []);

  const cerrar = useCallback(() => setVisible(false), []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] bg-navy-deep text-white shadow-[0_-4px_24px_rgba(0,0,0,0.25)]"
        >
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 md:px-8 md:py-5">
            {/*
              En mobile queda solo el cambio de dominio: es lo único que la
              persona necesita leer, y la frase completa se comía cinco líneas
              de una pantalla de 390px.
            */}
            <p className="flex-1 pr-10 text-sm leading-relaxed text-white/80 sm:pr-0 md:text-base">
              <span className="font-semibold text-white">imprentaneuhaus.com</span> ahora es{" "}
              <span className="font-semibold text-white">neuhaus.com.ar</span>.
              <span className="hidden sm:inline">
                {" "}
                Misma empresa, mismo equipo: ya estás en el sitio nuevo.
              </span>
            </p>

            <button
              type="button"
              onClick={cerrar}
              className="shrink-0 self-start rounded-[2px] bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-white/85 sm:self-auto md:px-7 md:py-3"
            >
              Entendido
            </button>

            <button
              type="button"
              onClick={cerrar}
              aria-label="Cerrar aviso"
              className="absolute right-2 top-3 p-2 text-white/50 transition-colors duration-300 hover:text-white sm:static sm:-mr-2 sm:shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvisoDominioViejo;
