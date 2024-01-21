import React,{useState,useEffect} from 'react';
import style from './CartPageComponent.module.css'
import CartListComponent from './CartList/CartListComponent';
import { Link } from 'react-router-dom';
const CartPageComponent = () => {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData')) ;
        setCartProducts(cartData)
    }, []);
    const cartUpdate = (newCart)=>{
        localStorage.setItem('cartData',JSON.stringify(newCart))
    }
    const countTotalSum = ()=>{
        let sum = 0;
        cartProducts.map(prod=>{
            sum += parseInt(prod.count)* parseInt(prod.price);
        })
        setTotalSum(sum)
    }
    const incrementProduct = (id, count) => {
        const newArr = cartProducts.map(prod => {
            if (prod.id === id) {
                return { ...prod, count: count };
            } else {
                return prod;
            }
        });
        setCartProducts(newArr);
        cartUpdate(newArr);
    }
    const decrementProduct = (id, count) => {
        const newArr = cartProducts.map(prod => {
            if (prod.id === id) {
                return { ...prod, count: count };
            } else {
                return prod;
            }
        });
        setCartProducts(newArr);
        cartUpdate(newArr);
    }
    useEffect(() => {
        countTotalSum()
    }, [cartProducts]);
    
    return (
        <>
               <div className={style.cart}>
            <div className="container">
                <div className = {style.cart__row}>
                    <div className={style.cartTitle}>
                        Товари у вашому кошику
                    </div>
                    <div className={style.cart__top}>
                        <div className={style.cart__topName}>Товар</div>
                        <div className={style.cart__topQuantity}>Кількість</div>
                        <div className={style.cart__topPrice}>Ціна</div>
                    </div>
                    <div className={style.cart__main} style = {{maxHeight:'520px'}}>
                        {cartProducts?(
                            <CartListComponent cartProducts = {cartProducts} incrementProduct ={incrementProduct} decrementProduct = {decrementProduct}/>
                        ):(
                            <div style ={{margin:'30px auto',fontSize:'20px'}} >Немає товарів у кошику</div>
                        )}
                       
                    </div>
                    <div className={style.cartSubmit}>
                        <div className={style.cartTotalPrice}>Загальна вартість: &nbsp; <span id="totalPrice">  {totalSum} ₴ </span></div>
                        <Link to="/catalog" className={style.cartContinueBtn}>Продовжити покупки</Link>
                        <Link to="/checkout" className={style.cartPlaceOrderBtn}>Оформити заказ</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartPageComponent;
