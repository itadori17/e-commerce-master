import { onAuthStateChanged } from 'firebase/auth'
import React,{useState, useEffect} from 'react'
import fire, { auth, db } from '../Config/Config'
import { CartProducts } from './CartProducts'
import { Navbar } from './Navbar'
import StripeCheckout from 'react-stripe-checkout'

export const Cart = () => {
  function GetCurrentUser(){
    const [user, setUser]=useState(null)
    useEffect(()=>{
        const unbn =  onAuthStateChanged(auth, user=>{
            if(user){
               db.collection("user").doc(user.uid).get().then(snapshot=>{
                    setUser(snapshot.data().FullName)
                })
            } else{

            
           setUser(null) 
            }
        })
    return unbn
    },[])
    return user;
    

}
const user = GetCurrentUser();
const [cartProducts, setCartProducts]=useState()
useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user){
      db.collection('Cart'+ user.uid).onSnapshot(snapshot=>{
        const newCartProduct = snapshot.docs.map((doc)=>({
          ID:doc.id,
          ...doc.data(),

        }));
        setCartProducts(newCartProduct)
      })
      
    }else{
      console.log("user is not logged in to retrive cart")
    }
  })
},[])
console.log(cartProducts)
let Product
const cartProductIncrease=(cartProduct)=>{
  console.log(cartProduct)
  Product = cartProduct;
  Product.qty=Product.qty+1;
  Product.TotalPrice= Product.qty*Product.TotalPrice
  auth.onAuthStateChanged(user=>{
    if(user){
      db.collection('Cart'+ user.uid).doc(cartProduct.ID).update(Product).then(()=>{
        console.log("user can Increament Quantity")
      })


    }else{
      console.log("user is not logged in to increament")
    }
  })
}
const cartProductDecrease=(cartProduct)=>{
  console.log(cartProduct);
  Product = cartProduct;
  if(Product.qty>1){
    Product.qty=Product.qty-1;
    Product.TotalPrice= Product.qty*Product.TotalPrice;
    auth.onAuthStateChanged(user=>{
    if(user){
      db.collection('Cart'+ user.uid).doc(cartProduct.ID).set(Product).then(()=>{
        console.log("user can Decrement Quantity")
      })
    }else{
      console.log("user cannot decrement")
    }
  })
}
}
  return (
   
    <>
    
    <Navbar user={user}/>
    <br></br>
    {cartProducts.length>0 && (
      <div className='container-fluid'>
        <h1 className='text-center'>Cart</h1>
        <div className='products-box'>
<CartProducts cartProducts={cartProducts}
cartProductIncrease={cartProductIncrease}
cartProductDecrease={cartProductDecrease}
/>
        </div>
        <div className='summery-box'>
          <h5>Cart Summery</h5>
          <br></br>
          <div>
            Total No of Products:<span>10</span>
          </div>
          <div>Total Price to Pay:<span>R400</span></div>
          <br></br>
          <StripeCheckout>

          </StripeCheckout>
        </div>
      </div>
    )}
    {cartProducts.length<1 &&(
      <div className='container-fluid'>No products to show</div>
    )

    }

    
    </>
  )
}
