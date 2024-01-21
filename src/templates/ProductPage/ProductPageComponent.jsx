import React,{useState,useEffect} from 'react';
import style from './ProductPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductBySlug} from '../../API/fetchApp';
import { useFettching } from '../../hooks/useFetching';
import MyLoader from '../../UI/Loader/MyLoader';
import ImageSlider from '../../UI/ImageSlider/ImageSlider';
import SuccesComponent from '../../blocks/Success/SuccesComponent';


const ProductPageComponent = ({setCartCount}) => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const [product, setProduct] = useState([]);
    const [mainPhoto, setMainPhoto] = useState();
    const [productCount, setProductCount] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [fetchProduct,isProductsLoading,productsError] = useFettching( async()=>{
        const data = await getProductBySlug(slug); 
        if(data.success) {
            setProduct(data.data);
            setMainPhoto(data.data.image_url)
        }
     
    })
    const [succesBar, setSuccesBar] = useState(false);
    const [isChosed, setIsChosed] = useState(false);
    useEffect(() => {
        fetchProduct();
    }, []);
    /* ====== */
    const addToCardArr = (cart, product) => {
        let isNew = true;
        let newCart = cart.map(element => {
            if (element.name === product.name && element.option === product.option) {
                isNew = false;
                return { ...element, count: element.count + 1 };
            } else {
                return element;
            }
        });
    
        if (isNew) {
            newCart = [...newCart, {...product, count: 1}];
        }
    
        return newCart;
    }
    const handelAddToCart = () => {
        if (product.attributes) {
            if (!selectedOption) {
                setIsChosed(true);
                return; // Выход из функции, если не выбран ни один вариант
            }
        }
    
        setSuccesBar(true);
    
        const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
        const productToCart = {
            name: product.name,
            option: selectedOption || 'Без атрибутов', // Добавьте дефолтное значение, если атрибут не выбран
            count: productCount,
            price: product.price,
            img: product.image_url
        };
    
        const newCartData = addToCardArr(cartData, productToCart);
        setCartCount(newCartData.length)
        localStorage.setItem('cartData', JSON.stringify(newCartData));
    };
    
    
    /* ==== */
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const incrementCount = ()=>{
        if(productCount <30){
            setProductCount(productCount+1)
        }
    }

    const decrementCount = ()=>{
        if(productCount >1){
            setProductCount(productCount-1)
        }
    }
    /* Description */
    const DescriptionText = ({ children }) => {
    const hasStrong = React.Children.toArray(children).some(child => 
        React.isValidElement(child) && child.type === 'strong'
    );


    
    const parentStyle = hasStrong ? {     marginTop: '40px',marginBottom: '20px' } : {};


    return (
        <p style={parentStyle}>
        {children}
        </p>
    );
    };
    return (
        <>
            {
                productsError ? <h1 style={{textAlign:"center"}}>Произошла ошибка: {productsError}</h1>
                :
                isProductsLoading
                ?(
                        <div style ={{display:"flex",justifyContent:'center',marginTop:'50px'}}> <MyLoader/></div>
                  
                )
                :(
                   <div className={style.page}>
                   <div className="container">
                        <div className={style.pageRow}>
                            <div className={style.pageMain}>
                                <div className={style.photoBlock}>
                                    <div className={style.mainPhotoWraper}>
                                        <img src= {mainPhoto}  className={style.mainPhoto}/>
                                    </div>
                                    <ImageSlider  images = {product.gallery_images} setMainPhoto ={setMainPhoto}/>
                                </div>
                                <div className={style.pageMenu}>
                                    <div className={style.pageMenu__name}>
                                        <div className={style.productName}>
                                            {product.name}
                                        </div>
                                        {product.in_stock?(
                                            <div className={style.status}>В наявності</div>
                                        ):(
                                            <div className={style.status} style={{color:'red'}}>Немає в наявності</div>
                                        )}
                                    </div>
                                    
                                    {!product.on_sale?(
                                        <div className={style.normalPrice} > {product.regular_price} ₴     </div>
                                    ):(
                                       <div className={style.normalPrice}>{product.price} ₴ <del>{product.regular_price} ₴</del> </div>
                                    )}
                                      
                                     
                                      <div className={style.selectBar} style = {{border:!product.attributes&& 'none'}}>
                                   
                                    <div className={style.selectBarTitle}>
                                    {
                                        product.attributes &&(
                                            <>{product.attributes.name}</>
                                        )
                                    }
                                    </div>
                                    {product.attributes&&(
                                    <form className={style.selectBarRow}>
                                        {product.attributes?.options?.map(el => (
                                            <label key={el}>
                                            <input 
                                                type="radio" 
                                                name="choice" 
                                                value={el}
                                                onChange={handleOptionChange}
                                                checked={selectedOption === el}
                                            />
                                            <div className={style.LableText}>{el}</div>
                                            </label>
                                        ))}
                                       
                                    </form>
                                    )}
                                    <label style={{ display: (isChosed && !selectedOption) ? 'block' : 'none' }} className={style.valid}>*Оберіть один з варіантів</label>


                                    </div>
                                    <div className={style.submitMenu}>
                                        <div className={style.counter}>
                                            <div  onClick={decrementCount}>-</div>
                                            <div style={{color:'#3A4980'}} >{productCount}</div>
                                            <div style={{color:'#3A4980'}} onClick={incrementCount}>+</div>
                                        </div>
                                        <button className={style.back} onClick={()=> navigate('/')}>Повернутись</button>{/*  Сделать логику возврата именнно с той странице откуда пришел */}
                                        <button onClick={handelAddToCart} className={style.add}>Додати</button>
                                    </div>
                                </div>

                            </div>
                            <div className={style.description}>
                                <div className={style.descriptionTitle}>
                                    Опис товару
                                </div>
                                <div className={style.descriptionText}>
                                <DescriptionText>
                                <p>
                                <span dangerouslySetInnerHTML={{ __html: product.description }} />
                                </p>

                                </DescriptionText>
                               
                                </div>
                            </div>
                        </div>
                   </div>
                        {succesBar&&(
                               <SuccesComponent 
                            text ={{
                                main:'Товар успішно додано до кошика!',
                                firstLine:'Продовжити покупки',
                                secondLink:'Переглянути кошик'
                            }} 
                            succesBar = {succesBar}
                            firstLink = 'catalog'  
                            secondLink= 'cart'
                            />
                        )}
                   </div>
                    
                  
                )
            }
        </>
    );
}

export default ProductPageComponent;
