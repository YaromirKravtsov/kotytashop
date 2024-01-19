import React from 'react';
import gif from '../../assets/img/single-page/cat-animation-min.gif'
import style from './SuccesComponent.module.css'
import { Link } from 'react-router-dom';
const SuccesComponent = ({text, firstLink,secondLink,succesBar}) => {

    return (
        <div class={style.success} style ={{display: succesBar? 'block':'none'}}>
            <div class={style.success_icon}>
            <img src = {gif} alt=""/>
            </div>
            <div class={style.success__text}>{text.main}</div>
            <div class={style.successBtn__row}>
                <Link to = {'/'+firstLink} class ={style.success__cshp} >
                    {text.firstLine}
                </Link>
                <Link to = {'/'+secondLink} class={style.success__vica}>
                    {text.secondLink}
                </Link>
            </div>
        </div>
     
    );
}

export default SuccesComponent;
