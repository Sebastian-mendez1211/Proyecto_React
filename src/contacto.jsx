import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', formData);
    
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="container mt-4">
      <h2>Contacto</h2>
      <p>Nuestro equipo de servicio al cliente te ayudará cuando lo necesites. Solo completa el formulario 💌</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico *</label>
          <input type="email" className="form-control" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Número de teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
