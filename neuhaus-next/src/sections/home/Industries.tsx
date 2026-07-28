import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import farmaImg from "@/assets/img/prospectos-medicinales-laboratorios.webp";
import alimentosImg from "@/assets/img/sector-alimentos-y-bebidas.webp";
import cosmeticaImg from "@/assets/img/sector-cosmetica-cuidado-personal.webp";
import pymesImg from "@/assets/img/sector-pymes-emprendedores.webp";

/*
 * PENDIENTE Q2 — el Excel reemplaza el título por "NEUHAUS, una marca instalada
 * desde hace 50 años". Se propuso conservar los sectores en la bajada para no
 * perder relevancia en búsquedas. Sin aplicar hasta confirmar.
 */
const industries = [
  {
    title: "Laboratorios & Farmacéuticas",
    desc: "Calidad y precisión técnica para prospectos. Cumplimiento estricto de normas BPM e ISO 9001.",
    img: farmaImg,
    imgAlt: "Prospectos medicinales impresos para laboratorios farmacéuticos",
    colSpan: "md:col-span-2",
  },
  {
    title: "Cosmética & Cuidado Personal",
    desc: "Etiquetas de alta definición que destacan en góndola. Tintas UV, especiales y Stamping.",
    img: cosmeticaImg,
    imgAlt: "Etiquetas para productos de cosmética y cuidado personal",
    colSpan: "md:col-span-1",
  },
  {
    title: "Alimentos & Bebidas",
    desc: "Materiales y adhesivos aptos para toda la cadena. Resistentes a humedad, fricción y frío.",
    img: alimentosImg,
    imgAlt: "Etiquetas para alimentos y bebidas resistentes a humedad y frío",
    colSpan: "md:col-span-1",
  },
  {
    title: "PyMEs y Emprendedores",
    desc: "Tiradas medias y bajas para todo tipo de proyecto.",
    img: pymesImg,
    imgAlt: "Impresión de tiradas cortas para pymes y emprendedores",
    colSpan: "md:col-span-2",
  },
];

/** Server Component: cero JavaScript propio, solo los wrappers de animación. */
const Industries = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Sectores que confían en nosotros
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl font-light">
          Desde multinacionales hasta pequeños productores locales, nuestra flexibilidad nos
          permite adaptarnos a la escala de nuestros clientes.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {industries.map((item, i) => (
          <AnimatedSection
            key={item.title}
            delay={i * 0.15}
            className={`group relative overflow-hidden rounded-sm h-[320px] md:h-[420px] ${item.colSpan}`}
          >
            <Image
              src={item.img}
              alt={item.imgAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
