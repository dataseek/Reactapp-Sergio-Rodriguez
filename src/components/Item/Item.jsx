
import React, { useState, useEffect } from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({data}) => {

  const [Productos, setProductos] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((json) => setProductos(json));
	}, []);

	return (
	<div>
    {Productos.map((Productos) => {

	return (
      <div key={Productos.id}> 
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image={Productos.image}
              alt={Productos.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Productos.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Productos.description}
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
    
  );
  };
  

export default Item;
