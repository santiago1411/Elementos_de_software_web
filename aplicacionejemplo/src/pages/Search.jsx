import React, { useState } from 'react';
import FlightCard from '../components/FlightCard';
import { flightsData } from '../data/flights';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlights = flightsData.filter(flight =>
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="mb-4">Buscar Vuelos</h2>
      
      {/* Componente Bootstrap: Input Group (Agrupación de inputs de formulario) */}
      <div className="input-group mb-5 shadow-sm">
        <span className="input-group-text bg-white">🔍</span>
        <input 
          type="text" 
          className="form-control form-control-lg" 
          placeholder="¿A dónde quieres viajar? (Ej: París, Tokio)" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row g-4">
        {filteredFlights.length > 0 ? (
          filteredFlights.map(flight => (
            <div key={flight.id} className="col-12 col-md-6 col-lg-4">
              <FlightCard flight={flight} />
            </div>
          ))
        ) : (
          // Componente Bootstrap: Alert (Mensaje de alerta de advertencia)
          <div className="alert alert-warning" role="alert">
            No se encontraron vuelos para tu búsqueda.
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;