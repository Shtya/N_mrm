import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import { useNavigate } from 'react-router'


import ServicesCard from './ServicesCard'
import {ImageServices} from "./Images" ;

const header = [ {id:0 , category: "photography"} , {id:1 , category: "vediography"} ]


const Services = ({FixedImg}) => {
  const [data , setdata] = useState(ImageServices)
  const [active , setactive] = useState(0) ;

  useEffect(_=>{
    if(active == 0 ) return setdata(ImageServices.filter(e => e.type == "photography"))
    if(active == 1 ) return setdata(ImageServices.filter(e => e.type == "vediography"))
  } ,[active])


  const navigat = useNavigate() ;
  
  return (
    <div  className='services'>
        <div className="bgCover3"  style={{background:`url(${FixedImg})`}}> </div>
        <div className="container">
            <div className="h1-head" onClick={_=> navigat("/services")}   style={{cursor:"pointer"}}> Our Services </div> 
            
            <div className="header"> {header.map((e,index)=> (   
              <li key={index} className={active == index ? "active" : ""}  onClick={_=> setactive(e.id)} > {e.category} </li>    )) 
              }</div>

            <motion.div layout className="boxes" >
              <AnimatePresence >
                {data.map((e,index)=> {
                  return (
                    <motion.div key={index} className="box" layout animate={{ opacity: 1 }} initial={{ opacity: 0  }} exit={{ opactiy: 0 }} >  
                      <span/> <span/>
                      <div className="innerImg"> <img src={e.img} alt="" /> </div>
                      <div className="text">  <div className="h"> {e.title} </div> </div>
                  </motion.div> )
                } )}
                </AnimatePresence>
            </motion.div>

        </div>
        <div className="bt" onClick={_=> navigat("/services")}> see more </div>
    </div>
  )
}

export default Services