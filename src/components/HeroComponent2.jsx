import React, { useEffect } from 'react'
import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import Img4 from "../assets/portfolio/img4.jpg"
import Img5 from "../assets/portfolio/3.jpg"
import Img6 from "../assets/portfolio/1.jpg"
import Img7 from "../assets/portfolio/2.jpg"

import FixedImg from "../assets/bg/4.webp"

const HeroComponent2 = () => {
    const slideData = [
        { img:Img1 , title:"Slide 1" , h1:"Exhibitions Conference" , h2 : "Slide Description 1"} ,
        { img:Img2 , title:"Slide 2" , h1:"Corporate Films" , h2 : "Slide Description 2"} ,
        { img:Img3 , title:"Slide 3" , h1:"Event Filming" , h2 : "Slide Description 3"} ,
        { img:Img4 , title:"Slide 4" , h1:"Behind-The Scene Videos" , h2 : "Slide Description 4"} ,
        { img:Img5 , title:"Slide 5" , h1:"Fashion Videography" , h2 : "Slide Description 5"} ,
        { img:Img6 , title:"Slide 6" , h1:"Promotional Videos" , h2 : "Slide Description 6"} ,
        { img:Img7 , title:"Slide 6" , h1:"Real Estate Product" , h2 : "Slide Description 7"} ,
    ]


    useEffect(_=>{
        let slides = document.querySelectorAll(".HeroComponent2 .slide");
        let index = 0 ;
        slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            slides.forEach((item) => {
            item.classList.remove("active");
            });

            slide.classList.add("active");
        });
        });
        
        setInterval(() => {
            if(index == 7) index = 0
            slides.forEach(e => e.classList.remove("active"))
            slides[index].classList.add("active")
            index ++ ;

        }, 5000);
    } ,[])


  return (
    <div className='HeroComponent2'>
        <div className="bgCover2"> <img src={FixedImg} alt="" /> </div>
         <section className="wrapper">
            <div className="slider">
                { slideData.map((e,index)=>(
                    <div className={`slide ${index == 3 ? "active" : ""}`} key={index}>
                        <img src={e.img} alt="" />
                        {/* <h1>{e.h1}</h1>
                        <div className="details">
                            <h2> {e.h1} </h2>
                            <p> {e.h2} </p>
                        </div> */}
                    </div>
                    )) }
            </div>
        </section>
    </div>
  )
}

export default HeroComponent2