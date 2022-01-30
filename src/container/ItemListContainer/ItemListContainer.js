import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
	return (
<>
<h2 className='container'> Este es un contenido {props.greeting}</h2>
</>
	);
};

export default ItemListContainer;
