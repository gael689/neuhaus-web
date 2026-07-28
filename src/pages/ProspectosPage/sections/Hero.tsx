import PageHero from "@/components/PageHero";
import prospectosImg from "@/assets/fotos/DSCF1582.JPG";

const Hero = () => (
  <PageHero
    title="En Neuhaus, atendemos toda necesidad de impresión."
    subtitle="Prospectos medicinales, folletería comercial, recetarios, revistas y anotadores. Tecnología offset, flexo y digital, múltiples formatos de entrega."
    bgImage={prospectosImg}
  />
);

export default Hero;
