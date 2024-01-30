import React from 'react'
import photoImg1 from '../assets/services/1.webp'
import photoImg2 from '../assets/services/2.webp'


import FixedImg from '../assets/bg/40.webp'
import FixedImg1 from '../assets/bg/34.webp'
import Intro from "../assets/services/intro.webp"
import BlockQoute from '../components/BlockQoute'
import Divider from '../components/Divider'
import Why from '../components/services/Why'
import Contact from '../components/home/Contact-us'
import Testimonials from '../components/home/Testimonials'

import IMGQoute from "../assets/bg/8.webp"


    const photo = [
      { img: photoImg1  , title:"Events photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg2  , title:"Fashion photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg1  , title:"Business Portraits & Headshots" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg2  , title:"Food photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg1  , title:"Product photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg2  , title:"Automotive photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg1  , title:"Hospitality photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg2  , title:"Real Estate photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      { img: photoImg1  , title:"Real Estate photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
    ]
    const vedio = [
        { img: photoImg1  , title:"Events photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg2  , title:"Fashion photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg1  , title:"Business Portraits & Headshots" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg2  , title:"Food photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg1  , title:"Product photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg2  , title:"Automotive photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg1  , title:"Hospitality photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
        { img: photoImg2  , title:"Real Estate photography" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit magni nemo quia ratione molestias, nostrum minima officia aut iure quaerat quos expedita pariatur ad! Harum optio cumque nostrum." },
      ]
const Services = () => {
  return (
    <div className='Services-Page'>
        <div className="coverIntro"> <img src={Intro} alt="" /> </div>
        <Divider />

        <BlockQoute  classN=""  alt={true} Img2={IMGQoute}   />
        <Divider />

        <div className="photography">
        <div className="bgCover2"><img src={FixedImg} alt="" /></div>
        <div className="container">
            <div className="h1-head"> Our photography Services </div> 
            <div className="boxes">
                {photo.map((e,index)=> (
                    <div className="box" key={index}> 
                    <span></span>
                    <span></span>
                        <div className="innerImg"> <img src={e.img} alt="" /> </div>
                        <div className="text"> 
                            <div className="h"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                            <div className="bt">learn more </div>
                        </div>
                        </div>
                ))}
            </div>
        </div>

        </div>
        <Divider />

        <div className="video">
        <div className="bgCover2"><img src={FixedImg} alt="" /></div>
        <div className="container">
            <div className="h1-head"> Our Videography Services </div> 
            <div className="boxes">
                {vedio.map((e,index)=> (
                    <div className="box" key={index}> 
                    <span></span>
                    <span></span>
                        <div className="innerImg"> <img src={e.img} alt="" /> </div>
                        <div className="text"> 
                            <div className="h"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                            <div className="bt"> learn more </div>
                        </div>
                        </div>
                ))}
            </div>
        </div>

        </div>
        <Divider />
        

        <Why />
        <Divider />

        <BlockQoute classN="bgCover2" Img={FixedImg} />
        <Divider />


        <Contact FixedImg={FixedImg1} classN="bgCover" />
        <Divider />


        <Testimonials FixedImg={FixedImg} classN="bgCover2" />



    </div>
  )
}

export default Services