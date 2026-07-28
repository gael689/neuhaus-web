import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/nosotros" },
    { label: "Calidad", to: "/calidad" },
    { label: "Contacto", to: "/contacto" },
  ];

  const serviceLinks = [
    { label: "Prospectos & Impresos", to: "/servicios/prospectos" },
    { label: "Etiquetas Autoadhesivas", to: "/servicios/etiquetas" },
  ];

  const isActive = (path) => location.pathname === path;

  // Styles that change on scroll
  const linkBase = `text-base font-bold tracking-wide transition-all duration-500 ${scrolled
    ? "text-foreground/80 hover:text-foreground"
    : "text-white/95 hover:text-white drop-shadow-md"
    }`;

  const linkActive = `text-base font-bold tracking-wide transition-all duration-500 ${scrolled
    ? "text-foreground"
    : "text-white drop-shadow-md"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img
              src={logo}
              alt="Neuhaus Industria Gráfica"
              className={`transition-all duration-500 ease-in-out ${scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                }`}
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1) drop-shadow(0px 2px 4px rgba(0,0,0,0.4))",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.label === "Calidad" ? (
                <div key="services-group" className="flex items-center gap-10">
                  {/* Services Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 ${linkBase}`}
                    >
                      Servicios
                      <ChevronDown className="w-4 h-4 mt-[1px]" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className={`absolute top-full right-0 mt-3 w-56 shadow-xl py-1 border ${scrolled
                            ? "bg-background border-border"
                            : "bg-[#081420] border-white/12"
                            }`}
                        >
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className={`block px-5 py-3 text-sm transition-colors ${scrolled
                                ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                                : "text-white/65 hover:text-white hover:bg-white/8"
                                }`}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to={link.to}
                    className={`transition-colors duration-300 ${isActive(link.to) ? linkActive : linkBase
                      }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors duration-300 ${isActive(link.to) ? linkActive : linkBase
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden transition-colors duration-300 relative z-50 ${scrolled ? "text-foreground" : "text-white"
              }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu (Full Screen) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            {/* Top Bar inside Menu */}
            <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
              {/* Invisible spacer for perfect centering */}
              <div className="w-8 h-8" />

              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src={logo}
                  alt="Neuhaus Industria Gráfica"
                  className="h-10 md:h-12"
                />
              </Link>

              <button
                className="text-foreground p-2 -mr-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar Menú"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Links Area */}
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col justify-start">
              <nav className="flex flex-col gap-6">
                <Link to="/" onClick={() => setMobileOpen(false)} className="text-4xl font-bold tracking-tight text-foreground">Inicio</Link>
                <Link to="/nosotros" onClick={() => setMobileOpen(false)} className="text-4xl font-bold tracking-tight text-foreground">Nosotros</Link>

                <div className="flex flex-col">
                  <button
                    className="text-4xl font-bold tracking-tight text-foreground text-left flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Servicios
                    <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pt-6 pb-2 pl-4 border-l-2 border-primary/20 ml-2 mt-4">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => setMobileOpen(false)}
                              className="text-xl font-semibold text-muted-foreground hover:text-foreground"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/calidad" onClick={() => setMobileOpen(false)} className="text-4xl font-bold tracking-tight text-foreground">Calidad</Link>
                <Link to="/contacto" onClick={() => setMobileOpen(false)} className="text-4xl font-bold tracking-tight text-foreground">Contacto</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;