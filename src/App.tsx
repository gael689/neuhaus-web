import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import NosotrosPage from "@/pages/NosotrosPage";
import ProspectosPage from "@/pages/ProspectosPage";
import EtiquetasPage from "@/pages/EtiquetasPage";
import CalidadPage from "@/pages/CalidadPage";
import ContactoPage from "@/pages/ContactoPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/servicios/prospectos" element={<ProspectosPage />} />
            <Route path="/servicios/etiquetas" element={<EtiquetasPage />} />
            <Route path="/calidad" element={<CalidadPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
