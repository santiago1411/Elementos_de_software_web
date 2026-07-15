import React from 'react';
import { Link } from 'react-router-dom';

const FlightCard = ({ flight }) => {
  return (
    // Componente Bootstrap: Card (Tarjeta para mostrar contenido agrupado)
    <div className="card h-100 shadow-sm">
      <img src={flight.image} className="card-img-top" alt={flight.destination} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{flight.destination}</h5>
        <p className="card-text text-muted">{flight.airline}</p>
        <h6 className="text-success mb-3">${flight.price} USD</h6>
        
        {/* Componente Bootstrap: Button (Botón estilizado) */}
        <Link to={`/details/${flight.id}`} className="btn btn-outline-primary mt-auto">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;