import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination , Autoplay } from 'swiper/modules';

import FixedImg from "../assets/bg/bg8.webp"
import Divider from './Divider';
function HeroComponent({images}) {

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
    <>
    <div className="HeroComponent">
        <div className="bgCover3" style={{background:`url(${FixedImg})`}}> </div>
    <div className="container">

      <Swiper {...setting}  >
        {
          images?.slice(0 , 7)?.map((e,index)=>(
            <SwiperSlide key={index}> <a href={`#${e.id}`}>  <img src={e.img}  alt="slide_image" />  </a>  </SwiperSlide>
          ))

        }
        <div className="slider-controler"> <div className="swiper-pagination"></div> </div>
      </Swiper>
    </div>
    </div>
    <Divider />
    </>
  );
}

export default HeroComponent;