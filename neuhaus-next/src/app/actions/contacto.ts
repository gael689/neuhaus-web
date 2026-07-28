"use server";

import { z } from "zod";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

/**
 * Envío de consultas y pedidos de cotización.
 *
 * El sitio anterior NO enviaba nada: validaba en el cliente y mostraba
 * "¡Mensaje enviado!" sin ningún POST. Todo lead cargado se perdía.
 * Acá la validación corre en el servidor y, si el envío falla, se lo dice
 * al usuario — nunca se muestra un éxito falso.
 *
 * Configuración requerida (.env.local):
 *   RESEND_API_KEY=re_...
 *   CONTACTO_EMAIL_TO=...      (PENDIENTE Q6: casilla destino a definir)
 *   CONTACTO_EMAIL_FROM=...    (dominio verificado en Resend)
 */

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(120),
  empresa: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Revisá el email").max(160),
  telefono: z.string().trim().max(60).optional().or(z.literal("")),
  cantidad: z.string().trim().max(120).optional().or(z.literal("")),
  tamano: z.string().trim().max(120).optional().or(z.literal("")),
  colores: z.string().trim().max(120).optional().or(z.literal("")),
  sustrato: z.string().trim().max(120).optional().or(z.literal("")),
  terminacion: z.string().trim().max(120).optional().or(z.literal("")),
  tipo: z.string().trim().max(120).optional().or(z.literal("")),
  mensaje: z.string().trim().max(4000).optional().or(z.literal("")),
  // Honeypot: campo oculto que solo completan los bots.
  website: z.string().max(0, "").optional().or(z.literal("")),
});

export type ContactoState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const ETIQUETAS: Record<string, string> = {
  nombre: "Nombre",
  empresa: "Empresa",
  email: "Email",
  telefono: "Teléfono",
  cantidad: "Cantidad",
  tamano: "Tamaño",
  colores: "Colores",
  sustrato: "Sustrato",
  terminacion: "Terminación",
  tipo: "Tipo de consulta",
  mensaje: "Mensaje",
};

export async function enviarConsulta(
  _prev: ContactoState,
  formData: FormData
): Promise<ContactoState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, message: "Revisá los campos marcados.", errors };
  }

  const data = parsed.data;

  // Bot detectado: se responde ok para no darle señal, pero no se envía nada.
  if (data.website) {
    return { ok: true, message: "¡Mensaje enviado! Te contactaremos a la brevedad." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACTO_EMAIL_TO ?? SITE.contact.email;
  const from = process.env.CONTACTO_EMAIL_FROM;

  if (!apiKey || !from) {
    console.error(
      "[contacto] Falta RESEND_API_KEY o CONTACTO_EMAIL_FROM. La consulta NO se envió.",
      { de: data.email, empresa: data.empresa }
    );
    return {
      ok: false,
      message:
        "No pudimos enviar tu consulta en este momento. Escribinos a " +
        `${SITE.contact.email} o llamanos al ${SITE.contact.phone}.`,
    };
  }

  const filas = Object.entries(ETIQUETAS)
    .map(([key, label]) => {
      const value = (data as Record<string, string | undefined>)[key];
      return value ? `<tr><td style="padding:6px 14px 6px 0;color:#64748b">${label}</td><td style="padding:6px 0"><strong>${escapeHtml(value)}</strong></td></tr>` : "";
    })
    .filter(Boolean)
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Consulta web${data.empresa ? ` — ${data.empresa}` : ""} — ${data.nombre}`,
      html: `
        <div style="font-family:system-ui,sans-serif;color:#0f172a">
          <h2 style="margin:0 0 4px">Nueva consulta desde ${SITE.url}</h2>
          <p style="margin:0 0 18px;color:#64748b;font-size:13px">
            Recibida el ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
          </p>
          <table style="border-collapse:collapse;font-size:14px">${filas}</table>
        </div>
      `,
    });

    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contacto] Falló el envío:", err);
    return {
      ok: false,
      message:
        "No pudimos enviar tu consulta. Probá de nuevo o escribinos a " +
        `${SITE.contact.email}.`,
    };
  }

  return { ok: true, message: "¡Mensaje enviado! Te contactaremos a la brevedad." };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
