import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './SmallCards.module.css'
const SmallCardsItem = ({product}) => {
    const navigate = useNavigate();
    const goToProduct = (slug)=>{
        navigate('product/'+slug);
    }
    function truncateString(str) {
        const maxLength = 44;
        if (str.length <= 44) {
          return str;
        } else {
          return str.slice(0, maxLength) + "...";
        }
      }
    return (
        <>
            <Link to={`/product/'${product.slug}`} className={style.item}>
                    <div className={style.imageWraper}>
                        <img src={product.image_url} alt={`${product.name} ${truncateString(product.short_description)}`} className={style.image} loading="lazy" />
                    </div>
                    <div style ={{height:'200px'}}>
                    <h2 className={style.title}>{product.name}</h2>
                    <p className={style.shortDescription}>{truncateString(product.short_description)}</p>
                    {product.is_on_sale?(  
                        <div className={style.price}> <span style={{textDecoration:'line-through'}}>{product.regular_price}₴</span> {product.sale_price}₴</div>
                    ):(
                        <div className={style.price}>{product.regular_price}₴</div>
                    )}
                    </div>
                </Link>
        </>
    );
}

export default SmallCardsItem;
