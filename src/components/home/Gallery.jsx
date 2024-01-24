import React, { useEffect, useState } from 'react'
import { motion , AnimatePresence } from "framer-motion";



import Img1 from "../../assets/home/test/  (1).webp"
import Img2 from "../../assets/home/test/  (2).webp"
import Img3 from "../../assets/home/test/  (3).webp"
import Img4 from "../../assets/home/test/  (4).webp"
import Img5 from "../../assets/home/test/  (5).webp"
import Img6 from "../../assets/home/test/  (6).webp"
import Img7 from "../../assets/home/test/  (7).webp"
import Img8 from "../../assets/home/test/  (8).webp"
import Img9 from "../../assets/home/test/  (9).webp"
import Header from './Header';

const data = [
    {img:Img2 , type:'all Fashion' },
    {img:Img3 , type:'all Lifestyle' },
    {img:Img4 , type:'all Nature' },
    {img:Img5 , type:'all Portraits' },
    {img:Img6 , type:'all Video' },
    {img:Img8 , type:'all Fashion' },
    {img:Img9 , type:'all Lifestyle' },
    {img:Img1 , type:'all Nature' },
    {img:Img8 , type:'all Portraits' },
    {img:Img9 , type:'all Video' },
    {img:Img2 , type:'all Fashion' },
    {img:Img3 , type:'all Lifestyle' },
    {img:Img4 , type:'all Nature' },
    {img:Img5 , type:'all Portraits' },
    {img:Img6 , type:'all Video' },
    {img:Img8 , type:'all Fashion' },
    {img:Img9 , type:'all Lifestyle' },
    {img:Img1 , type:'all Nature' },
    {img:Img8 , type:'all Portraits' },
    {img:Img9 , type:'all Video' },
    {img:Img2 , type:'all Fashion' },
    {img:Img3 , type:'all Lifestyle' },
    {img:Img4 , type:'all Nature' },
    {img:Img5 , type:'all Portraits' },
    {img:Img6 , type:'all Video' },
    {img:Img8 , type:'all Fashion' },
    {img:Img9 , type:'all Lifestyle' },
    {img:Img1 , type:'all Nature' },
    {img:Img8 , type:'all Portraits' },
    {img:Img9 , type:'all Video' },
]

const header = [
    {name:"ALL" , type:'all'},
    {name:"Fashion" , type:'Fashion'},
    {name:"Lifestyle" , type:'Lifestyle'},
    {name:"Nature" , type:'Nature'},
    {name:"Portraits" , type:'Portraits'},
    {name:"Video" , type:'Video'},
]

const Gallery = () => {



const [GalleryData , setGallery] = useState(data)
const [type , settype] = useState("all")

const handleFilter = (ele) => {
setGallery(data.filter(e => e.type?.includes(ele))) 
settype(ele)
}


  return (
    <div className='gallery'>
        <div className="container">

        <ul className="header" >  {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))}  </ul>
        
        <div className="images">
        <AnimatePresence>
            {
                GalleryData.slice(0,6).map((e,index)=> ( 
                <motion.div layout transition={{duration:.9}} initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
                  className="coverImg" key={index}> 
                    <img src={e.img} alt="images" /> 
                </motion.div> ))
            }
        </AnimatePresence>
        </div>
        </div>
    </div>
  )
}

export default Gallery


