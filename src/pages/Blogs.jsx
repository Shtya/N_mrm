import React, { useState } from 'react'
import Imgblog from "../assets/blogs/cover2.webp"
import FixedImg from "../assets/bg/34.webp"
import { useNavigate } from 'react-router'

import slide_image_1 from '../assets/portfolio/img1.jpg';
import slide_image_2 from '../assets/portfolio/img2.jpg';
import slide_image_3 from '../assets/portfolio/img3.jpg';
import slide_image_4 from '../assets/portfolio/img4.jpg';
import slide_image_5 from '../assets/portfolio/img1.jpg';
import slide_image_6 from '../assets/portfolio/img3.jpg';
import slide_image_7 from '../assets/portfolio/img4.jpg';
import HeroBlog from '../components/HeroBlog'
import Divider from '../components/Divider';
const HeroImages = [ {img : slide_image_1 }, {img : slide_image_2 }, {img : slide_image_3 }, {img : slide_image_4 }, {img : slide_image_5 }, {img : slide_image_6 }, {img : slide_image_7 },
]

const blog = [
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved." , data:"15" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Lorem ipsum sit, amet consectetur adipisicing elit. Obcaecati, vel." , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
  ]


const Blogs = () => {
  const navigate = useNavigate()
    // const [Next , Setnext] =  useState({from:0 , to:6})
    
  return (
    <>
    <HeroBlog />
    <Divider />
    
    <div className="blogs" id='next'>
      

        <div className="h1-head"> Latest Blogs</div>
        <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
        <div  className="container" >
          {
            blog.map((e,index)=> (
          <div className="box" key={index}>

            <div className="coverImg">
              <img className="main" src={e.img} alt=""/>
              <div className="box-data">
                <div className="num">{e.data}</div>
                <div className="month"> {e.data2} </div>
              </div>
            </div>

            <div className="text">
              <div className="h3"> {e.title} </div>
              <div className="p"> {e.desc} </div>
              <div className="bt" onClick={_=> navigate("/blogs/id")} >More</div>
            </div>
          </div>
            )) }
          
        </div>

  </div>
  </>
  )
}

export default Blogs