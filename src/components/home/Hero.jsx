import React from 'react'

import Intro from '../../assets/bg/36.webp'

import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation , Scrollbar , Pagination   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';


const Hero = () => {

  return(
    <div className="hero">
    <div className="coverImg"> <img src={Intro} alt="" /> </div>
      <div className="h2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure incidunt animi recusandae. </div>
  </div>
      
  )
  //   const settings = {
  //       slidesPerView: 1 ,
  //       spaceBetween: 0 ,
  //       loop:true, 
  //       speed: 100 ,
  //       // preloadImages: true,
  //       autoplay:{delay: 8000 , "disableOnInteraction": false} ,
  //       modules: [ Autoplay  , Scrollbar , Pagination],
  //       centeredSlides:"true",
  //       pagination:{ clickable: true, dynamicBullets: true },
  //       slideShadows: false,
  //     }
  // return (
  //   <div className='Hero f-dir'>
  //       <Swiper  {...settings} className='swiper ' >

  //           <SwiperSlide className='f-dir'> 
  //             <div className="coverImg"> <img src={Intro1} alt="" /></div>

  //             <div className="container">
  //               <div className="coverinner"> <img src={Square1} alt="" /> </div>
  //               <div className="text f-dir"> 
  //                 <div className="h1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  //                 <div className="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maxime consectetur cumque aliquid impedit quod voluptatibus sit ratione distinctio doloremque!</div>
  //                 <div className="group-bt">
  //                   <div className="bt">About us</div>
  //                   <div className="bt">Contact us</div>
  //                 </div>
  //               </div>
  //             </div>

  //           </SwiperSlide>
            
  //           <SwiperSlide className='f-dir'> 
  //             <div className="coverImg"> <img src={Intro2} alt="" /></div>

  //             <div className="container">
  //               <div className="coverinner"> <img src={Square2} alt="" /> </div>
  //               <div className="text f-dir"> 
  //                 <div className="h1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  //                 <div className="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maxime consectetur cumque aliquid impedit quod voluptatibus sit ratione distinctio doloremque!</div>
  //                 <div className="group-bt">
  //                   <div className="bt">About us</div>
  //                   <div className="bt">Contact us</div>
  //                 </div>
  //               </div>
  //             </div>

  //           </SwiperSlide>

  //           <SwiperSlide className='f-dir'> 
  //             <div className="coverImg"> <img src={Intro3} alt="" /></div>

  //             <div className="container">
  //               <div className="coverinner"> <img src={Square3} alt="" /> </div>
  //               <div className="text f-dir"> 
  //                 <div className="h1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  //                 <div className="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maxime consectetur cumque aliquid impedit quod voluptatibus sit ratione distinctio doloremque!</div>
  //                 <div className="group-bt">
  //                   <div className="bt">About us</div>
  //                   <div className="bt">Contact us</div>
  //                 </div>
  //               </div>
  //             </div>

  //           </SwiperSlide>
  //       </Swiper>
  //   </div>
  // )
}

export default Hero

