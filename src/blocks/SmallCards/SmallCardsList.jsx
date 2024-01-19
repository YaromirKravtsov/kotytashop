import React from 'react';
import { Link } from 'react-router-dom';
import style from './SmallCards.module.css'
import SmallCardsItem from './SmallCardsItem';
const SmallCardsList = ({products}) => {
    return (
        <>
            {products.map((product,index)=>(
               <SmallCardsItem key ={index}product={product}/>
            ))}
        </>
    );
}

export default SmallCardsList;
