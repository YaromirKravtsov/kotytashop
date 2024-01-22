import React, { useState, useEffect } from 'react';
import style from '../CartPageComponent.module.css';

const CartItemComponent = ({ product, incrementProduct, decrementProduct, deleteProduct }) => {
  const [count, setCount] = useState(product.count);
  const [isAnimation, setIsAnimation] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
    incrementProduct(product.id, count + 1);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      decrementProduct(product.id, count - 1);
    } else {
      setIsAnimation(true);
      setTimeout(() => {
        setIsAnimation(false); // Сброс анимации после завершения
      }, 500); // Длительность анимации в миллисекундах
    }
  }
    return (
        <>{console.log(product)}
                            <div className={style.cartProduct}>
                            <img src={product.img} alt={product.name} className={style.productImg}/>
                            <div className={style.counterPriceAdaptive}>
                                <div className={style.productTitle}>{product.name}<br/> {product.option&&(<span style= {{color:"#979797"}}>{product.option}</span>)}</div>
                             
                                <div className={style.counter}>
                                    <button className={style.counterMinus}
                                    onClick={handleDecrement}
                                    >-</button>
                                    <div className={`${style.counterValue} ${isAnimation?style.animation:''}`} >{count}</div>
                                    <button className={style.counterPlus}
                                     onClick={handleIncrement}
                                      >+</button>
                                </div>
                            </div>
                            <div className={style.productPrice}>{product.price} ₴</div>
                            <button className={`${style.productDelete} ${style.removeButton}`} onClick={()=>deleteProduct(`${product.id}${product.option}`)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                    <path d="M15.375 10.7222V20.4444M9.625 10.7222V20.4444M3.875 5.16667V21.5556C3.875 23.1113 3.875 23.8886 4.18836 24.4828C4.46399 25.0054 4.90349 25.4312 5.44446 25.6975C6.05885 26 6.86355 26 8.47056 26H16.5294C18.1364 26 18.94 26 19.5544 25.6975C20.0953 25.4312 20.5363 25.0054 20.812 24.4828C21.125 23.8891 21.125 23.1125 21.125 21.5598V5.16667M3.875 5.16667H6.75M3.875 5.16667H1M6.75 5.16667H18.25M6.75 5.16667C6.75 3.87238 6.75 3.22556 6.96885 2.71509C7.26064 2.03445 7.81996 1.49337 8.52441 1.21145C9.05276 1 9.72292 1 11.0625 1H13.9375C15.2771 1 15.9469 1 16.4752 1.21145C17.1797 1.49337 17.7392 2.03445 18.031 2.71509C18.2499 3.22556 18.25 3.87239 18.25 5.16667M18.25 5.16667H21.125M21.125 5.16667H24" stroke="black" strokeOpacity="0.64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                  
          
                    </div>
        </>
    );
}

export default CartItemComponent;
