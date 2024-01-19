import React from 'react';
import cl from './MyLoader.module.css';
import catPaw from '../../assets/img/cat-paw-loader.webp'
const MyLoader = () => {
    return (
        <div className={cl.loader} style={{backgroundImage:`url(${catPaw})`}}></div>
    );
}

export default MyLoader;