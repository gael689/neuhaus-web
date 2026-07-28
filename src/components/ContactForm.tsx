import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

interface Field {
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
}

const ContactForm = ({ title, fields, buttonLabel = "Enviar consulta" }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required !== false && !formData[f.name]?.trim()) {
        newErrors[f.name] = "Este campo es obligatorio";
      }
      if (f.type === "email" && formData[f.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[f.name])) {
        newErrors[f.name] = "Email inválido";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">{title}</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((f) => (
          <div key={f.name} className={f.type === "textarea" ? "md:col-span-2" : ""}>
            <label className="block text-xs md:text-sm font-semibold tracking-wide uppercase text-foreground/80 mb-2">{f.label}</label>
            {f.options ? (
              <select
                className="w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-[2px]"
                value={formData[f.name] || ""}
                onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
              >
                <option value="">Seleccionar...</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                rows={5}
                className="w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all rounded-[2px]"
                value={formData[f.name] || ""}
                onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
              />
            ) : (
              <input
                type={f.type || "text"}
                className="w-full px-4 py-3 md:py-4 border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all rounded-[2px]"
                value={formData[f.name] || ""}
                onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
              />
            )}
            {errors[f.name] && <p className="text-destructive text-xs mt-1.5">{errors[f.name]}</p>}
          </div>
        ))}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="px-10 py-5 bg-primary text-primary-foreground text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-navy-deep hover:shadow-xl transition-all duration-300 w-full md:w-auto rounded-[2px]"
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
