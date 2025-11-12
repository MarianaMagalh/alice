import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capitulos from "./components/TelaCapitulo/Capitulos";
import CapituloPage from "./components/CapituloPage/CapituloPage";
import Home from "./pages/Home/Home";
import SobreNos from './pages/SobreNos/SobreNos';


export default function App() {
  return (
    <Routes>
      {/* Rota raiz */}
      <Route path='/' element={<Home />}/>

      {/* Tela inicial do site */}
      <Route path="/Home" element={<Home />} />

      {/* Tela de escolher capítulos */}
      <Route path="/Capitulos" element={<Capitulos />}/>

      {/* Tela do capítulo, usando parâmetro da URL */}
      <Route path="/Capitulo/:id" element={<CapituloPage />} />

      {/* Tela Sobre Nós */}
      <Route path="/SobreNos" element={<SobreNos />}/>

      
    </Routes>
  );
}
