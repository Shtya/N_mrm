import React, { useState } from 'react'
import Imgblog from "../assets/blogs/cover2.webp"
import BlogIntro from "../assets/contact/intro.webp"
import FixedImg from "../assets/bg/34.webp"
import Divider from '../components/Divider'
import { useNavigate } from 'react-router'
import HeroComponent from '../components/HeroComponent'

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

    const [Next , Setnext] =  useState({from:0 , to:6})
    const Pagination = (data) =>{
        Setnext(data)
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }
    
  return (
    <>
    <HeroComponent />
      <Divider />
    
    <div className="blogs">
      

        <div className="h1-head"> Latest Blogs</div>
        <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
        <div  className="container" >
          {
            blog.slice(Next.from , Next.to).map((e,index)=> (
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