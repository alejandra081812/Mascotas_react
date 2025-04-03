import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../estilos/header.css';
import { TfiAlignRight } from "react-icons/tfi";
import largeImage from '../imagenes/LOGO-PETLOVERS.png';
import smallImage from '../imagenes/LOGO (1).png';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header-container">
      <div className="header-left">
        <img src={largeImage} alt="Logo grande" className="logo-large" />
      </div>
      <picture className='header4'>
       <img src={smallImage} alt="Logo pequeño" className="logo-small" />
      </picture>
  
      <section className="header-right">
        {!isMobile && (
          <nav className="horizontal-menu">
            <ul className="main-menu">
              <li className="main-menu__item"><Link to="/">INICIO</Link></li>
              <li className="main-menu__item"><Link to="/Citas">CITAS</Link></li>
              <li className="main-menu__item"><Link to="/servicios">SERVICIOS</Link></li>
              <li className="main-menu__item"><Link to="/Ayuda">AYUDA</Link></li>
            </ul>
          </nav>
        )}

        <div className="account-section">
          <button className="boton-cuenta">
            Tu cuenta
          </button>
        </div>

        {isMobile && (
          <div className="menu-container">
            <button className="menu-icon" onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <TfiAlignRight />
            </button>
            {isMenuVisible && (
              <nav className="vertical-menu">
                <ul className="main-menu">
                  <li className="main-menu__item"><Link to="/">INICIO</Link></li>
                  <li className="main-menu__item"><Link to="/Citas">CITAS</Link></li>
                  <li className="main-menu__item"><Link to="/servicios">SERVICIOS</Link></li>
                  <li className="main-menu__item"><Link to="/Ayuda">AYUDA</Link></li>
                </ul>
              </nav>
            )}
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;


