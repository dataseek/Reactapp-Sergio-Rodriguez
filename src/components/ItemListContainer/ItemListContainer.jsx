import './ItemListContainer.css';
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemListContainer = () => {
    const [Productos, setProductos] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=3')
			.then((response) => response.json())
			.then((json) => setProductos(json));
	}, []);

	return (
<div>
<div className='container'>
<div className ='row'>
<div className ='col-12 d-flex flex-wrap justify-content-center'>
    {Productos.map((Productos) => {

	return (

      <div className='bs-grey px-3 py-3' key={Productos.id}> 
          <Card sx={{ maxWidth: 345, height: 700 }}>
            <CardMedia
              component="img"
              height="500"
              image={Productos.image}
              alt={Productos.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Productos.title.substring(0,20)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Productos.description.substring(0,70)}
              </Typography>
              <Typography variant="body" color="text.primary">
                $ {Productos.price}
              </Typography>
            </CardContent>
            <CardActions>
              <ItemCount/>
            </CardActions>
          </Card>
          </div>
    );
})}
 </div>
</div>
</div>
</div>
    
  );
  };

export default ItemListContainer;
