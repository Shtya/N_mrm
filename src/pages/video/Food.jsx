import React, { useState } from 'react'
import BlockQoute from '../../components/BlockQoute'

import IMGQoute from "../../assets/bg/bg8.webp"
import IMG1 from "../../assets/bg/12.webp"
import IMG2 from "../../assets/bg/1.webp"


import Contact from '../../components/home/Contact-us'
import Testimonials from '../../components/home/Testimonials'

import FixedImg from "../../assets/bg/34.webp" ;
import Divider from '../../components/Divider'
import HeroComponent from '../../components/HeroComponent'

import vedio1 from "../../assets/vediography/(1).jpg" ;
import vedio2 from "../../assets/vediography/(2).jpg" ;
import vedio3 from "../../assets/vediography/(3).jpg" ;
import vedio4 from "../../assets/vediography/(4).jpg" ;
import vedio5 from "../../assets/vediography/(5).jpg" ;
import vedio6 from "../../assets/vediography/(6).jpg" ;
import vedio7 from "../../assets/vediography/(7).jpg" ;
import vedio8 from "../../assets/vediography/(8).jpg" ;

const photo = [
    { img: vedio1 , id:"1" },
    { img: vedio2 , id:"2" },
    { img: vedio3 , id:"3" },
    { img: vedio4 , id:"4" },
    { img: vedio5 , id:"5" },
    { img: vedio6 , id:"6" },
    { img: vedio7 , id:"7" },
    { img: vedio8 , id:"8" },
    { img: vedio1 , id:"9" },
    { img: vedio2 , id:"10" },
    { img: vedio3 , id:"11" },
    { img: vedio4 , id:"12" },
    { img: vedio1 , id:"13" },
    { img: vedio2 , id:"14" },
    { img: vedio3 , id:"15" },
    { img: vedio4 , id:"16" },
    { img: vedio5 , id:"17" },
    { img: vedio6 , id:"18" },
    { img: vedio7 , id:"19" },
    { img: vedio8 , id:"20" },
  ]



const Food = () => {
  const [count , setcount] = useState({from : 0 , to : 10})
  const [showImg , setshowImg] = useState()

  

  return (
    <div className='Services1 services-pages'>
        {/* <div className="coverIntro"> <img src={SERVICES_INTRO} alt="" /> </div> */}
        <HeroComponent images={photo} />

        {/* <Divider /> */}
        <BlockQoute classN="bgCover" Img={IMG1} Img2={IMGQoute}  />

        <Divider />
        <div className="photography">
        <div className="bgCover4" style={{background:`url("${IMG2}")`}} ></div>
        <div className="container">
            <div className="h1-head"> Our Fashion Work </div> 
            <div className="boxes">
                {photo.slice(count.from , count.to).map((e,index)=> (
                    <div className="box" key={index} id={e.id}> 
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