import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import TaiChi from "./pages/TaiChi";
import StileWu from "@/pages/StileWu";
import TaiChiSalute from "@/pages/TaiChiSalute";
import FormaOtto from "@/pages/FormaOtto";
import FormaBreve from "@/pages/FormaBreve";
import FormaLunga from "@/pages/FormaLunga";
import FormaRapida from "@/pages/FormaRapida";
import QiGong from "./pages/QiGong";
import DoveQuando from "./pages/DoveQuando";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import ListaAttesa from "./pages/ListaAttesa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/tai-chi" element={<TaiChi />} />
          <Route path="/tai-chi/stile-wu" element={<StileWu />} />
          <Route path="/tai-chi/tai-chi-e-salute" element={<TaiChiSalute />} />
          <Route path="/tai-chi/le-forme/forma-otto" element={<FormaOtto />} />
          <Route path="/tai-chi/le-forme/forma-breve" element={<FormaBreve />} />
          <Route path="/tai-chi/le-forme/forma-lunga" element={<FormaLunga />} />
          <Route path="/tai-chi/le-forme/forma-rapida" element={<FormaRapida />} />
          <Route path="/qi-gong" element={<QiGong />} />
          <Route path="/dove-e-quando" element={<DoveQuando />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/lista-attesa" element={<ListaAttesa />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
