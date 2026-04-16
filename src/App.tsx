import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import ProtectionMatrix from "@/pages/ProtectionMatrix";
import WTGSystems from "@/pages/WTGSystems";
import ElectricalComponents from "@/pages/ElectricalComponents";
import Commissioning from "@/pages/Commissioning";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matriz" element={<ProtectionMatrix />} />
            <Route path="/sistemas" element={<WTGSystems />} />
            <Route path="/componentes" element={<ElectricalComponents />} />
            <Route path="/comissionamento" element={<Commissioning />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
