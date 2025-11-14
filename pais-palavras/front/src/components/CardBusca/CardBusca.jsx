import { useState } from "react";
import './style.css'; //
import lacoTitulo from '../../assets/imgs/laco.png'; //

// 1. O componente agora recebe "props" (propriedades) da página "pai"
export default function CardBusca({ onBuscaPalavra, onBuscaQtd, onCorChange }) {

    // 2. Estados internos para controlar os campos de input
    const [palavra, setPalavra] = useState("");
    const [qtd, setQtd] = useState("");

    // 3. Estado para a cor, 'yellow' é o padrão (o 1º da sua lista)
    const [cor, setCor] = useState("yellow");

    // 4. Funções que "avisam" a página pai (CapituloPage) quando há uma ação
    const handleBuscaPalavra = (e) => {
        e.preventDefault(); // Impede o formulário de recarregar a página
        if (onBuscaPalavra) { // Chama a função que o pai passou
            onBuscaPalavra(palavra);
        }
    };

    const handleBuscaQtd = (e) => {
        e.preventDefault();
        if (onBuscaQtd) {
            onBuscaQtd(qtd);
        }
    };

    // 5. Função para trocar a cor
    const handleCorChange = (e) => {
        const novaCor = e.target.value;
        setCor(novaCor); // Atualiza o estado interno
        if (onCorChange) { // Avisa o pai
            onCorChange(novaCor);
        }
    };

    return (
        <>
            <section>
                <figure className="imgTituloBusca">
                    <img src={lacoTitulo} alt="" />
                </figure>
                <div className="corBase">
                    <div className="corSegundaria">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <p>Nessa área você pode pesquisar palavras ou quantas letras você quer ver em uma parte do livro. Ela irá aparecer diretamente no livro, onde é possivel trocar a sua cor de destaque.</p>

                            <label htmlFor="">Digite aqui a palavra que você procura:</label>
                            <div className="alinhamento">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Digite a palavra..."
                                    value={palavra}
                                    onChange={(e) => setPalavra(e.target.value)}
                                />
                    
                                <button className="btn" onClick={handleBuscaPalavra}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>

                            <label htmlFor="">Digite quantidade de letras você quer em uma palavra:</label>
                            <div className="alinhamento">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder="Digite a qtd de letras..."
                                    value={qtd}
                                    onChange={(e) => setQtd(e.target.value)}
                                />
                                <button className="btn" onClick={handleBuscaQtd}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>

                            <div className="alinhamentoInfos">
                                <div className="mostraInfos">
                                    <label htmlFor=""></label>
                                    <h2>Quantidade de Palavras Repetidas</h2>
                                </div>
                                <div className="mostraInfos">
                                    <label htmlFor=""></label>
                                    <h2>Quantidade de Letras na pagina</h2>
                                </div>
                            </div>

                            <h3 className="opCores">Escolha a cor de destaque</h3>
                            <div className="containerCores">
                                <div className="cor">
                                    <input type="radio" name="radio" id="radio1" value="rgb(255, 255, 154)" checked={cor === 'rgb(255, 255, 154)'} onChange={handleCorChange} />
                                    <label htmlFor="radio1">Amarelo</label>
                                </div>

                                <div className="cor1">
                                    <input type="radio" name="radio" id="radio2" value="#9df791" checked={cor === '#9df791'} onChange={handleCorChange} />
                                    <label htmlFor="radio2">Verde</label>
                                </div>

                                <div className="cor2">
                                    <input type="radio" name="radio" id="radio3" value="#ff6d6d" checked={cor === '#ff6d6d'} onChange={handleCorChange} />
                                    <label htmlFor="radio3">Vermelho</label>
                                </div>

                                <div className="cor3">
                                    <input type="radio" name="radio" id="radio4" value="#d0a4ff" checked={cor === '#d0a4ff'} onChange={handleCorChange} />
                                    <label htmlFor="radio4">Roxo</label>
                                </div>

                                <div className="cor5">
                                    <input type="radio" name="radio" id="radio5" value="#69b4ff" checked={cor === '#69b4ff'} onChange={handleCorChange} />
                                    <label htmlFor="radio5">Azul</label>
                                </div>

                                <div className="cor6">
                                    <input type="radio" name="radio" id="radio6" value="#f38cd2" checked={cor === '#f38cd2'} onChange={handleCorChange} />
                                    <label htmlFor="radio6">Rosa</label>
                                </div>

                                <div className="cor7">
                                    <input type="radio" name="radio" id="radio7" value="#f9ae84" checked={cor === '#f9ae84'} onChange={handleCorChange} />
                                    <label htmlFor="radio7">Laranja</label>
                                </div>

                                <div className="cor8">
                                    <input type="radio" name="radio" id="radio8" value="#68f3c7" checked={cor === '#68f3c7'} onChange={handleCorChange} />
                                    <label htmlFor="radio8">Ciano</label>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>

            </section>

        </>
    )
}