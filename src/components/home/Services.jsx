import React from 'react'
import FixedImg from "../../assets/bg/20.webp"
import photoImg1 from '../../assets/home/video/  (1).webp'
import photoImg2 from '../../assets/home/video/  (2).webp'
import photoImg3 from '../../assets/home/video/  (3).webp'
import photoImg4 from '../../assets/home/video/  (4).webp'
import photoImg5 from '../../assets/home/video/  (5).webp'
import photoImg6 from '../../assets/home/video/  (1).webp'
import photoImg7 from '../../assets/home/video/  (2).webp'
import photoImg8 from '../../assets/home/video/  (3).webp'




    const photo = [
      { img: photoImg1   , title:"Events photography" },
      { img: photoImg2   , title:"Fashion photography" },
      { img: photoImg3   , title:"Business Portraits & Headshots" },
      { img: photoImg4   , title:"Food photography" },
      { img: photoImg5   , title:"Product photography" },
      { img: photoImg6   , title:"Automotive photography" },
      { img: photoImg7   , title:"Hospitality photography" },
      { img: photoImg8   , title:"Real Estate photography" },
      { img: photoImg4   , title:"Real Estate photography" },
    ]



const Services = () => {
  return (
    <div className='services'>
        <div className="bgCover2"><img src={FixedImg} alt="" /></div>
        <div className="container">

                <div className="h1-head"> Our Services </div> 
                <div className="boxes">
                    {photo.map((e,index)=> (
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