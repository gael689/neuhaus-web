import ContactForm from "@/components/ContactForm";

const fields = [
  { name: "nombre", label: "Nombre completo" },
  { name: "empresa", label: "Empresa" },
  { name: "email", label: "Email", type: "email" as const },
  { name: "telefono", label: "Teléfono", type: "tel" as const },
  { name: "cantidad", label: "Cantidad total" },
  { name: "tamano", label: "Tamaño de etiqueta (ej: 50 × 30 mm)" },
  { name: "colores", label: "Cantidad de colores" },
  { name: "sustrato", label: "Sustrato", options: ["BOPP blanco", "BOPP transparente", "BOPP metalizado", "Ilustración", "Martele", "Otro"] },
  { name: "mensaje", label: "Mensaje adicional", type: "textarea" as const, required: false },
];

const QuoteForm = () => (
  <section className="py-24 md:py-36 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <ContactForm title="¿Necesitás cotizar etiquetas?" fields={fields} buttonLabel="Solicitar cotización" />
    </div>
  </section>
);

export default QuoteForm;
