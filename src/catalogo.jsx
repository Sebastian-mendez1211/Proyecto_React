import React from 'react';
import { Link } from 'react-router-dom';
import './catalogo.css';

const products = [
  { id: 1, name: 'Pantaloneta', image: './public/pantaloneta.jpeg', description: 'Descripción de la Pantaloneta' },
  { id: 2, name: 'Medias', image: './public/medias.jpeg', description: 'Descripción de las Medias' },
  { id: 3, name: 'Pantalones', image: './public/pantalon.jpeg', description: 'Descripción de los Pantalones' },
  { id: 4, name: 'Camisas', image: './public/camisa.jpeg', description: 'Descripción de las Camisas' }
];

function Catalog() {
  return (
    <div className="container mt-4">
      <h2>Catálogo de productos</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link to={`/product/${product.id}`} className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;

