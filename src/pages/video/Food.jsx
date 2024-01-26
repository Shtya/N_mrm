import React from 'react'
import SERVICES_INTRO from '../../assets/GALLWEY/intro.webp' 
import BlockQoute from '../../components/BlockQoute'

import photoImg1 from '../../assets/GALLWEY/1.webp'
import photoImg2 from '../../assets/GALLWEY/2.webp'

import Contact from '../../components/home/Contact-us'
import Testimonials from '../../components/home/Testimonials'

import FixedImg from "../../assets/bg/34.webp" ;
import FixedImg1 from "../../assets/bg/38.webp" ;
import Divider from '../../components/Divider'

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


const Food = () => {
  return (
    <div className='Services1 services-pages'>
        <div className="coverIntro"> <img src={SERVICES_INTRO} alt="" /> </div>
        <Divider />
        <BlockQoute />

        <Divider />
        <div className="photography">
        <div className="bgCover2"><img src={FixedImg1} alt="" /></div>
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
        <Testimonials FixedImg={FixedImg} classN="bgCover" />
        <Divider />
        <Contact  FixedImg={FixedImg1}  />


    </div>
  )
}

export default Food