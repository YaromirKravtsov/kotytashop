import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './SmallCards.module.css'
const SmallCardsItem = ({product}) => {
    const navigate = useNavigate();
    const goToProduct = (slug)=>{
        navigate('product/'+slug);
    }

    return (
        <>
            <Link to = {`product/${product.slug}`} className={style.item}>
                    <div className={style.imageWraper}>
                        <img src={product.image_url} alt="product img" className={style.image} loading="lazy" />
                    </div>
                    
                    <div className={style.title}>{product.name}</div>
                    <div className={style.shortDescription}>{product.short_description}</div>
                    {product.is_on_sale?(  
                        <div className={style.price}> <span style={{textDecoration:'line-through'}}>{product.regular_price}₴</span> {product.sale_price}₴</div>
                    ):(
                        <div className={style.price}>{product.regular_price}₴</div>
                    )}
                   
                </Link>
        </>
    );
}

export default SmallCardsItem;
