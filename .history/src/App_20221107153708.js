import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { NotFound } from './Components/NotFound';

import { Cart } from './Components/Cart';
import { AddProduct } from './Components/AddProduct';
import ProductVIew from './Components/ProductVIew';
import Sale from './Categories/Sale/Sale';
import Summer from './Categories/Summer/Summer';

function App() {
  return (
    <div className="App">
      <Router>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="signup" element={<Signup/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path = '/add-product' element={<AddProduct/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        <Route path ="/sale" element={<Sale/>}/>
        <Route path = '/summer' element={<Summer/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        <Route path = '/product-view' element={<ProductVIew/>}/>
        

    
      </Routes>
      </Router>
  
  
    </div>
  );
}

export default App;
