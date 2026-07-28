import PageHero from "@/components/PageHero";
import contactBg from "@/assets/fotos/DSCF1842 (1).JPG";

const Hero = () => (
  <PageHero
    title="Hablemos de tu proyecto."
    subtitle="Completá el formulario o escribinos directamente. Te respondemos a la brevedad."
    bgImage={contactBg}
    bgPosition="center 25%"
    large
  />
);

export default Hero;
