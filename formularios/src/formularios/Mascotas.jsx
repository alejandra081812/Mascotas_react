import React from 'react';
import { useForm } from 'react-hook-form';
import '../estilos/Mascotas.css';

function Mascotas() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <header>
                <div className="top-section">
                    <div className="info-principal">
                        <img src="https://raw.githubusercontent.com/Nore0729/imagenes-proyecto/refs/heads/main/logo-petlovers.png?token=GHSAT0AAAAAADAHE2QYALLMAQGN7D75AM4IZ6OEZCA" alt="Logo Petlovers" />
                    </div>
                    <div className="search-login">
                        <input type="text" placeholder="¿Qué estás buscando?" aria-label="Buscar" />
                        <button className="search-button">
                            <img src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png" alt="Buscar" />
                        </button>
                        <div className="tu-cuenta">
                            <button className="boton-cuenta">
                                Tu cuenta
                            </button>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="main-menu">
                        <li className="main-menu__item"><a href="#">INICIO</a></li>
                        <li className="main-menu__item"><a href="#">USUARIOS</a></li>
                        <li className="main-menu__item"><a href="#">CITAS</a></li>
                        <li className="main-menu__item"><a href="#">SERVICIOS</a></li>
                        <li className="main-menu__item"><a href="#">PRODUCTOS</a></li>
                    </ul>
                </nav>
            </header>

            <div className="form-container">
                <h1>Registrar mascota - Andrés Carmona</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="pet-form">
                    <div className="form-section">
                        <div className="form-group photo-upload">
                            <label>Foto</label>
                            <div className="photo-preview">
                                <input 
                                    type="file" 
                                    id="pet-photo"
                                    {...register("imagen", {
                                        required: "La foto es obligatoria"
                                    })} 
                                    accept="image/*"
                                />
                                <label htmlFor="pet-photo" className="upload-btn">
                                    + Subir foto
                                </label>
                                {errors.imagen && <p className="error-message">{errors.imagen.message}</p>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Nombre de la mascota"
                                {...register("nombre", {
                                    required: "El nombre es obligatorio",
                                    minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
                                    maxLength: { value: 30, message: "El nombre no puede tener más de 30 caracteres" },
                                    pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, message: "El nombre solo puede contener letras y espacios" }
                                })} 
                            />
                            {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>ID Identificador único (opcional)</label>
                            <input 
                                type="text" 
                                placeholder="ID de la mascota"
                                {...register("id", {
                                    pattern: { value: /^[0-9]+$/, message: "El ID solo puede contener números" }
                                })} 
                            />
                            {errors.id && <p className="error-message">{errors.id.message}</p>}
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label>Especie</label>
                            <select 
                                {...register("especie", {
                                    required: "La especie es obligatoria"
                                })}
                            >
                                <option value="">Selecciona una especie</option>
                                <option value="canino">Canino</option>
                                <option value="felino">Felino</option>
                                <option value="ave">Ave</option>
                                <option value="roedor">Roedor</option>
                                <option value="reptil">Reptil</option>
                            </select>
                            {errors.especie && <p className="error-message">{errors.especie.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>Raza del canino</label>
                            <select 
                                {...register("raza", {
                                    required: "La raza es obligatoria"
                                })}
                            >
                                <option value="">Selecciona una raza</option>
                                <option value="labrador">Labrador Retriever</option>
                                <option value="pastor">Pastor Alemán</option>
                                <option value="bulldog">Bulldog</option>
                                <option value="beagle">Beagle</option>
                                <option value="poodle">Poodle</option>
                            </select>
                            {errors.raza && <p className="error-message">{errors.raza.message}</p>}
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label>Género</label>
                            <select 
                                {...register("genero", {
                                    required: "El género es obligatorio"
                                })}
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                            {errors.genero && <p className="error-message">{errors.genero.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>Color</label>
                            <input 
                                type="text" 
                                placeholder="Color de la mascota"
                                {...register("color", {
                                    required: "El color es obligatorio"
                                })} 
                            />
                            {errors.color && <p className="error-message">{errors.color.message}</p>}
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label>Fecha de nacimiento</label>
                            <input 
                                type="date" 
                                placeholder="dd/mm/aaaa"
                                {...register("fecha_nacimiento", {
                                    required: "La fecha de nacimiento es obligatoria"
                                })} 
                            />
                            {errors.fecha_nacimiento && <p className="error-message">{errors.fecha_nacimiento.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>Peso</label>
                            <div className="weight-input">
                                <input 
                                    type="number" 
                                    step="0.1" 
                                    min="0" 
                                    placeholder="0.0"
                                    {...register("peso", {
                                        required: "El peso es obligatorio",
                                        min: { value: 0, message: "El peso no puede ser negativo" }
                                    })} 
                                />
                                <span>Kilogramos</span>
                            </div>
                            {errors.peso && <p className="error-message">{errors.peso.message}</p>}
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label>Talla</label>
                            <select 
                                {...register("talla", {
                                    required: "La talla es obligatoria"
                                })}
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="pequeno">Pequeño</option>
                                <option value="mediano">Mediano</option>
                                <option value="grande">Grande</option>
                            </select>
                            {errors.talla && <p className="error-message">{errors.talla.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>Estado Reproductivo</label>
                            <select 
                                {...register("estado_reproductivo", {
                                    required: "El estado reproductivo es obligatorio"
                                })}
                            >
                                <option value="">Seleccione estado</option>
                                <option value="esterilizado">Esterilizado</option>
                                <option value="no_esterilizado">No esterilizado</option>
                                <option value="castrado">Castrado</option>
                            </select>
                            {errors.estado_reproductivo && <p className="error-message">{errors.estado_reproductivo.message}</p>}
                        </div>
                    </div>

                    <div className="form-buttons">
                        <button type="button" className="cancel-btn">Cerrar</button>
                        <button type="submit" className="submit-btn">Guardar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Mascotas;