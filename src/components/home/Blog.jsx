import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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




const Blog = ({blog , title , Img}) => {
  const Navigate = useNavigate() ;
  
  return (
    <div className="blog ">
      {Img && <div className="bgCover2"> <img src={Img} alt="" /> </div>}

    <div className="h1-head"> {title} </div>
    <Slider  className="container" {...settings}>
      {
        blog?.map((e,index)=> (
      <div className="box" key={index} onClick={_=> Navigate("/blogs/id")}>

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