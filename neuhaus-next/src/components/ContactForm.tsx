"use client";

import { useActionState, useEffect, useId } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { enviarConsulta, type ContactoState } from "@/app/actions/contacto";
import AnimatedSection from "./AnimatedSection";

export interface Field {
  name: string;
  label: string;
  type?: string;
  options?: string[];
  required?: boolean;
}

interface Props {
  title: string;
  fields: Field[];
  buttonLabel?: string;
  /** Se manda oculto para saber de qué página vino la consulta. */
  origen?: string;
}

const initialState: ContactoState = { ok: false, message: "" };

const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="md:col-span-2 justify-self-start px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-navy-deep transition-all duration-300 rounded-[2px] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Enviando…" : label}
    </button>
  );
};

const ContactForm = ({ title, fields, buttonLabel = "Enviar consulta", origen }: Props) => {
  const [state, formAction] = useActionState(enviarConsulta, initialState);
  const formId = useId();

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

  const inputClass =
    "w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-[2px]";

  return (
    <AnimatedSection>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">{title}</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {origen && <input type="hidden" name="tipo" value={origen} />}

        {/* Honeypot — invisible para personas, irresistible para bots. */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>No completar</label>
          <input id={`${formId}-website`} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {fields.map((f) => {
          const id = `${formId}-${f.name}`;
          const error = state.errors?.[f.name];
          const required = f.required !== false;

          return (
            <div key={f.name} className={f.type === "textarea" ? "md:col-span-2" : ""}>
              <label
                htmlFor={id}
                className="block text-xs md:text-sm font-semibold tracking-wide uppercase text-foreground/80 mb-2"
              >
                {f.label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>

              {f.options ? (
                <select
                  id={id}
                  name={f.name}
                  required={required}
                  defaultValue=""
                  aria-invalid={!!error}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={inputClass}
                >
                  <option value="">Seleccionar…</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea
                  id={id}
                  name={f.name}
                  rows={5}
                  required={required}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={`${inputClass} resize-none`}
                />
              ) : (
                <input
                  id={id}
                  name={f.name}
                  type={f.type || "text"}
                  required={required}
                  autoComplete={
                    f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined
                  }
                  aria-invalid={!!error}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={inputClass}
                />
              )}

              {error && (
                <p id={`${id}-error`} className="text-destructive text-xs mt-1.5">
                  {error}
                </p>
              )}
            </div>
          );
        })}

        <SubmitButton label={buttonLabel} />
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
