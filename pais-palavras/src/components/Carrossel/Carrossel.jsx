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

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div className='cardPersonagem'>

        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Carrossel;
