import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[#0a1628] text-white">
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Col 1 - Logo */}
        <div>
          <Link to="/" className="inline-block mb-6">
            <img
              src={logo}
              alt="Neuhaus Industria Gráfica"
              className="h-10 md:h-12"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Imprimí lo que necesites. Más de 50 años de experiencia en soluciones gráficas para la industria farmacéutica, cosmética y alimenticia.
          </p>
        </div>

        {/* Col 2 - Nav */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">Navegación</h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Inicio", to: "/" },
              { label: "Nosotros", to: "/nosotros" },
              { label: "Prospectos & Impresos", to: "/servicios/prospectos" },
              { label: "Etiquetas Autoadhesivas", to: "/servicios/etiquetas" },
              { label: "Calidad", to: "/calidad" },
              { label: "Contacto", to: "/contacto" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 - Contact */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/60">
            <p>Colombres 1065, Boedo, CABA</p>
            <p>Buenos Aires, Argentina (1238)</p>
            <a href="mailto:info@neuhaus.com.ar" className="hover:text-white transition-colors">info@neuhaus.com.ar</a>
            <a href="tel:+541149256363" className="hover:text-white transition-colors">4925-6363</a>
          </div>
        </div>

        {/* Col 4 - Social */}
        <div>
          <h4 className="font-sans text-sm font-semibold tracking-wider uppercase mb-5 text-white/90">Seguinos</h4>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/company/neuhaus-s-a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/people/Neuhaus-Industria-Gr%C3%A1fica/100063511693266/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/neuhausimprenta"
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
          © 2026 Neuhaus S.A. Todos los derechos reservados.
        </p>
        <p className="text-xs text-white/40">
          Desarrollado por <a href="https://www.gaelgonzalez.com.ar/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white font-semibold transition-colors">Gael Gonzalez</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
