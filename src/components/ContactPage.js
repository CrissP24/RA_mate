import React from 'react';
import Navbar from './Navbar';

const ContactPage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nosotros</h2>
        <p className="lead">
          Estamos comprometidos en hacer que la enseñanza de las matemáticas sea más accesible y emocionante a través de la realidad virtual. Si tienes preguntas, sugerencias o deseas colaborar con nosotros, no dudes en contactarnos.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Información de Contacto</h3>
                <ul>
                  <li><strong>Correo:</strong> contacto@vrmatematicas15octubre.edu</li>
                  <li><strong>Teléfono:</strong> +591 1234 5678</li>
                  <li><strong>Dirección:</strong> Av. Principal, Unidad Educativa 15 de Octubre, Ciudad, País</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Horario de Atención</h3>
                <ul>
                  <li>Lunes a Viernes: 8:00 AM - 4:00 PM</li>
                  <li>Sábados: 9:00 AM - 12:00 PM</li>
                  <li>Domingos: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;