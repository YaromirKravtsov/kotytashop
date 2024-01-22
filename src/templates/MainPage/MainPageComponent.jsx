import React,{useState,useEffect} from 'react';
import style from './MainPageComponent.module.css';
import { Link } from 'react-router-dom';
import {getHomeProd,fetchProducts} from '../../API/fetchApp';

import SmallCardsList from '../../blocks/SmallCards/SmallCardsList';
import topBg from '../../assets/img/home/top-bg.webp';
import adv1 from '../../assets/img/home/advantages-img1.webp'
import adv2 from '../../assets/img/home/advantages-img2.webp'
import adv3 from '../../assets/img/home/advantages-img3.webp'
import advMain from '../../assets/img/home/advantages-main.webp'
import aboutUsImage from '../../assets/img/home/about-us.png'
import { useFettching } from '../../hooks/useFetching';
import MyLoader from '../../UI/Loader/MyLoader';
import { Helmet } from 'react-helmet-async';

const MainPageComponent = () => {
    const [products, setProducts] = useState([]);
    
    const [fetchProducts,isProductsLoading,productsError] = useFettching( async()=>{
        const data = await getHomeProd(); 
        if(data.success) setProducts(data.data);
     
      })
      
    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
       
        window.innerWidth <= 730 && setProducts([products[0], products[1]]);

     
    }, [isProductsLoading])

    return (
        <div className='page'>
         <Helmet>
        <title>Главная страница</title>
        <meta name="description" content="Описание главной страницы" />
        {/* Другие метатеги */}
      </Helmet>

            <div className={style.poster} style = {{backgroundImage: `url(${topBg}) ` }} loading="lazy">
                <div className={style.posterRow}>{console.log(products)}
                    <h2 className={style.posterTitle}>Відчиніть двері у світ котячих чудес  </h2>
                    <h3 className={style.posterText}>У нас ви знайдете найкращі товари для ваших котиків, щоб ваші хвостики отримали найкращий догляд і турботу!</h3>
                    <Link to="/catalog" className={style.posterButton}>Перейти до асортименту</Link>
                </div>
            </div>
            <div className={style.products}>
                <div className="container">
                    <div className={style.products__row}>
                        <h2 className={style.productsTitle}>Продукція</h2>
                        <h3 className={style.productsText}>Замовте зараз унікальні товар, які не знайдете на полицях звичайних зоомагазинів</h3>
                     
                        
                        {
                            productsError ? <p style={{textAlign:"center"}}>Произошла ошибка: {productsError}</p>
                            :
                            isProductsLoading
                            ?(
                                
                                    <div style ={{display:"flex",justifyContent:'center',marginTop:'50px'}}> <MyLoader/></div>
                            
                            )
                            :(
                                <div className={style.products__cards}>
                          
                                    <SmallCardsList products = {products}/> 
                                </div>
                            )
                        }
                        
                        
                        <Link to = '/catalog' className={style.posterButton}>
                            <div>Перейти до асортименту</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.advantages}>
            <div className="container">
                <div className={style.advantages__row}>
                    <h2 className={style.advantagesTitle}>Дбаємо про ваших малюків</h2>
                    <div className={style.advantages__main}>
                        <div className={style.advantages__mainLeft}>
                            <div className={style.advantages__card}>
                                <img src={adv1} alt="" className={style.advantages__cardImg} loading="lazy"/>
                                <div className={style.advantages__cardRight}>
                                    <h3 className={style.advantages__cardTitle}>Широкий асортимент</h3>
                                    <p className={style.advantages__cardText}>Великий вибір кормів та аксесуарів для котиків будь-якого віку, задовольняючи унікальні потреби кожного пухнастика.</p>
                                </div>
                            </div>
                            <div className={style.advantages__card}>
                                <img src={adv3} alt="" className = {style.advantages__cardImg} loading="lazy"/>
                                <div className={style.advantages__cardRight}>
                                    <h3 className={style.advantages__cardTitle}>Висока якість</h3>
                                    <p className={style.advantages__cardText}>Наші продукти обираються з ретельним контролем якості, гарантуючи, що ваші мурчики отримають тільки найкраще.</p>
                                </div>
                            </div>
                            <div className={style.advantages__card}>
                                <img src={adv2} alt="" className={style.advantages__cardImg} loading="lazy"/>
                                <div className={style.advantages__cardRight}>
                                    <h3 className={style.advantages__cardTitle}>Зручна доставка</h3>
                                    <p className = {style.advantages__cardText}>Наші продукти обираються з ретельним контролем якості, гарантуючи, що ваші мурчики отримають тільки найкраще.</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.advantages__mainRight}>
                            <img src={advMain} alt="" className = {style.advantages__mainImg} loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.aboutUs}>
            <div className='container'>
                <div className={style.aboutUsRow}>
                    <div className={style.aboutUsImages}>
                        <img src={aboutUsImage} alt="about us images" loading="lazy"/>
                    </div>
                    <div className={style.aboutUs__main}>
                        <h2 className={style.aboutUsMainTitle}>Історія Магазину</h2>
                        <p className={style.aboutUs__mainText}>Ідея створення магазину прийшла під час вимушеної подорожі до Німеччини. Наші товари - це результат дбайливого відбору за складом та якістю. 
                            З кожного продажу ми маємо можливість рятувати вуличних котиків та знаходити їм найкращі родини.</p>
                            <Link to ="/about-us" className={style.aboutUs__mainButton}>Детальніше</Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default MainPageComponent;
