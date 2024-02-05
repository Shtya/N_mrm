import React from 'react'
import {motion } from "framer-motion" ;


const ServicesCard = ({e}) => {
  return (
    <motion.div className="box"    
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0  }}
        exit={{ opactiy: 0 }}
        >  
        <span></span>
        <span></span>
        <div className="innerImg"> <img src={e.img} alt="" /> </div>
        <div className="text"> 
            <div className="h"> {e.title} </div>
        </div>
    </motion.div> 
  )
}

export default ServicesCard