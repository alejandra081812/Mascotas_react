import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../estilos/Propietario.css';

function Propietario() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
    });

    // Función para validar la edad
    const validarEdad = (fechaNacimiento) => {
        const today = new Date();
        const birthDate = new Date(fechaNacimiento);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    // Función para enviar el formulario
    const onSubmit = (data) => {
        console.log(data);
        navigate('/');
    };

    return (
        <>
            {/* Header completo (idéntico al original) */}
            <header>
                <div className="top-section">
                    <div className="info-principal">
                        <img 
                            src={require('../imagenes/LOGO-PETLOVERS.png')} 
                            alt="Logo Petlovers" 
                            onClick={() => navigate('/')}
                            style={{ cursor: 'pointer' }}
                        />
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
                        <li className="main-menu__item"><Link to="/">INICIO</Link></li>
                        <li className="main-menu__item"><Link to="/usuarios">USUARIOS</Link></li>
                        <li className="main-menu__item"><Link to="/citas">CITAS</Link></li>
                        <li className="main-menu__item"><Link to="/servicios">SERVICIOS</Link></li>
                        <li className="main-menu__item"><Link to="/productos">PRODUCTOS</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Contenido del formulario con validaciones mejoradas */}
            <div className="cita-contenedor">
                <div className="cita-formulario-contenedor">
                    <form onSubmit={handleSubmit(onSubmit)} className="cita-formulario">
                        <h1 className="cita-titulo">Registro de Propietario</h1>

                        <div className="cita-secciones">
                            {/* Tipo de Documento */}
                            <div className="cita-seccion">
                                <label className="cita-label">Tipo de documento *</label>
                                <select
                                    className={`cita-input ${errors.tipodoc ? 'input-error' : ''}`}
                                    {...register("tipodoc", { 
                                        required: "El tipo de documento es obligatorio" 
                                    })}
                                >
                                    <option value="">Selecciona</option>
                                    <option value="CC">C.C.</option>
                                    <option value="CE">C.E.</option>
                                </select>
                                {errors.tipodoc && <p className="error-text">{errors.tipodoc.message}</p>}
                            </div>

                            {/* Número de Documento */}
                            <div className="cita-seccion">
                                <label className="cita-label">Número de documento *</label>
                                <input
                                    type="text"
                                    className={`cita-input ${errors.numdoc ? 'input-error' : ''}`}
                                    {...register("numdoc", {
                                        required: "El número de documento es obligatorio",
                                        minLength: { value: 8, message: "Mínimo 8 caracteres" },
                                        maxLength: { value: 10, message: "Máximo 10 caracteres" },
                                        pattern: { 
                                            value: /^[0-9]+$/, 
                                            message: "Solo se permiten números" 
                                        }
                                    })}
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                    maxLength={10}
                                />
                                {errors.numdoc && <p className="error-text">{errors.numdoc.message}</p>}
                            </div>

                            {/* Nombre */}
                            <div className="cita-seccion">
                                <label className="cita-label">Nombre *</label>
                                <input
                                    type="text"
                                    className={`cita-input ${errors.nombre ? 'input-error' : ''}`}
                                    {...register("nombre", {
                                        required: "El nombre es obligatorio",
                                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                                        maxLength: { value: 30, message: "Máximo 30 caracteres" },
                                        pattern: { 
                                            value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                                            message: "Solo letras y espacios" 
                                        }
                                    })}
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')}
                                    maxLength={30}
                                />
                                {errors.nombre && <p className="error-text">{errors.nombre.message}</p>}
                            </div>

                            {/* Apellido */}
                            <div className="cita-seccion">
                                <label className="cita-label">Apellido *</label>
                                <input
                                    type="text"
                                    className={`cita-input ${errors.apellido ? 'input-error' : ''}`}
                                    {...register("apellido", {
                                        required: "El apellido es obligatorio",
                                        minLength: { value: 3, message: "Mínimo 3 caracteres" },
                                        pattern: { 
                                            value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                                            message: "Solo letras y espacios" 
                                        }
                                    })}
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')}
                                    maxLength={30}
                                />
                                {errors.apellido && <p className="error-text">{errors.apellido.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="cita-seccion">
                                <label className="cita-label">Email *</label>
                                <input
                                    type="email"
                                    className={`cita-input ${errors.email ? 'input-error' : ''}`}
                                    {...register("email", {
                                        required: "El email es obligatorio",
                                        pattern: { 
                                            value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                            message: "Email no válido" 
                                        }
                                    })}
                                    maxLength={100}
                                />
                                {errors.email && <p className="error-text">{errors.email.message}</p>}
                            </div>

                            {/* Fecha de Nacimiento */}
                            <div className="cita-seccion">
                                <label className="cita-label">Fecha de nacimiento *</label>
                                <input
                                    type="date"
                                    className={`cita-input ${errors.fechanac ? 'input-error' : ''}`}
                                    {...register("fechanac", {
                                        required: "La fecha es obligatoria",
                                        validate: {
                                            mayorDeEdad: (value) => 
                                                validarEdad(value) >= 18 || "Debes ser mayor de 18 años"
                                        }
                                    })}
                                />
                                {errors.fechanac && <p className="error-text">{errors.fechanac.message}</p>}
                            </div>

                            {/* Contraseña */}
                            <div className="cita-seccion">
                                <label className="cita-label">Contraseña *</label>
                                <input
                                    type="password"
                                    className={`cita-input ${errors.password ? 'input-error' : ''}`}
                                    {...register("password", {
                                        required: "La contraseña es obligatoria",
                                        minLength: { value: 8, message: "Mínimo 8 caracteres" },
                                        pattern: { 
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Debe contener mayúsculas, minúsculas, números y un símbolo"
                                        }
                                    })}
                                />
                                {errors.password && <p className="error-text">{errors.password.message}</p>}
                            </div>

                            {/* Dirección */}
                            <div className="cita-seccion">
                                <label className="cita-label">Dirección *</label>
                                <input
                                    type="text"
                                    className={`cita-input ${errors.direccion ? 'input-error' : ''}`}
                                    {...register("direccion", {
                                        required: "La dirección es obligatoria",
                                        maxLength: { value: 75, message: "Máximo 75 caracteres" }
                                    })}
                                    maxLength={75}
                                />
                                {errors.direccion && <p className="error-text">{errors.direccion.message}</p>}
                            </div>

                            {/* Teléfono */}
                            <div className="cita-seccion">
                                <label className="cita-label">Teléfono *</label>
                                <input
                                    type="tel"
                                    className={`cita-input ${errors.telefono ? 'input-error' : ''}`}
                                    {...register("telefono", {
                                        required: "El teléfono es obligatorio",
                                        pattern: { 
                                            value: /^[0-9]+$/, 
                                            message: "Solo números" 
                                        },
                                        minLength: { value: 7, message: "Mínimo 7 dígitos" },
                                        maxLength: { value: 15, message: "Máximo 15 dígitos" }
                                    })}
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                    maxLength={15}
                                />
                                {errors.telefono && <p className="error-text">{errors.telefono.message}</p>}
                            </div>

                            {/* Checkbox de Tratamiento de Datos */}
                            <div className="cita-seccion">
                                <div className="cita-recordatorio-contenedor">
                                    <div className="cita-recordatorio">
                                        <input
                                            type="checkbox"
                                            id="tratamientoDatos"
                                            className={`cita-recordatorio-input ${errors.tratamientoDatos ? 'input-error' : ''}`}
                                            {...register("tratamientoDatos", {
                                                required: "Debes aceptar el tratamiento de datos"
                                            })}
                                        />
                                        <label htmlFor="tratamientoDatos" className="cita-recordatorio-texto">
                                            Acepto el tratamiento de mis datos personales
                                        </label>
                                    </div>
                                    {errors.tratamientoDatos && (
                                        <p className="error-text">{errors.tratamientoDatos.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="cita-boton-enviar">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Propietario;