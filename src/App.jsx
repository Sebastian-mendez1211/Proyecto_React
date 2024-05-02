import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Catalog from './catalogo';
import ProductDetail from './ProductDetail';
import Contacto from './contacto'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './icons';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Catalog />} />
          <Route path="/catalogo" exact element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contacto" element={<Contacto />} /> 

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
