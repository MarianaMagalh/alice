import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capitulos from "./components/TelaCapitulo/Capitulos";
import CapituloPage from "./components/CapituloPage/CapituloPage";
import capitulos from "./data/capitulosData";


export default function App() {
  return (
    <Routes>
      {/* Tela de escolher capítulos */}
      <Route path="/" element={<Capitulos />} />

      {/* Tela do capítulo, usando parâmetro da URL */}
      <Route path="/capitulo/:id" element={<CapituloPage />} />
    </Routes>
  );
}
