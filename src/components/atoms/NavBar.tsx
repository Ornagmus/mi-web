import React from 'react';
import { Link } from 'react-router-dom';
import '../../imagenes/css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/LoginPage" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/RegisterPage" className="nav-link">Registrarse</Link>
        </li>
        <li className="nav-item">
          <Link to="/WeatherPage" className="nav-link">El Tiempo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
