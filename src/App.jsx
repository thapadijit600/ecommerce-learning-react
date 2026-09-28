import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Deals from './Pages/Deals';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Categories from './Pages/Categories';
import NewArrivals from './Pages/NewArrivals';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import TrackOrder from './Components/TrackOrder';
import Help from './Components/Help';
import ShippingInfo from './Pages/ShippingInfo';
import Returns from './Components/Home/Returns';
import ScrollToTop from './Components/ScrollToTop';
import ProductDetails from './Pages/ProductDetails';







function App() {
  return (
    <BrowserRouter>

    <ScrollToTop />

    <Navbar />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/-arrivalsnew" element={<NewArrivals />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/help" element={<Help />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/returns" element={<Returns />} />
      </Routes> 

    <Footer />

    </BrowserRouter>
     
    
  );
}
export default App
