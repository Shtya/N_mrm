import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Imgblog from "../../assets/home/test/  (7).webp"
import { useNavigate } from 'react-router-dom'

var settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 0 ,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  // autoplay:true ,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
      }
    },
  ]
};

const blog = [
  {img : Imgblog ,  title:"Events photography" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved." , data:"15" , data2:"May"},
  {img : Imgblog ,  title:"Fashion photography" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
  {img : Imgblog ,  title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
  {img : Imgblog ,  title:"Food photography" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
  {img : Imgblog ,  title:"Product photography" , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
  {img : Imgblog ,  title:"Automotive photography" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
]


const Blog = () => {
  
  return (
    <div className="blog ">
    <div className="h1-head"> Latest Blogs</div>
    <Slider  className="container" {...settings}>
      {
        blog.map((e,index)=> (
      <div className="box" key={index}>

        <div className="coverImg">
          <img className="main" src={e.img} alt=""/>
          <i  className="fa-solid second fa-share-from-square"></i>
          <div className="box-data">
            <div className="num">{e.data}</div>
            <div className="month"> {e.data2} </div>
          </div>
        </div>

        <div className="text">
          <div className="h3"> {e.title} </div>
          <div className="p"> {e.desc} </div>
        </div>
      </div>
        )) }
      
    </Slider>
  </div>
  )
}

export default Blog