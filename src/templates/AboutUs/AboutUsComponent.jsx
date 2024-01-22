import React from 'react';
import style from './AboutUs.module.css'
import reginaImg from '../../assets/img/about-us/story1.webp';
import cat1 from '../../assets/img/about-us/cat1.jpg'
import cat2 from '../../assets/img/about-us/cat2.jpg'
import cat3 from '../../assets/img/about-us/Tokio.jpg';
import img3 from '../../assets/img/about-us/photo_2024-01-22_22-40-01.jpg';
import img4 from '../../assets/img/about-us/IMG_9191.webp';
const AboutUsComponent = () => {
    return (
        <div>
            <div class= {style.aboutus}>
                <div class="container">
                <div class={style.aboutus__row}>
                    <div class= {style.aboutus__tileBlock}>
                        <h1 class={style.aboutus__tileblocktitle}>Про нас </h1>
                        <h2 class={style.aboutus__tileblocktext}>Як ми створили магазин для котів</h2>
                    </div>
                    <div class={style.aboutusmain}>
                        <div class={style.aboutusmain__firstblock}>
                            <h2>Від Харкова до Німеччини: Історія магазину</h2>
                            <div class={style.aboutusmain__firstblock__row}>
                                <div class={`${style.aboutustext} ${style.firstblock}`}>
                                    <div><p>Протягом останніх трьох років я рятую кошенят.
                                        З дитинства я завжди почувала особливу прив'язаність до котів та ніколи не могла пройти повз.
                                        На даний момент кількість врятованих кошенят перебільшує 100 маленьких життів.
                                    </p></div>
                                    <div><p>Волонтерство стало для мене життєвим покликанням. Навіть коли це було важко, коли я стикалася з викликами і труднощами, ніколи не зупинялася. Бачити, як ці кошенята живуть щасливо в родинах, додає мені сили і натхнення.</p></div>
                                </div>
                                <img src={reginaImg} alt="" class = {style.aboutusimg} style={{width:'390px',height:'440px'}}/>
                            </div>
                        </div>
                        <div class={style.aboutusmain__secondblock}>
                            <h2>Моя Котокоманда</h2>
                            <div class={style.aboutusmain__secondblock__row}>
                                <div class={style.aboutus__card}>
                                    <img src={cat1} alt="Кішка Кассіопея" class = {style.aboutusimg}/>
                                    <p class={style.aboutus__cardname}>Кассіопея</p>
                                </div>
                                <div class={style.aboutus__card}>
                                    <img src={cat3} alt="Кішка Токіо"/>
                                    <p class={style.aboutus__cardname}>Токіо</p>
                                </div>
                                <div class={style.aboutus__card}>
                                    <img  src= {cat2} alt= "Кішка Аліса" class = {style.aboutusimg}/>
                                    <p class= {style.aboutus__cardname}>Аліса</p>
                                </div>
                            </div>
                        </div>
                        <div class={style.aboutusmain__thirdblock}>
                            <img src={img3} alt="Евакуація з кошенятами" class = {style.aboutusimg}/>
                            <div class={`${style.aboutustext} ${style.thirdblock}`}>
                                <div>Але це було лише початком нашої довгої подорожі. Війна змусила нас залишити Харків і виїхати до Німеччини. Разом із нами їхали не лише наші тварини, але й ті хвостики, які на той час були в мене на кураторстві.</div>
                                <div>З початку нашого перебування в іншій країні я стала відкривати для себе асортимент німецьких зоомагазинів, який суттєво відрізняється від того, що ми бачимо на полицях наших зоомагазинів. Знайомство з їхніми фірмами та товарами призвело до багатьох захоплюючих відкриттів. </div>
                            </div>
                        </div>  
                        <div class={style.aboutusmain__fourthblock}>
                            <div class={`${style.aboutustext} ${style.fourthblock}`}>Від цього моменту у мене виникла ідея створити магазин іграшок для кішок, який дав би змогу і українським котикам насолоджуватися якісними товарами. Запити від друзів та моїх підписників стали джерелом натхнення. Я ретельно відбираю корм і смаколики за складом та тестую іграшки на своїх власних кішках.</div>
                            <img src={img4} alt="Кішка аліса лізе до коробки" class = {style.aboutusimg}/>
                        </div>
                      
                    </div>
                    <div class={style.aboutusmain__bottomtittle}>
                        <div class={style.aboutusmain__bottomtittleleft} style={{width:'60%'}}>
                            <div class= {style.bottomtittlelefttext}>Приєднуйтеся до нас</div>
                            <div class={style.bottomtittlelefttitle}>Щасливі кішки - щасливе життя</div>
                        </div>
                        <div class={`${style.bottomtittletext} ${style.aboutustext}`} style={{width:'40%'}}>Всі товари у нашому магазині - це результат безмежної любові та турботи. Ми віримо, що щасливі кішки - це щасливі власники. Кожен елемент у нашому асортименті допомагає зробити кішку щасливішою, здоровішою та активнішою.</div>
                    </div>
                </div>
                </div>
        </div>
        </div>
    );
}

export default AboutUsComponent;
