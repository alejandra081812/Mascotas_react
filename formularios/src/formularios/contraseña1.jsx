import React, { useState } from 'react';
import '../estilos/contraseña1.css';

function Contraseña1() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contraseña1, setContraseña1] = useState('');
  const [emailSent, setEmailSent] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Te hemos enviado un correo para restablecer tu contraseña.");
    setEmailSent(true); 
  };

  const handleContraseñaChange = (e) => {
    setContraseña1(e.target.value);
  };

  return (
    <div>
      <h2>Olvidaste tu contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Enviar correo de recuperación</button>
      </form>
      {message && <p>{message}</p>}
      
      {/*  se mostrará solo si el correo fue escrito  */}
      {emailSent && (
        <div>
          <h2>Revisa tu correo</h2>
          <p>Te hemos enviado un enlace para restablecer tu contraseña. Por favor revisa tu bandeja de entrada.</p>
        </div>
      )}
    </div>
  );
}

export default Contraseña1;


