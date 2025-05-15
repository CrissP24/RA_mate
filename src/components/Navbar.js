import React from 'react';

const Navbar = () => {
  const currentPage = window.location.hash || '#home';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#home">VR Matemáticas</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${currentPage === '#home' ? 'active' : ''}`} href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${currentPage === '#about' ? 'active' : ''}`} href="#about">Acerca</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${currentPage === '#projects' ? 'active' : ''}`} href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${currentPage === '#nosotros' ? 'active' : ''}`} href="#nosotros">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;