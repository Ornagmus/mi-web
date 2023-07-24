import React, { useState } from 'react';

interface FormLoginProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  correo: string;
  contraseña: string;
}

const FormLogin: React.FC<FormLoginProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
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
        <label>Correo electrónico:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleInputChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="contraseña" value={formData.contraseña} onChange={handleInputChange} />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default FormLogin;
