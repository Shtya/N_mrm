import React, { useState } from 'react'
// import FixedImg from "../../assets/bg/33.jpg"
import photoImg1 from '../../assets/services/1.jpg'
import photoImg2 from '../../assets/services/2.jpg'
import photoImg3 from '../../assets/services/3.jpg'
import photoImg4 from '../../assets/services/4.jpg'
import photoImg5 from '../../assets/services/5.jpg'
import photoImg6 from '../../assets/services/6.jpg'
import photoImg7 from '../../assets/services/7.jpg'
import photoImg8 from '../../assets/services/8.jpg'
import photoImg9 from '../../assets/services/9.jpg'
import photoImg10 from '../../assets/services/10.jpg'
import photoImg11 from '../../assets/services/11.jpg'
import photoImg12 from '../../assets/services/12.jpg'
import photoImg13 from '../../assets/services/13.jpg'
import photoImg14 from '../../assets/services/14.jpg'




    const photo = [
      { img: photoImg1   , title:"Events photography" },
      { img: photoImg2   , title:"Fashion photography" },
      { img: photoImg3   , title:"Business Portraits & Headshots" },
      { img: photoImg4   , title:"Food photography" },
      { img: photoImg5   , title:"Product photography" },
      { img: photoImg6   , title:"Automotive photography" },
      { img: photoImg7   , title:"Hospitality photography" },
      { img: photoImg8   , title:"Real Estate photography" },
      { img: photoImg9   , title:"Real Estate photography" },
    ]
    const vedio = [
      { img: photoImg10   , title:"Events photography" },
      { img: photoImg11   , title:"Fashion photography" },
      { img: photoImg12   , title:"Business Portraits & Headshots" },
      { img: photoImg13   , title:"Food photography" },
      { img: photoImg14   , title:"Product photography" },
      { img: photoImg6   , title:"Hospitality photography" },
      { img: photoImg7   , title:"Real Estate photography" },
      { img: photoImg8   , title:"Real Estate photography" },
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
        <div className="bgCover2"><img src={FixedImg} alt="" /></div>
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