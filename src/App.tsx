import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "./components/Layout";

// Lazy loading delle pagine per ridurre il bundle JavaScript iniziale
const Index = lazy(() => import("./pages/Index"));
const TaiChi = lazy(() => import("./pages/TaiChi"));
const StileWu = lazy(() => import("@/pages/StileWu"));
const TaiChiSalute = lazy(() => import("@/pages/TaiChiSalute"));
const FormaOtto = lazy(() => import("@/pages/FormaOtto"));
const FormaBreve = lazy(() => import("@/pages/FormaBreve"));
const FormaLunga = lazy(() => import("@/pages/FormaLunga"));
const FormaRapida = lazy(() => import("@/pages/FormaRapida"));
const QiGong = lazy(() => import("./pages/QiGong"));
const DoveQuando = lazy(() => import("./pages/DoveQuando"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Contatti = lazy(() => import("./pages/Contatti"));
const ListaAttesa = lazy(() => import("./pages/ListaAttesa"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BaDuanJin = lazy(() => import("@/pages/BaDuanJin"));
const MedicinaTradizionaleCinese = lazy(() => import("@/pages/MedicinaTradizionaleCinese"));
const QiEYinYang = lazy(() => import("@/pages/QiEYinYang"));
const IMeridiani = lazy(() => import("@/pages/IMeridiani"));
const LeCinqueBranche = lazy(() => import("@/pages/LeCinqueBranche"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-muted-foreground">Caricamento...</div>}>
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
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
