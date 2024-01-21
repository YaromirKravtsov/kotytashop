import React from 'react';
import Slider from 'react-slick';

import style from './ImageSlider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = ({ images,setMainPhoto }) => {


    const NextArrow = ({ onClick }) => (
  <button className={style.slickNext} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" viewBox="0 0 10 26" fill="none">
        <path d="M8.5 1L1 12.6463L8.5 24.2925" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className={style.slickPrev} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" viewBox="0 0 10 26" fill="none">
        <path d="M8.5 1L1 12.6463L8.5 24.2925" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Показывать 3 изображения
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  };
  
  return (
    <div className={style.wraper}>
        <Slider {...settings} className={style.slider}>
          {images?.map((image, index) => (
            <button  key={index} className={style.img}>
              <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', borderRadius:'8px'}} onClick={()=>setMainPhoto(image)}/>
            </button>
          ))}
        </Slider>
    </div>
  );
};

export default ImageSlider;
