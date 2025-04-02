import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../estilos/Login.css';

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="contenedor">
                <div className="login-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Iniciar sesión</h1>

                        <label>Email *</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "El email es obligatorio",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "El email no es válido",
                                },
                            })}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}

                        <label>Contraseña *</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            {...register("password", {
                                required: "La contraseña es obligatoria",
                                minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
                            })}
                            className={errors.password ? 'input-error' : ''}
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                        
                        <li className="main-menu__item"><Link to="/contraseña1">¿Olvidaste la contraseña?</Link></li>
                        <li className="main-menu__item"><Link to="/propietario">Es tu primera vez? Regístrate</Link></li>
                        <button type="submit">Iniciar sesión</button>
                    </form>
                </div>
            </div>

            
        </>
    );
}

export default Login;
