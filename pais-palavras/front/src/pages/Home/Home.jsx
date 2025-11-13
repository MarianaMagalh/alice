import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';

import fundoHome from '../../assets/imgs/fundoHome.png';
import tituloPersonagens from '../../assets/imgs/tituloPersonagens.png';
import tituloLivro from '../../assets/imgs/tituloLivro.png';
import livro from '../../assets/imgs/livro.png';

import '../Home/Home.css';

export default function Home() {
    return (
        <main className='bodyHome'>
            <Navbar />

            <figure className='imgFundo'>
                <img src={fundoHome} alt="" />
            </figure>

            <section className='secao'>
                <figure className='imgTituloPerso'>
                    <img src={tituloPersonagens} alt="Laço com o descrevendo o conteudo logo abaixo - Laço escrito Personagens" />
                </figure>
                
                <Carrossel />

                <figure>
                    <img src={tituloLivro} alt="Laço com o descrevendo o conteudo logo abaixo - Laço escrito Livro" />
                </figure>

                <Link to="/Capitulos">
                    <figure>
                        <img src={livro} alt="Livro personalizado da Alice no País das Maravilhas" />
                    </figure>
                </Link>


            </section>

            <Footer />
        </main>
    )

}