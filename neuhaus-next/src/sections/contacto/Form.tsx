"use client";

import { useActionState, useEffect, useId, useState } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import { enviarConsulta, type ContactoState } from "@/app/actions/contacto";

type Tipo = "Prospectos" | "Etiquetas" | "Otro" | "";

const inputClass =
  "w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-[2px]";
const labelClass =
  "block text-xs md:text-sm font-semibold tracking-wide uppercase text-foreground/80 mb-2";

const Field = ({
  id,
  label,
  error,
  children,
  span2 = false,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  span2?: boolean;
}) => (
  <div className={span2 ? "md:col-span-2" : ""}>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-destructive text-xs mt-1.5">
        {error}
      </p>
    )}
  </div>
);

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className="md:col-span-2 mt-4">
      <button
        type="submit"
        disabled={pending}
        className="px-10 py-5 bg-primary text-primary-foreground text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-navy-deep hover:shadow-xl transition-all duration-300 w-full md:w-auto rounded-[2px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </div>
  );
};

const initialState: ContactoState = { ok: false, message: "" };

const Form = () => {
  const [tipo, setTipo] = useState<Tipo>("");
  const [state, formAction] = useActionState(enviarConsulta, initialState);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  useEffect(() => {
    if (!state.message) return;
    if (state.ok) toast.success(state.message);
    else toast.error(state.message);
  }, [state]);

  if (state.ok) {
    return (
      <AnimatedSection className="py-16 text-center">
        <div className="bg-secondary p-8 max-w-md mx-auto">
          <h3 className="text-xl mb-2">¡Mensaje enviado!</h3>
          <p className="text-muted-foreground text-sm">Te contactaremos a la brevedad.</p>
        </div>
      </AnimatedSection>
    );
  }

  const err = state.errors ?? {};

  return (
    <AnimatedSection>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">Envianos tu consulta</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor={id("website")}>No completar</label>
          <input id={id("website")} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <Field id={id("nombre")} label="Nombre completo" error={err.nombre}>
          <input id={id("nombre")} name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id={id("empresa")} label="Empresa" error={err.empresa}>
          <input
            id={id("empresa")}
            name="empresa"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field id={id("email")} label="Email" error={err.email}>
          <input
            id={id("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field id={id("telefono")} label="Teléfono" error={err.telefono}>
          <input
            id={id("telefono")}
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </Field>

        <Field id={id("tipo")} label="Tipo de consulta" error={err.tipo} span2>
          <select
            id={id("tipo")}
            name="tipo"
            required
            className={inputClass}
            value={tipo}
            onChange={(e) => setTipo(e.target.value as Tipo)}
          >
            <option value="">Seleccionar…</option>
            <option value="Prospectos">Prospectos</option>
            <option value="Etiquetas">Etiquetas</option>
            <option value="Otro">Otro</option>
          </select>
        </Field>

        <AnimatePresence mode="wait">
          {(tipo === "Prospectos" || tipo === "Etiquetas") && (
            <motion.div
              key={tipo}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Field id={id("cantidad")} label="Cantidad total" error={err.cantidad}>
                <input id={id("cantidad")} name="cantidad" required className={inputClass} />
              </Field>
              <Field
                id={id("tamano")}
                label={
                  tipo === "Etiquetas"
                    ? "Tamaño de etiqueta (ej: 50 × 30 mm)"
                    : "Tamaño (ej: 210 × 297 mm)"
                }
                error={err.tamano}
              >
                <input id={id("tamano")} name="tamano" required className={inputClass} />
              </Field>
              <Field id={id("colores")} label="Cantidad de colores" error={err.colores}>
                <input id={id("colores")} name="colores" required className={inputClass} />
              </Field>

              {tipo === "Prospectos" && (
                <Field id={id("terminacion")} label="Terminación" error={err.terminacion}>
                  <select
                    id={id("terminacion")}
                    name="terminacion"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Seleccionar…</option>
                    {["Plano", "Doblado simple", "Doblado múltiple"].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              )}

              {tipo === "Etiquetas" && (
                <Field id={id("sustrato")} label="Sustrato" error={err.sustrato}>
                  <select
                    id={id("sustrato")}
                    name="sustrato"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Seleccionar…</option>
                    {[
                      "BOPP blanco",
                      "BOPP transparente",
                      "BOPP metalizado",
                      "Ilustración",
                      "Martele",
                      "Otro",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              )}

              <div className="md:col-span-2">
                <Field id={id("mensaje")} label="Mensaje adicional">
                  <textarea
                    id={id("mensaje")}
                    name="mensaje"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>
            </motion.div>
          )}

          {tipo === "Otro" && (
            <motion.div
              key="otro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:col-span-2"
            >
              <Field id={id("mensaje-otro")} label="Mensaje" error={err.mensaje}>
                <textarea
                  id={id("mensaje-otro")}
                  name="mensaje"
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </Field>
            </motion.div>
          )}
        </AnimatePresence>

        <SubmitButton />
      </form>
    </AnimatedSection>
  );
};

export default Form;
