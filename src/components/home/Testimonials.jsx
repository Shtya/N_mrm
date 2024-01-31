import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 10000 ,
  slidesToShow: 2,
  slidesToScroll: 1 , 
  autoplay:true ,
  

responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        fade: true,
        autoplaySpeed: 5000 ,

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
const Testimonials = ({FixedImg , classN}) => {
  return (
    <div className='Testimonials'>
      <div className={`${classN || "bgCover2"}`}><img src={FixedImg} alt="" /></div>
        <div className="container">
          <div className="h1-head"> Testimonials</div>
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