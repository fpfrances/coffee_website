import './App.css';
import fullogo from './assets/full_logo.jpg'; // Adjust the image path as needed
import smallogo from './assets/small_logo.jpg'; // Adjust the image path as needed
import coffeebags from './assets/coffeebags.jpg'; // Adjust the image path as needed
import coffee_bag from './assets/coffee_bag.jpg'; // Adjust the image path as needed
import coffee_bag2 from './assets/coffee_bag2.jpg'; // Adjust the image path as needed
import React, { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(coffeebags); // State to store the current image

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Array of image sources
  const images = [coffeebags, coffee_bag, coffee_bag2];

  // Function to rotate images
  const rotateImages = () => {
    setCurrentImage(prevImage => {
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
    <div className="App">
      <header className="App-header">
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={handleMenuToggle}>
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        {/* Popup Menu */}
        {menuOpen && (
          <div className="menu-popup">
            <ul>
              <li><b>Tipos de Café</b></li>
              <li><b>Nossa História</b></li>
              <li><b>Pedidos</b></li>
              <li><b>Contatos</b></li>
            </ul>
          </div>
        )}

        {/* Full Logo */}
        <img src={fullogo} className="App-fullogo" alt="Full Logo" />
      </header>

      {/* Webpage Content */}
      <div className="App-webpage">
        <div className="App-smallogo-container">
          {/* Small Logo */}
          <img src={smallogo} className="App-smallogo" alt="Small Logo" />
        </div>
        
        {/* Rotating Images */}
        <div className="rotating-images">
          <img src={currentImage} className="App-bags" alt="Coffee Bag" />
        </div>

        {/* Footer */}
        <footer className="App-footer">
          <a href="tel:+1234567890" className="phone-link">
            <i className="fas fa-phone"></i>
          </a>
          <a
            href="https://www.instagram.com/welovecoffeeoficial"
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:your_email@example.com" className="email-link">
            <i className="fas fa-envelope"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;