import React from 'react';
import style from './Footer.module.css';
import logo from '../../assets/img/logo2.png'
const FooterComponent = () => {
    return (
        <footer className={style.footer}>
        <div className="container">
            <div className={style.footer__row}>
                <div className={style.footerLine}></div>
                <div className={style.footerMain}>
                     <div className={style.footerMain__row}>
                        <div className={style.footerMain__rowLogo}>
                            <img src={logo} alt=""/>
                            <p>Kotyata Shop</p>
                        </div>
                        <div className={style.footerMain__rowContact}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V16C0 18.8284 0 20.2426 0.87868 21.1213C1.75736 22 3.17157 22 6 22H22.2857C25.1141 22 26.5284 22 27.407 21.1213C28.2857 20.2426 28.2857 18.8284 28.2857 16V6C28.2857 3.17157 28.2857 1.75736 27.407 0.87868C26.5284 0 25.1141 0 22.2857 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM5.26899 5.45366C4.80946 5.14731 4.18859 5.27149 3.88224 5.73101C3.57588 6.19054 3.70006 6.81141 4.15959 7.11776L13.0335 13.0337C13.7053 13.4815 14.5805 13.4815 15.2523 13.0337L24.1261 7.11776C24.5857 6.81141 24.7098 6.19054 24.4035 5.73101C24.0971 5.27149 23.4763 5.14731 23.0167 5.45366L14.1429 11.3696L5.26899 5.45366Z" fill="#667085"/>
                            </svg>
                            <a href = "mailti: kotyatashop@gmail.com">kotyatashop@gmail.com</a>
                        </div>
                        <div className={style.footerMain__rowContact}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M2.67962 2.63617L4.60868 0.707107C4.99921 0.316582 5.63237 0.316583 6.0229 0.707108L9.66131 4.34552C10.0518 4.73605 10.0518 5.36921 9.66131 5.75974L7.21113 8.20992C6.8336 8.58745 6.74 9.16422 6.97878 9.64177C8.3591 12.4024 10.5976 14.6409 13.3582 16.0212C13.8358 16.26 14.4125 16.1664 14.7901 15.7889L17.2403 13.3387C17.6308 12.9482 18.264 12.9482 18.6545 13.3387L22.2929 16.9771C22.6834 17.3676 22.6834 18.0008 22.2929 18.3913L20.3638 20.3204C18.2525 22.4317 14.9099 22.6693 12.5212 20.8777L9.20752 18.3925C7.46399 17.0848 5.91517 15.536 4.60752 13.7925L2.12226 10.4788C0.330722 8.09009 0.568272 4.74752 2.67962 2.63617Z" fill="#667085"/>
                              </svg>
                            <a href = "tel: + 380 (73) 882 51 13">+ 380 (73) 882 51 13</a>
                        </div>
                        <div className={style.footerMain__rowReserved}>
                            © 2023 KotyataShop.  Всі права захищені.
                        </div>
                     </div>
                     <div className={style.footerMain__row}>
                        <div className={style.footerMain__rowTitle}>
                            Розділи сайту
                        </div>
                        <a href="" className={style.footerMain__rowText}>Головна</a>
                        <a href="" className={style.footerMain__rowText}>Каталог</a>
                        <a href="" className={style.footerMain__rowText}>Про нас</a>
                     </div>
                     <div className = {style.footerMain__row}>
                        <div className={style.footerMain__rowTitle}>
                            Інформація
                        </div>
                        <a href="" className={style.footerMain__rowText}>Умови та положення</a>
                        <a href="" className={style.footerMain__rowText}>Політика конфіденційності</a>
                        
                     </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default FooterComponent;
