import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/piedepagina.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Síguenos</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={require('../imagenes/what-logo.jpg')} alt="WhatsApp" />WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../imagenes/face-logo.jpg')} alt="Facebook" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../imagenes/instagram-logo.png')} alt="Instagram" />
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
