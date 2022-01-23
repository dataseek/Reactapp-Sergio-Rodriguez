import React from 'react';
import './ItemListContent.css';

const ItemListContent = (props) => {
	return (
<>
<h2 className='container'> Este es un contenido {props.greeting}</h2>
</>
	);
};

export default ItemListContent;
