import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import ServicesSplit from "./sections/ServicesSplit";
// import WhyNeuhaus from "./sections/WhyNeuhaus"; // Oculta: pide sacar el título "Tecnología y control en cada etapa" (pendiente de confirmación del cliente)
import Industries from "./sections/Industries";
import Certifications from "./sections/Certifications";
import FinalCTA from "./sections/FinalCTA";

const HomePage = () => (
  <div>
    <Hero />
    <Stats />
    <ServicesSplit />
    {/* <WhyNeuhaus /> */}
    <Industries />
    <Certifications />
    <FinalCTA />
  </div>
);

export default HomePage;
