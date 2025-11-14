import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import capitulos from "../../data/capitulosData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Livro from "../Livro/livro"; 
import CardBusca from "../CardBusca/CardBusca";
import './CapituloPage.css';

export default function CapituloPage() {
  const { id } = useParams();
  const capitulo = capitulos.find((c) => c.capitulo === Number(id));

  const [paginasCapitulo, setPaginasCapitulo] = useState([]);
  const [carregandoLivro, setCarregandoLivro] = useState(true);
  const [busca, setBusca] = useState({ tipo: '', valor: '' });
  const [corDestaque, setCorDestaque] = useState('yellow');

  useEffect(() => {
    setPaginasCapitulo([]);
    setCarregandoLivro(true);

    if (!capitulo || !capitulo.paginaInicio) {
        console.error("ERRO: 'capitulosData.js' não encontrou este capítulo.");
        setCarregandoLivro(false);
        return;
    }
    
    fetch('/paginas.json') // Busca na pasta /public
        .then(response => response.json())
        .then(data => {
            
            // 1. Acessamos o array 'pages' de dentro do JSON
            const todasPaginas = data.pages; 
            // -------------------------------

            // 2. Filtramos usando 'pagina.number' (que já existe no seu JSON)
            const paginasFiltradas = todasPaginas.filter(pagina => 
                pagina.number >= capitulo.paginaInicio && 
                pagina.number <= capitulo.paginaFim
            );
            
            console.log(`PÁGINAS FILTRADAS: ${paginasFiltradas.length} páginas encontradas.`);

            if (paginasFiltradas.length === 0) {
                console.warn("AVISO: 0 páginas. Verifique os números em 'capitulosData.js'");
            }

            setPaginasCapitulo(paginasFiltradas);
            setCarregandoLivro(false);
        })
        .catch(error => {
            console.error("ERRO FATAL AO CARREGAR paginas.json:", error);
            setCarregandoLivro(false);
        });
  }, [id, capitulo]); 

  if (!capitulo) return <p>Capítulo não encontrado</p>;

  return (
    <div
      className="capituloPage"
      style={{ backgroundImage: `url(${capitulo.fundo})` }}
    >
      <Navbar />
      <div className="conteudoCapitulo">
        <h2 className="titulo">{capitulo.titulo}</h2>
        <div className="areaInterativa">
          
          <div className="card-busca-wrapper">
            <CardBusca 
              onBuscaPalavra={(palavra) => setBusca({ tipo: 'palavra', valor: palavra })}
              onBuscaQtd={(qtd) => setBusca({ tipo: 'qtd', valor: parseInt(qtd) || 0 })}
              onCorChange={setCorDestaque}
            />
          </div>
          
          <div className="livro">
            <Livro 
              key={id}
              paginas={paginasCapitulo} 
              busca={busca} 
              corDestaque={corDestaque} 
            />
          </div>
        </div>
        <button></button>
      </div>
      <Footer />
    </div>
  );
}