import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const IndividualProduct = (individualProduct, ID) => {
    console.log(individualProduct)
    const navigate = useNavigate();
    const helloWorld = (id) => {
        navigate('/product-view', { state: { id: id, object: individualProduct.individualProduct } });

        console.log('Hello world', id)

    };
    const handleAddToCart = () => {
        helloWorld(individualProduct.helloWorld)
    }

    return (
        
            <Grid item xs={3} md={10} lg={10} padding={1}>
                <Card sx={{ maxWidth: 250}} padding={10} className='productCard'>
                    <CardMedia
                    component='img'
                    height='200'
                    src={individualProduct.individualProduct.image}
                    alt="Paella d ish"
                    />
                <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                    {individualProduct.individualProduct.prodName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                    {individualProduct.individualProduct.prodDescription}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share" onClick={() => helloWorld(individualProduct.individualProduct.ID)}>
      <ShoppingCartIcon />
    </IconButton>
    
  </CardActions>
            
            </Card>
            </Grid>
            
    )
}
