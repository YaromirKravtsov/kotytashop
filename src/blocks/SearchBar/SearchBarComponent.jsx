import React,{useState,useEffect,useRef} from 'react';
import style from './SearchBarComponent.module.css'
import { fetchProductsApi } from '../../API/fetchApp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SearchBarComponent = ({setMarginRigth}) => {
    const [buttonValues, setButtonValues] = useState({
        isClicked:false,
        isOpen:false,
        maxWidth: '250px'
    });
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const searchHandelClik = async (event) => {
        event.preventDefault();
        if(window.innerWidth >= 1155){
            const value = adjustPixelValue(buttonValues.maxWidth, 36)
            console.log(value)
            setMarginRigth(value)
        }
       
        setButtonValues(prevValues => ({ ...prevValues, isOpen: true }));
        if (!buttonValues.isClicked) {
            const data = await fetchProductsApi(); 
            if (data.success) {
                setProducts(data.data);
                setButtonValues(prevValues => ({ ...prevValues, isClicked: true }));
            }
        }
       
    };
    function adjustPixelValue(pixelValue, adjustment) {
        // Извлекаем числовое значение из строки (например, '200px' -> 200)
        const numericValue = parseInt(pixelValue, 10);
    
        // Выполняем математическую операцию
        const adjustedValue = numericValue - adjustment;
    
        // Возвращаем новое значение в виде строки
        return `${adjustedValue}px`;
    }
    useEffect(() => {
     
            if (window.innerWidth <= 1255) {
                setButtonValues(prevValues => ({ ...prevValues, maxWidth: '200px' }));
              
            }  if (window.innerWidth <= 1125) {
                setButtonValues(prevValues => ({ ...prevValues, maxWidth: '160px' }));
            }
        
    
        
    
      
    }, []);
    useEffect(() => {
        
        const filteredItems = products.filter(item => 
            item.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setSearchResult(filteredItems)
    }, [inputValue]);

    /* ===================== */
    const excludedRef = useRef(null); // Ссылка на исключенный блок

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (excludedRef.current && !excludedRef.current.contains(event.target)) {
          // Логика, выполняемая при клике вне исключенного блока
          console.log("Клик вне исключенного блока!");
        }
      };
  
      // Добавление обработчика клика к документу
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        // Удаление обработчика при размонтировании компонента
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); 
    /* ======================= */
    const navigate = useNavigate()
    const onGoTo = (slug)=>{
        navigate(`/product/${slug}`);
        setButtonValues(prevValues => ({ ...prevValues, isOpen: false }));
        setInputValue('');
    }
    return (
        <>{console.log(buttonValues.maxWidth)}
            <form ref={excludedRef} className={style.searchBar} role="search" style = {{width:buttonValues.isOpen?buttonValues.maxWidth:'38px'}}> {console.log(searchResult)}
                <button type="submit" aria-label="Search" onClick ={(event)=>searchHandelClik(event)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.5379 17.5379C17.1468 17.929 16.5126 17.929 16.1215 17.5379L11.8711 13.2876C11.0654 12.4818 9.78311 12.4484 8.71064 12.8334V12.8334C8.05303 13.0695 7.35326 13.1875 6.61133 13.1875C4.77337 13.1875 3.21802 12.5511 1.94528 11.2784C0.671865 10.005 0.0351562 8.44928 0.0351562 6.61133C0.0351562 4.77337 0.671865 3.21769 1.94528 1.94427C3.21802 0.671527 4.77337 0.0351562 6.61133 0.0351562C8.44928 0.0351562 10.005 0.671527 11.2784 1.94427C12.5511 3.21769 13.1875 4.77337 13.1875 6.61133C13.1875 7.35326 13.0695 8.05303 12.8334 8.71064V8.71064C12.4484 9.78311 12.4818 11.0654 13.2876 11.8711L17.5379 16.1215C17.929 16.5126 17.929 17.1468 17.5379 17.5379V17.5379ZM6.61133 11.1641C7.87598 11.1641 8.9511 10.7216 9.83669 9.83669C10.7216 8.9511 11.1641 7.87598 11.1641 6.61133C11.1641 5.34668 10.7216 4.27156 9.83669 3.38597C8.9511 2.50105 7.87598 2.05859 6.61133 2.05859C5.34668 2.05859 4.27156 2.50105 3.38597 3.38597C2.50105 4.27156 2.05859 5.34668 2.05859 6.61133C2.05859 7.87598 2.50105 8.9511 3.38597 9.83669C4.27156 10.7216 5.34668 11.1641 6.61133 11.1641Z" fill="#88888C"/>
                    </svg>
                </button>
                <input placeholder="Search" type="search" name="search" id="search"
                style = {{width:buttonValues.isOpen?'80%':'0px'}}
                value = {inputValue}
                onChange={e=> setInputValue(e.target.value)}/>

            </form>
            <div className={style.searchBarResult} style = {{display:buttonValues.isOpen?'block':'none',width:buttonValues.isOpen?buttonValues.maxWidth:'38px'}}>
                {searchResult&& inputValue !==''&&(
                    
                    searchResult?.map(prod=>(
                        <div className={style.item} onClick={()=>onGoTo(prod.slug)}>{console.log(prod.price)}
                      
                            <img src={prod.image_url} alt="" />
                    
                        
                            <div className={style.title}>{prod.name}</div>
                  
                            
                        </div>
                    
                        
                    ))
                )}
            </div>
        </>
    );
}

export default SearchBarComponent;
