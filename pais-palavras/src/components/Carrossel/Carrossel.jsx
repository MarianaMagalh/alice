import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
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
        <img src="https://i.pinimg.com/736x/80/04/6f/80046ff6a59ff982c1c4e1fd64361d61.jpg" alt="alice" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/736x/6a/d8/e7/6ad8e7b15f1f48b56a51d6e02d67e308.jpg" alt="rainha vermelha" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/1200x/60/16/de/6016dee6c769f499c50d206b42d541cd.jpg" alt="coelho branco" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/736x/48/08/9f/48089f9d44ad6297f54350804f98865b.jpg" alt="largata" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/736x/48/08/9f/48089f9d44ad6297f54350804f98865b.jpg" alt="largata" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/736x/48/08/9f/48089f9d44ad6297f54350804f98865b.jpg" alt="largata" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.pinimg.com/736x/48/08/9f/48089f9d44ad6297f54350804f98865b.jpg" alt="largata" />
      </SplideSlide>
    </Splide>
  );
}

export default Carrossel;
