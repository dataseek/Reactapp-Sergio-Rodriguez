import React,  { useState }  from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css'
import Button from '@mui/material/Button';
import Cart from '../CartWidget/CartWidget';



const ItemCount = () => {

    const [counter, setCounter] = useState(0);

    const Stock=10;
    const handlerCounterUp = () => {
      if (counter < Stock)
      {setCounter(counter + 1)}
      };
  
      
      const handlerCounterDown = () => {   
      if (counter > 0)
        {setCounter(counter - 1)}
      else {counter.useState(0)}
    };

    const AgregarCarrito = () => {   
     <Cart item={setCounter(counter)} />
    };


	return (
 <>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <Button onClick={handlerCounterDown} size="small"><RemoveIcon/></Button>
            <div>{counter}</div>
            <Button onClick={handlerCounterUp} size="small"><AddIcon/></Button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <Button onClick={AgregarCarrito} size="small" variant="outlined">Agregar a Carrito</Button>
          </div>
        </div>
</>    
	);
};

export default ItemCount;
