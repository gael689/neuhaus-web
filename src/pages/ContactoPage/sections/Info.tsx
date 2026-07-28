import { Linkedin, Facebook, Instagram } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Info = () => (
  <AnimatedSection delay={0.15}>
    <div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
        Información Corporativa
      </span>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Datos de contacto</h3>
      <div className="space-y-8 text-base md:text-lg text-muted-foreground font-light">
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">Dirección</span>
          Colombres 1065, Boedo, CABA<br />
          Buenos Aires, Argentina (1238)
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">Email</span>
          <a href="mailto:info@neuhaus.com.ar" className="hover:text-foreground transition-colors hover:underline underline-offset-4">info@neuhaus.com.ar</a>
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">Teléfono</span>
          <a href="tel:+541149256363" className="hover:text-foreground transition-colors hover:underline underline-offset-4">4925-6363</a>
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">Redes Sociales</span>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/company/neuhaus-s-a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Linkedin className="w-5 h-5" />
              linkedin.com/company/neuhaus-s-a
            </a>
            <a
              href="https://www.facebook.com/people/Neuhaus-Industria-Gr%C3%A1fica/100063511693266/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Facebook className="w-5 h-5" />
              facebook.com/Neuhaus-Industria-Gráfica
            </a>
            <a
              href="https://www.instagram.com/neuhausimprenta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Instagram className="w-5 h-5" />
              instagram.com/neuhausimprenta
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-secondary p-2">
        <iframe
          title="Ubicación Neuhaus S.A."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d-58.4165!3d-34.6285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb18!2sColombes+1065,+Boedo,+Buenos+Aires!5e0!3m2!1ses!2sar!4v1"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700 w-full"
        />
      </div>
    </div>
  </AnimatedSection>
);

export default Info;
