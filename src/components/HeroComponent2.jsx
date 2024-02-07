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
        { img:Img1 } ,
        { img:Img2 } ,
        { img:Img3 } ,
        { img:Img4 } ,
        { img:Img5 } ,
        { img:Img5 } ,
    ]


    useEffect(_=>{
        let slides = document.querySelectorAll(".HeroComponent2 .slide");
        let index = 2 ;
        slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            slides.forEach((item) => {
            item.classList.remove("active");
            });

            slide.classList.add("active");
        });
        });
        
        setInterval(() => {
            if(index == 5) index = 0
            slides.forEach(e => e.classList.remove("active"))
            slides[index].classList.add("active")
            index ++ ;

        }, 7000);
    } ,[])


  return (
    <div className='HeroComponent2'>
        <div className="bgCover2"> <img src={FixedImg} alt="" /> </div>
         <section className="wrapper">
            <div className="slider">
                { slideData.map((e,index)=>(
                    <div className={`slide ${index == 2 ? "active" : ""}`} key={index}>
                        <img src={e.img} alt="" />
                    </div>
                    )) }
            </div>
        </section>
    </div>
  )
}

export default HeroComponent2