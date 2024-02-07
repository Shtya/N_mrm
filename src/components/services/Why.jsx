import React from 'react'
import ImageWhy from "../../assets/bg/test/1.jpg" ;
import FixedImg from "../../assets/bg/33.webp"

const data = [
    {title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, officiis!" , desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit officia nam similique voluptas incidunt laudantium, accusantium quia quisquam ullam."},
    {title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, officiis!" , desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit officia nam similique voluptas incidunt laudantium, accusantium quia quisquam ullam."},
    {title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, officiis!" , desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit officia nam similique voluptas incidunt laudantium, accusantium quia quisquam ullam."},
    {title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, officiis!" , desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit officia nam similique voluptas incidunt laudantium, accusantium quia quisquam ullam."},
]
const Why = () => {
  return (
    <div className='why'>
        <div className="bgCover2"><img src={FixedImg} alt="" /></div>
        <div className="h1-head"> Why Choose us?</div>
        <div className="container">
            <div className='boxes'>   {   data.slice(0,2).map((e,index)=>(
                    <div className="box" key={index}>
                            <div className="icon"> {e.Img} </div>
                            <div className="h3"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                    </div>
                )) }</div>

            <div className="coverImg"> <img src={ImageWhy} alt="" /> </div> 

            <div className='boxes'>{   data.slice(2,4).map((e,index)=>(
                    <div className="box" key={index}>
                            <div className="icon"> {e.Img} </div>
                            <div className="h3"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                    </div>
                )) }</div>
        </div>

    </div>
  )
}

export default Why