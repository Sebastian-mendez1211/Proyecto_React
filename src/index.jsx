import React from 'react'; // Importa React
import ReactDOM from 'react-dom'; // Importa ReactDOM
import Main from './Main'; // Importa el componente Main (asegúrate de corregir el punto antes de "Main")

// Utiliza ReactDOM.render para renderizar el componente Main dentro del elemento con el id "root"
ReactDOM.render(
  // Renderiza el componente Main dentro de React.StrictMode
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza el componente en el elemento con el id "root" del HTML
);
