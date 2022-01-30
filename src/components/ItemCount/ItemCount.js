import React,  { useState }  from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css'

const ItemCount = () => {

    const [counter, setCounter] = useState(0);
  
    const handlerCounterUp = () => {
      setCounter(counter + 1);
    };
	return (
<>
<div className='row CounterStyle'>
    <div className='col-2'> <button onClick={handlerCounterUp}>{RemoveIcon}</button></div>
    <div className='col-8'>{counter}</div>
    <div className='col-2'><button onClick={() => setCounter(counter - 1)}>{AddIcon}</button></div>
</div>
</>
	);
};

export default ItemCount;
