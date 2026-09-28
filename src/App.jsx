import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NewArrivals from './Pages/NewArrivals';
import Product from './Pages/Product';
import Deals from './Pages/Deals';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';






function App() {
  return (
    <BrowserRouter>
    <Navbar />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/products" element={<Product />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
        
       
        
      </Routes> 
    </BrowserRouter>
     
    
  );
}
export default App
