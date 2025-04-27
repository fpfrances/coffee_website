import React, { useState, useEffect } from 'react';
import Coffee1 from '../assets/main_coffee1.webp';
import Coffee2 from '../assets/main_coffee2.webp';
import Coffee3 from '../assets/main_coffee3.webp';
import Coffee4 from '../assets/main_coffee4.webp';

// Define images array
const images = [Coffee1, Coffee2, Coffee3, Coffee4];
function Inicial() {
  const [currentImage, setCurrentImage] = useState(Coffee1);

  const rotateImages = () => {
    setCurrentImage((prevImage) => {
      const currentIndex = images.indexOf(prevImage);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    });
  };

  useEffect(() => {
    // Preload all images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(rotateImages, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Rotating Images */}
      <div className="rotating-images">
        <img src={currentImage} className="App-bags" alt="Coffee Bag" />
      </div>
      {/* Message Container */}
      <div className="message-container">
        <h2>We Love Coffee</h2>
        <p>A “We Love Coffee” tem por missão levar a nossos clientes uma experiência única dos diferentes sabores de cafés das regiões do Brasil.
          Assim, buscamos os melhores grãos no mercado, com foco na qualidade, para levar o melhor café especial, desde o pé de café até sua xícara.
          Nossa Torrefação tem em sua linha de produção, um dos melhores Torradores do mercado, sendo a nossa torra, um processo artesanal e único, desenvolvido com foco na qualidade, capaz de agradar aos mais exigentes degustadores de cafés especiais do Brasil e do mundo.
          Não deixe de fazer parte dessa experiência fantástica, com a família “We Love Coffee”.</p>
      </div>
    </div>
  );
}

export default Inicial;