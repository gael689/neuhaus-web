import PageHero from "@/components/PageHero";
import qualityControl from "@/assets/fotos/_1033768.JPG";

const Hero = () => (
  <PageHero
    title="La calidad no es un resultado. Es un proceso."
    subtitle="Cada trabajo que sale de nuestra planta pasó por un sistema de control que pocos proveedores gráficos pueden ofrecer."
    bgImage={qualityControl}
  />
);

export default Hero;
