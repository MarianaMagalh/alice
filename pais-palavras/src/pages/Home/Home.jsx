import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import espiral from '../../assets/imgs/espiral.png';
import divnuvem from '../../assets/imgs/div-nuvem.png';
import '../Home/Home.css';

export default function Home() {
    return (
        <>
            <body className='body-home'>
                <Navbar />

                <figure className='fig-logo'>
                    <img src={espiral} alt="" />
                </figure>

                <figure className='fig-div'>
                    <img src={divnuvem} alt="" />
                </figure>

                <Footer />
            </body>


        </>
    )

}