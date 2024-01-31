import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation , Autoplay } from 'swiper/modules';

import slide_image_1 from '../assets/portfolio/img1.jpg';
import slide_image_2 from '../assets/portfolio/img2.jpg';
import slide_image_3 from '../assets/portfolio/img3.jpg';
import slide_image_4 from '../assets/portfolio/img4.jpg';
import slide_image_5 from '../assets/portfolio/img1.jpg';
import slide_image_6 from '../assets/portfolio/img3.jpg';
import slide_image_7 from '../assets/portfolio/img4.jpg';

import FixedImg from "../assets/bg/4.webp"
function HeroComponent() {
    const setting = {
        effect : 'coverflow' ,
        grabCursor : true ,
        centeredSlides : true ,
        loop : true ,
        slidesPerView : 'auto' ,
        coverflowEffect : { rotate: 0, stretch: 0, depth: 100, modifier: 2.5, },
        pagination : { el: '.swiper-pagination', clickable: true },
        // navigation : { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, },
        modules : [EffectCoverflow, Pagination , Autoplay ],
        className : "swiper_container ",
        autoplay:{delay: 0 , "disableOnInteraction": false} ,
        speed: 3000 ,

    }


  return (
    <div className="HeroComponent">
        <div className="bgCover3" style={{background:`url(${FixedImg})`}}> </div>
    <div className="container">

      <Swiper {...setting}  >
        <SwiperSlide> <img src={slide_image_1} alt="slide_image" /> </SwiperSlide>
        <SwiperSlide> <img src={slide_image_2} alt="slide_image" /> </SwiperSlide>
        <SwiperSlide> <img src={slide_image_3} alt="slide_image" /> </SwiperSlide>
        <SwiperSlide> <img src={slide_image_4} alt="slide_image" /> </SwiperSlide>
        <SwiperSlide> <img src={slide_image_5} alt="slide_image" /> </SwiperSlide>
        <SwiperSlide> <img src={slide_image_6} alt="slide_image" /> </SwiperSlide>
        
        

        <div className="slider-controler"> <div className="swiper-pagination"></div> </div>
      </Swiper>
    </div>
    </div>
  );
}

export default HeroComponent;