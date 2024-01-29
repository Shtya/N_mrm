import React from 'react'
import AboutImg from "../../assets/home/why.webp"
import AboutImg2 from "../../assets/home/welcome.jpg"

import FixedImg from "../../assets/bg/34.webp"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination , EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ipsum dolor sit." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ipsum dolor sit." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
]

const About = () => {
    const settings = {
        direction : 'vertical' ,
        slidesPerView : 1 ,
        spaceBetween : 30 ,
        mousewheel : true ,
        effect:"coverflow",
        pagination : {   clickable: true, } ,
        modules : [Mousewheel, Pagination , EffectCoverflow],
        allowTouchMove : true,
        freeMode : true ,
        mousewheel: {
            releaseOnEdges: true,
            forceToAxis: true,
          },

    }
  return (
    <div className='about f-dir'>
        <div className="bgCover"> <img src={FixedImg} alt="" /> </div>

        <div className="responsive">
        <Swiper {...settings}  className="container" >
            <SwiperSlide className="boxes">
            <div className="box-inner">{
                    data.map((e,index) => ( <div className="box" key={index}> 
                        <div className="h2"> {e.title}  </div>
                        <div className="p"> {e.desc} </div>
                     </div> ))
                } </div>

            <div className="coverImg"> <img src={AboutImg2} alt="" /> </div>
            </SwiperSlide>

            <SwiperSlide className="boxes">
            <div className="box-inner">{
                    data.map((e,index) => ( <div className="box" key={index}> 
                        <div className="h2"> {e.title}  </div>
                        <div className="p"> {e.desc} </div>
                     </div> ))
                } </div>

            <div className="coverImg"> <img src={AboutImg} alt="" /> </div>
            </SwiperSlide>
           

        </Swiper>
        </div>

        <div className="responsive2">
            <div className="container">
            <div className="boxes">
                <div className="box-inner">{
                        data.map((e,index) => ( <div className="box" key={index}> 
                            <div className="h2"> {e.title}  </div>
                            <div className="p"> {e.desc} </div>
                        </div> ))
                    } </div>
                <div className="coverImg"> <img src={AboutImg2} alt="" /> </div>
            </div>
            <div className="boxes">
                <div className="box-inner">{
                        data.map((e,index) => ( <div className="box" key={index}> 
                            <div className="h2"> {e.title}  </div>
                            <div className="p"> {e.desc} </div>
                        </div> ))
                    } </div>
                <div className="coverImg"> <img src={AboutImg} alt="" /> </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About