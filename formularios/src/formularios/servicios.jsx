import React from 'react';
import '../estilos/servicios.css'; 

function Servicios() {
  return (
    <section className="servicios-seccion">
      {/* Título y descripción */}
      <div className="servicios-encabezado">
        <h1>Somos más que una veterinaria</h1>
        <p>
          Ofrecemos una amplia gama de servicios pensados en ti y tus mascotas, gracias a los cuales, maximizamos su
          calidad de vida previniendo y asegurando su bienestar, mientras los cuidamos y consentimos en cada momento.
        </p>
      </div>

      {/* Contenedor de tarjetas de servicios - exactamente 3 por fila */}
      <div className="servicios-contenedor">
        {/* Servicio 1: Bienestar */}
        <div className="tarjeta-servicio">
          <div className="imagen-contenedor">
            <img
              src={require("../imagenes/Bienestar.jpg") || "/placeholder.svg"}
              alt="Servicio de Bienestar"
              className="imagen-servicio"
            />
            <div className="overlay-titulo">
              <h3>Bienestar</h3>
            </div>
          </div>

          <div className="contenido-servicio">
            <ul>
              <li>
                <span className="check-icon">✓</span>Vacunación
              </li>
              <li>
                <span className="check-icon">✓</span>Baño y estética
              </li>
              <li>
                <span className="check-icon">✓</span>Profilaxis dental
              </li>
            </ul>
          </div>
        </div>

        {/* Servicio 2: Urgencias */}
        <div className="tarjeta-servicio">
          <div className="imagen-contenedor">
            <img
              src={require("../imagenes/hospital.jpg") || "/placeholder.svg"}
              alt="Servicio de Urgencias"
              className="imagen-servicio"
            />
            <div className="overlay-titulo">
              <h3>Urgencias</h3>
            </div>
          </div>

          <div className="contenido-servicio">
            <ul>
              <li>
                <span className="check-icon">✓</span>Atención 24 horas
              </li>
            </ul>
          </div>
        </div>

        {/* Servicio 3: Cirugías */}
        <div className="tarjeta-servicio">
          <div className="imagen-contenedor">
            <img
              src={require("../imagenes/operar.jpg") || "/placeholder.svg"}
              alt="Servicio de Cirugías"
              className="imagen-servicio"
            />
            <div className="overlay-titulo">
              <h3>Cirugías</h3>
            </div>
          </div>

          <div className="contenido-servicio">
            <ul>
              <li>
                <span className="check-icon">✓</span>Esterilización
              </li>
            </ul>
          </div>
        </div>

        {/* Servicio 5: Especialidades */}
        <div className="tarjeta-servicio">
          <div className="imagen-contenedor">
            <img
              src={require("../imagenes/ortopedia.jpg") || "/placeholder.svg"}
              alt="Servicio de Especialidades"
              className="imagen-servicio"
            />
            <div className="overlay-titulo">
              <h3>Especialidades</h3>
            </div>
          </div>

          <div className="contenido-servicio">
            <ul>
              <li>
                <span className="check-icon">✓</span>Ortopedia
              </li>
              <li>
                <span className="check-icon">✓</span>Cardiología
              </li>
              <li>
                <span className="check-icon">✓</span>Oftalmología
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
