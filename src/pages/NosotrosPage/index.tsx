import Hero from "./sections/Hero";
import History from "./sections/History";
import Quote from "./sections/Quote";
import MisionVision from "./sections/MisionVision";
// import Values from "./sections/Values"; // Oculta: se repite con "Valores" de MisionVision (pendiente de confirmación del cliente)
import Plant from "./sections/Plant";
import Certifications from "./sections/Certifications";

const NosotrosPage = () => (
  <div>
    <Hero />
    <History />
    <Quote />
    <MisionVision />
    {/* <Values /> */}
    <Plant />
    <Certifications />
  </div>
);

export default NosotrosPage;
