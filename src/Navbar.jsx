import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">Mi Tienda</Link>

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

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalogo" className={`nav-link ${location.pathname === '/catalogo' ? 'active' : ''}`}>
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}>
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
          </ul>

          <hr className="d-md-none text-white-50" />

          <ul className="navbar-nav flex-row flex-wrap">
            <li className="nav-item col-6 col-md-auto p-3 position-relative">
              <Link to="/cart" className="nav-link text-white position-relative">
                <i id="cart-icon" className="bi bi-cart"></i>
                <small id="cart-number" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getTotalItems()}
                </small>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
