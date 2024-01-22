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
import { HelmetProvider } from 'react-helmet-async';

import { useFettching } from './hooks/useFetching';
function App() {
    const cart = JSON.parse(localStorage.getItem('cartData'));

    const [cartCount, setCartCount] = useState(
        cart ? cart.length:0
    );


    return (
        <div className='wraper'>
          <HelmetProvider>
                <HeaderComponent cartCount ={cartCount}/> 
                    <Routes>
                         <Route path="/" element={<MainPage />} />
                         <Route path="/product/:slug" element={<ProductPageComponent setCartCount ={setCartCount}/>} />
                         <Route path="/catalog" element={<CatalogPageComponent/>} />
                         <Route path="/cart" element={<CartPageComponent/>} />

                    </Routes>
                <FooterComponent/>
            </HelmetProvider>
        </div>
    );
}

export default App;
