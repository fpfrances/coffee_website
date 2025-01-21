import React, { useState, useEffect } from 'react';
import Coffee1 from '../assets/main_coffee1.jpg';
import Coffee2 from '../assets/main_coffee2.jpg';
import Coffee3 from '../assets/main_coffee3.jpg';
import Coffee4 from '../assets/main_coffee4.jpg';

function Inicial() {
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
    <div>
      {/* Rotating Images */}
      <div className="rotating-images">
         <img src={currentImage} className="App-bags" alt="Coffee Bag" />
      </div>
    </div>
  );
}

export default Inicial;