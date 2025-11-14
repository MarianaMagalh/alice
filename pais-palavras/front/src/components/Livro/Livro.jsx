import React, { useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './livro.css';
import capaDoLivro from '../../assets/imgs/livro.png';

// -----------------------------------------------------------------
// A LÓGICA DE DESTAQUE AGORA VIVE DENTRO DO MESMO ARQUIVO
// -----------------------------------------------------------------
const highlightText = (texto, busca, corDestaque) => {
    if (!texto) return [];

    const cleanText = (word) => word.replace(/[.,!?;:()]/g, '');
    const parts = texto.split(/(\s+)/); // Divide por espaços E quebras de linha

    return parts.map((part, index) => {
        const palavraLimpa = cleanText(part);
        let deveDestacar = false;

        if (part.trim() !== '') {
            if (busca.tipo === 'palavra' && busca.valor) {
                if (palavraLimpa.toLowerCase() === busca.valor.toLowerCase()) {
                    deveDestacar = true;
                }
            } else if (busca.tipo === 'qtd' && busca.valor > 0) {
                if (palavraLimpa.length === busca.valor) {
                    deveDestacar = true;
                }
            }
        }

        if (deveDestacar) {
            return (
                <mark 
                    key={index} 
                    style={{ backgroundColor: corDestaque, color: '#000', padding: '1px' }}
                >
                    {part}
                </mark>
            );
        }
        return <span key={index}>{part}</span>;
    });
};
// -----------------------------------------------------------------
// FIM DA LÓGICA
// -----------------------------------------------------------------


// O COMPONENTE DO LIVRO
export default function Livro({ paginas, busca, corDestaque }) {

    return (
        <div className="container-livro">
            {/* ESTE É O ÚNICO <HTMLFlipBook>.
              Ele sempre vai renderizar.
            */}
            <HTMLFlipBook 
                width={500}  
                height={700}
                startPage={0}
                showCover={true}
                className="livro-component"
                drawCover={true}
                size="stretch"
            >
                {/* Item 1: A Capa (Sempre presente) */}
                <div className="pagina-capa">
                    <img src={capaDoLivro} alt="Capa do Livro" />
                </div>

                {/* Item 2: As Páginas.
                  Se 'paginas' estiver vazio, o map não faz nada.
                  Se 'paginas' tiver 8 itens, o map renderiza as 8 páginas.
                  Isso é seguro e não causa o bug "removeChild".
                */}
                {paginas.map((pagina) => {
                    
                    // Reconstrói o texto a partir do 'pagina.paragraphs'
                    const textoDaPagina = pagina.paragraphs
                        .map(paragrafo => 
                            paragrafo.map(palavra => palavra.text).join(' ')
                        )
                        .join('\n'); // Junta parágrafos com quebra de linha

                    // A lógica de destaque
                    const textoDestacado = useMemo(() => 
                        highlightText(textoDaPagina, busca, corDestaque),
                    [textoDaPagina, busca, corDestaque]);

                    return (
                        <div className="pagina-livro" key={pagina.number}>
                            {textoDestacado}
                        </div>
                    );
                })}

            </HTMLFlipBook>
        </div>
    );
}