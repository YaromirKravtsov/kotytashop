import React,{useState,useEffect} from 'react';
import style from './CartPageComponent.module.css'
import CartListComponent from './CartList/CartListComponent';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sendOrder } from './sendOrder';
import SuccesComponent from '../../blocks/Success/SuccesComponent';
const CartPageComponent = () => {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [userInfo, setUserInfo] = useState({
        pib:'',
        telephone:'',
        email:''
    } 
    );

    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData')) ;
        setCartProducts(cartData)
        const userString = localStorage.getItem('userData');
        if (userString) {
            const userData = JSON.parse(userString);
            if (typeof userData === 'object') {
                setUserInfo(userData);
            }
        }

    }, []);
    const cartUpdate = (newCart)=>{
        localStorage.setItem('cartData',JSON.stringify(newCart))
    }
    const userInfoUpdate =(userInfo)=>{
        localStorage.setItem('userData', JSON.stringify(userInfo));

    }
    const countTotalSum = ()=>{
        let sum = 0;
        cartProducts?.map(prod=>{
            sum += parseInt(prod.count)* parseInt(prod.price);
        })
        setTotalSum(sum)
    }
    const incrementProduct = (id, count) => {
        const newArr = cartProducts?.map(prod => {
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
        const newArr = cartProducts?.map(prod => {
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
    useEffect(() => {
        userInfoUpdate(userInfo)      
    }, [userInfo.pib,
        userInfo.telephone,
        userInfo.email]);
    const deleteProduct = (idToDelete)=>{
      
     
        const newCart = cartProducts.filter(item => `${item.id}${item.option}` !== idToDelete);
        setCartProducts(newCart);
        cartUpdate(newCart); 
    }
    const [userInfoValid, setUserInfoValid] = useState({
        pib:true,
        telephone:true,
        email:true
    });
    const handleSubmit = async () => {
        if (!userInfo.pib || !userInfo.telephone || !userInfo.email) {
            setUserInfoValid({
                ...userInfoValid,
                pib: Boolean(userInfo.pib),
                telephone: Boolean(userInfo.telephone),
                email: Boolean(userInfo.email)
            });
            return;
        }
    
        const response = await sendOrder(cartProducts, userInfo);

        if (response.ok) {
            setIsSuccess(true);
            cartUpdate([])
          

        } else {
            alert('Щось пішло не так, напишіть у підтримку');
        }
    };
    
    return (
        <>
        <Helmet>
            <title>Кошик - Kotyata Shop | Завершіть Ваше Замовлення</title>
            <meta name="description" content="Ваш кошик у Kotyata Shop. Перегляньте вибрані товари для котів, внесіть необхідні зміни і перейдіть до оформлення замовлення. Кошача м'ята, фантани для пиття та інші аксесуари для вашого улюбленця."/>
      </Helmet>
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
                    <div className={style.cart__main} >
                        {cartProducts?(
                            <CartListComponent cartProducts = {cartProducts} incrementProduct ={incrementProduct} decrementProduct = {decrementProduct} deleteProduct ={deleteProduct}/>
                        ):(
                            <div style ={{margin:'30px auto',fontSize:'20px'}} >Немає товарів у кошику</div>
                        )}
                       
                    </div>
                    <div className={style.inputsRow}>
                        <div className="column">
                            <input type="text" placeholder='Введіть ПІБ*'
                            value = {userInfo.pib}
                            onChange={e=> setUserInfo({...userInfo,pib:e.target.value})}
                             />
                            <label style ={{display:userInfoValid.pib?'none':'block'}} className={style.label}>Це поле обов'язкове до заповнення</label>
                        </div>
                        <div className="column">
                            <input type="text" placeholder='Введіть номер телефону*' 
                            value = {userInfo.telephone}
                            onChange={e=> setUserInfo({...userInfo,telephone:e.target.value})}
                            />
                             <label style ={{display:userInfoValid.telephone?'none':'block'}} className={style.label}>Це поле обов'язкове до заповнення</label>
                        </div>
                        <div className="column">
                            <input type="text" placeholder='Введіть електронну пошту*' 
                                value = {userInfo.email}
                                onChange={e=> setUserInfo({...userInfo,email:e.target.value})}

                            />
                            <label style ={{display:userInfoValid.email?'none':'block'}} className={style.label}>Це поле обов'язкове до заповнення</label>
                        </div>
                    </div>
                    <div className={style.cartSubmit}>
                        <div className={style.cartTotalPrice}>Загальна вартість: &nbsp; <span id="totalPrice">  {totalSum} ₴ </span></div>
                        <Link to="/catalog" className={style.cartContinueBtn}>Продовжити покупки</Link>
                        <button onClick={handleSubmit} className={style.cartPlaceOrderBtn}>Оформити заказ</button>
                        <SuccesComponent succesBar ={isSuccess} text={{
                            main:`Дякуємо за замовлення! Скоро з вами зв'яжемося.`,
                            firstLine:'До ассортимету',
                            secondLink:'На головну'
                        }}
                        firstLink ='catalog'
                        secondLink =''
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartPageComponent;
