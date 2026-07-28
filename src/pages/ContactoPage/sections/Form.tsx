import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

type Tipo = "Prospectos" | "Etiquetas" | "Otro" | "";

const inputClass =
  "w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-[2px]";
const labelClass =
  "block text-xs md:text-sm font-semibold tracking-wide uppercase text-foreground/80 mb-2";

const Field = ({
  label,
  error,
  children,
  span2 = false,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  span2?: boolean;
}) => (
  <div className={span2 ? "md:col-span-2" : ""}>
    <label className={labelClass}>{label}</label>
    {children}
    {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
  </div>
);

const Form = () => {
  const [tipo, setTipo] = useState<Tipo>("");
  const [data, setData]   = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (name: string, value: string) =>
    setData((prev) => ({ ...prev, [name]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    const req = (k: string, label: string) => {
      if (!data[k]?.trim()) e[k] = `${label} es obligatorio`;
    };
    req("nombre", "Nombre");
    req("empresa", "Empresa");
    if (!data.email?.trim()) e.email = "Email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email inválido";
    req("telefono", "Teléfono");
    if (!tipo) e.tipo = "Seleccioná un tipo de consulta";

    if (tipo === "Prospectos" || tipo === "Etiquetas") {
      req("cantidad", "Cantidad");
      req("tamano", "Tamaño");
      req("colores", "Colores");
      if (tipo === "Prospectos") req("terminacion", "Terminación");
      if (tipo === "Etiquetas")  req("sustrato", "Sustrato");
    }
    if (tipo === "Otro") req("mensaje", "Mensaje");

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <AnimatedSection className="py-16 text-center">
        <div className="bg-secondary p-8 max-w-md mx-auto">
          <h3 className="text-xl mb-2">¡Mensaje enviado!</h3>
          <p className="text-muted-foreground text-sm">Te contactaremos a la brevedad.</p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">Envianos tu consulta</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Base fields */}
        <Field label="Nombre completo" error={errors.nombre}>
          <input className={inputClass} value={data.nombre || ""} onChange={(e) => set("nombre", e.target.value)} />
        </Field>
        <Field label="Empresa" error={errors.empresa}>
          <input className={inputClass} value={data.empresa || ""} onChange={(e) => set("empresa", e.target.value)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" className={inputClass} value={data.email || ""} onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label="Teléfono" error={errors.telefono}>
          <input type="tel" className={inputClass} value={data.telefono || ""} onChange={(e) => set("telefono", e.target.value)} />
        </Field>

        {/* Tipo de consulta */}
        <Field label="Tipo de consulta" error={errors.tipo} span2>
          <select
            className={inputClass}
            value={tipo}
            onChange={(e) => { setTipo(e.target.value as Tipo); setData((prev) => ({ nombre: prev.nombre, empresa: prev.empresa, email: prev.email, telefono: prev.telefono })); setErrors({}); }}
          >
            <option value="">Seleccionar...</option>
            <option value="Prospectos">Prospectos</option>
            <option value="Etiquetas">Etiquetas</option>
            <option value="Otro">Otro</option>
          </select>
        </Field>

        {/* Dynamic fields */}
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
              <Field label="Cantidad total" error={errors.cantidad}>
                <input className={inputClass} value={data.cantidad || ""} onChange={(e) => set("cantidad", e.target.value)} />
              </Field>
              <Field
                label={tipo === "Etiquetas" ? "Tamaño de etiqueta (ej: 50 × 30 mm)" : "Tamaño (ej: 210 × 297 mm)"}
                error={errors.tamano}
              >
                <input className={inputClass} value={data.tamano || ""} onChange={(e) => set("tamano", e.target.value)} />
              </Field>
              <Field label="Cantidad de colores" error={errors.colores}>
                <input className={inputClass} value={data.colores || ""} onChange={(e) => set("colores", e.target.value)} />
              </Field>

              {tipo === "Prospectos" && (
                <Field label="Terminación" error={errors.terminacion}>
                  <select className={inputClass} value={data.terminacion || ""} onChange={(e) => set("terminacion", e.target.value)}>
                    <option value="">Seleccionar...</option>
                    {["Plano", "Doblado simple", "Doblado múltiple"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              )}

              {tipo === "Etiquetas" && (
                <Field label="Sustrato" error={errors.sustrato}>
                  <select className={inputClass} value={data.sustrato || ""} onChange={(e) => set("sustrato", e.target.value)}>
                    <option value="">Seleccionar...</option>
                    {["BOPP blanco", "BOPP transparente", "BOPP metalizado", "Ilustración", "Martele", "Otro"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              )}

              <div className="md:col-span-2">
                <Field label="Mensaje adicional">
                  <textarea rows={4} className={`${inputClass} resize-none`} value={data.mensaje || ""} onChange={(e) => set("mensaje", e.target.value)} />
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
              <Field label="Mensaje" error={errors.mensaje}>
                <textarea rows={5} className={`${inputClass} resize-none`} value={data.mensaje || ""} onChange={(e) => set("mensaje", e.target.value)} />
              </Field>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="px-10 py-5 bg-primary text-primary-foreground text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-navy-deep hover:shadow-xl transition-all duration-300 w-full md:w-auto rounded-[2px]"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default Form;
