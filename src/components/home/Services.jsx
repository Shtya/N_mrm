import React, { useState } from 'react'
// import FixedImg from "../../assets/bg/33.webp"

import photoImg4 from '../../assets/services/4.webp'




    const photo = [
      { img: photoImg4   , title:"Events photography" },
      { img: photoImg4   , title:"Fashion photography" },
      { img: photoImg4   , title:"Business Portraits & Headshots" },
      { img: photoImg4   , title:"Food photography" },
      { img: photoImg4   , title:"Product photography" },
      { img: photoImg4   , title:"Automotive photography" },
      { img: photoImg4   , title:"Hospitality photography" },
      { img: photoImg4   , title:"Real Estate photography" },
      { img: photoImg4   , title:"Real Estate photography" },
    ]
    const vedio = [
      { img: photoImg4   , title:"Events photography" },
      { img: photoImg4   , title:"Fashion photography" },
      { img: photoImg4   , title:"Business Portraits & Headshots" },
      { img: photoImg4   , title:"Food photography" },
      { img: photoImg4   , title:"Product photography" },
      { img: photoImg4  , title:"Hospitality photography" },
      { img: photoImg4  , title:"Real Estate photography" },
      { img: photoImg4  , title:"Real Estate photography" },
    ]



const Services = ({FixedImg}) => {
  const [data , setdata] = useState(photo)
  const [type , settype ]= useState("photo")
  const handleClick = (e)=>{
    e == "photo" ? setdata(photo) : setdata(vedio) ;
    settype(e)
  }
  return (
    <div className='services'>
        <div className="bgCover3" style={{background:`url(${FixedImg})`}}> </div>
        <div className="container">

                <div className="h1-head"> Our Services </div> 
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
    </div>
  )
}

export default Services