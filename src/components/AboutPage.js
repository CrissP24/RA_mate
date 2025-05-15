import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Realidad Virtual en Matemáticas - UE 15 de Octubre</h2>
        <p className="lead">
          Bienvenidos a nuestro proyecto de integración de la <strong>realidad virtual</strong> en la enseñanza de las matemáticas en la Unidad Educativa 15 de Octubre. Este enfoque innovador busca transformar la manera en que los estudiantes interactúan con conceptos matemáticos complejos, haciéndolos más accesibles y dinámicos.
        </p>
        <p className="lead">
          Utilizamos herramientas de realidad virtual para visualizar figuras geométricas en 3D, simular problemas de álgebra y explorar conceptos de cálculo de una manera inmersiva. Nuestro objetivo es mejorar la comprensión y el interés de los estudiantes en las matemáticas.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Beneficios</h3>
                <ul>
                  <li>Visualización interactiva de conceptos.</li>
                  <li>Aprendizaje práctico y dinámico.</li>
                  <li>Incremento en la retención de conocimientos.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Proyectos Actuales</h3>
                <ul>
                  <li>Simulador de geometría en VR.</li>
                  <li>Juegos educativos de álgebra.</li>
                  <li>Exploración de funciones en 3D.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => window.location.hash = '#login'}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;