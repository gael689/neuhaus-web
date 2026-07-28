import { Linkedin, Facebook, Instagram, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SITE } from "@/lib/site";

/**
 * Server Component. Los datos salen de lib/site.ts, no hardcodeados:
 * el sitio anterior tenía la dirección en tres archivos y el teléfono
 * en dos, con un dígito equivocado respecto de Google Business Profile.
 */
const Info = () => (
  <AnimatedSection delay={0.15}>
    <div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4 block">
        Información Corporativa
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Datos de contacto</h2>

      <address className="not-italic space-y-8 text-base md:text-lg text-muted-foreground font-light">
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">
            Dirección
          </span>
          {SITE.contact.street}, {SITE.contact.neighborhood}, {SITE.contact.region}
          <br />
          {SITE.contact.city}, {SITE.contact.countryName} ({SITE.contact.postalCode})
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">
            Email
          </span>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="hover:text-foreground transition-colors hover:underline underline-offset-4"
          >
            {SITE.contact.email}
          </a>
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">
            Teléfono
          </span>
          <a
            href={SITE.contact.phoneHref}
            className="hover:text-foreground transition-colors hover:underline underline-offset-4"
          >
            {SITE.contact.phone}
          </a>
        </div>
        <div>
          <span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-foreground mb-2">
            Redes Sociales
          </span>
          <div className="flex flex-col gap-3">
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              linkedin.com/company/neuhaus-s-a
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
              facebook.com/Neuhaus-Industria-Gráfica
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              instagram.com/neuhausimprenta
            </a>
          </div>
        </div>
      </address>

      <a
        href={SITE.rating.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 border border-border px-5 py-4 hover:border-foreground transition-colors"
      >
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(SITE.rating.value)
                  ? "fill-amber-400 text-amber-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </span>
        <span className="text-sm">
          <strong className="font-semibold text-foreground">{SITE.rating.value}</strong>{" "}
          <span className="text-muted-foreground">
            · {SITE.rating.count} opiniones en Google
          </span>
        </span>
      </a>

      <div className="mt-12 bg-secondary p-2">
        <iframe
          title={`Ubicación de ${SITE.name} en ${SITE.contact.street}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${SITE.contact.street}, ${SITE.contact.city}, ${SITE.contact.countryName}`
          )}&output=embed`}
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
