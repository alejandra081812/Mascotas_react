import React from 'react';
import '../estilos/footer.css';
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Síguenos</h3>
                    <ul>
                        <li>
                            <a href="#">
                              <BsWhatsapp />
                               Whatsapp
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaFacebook />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsInstagram />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Información</h3>
                    <ul>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="/servicios">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contacto</h3>
                    <ul>
                        <li>Email: Petlovers@gmail.com</li>
                        <li>Teléfono: +57 3214972645</li>
                        <li>Dirección: Soacha Cundinamarca</li>
                    </ul>
                </div>
               
            </div>
            <p>&copy; 2024 PET LOVERS. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
