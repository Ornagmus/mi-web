import React from 'react';
import FormLogin from '../components/atoms/formLogin';
import NavBar from '../components/atoms/NavBar';

const LoginPage: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    // Aquí puedes realizar la lógica para autenticar al usuario
    console.log('Datos de inicio de sesión:', formData);
  };

  return (
    <div>
        <NavBar />
    <div>
      <h1>Página de Inicio de Sesión</h1>
      <FormLogin onSubmit={handleFormSubmit} />
    </div>
    </div>
  );
};

export default LoginPage;
