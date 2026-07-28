import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, NAV } from "@/lib/site";

/** Server Component: no envía JavaScript al cliente. */
const Footer = () => (
  <footer className="bg-[#0a1628] text-white">
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src={logo}
              alt="Neuhaus S.A. Industria Gráfica"
              className="h-10 md:h-12 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          {/* ANTIGÜEDAD PENDIENTE — texto idéntico al sitio publicado. Ver lib/site.ts */}
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Imprimí lo que necesites. Más de 45 años de experiencia en soluciones gráficas
            para la industria farmacéutica, cosmética y alimenticia.
          </p>

          <a
            href={SITE.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.round(SITE.rating.value) ? "fill-amber-400 text-amber-400" : "text-white/30"
                  }`}
                />
              ))}
            </span>
            <span>
              {SITE.rating.value} · {SITE.rating.count} opiniones en Google
            </span>
          </a>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">
            Navegación
          </h2>
          <nav className="flex flex-col gap-3">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">
            Contacto
          </h2>
          <address className="not-italic flex flex-col gap-3 text-sm font-medium text-white/60">
            <span>
              {SITE.contact.street}, {SITE.contact.neighborhood}, {SITE.contact.city}
            </span>
            <span>
              {SITE.contact.postalCode} — {SITE.contact.countryName}
            </span>
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-white transition-colors">
              {SITE.contact.email}
            </a>
            <a href={SITE.contact.phoneHref} className="hover:text-white transition-colors">
              {SITE.contact.phone}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">
            Seguinos
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
        </p>
        <p className="text-xs text-white/40">
          Desarrollado por{" "}
          <a
            href="https://www.gaelgonzalez.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white font-semibold transition-colors"
          >
            Gael Gonzalez
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
