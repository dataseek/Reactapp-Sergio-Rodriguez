import './App.css';
import NavBar from './components/NavBar/NavBar';
import React, { Component } from 'react';



function App() {
  return (
    <div className="App">
      <NavBar
					item1='Home'
					item2='Servicios'
          item3='Nosotros'
					item4='Contacto'
				/>
    </div>
  );
}

export default App;
