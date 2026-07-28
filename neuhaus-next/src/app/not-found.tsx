import type { Metadata } from "next";
import Link from "next/link";
import { NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-secondary px-4 py-32">
      <div className="text-center max-w-lg">
        <p className="text-7xl md:text-8xl font-bold tracking-tighter text-foreground/20 mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          No encontramos esta página
        </h1>
        <p className="text-muted-foreground font-light mb-10">
          Puede que el enlace esté mal escrito o que la página ya no exista.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-3">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-5 py-2.5 border border-border text-sm font-medium text-muted-foreground rounded-full hover:border-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
