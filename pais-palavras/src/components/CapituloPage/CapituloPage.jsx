import React from "react";
import { useParams } from "react-router-dom";
import capitulos from "../../data/capitulosData";
import CardBusca from "../CardBuasca/CardBusca";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './CapituloPage.css';

export default function CapituloPage() {
  const { id } = useParams();
  const capitulo = capitulos.find((c) => c.capitulo === Number(id));

  if (!capitulo) return <p>Capítulo não encontrado</p>;

  return (
    <div
      className="capituloPage"
      style={{ backgroundImage: `url(${capitulo.fundo})` }}
    >

      <Navbar />

      <div className="conteudoPapitulo">
        <h2 className="titulo">{capitulo.titulo}</h2>
        <CardBusca />
        <div className="areaInterativa">
          <div className="livro">
            <p>{capitulo.texto}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
