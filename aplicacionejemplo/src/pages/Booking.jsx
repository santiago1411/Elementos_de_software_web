import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flightsData } from '../data/flights';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const flight = flightsData.find(f => f.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Reserva confirmada!\nPasajero: ${formData.name}\nDestino: ${flight.destination}\nFecha: ${formData.date}\nHora: ${formData.time}`);
    navigate('/');
  };

  if (!flight) return <div className="container">Vuelo inválido</div>;

  return (
    <div className="container d-flex justify-content-center">
      {/* Componente Bootstrap: Card (Usada aquí como contenedor de formulario) */}
      <div className="card shadow w-100" style={{ maxWidth: '600px' }}>
        <div className="card-header bg-success text-white text-center py-3">
          <h4 className="mb-0">Reserva tu vuelo a {flight.destination}</h4>
        </div>
        <div className="card-body p-4">
          
          {/* Componente Bootstrap: Form (Estilos nativos para controles de formulario) */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre Completo</label>
              <input 
                type="text" 
                className="form-control" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Fecha de Vuelo</label>
                <input 
                  type="date" 
                  className="form-control" 
                  required 
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label fw-bold">Hora Específica</label>
                <input 
                  type="time" 
                  className="form-control" 
                  required 
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 btn-lg">
              Confirmar y Pagar ${flight.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;