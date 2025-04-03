import { useState, useEffect } from "react"
import "../estilos/PagPrincipal.css"


const PetLovers = () => {
  const imagenesCarrusel = [
    require("../imagenes/carrusel.jpeg"),
    require("../imagenes/Carrusel22.png"),
    require("../imagenes/vacunas.PNG"),
  ]
  const [imagenActual, setImagenActual] = useState(0)
  const totalImagenes = imagenesCarrusel.length
  const siguienteImagen = () => {
    setImagenActual((prev) => (prev === totalImagenes - 1 ? 0 : prev + 1))
  }

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev === 0 ? totalImagenes - 1 : prev - 1))
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteImagen()
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="pet-care-app">
      <section id="bienvenida">
        <div className="texto-bienvenida">
          <h2 className="bien">¡Bienvenidos a Pet Lovers!</h2>
        </div>
      </section>

      <main>
        <section id="cuerpo1">
          <div className="carrusel-container">
            <button className="carrusel-btn izquierda" onClick={anteriorImagen}>
              &#10094;
            </button>
            <img
              src={imagenesCarrusel[imagenActual] || "/placeholder.svg"}
              alt={`Imagen ${imagenActual + 1}`}
              className="carrusel-img"
            />
            <button className="carrusel-btn derecha" onClick={siguienteImagen}>
              &#10095;
            </button>
          </div>
        </section><br></br><br></br><br></br>

        <section id="servicios">
          <section className="contenedor4"></section>
          <div className="servicios-container">
            <div className="service-box">
              <p>Agenda tus citas fácilmente</p>
              <img src={require("../imagenes/1ser.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Servicios integrales y de calidad</p>
              <img src={require("../imagenes/ser2.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Espacios libres de estrés</p>
              <img src={require("../imagenes/ser3.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
            </div>
            <div className="service-box">
              <p>Los más altos estándares de calidad</p>
              <img src={require("../imagenes/ser4.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
            </div>
          </div>
        </section><br></br><br></br><br></br>

        <section className="campo1">
          <div className="solu">
            <h2 className="recua">
              Los mejores amigos, <br /> de tus mejores amigos.
            </h2>
          </div>

          <div className="soluc">

          {}
          <div className="rep">
          <img src={require("../imagenes/irec.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
          <p className="textli">
          "Excelente servicio. A pesar de que nos comentaron que atendían con previa cita, nos pasaron inmediatamente.
          El lugar está limpio y la Dra.  Ana López nos atendió muy bien. Lo recomiendo."
          </p>
          <p className="recua">Camila Vera</p>
         </div>

         {}
          <div className="recuadro2">
          <img src={require("../imagenes/recl.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
          <p className="text700">
          "Llevé a mi perrita de 14 años a Pet Lovers porque tenía una bolita en la cara. El trato fue excelente, los veterinarios
           son muy amables y profesionales."
         </p>
         <p className="recua">Sebastian Lopez</p>
         </div>

        {}
        <div className="talle">
        <img src={require("../imagenes/recr.jpg") || "/placeholder.svg"} alt="imagen de unas mascotas" />
        <p className="gray700">
         "El lugar está increíble, tiene un diseño padrísimo y hace que no te sientas en una clínica veterinaria.
         Me encantó y de ahora en adelante es a donde llevaré a mi perrito Bruno."
        </p>
        <p className="coment">Juliana Muñoz </p>
        </div>
        </div>
      </section><br></br><br></br><br></br><br></br><br></br>

      <section id="info-section">
       <div className="info-card">
       <img
              src={require("../imagenes/nosotros.png") || "/placeholder.svg"}
              alt="Sobre nosotros"
              className="service-icon"
            />
       <h2>Sobre nosotros</h2>
       <p>En Pet Lovers, somos un equipo de profesionales apasionados por el bienestar de las mascotas...</p>
       </div>
       <div className="info-card">
       <img
              src={require("../imagenes/mision.png") || "/placeholder.svg"}
              alt="Nuestra Misión"
              className="service-icon"
            />
       <h2>Nuestra Misión</h2>
       <p>Ofrecer atención veterinaria de alta calidad, basada en la compasión y el respeto...</p>
       </div>
       <div className="info-card">
       <img
              src={require("../imagenes/vision.png") || "/placeholder.svg"}
              alt="Nuestra Visión"
              className="service-icon"
            />
       <h2>Nuestra Visión</h2>
       <p>Convertirnos en la clínica veterinaria de referencia en la comunidad...</p>
       </div>
       <div className="info-card">
       <img
              src={require("../imagenes/valores.png") || "/placeholder.svg"}
              alt="Valores que nos guían"
              className="service-icon"
            />
       <h2>Valores que nos guían</h2>
       <p>En Pet Lovers, nuestros valores fundamentales son la compasión, la integridad...</p>
       </div>
      </section>

        <section id="cuerpo3">
          <h2>Conoce a nuestros veterinarios</h2>
          <div className="veterinario1">
            <div className="veterinario">
              <h2>Dr. Juan Pérez</h2>
              <img src={require("../imagenes/vethom.jpg") || "/placeholder.svg"} alt="Veterinario Juan Pérez" />
              <p>Veterinario con 10 años de experiencia en medicina interna y cirugía.</p>
            </div>
            <div className="veterinario2">
              <h2>Dr. Ana López</h2>
              <img src={require("../imagenes/vetmuj.jpg") || "/placeholder.svg"} alt="Veterinaria Ana López" />
              <p>Especialista en dermatología veterinaria y cuidado de mascotas exóticas.</p>
            </div>
          </div>
        </section>

        <section id="elegir">
          <h2 id="vete">¿Por qué elegir nuestra Veterinaria?</h2>
          <p id="elegir2">
            En momentos de emergencia, es fundamental contar con un equipo de profesionales dedicados y apasionados por las mascotas...
            Somos más que una veterinaria
            Reimaginamos el acceso a la experiencia veterinaria ofreciendo una amplia gama de servicios pensados en ti y tus mascotas, gracias a los cuales, maximizamos su calidad de vida previniendo y asegurando su bienestar, mientras los cuidamos y consentimos en cada momento.
          </p>
          <img src={elegir} alt="mascotas" />
        </section>

        <section id="cuerpo5">
          <h1>Información sobre Pet Lovers</h1>
          <p>En Pet Lovers, nuestro compromiso es proporcionar una atención excepcional a tus mascotas...</p>
          <ul>
            <li>
              <strong>Atención Veterinaria General:</strong> Revisiones, diagnósticos y tratamientos...
            </li>
            <li>
              <strong>Vacunación:</strong> Programas de vacunación...
            </li>
            <li>
              <strong>Consultas de Emergencia:</strong> Atención en situaciones críticas...
            </li>
            <li>
              <strong>Baño y Peluquería:</strong> Servicios de aseo...
            </li>
          </ul>
          <h2>¡Ven a conocernos!</h2>
          <p>
            Te invitamos a visitar nuestra clínica y a formar parte de nuestra familia. ¡Tu mascota merece lo mejor!
          </p>
        </section>
      </main>
    </div>
  )
}


export default PetLovers;


