import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {fetchProducts,getHomeProd} from './API/fetchApp';
import './App.css'
import HeaderComponent from './includes/Header/HeaderComponent';
import MainPage from './templates/MainPage/MainPageComponent';
import FooterComponent from './includes/Footer/FooterComponent';
import ProductPageComponent from './templates/ProductPage/ProductPageComponent'
import CatalogPageComponent from './templates/CatalogPage/CatalogPageComponent';
import CartPageComponent from './templates/CartPage/CartPageComponent';
function App() {
    const [products, setProducts] = useState([]);
    const cart = JSON.parse(localStorage.getItem('cartData'));

    const [cartCount, setCartCount] = useState(
        cart.length
    );
 

    return (
        <div className='wraper'>
            <HeaderComponent cartCount ={cartCount}/>
            <Routes>
                 <Route path="/" element={<MainPage />} />
                 <Route path="/product/:slug" element={<ProductPageComponent setCartCount ={setCartCount}/>} />
                 <Route path="/catalog" element={<CatalogPageComponent/>} />
                 <Route path="/cart" element={<CartPageComponent/>} />
                 
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;
