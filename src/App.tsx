import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import TaiChi from "./pages/TaiChi";
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
