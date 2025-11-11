import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carrossel from '../../components/Carrossel/Carrossel';

import fundoHome from '../../assets/imgs/fundoHome.png';
import tituloPersonagens from '../../assets/imgs/tituloPersonagens.png';
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
                    <img src={tituloPersonagens} alt="" />
                </figure>
                <Carrossel /> 
            </section>

            <Footer />
        </main>
    )

}