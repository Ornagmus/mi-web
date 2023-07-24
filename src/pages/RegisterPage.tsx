import React from 'react';
import FormRegistro from '../components/atoms/formRegistro';
import NavBar from '../components/atoms/NavBar';

const RegisterPage: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    console.log('Datos de registro:', formData);
  };

  return (
    <div>
      <NavBar />
      <h1>Página de Registro</h1>
      <FormRegistro onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegisterPage;
