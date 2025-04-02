import React, { useState } from 'react';
import '../estilos/contraseña1.css'; 

function Contraseña2() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setMessage("Contraseña restablecida con éxito.");
    } else {
      setMessage("Las contraseñas no coinciden.");
    }
  };

  return (
    <div className="contenedor">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Restablecer contraseña</h1>
          <label htmlFor="password">Nueva contraseña:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <button type="submit">Restablecer contraseña</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contraseña2;

