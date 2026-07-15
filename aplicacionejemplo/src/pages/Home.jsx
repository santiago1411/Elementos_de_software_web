import React from 'react';
import FlightCard from '../components/FlightCard';
import { flightsData } from '../data/flights';

const Home = () => {
  return (
    // Componente Bootstrap: Container (Contenedor principal para alinear contenido)
    <div className="container">
      {/* Componente Bootstrap: Alert o Banner (Estilizado con utilidades de fondo y texto) */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-2">
          <h1 className="display-5 fw-bold">Descubre el mundo con nosotros</h1>
          <p className="col-md-8 fs-4">Encuentra los mejores vuelos a tus destinos favoritos al mejor precio.</p>
        </div>
      </div>

      <h2 className="mb-4">Vuelos Destacados</h2>
      
      {/* Componente Bootstrap: Grid System (Row y Col para sistema de cuadrícula) */}
      <div className="row g-4">
        {flightsData.map(flight => (
          <div key={flight.id} className="col-12 col-md-6 col-lg-4">
            <FlightCard flight={flight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;