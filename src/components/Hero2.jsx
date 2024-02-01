import React, { useEffect } from 'react'
import Img1 from "../assets/portfolio/img1.jpg"
import Img2 from "../assets/portfolio/img2.jpg"
import Img3 from "../assets/portfolio/img3.jpg"
import Img4 from "../assets/portfolio/img4.jpg"


const Hero2 = () => {

    const itmes = [
        {path:"/" ,img:Img1 , h1:"LUNDEV" , h2:"DESIGN SLIDER" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img2 , h1:"LUNDEV" , h2:"DESIGN SLIDER" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img3 , h1:"LUNDEV" , h2:"DESIGN SLIDER" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img4 , h1:"LUNDEV" , h2:"DESIGN SLIDER" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
    ]

    const thumbnail = [
        {img:Img1 , h1 :"title" , h2:"description"},
        {img:Img2 , h1 :"title" , h2:"description"},
        {img:Img3 , h1 :"title" , h2:"description"},
        {img:Img4 , h1 :"title" , h2:"description"},
    ]

    useEffect(_=>{
        //step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

if(thumbnailBorderDom){
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}

let timeRunning = 7000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}
    },[])


  return (
    <div className='Hero2'> 
        <div className="carousel">

        <div className="list">
            {
                itmes.map((e,index)=>(
                     <div className="item" key={index}>
                        <img src={e.img} />
                        <div className="content">
                            <div className="author">{e.h1}</div>
                            <div className="title">{e.h2} </div>
                            <div className="topic">{e.h3}</div>
                            <div className="des"> {e.desc} </div>
                        </div>
                    </div>
                ))
            }
           
                 
        </div>

        <div className="thumbnail">
            {
                thumbnail.map((e,index)=>(
                    <div className="item" key={index}>
                        <img src={e.img} />
                        <div className="content">
                            <div className="title"> {e.h1}</div>
                            <div className="description"> {e.h2} </div>
                        </div>
                    </div>
                ))
            }
            
            
        </div>


        <div className="arrows">
            <button id="prev"> {`<`} </button>
            <button id="next"> {`>`} </button>
        </div>

        <div className="time"></div>
    </div>
    </div>
  )
}

export default Hero2