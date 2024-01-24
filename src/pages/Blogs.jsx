import React, { useState } from 'react'
import Imgblog from "../assets/blogs/cover2.jpg"
import BlogIntro from "../assets/contact/intro.jpg"
import FixedImg from "../assets/bg/34.webp"

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
    const [Next , Setnext] =  useState({from:0 , to:6})
    const Pagination = (data) =>{
        Setnext(data)
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }
    
  return (
    <div className="blogs">
      <div className="coverIntro"> <img src={BlogIntro} alt="" /> </div>

    <div className="h1-head"> Latest Blogs</div>
    <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
    <div  className="container" >
      {
        blog.slice(Next.from , Next.to).map((e,index)=> (
      <div className="box" key={index}>

        <div className="coverImg">
          <img className="main" src={e.img} alt=""/>
          {/* <i  className="fa-solid second fa-share-from-square"></i> */}
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
      
    </div>

    <div className="pagination">
          <button   onClick={_=> Pagination({from:0 , to:6})}  className={`btn-nav left-btn `} >   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="left-icon">     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />   </svg> </button>
          <div className="page-numbers">
            <button  onClick={_=> Pagination({from:0 , to:6})}  className={`btn-page ${Next.from == 0 ? "btn-selected" : ""} `}    > 1</button>
            <button  onClick={_=> Pagination({from:6 , to:12})}  className={`btn-page ${Next.from == 6 ? "btn-selected" : ""} `}    > 2</button>
            <button  onClick={_=> Pagination({from:12 , to:18})}  className={`btn-page ${Next.from == 12 ? "btn-selected" : ""} `}    > 3</button>
          </div>
          <button onClick={_=>  Pagination({from:12 , to:18}) }  className={`btn-nav right-btn `}  > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="right-icon"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg> </button>
        </div>

  </div>
  )
}

export default Blogs