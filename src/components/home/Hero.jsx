import React from 'react'
import Intro from '../../assets/bg/36.webp'
import Intro2 from '../../assets/bg/35.webp'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , EffectFade , Navigation , Scrollbar , Pagination , A11y   } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';


const Hero = () => {

    const settings = {
      modules: [ Autoplay  , Scrollbar , Pagination , EffectFade , Navigation , A11y ],
        slidesPerView: 1 ,
        spaceBetween: 0 ,
        loop:true, 
        speed: 500 ,
        autoplay:{delay: 8000 , "disableOnInteraction": false} ,
        centeredSlides:"true",
        pagination:{ clickable: true, dynamicBullets: true },
        slideShadows: false,
        // navigation : true
      }
  return (
    <div className='hero f-dir'>
        <Swiper  effect='fade'  {...settings} className='swiper '  >

            <SwiperSlide className='f-dir'> 
              <div className="coverImg"> <img src={Intro} alt="" /></div>
              <div className="container">
                <div className="h2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure incidunt animi recusandae. </div>
              </div>

            </SwiperSlide>

            <SwiperSlide className='f-dir'> 
              <div className="coverImg"> <img src={Intro2} alt="" /></div>
              <div className="container">
                <div className="h2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure incidunt animi recusandae. </div>
              </div>

            </SwiperSlide>
            
            

        </Swiper>
    </div>
  )
}

export default Hero

