import CounterNumber from "@/components/CounterNumber";

/*
 * ANTIGÜEDAD PENDIENTE — el "45" se conserva idéntico al sitio publicado.
 * El Excel de modificaciones lo lleva a 50 (fundación 1976), pero ese cambio
 * espera confirmación documental. Cuando se apruebe:
 *   value={String(anosTrayectoria())} con FUNDACION = 1976 en lib/site.ts
 */
const Stats = () => (
  <section
    className="border-b border-border bg-background py-16 md:py-0 md:h-[20vh] md:min-h-[150px] flex flex-col justify-center"
    aria-label="Neuhaus en números"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 text-center md:text-left">
        <CounterNumber
          value="45"
          suffix="+"
          label="Años de trayectoria"
          delay={0}
          className="text-5xl md:text-5xl font-serif text-foreground leading-none"
        />
        <CounterNumber
          value="3"
          label="Certificaciones internacionales"
          delay={0.2}
          className="text-5xl md:text-5xl font-serif text-foreground leading-none"
        />
        <CounterNumber
          value="100"
          suffix="%"
          label="Producción integrada"
          delay={0.4}
          className="text-5xl md:text-5xl font-serif text-foreground leading-none"
        />
      </div>
    </div>
  </section>
);

export default Stats;
