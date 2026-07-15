import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { flightsData } from '../data/flights';

const Details = () => {
  const { id } = useParams();
  const flight = flightsData.find(f => f.id === parseInt(id));

  if (!flight) {
    return <div className="container mt-5"><h2>Vuelo no encontrado</h2></div>;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={flight.image} alt={flight.destination} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">{flight.destination}</h2>
          
          {/* Componente Bootstrap: Badge (Insignia para destacar texto) */}
          <h4 className="text-primary mb-3">
            <span className="badge bg-primary">Aerolínea: {flight.airline}</span>
          </h4>
          
          <p className="lead">{flight.description}</p>
          
          {/* Componente Bootstrap: List Group (Lista estilizada) */}
          <ul className="list-group mb-4">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Duración del vuelo
              <span className="fw-bold">{flight.duration}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Precio total
              <span className="fw-bold text-success">${flight.price} USD</span>
            </li>
          </ul>

          <Link to={`/booking/${flight.id}`} className="btn btn-success btn-lg w-100 shadow-sm">
            Agendar este vuelo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;