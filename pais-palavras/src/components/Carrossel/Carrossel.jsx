import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Alice from '../../assets/imgs/card-img/img-alice.png';
import Coelho from '../../assets/imgs/card-img/img-coelho.png';
import ChapeleiroLebre from '../../assets/imgs/card-img/img-chapeleiro-lebre.png';
import Dodo from '../../assets/imgs/card-img/img-dodo.png';
import Gato from '../../assets/imgs/card-img/img-gato.png';
import Largata from '../../assets/imgs/card-img/img-largata.png';
import RainhaRei from '../../assets/imgs/card-img/img-rainha-rei.png';

import './Carrossel.css';

function Carrossel() {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 3,
        focus: 'center',
      }}
      aria-label="Carrossel de imagens"
    >
      <SplideSlide>
        <div className='cardPersonagem'>
          <figure className='imgPersonagem'>
            <img src={Alice} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>Alice</h2>
          <p className='descricaoPerso'>
            Curiosa, sonhadora e corajosa, 
            Alice é uma menina que embarca em uma aventura fantástica 
            ao seguir um coelho apressado. Seu olhar inocente e 
            questionador transforma o absurdo do País das Maravilhas
             em uma lição sobre identidade e imaginação.
          </p>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={Coelho} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>Coelho Branco</h2>
          <p className='descricaoPerso'>
            Sempre atrasado e ansioso, o Coelho Branco é quem dá início 
            à aventura de Alice. Sua pressa e comportamento nervoso 
            contrastam com o caos do País das Maravilhas, mostrando o 
            absurdo de tentar controlar o tempo.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={RainhaRei} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>A Rainha Vermelha e o Rei</h2>
          <p className='descricaoPerso'>
            Impulsiva e autoritária, a Rainha de Copas governa o País 
            das Maravilhas com ordens rápidas e ameaças de “cortem-lhe a cabeça!”. 
            Apesar do temperamento explosivo, é uma das figuras mais marcantes e 
            cômicas da história.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={Dodo} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>O Dodo</h2>
          <p className='descricaoPerso'>
            Um dos personagens mais peculiares, o Dodô lidera corridas 
            sem sentido e representa o humor nonsense do País das Maravilhas. 
            Sua lógica confusa faz com que até o impossível pareça natural.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={ChapeleiroLebre} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>O Chapeleiro e a Lebre de Março</h2>
          <p className='descricaoPerso'>
            Alegre, excêntrico e completamente imprevisível, o 
            Chapeleiro Maluco adora festas do chá que nunca terminam. 
            Sua loucura esconde uma sabedoria única sobre tempo, lógica e 
            liberdade de pensamento.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={Largata} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>A Largata Azul</h2>
          <p className='descricaoPerso'>
            CMisteriosa e serena, a Lagarta Azul passa seus dias 
            meditando e soltando fumaça de narguilé. Com suas 
            perguntas enigmáticas, desafia Alice a descobrir quem ela realmente é.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>
           <figure className='imgPersonagem'>
            <img src={Gato} alt="imagem da personagem Alice" />
          </figure>
          <h2 className='tituloCarta'>Gato Cheshire</h2>
          <p className='descricaoPerso'>
            Misterioso e brincalhão, o Gato de Cheshire aparece e desaparece à 
            vontade, deixando apenas seu sorriso no ar. Ele é o símbolo da loucura 
            e da sabedoria paradoxal do País das Maravilhas.
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Carrossel;
