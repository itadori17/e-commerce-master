import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';

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
                <div className='product'></div>
            </Grid>
            
    )
}
