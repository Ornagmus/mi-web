import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los datos del formulario antes de enviarlos al servidor
    // Enviar los datos del formulario al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <label>
        Confirmar contraseña:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
      </label>
      <button type="submit">Registrarse</button>
      <button type="button">Cancelar</button>
    </form>
  );
}

export default RegistrationForm;
