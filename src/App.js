import './App.css';
import Fullogo from './assets/full_logo.webp';
import Smallogo from './assets/small_logo.webp';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import Page Components
import Home from './pages/home';
import Cafes from './pages/types';
import Historia from './pages/about';
import Pedidos from './pages/login';
import Contatos from './pages/contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter basename="/coffee_website">
      <div className="App">
        <header className="App-header">
          {/* Hamburger Menu */}
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
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
                <li><Link to="/" style={{ textDecoration: "none" }} onClick={handleMenuToggle}><b>Pagina Inicial</b></Link></li>
                <li><Link to="/about" style={{ textDecoration: "none" }} onClick={handleMenuToggle}><b>Nossa Historia</b></Link></li>
                <li><Link to="/types" style={{ textDecoration: "none" }} onClick={handleMenuToggle}><b>Tipos de Café</b></Link></li>
                <li><Link to="/orders" style={{ textDecoration: "none" }} onClick={handleMenuToggle}><b>Pedidos</b></Link></li>
                <li><Link to="/contact" style={{ textDecoration: "none" }} onClick={handleMenuToggle}><b>Contatos</b></Link></li>
              </ul>
            </div>
          )}

          {/* Full Logo */}
          <img src={Fullogo} className="App-fullogo" alt="Full Logo" />
        </header>

        {/* Webpage Content */}
        <div className="App-webpage">
          <div className="App-smallogo-container">
            {/* Small Logo */}
            <img src={Smallogo} className="App-smallogo" alt="Small Logo" />
          </div>

          {/* Page Routes */}
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/types" element={<Cafes />} />
            <Route path="/about" element={<Historia />} />
            <Route path="/orders" element={<Pedidos />} />
            <Route path="/contact" element={<Contatos />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="App-footer">
          <a href="tel:+24999943919" className="phone-link">
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
          <a href="mailto:welovecoffeebr@gmail.com" className="email-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/5524999943919" className="whatsapp-link" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
          </a>
          {/* Rights reserved */}
          <p className="footer-rights">
            © {new Date().getFullYear()} We Love Coffee. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;