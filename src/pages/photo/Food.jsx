import React, { useState } from 'react'
import BlockQoute from '../../components/BlockQoute'

import IMGQoute from "../../assets/bg/bg5.webp"
import IMG1 from "../../assets/bg/34.webp"
import IMG2 from "../../assets/bg/1.webp"

import photoImg1 from '../../assets/GALLWEY/1.webp'
import photoImg2 from '../../assets/GALLWEY/2.webp'

import Contact from '../../components/home/Contact-us'
import Testimonials from '../../components/home/Testimonials'

import FixedImg from "../../assets/bg/34.webp" ;
import Divider from '../../components/Divider'
import HeroComponent from '../../components/HeroComponent'
import slide_image_1 from '../../assets/portfolio/img1.jpg';
import slide_image_2 from '../../assets/portfolio/img2.jpg';
import slide_image_3 from '../../assets/portfolio/img3.jpg';
import slide_image_4 from '../../assets/portfolio/img4.jpg';
import slide_image_5 from '../../assets/portfolio/img1.jpg';
import slide_image_6 from '../../assets/portfolio/img3.jpg';
import slide_image_7 from '../../assets/portfolio/img4.jpg';
const HeroImages = [ {img : slide_image_1 }, {img : slide_image_2 }, {img : slide_image_3 }, {img : slide_image_4 }, {img : slide_image_5 }, {img : slide_image_6 }, {img : slide_image_7 },
]


const photo = [
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
    { img: photoImg1 },
    { img: photoImg2 },
  ]


const Food = () => {
  const [count , setcount] = useState({from : 0 , to : 10})
  const [showImg , setshowImg] = useState()

  return (
    <div className='Services1 services-pages'>
        <HeroComponent images={HeroImages} />

        <BlockQoute classN="bgCover" Img={IMG1} Img2={IMGQoute}  />

        <Divider />
        <div className="photography">
        <div className="bgCover4" style={{background:`url("${IMG2}")`}} ></div>
        <div className="container">
            <div className="h1-head"> Our Fashion Work </div> 
            <div className="boxes">
                {photo.slice(count.from , count.to).map((e,index)=> (
                    <div className="box" key={index}> 
                    <span></span>
                    <span></span>
                        <div className="innerImg"> <img onClick={_=> setshowImg(e.img)}  src={e.img} alt="" /> </div>
                        </div>
                ))}
            </div>
        </div>

        {
          showImg && <div className="showImagePreview">
            <div className="coverImg">
            <img className='showImage' src={showImg} alt="image" />
            <i onClick={_=> setshowImg("")}  className="fa-solid fa-xmark close"></i>
            </div>
            <ul>
            {photo.map((e,index)=> ( <img key={index} onClick={_=> setshowImg(e.img)} src={e.img} /> ))}
            </ul>
          </div>
        }

        {count.to == 20 ? "" : <div className="bt" onClick={_=> setcount({from:0 , to : 20})}>see more</div>}

        </div>

        <Divider />
        <Testimonials FixedImg={FixedImg} classN="bgCover" />

        <Divider />
        <BlockQoute Img2={IMGQoute}  Img={IMG2} classN="bgCover2" alt={true} />

        <Divider />
        <Contact  notbg={true}   />


    </div>
  )
}

export default Food