import React from "react";
import { useParams } from "react-router-dom";
import capitulos from "../../data/capitulosData";
import CardBusca from "../CardBusca";
import './CapituloPage.css'; 

export default function CapituloPage() {
  const { id } = useParams();
  const capitulo = capitulos.find((c) => c.capitulo === Number(id));

  if (!capitulo) return <p>Capítulo não encontrado</p>;

  return (
    <div
      className="capitulo-page"
      style={{ backgroundImage: `url(${capitulo.fundo})` }}
    >
      {/* Navbar e Footer podem ser descomentados se tiver */}
      {/* <Navbar /> */}

      <div className="conteudo-capitulo">
        <h2>{capitulo.titulo}</h2>
        <CardBusca />
        <div className="area-interativa">
          <div className="livro">
            <p>{capitulo.texto}</p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
