import React,{useState,useEffect} from 'react';
import style from './CatalogPageComponent.module.css'
import poset from '../../assets/img/catalog/poster-bac.png';
import vector from '../../assets/img/catalog/Vector.png'
import {fetchProductsApi} from '../../API/fetchApp';
import { useFettching } from '../../hooks/useFetching';
import MyLoader from '../../UI/Loader/MyLoader';
import SmallCardsList from '../../blocks/SmallCards/SmallCardsList';
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
        const filteredProducts = filterProductsByCategory(products, category);

        setOutputProducts(
            filteredProducts
        )
    };
    return (
        <div class={style.catalog}>{console.log(products)}
            <div class={style.catalogPoster} style={{backgroundImage:`url('${poset}')`}}>
                <div class="container">
                    <div class={style.catalogPoster__row} style ={{backgroundImage:`url('${vector}')`}}>
                        <div class = {style.catalogPoster__rowTitle}>
                            Все для Ваших Мурчиків
                        </div>
                        <h3 class={style.catalogPoster__rowText}>
                            Відкрийте чудовий каталог з кормами та аксесуарами для вашого малюка.
                        </h3>
                    </div>
                </div>
            </div>

            <div class={style.catalogBar}>
                <div class='container'>
                    <div class={style.catalogBar__row}>
                        <div class={style.catalogBarMenu}>
                            <p>Категорії</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 1L7 7L13 1" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class={style.catalogBarCategory__row}>
                        <div class={style.catalogBarCategory} 
                            onMouseEnter={() => handleMouseEnter('food')} 
                            onMouseLeave={() => handleMouseLeave('food')}
                            onClick={(event) => onSelect('food', event)}
                            >
                            
                                <p>Корм</p>
                                <svg style={{transform:isOpen.food?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class={style.catalogBarSubCategories} style={{display:isOpen.food?'flex':'none',width:'200px',height:'140px',marginTop:'-20px',marginLeft:'35px'}}>
                                <div class={style.subCategory} style ={{marginTop:'12px'}} onClick={(event) => onSelect('dry-food', event)}>Cухий корм</div>
                                <div class={style.subCategory} onClick={(event) => onSelect('wet-food', event)}>Вологий корм</div>
                                <div class={style.subCategory} onClick={(event) => onSelect('medicinal-food', event)}>Лікувальні раціони</div>

                                </div>
                            </div>
                            <div class={style.catalogBarCategory} 
                             onMouseEnter={() => handleMouseEnter('smakoliki')} 
                            onMouseLeave={() => handleMouseLeave('smakoliki')}
                            onClick={(event) => onSelect('smakoliki', event)}
                            >{/* smakoliki */}
                                <p  >Смаколики</p>
                                <svg style={{transform:isOpen.smakoliki?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                    <path d="M1 1L6 6L11 1" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class={style.catalogBarSubCategories} style={{display:isOpen.smakoliki?'flex':'none'}}>
                                        <div class={style.subCategory} onClick={(event) => onSelect('catit', event)}>Catit</div>
                                        <div class={style.subCategory} onClick={(event) => onSelect('gimcat', event)} >Gimcat</div>
                                        <div class={style.subCategory} onClick={(event) => onSelect('vitakraft', event)} >Vitakraft</div>
                                        <div class={style.subCategory} onClick={(event) => onSelect('other', event)} >Інші</div>
                                    </div>
                                </div>
                            <div class={style.catalogBarCategory} 
                                onMouseEnter={() => handleMouseEnter('toys')} 
                                onMouseLeave={() => handleMouseLeave('toys')}
                                onClick={(event) => onSelect('toys', event)}
                            >{/* toys */}
                            <p>Іграшки</p>
                            <svg style={{transform:isOpen.toys?'rotate(180deg)':'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                <path d="M1 1L6 6L11 1" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class={style.catalogBarSubCategories} style={{display:isOpen.toys?'flex':'none',marginTop:'-35px'}}>
                                <div class={style.subCategory} onClick={(event) => onSelect('interactive', event)}>Інтерактивні</div>
                                <div class={style.subCategory} onClick={(event) => onSelect('electric', event)}>Електричні</div>
                                <div class={style.subCategory} onClick={(event) => onSelect('catnip', event)}>Котяча м’ята</div>
                            </div>
                            </div>
                            <div class={style.catalogBarCategory} onClick={(event) => onSelect('care', event)} >
                                <p>Догляд</p>
                            </div>
                            <div class ={style.catalogBarCategory} onClick={(event) => onSelect('dishes', event)} >
                                <p>Посуд</p>
                            </div>
                            <div class={style.catalogBarCategory} onClick={(event) => onSelect('accessories', event)} >
                            <p>Аксесуари</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={style.catalog__main}>
                <div class="container">
                        <div class={style.catalog__cards}>
                        {console.log(outputProducts)}

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
