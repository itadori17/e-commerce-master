import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaShoppingCart, FaRegHeart } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import fire from '../Config/Config'
import './Navbar.css'

// import{log} from '../image/logo.jpg'
export const Navbar = ({user}) => {
    const navigate = useNavigate()
    const handleLogout=()=>{
        fire.auth().signOut().then(()=>{
            navigate('login')
        })
    }
  return (
    <div className='navbar'>
    <div className='leftside'>
         {/* <img src={logo} ></img> */}
         <h1><Link>Revelation</h1></Link>
         <h4>Home</h4>
         <h4>Summer</h4>
         <h4>Winter</h4>
         <h4>Accessories</h4>
         <h4>Sale</h4>
    </div>
    <div className='rightside'>
        {!user&&<>
            <div><Link className='navlink' to="/signup">Sign up</Link></div>
        <div><Link className='navlink'to="/login">Login</Link></div>
        </>
        }
        {user&&<>

        <div><Link className ="navlink" to='/'>{user}</Link></div>
        <div className="cart-menu-btn">
        <Link className ="navlink" to='/search'><BsSearch size={20}/></Link>
        <Link className ="navlink" to='/wishlist'><FaRegHeart size={20}/></Link>
        <Link className ="navlink" to='/cart'><FaShoppingCart size={20}/></Link>
            
            {/* <span className='cart-indicator'>{totalQty}</span> */}
    </div>
    <div className='btn btn-danger btn-md' onClick={handleLogout}>LOGOUT

    </div>
    </>

}
    </div>
    
    </div>
  )
}
