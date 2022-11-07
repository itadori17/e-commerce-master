import React from 'react'
import { auth, db } from '../Config/Config'
import { FiPlusCircle } from 
export const IndividualCartProduct = ({cartProduct,cartProductIncrease,cartProductDecrease}) => {
    const handleProductIncrease=()=>{
        cartProductIncrease(cartProduct)
    }
    const handleProductDecrease=()=>{
        cartProductDecrease(cartProduct)
    }
    const handleDelete=()=>{
         auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('Cart'+ user.uid).doc(cartProduct.ID).delete().then(()=>{

                })
            }
         })
    }
  return (
    <div className='product'>
    <div className='product-img'>
     <img src={cartProduct.cartProduct.productImage} alt='product-image' />
     </div>
     <div className='product-name'>{cartProduct.cartProduct.productName}</div>
     <div className='product-desccription'>{cartProduct.cartProduct.productDescription}</div>
     <div className='product-price'>R{cartProduct.cartProduct.productPrice}</div>
     <span>Quantity</span>
     <div className='product-text quantity-box'>
         <div className='actio-btns minus' onClick={handleProductDecrease}>
             <button><FiMinusCircle size={20}/></button>
         </div>
         <div>{cartProduct.cartProduct.qty}</div>
         <div className='actio-btns plus' onClick={handleProductIncrease}>
             <button><FiPlusCircle size={20}/></button>
         </div>
     </div>
     <div className='product-text cart-price'>R{cartProduct.cartProduct.TotalPrice}</div>
     <div className='btn btn-danger btn-md cart-btn' onClick={handleDelete}>ADD CART</div>
     </div>
  )
}
