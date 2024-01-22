import React,{useState} from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import style from './HeaderComponent.module.css'
import { useLocation } from 'react-router-dom';
import SearchBarComponent from '../../blocks/SearchBar/SearchBarComponent';

const HeaderComponent = ({cartCount}) => {
   
    const location = useLocation();
    const [isClassEded, setIsClassEded] = useState(false);
  const addClass = ()=>{
    setIsClassEded(isClassEded?false:true)
  }
  const onGo = ()=>{
    setIsClassEded(false)
  }
  const isHomePage = location.pathname === '/'; 

  const [marginRigth, setMarginRigth] = useState(0);

    return (
        <>
            <header className = {style.header}>{console.log(isClassEded)}
            <div className="container">
                <div className={style.header__row}>
                    <div className={style.header__left}>
                        <div className={`${style.menu__icon} ${isClassEded?style._active:''}`} onClick={addClass}>
                            <span></span>
                        </div>
                        <Link to="/" className={style.header__logo}>
                            <img src={logo} alt="Котята шоп"/>
                            {isHomePage?(
                                <h1>Kotyata Shop</h1>
                            ):(
                                <div>Kotyata Shop</div>
                            )}
                        
                        </Link>
                 
                </div>
                    <div className={`${style.header__body} ${isClassEded?style._active:''}`} style={{marginLeft:marginRigth && marginRigth}}>{console.log(marginRigth)}
                        <Link to = '/' className={style.link} onClick={onGo}>
                            Головна
                        </Link>

                        <Link to = '/catalog' className={style.link} onClick={onGo}>
                        Каталог
                        </Link>
                        <Link to = '/about-us' className={style.link} onClick={onGo}>
                        Про нас
                        </Link>
                    </div>{console.log(marginRigth)}
                    <div className={style.header__right} >
                        <SearchBarComponent setMarginRigth = {setMarginRigth}/>
                        <Link to="cart" className={style.header__basket}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 1.83977C0 1.55619 0.112169 1.28421 0.31183 1.08369C0.511492 0.883162 0.782291 0.770508 1.06466 0.770508H4.25862C4.4961 0.770574 4.72675 0.850383 4.91388 0.997245C5.101 1.14411 5.23386 1.34959 5.29134 1.58101L6.15371 5.04756H30.875C31.0324 5.04766 31.1879 5.08283 31.3302 5.15054C31.4725 5.21825 31.5981 5.31681 31.6979 5.43913C31.7977 5.56144 31.8692 5.70447 31.9073 5.8579C31.9454 6.01132 31.9492 6.17134 31.9184 6.3264L29.789 17.019C29.7425 17.2522 29.6198 17.4631 29.4405 17.6184C29.2612 17.7738 29.0354 17.8646 28.7989 17.8766L8.78979 18.886L9.4009 22.1558H27.681C27.9634 22.1558 28.2342 22.2684 28.4339 22.469C28.6335 22.6695 28.7457 22.9415 28.7457 23.2251C28.7457 23.5086 28.6335 23.7806 28.4339 23.9811C28.2342 24.1817 27.9634 24.2943 27.681 24.2943H8.51724C8.26903 24.2941 8.0287 24.2068 7.8378 24.0474C7.6469 23.8881 7.51742 23.6668 7.47175 23.4218L4.27991 6.34565L3.42819 2.90904H1.06466C0.782291 2.90904 0.511492 2.79638 0.31183 2.59586C0.112169 2.39533 0 2.12336 0 1.83977ZM6.60512 7.18609L8.39374 16.7646L27.8642 15.783L29.5761 7.18609H6.60512ZM10.6466 24.2943C9.51709 24.2943 8.4339 24.7449 7.63525 25.547C6.83661 26.3491 6.38793 27.437 6.38793 28.5714C6.38793 29.7057 6.83661 30.7936 7.63525 31.5957C8.4339 32.3978 9.51709 32.8484 10.6466 32.8484C11.776 32.8484 12.8592 32.3978 13.6579 31.5957C14.4565 30.7936 14.9052 29.7057 14.9052 28.5714C14.9052 27.437 14.4565 26.3491 13.6579 25.547C12.8592 24.7449 11.776 24.2943 10.6466 24.2943ZM25.5517 24.2943C24.4223 24.2943 23.3391 24.7449 22.5404 25.547C21.7418 26.3491 21.2931 27.437 21.2931 28.5714C21.2931 29.7057 21.7418 30.7936 22.5404 31.5957C23.3391 32.3978 24.4223 32.8484 25.5517 32.8484C26.6812 32.8484 27.7644 32.3978 28.563 31.5957C29.3617 30.7936 29.8103 29.7057 29.8103 28.5714C29.8103 27.437 29.3617 26.3491 28.563 25.547C27.7644 24.7449 26.6812 24.2943 25.5517 24.2943ZM10.6466 26.4328C10.0818 26.4328 9.54022 26.6582 9.1409 27.0592C8.74158 27.4603 8.51724 28.0042 8.51724 28.5714C8.51724 29.1385 8.74158 29.6825 9.1409 30.0835C9.54022 30.4846 10.0818 30.7099 10.6466 30.7099C11.2113 30.7099 11.7529 30.4846 12.1522 30.0835C12.5515 29.6825 12.7759 29.1385 12.7759 28.5714C12.7759 28.0042 12.5515 27.4603 12.1522 27.0592C11.7529 26.6582 11.2113 26.4328 10.6466 26.4328ZM25.5517 26.4328C24.987 26.4328 24.4454 26.6582 24.0461 27.0592C23.6467 27.4603 23.4224 28.0042 23.4224 28.5714C23.4224 29.1385 23.6467 29.6825 24.0461 30.0835C24.4454 30.4846 24.987 30.7099 25.5517 30.7099C26.1164 30.7099 26.658 30.4846 27.0574 30.0835C27.4567 29.6825 27.681 29.1385 27.681 28.5714C27.681 28.0042 27.4567 27.4603 27.0574 27.0592C26.658 26.6582 26.1164 26.4328 25.5517 26.4328Z" fill="#272727"/>
                              </svg>
                            <div className={style.header__basketValue}>{cartCount}</div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </header>
      
        </>
    );
}

export default HeaderComponent;
