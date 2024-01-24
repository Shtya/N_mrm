import React from 'react'
import FixedImg from "../../assets/bg/21.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplaySpeed: 0 ,
  slidesToShow: 2,
  slidesToScroll: 1 , 
//   autoplay:true ,
responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
      }
    },
]
};
const data = [
            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta" , job:"Back-end"},
            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta Knowly" , job:"Senior Full Stack"},

            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta" , job:"Back-end"},
            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta Knowly" , job:"Senior Full Stack"},
            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta" , job:"Back-end"},
            {desc : "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!" , name:"Marta Knowly" , job:"Senior Full Stack"},
    
]
const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className="bgCover2"><img src={FixedImg} alt="" /></div>
        <div className="container">
        <Slider  className="container" {...settings}>
        {
            data.map((e,index)=> (
                <div className="box" key={index}>
                        <div className="qoute">“</div>
                        <div className="p">“{e.desc}“ </div>
                        <hr/>
                        <div className="h3"> {e.name} </div>
                        <div className="p">{e.job}</div>
                    </div>
            ))
        }
        </Slider>
        </div>
    </div>
  )
}

export default Testimonials