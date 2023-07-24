import React, { useState } from 'react';

interface FormRegistroProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  nombre: string;
  apellidos: string;
  correo: string;
  contraseña: string;
}

const FormRegistro: React.FC<FormRegistroProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellidos: '',
    correo: '',
    contraseña: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
      </div>
      <div>
        <label>Apellidos:</label>
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleInputChange} />
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleInputChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="contraseña" value={formData.contraseña} onChange={handleInputChange} />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default FormRegistro;
