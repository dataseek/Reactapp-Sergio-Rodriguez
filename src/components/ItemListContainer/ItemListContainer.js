import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
	return (
<>
<h2 className='container'> Este es un contenido {props.greeting}</h2>
<ItemCount />
</>
	);
};

export default ItemListContainer;
