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
import BaDuanJin from "@/pages/BaDuanJin";
import MedicinaTradizionaleCinese from "@/pages/MedicinaTradizionaleCinese";
import QiEYinYang from "@/pages/QiEYinYang";
import IMeridiani from "@/pages/IMeridiani";
import LeCinqueBranche from "@/pages/LeCinqueBranche";

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
          <Route path="/qi-gong/ba-duan-jin" element={<BaDuanJin />} />
          <Route path="*" element={<NotFound />} />
	  <Route path="/medicina-tradizionale-cinese" element={<MedicinaTradizionaleCinese />} />
	  <Route path="/medicina-tradizionale-cinese/qi-e-yin-yang" element={<QiEYinYang />} />
    	  <Route path="/medicina-tradizionale-cinese/i-meridiani" element={<IMeridiani />} />
          <Route path="/medicina-tradizionale-cinese/le-cinque-branche" element={<LeCinqueBranche />} />
        </Route>
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
