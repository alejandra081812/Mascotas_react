import React from 'react';
import '../estilos/servicios.css'; 

function Servicios() {
  return (
    <section className="services">
      <h1>Somos más que una veterinaria</h1>
      <p>
        Ofrecemos una amplia gama de servicios pensados en ti y tus mascotas, gracias a los cuales, maximizamos su calidad de vida previniendo y asegurando su bienestar, mientras los cuidamos y consentimos en cada momento.
      </p>
      <div className="servicio">
        <div className="servicio1">
          <h3>Bienestar</h3>
          <ul>
            <li>Vacunación</li>
            <li>Baño y estética</li>
            <li>Profilaxis dental</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
        <div className="servicio1">
          <h3>Urgencias</h3>
          <ul>
            <li>Atención 24 horas</li>
            <li>Hospitalización</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
        <div className="servicio1">
          <h3>Cirugías</h3>
          <ul>
            <li>Esterilización</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
        <div className="servicio1">
          <h3>Diagnóstico</h3>
          <ul>
            <li>Rayos X</li>
            <li>Ultrasonido</li>
            <li>Pruebas de laboratorio</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
        <div className="servicio1">
          <h3>Especialidades</h3>
          <ul>
            <li>Ortopedia</li>
            <li>Cardiología</li>
            <li>Oftalmología</li>
            <li>Oncología</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
        <div className="servicio1">
          <h3>Otros Servicios</h3>
          <ul>
            <li>Certificados de viaje</li>
            <li>Etología</li>
            <li>Farmacia y alimento</li>
          </ul>
          <a href="#">Ver más &rarr;</a>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
