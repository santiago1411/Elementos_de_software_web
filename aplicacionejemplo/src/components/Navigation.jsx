import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    // Componente Bootstrap: Navbar (Barra de navegación responsiva)
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">✈️ VuelosYa</Link>
        
        {/* Componente Bootstrap: Navbar Toggler (Botón hamburguesa para móviles) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Buscar Vuelos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;