import React, { useEffect } from 'react'
import gsap from 'gsap'


import AboutImg from "../assets/home/why.webp"
import AboutImg2 from "../assets/home/welcome.jpg"
const data = [
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ipsum dolor sit." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
    {icon: <i className="fa-brands fa-slack"></i> , title : "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ipsum dolor sit." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias culpa earum voluptas ut neque, eos amet nam necessitatibus architecto quisquam eligendi aperiam in doloremque, totam dolorem nulla nobis. Aliquid."},
]


const HeroComponent3 = () => {

  return (
    <div className='HeroComponent3'>

        <div className="test">
            <div className="container">
                <div className="coverImg"> <img src={AboutImg} alt="" /> </div>
                <div className="text">
                    <div className="h2"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, et. </div>
                    <div className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque placeat, libero animi ipsam aliquid illo rerum dolore minima non!</div>
                </div>
            </div>

        </div>

        <div className="test">
            <div className="container">
                <div className="coverImg"> <img src={AboutImg} alt="" /> </div>
                <div className="text">
                    <div className="h2"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, et. </div>
                    <div className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque placeat, libero animi ipsam aliquid illo rerum dolore minima non!</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default HeroComponent3