import './App.css';
import NavBar from './components/NavBar/NavBar';
import Items from './components/ItemListContainer/ItemListContainer';
import React from 'react';


const App = () => {
  return (
    <div className="App">
      <NavBar
					item1='Home'
					item2='Servicios'
          item3='Nosotros'
					item4='Contacto'
				/>
      <Items
      greeting='Ejemplo'
      />
    </div>
  );
}




export default App;
