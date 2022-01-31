import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';


const App = () => {
  return (
    <div className="App">
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <NavBar/>
            </div>
          </div>
          <div className='row'>
            <div className ='col-12 d-flex flex-row justify-content-center'>
              <ItemListContainer />
            </div>
          </div>
      </div>

    </div>
  );
}




export default App;
