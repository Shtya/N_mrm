import React from 'react'
import AboutImg from "../../assets/home/why.webp"
import FixedImg from "../../assets/bg/34.webp"


const data = [
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
]

const About = () => {
  return (
    <div className='about f-dir'>
        <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
        <div className="container">
            <div className="boxes">
                {
                    data.map((e,index) => ( <div className="box" key={index}> 
                        <div className="h3"> {e.title}  </div>
                        <div className="p"> {e.desc} </div>
                     </div> ))
                }
            </div>
            <div className="coverImg"> <img src={AboutImg} alt="" /> </div>

        </div>
    </div>
  )
}

export default About