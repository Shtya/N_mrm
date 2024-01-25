import React from 'react'
import photoImg1 from '../assets/services/1.jpg'
import photoImg2 from '../assets/services/2.jpg'


import FixedImg from '../assets/bg/36.jpg'
import Intro from "../assets/services/intro.jpg"
import BlockQoute from '../components/BlockQoute'


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
        <BlockQoute />
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

        
        
    </div>
  )
}

export default Services