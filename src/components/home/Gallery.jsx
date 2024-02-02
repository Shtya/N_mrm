import React, { useEffect, useState } from 'react'
import { motion , AnimatePresence } from "framer-motion";



import Img1 from "../../assets/portfolio/img1.jpg"
import Img2 from "../../assets/portfolio/img2.jpg"
import Img3 from "../../assets/portfolio/img3.jpg"
import Img4 from "../../assets/portfolio/img4.jpg"
import Img5 from "../../assets/portfolio/img1.jpg"
import Img6 from "../../assets/portfolio/img2.jpg"
import Img7 from "../../assets/portfolio/img3.jpg"
import Img8 from "../../assets/portfolio/img4.jpg"
import Img9 from "../../assets/portfolio/img1.jpg"


const data = [
    {img:Img1 , type:'all Fashion' },
    {img:Img2 , type:'all Lifestyle' },
    {img:Img3 , type:'all Nature' },
    {img:Img4 , type:'all Portraits' },
    {img:Img5 , type:'all Video' },
    {img:Img6 , type:'all Fashion' },
    {img:Img7 , type:'all Lifestyle' },
    {img:Img8 , type:'all Nature' },
    {img:Img9 , type:'all Portraits' },
    {img:Img1 , type:'all Video' },
    {img:Img2 , type:'all Fashion' },
    {img:Img3 , type:'all Lifestyle' },
    {img:Img4 , type:'all Nature' },
    {img:Img5 , type:'all Portraits' },
    {img:Img6 , type:'all Video' },
    {img:Img7 , type:'all Fashion' },
    {img:Img8 , type:'all Lifestyle' },
    {img:Img9 , type:'all Nature' },
    {img:Img1 , type:'all Portraits' },
    {img:Img2 , type:'all Video' },
    {img:Img3 , type:'all Fashion' },
    {img:Img4 , type:'all Lifestyle' },
    {img:Img5 , type:'all Nature' },
    {img:Img6 , type:'all Portraits' },
    {img:Img7 , type:'all Video' },
    {img:Img8 , type:'all Fashion' },
    {img:Img9 , type:'all Lifestyle' },
    {img:Img1 , type:'all Nature' },
    {img:Img5 , type:'all Portraits' },
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


// showImage
const [showImg , setshowImg] = useState()
const handleImg = (e)=>{
    setshowImg(e)
}



  return (
    <div className='gallery'>
        <div className="container">
        <div className="h1-head">OUR GAllery</div>
        <ul className="header" >  {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))}  </ul>
        
        <div className="images">
        <AnimatePresence>
            {
                GalleryData.slice(0,9).map((e,index)=> ( 
                <motion.div layout transition={{duration:.9}} initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
                  className="coverImg" key={index}> 
                    <img src={e.img} key={index} onClick={_=> setshowImg(e.img)} alt="images" /> 
                </motion.div> ))
            }
        </AnimatePresence>
        </div>

        {
          showImg && <div className="showImagePreview">
            <div className="coverImg">
            <img className='showImage' src={showImg} alt="image" />
            <i onClick={_=> setshowImg("")}  className="fa-solid fa-xmark close"></i>
            </div>
            <ul>
            {GalleryData.map((e,index)=> ( <img onClick={_=> setshowImg(e.img)}key={index} src={e.img} /> ))}
            </ul>
          </div>
        }


        </div>
    </div>
  )
}

export default Gallery


