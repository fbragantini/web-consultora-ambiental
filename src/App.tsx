import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Contacto from "@/pages/Contacto";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Servicios from "@/pages/Servicios";
import SobreNosotros from "@/pages/SobreNosotros";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nosotros" element={<SobreNosotros />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
