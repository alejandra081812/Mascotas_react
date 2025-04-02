import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="main-menu">
        <li className="main-menu__item"><a href="/pagpricipal">INICIO</a></li>
        <li className="main-menu__item"><a href="/citas">CITAS</a></li>
        <li className="main-menu__item"><a href="/servicios">SERVICIOS</a></li>
        <li className="main-menu__item"><a href="/ayuda">AYUDA</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
