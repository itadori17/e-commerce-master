import React from 'react'
import { IndividualProduct } from './IndividualProduct'

export const CartProducts = ({cartProducts, cartProductIncrease, cartProductDecrease}) => {
  return cartProducts.map((cartProduct)=>(
    <IndividualProduct key={cartProduct.ID} cartProduct={cartProduct} 
    cartProductIncrease={cartProductIncrease}
    cartProductDecrease={cartProductDecrease}/>
  ))
}
