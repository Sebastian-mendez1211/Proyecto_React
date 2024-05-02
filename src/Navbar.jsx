import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <div className="container-fluid">
        {/* icono o nombre */}

        {/* boton del menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* elementos del menu colapsable */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-white" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./catalogo" className="nav-link text-white">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./contacto" className="nav-link text-white">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Ayuda
              </a>
            </li>
          </ul>

          
          <hr className="d-md-none text-white-50" />

          <ul className="navbar-nav flex-row flex-wrap text-light">
            
            <li className="nav-item col-6 col-md-auto p-3">
              <i id="cart-icon" className="bi bi-cart text-white"></i>
              <small id="cart-number" className="ms-2 text-white">
                5
              </small>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


