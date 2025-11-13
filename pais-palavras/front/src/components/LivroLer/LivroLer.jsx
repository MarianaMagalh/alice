import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './LivroLer.css'; // O CSS que estiliza o livro

export default function Livro({ paginas }) {

    return (
        <div className="container-livro">
            <HTMLFlipBook 
                width={550}  // Largura de UMA página
                height={730} // Altura da página
                showCover={true} // Diz que a primeira página é a capa
                className="livro-component"
            >
                {/* Mapeamos o array de páginas que veio do Leitura.jsx.
                  Cada item vira uma <div> dentro do livro.
                */}
                {paginas.map((pagina, index) => (
                    <div className="pagina-livro" key={index}>
                        <div className="conteudo-pagina">
                            {/* A URL da imagem vem do seu JSON!
                              O caminho '/imgs_pdf/...' funciona
                              pois movemos a pasta para /public.
                            */}
                            <img 
                                src={pagina.imagem_url} 
                                alt={`Página ${pagina.numero}`} 
                            />
                        </div>
                    </div>
                ))}

            </HTMLFlipBook>
        </div>
    );
}