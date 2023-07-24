import React, { useState } from 'react';

interface FormRegistroProps {
  onSubmit: (formData: FormData) => void;
}

const FormRegistro: React.FC<FormRegistroProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  // Agrega más estados para los otros campos del formulario si es necesario

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('email', email);
    // Agrega más campos al formData si es necesario

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {/* Agrega más campos del formulario aquí */}
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default FormRegistro;
