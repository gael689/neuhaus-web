"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Calidad", href: "/calidad" },
  { label: "Contacto", href: "/contacto" },
];

const serviceLinks = [
  { label: "Prospectos & Impresos", href: "/servicios/prospectos" },
  { label: "Etiquetas Autoadhesivas", href: "/servicios/etiquetas" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body mientras el menú full-screen está abierto.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) => pathname === path;

  const linkBase = `text-base font-bold tracking-wide transition-all duration-500 ${
    scrolled
      ? "text-foreground/80 hover:text-foreground"
      : "text-white/95 hover:text-white drop-shadow-md"
  }`;

  const linkActive = `text-base font-bold tracking-wide transition-all duration-500 ${
    scrolled ? "text-foreground" : "text-white drop-shadow-md"
  }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/*
          El fondo con blur queda siempre montado; solo se anima su opacidad.
          Agregar/sacar backdrop-blur-md como clase (en vez de su opacidad)
          hace que el filtro se recalcule de golpe en cada frame de scroll —
          se ve brusco, sobre todo en Safari/iOS. La opacidad sí es barata
          y siempre suave.
        */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 border-b bg-background/95 backdrop-blur-md shadow-sm border-border transition-opacity duration-500 ease-in-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          <Link href="/" className="flex items-center z-10" aria-label="Neuhaus S.A. — Inicio">
            <Image
              src={logo}
              alt="Neuhaus S.A. Industria Gráfica"
              priority
              className={`w-auto transition-all duration-500 ease-in-out ${
                scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              }`}
              style={{
                filter: scrolled
                  ? "none"
                  : "brightness(0) invert(1) drop-shadow(0px 2px 4px rgba(0,0,0,0.4))",
              }}
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.label === "Calidad" ? (
                <div key="services-group" className="flex items-center gap-10">
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 ${linkBase}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
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
                          className={`absolute top-full right-0 mt-3 w-56 shadow-xl py-1 border ${
                            scrolled
                              ? "bg-background border-border"
                              : "bg-[#081420] border-white/10"
                          }`}
                        >
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`block px-5 py-3 text-sm transition-colors ${
                                scrolled
                                  ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                                  : "text-white/65 hover:text-white hover:bg-white/10"
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
                    href={link.href}
                    className={isActive(link.href) ? linkActive : linkBase}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href) ? linkActive : linkBase}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            className={`lg:hidden transition-colors duration-300 relative z-50 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
              <div className="w-8 h-8" aria-hidden="true" />

              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src={logo}
                  alt="Neuhaus S.A. Industria Gráfica"
                  className="h-10 md:h-12 w-auto"
                />
              </Link>

              <button
                className="text-foreground p-2 -mr-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col justify-start">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="text-4xl font-bold tracking-tight text-foreground">
                  Inicio
                </Link>
                <Link href="/nosotros" className="text-4xl font-bold tracking-tight text-foreground">
                  Nosotros
                </Link>

                <div className="flex flex-col">
                  <button
                    className="text-4xl font-bold tracking-tight text-foreground text-left flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    Servicios
                    <ChevronDown
                      className={`w-8 h-8 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
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
                              key={s.href}
                              href={s.href}
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

                <Link href="/calidad" className="text-4xl font-bold tracking-tight text-foreground">
                  Calidad
                </Link>
                <Link href="/contacto" className="text-4xl font-bold tracking-tight text-foreground">
                  Contacto
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
