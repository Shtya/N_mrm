import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import { useNavigate } from 'react-router'


import Img1  from "../../assets/portfolio/img1.jpg"
import Img2  from "../../assets/portfolio/img2.jpg"
import Img3  from "../../assets/portfolio/img3.jpg"
import Img4  from "../../assets/portfolio/img4.jpg"
import Img5  from "../../assets/portfolio/1.jpg"
import Img6  from "../../assets/portfolio/2.jpg"
import Img7  from "../../assets/portfolio/3.jpg"
import Img8  from "../../assets/portfolio/4.jpg"
import Img9  from "../../assets/portfolio/5.jpg"
import Img10 from "../../assets/vediography/(1).jpg"
import Img11 from "../../assets/vediography/(2).jpg"
import Img12 from "../../assets/vediography/(3).jpg"
import Img13 from "../../assets/vediography/(4).jpg"
import Img14 from "../../assets/vediography/(5).jpg"
import Img15 from "../../assets/vediography/(6).jpg"
import Img16 from "../../assets/vediography/(7).jpg"



    const photo = [
      { img: Img1 , type: "photography"  , title:"Events photography" },
      { img: Img2 , type: "photography"  , title:"Fashion photography" },
      { img: Img3 , type: "photography"  , title:"Business Portraits & Headshots" },
      { img: Img4 , type: "photography"  , title:"Food photography" },
      { img: Img5 , type: "photography"  , title:"Product photography" },
      { img: Img6 , type: "photography"  , title:"Automotive photography" },
      { img: Img7 , type: "photography"  , title:"Hospitality photography" },
      { img: Img8 , type: "photography"  , title:"Real Estate photography" },
      { img: Img9 , type: "photography"  , title:"Real Estate photography" },
 
      { img: Img10 , type: "vediography"  , title:"Events photography" },
      { img: Img11 , type: "vediography"  , title:"Fashion photography" },
      { img: Img12 , type: "vediography"  , title:"Business Portraits & Headshots" },
      { img: Img13 , type: "vediography"  , title:"Food photography" },
      { img: Img14 , type: "vediography"  , title:"Product photography" },
      { img: Img15 , type: "vediography" , title:"Hospitality photography" },
      { img: Img16 , type: "vediography" , title:"Real Estate photography" },
      { img: Img1  , type: "vediography" , title:"Real Estate photography" },
    ]
    const header = [ {id:0 , category: "photography"} , {id:1 , category: "vediography"} ]


const Services = ({FixedImg}) => {
  const [active , setactive ] = useState(0) ;
  const [products , setproducts] = useState(photo) ;
  const [Listproducts , setListproducts] = useState([]) ;

  const activeTap = (id , cat)=>{
    setactive(id)
    let productData = products.filter(e => e.type == cat)
    setListproducts(productData)
  }
  useEffect(_=> { setListproducts(photo)  } ,[])



  const [type , settype ]= useState("photo")
  const navigat = useNavigate() ;
  
  return (
    <div  className='services'>
        <div className="bgCover3"  style={{background:`url(${FixedImg})`}}> </div>
        <div className="container">

                <div className="h1-head" onClick={_=> navigat("/services")}   style={{cursor:"pointer"}}> Our Services </div> 
                
                <div className="header"> 
                {
                  header.map((e,index)=> (
                    <li key={index} className={active == index ? "active" : ""} onClick={_=> activeTap(e.id , e.category)} > {e.category} </li>
                  ))
                }
                  {/* <li onClick={_=> handleCategoryChange("photo")}  className={`${type == "photo" ? "active" : ""}`}   >Photography</li> 
                  <li onClick={_=> handleCategoryChange("vedio")}  className={`${type == "vedio" ? "active" : ""}`}   >Vediography</li>  */}
                </div>


                <motion.div className="boxes" layout>

                    {Listproducts?.map((e,index)=> 
                    (
                      <AnimatePresence mode='wait' >
                      <motion.div className="box" key={index}   layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }} 
                      >  
                        <span></span>
                        <span></span>
                        <div className="innerImg"> <img src={e.img} alt="" /> </div>
                        <div className="text"> 
                            <div className="h"> {e.title} </div>
                        </div>
                    </motion.div> 
                    </AnimatePresence>
                    )
                    )}
                </motion.div>

        </div>
        <div className="bt" onClick={_=> navigat("/services")}> see more </div>
    </div>
  )
}

export default Services