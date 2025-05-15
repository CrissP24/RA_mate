import React from 'react';
import Navbar from './Navbar';

const ProjectsPage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nuestros Proyectos</h2>
        <p className="lead">
          En la Unidad Educativa 15 de Octubre, estamos desarrollando una serie de proyectos innovadores que integran la realidad virtual en la enseñanza de las matemáticas. Cada proyecto está diseñado para abordar áreas específicas del currículo, haciendo que el aprendizaje sea más interactivo y efectivo.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Simulador de Geometría en VR</h3>
                <p>
                  Una aplicación que permite a los estudiantes visualizar y manipular figuras geométricas en 3D, explorando propiedades como volumen, área y ángulos en un entorno inmersivo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Juegos Educativos de Álgebra</h3>
                <p>
                  Juegos interactivos en realidad virtual que enseñan conceptos de álgebra, como ecuaciones y factorización, mediante desafíos y recompensas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Exploración de Funciones en 3D</h3>
                <p>
                  Una herramienta que permite a los estudiantes visualizar funciones matemáticas en tres dimensiones, ayudando a comprender conceptos de cálculo como derivadas e integrales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;