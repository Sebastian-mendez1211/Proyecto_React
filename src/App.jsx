import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Catalog from './catalogo';
import ProductDetail from './ProductDetail';
import Contacto from './contacto';
import Cart from './Card'; 
import { CartProvider } from './CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './icons';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Catalog />} />
          <Route path="/catalogo" exact element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} /> {/* Añade la ruta del carrito */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
