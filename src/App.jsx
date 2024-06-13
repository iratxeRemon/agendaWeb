// src/App.js
import React from 'react';
import './App.css';
import Encabezado from './Encabezado.jsx'

function App() {
  return (
    <div className="App">
      < Encabezado/>
      <div className="contenedor">
        <nav className="menu-lateral">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="cuerpo">
          Contenido del cuerpo
        </div>
      </div>
    </div>
  );
}

export default App;
