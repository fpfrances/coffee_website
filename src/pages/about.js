import './about.css';
import React, { useState, useEffect } from 'react';
import Coffee1 from '../assets/cheiro.jpg';
import Coffee2 from '../assets/colheita.jpg';
import Coffee3 from '../assets/graos.jpg';
import Coffee4 from '../assets/love.jpg';

function Historia() {
  const [currentImage, setCurrentImage] = useState(Coffee1); // State to store the current image

  // Array of image sources
  const images = [Coffee1, Coffee2, Coffee3, Coffee4];

  // Function to rotate images
  const rotateImages = () => {
    setCurrentImage((prevImage) => {
      const currentIndex = images.indexOf(prevImage);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    });
  };

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(rotateImages, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  },);

  return (
    <div className="container">
      {/* Rotating Images */}
      <div className="rotating-images">
        <img src={currentImage} className="App-bags" alt="Coffee Bag" />
      </div>
      {/* Message Container */}
    <div className="message-container">
      <h2>Nossa Historia</h2>
        <p>Sempre me encantei com o sabor que o café poderia proporcionar, seja em uma receita mais elaborada, no leite ou simplesmente a xícara de café puro.
            A cultura do café está profundamente enraizada no DNA brasileiro! Fui apresentado ao universo dos cafés especiais pelo meu amigo Francisco, um especialista em torra de café especial.<br></br>
            A partir desse momento, comecei a enfrentar dificuldades para encontrar cafés especiais com torra fresca e personalizados!<br></br>
            Para satisfazer uma demanda cada vez mais exigente e em crescimento. Desde 2018, tenho me dedicado ao estudo de cafés especiais no Brasil e globalmente.
            Desde a plantação, colheita, secagem, até a torra e moagem, até chegar à sua xícara.<br></br>
            Especializei-me:<br></br>
            - Classificação e degustação de cafés (verde e torrado).<br></br>
            - Especialista em torra de cafés.<br></br>
            - Barista de nível avançado.<br></br>
            Hoje, tenho uma pequena torrefação de cafés especiais artesanais, a We Love Coffee, que foi fundada em 2019 com foco na qualidade
            e atendimento ao cliente. Temos sempre ótimos cafés à sua espera!</p>
    </div>
    </div>
);}

export default Historia;