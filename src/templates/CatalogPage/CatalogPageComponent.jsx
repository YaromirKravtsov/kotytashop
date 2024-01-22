import React,{useState,useEffect} from 'react';
import style from './CatalogPageComponent.module.css'
import poset from '../../assets/img/catalog/poster-bac.webp';
import posetMb from '../../assets/img/catalog/poster-bac-phone.webp';
import vector from '../../assets/img/catalog/Vector.webp'
import {fetchProductsApi} from '../../API/fetchApp';
import { useFettching } from '../../hooks/useFetching';
import MyLoader from '../../UI/Loader/MyLoader';
import SmallCardsList from '../../blocks/SmallCards/SmallCardsList';
import { Helmet } from 'react-helmet-async';
const CatalogPageComponent = () => {
    
    const [products, setProducts] = useState([]);
    const [outputProducts, setOutputProducts] = useState();
    const [fetchProducts,isProductsLoading,productsError] = useFettching( async()=>{
        const data = await fetchProductsApi(); 
        if(data.success) {
            setProducts(data.data);
            setOutputProducts(data.data)
        }
      
      })
      useEffect(() => {
        fetchProducts();
    }, []);
    const [isBarOpen, setIsBarOpen] = useState(false);
    const windWidth = window.innerWidth;
    /* === */
    const [isOpen, setIsOpen] = useState({
        food:false,
        smakoliki:false,
        toys:false
    });

    const handleMouseEnter = (elName) => {
        setIsOpen({
          ...isOpen,
          [elName]: true,
        });
    };

    const handleMouseLeave = (elName) => {
        setIsOpen({
          ...isOpen,
          [elName]: false,
        });
    };
    function filterProductsByCategory(products, categorySlug) {
        return products.filter(product => 
            product.categories.some(category => category.slug === categorySlug)
        );
    }
    const onSelect = (category, event) => {
        event.stopPropagation();
        if(windWidth<=620){
            console.log('toys');
            if(category == 'food' ||category =='smakoliki'|| category == 'toys'){
             
                setIsOpen({
                    ...isOpen,
                    [category]: !isOpen[category],
                  });
            }else{
                const filteredProducts = filterProductsByCategory(products, category);
                setIsBarOpen(false);
                setOutputProducts(
                    filteredProducts
                )
            }


        }else{
            const filteredProducts = filterProductsByCategory(products, category);

            setOutputProducts(
                filteredProducts
            )
        }
        
    };
    const handleBarClick = ()=>{
        setIsBarOpen(isBarOpen?false:true)
    }
    return (
        <div className={style.catalog}>
         <Helmet>
                <title>Каталог товарів для котів - Kotyata Shop</title>
                <meta name="description" content="Відкрийте для себе різноманіття товарів для котів: іграшки, аксесуари, корм та багато іншого у Kotyata Shop."/>
            </Helmet>
            <div className={style.catalogPoster} style={{backgroundImage:`url('${windWidth >620? poset:posetMb }')`}}>
                <div className="container">
                    <div className={style.catalogPoster__row} style ={{backgroundImage:`url('${vector}')`}}>
                        <div className = {style.catalogPoster__rowTitle}>
                            Все для Ваших Мурчиків
                        </div>
                        <h3 className={style.catalogPoster__rowText}>
                            Відкрийте чудовий каталог з кормами та аксесуарами для вашого малюка.
                        </h3>
                    </div>
                </div>
            </div>

            <div className={style.catalogBar}>
                <div className='container'>{console.log(windWidth)}
                    <div className={style.catalogBar__row}>
                        <div className={style.catalogBarMenu} onClick={handleBarClick}>
                            <p>Категорії</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 1L7 7L13 1" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className={`${style.catalogBarCategory__row} ${isBarOpen?style.show:''}`} >
                        <div className={style.catalogBarCategory} 
                            onMouseEnter={() => handleMouseEnter('food')} 
                            onMouseLeave={() => handleMouseLeave('food')}
                            onClick={(event) => onSelect('food', event)}
                            >
                                <div className="row">
                                    <p>Корм</p>
                                    <svg style={{transform:isOpen.food?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M1 1L6 6L11 1" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={style.catalogBarSubCategories} style={{display:isOpen.food?'flex':'none',width:'200px',height:'140px',marginTop:'-20px',marginLeft:'35px'}}>
                                <div className={style.subCategory} style ={{marginTop:'12px'}} onClick={(event) => onSelect('dry-food', event)}>Cухий корм</div>
                                <div className={style.subCategory} onClick={(event) => onSelect('wet-food', event)}>Вологий корм</div>
                                <div className={style.subCategory} onClick={(event) => onSelect('medicinal-food', event)}>Лікувальні раціони</div>

                                </div>
                            </div>
                            <div className={style.catalogBarCategory} 
                             onMouseEnter={() => handleMouseEnter('smakoliki')} 
                            onMouseLeave={() => handleMouseLeave('smakoliki')}
                            onClick={(event) => onSelect('smakoliki', event)}
                            >{/* smakoliki */}
                                <div className="row">
                                    <p  >Смаколики</p>
                                    <svg style={{transform:isOpen.smakoliki?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M1 1L6 6L11 1" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {console.log(isOpen.smakoliki && windWidth)}
                                </div>
                   
                           
                                <div className={style.catalogBarSubCategories} style={{display:isOpen.smakoliki?'flex':'none'}}>
                                        <div className={style.subCategory} onClick={(event) => onSelect('catit', event)}>Catit</div>
                                        <div className={style.subCategory} onClick={(event) => onSelect('gimcat', event)} >Gimcat</div>
                                        <div className={style.subCategory} onClick={(event) => onSelect('vitakraft', event)} >Vitakraft</div>
                                        <div className={style.subCategory} onClick={(event) => onSelect('other', event)} >Інші</div>
                                    </div>
                                </div>
                            <div className={style.catalogBarCategory} 
                                onMouseEnter={() => handleMouseEnter('toys')} 
                                onMouseLeave={() => handleMouseLeave('toys')}
                                onClick={(event) => onSelect('toys', event)}
                            >{/* toys */}
                             <div className="row">
                            <p>Іграшки</p>
                           
                                <svg style={{transform:isOpen.toys?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={style.catalogBarSubCategories} style={{display:isOpen.toys?'flex':'none',marginTop:'-35px'}}>
                                <div className={style.subCategory} onClick={(event) => onSelect('interactive', event)}>Інтерактивні</div>
                                <div className={style.subCategory} onClick={(event) => onSelect('electric', event)}>Електричні</div>
                                <div className={style.subCategory} onClick={(event) => onSelect('catnip', event)}>Котяча м’ята</div>
                            </div>
                            </div>
                            <div className={style.catalogBarCategory} onClick={(event) => onSelect('care', event)} >
                                <p>Догляд</p>
                            </div>
                            <div className ={style.catalogBarCategory} onClick={(event) => onSelect('dishes', event)} >
                                <p>Посуд і фонтани</p>
                            </div>
                            <div className={style.catalogBarCategory} onClick={(event) => onSelect('accessories', event)} >
                            <p>Аксесуари</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.catalog__main}>
                <div className="container">
                        <div className={style.catalog__cards}>
                        {
                            productsError ? <h1 style={{textAlign:"center"}}>Произошла ошибка: {productsError}</h1>
                            :
                            isProductsLoading
                            ?(
                          
                                <div style ={{display:"flex",justifyContent:'center',margin:'0 auto',marginTop:'50px'}}> <MyLoader/></div>
                              
                            )
                            :(
                                <>
                                <SmallCardsList products ={outputProducts}/>
                                </>
                            )
                        }
                   
                </div>
            </div>
        </div>
        </div>
    );
}

export default CatalogPageComponent;
