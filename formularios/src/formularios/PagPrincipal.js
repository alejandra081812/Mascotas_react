import React, { useState, useEffect } from 'react';
import carrusel1 from '../imagenes/carrusel1.png';
import carrusel2 from '../imagenes/carrusel2.png';
import carrusel3 from '../imagenes/carrusel3.png';
import imagen1ser from '../imagenes/1ser.jpg';
import imagenSer2 from '../imagenes/ser2.jpg';
import imagenSer3 from '../imagenes/ser3.jpg';
import imagenSer4 from '../imagenes/ser4.jpg';
import nosotrosImg from '../imagenes/nosotros.png';
import misionImg from '../imagenes/mision.png';
import visionImg from '../imagenes/vision.png';
import valoresImg from '../imagenes/valores.png';
import vetmuj from '../imagenes/vetmuj.jpg';
import vethom from '../imagenes/vethom.jpg';
import elegir from '../imagenes/elegir.jpg';
import '../estilos/PagPrincipal.css';

const PetCare = () => {
  const imagenesCarrusel = [carrusel1, carrusel2, carrusel3];
  const [imagenActual, setImagenActual] = useState(0);
  const totalImagenes = imagenesCarrusel.length;

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev === totalImagenes - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev === 0 ? totalImagenes - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteImagen();
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="pet-care-app">
      <section id="bienvenida">
        <div className="texto-bienvenida">
          <h2>¡Bienvenidos a Pet Lovers!</h2>
        </div>
      </section>

      <main>
        <section id="cuerpo1">
          <div className="carrusel-container">
            <button className="carrusel-btn izquierda" onClick={anteriorImagen}>
              &#10094;
            </button>
            <img
              src={imagenesCarrusel[imagenActual]}
              alt={`Imagen ${imagenActual + 1}`}
              className="carrusel-img"
            />
            <button className="carrusel-btn derecha" onClick={siguienteImagen}>
              &#10095;
            </button>
          </div>
        </section>

        <section id="servicios">
        <section className="contenedor4">
        </section>
          <div className="servicios-container">
            <div className="service-box">
              <p>Agenda tus citas fácilmente</p>
              <img src={imagen1ser} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Servicios integrales y de calidad</p>
              <img src={imagenSer2} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Espacios libres de estrés</p>
              <img src={imagenSer3} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Los más altos estándares de calidad</p>
              <img src={imagenSer4} alt="imagen de unas mascotas" />
            </div>
          </div>
        </section>

         <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-800 leading-tight">
           Los mejores amigos, <br /> de tus mejores amigos.
          </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 max-w-6xl mx-auto">
          {/* Tarjeta de Testimonio 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img src="/testimonio1.png" alt="Bulldog feliz" className="rounded-xl w-44 h-44 object-cover mb-4" />
          <p className="text-gray-700 italic">
          "Excelente servicio. A pesar de que nos comentaron que atendían con previa cita, nos pasaron inmediatamente.
          El lugar está limpio y la Dra. Adriana nos atendió muy bien. Lo recomiendo."
          </p>
          <p className="font-bold text-red-700 mt-4">Yuliana Vera</p>
         </div>

         {/* Tarjeta de Testimonio 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <img src="/testimonio2.png" alt="Perrito en Vetalia" className="rounded-xl w-44 h-44 object-cover mb-4" />
          <p className="text-gray-700 italic">
          "Llevé a mi perrita de 14 años a Vetalia porque tenía una bolita en la cara. El trato fue excelente, los veterinarios
           son muy amables y profesionales."
         </p>
         <p className="font-bold text-red-700 mt-4">Inés Muñoz de Baena</p>
         </div>

        {/* Tarjeta de Testimonio 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
        <img src="/testimonio3.png" alt="Bulldog baño" className="rounded-xl w-44 h-44 object-cover mb-4" />
        <p className="text-gray-700 italic">
        "Me encantó y mi perrita estuvo muy feliz. Es muy especial para los baños porque le da ansiedad, pero me permitieron
        estar ahí y eso ayudó a que mi perrita se sintiera tranquila."
        </p>
        <p className="font-bold text-red-700 mt-4">Elvira Gracia</p>
        </div>

        {/* Tarjeta de Testimonio 4 */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
         <img src="/testimonio4.png" alt="Perrito feliz" className="rounded-xl w-44 h-44 object-cover mb-4" />
        <p className="text-gray-700 italic">
         "El lugar está increíble, tiene un diseño padrísimo y hace que no te sientas en una clínica veterinaria.
         Me encantó y de ahora en adelante es a donde llevaré a mi perrita Olivia."
        </p>
        <p className="font-bold text-red-700 mt-4">Inés Muñoz de Baena</p>
        </div>
        </div>
      </section>



        <section id="cuerpo2">
          <div className="service-box">
            <img src={nosotrosImg} alt="Sobre nosotros" className="service-icon" />
            <h2>Sobre nosotros</h2>
            <p>En Pet Lovers, somos un equipo de profesionales apasionados por el bienestar de las mascotas...</p>
          </div>
          <div className="service-box">
            <img src={misionImg} alt="Nuestra Misión" className="service-icon" />
            <h2>Nuestra Misión</h2>
            <p>Ofrecer atención veterinaria de alta calidad, basada en la compasión y el respeto...</p>
          </div>
          <div className="service-box">
            <img src={visionImg} alt="Nuestra Visión" className="service-icon" />
            <h2>Nuestra Visión</h2>
            <p>Convertirnos en la clínica veterinaria de referencia en la comunidad...</p>
          </div>
          <div className="service-box">
            <img src={valoresImg} alt="Valores que nos guían" className="service-icon" />
            <h2>Valores que nos guían</h2>
            <p>En Pet Lovers, nuestros valores fundamentales son la compasión, la integridad...</p>
          </div>
        </section>

        <section id="cuerpo3">
          <h2>Conoce a nuestros veterinarios</h2>
          <div className="veterinario1">
            <div className="veterinario">
              <h2>Dr. Juan Pérez</h2>
              <img src={vethom} alt="Veterinario Juan Pérez" />
              <p>Veterinario con 10 años de experiencia en medicina interna y cirugía.</p>
            </div>
            <div className="veterinario2">
              <h2>Dr. Ana López</h2>
              <img src={vetmuj} alt="Veterinaria Ana López" />
              <p>Especialista en dermatología veterinaria y cuidado de mascotas exóticas.</p>
            </div>
          </div>
        </section>

        <section id="elegir">
          <h2>¿Por qué elegir nuestra Veterinaria?</h2>
          <p id="elegir2">
            En momentos de emergencia, es fundamental contar con un equipo de profesionales dedicados y apasionados por las mascotas...
          </p>
          <img src={elegir} alt="Veterinario Juan Pérez" />
        </section>

        <section id="cuerpo5">
          <h1>Información sobre Pet Lovers</h1>
          <p>En Pet Lovers, nuestro compromiso es proporcionar una atención excepcional a tus mascotas...</p>
          <ul>
            <li><strong>Atención Veterinaria General:</strong> Revisiones, diagnósticos y tratamientos...</li>
            <li><strong>Vacunación:</strong> Programas de vacunación...</li>
            <li><strong>Consultas de Emergencia:</strong> Atención en situaciones críticas...</li>
            <li><strong>Baño y Peluquería:</strong> Servicios de aseo...</li>
          </ul>
          <h2>¡Ven a conocernos!</h2>
          <p>Te invitamos a visitar nuestra clínica y a formar parte de nuestra familia. ¡Tu mascota merece lo mejor!</p>
        </section>
      </main>
    </div>
  );
};

export default PetCare;

