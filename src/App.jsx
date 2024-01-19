import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {fetchProducts,getHomeProd} from './API/fetchApp';
import './App.css'
import HeaderComponent from './includes/Header/HeaderComponent';
import MainPage from './templates/MainPage/MainPageComponent';
import FooterComponent from './includes/Footer/FooterComponent';
import ProductPageComponent from './templates/ProductPage/ProductPageComponent'
import CatalogPageComponent from './templates/CatalogPage/CatalogPageComponent';
function App() {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
 

    return (
        <div className='wraper'>
            <HeaderComponent cartCount ={cartCount}/>
            <Routes>
                 <Route path="/" element={<MainPage />} />
                 <Route path="/product/:slug" element={<ProductPageComponent/>} />
                 <Route path="/catalog" element={<CatalogPageComponent/>} />
               {/*  <Route path="/tasks" element={<TasksComponent />} />
                <Route path="/task/:taskId" element={<SingleTaskComponent/>} />
                <Route path="/add-new-worker" element={<NewWorkerComponent/>} />
                <Route path="/profile" element={<ProfileComponent/>} /> */}
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;
