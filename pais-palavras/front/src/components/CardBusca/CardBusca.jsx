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
            {/* TODA A SUA ESTRUTURA DE HTML E CSS FOI MANTIDA */}
            <section>
                <figure className="imgTituloBusca">
                    <img src={lacoTitulo} alt="" />
                </figure>
                <div className="corBase">
                    <div className="corSegundaria">
                        {/* Removido 'action=""' e adicionado 'onSubmit' para evitar recarregar */}
                        <form onSubmit={(e) => e.preventDefault()}>
                            <p>Nessa área você pode pesquisar palavras ou quantas letras você quer ver em uma parte do livro. Ela irá aparecer diretamente no livro, onde é possivel trocar a sua cor de destaque.</p>

                            <label htmlFor="">Digite aqui a palavra que você procura:</label>
                            <div className="alinhamento">
                                {/* ADICIONADO: 'value' e 'onChange' para controlar o input */}
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Digite a palavra..."
                                    value={palavra}
                                    onChange={(e) => setPalavra(e.target.value)}
                                />
                                {/* ADICIONADO: 'onClick' para chamar a função */}
                                <button className="btn" onClick={handleBuscaPalavra}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>

                            <label htmlFor="">Digite quantidade de letras você quer em uma palavra:</label>
                            <div className="alinhamento">
                                {/* ADICIONADO: 'value' e 'onChange' */}
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    placeholder="Digite a qtd de letras..."
                                    value={qtd}
                                    onChange={(e) => setQtd(e.target.value)}
                                />
                                {/* ADICIONADO: 'onClick' */}
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

                            {/* MUDANÇA SUTIL: 'onChange' foi movido para o container pai */}
                            <div className="containerCores">

                                {/* MUDANÇA NECESSÁRIA PARA O REACT FUNCIONAR:
                                  Ligamos o 'checked' ao estado 'cor' e adicionamos 'value' e 'onChange' em cada input.
                                  Usamos 'id' diferentes para os 'label' funcionarem.
                                */}
                                <div className="cor">
                                    <input type="radio" name="radio" id="radio1" value="yellow" checked={cor === 'yellow'} onChange={handleCorChange} />
                                    <label htmlFor="radio1">Amarelo</label>
                                </div>

                                <div className="cor1">
                                    <input type="radio" name="radio" id="radio2" value="#2ED818" checked={cor === '#2ED818'} onChange={handleCorChange} />
                                    <label htmlFor="radio2">Verde</label>
                                </div>

                                <div className="cor2">
                                    <input type="radio" name="radio" id="radio3" value="#DC0B0B" checked={cor === '#DC0B0B'} onChange={handleCorChange} />
                                    <label htmlFor="radio3">Vermelho</label>
                                </div>

                                <div className="cor3">
                                    <input type="radio" name="radio" id="radio4" value="#5d1ea0" checked={cor === '#5d1ea0'} onChange={handleCorChange} />
                                    <label htmlFor="radio4">Roxo</label>
                                </div>

                                <div className="cor5">
                                    <input type="radio" name="radio" id="radio5" value="#035eba" checked={cor === '#035eba'} onChange={handleCorChange} />
                                    <label htmlFor="radio5">Azul</label>
                                </div>

                                <div className="cor6">
                                    <input type="radio" name="radio" id="radio6" value="#d20090" checked={cor === '#d20090'} onChange={handleCorChange} />
                                    <label htmlFor="radio6">Rosa</label>
                                </div>

                                <div className="cor7">
                                    <input type="radio" name="radio" id="radio7" value="#e05403" checked={cor === '#e05403'} onChange={handleCorChange} />
                                    <label htmlFor="radio7">Laranja</label>
                                </div>

                                <div className="cor8">
                                    <input type="radio" name="radio" id="radio8" value="#17DFA0" checked={cor === '#17DFA0'} onChange={handleCorChange} />
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