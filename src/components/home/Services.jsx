import React, { useState } from 'react'
// import FixedImg from "../../assets/bg/33.webp"

import photoImg4 from '../../assets/services/4.webp'
import { useNavigate } from 'react-router'

import Img1 from "../../assets/portfolio/img1.jpg"
import Img2 from "../../assets/portfolio/img2.jpg"
import Img3 from "../../assets/portfolio/img3.jpg"
import Img4 from "../../assets/portfolio/img4.jpg"



    const photo = [
      { img: Img1   , title:"Events photography" },
      { img: Img2   , title:"Fashion photography" },
      { img: Img3   , title:"Business Portraits & Headshots" },
      { img: Img4   , title:"Food photography" },
      { img: Img1   , title:"Product photography" },
      { img: Img2   , title:"Automotive photography" },
      { img: Img3   , title:"Hospitality photography" },
      { img: Img4   , title:"Real Estate photography" },
      { img: Img1   , title:"Real Estate photography" },
    ]
    const vedio = [
      { img: Img3   , title:"Events photography" },
      { img: Img4   , title:"Fashion photography" },
      { img: Img1   , title:"Business Portraits & Headshots" },
      { img: Img2   , title:"Food photography" },
      { img: Img3   , title:"Product photography" },
      { img: Img4  , title:"Hospitality photography" },
      { img: Img1  , title:"Real Estate photography" },
      { img: Img2  , title:"Real Estate photography" },
    ]



const Services = ({FixedImg}) => {
  const [data , setdata] = useState(photo)
  const [type , settype ]= useState("photo")
  const navigat = useNavigate() ;

  const handleClick = (e)=>{
    e == "photo" ? setdata(photo) : setdata(vedio) ;
    settype(e)
  }
  return (
    <div className='services'>
        <div className="bgCover3"  style={{background:`url(${FixedImg})`}}> </div>
        <div className="container">

                <div className="h1-head" onClick={_=> navigat("/services")}   style={{cursor:"pointer"}}> Our Services </div> 
                <div className="header"> 
                  <li className={`${type == "photo" ? "active" : ""}`} onClick={_=> handleClick("photo")}>Photography</li>
                  <li className={`${type == "vedio" ? "active" : ""}`} onClick={_=> handleClick("vedio")}>Vediography</li>
                </div>
                <div className="boxes">
                    {data.map((e,index)=> (
                        <div className="box" key={index}> 
                        <span></span>
                        <span></span>
                            <div className="innerImg"> <img src={e.img} alt="" /> </div>
                            <div className="text"> 
                                <div className="h"> {e.title} </div>
                            </div>
                         </div>
                    ))}
                </div>

        </div>
        <div className="bt" onClick={_=> navigat("/services")}> see more </div>
    </div>
  )
}

export default Services