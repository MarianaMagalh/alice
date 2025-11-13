import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './SobreNos.css';

export default function SobreNos() {
    return (
        <main className='bodySobreNos' > 
            <Navbar /> 
            <div className='sobreNosContainer' > 
            { /* Coluna da Esquerda: Sobre Nós */ }

                <section className='sobreNosSection' > 
                    <h2>Sobre Nós</h2> 
                    <p> Bem-vindo ao nosso cantinho mágico de leitura, um lugar onde a curiosidade é a chave e a imaginação não tem limites. Nascemos de um sonho, assim como o de Alice, de criar um espaço onde as histórias ganham vida e cada livro é um convite para uma nova aventura. </p> <p> Nossa missão é simples: inspirar o amor pela leitura,
                    oferecendo um refúgio da realidade onde cada página virada é um passo mais fundo na toca do coelho. Acreditamos no poder das palavras para transformar,
                    encantar e nos fazer questionar o impossível. </p> 
                </section> 
                { /* Coluna da Direita: Contato */ }

                <section className='contatoSection' id='contato' > 
                    <h2>Contato</h2> 
                    <p className='subtituloContato' >Manda sua duvida ao recado para nós !</p> 
                    { /* O formulário agora usa Grid para o layout */ }

                    <form className='contatoForm' > 
                        <div className="form-group" > 
                            <label htmlFor="nome" >Insira o seu nome:</label> 
                            <input type="text" id="nome" placeholder="Ex: Maria" /> 
                        </div> 

                        <div className="form-group" > 
                            <label htmlFor="sobrenome" >Insira o seu sobrenome:</label> 
                            <input type="text" id="sobrenome" placeholder="Ex: Alves" /> 
                        </div> 

                        <div className="formGroup" > 
                            <label htmlFor="email" >Insira o seu email:</label> 
                            <input type="email" id="email" placeholder="Ex: mariaalves2@gmail.com" /> 
                        </div> 
                        { /* Grupo da Textarea (ocupa 2 linhas de altura) */ }

                        <div className="formGroup textareaGroup" > 
                            <label htmlFor="mensagem" >Insira a sua mensagem:</label> 
                            <textarea id="mensagem" rows="5" placeholder="Ex: Adorei o site!!" ></textarea> 
                        </div> 

                        <div className="formGroup" > 
                            <label htmlFor="telefone" >Insira o seu telefone:</label> 
                            <input type="tel" id="telefone" placeholder="Ex: 00 00000-0000" /> 
                        </div> 
                        { /* Botão (ocupa a largura inteira) */ }

                        <div className="formGroup buttonGroup" > 
                            <button type="submit" className='btnEnviar' >Enviar</button> 
                        </div> 
                    </form>
                </section> 
            </div> 
            <Footer />
        </main>
    );
}